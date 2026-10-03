import fs from 'fs';

function checkOg(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const getTag = (prop) => {
    const match = html.match(new RegExp(`<meta property="${prop}" content="(.*?)"`, 'i'));
    return match ? match[1] : 'NOT FOUND';
  };
  console.log(`=== ${filePath} ===`);
  console.log('og:title:', getTag('og:title'));
  console.log('og:description:', getTag('og:description').slice(0, 90) + '...');
  console.log('og:image:', getTag('og:image'));
  console.log('og:url:', getTag('og:url'));
  console.log('og:type:', getTag('og:type'));
}

checkOg('dist/package/shirdi-tour-package-from-bangalore/index.html');
checkOg('dist/destinations/kashi/index.html');
checkOg('dist/tour-packages/index.html');
