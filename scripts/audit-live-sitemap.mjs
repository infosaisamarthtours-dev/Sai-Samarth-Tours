import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sitemap = fs.readFileSync(path.join(rootDir, 'public/sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

function fetchHeader(url) {
  return new Promise(resolve => {
    const req = https.request(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const canMatch = data.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                         data.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
        resolve({
          url,
          status: res.statusCode,
          location: res.headers.location,
          canonical: canMatch ? canMatch[1] : null
        });
      });
    });
    req.on('error', e => resolve({ url, status: 'ERROR', error: e.message }));
    req.end();
  });
}

async function run() {
  console.log(`Auditing live status and canonicals for all ${urls.length} URLs in sitemap.xml...\n`);
  const problemUrls = [];

  for (const url of urls) {
    const res = await fetchHeader(url);
    const isRedirect = res.status >= 300 && res.status < 400;
    const isError = res.status >= 400 || res.status === 'ERROR';
    const isCanonicalMismatch = res.canonical && res.canonical !== url && !url.endsWith('/') && (res.canonical !== url + '/');

    if (isRedirect || isError || isCanonicalMismatch) {
      problemUrls.push({
        url,
        status: res.status,
        location: res.location || null,
        canonical: res.canonical || null,
        reasons: [
          isRedirect ? `Redirects (Status ${res.status}) to ${res.location}` : null,
          isError ? `Error Status ${res.status}` : null,
          isCanonicalMismatch ? `Canonical mismatch (points to ${res.canonical})` : null
        ].filter(Boolean)
      });
    }
  }

  console.log(`Found ${problemUrls.length} problem URLs in sitemap.xml!\n`);
  for (const p of problemUrls) {
    console.log(`URL: ${p.url}`);
    console.log(`  Reasons: ${p.reasons.join(' | ')}`);
  }
}

run();
