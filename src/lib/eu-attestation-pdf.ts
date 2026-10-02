import QRCode from "qrcode";
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

  const c = getEuFlowCopy(locale).pdf;
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
    maximumFractionDigits: 1,
  }).format(data.totalCO2e);

  const html = `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(c.title)}</title>
<style>
@page { size: A4; margin: 11mm 12mm; }
* { box-sizing: border-box; }
html, body { margin:0; padding:0; font-family: Arial, "Noto Sans", sans-serif; color:#243447; background:white; font-size:10px; line-height:1.45; }
.page { min-height: 273mm; display:flex; flex-direction:column; }
.header { display:flex; justify-content:space-between; gap:20px; align-items:flex-start; border-bottom:2px solid #0B3A63; padding-bottom:10px; }
.brand { font-size:24px; font-weight:800; color:#0B3A63; }
.standard { margin-top:3px; color:#64748B; font-size:8px; }
.qr { width:92px; text-align:center; color:#64748B; font-size:7.5px; }
.qr img { width:84px; height:84px; }
.title { margin-top:18px; }
h1 { margin:0; color:#0B3A63; font-size:24px; line-height:1.15; letter-spacing:.2px; }
.subtitle { margin-top:7px; color:#64748B; font-size:10px; }
.demo { margin-top:8px; display:inline-block; padding:5px 9px; border:1px solid #d97706; color:#92400e; background:#fffbeb; font-weight:700; border-radius:6px; }
.result { margin-top:18px; padding:16px 18px; border-radius:14px; background:#F3FBFC; border:1px solid #b9e6e8; }
.result-label { color:#0B3A63; font-weight:700; font-size:9px; text-transform:uppercase; }
.result-value { margin-top:5px; color:#0B3A63; font-weight:800; font-size:32px; line-height:1; }
.meta { margin-top:14px; display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; }
.meta-item { border:1px solid #dbe4ea; border-radius:9px; padding:9px; min-height:46px; }
.label { color:#64748B; font-size:7.5px; font-weight:700; text-transform:uppercase; }
.value { margin-top:3px; color:#0B3A63; font-weight:700; word-break:break-word; }
.section { margin-top:12px; border:1px solid #dbe4ea; border-radius:11px; padding:11px 13px; break-inside:avoid; }
.section h2 { margin:0 0 6px; color:#0B3A63; font-size:12px; }
.section p { margin:0; color:#475569; }
.entity-grid { display:grid; grid-template-columns:1fr 1fr; gap:7px 15px; }
.entity-row { min-width:0; }
.entity-row .value { font-size:9px; }
.two { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.notice { margin-top:12px; padding:10px 12px; background:#F8FAFC; border-left:3px solid #0B3A63; color:#475569; }
.integrity { margin-top:12px; padding:10px 12px; border:1px solid #dbe4ea; border-radius:10px; background:#fafcfd; }
.integrity-row { margin-top:5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size:6.8px; word-break:break-all; color:#475569; }
.footer { margin-top:auto; padding-top:9px; border-top:1px solid #dbe4ea; display:flex; justify-content:space-between; color:#64748B; font-size:7.5px; }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <div class="brand">Certif-Scope</div>
      <div class="standard">CS-SB-v1 · certif-scope.com</div>
    </div>
    <div class="qr">
      <img src="${qrDataUrl}" alt="QR" />
      <div>${escapeHtml(c.scan)}</div>
    </div>
  </div>

  <div class="title">
    <h1>${escapeHtml(c.title)}</h1>
    <div class="subtitle">${escapeHtml(c.subtitle)}</div>
    ${sample ? `<div class="demo">DEMO · ${escapeHtml(c.title)}</div>` : ""}
  </div>

  <div class="result">
    <div class="result-label">${escapeHtml(c.resultLabel)}</div>
    <div class="result-value">${escapeHtml(result)} tCO₂e</div>
  </div>

  <div class="meta">
    <div class="meta-item"><div class="label">${escapeHtml(c.reference)}</div><div class="value">${escapeHtml(integrity.attestationId)}</div></div>
    <div class="meta-item"><div class="label">${escapeHtml(c.issued)}</div><div class="value">${issuedAt}</div></div>
    <div class="meta-item"><div class="label">${escapeHtml(c.validUntil)}</div><div class="value">${validUntil}</div></div>
  </div>

  <div class="section">
    <h2>1. ${escapeHtml(c.entityTitle)}</h2>
    <div class="entity-grid">
      <div class="entity-row"><div class="label">${escapeHtml(c.company)}</div><div class="value">${escapeHtml(data.companyName)}</div></div>
      <div class="entity-row"><div class="label">${escapeHtml(c.sector)}</div><div class="value">${escapeHtml(data.companySector)}</div></div>
      <div class="entity-row"><div class="label">${escapeHtml(c.country)}</div><div class="value">${escapeHtml(data.country)}</div></div>
      <div class="entity-row"><div class="label">${escapeHtml(c.year)}</div><div class="value">${escapeHtml(data.year)}</div></div>
      <div class="entity-row"><div class="label">${escapeHtml(c.reference)}</div><div class="value">${escapeHtml(data.entityIdentifier || "—")}</div></div>
      <div class="entity-row"><div class="label">${escapeHtml(c.methodTitle)}</div><div class="value">CS-SB-v1</div></div>
    </div>
  </div>

  <div class="two">
    <div class="section">
      <h2>2. ${escapeHtml(c.methodTitle)}</h2>
      <p>${escapeHtml(c.methodText)}</p>
    </div>
    <div class="section">
      <h2>3. ${escapeHtml(c.useTitle)}</h2>
      <p>${escapeHtml(c.useText)}</p>
    </div>
  </div>

  <div class="section">
    <h2>4. ${escapeHtml(c.limitsTitle)}</h2>
    <p>${escapeHtml(c.limitsText)}</p>
  </div>

  <div class="two">
    <div class="section">
      <h2>5. ${escapeHtml(c.verificationTitle)}</h2>
      <p>${escapeHtml(c.verificationText)}</p>
    </div>
    <div class="section">
      <h2>6. ${escapeHtml(c.responsibilityTitle)}</h2>
      <p>${escapeHtml(c.responsibilityText)}</p>
    </div>
  </div>

  <div class="notice">
    <strong>${escapeHtml(c.languageNotice)}</strong><br/>
    ${escapeHtml(c.englishPrevails)}
  </div>

  <div class="integrity">
    <div><strong>${escapeHtml(c.verificationTitle)}</strong> · ${escapeHtml(integrity.algorithm)} · ${escapeHtml(factorVersion)}</div>
    <div class="integrity-row">SHA-256: ${escapeHtml(integrity.hash)}</div>
    <div class="integrity-row">Ed25519: ${escapeHtml(integrity.signature)}</div>
  </div>

  <div class="footer">
    <div>${escapeHtml(c.footer)}</div>
    <div>${escapeHtml(integrity.attestationId)}</div>
  </div>
</div>
</body>
</html>`;

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
