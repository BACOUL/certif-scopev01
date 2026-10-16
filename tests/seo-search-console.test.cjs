// Zero-dependency regression tests: node --test tests/seo-search-console.test.cjs
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "..");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const base = "https://www.certif-scope.com";

test("Googlebot can fetch Next.js render assets with ?dpl query strings", () => {
  const robots = read("public/robots.txt");
  assert.match(robots, /^Allow:\s*\/_next\/\s*$/m);
  assert.match(robots, /^Disallow:\s*\/\*\?\*\s*$/m);
  assert.match(robots, /^Disallow:\s*\/api\/\s*$/m);
  assert.doesNotMatch(robots, /^Disallow:\s*\/_next\//m);
  assert.ok("/_next/static/chunks/example.js?dpl=x".startsWith("/_next/"));
  assert.ok("/_next/".length > "/*?*".length);
});

test("historic German 404 URLs permanently redirect to existing localized routes", async () => {
  const config = require("../next.config.js");
  assert.equal(config.trailingSlash, true);
  const rules = await config.redirects();
  const expected = new Map([
    ["/de/pricing/", "/de/preise/"],
    ["/de/generate/", "/de/erstellen/"],
    ["/de/verify/", "/de/pruefen/"],
    ["/de/product/methodology/", "/de/methodik/"],
    ["/de/why-companies-ask/", "/de/warum-unternehmen-co2-angaben-anfordern/"],
  ]);
  for (const [source, destination] of expected) {
    const matching = rules.filter((r) => r.source === source);
    assert.equal(matching.length, 1, "Expected exactly one redirect for " + source);
    assert.equal(matching[0].destination, destination);
    assert.equal(matching[0].permanent, true);
    assert.ok(fs.existsSync(path.join(root, "src/app", destination.slice(1), "page.tsx")), "Missing " + destination);
  }
});

test("priority FR and DE content exists and is still in the sitemap", () => {
  const sitemap = read("public/sitemap.xml");
  for (const p of [
    "/fr/bilan-carbone-pme/cout/",
    "/fr/bilan-carbone-pme/obligation/",
    "/de/co2-fussabdruck-unternehmen/",
  ]) {
    assert.ok(sitemap.includes("<loc>" + base + p + "</loc>"), "Sitemap missing " + p);
    assert.ok(fs.existsSync(path.join(root, "src/app", p.slice(1), "page.tsx")), "No page for " + p);
  }
});

test("FR index is enabled while EU transactional flows remain noindex", () => {
  assert.match(read("src/app/fr/layout.tsx"), /index:\s*true/);
  assert.match(read("src/app/[locale]/generate/page.tsx"), /index:\s*false/);
});