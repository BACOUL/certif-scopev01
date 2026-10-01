// Generate localized demonstration previews with the real shared PDF renderer.
// Offline conversion: no payment, email, signature or PDFShift credit is used.
const { execFileSync } = require('node:child_process');
const puppeteer = require('puppeteer-core');
const { load, captured } = require('./check-multilingual.cjs');
const { EU_NON_CORE_LOCALES } = load('src/lib/eu-flow/index.ts');
const sample = load('src/app/api/attestation/eu-sample/route.ts');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || '/tmp/certif-badge-browser/chromium',
    headless: true, pipe: true, args: ['--no-sandbox', '--no-zygote', '--disable-gpu'],
    env: { ...process.env, LD_LIBRARY_PATH: process.env.PDF_CHECK_LIBS || '/tmp/certif-badge-browser/lib:/tmp/certif-badge-browser', FONTCONFIG_PATH: process.env.PDF_CHECK_FONTS || '/tmp/certif-badge-browser/fonts' }
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });
    await page.emulateMediaType('print');
    for (const locale of EU_NON_CORE_LOCALES) {
      const res = await sample.GET(new Request(`https://example.test/api/attestation/eu-sample?lang=${locale}`));
      if (res.status !== 200) throw new Error(`${locale}: sample status ${res.status}`);
      await page.setContent(captured().html, {waitUntil: 'load'});
      await page.evaluate(() => document.fonts.ready);
      const first = await page.$('.page');
      await first.screenshot({ path: `/tmp/attestation-example-${locale}.png` });
    }
    execFileSync('python', ['-c', `from pathlib import Path
from PIL import Image
for locale in ${JSON.stringify(EU_NON_CORE_LOCALES)}:
    image = Image.open('/tmp/attestation-example-' + locale + '.png').convert('RGB').resize((778, 1100))
    image.save(Path('public') / ('attestation-example-' + locale + '.webp'), quality=88)
`]);
    console.log(`Rendered ${EU_NON_CORE_LOCALES.length} localized sample previews`);
  } finally { await browser.close(); }
})().catch(error => {console.error(error); process.exit(1);});
