import { test } from "node:test";
import assert from "node:assert/strict";
import { generateKeyPairSync } from "node:crypto";
import { calculateSpend, spendSample } from "../src/lib/spend/calculate";
import { spendPdf, spendCsv } from "../src/lib/spend/document";
import { SPEND_FACTORS } from "../src/lib/spend/factors";
import { signReport, verifyReport } from "../src/lib/carbon/crypto";
import { PRODUCT, SPEND_PRODUCT, PRICE, isSupportedProduct, isPaidSession } from "../src/lib/carbon/payment";
import { POST as preview } from "../src/app/api/spend/preview/route";

const input = () => structuredClone(spendSample("fr").calculation.assessment);

test("spend indicative: euro to kiloeuro to kgCO2e to tonnes, without 1000x error", () => {
 const result = calculateSpend(input());
 assert.equal(result.lines[0].kgCO2e, 750); // 10,000 EUR x 75 kg/kEUR = 750 kg
 assert.equal(result.lines[1].kgCO2e, 335); // 5,000 EUR x 67 kg/kEUR = 335 kg
 assert.equal(result.totalEur, 15000);
 assert.equal(result.totalT, 1.085);
 assert.equal(result.product, SPEND_PRODUCT);
 assert.ok(result.warnings.includes("NOT_SCOPES_1_2"));
});

test("spend indicative: reject client totals, injected factors, unsupported countries and invalid expense amounts", () => {
 assert.throws(() => calculateSpend({ ...input(), totalT: 0 }));
 assert.throws(() => calculateSpend({ ...input(), country: "DE" }));
 for (const amount of [-1, Infinity, NaN, "1000", 1.234, null]) {
  const assessment: any = input();
  assessment.expenses[0].eurExVat = amount;
  assert.throws(() => calculateSpend(assessment));
 }
 const bad: any = input();
 bad.expenses[0].factorId = "bogus";
 assert.throws(() => calculateSpend(bad));
});

test("spend indicative: 2023 price base must be acknowledged; other years carry proxy warning", () => {
 assert.throws(() => calculateSpend({ ...input(), priceYearAcknowledged: false }));
 const result = calculateSpend({ ...input(), year: 2026 });
 assert.ok(result.warnings.includes("PRICE_YEAR_2023_PROXY_NO_INFLATION_ADJUSTMENT"));
 assert.equal(result.totalT, 1.085);
});

test("spend indicative: strict factor catalog documents historical price basis", () => {
 assert.equal(Object.keys(SPEND_FACTORS).length, 9);
 for (const factor of Object.values(SPEND_FACTORS)) {
  assert.equal(factor.priceYear, 2023);
  assert.ok(factor.value > 0);
  assert.equal(factor.uncertainty, 80);
  assert.ok(factor.source.includes("data.ademe.fr"));
 }
});

test("spend indicative: preview API recalculates server-side; wrong origin is blocked", async () => {
 const request = (origin: string) => new Request("http://localhost:3000/api/spend/preview", {
  method: "POST",
  headers: { origin, "content-type": "application/json" },
  body: JSON.stringify(input()),
 });
 const good = await preview(request("http://localhost:3000"));
 assert.equal(good.status, 200);
 assert.equal((await good.json()).totalT, 1.085);
 assert.equal((await preview(request("https://third-party.example"))).status, 403);
});

test("both products: webhook allowlist and Stripe entitlement validator reject cross-product use", () => {
 assert.equal(isSupportedProduct(PRODUCT), true);
 assert.equal(isSupportedProduct(SPEND_PRODUCT), true);
 for (const value of ["old-attestation", "other", "", null, undefined]) assert.equal(isSupportedProduct(value), false);
 const row = { id: "report", session_id: "cs_test_spend", snapshot_hash: "digest", snapshot: { product: SPEND_PRODUCT } };
 const session: any = {
  id: row.session_id, mode: "payment", status: "complete", payment_status: "paid",
  livemode: false, currency: "eur", amount_total: PRICE, payment_intent: "pi_test",
  metadata: { product: SPEND_PRODUCT, reportId: row.id, snapshotHash: row.snapshot_hash },
 };
 assert.equal(isPaidSession(session, row), true);
 assert.equal(isPaidSession({ ...session, metadata: { ...session.metadata, product: PRODUCT } }, row), false);
 assert.equal(isPaidSession({ ...session, amount_total: 0 }, row), false);
});

test("spend indicative: signed JSON detects tampering without claiming PDF signature", () => {
 const keys = generateKeyPairSync("ed25519");
 const privatePem = keys.privateKey.export({ format: "pem", type: "pkcs8" }).toString();
 const publicPem = keys.publicKey.export({ format: "pem", type: "spki" }).toString();
 const signed = signReport(spendSample(), privatePem);
 assert.equal(verifyReport(signed, publicPem), true);
 const changed = structuredClone(signed);
 (changed.report as ReturnType<typeof spendSample>).calculation.totalT = 0;
 assert.equal(verifyReport(changed, publicPem), false);
});

test("spend indicative: produce real PDF and numeric CSV samples in FR/EN/DE", async () => {
 for (const locale of ["fr", "en", "de"] as const) {
  const report = spendSample(locale);
  const buffer = await spendPdf(report, true);
  assert.equal(buffer.subarray(0, 4).toString("utf8"), "%PDF");
  assert.ok(buffer.length > 3000);
  const csv = spendCsv(report);
  assert.ok(csv.includes("factor_id,eur_ex_vat,kgco2e"));
  assert.ok(csv.includes("43445"));
 }
});
