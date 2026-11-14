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
  assert.ok(html.includes("Aperçu Certif-Scope en lecture seule"), "Visible preview warning missing");
  assert.ok(html.includes("noindex,nofollow,noarchive"), "Review page must include noindex meta");

  const product = await request("/fr/product/");
  assert.equal(product.status, 200, "Original product page missing");

  for (const path of [
    "/api/checkout-pack?pack=5",
    "/api/sample",
    "/fr/success/?session_id=fake",
  ]) {
    const response = await request(path);
    assert.equal(response.status, 403, path + ": preview must block access");
  }
  for (const path of ["/api/checkout", "/fr/generate/"]) {
    const response = await request(path, {method:"POST", headers:{"content-type":"application/json"}, body:"{}"});
    assert.equal(response.status, 403, path + ": preview must prevent writes");
  }
  console.log("Read-only site preview smoke passed: homepage, old product, 5 blocked sensitive requests.");
} finally {
  server.kill("SIGTERM");
  await Promise.race([new Promise(resolve=>server.once("exit",resolve)), wait(2000)]);
  if (server.exitCode === null) server.kill("SIGKILL");
}
