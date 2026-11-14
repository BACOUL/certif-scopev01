import { createHmac, timingSafeEqual } from "node:crypto";
import { digest } from "./crypto";
import { SPEND_PRODUCT } from "./payment";

/**
 * Offline reconciliation of Cloudflare KV access keys. NEVER import KV exports directly
 * into production. This code intentionally does not read Stripe or Cloudflare secrets,
 * nor claim to have verified a real payment.
 */
export type LegacyKeyRecord = {
  key: string;
  credits: number;
  usedCredits?: number;
  used?: boolean;
  expiresAt: string;
  stripeSessionId?: string;
  source?: "admin";
  reconciliation: {
    payment: "paid_non_refunded" | "approved_complimentary";
    evidenceRef: string;
    reviewedBy: string;
    reviewedAt: string;
  };
};
export type LegacyImportEntry = {
  sourceId: string;
  keyHash: string;
  manifestHash: string;
  product: typeof SPEND_PRODUCT;
  remaining: number;
  expiresAt: string;
};
export type LegacyImportPlan = {
  product: typeof SPEND_PRODUCT;
  entries: LegacyImportEntry[];
  count: number;
  remainingCredits: number;
  zeroBalance: number;
  expired: number;
  planHash: string;
};
export type SqlClient = {
  query: (sql: string, values?: unknown[]) => Promise<{ rows: any[]; rowCount?: number | null }>;
};

function isoDate(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const match = /^(\d{4})-(\d{2})-(\d{2})T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.exec(value);
  if (!match) return false;
  const millis = Date.parse(value);
  if (!Number.isFinite(millis)) return false;
  const date = new Date(millis);
  return date.getUTCFullYear() === Number(match[1]) &&
    date.getUTCMonth() + 1 === Number(match[2]) &&
    date.getUTCDate() === Number(match[3]);
}
export function verifyLegacyKey(key: unknown, secret: string): key is string {
  if (typeof key !== "string" || !/^CS-(?:[A-F0-9]{4}-){4}[A-F0-9]{8}$/.test(key)) return false;
  const body = key.split("-").slice(0, 5).join("-");
  const signature = createHmac("sha256", secret).update(body).digest("hex").slice(0, 8).toUpperCase();
  return timingSafeEqual(Buffer.from(key.slice(-8), "ascii"), Buffer.from(signature, "ascii"));
}
function safeText(s: unknown): s is string {
  return typeof s === "string" && s.length > 2 && s.length <= 160 && !/[\x00-\x1f]/.test(s);
}

/**
 * Requires payment/reimbursement reconciliation evidence for paid keys,
 * or named authorization for complimentary keys. These are OPERATOR assertions
 * that must be checked against Stripe's own ledger before generating a manifest.
 */
