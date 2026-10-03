import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');

const titleMatch = html.match(/<title>(.*?)<\/title>/i);
const descMatch = html.match(/<meta name="description" content="(.*?)"/i);
const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/i);
const h1Matches = [...html.matchAll(/<h1[\s\S]*?>([\s\S]*?)<\/h1>/gi)];
const h2Matches = [...html.matchAll(/<h2[\s\S]*?>([\s\S]*?)<\/h2>/gi)];
const h3Matches = [...html.matchAll(/<h3[\s\S]*?>([\s\S]*?)<\/h3>/gi)];
const linkMatches = [...html.matchAll(/<a\s+[^>]*href="([^"]+)"/gi)];

console.log('=== SEO AUDIT VERIFICATION ===');
console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING', `(${titleMatch ? titleMatch[1].length : 0} chars)`);
console.log('Meta Description:', descMatch ? descMatch[1] : 'MISSING', `(${descMatch ? descMatch[1].length : 0} chars)`);
console.log('Canonical URL:', canonicalMatch ? canonicalMatch[1] : 'MISSING');
console.log('H1 Headings Found:', h1Matches.length);
if (h1Matches.length > 0) {
  console.log('  -> H1 text:', h1Matches[0][1].replace(/<[^>]+>/g, '').trim());
}
console.log('H2 Headings Found:', h2Matches.length);
h2Matches.forEach((h, i) => console.log(`  -> H2 [${i+1}]:`, h[1].replace(/<[^>]+>/g, '').trim()));
console.log('H3 Headings Found:', h3Matches.length);
console.log('Total Internal Links Found:', linkMatches.length);
console.log('Schema JSON-LD included:', html.includes('application/ld+json'));
