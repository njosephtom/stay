const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const brokenImages = [];
  const loadedImages = [];

  // Listen for console messages and errors
  page.on('response', async (response) => {
    if (response.url().includes('unsplash') || response.url().startsWith('/')) {
      if (response.status() >= 400) {
        brokenImages.push({ url: response.url(), status: response.status() });
      }
    }
  });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Get all images
    const images = await page.$$('img');
    console.log(`\n📸 Total images on page: ${images.length}`);

    // Check each image
    for (const img of images) {
      const src = await img.getAttribute('src');
      const naturalWidth = await img.evaluate(el => el.naturalWidth);

      if (naturalWidth === 0) {
        brokenImages.push(src);
      } else {
        loadedImages.push(src);
      }
    }

    console.log(`\n✅ Loaded: ${loadedImages.length}`);
    console.log(`❌ Broken: ${brokenImages.length}`);

    if (brokenImages.length > 0) {
      console.log('\n🔴 Missing images:');
      brokenImages.forEach(img => console.log(`  - ${img}`));
    }
  } catch (e) {
    console.error('Error:', e.message);
  }

  await browser.close();
})();
