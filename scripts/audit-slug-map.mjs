import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read packages.ts
const content = fs.readFileSync(path.join(rootDir, 'src/data/packages.ts'), 'utf8');

// Match packages
const packageBlocks = content.split(/{\s*id:\s*['"]/g).slice(1);

const slugsContent = fs.readFileSync(path.join(rootDir, 'src/utils/slugs.ts'), 'utf8');

console.log(`Analyzing ${packageBlocks.length} packages in packages.ts...\n`);

for (const block of packageBlocks) {
  const idMatch = block.match(/^([a-zA-Z0-9_-]+)['"]/);
  if (!idMatch) continue;
  const id = idMatch[1];
  
  const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : '';

  // Check if ID is in PACKAGE_SLUG_MAP
  const inSlugMap = slugsContent.includes(`'${id}':`);

  if (!inSlugMap) {
    console.log(`MISSING in PACKAGE_SLUG_MAP: id="${id}", title="${title}"`);
  }
}
