const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const puppeteer = require("puppeteer-core");
const fs = require("node:fs");
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "dev",
    "--port",
    "3010",
    "--hostname",
    "127.0.0.1",
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let browser;
(async () => {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error("Next startup timeout")),
      30000,
    );
    server.stdout.on("data", (d) => {
      if (String(d).includes("Ready")) {
        clearTimeout(timeout);
        resolve();
      }
    });
    server.stderr.on("data", (d) => {
      if (String(d).includes("Unable to acquire lock"))
        reject(new Error(String(d)));
    });
  });
  browser = await puppeteer.launch({
    executablePath: process.env.CHROMIUM_EXECUTABLE_PATH,
    headless: true,
    pipe: true,
    args: require("@sparticuz/chromium").args,
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const locale of ["en", "de", "fr"]) {
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://127.0.0.1:3010/${locale}/`, {
      waitUntil: "networkidle0",
    });
    assert.equal(
      await page.evaluate(() => document.documentElement.lang),
      locale,
    );
    assert.ok(await page.$("h1"));
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
    );
    await page.screenshot({ path: `/tmp/certif-${locale}-desktop.png` });
    await page.setViewport({ width: 375, height: 812 });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `${locale} mobile overflow`,
    );
    await page.screenshot({ path: `/tmp/certif-${locale}-mobile.png` });
  }
  for (const locale of ["en", "de"]) {
    const pathname = locale === "en" ? "generate" : "erstellen";
    await page.goto(`http://127.0.0.1:3010/${locale}/${pathname}/`, {
      waitUntil: "networkidle0",
    });
    const next = await page.$("main button");
    await next.click();
    assert.ok(await page.$('[role="alert"]'));
    await page.type('main input[id$="-company"]', "Example Services");
    await page.select('main select[id$="-sector"]', "professional_services");
    await page.select(
      'main select[id$="-language"]',
      locale === "en" ? "de" : "en",
    );
    await next.click();
    await page.waitForSelector('main input[inputmode="decimal"]');
    const inputs = await page.$$('main input[inputmode="decimal"]');
    assert.equal(inputs.length, 7);
    for (const input of inputs) await input.type("1000");
    const buttons = await page.$$("main button");
    await buttons[buttons.length - 1].click();
    await page.waitForSelector('main input[type="checkbox"]');
    const text = await page.$eval("main", (e) => e.innerText);
    assert.ok(text.includes(locale === "en" ? "1.9" : "1,9"));
    assert.ok(text.includes(locale === "en" ? "Deutsch" : "English"));
    await page.evaluate(() => window.scrollTo(0, 0));
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
    );
    await page.screenshot({
      path: `/tmp/certif-${locale}-recap.png`,
      fullPage: true,
    });
    let posted;
    await page.setRequestInterception(true);
    const intercept = async (request) => {
      if (request.url().endsWith("/api/checkout")) {
        posted = JSON.parse(request.postData());
        await request.respond({
          status: 503,
          contentType: "application/json",
          body: JSON.stringify({ error: "TEST_ONLY" }),
        });
      } else await request.continue();
    };
    page.on("request", intercept);
    await page.click('main input[type="checkbox"]');
    const submitButtons = await page.$$("main button");
    await submitButtons[submitButtons.length - 1].click();
    await page.waitForSelector('[role="alert"]');
    assert.equal(posted.siteLocale, locale);
    assert.equal(posted.attestationLocale, locale === "en" ? "de" : "en");
    assert.equal(
      posted.companySector,
      locale === "en" ? "Unternehmensdienstleistungen" : "Business services",
    );
    assert.equal(posted.totalCO2e, 1.9);
    page.off("request", intercept);
    await page.setRequestInterception(false);
  }
  for (const pathname of [
    "en/product",
    "en/pricing",
    "en/product/methodology",
    "en/product/compliance",
    "en/verify",
    "en/contact",
    "en/legal",
    "en/privacy",
    "en/terms",
    "en/cookies",
    "en/data-processing",
    "en/success",
    "de/produkt",
    "de/preise",
    "de/methodik",
    "de/grenzen-und-compliance",
    "de/pruefen",
    "de/kontakt",
    "de/erfolg",
  ]) {
    const response = await page.goto(`http://127.0.0.1:3010/${pathname}/`, {
      waitUntil: "networkidle0",
    });
    assert.equal(response.status(), 200, pathname);
    assert.ok(await page.$("main h1"), pathname);
  }
  assert.equal(
    (await page.goto("http://127.0.0.1:3010/en/unknown-page/")).status(),
    404,
  );
  assert.deepEqual(errors, []);
  for (const locale of ["fr", "en", "de"]) {
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
  }
  console.log(
    "Passed: FR/EN/DE desktop and 375px mobile, HTML languages, no horizontal overflow, EN/DE required fields and 3-step forms, 7 identical amounts => 1.9 tCO2e, selected PDF language in recap, no browser errors.",
  );
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (browser) await browser.close();
    server.kill();
  });
