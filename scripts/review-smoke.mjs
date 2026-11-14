import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";

// This is a read-only preview smoke test, never a checkout test.
const port = 35872;
const server = spawn(process.execPath, [
  "node_modules/next/dist/bin/next", "start", "-p", String(port), "-H", "127.0.0.1",
], {
  stdio: ["ignore", "pipe", "pipe"],
  env: {
    ...process.env,
    VERCEL_ENV: "preview",
    VERCEL_PROJECT_ID: "prj_uB8VwMP9wnONmHvVbrTPxyqYXD65",
    STRIPE_SECRET_KEY: "",
    STRIPE_PRICE_ID: "",
    CLOUDFLARE_API_TOKEN: "",
    RESEND_API_KEY: "",
    PDFSHIFT_API_KEY: "",
  },
});
let logs = "";
for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk) => { logs += chunk.toString().slice(-1500); });
}
const root = "http://127.0.0.1:" + port;
async function request(path, init = {}) {
  return fetch(root + path, { signal: AbortSignal.timeout(15000), redirect: "follow", ...init });
}
try {
  let ready = false;
  for (let attempt = 0; attempt < 45; attempt++) {
    if (server.exitCode !== null) break;
    try {
      const res = await request("/fr/");
      if (res.status === 200) { ready = true; break; }
    } catch {}
    await wait(350);
  }
  assert.ok(ready, "Preview server did not respond. " + logs.slice(-1300));

  const page = await request("/fr/");
  assert.equal(page.status, 200);
  const html = await page.text();
  assert.ok(html.includes("reglementation-2026-title"), "Original homepage regulation section missing");
  assert.ok(html.includes('data-offer-transition="2026"'), "Product transition missing from old homepage");
  assert.ok(html.includes("/fr/fiche-carbone-fournisseur/"), "New supplier sheet path not discoverable");
  assert.ok(html.includes("Quelle différence entre"), "Regulatory FAQ missing");
  assert.ok(html.includes("Aperçu Certif-Scope en lecture seule"), "Visible preview warning missing");
  assert.ok(html.includes("noindex,nofollow,noarchive"), "Review page must include noindex meta");

  for (const path of ["/fr/product/","/fr/pricing/"]) {
    const page = await request(path);
    assert.equal(page.status, 200, "Original commercial page missing: " + path);
    const pageHtml = await page.text();
    assert.ok(pageHtml.includes('data-offer-transition="2026"'), path + ": no updated commercial explanation");
  }

  const simulation = await request("/fr/generate/");
  assert.equal(simulation.status, 200, "Supplier simulator must live in original generation route");
  const simHtml = await simulation.text();
  for (const phrase of [
    "simulation-fournisseur",
    "Calculer ma simulation gratuite",
    "Électricité achetée",
    "scope 1",
    "Ancienne attestation CO₂e",
    "Consulter le formulaire historique",
  ]) {
    assert.ok(simHtml.includes(phrase), "Original generate page must preserve both forms: " + phrase);
  }

  const supplier = await request("/fr/fiche-carbone-fournisseur/");
  assert.equal(supplier.status, 200, "New supplier information route missing");
  const supplierHtml = await supplier.text();
  for (const required of ["Offre en préparation","scope 1","scope 2","2026/1560","89 €","aucun achat disponible"]) {
    assert.ok(supplierHtml.includes(required), "Supplier info missing: "+required);
  }
  assert.ok(supplierHtml.includes("noindex"), "Unlaunched product page must not be indexed");
  assert.ok(!supplierHtml.includes('href="/api/checkout'), "Future product must not expose live payment CTA");

  for (const path of [
    "/api/checkout-pack?pack=5",
    "/api/sample",
    "/fr/success/?session_id=fake",
  ]) {
    const response = await request(path);
    assert.equal(response.status, 403, path + ": preview must block access");
  }
  const checkout = await request("/api/checkout", {method:"POST", headers:{"content-type":"application/json"}, body:"{}"});
  assert.equal(checkout.status, 403, "API checkout must be denied before Stripe execution");
  const blockedPost = await request("/review-blocked/", {method:"POST", headers:{"content-type":"application/json"}, body:"{}"});
  assert.equal(blockedPost.status, 403, "The denial route must reject writes");
  console.log("Read-only preview smoke passed: supplier simulator, legacy form, original pages and blocked APIs.");
} finally {
  server.kill("SIGTERM");
  await Promise.race([new Promise(resolve=>server.once("exit",resolve)), wait(2000)]);
  if (server.exitCode === null) server.kill("SIGKILL");
}
