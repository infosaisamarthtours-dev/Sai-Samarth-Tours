import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const packagesFile = fs.readFileSync(path.join(rootDir, 'src/data/packages.ts'), 'utf8');

// Match packages
const packageBlocks = packagesFile.split(/\n\s*\{\s*\n\s*id:\s*['"]/g).slice(1);

console.log(`Parsed ${packageBlocks.length} package blocks.`);

const descriptions = new Map();
const titles = new Map();

packageBlocks.forEach((block, idx) => {
  const idMatch = block.match(/^([a-zA-Z0-9_-]+)['"]/);
  const id = idMatch ? idMatch[1] : `pkg-${idx}`;

  const titleMatch = block.match(/title:\s*['"`](.*?)['"`],/);
  const title = titleMatch ? titleMatch[1] : '';

  const descMatch = block.match(/description:\s*['"`]([\s\S]*?)['"`],/);
  const desc = descMatch ? descMatch[1].trim() : '';

  if (title) {
    if (!titles.has(title)) titles.set(title, []);
    titles.get(title).push(id);
  }

  if (desc) {
    if (!descriptions.has(desc)) descriptions.set(desc, []);
    descriptions.get(desc).push(id);
  }
});

console.log('\n--- TITLE DUPLICATION CHECK ---');
let dupTitles = 0;
for (const [title, ids] of titles.entries()) {
  if (ids.length > 1) {
    dupTitles++;
    console.log(`[DUPLICATE TITLE] "${title}" across: ${ids.join(', ')}`);
  }
}
if (dupTitles === 0) console.log('✓ All package titles are 100% unique.');

console.log('\n--- DESCRIPTION DUPLICATION CHECK ---');
let dupDescs = 0;
for (const [desc, ids] of descriptions.entries()) {
  if (ids.length > 1) {
    dupDescs++;
    console.log(`[DUPLICATE DESC] "${desc.slice(0, 50)}..." across: ${ids.join(', ')}`);
  }
}
if (dupDescs === 0) console.log('✓ All package descriptions are 100% unique.');

// Also check blogs
const blogsFile = fs.readFileSync(path.join(rootDir, 'src/data/blogs.ts'), 'utf8');
const blogTitles = [...blogsFile.matchAll(/title:\s*['"`](.*?)['"`],/g)].map(m => m[1]);
const blogExcerpts = [...blogsFile.matchAll(/excerpt:\s*['"`](.*?)['"`],/g)].map(m => m[1]);

console.log('\n--- BLOG DUPLICATION CHECK ---');
const uniqueBlogTitles = new Set(blogTitles);
const uniqueBlogExcerpts = new Set(blogExcerpts);
console.log(`Blogs total: ${blogTitles.length}, unique titles: ${uniqueBlogTitles.size}, unique excerpts: ${uniqueBlogExcerpts.size}`);
