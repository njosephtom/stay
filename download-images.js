const https = require('https');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// Essential images only (hero, featured sections)
const images = {
  'hero-farm.jpg': 'https://images.unsplash.com/photo-1500382017468-7049fae79e1d?w=1920&h=1080&fit=crop',
  'farm-stay.jpg': 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=600&h=500&fit=crop',
  'organic-food.jpg': 'https://images.unsplash.com/photo-1488459716781-6818c6737d7b?w=600&h=500&fit=crop',
  'rural-retreat.jpg': 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=500&fit=crop',
  'pottery.jpg': 'https://images.unsplash.com/photo-1565193566173-7cde29f270c7?w=600&h=500&fit=crop',
  'soil-hands.jpg': 'https://images.unsplash.com/photo-1509452773172-056fb7b5ad71?w=300&h=300&fit=crop',
  'bonfire.jpg': 'https://images.unsplash.com/photo-1540932974986-b06535e62000?w=600&h=400&fit=crop',
  'wellness.jpg': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=700&fit=crop',
};

const download = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Failed to download ${filename}: ${response.statusCode}`);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', reject);
  });
};

(async () => {
  console.log('Downloading essential images...\n');
  for (const [name, url] of Object.entries(images)) {
    try {
      await download(url, name);
    } catch (e) {
      console.error(`✗ ${name}: ${e}`);
    }
  }
  console.log('\n✅ Done! Update src/index.css and sections to reference /imagename.jpg');
})();
