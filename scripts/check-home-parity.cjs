// Check the user-facing contract: all 24 homes share French markup, visible
// document previews and complete sections on mobile and desktop.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const puppeteer = require('puppeteer-core');
let locale = 'fr';
const cache = new Map();
function load(file) {
  const filename = path.resolve(file);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} }; cache.set(filename, module);
  const resolve = base => [base, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
  const context = {
    module, exports: module.exports, console, process, Buffer, URL, Intl,
    require(name) {
      if (name === 'next/link') return { __esModule: true, default: ({children, ...props}) => React.createElement('a', props, children) };
      if (name === 'next/image') return { __esModule: true, default: ({src, priority, ...props}) => React.createElement('img', {...props, src: `data:image/webp;base64,${fs.readFileSync(path.join('public', src)).toString('base64')}`}) };
      if (name === 'next/navigation') return { usePathname: () => `/${locale}/`, useSearchParams: () => new URLSearchParams(), useRouter: () => ({push() {}}) };
      if (name.startsWith('@/')) return load(resolve(path.resolve('src', name.slice(2))));
      if (name.startsWith('.')) return load(resolve(path.resolve(path.dirname(filename), name)));
      return require(name);
    }
  };
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true }}).outputText, context, { filename });
  return module.exports;
}
const { EU_HOME_LOCALES } = load('src/lib/eu-home-locales.ts');
const { getHomeContent } = load('src/lib/home-content.ts');
const Homepage = load('src/components/international/Homepage.tsx').default;
const Shell = load('src/components/international/Shell.tsx').default;
const css = fs.readdirSync('.next/static/chunks').filter(x=>x.endsWith('.css')).map(x=>fs.readFileSync(`.next/static/chunks/${x}`, 'utf8')).join('\n');
(async () => {
 const browser = await puppeteer.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || '/tmp/certif-badge-browser/chromium', headless: true, pipe: true,
 args: ['--no-sandbox', '--no-zygote', '--disable-gpu'], env: {...process.env, LD_LIBRARY_PATH: process.env.PDF_CHECK_LIBS || '/tmp/certif-badge-browser/lib:/tmp/certif-badge-browser', FONTCONFIG_PATH: process.env.PDF_CHECK_FONTS || '/tmp/certif-badge-browser/fonts'} });
 try {
   const page = await browser.newPage(); await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
   let reference;
   const expected = ['hero','cas-adaptes','features','how-it-works','before-payment','pricing','faq','final-cta'];
   for (locale of EU_HOME_LOCALES) {
     const copy = getHomeContent(locale);
     const strings = value => typeof value === 'string' ? [value] : Object.values(value).flatMap(strings);
     assert.ok(strings(copy).every(s=>s.trim()), `${locale}: missing translation`);
     for (const [key, count] of [['features',4],['steps',3],['faq',9],['badges',5],['included',5],['suitable',5],['exclusions',5],['scopeItems',5]]) assert.equal(copy[key].length,count, `${locale}/${key}`);
     const html = renderToStaticMarkup(React.createElement(Shell, {locale}, React.createElement(Homepage,{locale})));
     assert.ok(!html.includes('hero-attestation.webp'));
     for (const width of [320,375,1440]) {
       await page.setViewport({width,height:900});
       await page.setContent(`<html lang="${locale}"><head><style>${css}</style><style>*{animation:none!important;opacity:1!important}</style></head><body>${html}</body></html>`, {waitUntil:'load'});
       await page.evaluate(() => Promise.all([...document.images].map(image => image.decode().catch(() => {}))));
       const result = await page.evaluate(() => {
         const visible = el => el.getBoundingClientRect().width > 0 && el.getBoundingClientRect().height > 0;
         return {
           sections: [...document.querySelectorAll('main section')].map(x=>x.id),
           overflow: document.documentElement.scrollWidth > innerWidth+1,
           images: [...document.querySelectorAll('#hero img')].filter(visible).map(x=>({loaded:x.complete&&x.naturalWidth>0,width:x.getBoundingClientRect().width})),
           signature: [...document.querySelectorAll('main section')].map(section=>[section.id,[...section.querySelectorAll('*')].map(x=>[x.tagName,x.className])]),
           h1: document.querySelectorAll('h1').length,
           faq: document.querySelectorAll('#faq button').length,
           menu: document.querySelector('header button').getAttribute('aria-controls'),
           switcher: document.querySelectorAll('header select option').length
         };
       });
       assert.deepEqual(result.sections, expected, `${locale}: section parity`);
       assert.equal(result.h1,1); assert.equal(result.faq,9); assert.equal(result.switcher,24);
       assert.equal(result.images.length,1, `${locale}/${width}: visible preview`);
       assert.ok(result.images[0].loaded, `${locale}/${width}: broken image`);
       assert.equal(result.overflow,false, `${locale}/${width}: horizontal overflow`);
       if (!reference) reference = result.signature;
       assert.deepEqual(result.signature, reference, `${locale}: markup must be identical to French`);
       if (['fr','es','pl'].includes(locale) && width!==320) await page.screenshot({path:`/tmp/home-${locale}-${width}.png`, fullPage:false});
     }
   }
   console.log('PASS: 24 homes × 3 widths; identical French section markup, 9 FAQ, visible localized previews, 24 languages, no horizontal overflow.');
 } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exit(1)});
