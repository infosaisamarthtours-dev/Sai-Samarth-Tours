import fs from 'fs';
import path from 'path';

const dir = 'src/data/blogs';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

const matches = [];
for (const f of files) {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const stMatch = c.match(/seoTitle:\s*['"]([^'"]+)['"]/);
  const tMatch = c.match(/title:\s*['"]([^'"]+)['"]/);
  if (stMatch && tMatch && stMatch[1].trim() === tMatch[1].trim()) {
    matches.push({ file: f, seoTitle: stMatch[1], title: tMatch[1] });
  }
}

console.log(`Found ${matches.length} blogs where seoTitle === title`);
if (matches.length > 0) console.log(matches);
