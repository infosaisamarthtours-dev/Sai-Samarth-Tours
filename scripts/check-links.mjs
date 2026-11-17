import fs from 'fs';
import path from 'path';

// 1. Get all valid routes from App.tsx
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const routeMatches = Array.from(appContent.matchAll(/path=['"]([^'"]+)['"]/g)).map(m => m[1]);

// 2. Get all package URLs and slugs from slugs.ts and packages.ts
const slugsContent = fs.readFileSync('src/utils/slugs.ts', 'utf8');
const slugEntries = Array.from(slugsContent.matchAll(/['"]([a-zA-Z0-9_-]+)['"]\s*:\s*['"]([a-zA-Z0-9_-]+)['"]/g));
const slugMap = new Map();
for (const [, id, slug] of slugEntries) {
  slugMap.set(id, slug);
}

const pkgsContent = fs.readFileSync('src/data/packages.ts', 'utf8');
const pkgIds = Array.from(pkgsContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);
const pkgExplicitSlugs = Array.from(pkgsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);

const allPackageSlugs = [
  ...pkgIds,
  ...pkgExplicitSlugs,
  ...Array.from(slugMap.values())
];

// 3. Get all blog slugs and ids
const blogsContent = fs.readFileSync('src/data/blogs.ts', 'utf8');
const blogIds = Array.from(blogsContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);
const blogSlugs = Array.from(blogsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);

// Also scan all individual blog files in src/data/blogs/
const blogsDir = 'src/data/blogs';
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

// 4. Get all destination ids
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

console.log(`Total valid internal routes registered: ${validPaths.size}`);

// Scan all files in src/ for internal links: to="...", href="/..."
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
        if (link === '/url') continue; // documentation example in richText.tsx
        const normalized = link.replace(/\/$/, '') || '/';
        if (!validPaths.has(normalized)) {
          brokenLinks.push({ file: path.relative(process.cwd(), full).replace(/\\/g, '/'), link, normalized });
        }
      }
    }
  }
}

scanDir('src');
console.log(`Total broken internal links found: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  console.log(JSON.stringify(brokenLinks, null, 2));
}
