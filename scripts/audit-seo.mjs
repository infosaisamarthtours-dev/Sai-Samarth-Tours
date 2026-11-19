import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('====================================================');
console.log('   SAI SAMARTH TOURS - COMPLETE SEO AUDIT ENGINE    ');
console.log('====================================================\n');

// 1. Gather all HTML files in dist
function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Auditing ${htmlFiles.length} rendered HTML files in dist/...\n`);

const auditResults = [];
const descriptionMap = new Map();

for (const filePath of htmlFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(distDir, filePath).replace(/\\/g, '/');
  const route = '/' + relPath.replace(/(index)?\.html$/, '').replace(/\/$/, '');
  const cleanRoute = route === '' ? '/' : route;

  // Check if it's a redirect file (e.g. legacy short ID route)
  const isRedirect = /http-equiv=["']refresh["']/i.test(content) || /content=["'][0-9]+;\s*url=/i.test(content);

  // Extract <title>
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Extract meta description
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : '';

  // Extract canonical
  const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                         content.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  // Extract robots
  const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : '';

  // Extract all <h1> tags
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];

  // Extract all <img> tags (skip 1x1 tracking pixels with role="presentation" or aria-hidden)
  const imgTags = content.match(/<img[^>]+>/gi) || [];
  const missingAltImgs = [];
  for (const img of imgTags) {
    if (/aria-hidden=["']true["']/i.test(img) || /role=["']presentation["']/i.test(img)) continue;
    const altMatch = img.match(/alt=["']([^"']*)["']/i);
    if (!altMatch || !altMatch[1].trim()) {
      missingAltImgs.push(img);
    }
  }

  // Check structured data
  const jsonLdBlocks = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  let hasValidJsonLd = false;
  let schemaTypes = [];
  for (const block of jsonLdBlocks) {
    const raw = block.replace(/<script[^>]*>|<\/script>/gi, '').trim();
    try {
      const parsed = JSON.parse(raw);
      hasValidJsonLd = true;
      if (Array.isArray(parsed)) {
        parsed.forEach(item => item['@type'] && schemaTypes.push(item['@type']));
      } else if (parsed['@graph']) {
        parsed['@graph'].forEach(item => item['@type'] && schemaTypes.push(item['@type']));
      } else if (parsed['@type']) {
        schemaTypes.push(parsed['@type']);
      }
    } catch (e) {
      // invalid json-ld
    }
  }

  // Track descriptions for indexable pages only (deduplicated by unique route)
  if (!isRedirect && description) {
    if (!descriptionMap.has(description)) {
      descriptionMap.set(description, new Set());
    }
    descriptionMap.get(description).add(cleanRoute);
  }

  auditResults.push({
    route: cleanRoute,
    isRedirect,
    title,
    titleOk: title.length >= 10,
    description,
    descOk: description.length >= 30,
    canonical,
    canonicalOk: canonical.startsWith('https://saisamarthtours.com'),
    robots,
    h1Count: h1Matches.length,
    h1Text: h1Matches[0] ? h1Matches[0].replace(/<[^>]+>/g, '').trim().slice(0, 60) : '',
    missingAltCount: missingAltImgs.length,
    hasValidJsonLd,
    schemaTypes: [...new Set(schemaTypes.flat())]
  });
}

// Evaluate duplicate descriptions
const duplicateDescriptions = [];
for (const [desc, routesSet] of descriptionMap.entries()) {
  const routes = Array.from(routesSet);
  if (routes.length > 1) {
    duplicateDescriptions.push({ desc: desc.slice(0, 70) + '...', routes });
  }
}

// Check broken internal links
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const routeMatches = Array.from(appContent.matchAll(/path=['"]([^'"]+)['"]/g)).map(m => m[1]);
const slugsContent = fs.readFileSync('src/utils/slugs.ts', 'utf8');
const slugEntries = Array.from(slugsContent.matchAll(/['"]([a-zA-Z0-9_-]+)['"]\s*:\s*['"]([a-zA-Z0-9_-]+)['"]/g));
const slugMap = new Map();
for (const [, id, slug] of slugEntries) slugMap.set(id, slug);

const pkgsContent = fs.readFileSync('src/data/packages.ts', 'utf8');
const pkgIds = Array.from(pkgsContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);
const pkgExplicitSlugs = Array.from(pkgsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);
const allPackageSlugs = [...pkgIds, ...pkgExplicitSlugs, ...Array.from(slugMap.values())];

const blogsDir = 'src/data/blogs';
const blogIds = [];
const blogSlugs = [];
if (fs.existsSync(blogsDir)) {
  for (const f of fs.readdirSync(blogsDir)) {
    if (f.endsWith('.ts')) {
      const c = fs.readFileSync(path.join(blogsDir, f), 'utf8');
      const bId = c.match(/id:\s*['"]([^'"]+)['"]/);
      const bSlug = c.match(/slug:\s*['"]([^'"]+)['"]/);
      if (bId) blogIds.push(bId[1]);
      if (bSlug) blogSlugs.push(bSlug[1]);
    }
  }
}

const destsContent = fs.readFileSync('src/data/destinations.ts', 'utf8');
const destIds = Array.from(destsContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);

const validPaths = new Set([
  '/',
  ...routeMatches.filter(r => !r.includes(':')),
  ...allPackageSlugs.map(s => '/package/' + s),
  ...blogIds.map(id => '/blog/' + id),
  ...blogSlugs.map(s => '/blog/' + s),
  ...destIds.map(id => '/destinations/' + id)
]);

const brokenLinks = [];
function scanDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const toMatches = Array.from(content.matchAll(/to=['"](\/[^'"#?]*)/g)).map(m => m[1]);
      const hrefMatches = Array.from(content.matchAll(/href=['"](\/[^'"#?]*)/g)).map(m => m[1]);
      const mdMatches = Array.from(content.matchAll(/\]\((\/[^)"#?]*)/g)).map(m => m[1]);
      const allLinks = [...toMatches, ...hrefMatches, ...mdMatches];
      for (const link of allLinks) {
        if (link.match(/\.(webp|jpg|jpeg|png|svg|ico|xml|txt|json|pdf)$/i)) continue;
        if (link === '/url') continue;
        const normalized = link.replace(/\/$/, '') || '/';
        if (!validPaths.has(normalized)) {
          brokenLinks.push({ file: path.relative(rootDir, full).replace(/\\/g, '/'), link });
        }
      }
    }
  }
}
scanDir('src');

// Indexable routes (non-redirect)
const indexableRoutes = auditResults.filter(r => !r.isRedirect);
const redirectRoutes = auditResults.filter(r => r.isRedirect);

const missingTitles = indexableRoutes.filter(r => !r.titleOk);
const missingCanonicals = indexableRoutes.filter(r => !r.canonicalOk);
const multipleH1s = indexableRoutes.filter(r => r.h1Count > 1);
const missingH1s = indexableRoutes.filter(r => r.h1Count === 0);
const missingAlts = indexableRoutes.filter(r => r.missingAltCount > 0);

console.log('=== AUDIT SUMMARY METRICS ===');
console.log(`Total HTML files examined:     ${auditResults.length}`);
console.log(`Indexable Public Routes:        ${indexableRoutes.length}`);
console.log(`Redirect / Alias Routes:        ${redirectRoutes.length}`);
console.log(`Missing SEO Titles:             ${missingTitles.length}`);
console.log(`Missing Canonical Tags:         ${missingCanonicals.length}`);
console.log(`Duplicate Meta Descriptions:    ${duplicateDescriptions.length}`);
console.log(`Multiple H1 Tags (>1):          ${multipleH1s.length}`);
console.log(`Missing H1 Tags (0):            ${missingH1s.length}`);
console.log(`Missing Image Alt Tags:         ${missingAlts.length}`);
console.log(`Broken Internal Links:          ${brokenLinks.length}`);

// Write JSON report for programmatic inspection
fs.writeFileSync('scripts/seo-audit-report.json', JSON.stringify({
  summary: {
    totalHtmlFiles: auditResults.length,
    indexableRoutes: indexableRoutes.length,
    redirectRoutes: redirectRoutes.length,
    missingTitles: missingTitles.length,
    missingCanonicals: missingCanonicals.length,
    duplicateDescriptions: duplicateDescriptions.length,
    multipleH1s: multipleH1s.length,
    missingH1s: missingH1s.length,
    missingAlts: missingAlts.length,
    brokenLinks: brokenLinks.length
  },
  duplicateDescriptions,
  brokenLinks,
  routes: indexableRoutes.map(r => ({
    route: r.route,
    title: r.title,
    description: r.description,
    canonical: r.canonical,
    h1: r.h1Text,
    h1Count: r.h1Count,
    schemas: r.schemaTypes
  }))
}, null, 2), 'utf8');

console.log('\nAudit complete! Detailed report written to scripts/seo-audit-report.json');
