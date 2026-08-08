import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// Essential images only
const images = {
  'hero-farm.jpg': 'https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1920&h=1080&fit=crop',
  'farm-stay.jpg': 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=600&h=500&fit=crop',
  'organic-food.jpg': 'https://images.unsplash.com/photo-1488459716781-6818c6737d7b?w=600&h=500&fit=crop',
  'rural-retreat.jpg': 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=500&fit=crop',
};

const download = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Failed: ${response.statusCode}`);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ ${filename}`);
        resolve();
      });
    }).on('error', reject);
  });
};

(async () => {
  console.log('Downloading images to public/...\n');
  for (const [name, url] of Object.entries(images)) {
    try {
      await download(url, name);
    } catch (e) {
      console.error(`✗ ${name}: ${e}`);
    }
  }
  console.log('\nDone!');
})();