export function planLegacyImport(records: unknown, keySecret: string, now = new Date()): LegacyImportPlan {
  if (!safeText(keySecret) || !Array.isArray(records) || records.length > 10000) throw Error("INVALID_MANIFEST");
  if (!(now instanceof Date) || !Number.isFinite(now.getTime())) throw Error("INVALID_DATE");
  const seen = new Set<string>();
  const entries: LegacyImportEntry[] = [];
  for (const record of records) {
    if (!record || typeof record !== "object" || Array.isArray(record)) throw Error("INVALID_MANIFEST");
    const r = record as Partial<LegacyKeyRecord>;
    if (!verifyLegacyKey(r.key, keySecret)) throw Error("INVALID_LEGACY_KEY");
    const keyHash = digest(r.key);
    if (seen.has(keyHash)) throw Error("DUPLICATE_LEGACY_KEY");
    seen.add(keyHash);
    if (!Number.isSafeInteger(r.credits) || (r.credits ?? 0) < 1 || (r.credits ?? 0) > 1000) throw Error("INVALID_CREDITS");
    if (r.used !== undefined && typeof r.used !== "boolean") throw Error("INVALID_USED_FLAG");
    // Never silently grant credits to unknown or unrecorded old states.
    if (r.used !== true && (!Number.isSafeInteger(r.usedCredits) || (r.usedCredits ?? -1) < 0)) throw Error("UNRECONCILED_USAGE");
    if (r.usedCredits !== undefined && (!Number.isSafeInteger(r.usedCredits) || r.usedCredits < 0 || r.usedCredits > r.credits!)) throw Error("INVALID_USAGE");
    if (!isoDate(r.expiresAt)) throw Error("EXPIRY_REQUIRES_REVIEW");
    const reconciliation = r.reconciliation;
    if (!reconciliation || !safeText(reconciliation.evidenceRef) ||
      !safeText(reconciliation.reviewedBy) || !isoDate(reconciliation.reviewedAt)) throw Error("UNRECONCILED_PURCHASE");
    if (r.stripeSessionId) {
      if (reconciliation.payment !== "paid_non_refunded" || !/^cs_(?:live|test)_[A-Za-z0-9_]{6,150}$/.test(r.stripeSessionId)) throw Error("UNRECONCILED_PURCHASE");
    } else if (r.source === "admin") {
      if (reconciliation.payment !== "approved_complimentary") throw Error("UNRECONCILED_PURCHASE");
    } else {
      throw Error("UNRECONCILED_PURCHASE");
    }
    const remaining = r.used === true ? 0 : r.credits! - r.usedCredits!;
    // Expired entries are imported for history, never reactivated.
    const expired = Date.parse(r.expiresAt) <= now.getTime();
    const normalized = {
      sourceId: "legacy-kv:" + keyHash,
      keyHash,
      product: SPEND_PRODUCT,
      remaining,
      expiresAt: r.expiresAt,
      evidenceRef: reconciliation.evidenceRef,
      reviewedBy: reconciliation.reviewedBy,
      reviewedAt: reconciliation.reviewedAt,
      payment: reconciliation.payment,
      stripeSessionId: r.stripeSessionId || null,
      expired,
    };
    entries.push({
      sourceId: normalized.sourceId, keyHash,
      manifestHash: digest(normalized), product: SPEND_PRODUCT, remaining,
      expiresAt: r.expiresAt,
    });
  }
  entries.sort((a, b) => a.sourceId.localeCompare(b.sourceId));
  return {
    product: SPEND_PRODUCT,
    entries, count: entries.length,
    remainingCredits: entries.reduce((sum, e) => sum + (Date.parse(e.expiresAt) > now.getTime() ? e.remaining : 0), 0),
    zeroBalance: entries.filter(e => e.remaining === 0).length,
    expired: entries.filter(e => Date.parse(e.expiresAt) <= now.getTime()).length,
    planHash: digest(entries),
  };
}

/**
 * Apply ONLY to a reviewed, isolated STAGING database, with a dedicated
 * connection and migration/DDL already installed. Transactional and idempotent:
 * repeated imports never replenish credits already consumed.
 */
export async function applyLegacyImport(client: SqlClient, plan: LegacyImportPlan): Promise<{ inserted: number; previouslyImported: number }> {
  if (plan.product !== SPEND_PRODUCT || plan.count !== plan.entries.length ||
    plan.planHash !== digest(plan.entries) ||
    plan.entries.some(e => e.product !== SPEND_PRODUCT || e.sourceId !== "legacy-kv:" + e.keyHash)) throw Error("INVALID_PLAN");
  let inserted = 0, previouslyImported = 0;
  await client.query("BEGIN");
  try {
    for (const entry of plan.entries) {
      const r = await client.query(
        "INSERT INTO carbon_legacy_imports(source_id,manifest_hash,key_hash) VALUES($1,$2,$3) ON CONFLICT(source_id) DO NOTHING RETURNING source_id",
        [entry.sourceId, entry.manifestHash, entry.keyHash],
      );
      if (r.rows.length === 0) {
        const previous = await client.query("SELECT manifest_hash,key_hash FROM carbon_legacy_imports WHERE source_id=$1", [entry.sourceId]);
        if (!previous.rows.length || previous.rows[0].manifest_hash !== entry.manifestHash ||
          previous.rows[0].key_hash !== entry.keyHash) throw Error("LEGACY_IMPORT_CONFLICT");
        previouslyImported++;
        continue;
      }
      const saved = await client.query(
        "INSERT INTO carbon_credits(key_hash,remaining,expires_at,product) VALUES($1,$2,$3,$4) ON CONFLICT(key_hash) DO NOTHING RETURNING key_hash",
        [entry.keyHash, entry.remaining, entry.expiresAt, SPEND_PRODUCT],
      );
      if (saved.rows.length !== 1) throw Error("LEGACY_CREDIT_COLLISION");
      inserted++;
    }
    await client.query("COMMIT");
    return { inserted, previouslyImported };
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  }
}
