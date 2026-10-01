// Offline visual regression: all locales use the French two-page structure.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const puppeteer = require('puppeteer-core');
const { load } = require('./check-multilingual.cjs');
const { EU_LOCALES } = load('src/lib/eu-locales-core.ts');
const { EU_NON_CORE_LOCALES } = load('src/lib/eu-flow/index.ts');
const { getEuAttestationCopy } = load('src/lib/attestation-i18n/eu.ts');
const { getLocaleCopy } = load('src/lib/attestation-pdf-copy.ts');
const { renderAttestationPdfHtml } = load('src/lib/attestation-pdf-template.ts');
const pdfRoot = process.env.PDF_CHECK_OUTPUT || '/tmp/certif-pdf-parity';
fs.mkdirSync(pdfRoot, { recursive: true });
let browser;
(async () => {
  // Require a complete translation for every key used by the shared renderer.
  const required = [...new Set([...fs.readFileSync('src/lib/attestation-pdf-template.ts', 'utf8').matchAll(/get(?:Text|List)\(\s*externalI18n,\s*"([^"]+)"/g)].map(match => match[1]))];
  for (const locale of EU_NON_CORE_LOCALES) {
    const copy = getEuAttestationCopy(locale);
    for (const key of required) {
      assert.ok(copy[key] && (typeof copy[key] === 'string' || Array.isArray(copy[key])), `${locale}: ${key}`);
    }
    assert.equal(copy.referencesList.length, 4);
    assert.equal(copy.quickCheckItems.length, 5);
    assert.equal(copy.verifiableObjectItems.length, 6);
  }
  browser = await puppeteer.launch({
    executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || '/tmp/certif-pdf-render/chromium',
    headless: true,
    pipe: true,
    args: ['--no-sandbox', '--no-zygote', '--disable-gpu'],
    env: { ...process.env,
      LD_LIBRARY_PATH: process.env.PDF_CHECK_LIBS || '/tmp/certif-pdf-render/al2023/lib:/tmp/certif-pdf-render/swiftshader',
      FONTCONFIG_PATH: process.env.PDF_CHECK_FONTS || '/tmp/certif-pdf-render/fonts',
    },
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123 });
  await page.emulateMediaType('print');
  let reference;
  for (const locale of ['fr', ...EU_LOCALES.filter(locale => locale !== 'fr')]) {
    const html = fs.readFileSync(`/tmp/certif-scope-issued-${locale}.html`, 'utf8');
    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const check = await page.evaluate(() => {
      const pages = [...document.querySelectorAll('.page')];
      const geometry = [];
      for (const [index, container] of pages.entries()) {
        const bounds = container.getBoundingClientRect();
        const footer = container.querySelector('.footer').getBoundingClientRect();
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const text = walker.currentNode;
          if (!text.textContent.trim()) continue;
          const range = document.createRange(); range.selectNodeContents(text);
          for (const box of range.getClientRects()) {
            if (box.bottom > bounds.bottom + 1 || box.right > bounds.right + 1 || box.left < bounds.left - 1) geometry.push({ page: index + 1, kind: 'page', text: text.textContent.trim().slice(0, 80) });
            if (!container.querySelector('.footer').contains(text) && box.bottom > footer.top - 2) geometry.push({ page: index + 1, kind: 'footer', text: text.textContent.trim().slice(0, 80) });
            const card = text.parentElement.closest('.card');
            if (card) { const cardBounds = card.getBoundingClientRect(); if (box.bottom > cardBounds.bottom + 1 || box.right > cardBounds.right + 1) geometry.push({ page: index + 1, kind: 'card', text: text.textContent.trim().slice(0, 80) }); }
          }
        }
      }
      const flow = document.querySelector('.page-two-flow').getBoundingClientRect();
      const final = document.querySelector('.final-card').getBoundingClientRect();
      if (flow.bottom > final.top + 1) geometry.push({ page: 2, kind: 'overlap', pixels: flow.bottom - final.top });
      return {
        pages: pages.length,
        headings: [...document.querySelectorAll('h2.card-title')].map(x => Number(x.textContent.trim().match(/^\d+/)?.[0])),
        structure: [...document.body.querySelectorAll('*')].map(x => [x.tagName, x.className]),
        styles: document.querySelector('style').textContent,
        images: [...document.images].map(x => x.complete && x.naturalWidth > 0),
        geometry,
      };
    });
    assert.equal(check.pages, 2, locale);
    assert.deepEqual(check.headings, [1,2,3,4,5,6,7,8,9,10], locale);
    assert.deepEqual(check.images, [true, true], `${locale}: logo/QR`);
    if (!reference) reference = check;
    assert.deepEqual(check.structure, reference.structure, `${locale}: French structure`);
    assert.equal(check.styles, reference.styles, `${locale}: French styles`);
    assert.deepEqual(check.geometry, [], `${locale}: clipped or overlapping text`);
    const pdf = path.join(pdfRoot, `${locale}.pdf`);
    await page.pdf({ path: pdf, format: 'A4', printBackground: true, preferCSSPageSize: true });
    const info = execFileSync('pdfinfo', [pdf], { encoding: 'utf8' });
    assert.match(info, /Pages:\s+2\b/, `${locale}: actual PDF pages`);
    if (['fr','es','el','bg','ga','fi','pl','de'].includes(locale)) {
      execFileSync('pdftoppm', ['-scale-to', '1200', '-png', pdf, path.join(pdfRoot, locale)]);
    }
    console.log(`PASS ${locale}: same layout, 10 sections, 2 PDF pages, no clipping`);
  }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => { if (browser) await browser.close(); });
