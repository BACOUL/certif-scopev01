// Isolated contract checks: Stripe and PDFShift are mocked; no payment or credit is consumed.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const ts = require("typescript");
let capturedCheckout,
  capturedHtml,
  capturedQr,
  paid = true;
let event, capturedMail, capturedPdfUrl;
const kv = new Map();
const metadata = {
  companyName: "Example <Company>",
  companySector: "Services aux entreprises",
  year: "2026",
  country: "DE",
  totalCO2e: "1.92",
  methodology: "Certif-Scope deterministic spend-based methodology v1.0",
};
class StripeMock {
  constructor() {
    this.webhooks = { constructEvent: () => event };
    this.checkout = {
      sessions: {
        create: async (value) => {
          capturedCheckout = value;
          return { url: "https://checkout.example.test/session" };
        },
        retrieve: async () => ({
          payment_status: paid ? "paid" : "unpaid",
          metadata,
        }),
      },
    };
  }
}
const testEnv = {
  STRIPE_SECRET_KEY: "mock",
  STRIPE_PRICE_ID: "mock_price",
  NEXT_PUBLIC_BASE_URL: "https://www.certif-scope.com/",
  PDFSHIFT_API_KEY: "mock",
  CERTIFSCOPE_SIGNING_KEY: crypto
    .generateKeyPairSync("ed25519")
    .privateKey.export({ format: "der", type: "pkcs8" })
    .toString("base64"),
  NODE_ENV: "test",
};
const cache = new Map();
function load(filename) {
  filename = path.resolve(filename);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const sandbox = {
    exports: module.exports,
    module,
    console,
    Buffer,
    Request,
    Response,
    URL,
    Headers,
    AbortController,
    setTimeout,
    clearTimeout,
    process: { env: testEnv },
    fetch: async (url, init) => {
      if (url.startsWith("https://api.cloudflare.com/")) {
        if (init?.method === "PUT") { kv.set(url, JSON.parse(init.body)); return new Response("{}"); }
        return kv.has(url) ? Response.json(kv.get(url)) : new Response("", { status: 404 });
      }
      if (url.includes("/api/attestation/")) { capturedPdfUrl = url; return new Response("%PDF-test", { headers: { "Content-Type": "application/pdf" } }); }
      assert.equal(url, "https://api.pdfshift.io/v3/convert/pdf");
      capturedHtml = JSON.parse(init.body).source;
      return new Response("%PDF-test", {
        headers: { "Content-Type": "application/pdf" },
      });
    },
    require(name) {
      if (name === "resend") return { Resend: class { constructor() { this.emails = { send: async value => { capturedMail = value; return { data: { id: "offline" } }; } }; } } };
      if (name === "stripe") return StripeMock;
      if (name === "next/headers")
        return { cookies: async () => ({ get: () => undefined }) };
      if (name === "qrcode")
        return {
          toDataURL: async (url) => {
            capturedQr = url;
            return require("qrcode").toDataURL(url);
          },
        };
      if (name === "@/lib/sign")
        return {
          signCanonicalPayload: (payload) => ({
            algorithm: "Ed25519",
            hashHex: crypto
              .createHash("sha256")
              .update(JSON.stringify(payload))
              .digest("hex"),
            signatureBase64: "test-signature",
          }),
          makeAttestationId: (year, hash) => `CS-${year}-${hash.slice(0, 8)}`,
        };
      if (name.startsWith("@/")) {
        let target = path.resolve("src", name.slice(2));
        if (fs.existsSync(target + ".ts")) target += ".ts";
        else target = path.join(target, "index.ts");
        return load(target);
      }
      if (name.startsWith("."))
        return load(path.resolve(path.dirname(filename), name + ".ts"));
      return require(name);
    },
  };
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        esModuleInterop: true,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    sandbox,
    { filename },
  );
  return module.exports;
}
module.exports = { load, metadata, testEnv, captured: () => ({ checkout: capturedCheckout, html: capturedHtml, qr: capturedQr, mail: capturedMail, pdfUrl: capturedPdfUrl }), setPaid: value => { paid = value; }, setEvent: value => { event = value; } };
if (require.main === module) (async () => {
  const { paths, SITE_LOCALES, SECTORS, sectorLabel } = load(
    "src/lib/site-locales.ts",
  );
  const checkout = load("src/app/api/checkout/route.ts");
  for (const ui of SITE_LOCALES)
    for (const doc of SITE_LOCALES) {
      const res = await checkout.POST(
        new Request("https://example.test/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...metadata,
            siteLocale: ui,
            attestationLocale: doc,
          }),
        }),
      );
      assert.equal(res.status, 200);
      assert.equal(capturedCheckout.locale, ui);
      assert.equal(capturedCheckout.metadata.attestationLocale, doc);
      assert.equal(capturedCheckout.metadata.companySector, SECTORS[0][doc]);
      assert.equal(
        capturedCheckout.success_url,
        `https://www.certif-scope.com${paths[ui].success}?session_id={CHECKOUT_SESSION_ID}`,
      );
      assert.equal(
        capturedCheckout.cancel_url,
        `https://www.certif-scope.com${paths[ui].generate}`,
      );
    }
  const invalid = await checkout.POST(
    new Request("https://example.test/api/checkout", {
      method: "POST",
      body: JSON.stringify({ ...metadata, attestationLocale: "xx" }),
    }),
  );
  assert.equal(invalid.status, 400);
  const packs = load("src/app/api/checkout-pack/route.ts");
  for (const ui of SITE_LOCALES) {
    assert.equal(
      (
        await packs.GET(
          new Request(
            `https://example.test/api/checkout-pack?pack=5&siteLocale=${ui}`,
            { headers: { origin: "https://www.certif-scope.com" } },
          ),
        )
      ).status,
      303,
    );
    assert.equal(capturedCheckout.locale, ui);
    assert.ok(capturedCheckout.success_url.includes(paths[ui].success));
    assert.ok(capturedCheckout.cancel_url.includes(paths[ui].pricing));
    assert.equal(capturedCheckout.line_items[0].price_data.unit_amount, 34900);
  }
  const issue = load("src/app/api/attestation/issue/route.ts");
  for (const doc of SITE_LOCALES) {
    metadata.attestationLocale = doc;
    const res = await issue.GET(
      new Request(
        "https://example.test/api/attestation/issue?session_id=cs_mock",
      ),
    );
    assert.equal(res.status, 200);
    assert.equal(res.headers.get("Content-Type"), "application/pdf");
    assert.ok(
      capturedQr.startsWith(
        `https://www.certif-scope.com${paths[doc].verify}?v=`,
      ),
    );
    assert.ok(capturedHtml.includes(sectorLabel(metadata.companySector, doc)));
    assert.ok(capturedHtml.includes("Example &lt;Company&gt;"));
    assert.ok(capturedHtml.includes(`<html lang="${doc}">`));
    fs.writeFileSync(`/tmp/certif-scope-issued-${doc}.html`, capturedHtml);
  }
  paid = false;
  assert.equal(
    (
      await issue.GET(
        new Request(
          "https://example.test/api/attestation/issue?session_id=cs_mock",
        ),
      )
    ).status,
    403,
  );
  console.log(
    "Passed: 9 UI/PDF language combinations, unsupported locale rejection, localized pack returns, 3 PDF templates/QR/sector labels, unpaid session rejection.",
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
