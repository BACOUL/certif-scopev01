import crypto from "crypto";

/**
 * Canonical payload definition (IMMUTABLE)
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

export function signCanonicalPayload(payload: CanonicalPayload) {
  const canonical = canonicalStringify(payload);

  const hashHex = crypto
    .createHash("sha256")
    .update(canonical, "utf8")
    .digest("hex");

  const privateKeyDer = Buffer.from(
    process.env.CERTIFSCOPE_SIGNING_KEY!,
    "base64"
  );

  const privateKey = crypto.createPrivateKey({
    key: privateKeyDer,
    format: "der",
    type: "pkcs8",
  });

  const signature = crypto.sign(
    null,
    Buffer.from(hashHex, "hex"),
    privateKey
  );

  return {
    canonical,          // debug interne uniquement
    hashHex,
    signatureBase64: signature.toString("base64"),
    algorithm: "Ed25519",
  };
}

export function makeAttestationId(year: string, hashHex: string): string {
  return `CS-${year}-${hashHex.slice(0, 8).toUpperCase()}`;
}
