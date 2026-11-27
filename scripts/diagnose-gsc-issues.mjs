import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('=== INVESTIGATING GSC ISSUES ===\n');

// 1. Check for 'noindex' in all dist HTML files
console.log('--- 1. SCANNING FOR NOINDEX TAGS ---');
const allDistFiles = [];
function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      allDistFiles.push(fullPath);
    }
  }
}
walkDir(distDir);

const noindexPages = [];
for (const file of allDistFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('noindex')) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    noindexPages.push({ file: rel, match: content.match(/<meta[^>]*content="[^"]*noindex[^"]*"[^>]*>/i)?.[0] || 'noindex' });
  }
}
console.log(`Found ${noindexPages.length} files with noindex:`, noindexPages);

// 2. Check all redirects in dist/ (meta refresh)
console.log('\n--- 2. SCANNING FOR REDIRECTS IN DIST ---');
const redirectPages = [];
for (const file of allDistFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const refreshMatch = content.match(/<meta http-equiv="refresh" content="[^"]*url=([^"]+)"/i);
  if (refreshMatch) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    redirectPages.push({ from: rel, to: refreshMatch[1] });
  }
}
console.log(`Found ${redirectPages.length} redirect files in dist:`);
redirectPages.forEach(r => console.log(`  ${r.from} -> ${r.to}`));

// 3. Check for Redirect Errors (loops, self-redirects, malformed URLs)
console.log('\n--- 3. CHECKING FOR REDIRECT ERRORS ---');
const redirectErrors = [];
for (const r of redirectPages) {
  // normalize
  const cleanFrom = '/' + r.from.replace(/(index)?\.html$/, '').replace(/\/$/, '');
  const cleanTo = r.to.replace(/\/$/, '');
  if (cleanFrom === cleanTo) {
    redirectErrors.push({ issue: 'Self-redirect loop', from: cleanFrom, to: cleanTo });
  }
}
console.log(`Found ${redirectErrors.length} redirect errors:`, redirectErrors);

// 4. Check for canonical tags in all dist HTML files
console.log('\n--- 4. CHECKING FOR MISSING OR MISMATCHED CANONICALS ---');
const canonicalIssues = [];
for (const file of allDistFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/i);
  const rel = path.relative(distDir, file).replace(/\\/g, '/');
  if (!canonicalMatch) {
    canonicalIssues.push({ file: rel, issue: 'Missing canonical' });
  }
}
console.log(`Found ${canonicalIssues.length} canonical issues:`, canonicalIssues);

// 5. Check sitemap for redirects or 404s
console.log('\n--- 5. CHECKING SITEMAP FOR REDIRECTS OR NON-EXISTENT PAGES ---');
const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

const sitemapIssues = [];
for (const loc of locMatches) {
  const urlPath = loc.replace('https://saisamarthtours.com', '');
  const cleanPath = urlPath === '' ? 'index.html' : (urlPath.startsWith('/') ? urlPath.slice(1) : urlPath);
  
  // check if file exists in dist
  const distFile1 = path.join(distDir, cleanPath, 'index.html');
  const distFile2 = path.join(distDir, `${cleanPath}.html`);
  const distFile3 = path.join(distDir, cleanPath);
  
  const exists = fs.existsSync(distFile1) || fs.existsSync(distFile2) || fs.existsSync(distFile3);
  if (!exists) {
    sitemapIssues.push({ loc, issue: '404 - Not in dist' });
  } else {
    // Check if it's a redirect
    const targetFile = fs.existsSync(distFile1) ? distFile1 : (fs.existsSync(distFile2) ? distFile2 : distFile3);
    const content = fs.readFileSync(targetFile, 'utf8');
    if (content.includes('http-equiv="refresh"')) {
      sitemapIssues.push({ loc, issue: 'Redirect page included in sitemap!' });
    }
  }
}
console.log(`Found ${sitemapIssues.length} sitemap issues:`, sitemapIssues);

// 6. Check App.tsx redirect routes
console.log('\n--- 6. CHECKING APP.TSX REDIRECTS ---');
const appFile = fs.readFileSync(path.join(rootDir, 'src/App.tsx'), 'utf8');
const navigateMatches = [...appFile.matchAll(/<Route path="([^"]+)" element={<Navigate to="([^"]+)"/g)];
console.log(`Found ${navigateMatches.length} <Navigate> redirects in App.tsx:`);
navigateMatches.forEach(m => console.log(`  ${m[1]} -> ${m[2]}`));
