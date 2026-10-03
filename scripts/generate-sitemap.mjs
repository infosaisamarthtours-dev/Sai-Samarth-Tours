import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const domain = 'https://saisamarthtours.com';
const today = new Date().toISOString().split('T')[0];

// Import package slugs map
const packageSlugsMap = {
  'shirdi-regular': 'shirdi-tour-package-from-bangalore',
  'shirdi-via-pune': 'shirdi-via-pune-tour-package-from-bangalore',
  'shirdi-via-mumbai': 'shirdi-via-mumbai-tour-package-from-bangalore',
  'shirdi-2-jyothirlinga': 'shirdi-with-2-jyotirlinga-tour-package-from-bangalore',
  'shirdi-3-jyothirlinga': 'shirdi-with-3-jyotirlinga-tour-package-from-bangalore',
  'kashi-ayodhya-prayagraj': 'kashi-ayodhya-prayagraj-tour-package-from-bangalore',
  'kashi-ayodhya': 'kashi-ayodhya-tour-package-from-bangalore',
  'kholapur-pandarpur': 'kolhapur-pandharpur-tour-package-from-bangalore',
  'puri-jagannath': 'puri-jagannath-konark-tour-package-from-bangalore',
  'kamakhya': 'kamakhya-temple-tour-package-from-bangalore',
  'indore-ujjain': 'indore-ujjain-omkareshwar-tour-package-from-bangalore',
  'vaishnodevi': 'vaishnodevi-golden-temple-tour-package-from-bangalore',
  'baidyanath': 'baidyanath-dham-tour-package-from-bangalore',
  'rameshwaram': 'rameshwaram-madurai-kanyakumari-tour-package-from-bangalore',
  'gujarat': 'grand-gujarat-somnath-dwarka-tour-package-from-bangalore',
  'nepal': 'nepal-muktinath-pashupatinath-tour-package-from-bangalore',
  'kashmir': 'kashmir-tour-package-from-bangalore',
  'kerala': 'kerala-tour-package-from-bangalore',
  'leh-ladakh': 'leh-ladakh-tour-package-from-bangalore',
  'rajasthan': 'rajasthan-tour-package-from-bangalore',
  'himachal': 'himachal-pradesh-tour-package-from-bangalore',
  'goa': 'goa-beach-tour-package-from-bangalore',
  'andaman': 'andaman-islands-tour-package-from-bangalore',
  'golden-triangle': 'golden-triangle-delhi-agra-jaipur-tour-package-from-bangalore',
  'thailand-regular': 'thailand-tour-package-from-bangalore',
  'singapore-malaysia': 'singapore-malaysia-tour-package-from-bangalore',
  'malaysia-regular': 'malaysia-tour-package-from-bangalore',
  'maldives': 'maldives-tour-package-from-bangalore',
  'bhutan': 'bhutan-tour-package-from-bangalore',
  'sri-lanka': 'sri-lanka-tour-package-from-bangalore',
  'bali': 'bali-tour-package-from-bangalore',
  'dubai': 'dubai-tour-package-from-bangalore',
  'europe': 'europe-tour-package-from-bangalore'
};

// Import packages and blogs
const packagesFile = fs.readFileSync(path.join(rootDir, 'src/data/packages.ts'), 'utf8');

// Extract package IDs from packages.ts
const packageIdMatches = [...packagesFile.matchAll(/id:\s*['"]([a-zA-Z0-9_-]+)['"]/g)];
const uniquePackageIds = Array.from(new Set(packageIdMatches.map(m => m[1])));

// Extract blog slugs from src/data/blogs directory
const blogsDir = path.join(rootDir, 'src/data/blogs');
const blogFiles = fs.readdirSync(blogsDir).filter(f => f.endsWith('.ts') && f !== 'types.ts');
let blogSlugMatches = [];
for (const file of blogFiles) {
  const content = fs.readFileSync(path.join(blogsDir, file), 'utf8');
  const matches = [...content.matchAll(/slug:\s*['"]([a-zA-Z0-9_-]+)['"]/g)];
  blogSlugMatches.push(...matches.map(m => m[1]));
}
const uniqueBlogSlugs = Array.from(new Set(blogSlugMatches));

console.log(`Found ${uniquePackageIds.length} packages and ${uniqueBlogSlugs.length} blog posts.`);

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/tour-packages', priority: '0.9', changefreq: 'daily' },
  { url: '/tour-packages-from-bangalore', priority: '0.9', changefreq: 'daily' },
  { url: '/pilgrimage-tour-packages', priority: '0.9', changefreq: 'weekly' },
  { url: '/pilgrimage-tours-from-bangalore', priority: '0.9', changefreq: 'weekly' },
  { url: '/shirdi-tour-packages', priority: '0.9', changefreq: 'weekly' },
  { url: '/shirdi-tour-packages-from-bangalore', priority: '0.9', changefreq: 'weekly' },
  { url: '/domestic-tour-packages', priority: '0.9', changefreq: 'weekly' },
  { url: '/domestic-tour-packages-from-bangalore', priority: '0.9', changefreq: 'weekly' },
  { url: '/international-tour-packages', priority: '0.9', changefreq: 'weekly' },
  { url: '/international-tour-packages-from-bangalore', priority: '0.9', changefreq: 'weekly' },
  { url: '/senior-citizen-tour-packages', priority: '0.95', changefreq: 'weekly' },
  { url: '/family-tour-packages-from-bangalore', priority: '0.95', changefreq: 'weekly' },
  { url: '/group-tour-packages-from-bangalore', priority: '0.9', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/cancellation-policy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms-of-use', priority: '0.5', changefreq: 'yearly' },
  { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' }
];

const destinationRoutes = [
  'shirdi',
  'kashi',
  'ayodhya',
  'jyotirlinga',
  'rameshwaram',
  'chardham',
  'tirupati',
  'kashmir',
  'kerala',
  'goa',
  'rajasthan',
  'ladakh',
  'andaman',
  'thailand',
  'dubai',
  'malaysia',
  'maldives'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Add static routes
for (const page of staticRoutes) {
  xml += `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
}

// Add destination hubs
for (const dest of destinationRoutes) {
  xml += `  <url>
    <loc>${domain}/destinations/${dest}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
}

// Add canonical package pages (SEO slugs)
for (const id of uniquePackageIds) {
  const slug = packageSlugsMap[id] || `${id}-tour-package-from-bangalore`;
  xml += `  <url>
    <loc>${domain}/package/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
}

// Add blog posts
for (const slug of uniqueBlogSlugs) {
  xml += `  <url>
    <loc>${domain}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
}

xml += `</urlset>\n`;

// Write to public/sitemap.xml
const publicSitemapPath = path.join(rootDir, 'public/sitemap.xml');
fs.writeFileSync(publicSitemapPath, xml, 'utf8');

// Also write to dist/sitemap.xml if dist exists
const distDir = path.join(rootDir, 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
}

console.log(`Generated canonical sitemap.xml successfully at: ${publicSitemapPath}`);
