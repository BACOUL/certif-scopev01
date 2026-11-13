import { digest } from "./crypto";
import { verifyLegacyKey } from "./legacy-migration";
import { PRODUCT, SPEND_PRODUCT } from "./payment";

export type CreditQuery = {
 query: (sql: string, values?: unknown[]) => Promise<{ rows: any[] }>;
};
export type CreditStatus = {
 valid: boolean;
 remainingCredits: number;
 product?: typeof PRODUCT | typeof SPEND_PRODUCT;
};

/** Read-only credit status for previously reconciled keys; never creates an entitlement. */
export async function readCreditStatus(
  database: CreditQuery,
  rawKey: unknown,
  legacySigningSecret: string | undefined,
  now = new Date(),
): Promise<CreditStatus> {
  if (typeof rawKey !== "string" || !/^[A-Za-z0-9_-]{24,128}$/.test(rawKey)) {
    return { valid: false, remainingCredits: 0 };
  }
  if (rawKey.startsWith("CS-") && (!legacySigningSecret || !verifyLegacyKey(rawKey, legacySigningSecret))) {
    return { valid: false, remainingCredits: 0 };
  }
  const rows = await database.query(
    "SELECT remaining, expires_at, product FROM carbon_credits WHERE key_hash=$1",
    [digest(rawKey)],
  );
  const record = rows.rows[0];
  if (!record || ![PRODUCT, SPEND_PRODUCT].includes(record.product) ||
      !Number.isSafeInteger(record.remaining) || record.remaining < 0 ||
      !Number.isFinite(new Date(record.expires_at).getTime()) ||
      new Date(record.expires_at).getTime() <= now.getTime()) {
    return { valid: false, remainingCredits: 0 };
  }
  return {
    valid: true,
    remainingCredits: record.remaining,
    product: record.product,
  };
}
