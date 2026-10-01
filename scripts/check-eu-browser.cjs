const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const puppeteer = require("puppeteer-core");
const { load } = require("./check-multilingual.cjs");
const { EU_LOCALES } = load("src/lib/eu-locales-core.ts");
const { EU_NON_CORE_LOCALES, getEuFlowCopy } = load("src/lib/eu-flow/index.ts");
const { paths } = load("src/lib/site-locales.ts");
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "-p",
    "3011",
    "--hostname",
    "127.0.0.1",
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let browser;
(async () => {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(Error("Startup timeout")), 30000);
    server.stdout.on("data", (chunk) => {
      if (String(chunk).includes("Ready")) {
        clearTimeout(timeout);
        resolve();
      }
    });
    server.once("exit", (code) => reject(Error(`Server exited ${code}`)));
  });
  browser = await puppeteer.launch({
    executablePath:
      process.env.CHROMIUM_EXECUTABLE_PATH || "/tmp/certif-eu-chromium",
    pipe: true,
    headless: true,
    args: require("@sparticuz/chromium").args,
    env: {
      ...process.env,
      LD_LIBRARY_PATH: "/tmp/certif-al2023/lib:/tmp/certif-swiftshader",
      FONTCONFIG_PATH: "/tmp/certif-fonts",
    },
  });
  const page = await browser.newPage();
  let posted;
  await page.setRequestInterception(true);
  page.on("request", async (req) => {
    if (req.url().endsWith("/api/checkout")) {
      posted = JSON.parse(req.postData());
      return req.respond({
        status: 503,
        contentType: "application/json",
        body: '{"error":"TEST_ONLY"}',
      });
    }
    if (
      !req.url().startsWith("http://127.0.0.1:3011") &&
      !req.url().startsWith("data:")
    )
      return req.abort();
    return req.continue();
  });
  const errors = [];
  page.on("pageerror", (error) => {
    errors.push(`${page.url()}: ${error.message}`);
    console.log("Browser error", page.url(), error.message);
  });
  const go = async (pathname) => {
    console.log(`Checking ${pathname}`);
    const res = await page.goto(`http://127.0.0.1:3011${pathname}`, {
      waitUntil: "networkidle0",
    });
    assert.equal(res.status(), 200, pathname);
    await page
      .waitForSelector("main h1", { timeout: 5000 })
      .catch(async (error) => {
        console.log((await page.content()).slice(0, 3000));
        throw error;
      });
    assert.equal(await page.$("[data-nextjs-dialog]"), null);
  };
  const noOverflow = async (label) =>
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      label,
    );
  for (const locale of process.env.EU_TEST_LOCALE
    ? [process.env.EU_TEST_LOCALE]
    : EU_LOCALES) {
    await page.setViewport({ width: 1440, height: 900 });
    await go(`/${locale}/`);
    assert.equal(
      await page.evaluate(() => document.documentElement.lang),
      locale,
    );
    assert.equal(
      await page.$$eval(
        'link[rel="alternate"][hreflang]',
        (nodes) => nodes.length,
      ),
      25,
    );
    assert.equal(
      await page.$eval('link[rel="canonical"]', (node) => node.href),
      `https://www.certif-scope.com/${locale}/`,
    );
    assert.equal(
      await page.$$eval("header select option", (nodes) => nodes.length),
      24,
    );
    for (const width of [360, 390, 768, 1440]) {
      await page.setViewport({ width, height: 900 });
      await noOverflow(`${locale}/${width}`);
    }
    const generate = paths[locale]?.generate || `/${locale}/generate/`;
    await go(generate);
    await noOverflow(`${locale}/generate`);
    if (EU_NON_CORE_LOCALES.includes(locale)) {
      await page.setViewport({ width: 360, height: 800 });
      await page.$eval("main button", (button) => button.click());
      assert.ok(await page.$('[role="alert"]'));
      await page.type('main input[id$="-company"]', "Example Services");
      await page.select('main select[id$="-sector"]', "professional_services");
      await page.$eval("main button", (button) => button.click());
      await page.waitForSelector('main input[inputmode="decimal"]');
      await page.$$eval('main input[inputmode="decimal"]', (inputs) => {
        const setValue = Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          "value",
        ).set;
        for (const input of inputs) {
          setValue.call(input, "1000");
          input.dispatchEvent(new Event("input", { bubbles: true }));
        }
      });
      await page.waitForFunction(() =>
        [...document.querySelectorAll('main input[inputmode="decimal"]')].every(
          (input) => input.value === "1000",
        ),
      );
      const buttons = await page.$$("main button");
      await buttons.at(-1).evaluate((button) => button.click());
      await page
        .waitForSelector('main input[type="checkbox"]', { timeout: 3000 })
        .catch(async (e) => {
          console.log(await page.$eval("main", (n) => n.innerText));
          console.log(
            await page.$$eval("main input", (ns) => ns.map((n) => n.value)),
          );
          throw e;
        });
      await noOverflow(`${locale}/summary`);
      const text = await page.$eval("main", (node) => node.innerText);
      assert.ok(text.includes(new Intl.NumberFormat(locale).format(1.9)), text);
      posted = undefined;
      await page.$eval('main input[type="checkbox"]', (input) => input.click());
      const submit = await page.$$("main button");
      await submit.at(-1).evaluate((button) => button.click());
      await page.waitForSelector('[role="alert"]');
      assert.equal(posted.siteLocale, locale);
      assert.equal(posted.attestationLocale, locale);
      assert.equal(posted.totalCO2e, 1.9);
      assert.equal(
        posted.companySector,
        getEuFlowCopy(locale).sectors.professional_services,
      );
      if (["es", "el", "bg", "ga"].includes(locale))
        await page.screenshot({
          path: `/tmp/certif-eu-${locale}-summary.png`,
          fullPage: true,
        });
    }
    await go(paths[locale]?.success || `/${locale}/success/`);
    await go(paths[locale]?.verify || `/${locale}/verify/`);
    console.log(`PASS browser ${locale}`);
  }
  await go("/es/success/?session_id=cs_offline");
  await page.select("header select", "en");
  await page.waitForFunction(() => location.pathname === "/en/success/");
  assert.ok(page.url().includes("session_id=cs_offline"));
  assert.deepEqual(errors, []);
  for (const locale of EU_LOCALES) {
    await page.setContent(
      fs.readFileSync(`/tmp/certif-scope-issued-${locale}.html`, "utf8"),
      { waitUntil: "load" },
    );
    await page.pdf({
      path: `/tmp/certif-scope-issued-${locale}.pdf`,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });
    if (["es", "el", "bg", "ga"].includes(locale))
      await page.screenshot({
        path: `/tmp/certif-eu-${locale}-pdf.png`,
        fullPage: true,
      });
  }
  console.log(
    process.env.EU_TEST_LOCALE
      ? `PASS focused ${process.env.EU_TEST_LOCALE} and PDF rendering`
      : "PASS: 96 routes, 24 home SEO/HTML locales, four viewport widths, 21 full forms, language switch with session, 24 Chromium PDF renders, no browser errors.",
  );
})()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (browser) await browser.close();
    server.kill();
  });
