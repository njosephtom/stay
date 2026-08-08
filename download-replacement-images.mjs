import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

// Replacement images (alternative photo IDs)
const images = {
  'vase.jpg': 'https://images.unsplash.com/photo-1609640984244-8d1e3b9bfbd5?w=500&h=500&fit=crop&q=80',
  'mug.jpg': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=500&fit=crop&q=80',
  'organic-food.png': 'https://images.unsplash.com/photo-1488459716781-6818c6737d7b?w=600&h=500&fit=crop&q=80',
  'pillowcase.jpg': 'https://images.unsplash.com/photo-1584622180039-91f8ba1c1a0e?w=500&h=500&fit=crop&q=80',
  'rural-retreat.jpg': 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=500&fit=crop&q=80',
  'sweater.jpg': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80',
  'hero-farm.jpg': 'https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1920&h=1080&fit=crop&q=80',
};

const download = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Status ${response.statusCode}`);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ ${filename}`);
        resolve();
      });
    }).on('error', (e) => {
      fs.unlink(filepath, () => {});
      reject(e.message);
    });
  });
};

(async () => {
  console.log('Downloading replacement images...\n');
  let success = 0;
  for (const [name, url] of Object.entries(images)) {
    try {
      await download(url, name);
      success++;
    } catch (e) {
      console.error(`✗ ${name}: ${e}`);
    }
  }
  console.log(`\n✅ Downloaded ${success}/7 images`);
})();
