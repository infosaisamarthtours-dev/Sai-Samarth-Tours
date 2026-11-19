import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapUrls = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`Checking ${sitemapUrls.length} sitemap URLs against dist/ files...\n`);

const issues = [];

for (const url of sitemapUrls) {
  // Parse path
  const parsed = new URL(url);
  const pathname = parsed.pathname; // e.g. /tour-packages or /package/shirdi...

  let filePath;
  if (pathname === '/' || pathname === '') {
    filePath = path.join(distDir, 'index.html');
  } else {
    // Check both dist/pathname/index.html and dist/pathname.html
    const dirIndex = path.join(distDir, pathname.replace(/^\//, ''), 'index.html');
    const directHtml = path.join(distDir, pathname.replace(/^\//, '') + '.html');
    if (fs.existsSync(dirIndex)) {
      filePath = dirIndex;
    } else if (fs.existsSync(directHtml)) {
      filePath = directHtml;
    } else {
      issues.push({ url, issue: 'FILE_NOT_FOUND_404', expectedPath: dirIndex });
      continue;
    }
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Check for redirect meta/script
  if (html.includes('http-equiv="refresh"') || html.includes('window.location.replace') || html.includes('Redirecting...')) {
    const targetMatch = html.match(/url=([^"'>\s]+)/i) || html.match(/replace\(['"]([^'"]+)['"]\)/);
    issues.push({ url, issue: 'REDIRECTS_TO_DIFFERENT_PAGE', target: targetMatch ? targetMatch[1] : 'unknown', filePath });
    continue;
  }

  // Check canonical
  const canMatch = html.match(/<link rel=["']canonical["']\s+href=["']([^"']+)["']/i) || 
                   html.match(/<link href=["']([^"']+)["']\s+rel=["']canonical["']/i);
  const canonical = canMatch ? canMatch[1] : null;

  if (!canonical) {
    issues.push({ url, issue: 'MISSING_CANONICAL', filePath });
  } else if (canonical !== url) {
    issues.push({ url, issue: 'CANONICAL_MISMATCH', sitemapUrl: url, pageCanonical: canonical, filePath });
  }

  // Check noindex
  if (html.includes('content="noindex') || html.includes('content=\'noindex')) {
    issues.push({ url, issue: 'MARKED_NOINDEX', filePath });
  }
}

console.log(`=== DIAGNOSIS RESULT ===`);
console.log(`Total Sitemap URLs: ${sitemapUrls.length}`);
console.log(`Total Issues Found: ${issues.length}\n`);

if (issues.length > 0) {
  console.log('Issues details:');
  console.log(JSON.stringify(issues, null, 2));
} else {
  console.log('All sitemap URLs match dist/ HTML files and have identical canonical tags!');
}
