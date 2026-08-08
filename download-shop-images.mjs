import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// Shop product images
const images = {
  'vase.jpg': 'https://images.unsplash.com/photo-1578749556568-bc2c40e0b923?w=500&h=500&fit=crop&q=80',
  'tote-bag.jpg': 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop&q=80',
  'eye-serum.jpg': 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop&q=80',
  'sweater.jpg': 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop&q=80',
  'eyeglasses.jpg': 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop&q=80',
  'chair.jpg': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop&q=80',
  'pillowcase.jpg': 'https://images.unsplash.com/photo-1584622180039-91f8ba1c1a0e?w=500&h=500&fit=crop&q=80',
  'mug.jpg': 'https://images.unsplash.com/photo-1569701813229-fdc5978d7be8?w=500&h=500&fit=crop&q=80',
};

const download = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`${response.statusCode}`);
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
  console.log('Downloading shop images...\n');
  for (const [name, url] of Object.entries(images)) {
    try {
      await download(url, name);
    } catch (e) {
      console.error(`✗ ${name}: ${e}`);
    }
  }
  console.log('\n✅ Done! Images saved to public/');
})();
