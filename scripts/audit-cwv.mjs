import { spawn } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetUrl = 'http://localhost:4173/';
const debugPort = 9222;

const isMobile = process.argv.includes('--mobile');
const windowSize = isMobile ? '390,844' : '1440,900';

console.log(`Starting headless Chrome (${isMobile ? 'Mobile: 390x844' : 'Desktop: 1440x900'}) on port`, debugPort);
const chrome = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${debugPort}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--user-data-dir=C:\\Users\\srika\\AppData\\Local\\Temp\\chrome-perf-test',
  '--disable-gpu',
  `--window-size=${windowSize}`
]);

// Wait 1.5s for Chrome to spin up
await new Promise(r => setTimeout(r, 1500));

try {
  const versionRes = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
  const versionData = await versionRes.json();
  console.log('Chrome version:', versionData['Browser']);

  const newTabRes = await fetch(`http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(targetUrl)}`, { method: 'PUT' });
  const newTab = await newTabRes.json();
  const pageWsUrl = newTab.webSocketDebuggerUrl;

  if (!pageWsUrl) {
    throw new Error('No target page found in Chrome');
  }

  console.log('Connecting to DevTools protocol...');
  const ws = new WebSocket(pageWsUrl);
  let id = 1;
  const callbacks = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      callbacks.get(msg.id)(msg);
      callbacks.delete(msg.id);
    }
  };

  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      callbacks.set(msgId, (msg) => {
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  };

  await new Promise((resolve) => ws.onopen = resolve);

  await send('Page.enable');
  await send('Network.enable');
  await send('Runtime.enable');
  await send('Performance.enable');

  if (isMobile) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true
    });
  }

  // Install CWV PerformanceObserver before page scripts run
  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: `
      window.__cwv = { lcp: null, lcpElement: null, cls: 0, inp: 0, interactions: [] };
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            window.__cwv.lcp = Math.round(lastEntry.startTime);
            window.__cwv.lcpElement = (lastEntry.element?.tagName || 'UNKNOWN') + 
              (lastEntry.element?.id ? '#' + lastEntry.element.id : '') + 
              (lastEntry.element?.src ? ' (' + lastEntry.element.src.split('/').pop() + ')' : '');
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });

        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              window.__cwv.cls += entry.value;
            }
          }
        }).observe({ type: 'layout-shift', buffered: true });

        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const d = Math.round(entry.duration);
            if (d > window.__cwv.inp) window.__cwv.inp = d;
            window.__cwv.interactions.push({ name: entry.name, duration: d });
          }
        }).observe({ type: 'event', buffered: true, durationThreshold: 16 });
      } catch (e) {
        console.error('Observer setup error:', e);
      }
    `
  });

  console.log('Navigating to', targetUrl);
  await send('Page.navigate', { url: targetUrl });

  console.log('Waiting 3.5s for initial load, LCP and hydration...');
  await new Promise(r => setTimeout(r, 3500));

  // Simulate user interactions to test INP (clicking CTA button, tabs, scrolling)
  await send('Runtime.evaluate', {
    expression: `(() => {
      // Click explore button
      const btn = document.querySelector('#hero button');
      if (btn) {
        btn.click();
      }
      // Scroll down smoothly
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    })()`
  });

  await new Promise(r => setTimeout(r, 1500));

  // Run in-page CWV evaluation script
  const evalResult = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const nav = performance.getEntriesByType('navigation')[0] || {};
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(p => p.name === 'first-contentful-paint');
      const fcp = fcpEntry ? fcpEntry.startTime : null;

      // Layout shift calculation
      let cls = 0;
      const shifts = [];
      const shiftEntries = performance.getEntriesByType('layout-shift') || [];
      for (const entry of shiftEntries) {
        if (!entry.hadRecentInput) {
          cls += entry.value;
          shifts.push({ value: entry.value, time: entry.startTime });
        }
      }

      // Resources summary
      const resources = performance.getEntriesByType('resource');
      let jsBytes = 0, cssBytes = 0, imgBytes = 0;
      let jsCount = 0, imgCount = 0;
      for (const r of resources) {
        if (r.initiatorType === 'script' || r.name.endsWith('.js') || r.name.includes('.js?')) {
          jsBytes += r.transferSize || 0;
          jsCount++;
        } else if (r.initiatorType === 'img' || r.name.match(/\\.(webp|png|jpg|jpeg|svg)/i)) {
          imgBytes += r.transferSize || 0;
          imgCount++;
        } else if (r.initiatorType === 'link' || r.name.endsWith('.css')) {
          cssBytes += r.transferSize || 0;
        }
      }

      // Check hero element
      const hero = document.getElementById('hero');
      const heroImg = hero ? hero.querySelector('img') : null;

      return {
        cwv: window.__cwv,
        ttfb: nav.responseStart ? Math.round(nav.responseStart - nav.requestStart) : null,
        domInteractive: Math.round(nav.domInteractive),
        domComplete: Math.round(nav.domComplete),
        loadEventEnd: Math.round(nav.loadEventEnd),
        fcp: fcp ? Math.round(fcp) : null,
        cls: Math.round((window.__cwv?.cls || cls) * 10000) / 10000,
        shiftCount: shifts.length,
        heroFound: !!hero,
        heroImgSrc: heroImg ? heroImg.currentSrc || heroImg.src : null,
        heroImgComplete: heroImg ? heroImg.complete : false,
        resourceSummary: {
          totalResources: resources.length,
          jsCount,
          jsTransferredKb: Math.round(jsBytes / 1024),
          imgCount,
          imgTransferredKb: Math.round(imgBytes / 1024),
          cssTransferredKb: Math.round(cssBytes / 1024)
        }
      };
    })()`
  });

  console.log('\n================ CORE WEB VITALS AUDIT RESULT ================');
  console.log(JSON.stringify(evalResult.result.value, null, 2));
  console.log('===============================================================\n');

  ws.close();
} catch (err) {
  console.error('Audit error:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
