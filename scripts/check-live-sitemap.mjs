import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sitemap = fs.readFileSync(path.join(rootDir, 'public/sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

async function checkUrl(url) {
  return new Promise(resolve => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const canMatch = body.match(/rel=["']canonical["']\s+href=["']([^"']+)["']/i) || 
                         body.match(/href=["']([^"']+)["']\s+rel=["']canonical["']/i);
        const titleMatch = body.match(/<title>([^<]+)<\/title>/i);
        const canonical = canMatch ? canMatch[1] : null;
        const title = titleMatch ? titleMatch[1] : null;
        resolve({
          url,
          status: res.statusCode,
          location: res.headers.location || null,
          canonical,
          title,
          isPrerendered: body.includes('data-prerender="true"') || body.includes('<h1>')
        });
      });
    }).on('error', err => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log(`Checking ${urls.length} sitemap URLs against live website...`);
  const results = [];
  // Process in small batches
  for (let i = 0; i < urls.length; i += 5) {
    const batch = urls.slice(i, i + 5);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
    process.stdout.write(`Checked ${results.length}/${urls.length}\r`);
  }
  console.log('\n--- SCAN COMPLETED ---');

  const non200 = results.filter(r => r.status !== 200);
  const redirected = results.filter(r => r.location);
  const canonicalMismatch = results.filter(r => r.status === 200 && r.canonical && r.canonical !== r.url);
  const missingCanonical = results.filter(r => r.status === 200 && !r.canonical);

  console.log(`Non-200 URLs: ${non200.length}`);
  if (non200.length > 0) console.log(non200);

  console.log(`Redirected URLs: ${redirected.length}`);
  if (redirected.length > 0) console.log(redirected);

  console.log(`Canonical Mismatch URLs: ${canonicalMismatch.length}`);
  if (canonicalMismatch.length > 0) console.log(canonicalMismatch);

  console.log(`Missing Canonical: ${missingCanonical.length}`);

  // Group by title to detect duplicate content
  const titleMap = {};
  for (const r of results) {
    if (r.title) {
      titleMap[r.title] = titleMap[r.title] || [];
      titleMap[r.title].push(r.url);
    }
  }

  const duplicates = Object.entries(titleMap).filter(([title, uList]) => uList.length > 1);
  console.log(`Duplicate Title/Content Groups: ${duplicates.length}`);
  for (const [title, uList] of duplicates) {
    console.log(`Title: "${title}" (${uList.length} URLs):\n  ${uList.join('\n  ')}`);
  }
}

run();
