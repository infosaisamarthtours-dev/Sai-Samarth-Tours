import fs from 'fs';
import path from 'path';

function getFiles(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res.push(...getFiles(full));
    else if (f.endsWith('.html')) res.push(full);
  }
  return res;
}

const files = getFiles('dist');
const dupes = [];

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('http-equiv="refresh"')) continue; // Skip redirects
  const t = c.match(/<title[^>]*>([^<]*)<\/title>/i);
  const h = c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (t && h) {
    const title = t[1].trim();
    const h1 = h[1].replace(/<[^>]+>/g, '').trim();
    if (title === h1) {
      dupes.push({ file: f, title, h1 });
    }
  }
}

console.log(`Found ${dupes.length} pages where title === h1`);
if (dupes.length > 0) {
  console.log(dupes);
}
