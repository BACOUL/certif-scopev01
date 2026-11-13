import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { readFileSync } from "node:fs";
import { PGlite } from "@electric-sql/pglite";
import { digest } from "../src/lib/carbon/crypto";
import { SPEND_PRODUCT, PRODUCT } from "../src/lib/carbon/payment";
import { applyLegacyImport, planLegacyImport } from "../src/lib/carbon/legacy-migration";

const KEY_SECRET = "this-is-a-synthetic-test-secret";
function key(n: number) {
 const raw = n.toString(16).toUpperCase().padStart(16, "0");
 const body = "CS-" + raw.match(/.{4}/g)!.join("-");
 const signature = createHmac("sha256", KEY_SECRET).update(body).digest("hex").slice(0, 8).toUpperCase();
 return body + "-" + signature;
}
function record(n = 1, overrides: Record<string, unknown> = {}) {
 return {
  key: key(n), credits: 1, usedCredits: 0,
  expiresAt: "2028-12-01T00:00:00.000Z",
  stripeSessionId: "cs_test_syntheticpayment_123456",
  reconciliation: {
   payment: "paid_non_refunded",
   evidenceRef: "synthetic Stripe payment reconciliation",
   reviewedBy: "test operator",
   reviewedAt: "2026-11-13T00:00:00.000Z",
  },
  ...overrides,
 };
}
const now = new Date("2026-11-13T10:00:00.000Z");

test("legacy migration: spent/expired keys are never reactivated, originals map to spend product", () => {
 const manifest = [
  record(1), record(2, { used: true, usedCredits: 1 }),
  record(3, { expiresAt: "2025-01-01T00:00:00.000Z" }),
 ];
 const plan = planLegacyImport(manifest, KEY_SECRET, now);
 assert.equal(plan.count, 3);
 assert.equal(plan.remainingCredits, 1);
 assert.equal(plan.zeroBalance, 1);
 assert.equal(plan.expired, 1);
 assert.ok(plan.entries.every(e => e.product === SPEND_PRODUCT));
 assert.ok(plan.entries.every(e => !e.sourceId.includes("CS-")));
 assert.ok(plan.entries.every(e => !e.keyHash.includes("CS-")));
 assert.ok(plan.entries.every(e => e.manifestHash.length === 64));
});

test("legacy migration: refuses signatures, unknown usage, missing expiry or payment reconciliation", () => {
 for (const bad of [
  { key: key(1).slice(0, -8) + "00000000" },
  { usedCredits: undefined },
  { credits: 0 },
  { credits: 2, usedCredits: 3 },
  { expiresAt: undefined },
  { expiresAt: "not-a-date" },
  { source: "admin", stripeSessionId: undefined },
  { reconciliation: { payment: "refunded", evidenceRef: "refund", reviewedBy: "reviewer", reviewedAt: "2026-11-13T00:00:00.000Z" } },
 ]) {
  assert.throws(() => planLegacyImport([record(1, bad)], KEY_SECRET, now), undefined, JSON.stringify(bad));
 }
 assert.throws(() => planLegacyImport([record(1), record(1)], KEY_SECRET, now), /DUPLICATE_LEGACY_KEY/);
});

test("legacy migration: manual/complimentary keys require documented approval", () => {
 const complimentary = record(4, {
  source: "admin", stripeSessionId: undefined,
  reconciliation: {
   payment: "approved_complimentary", evidenceRef: "signed admin voucher #4",
   reviewedBy: "test operator", reviewedAt: "2026-11-13T00:00:00.000Z",
  },
 });
 const plan = planLegacyImport([complimentary], KEY_SECRET, now);
 assert.equal(plan.remainingCredits, 1);
});

test("legacy migration: idempotent PostgreSQL import never restores already consumed credits", async () => {
 const database = new PGlite();
 await database.exec(readFileSync("migrations/001_carbon.sql", "utf8"));
 try {
  const manifest = [record(10), record(11, { usedCredits: 1 })];
  const plan = planLegacyImport(manifest, KEY_SECRET, now);
  const first = await applyLegacyImport(database as any, plan);
  assert.deepEqual(first, { inserted: 2, previouslyImported: 0 });
  const spent = plan.entries.find(e => e.remaining === 0)!;
  const active = plan.entries.find(e => e.remaining === 1)!;
  assert.equal((await database.query<{ remaining: number; product: string }>(
    "SELECT remaining,product FROM carbon_credits WHERE key_hash=$1", [active.keyHash],
  )).rows[0].product, SPEND_PRODUCT);
  await database.query("UPDATE carbon_credits SET remaining=0 WHERE key_hash=$1", [active.keyHash]);
  const repeat = await applyLegacyImport(database as any, plan);
  assert.deepEqual(repeat, { inserted: 0, previouslyImported: 2 });
  const remaining = (await database.query<{ remaining: number }>(
    "SELECT remaining FROM carbon_credits WHERE key_hash=$1", [active.keyHash],
  )).rows[0].remaining;
  assert.equal(remaining, 0);
  assert.equal((await database.query<{ remaining: number }>(
    "SELECT remaining FROM carbon_credits WHERE key_hash=$1", [spent.keyHash],
  )).rows[0].remaining, 0);
 } finally {
  await database.close();
 }
});

test("legacy migration: conflicting re-import and product collisions rollback atomically", async () => {
 const database = new PGlite();
 await database.exec(readFileSync("migrations/001_carbon.sql", "utf8"));
 try {
  const original = planLegacyImport([record(20)], KEY_SECRET, now);
  await applyLegacyImport(database as any, original);
  const changed = planLegacyImport([record(20, { usedCredits: 1 })], KEY_SECRET, now);
  await assert.rejects(() => applyLegacyImport(database as any, changed), /LEGACY_IMPORT_CONFLICT/);
  const second = planLegacyImport([record(21), record(22)], KEY_SECRET, now);
  await database.query(
   "INSERT INTO carbon_credits(key_hash,remaining,expires_at,product) VALUES($1,1,now()+interval '1 year',$2)",
   [digest(key(22)), PRODUCT],
  );
  await assert.rejects(() => applyLegacyImport(database as any, second), /LEGACY_CREDIT_COLLISION/);
  assert.equal((await database.query(
   "SELECT * FROM carbon_legacy_imports WHERE source_id=$1", [second.entries[0].sourceId],
  )).rows.length, 0);
  assert.equal((await database.query(
   "SELECT * FROM carbon_legacy_imports WHERE source_id=$1", [second.entries[1].sourceId],
  )).rows.length, 0);
 } finally {
  await database.close();
 }
});
