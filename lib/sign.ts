import crypto from "crypto";

/**
 * Canonical payload definition (IMMUTABLE)
 * Order, fields, and types MUST NEVER change.
 */
export type CanonicalPayload = {
  issuer: "Certif-Scope";
  standard: "CS-SB-v1";
  attestationId: string;
  companyName: string;
  country: string;
  year: string;        // "YYYY"
  totalCO2e: string;   // serialized number
  issuedDate: string;  // "YYYY-MM-DD"
};

/**
 * Canonical JSON stringify with strict field order.
 * No extra fields, no reordering, UTF-8 only.
 */
function canonicalStringify(payload: CanonicalPayload): string {
  const ordered: CanonicalPayload = {
    issuer: payload.issuer,
    standard: payload.standard,
    attestationId: payload.attestationId,
    companyName: payload.companyName,
    country: payload.country,
    year: payload.year,
    totalCO2e: payload.totalCO2e,
    issuedDate: payload.issuedDate,
  };

  return JSON.stringify(ordered);
}

/**
 * Sign canonical payload using Ed25519.
 * Private key MUST be provided via env variable:
 * CERTIFSCOPE_SIGNING_KEY (base64, PKCS8 DER)
 */
export function signCanonicalPayload(payload: CanonicalPayload) {
  const canonical = canonicalStringify(payload);

  // SHA-256 hash of canonical JSON (hex)
  const hashHex = crypto
    .createHash("sha256")
    .update(canonical, "utf8")
    .digest("hex");

  // Load private key from env (NEVER committed)
  const privateKeyDer = Buffer.from(
    process.env.CERTIFSCOPE_SIGNING_KEY!,
    "base64"
  );

  const privateKey = crypto.createPrivateKey({
    key: privateKeyDer,
    format: "der",
    type: "pkcs8",
  });

  // Ed25519 signature over the hash
  const signature = crypto.sign(
    null,
    Buffer.from(hashHex, "hex"),
    privateKey
  );

  return {
    canonical, // internal use only (do NOT store)
    hashHex,
    signatureBase64: signature.toString("base64"),
    algorithm: "Ed25519",
  };
}

/**
 * Deterministic attestation ID derived from content.
 * No storage required.
 */
export function makeAttestationId(year: string, hashHex: string): string {
  return `CS-${year}-${hashHex.slice(0, 8).toUpperCase()}`;
}
