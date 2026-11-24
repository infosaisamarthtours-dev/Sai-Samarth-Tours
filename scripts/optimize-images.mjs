import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Recursively find all image files
function getImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getImages(fullPath));
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeImages() {
  const images = getImages(publicDir);
  console.log(`Found ${images.length} images in public directory.`);
  
  let totalSavedBytes = 0;
  let optimizedCount = 0;

  for (const imgPath of images) {
    const stat = fs.statSync(imgPath);
    const sizeKb = Math.round(stat.size / 1024);
    
    // Only optimize images larger than 180KB to focus on heavy LCP offenders
    if (sizeKb <= 180) continue;

    const ext = path.extname(imgPath).toLowerCase();
    const relPath = path.relative(publicDir, imgPath).replace(/\\/g, '/');

    try {
      // Read file into memory buffer so Windows file lock is never held on imgPath
      const inputBuffer = fs.readFileSync(imgPath);
      const metadata = await sharp(inputBuffer).metadata();

      // Constrain width to 1440px max without enlargement
      const targetWidth = metadata.width && metadata.width > 1440 ? 1440 : undefined;

      let pipeline = sharp(inputBuffer);
      if (targetWidth) {
        pipeline = pipeline.resize({ width: targetWidth, withoutEnlargement: true });
      }

      let buffer;
      if (ext === '.webp') {
        buffer = await pipeline.webp({ quality: 80, effort: 6 }).toBuffer();
      } else if (ext === '.jpg' || ext === '.jpeg') {
        buffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      } else if (ext === '.png') {
        buffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
      }

      if (buffer && buffer.length < stat.size) {
        const newSizeKb = Math.round(buffer.length / 1024);
        const savedKb = sizeKb - newSizeKb;
        totalSavedBytes += (stat.size - buffer.length);
        optimizedCount++;

        fs.writeFileSync(imgPath, buffer);
        console.log(`✓ ${relPath}: ${sizeKb} KB -> ${newSizeKb} KB (saved ${savedKb} KB)`);
      }
    } catch (err) {
      console.error(`✗ Error optimizing ${relPath}:`, err.message);
    }
  }

  const totalSavedMb = (totalSavedBytes / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 Optimized ${optimizedCount} heavy images. Total bandwidth saved: ${totalSavedMb} MB!`);
}

optimizeImages();
