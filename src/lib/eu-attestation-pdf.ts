import QRCode from "qrcode";
import { renderAttestationPdfHtml } from "@/lib/attestation-pdf-template";
import { getEuAttestationCopy } from "@/lib/attestation-i18n/eu";
import { signCanonicalPayload, makeAttestationId } from "@/lib/sign";
import { getEuFlowCopy, type EuNonCoreLocale } from "@/lib/eu-flow";

export type EuAttestationData = {
  companyName: string;
  companySector: string;
  entityIdentifier?: string;
  year: string;
  country: string;
  totalCO2e: number;
  factorVersion?: string;
};

type Integrity = {
  attestationId: string;
  algorithm: string;
  hash: string;
  signature: string;
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function addMonths(date: string, months: number): string {
  const value = new Date(`${date}T00:00:00.000Z`);
  value.setUTCMonth(value.getUTCMonth() + months);
  return value.toISOString().slice(0, 10);
}

function toBase64Url(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function safeFilename(value: string): string {
  return (
    value
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "company"
  );
}

function createIntegrity(data: EuAttestationData, issuedAt: string, sample: boolean): Integrity {
  if (sample) {
    return {
      attestationId: "CS-DEMO-EU",
      algorithm: "Ed25519 · DEMO",
      hash: "DEMO-SAMPLE-NOT-A-LIVE-SIGNATURE",
      signature: "DEMO-SAMPLE",
    };
  }

  if (!process.env.CERTIFSCOPE_SIGNING_KEY) {
    throw new Error("CERTIFSCOPE_SIGNING_KEY missing");
  }

  const base = {
    issuer: "Certif-Scope" as const,
    standard: "CS-SB-v1" as const,
    attestationId: "",
    companyName: data.companyName,
    country: data.country,
    year: data.year,
    totalCO2e: String(data.totalCO2e),
    issuedDate: `${issuedAt}T00:00:00.000Z`,
  };
  const temporary = signCanonicalPayload({ ...base, attestationId: "TEMP" });
  const attestationId = makeAttestationId(data.year, temporary.hashHex);
  const signed = signCanonicalPayload({ ...base, attestationId });
  return {
    attestationId,
    algorithm: signed.algorithm,
    hash: signed.hashHex,
    signature: signed.signatureBase64,
  };
}

export async function buildEuAttestationPdf(
  data: EuAttestationData,
  locale: EuNonCoreLocale,
  options: { sample?: boolean } = {},
): Promise<{ buffer: Buffer; filename: string }> {
  const sample = options.sample === true;
  const pdfShiftApiKey = process.env.PDFSHIFT_API_KEY;
  if (!pdfShiftApiKey) throw new Error("PDFSHIFT_API_KEY missing");

  const c = getEuAttestationCopy(locale);
  const issuedAt = new Date().toISOString().slice(0, 10);
  const validUntil = addMonths(issuedAt, 12);
  const factorVersion = data.factorVersion || "Certif-Scope factors v1";
  const integrity = createIntegrity(data, issuedAt, sample);

  const verificationPayload = {
    certificateId: integrity.attestationId,
    issuer: "Certif-Scope",
    issuedAt,
    validUntil,
    methodVersion: "CS-SB-v1",
    factorVersion,
    algorithm: integrity.algorithm,
    hash: integrity.hash,
    signature: integrity.signature,
    locale,
  };
  const verificationToken = toBase64Url(JSON.stringify(verificationPayload));
  const verifyUrl = `https://www.certif-scope.com/${locale}/verify/?v=${verificationToken}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
    errorCorrectionLevel: "H",
    width: 500,
    margin: 3,
  });

  const result = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(data.totalCO2e);

  const flow = getEuFlowCopy(locale);
  const metadata = Object.fromEntries(Object.entries({
    issuerName: "Certif-Scope",
    issuerSite: "https://www.certif-scope.com",
    companyName: data.companyName,
    companySector: flow.sectors[data.companySector as keyof typeof flow.sectors] || data.companySector,
    entityIdentifier: data.entityIdentifier || "—",
    country: data.country,
    year: data.year,
    totalCO2e: result,
    attestationId: integrity.attestationId,
    issuedDate: issuedAt,
    validUntil,
    standardRef: "Certif-Scope CS-SB-v1",
    methodology: c.methodologyValue,
    factorVersion,
    algorithm: integrity.algorithm,
    hash: integrity.hash,
    signature: integrity.signature,
    publicKey: "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=",
    verificationDisplayUrl: `https://www.certif-scope.com/${locale}/verify/`,
  }).map(([key, value]) => [key, escapeHtml(value)]));
  const html = renderAttestationPdfHtml({
    locale, copy: c, externalI18n: c, metadata, qrDataUrl,
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);
  try {
    const response = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        "X-API-Key": pdfShiftApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ source: html, format: "A4", use_print: true }),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`PDFSHIFT_${response.status}: ${await response.text()}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    return {
      buffer,
      filename: `${safeFilename(data.companyName)}-${integrity.attestationId}-${locale}.pdf`,
    };
  } finally {
    clearTimeout(timeout);
  }
}
