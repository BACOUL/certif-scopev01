export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Paste only the base64 content of your logo here (no data: prefix, no newlines)
const CERTIF_SCOPE_LOGO_BASE64 = "";

/**
 * Simple HTML escaper to avoid injection in the generated HTML.
 */
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Persist a minimal attestation record as JSONL if ATTESTATION_STORE_PATH is set.
 * Record contains: attestationId, issuedDate, sessionId, companyName, totalCO2e, year, createdAt
 */
async function persistAttestation(record: Record<string, any>) {
  const storePath = process.env.ATTESTATION_STORE_PATH;
  if (!storePath) return;
  try {
    const dir = path.dirname(storePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const line = JSON.stringify(record) + "\n";
    fs.appendFileSync(storePath, line, { encoding: "utf8" });
  } catch (err) {
    console.error("Persist attestation failed:", err);
  }
}

export async function GET(req: Request) {
  try {
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return new Response("Missing session_id", { status: 400 });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    const metadataRaw = session.metadata || {};

    // Required metadata keys
    const required = ["companyName", "totalCO2e", "year"];
    const missing = required.filter((k) => {
      const v = metadataRaw[k];
      return v === undefined || v === null || String(v).trim() === "";
    });
    if (missing.length) {
      return new Response(`Missing metadata: ${missing.join(", ")}`, { status: 400 });
    }

    // Parse and validate numeric totalCO2e
    const totalCO2eNum = Number(String(metadataRaw.totalCO2e).replace(",", "."));
    if (Number.isNaN(totalCO2eNum)) {
      return new Response("Invalid metadata: totalCO2e must be a number", { status: 400 });
    }

    // Build sanitized metadata (escaped for HTML)
    const metadata = {
      attestationId: metadataRaw.attestationId || `CS-${session.id}`,
      issuerName: escapeHtml(String(metadataRaw.issuerName || "Certif-Scope")),
      issuerSite: escapeHtml(String(metadataRaw.issuerSite || "https://certif-scope.com")),
      companyName: escapeHtml(String(metadataRaw.companyName)),
      companySector: escapeHtml(String(metadataRaw.companySector || "—")),
      entityIdentifier: escapeHtml(String(metadataRaw.entityIdentifier || "—")),
      country: escapeHtml(String(metadataRaw.country || "—")),
      year: escapeHtml(String(metadataRaw.year)),
      totalCO2e: escapeHtml(String(totalCO2eNum)),
      methodology: escapeHtml(String(metadataRaw.methodology || "Certif-Scope deterministic spend-based methodology v1.0")),
      issuedDate: escapeHtml(String(metadataRaw.issuedDate || new Date().toISOString().slice(0, 10))),
      validUntil: escapeHtml(String(metadataRaw.validUntil || "")),
      validityMonths: escapeHtml(String(metadataRaw.validityMonths || "12")),
      standardRef: escapeHtml(String(metadataRaw.standardRef || "Certif-Scope CS-SB-v1")),
    };

    // Persist minimal record
    await persistAttestation({
      attestationId: metadata.attestationId,
      issuedDate: metadata.issuedDate,
      sessionId: session.id,
      companyName: metadata.companyName,
      totalCO2e: totalCO2eNum,
      year: metadata.year,
      createdAt: new Date().toISOString(),
    });

    // QR code
    const verifyUrl = `https://certif-scope.com/verify?id=${encodeURIComponent(metadata.attestationId)}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 120, margin: 1 });

    // HTML (A4-safe CSS)
    const html = `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>${metadata.issuerName} — Attestation</title>
<style>
  @page {
    size: A4;
    margin: 14mm;
  }

  body {
    font-family: Inter, "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 10.8px;
    line-height: 1.48;
    margin: 0;
    color: #111;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --serif: "Times New Roman", Georgia, "Garamond", serif;
    --muted: #666;
    --accent: #0b2b4a;
  }

  .container { padding: 0; }

  .page-break {
    page-break-before: always;
    break-before: page;
  }

  .result-box,
  .verify-block,
  .final-stamp {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:3px solid var(--accent); padding-bottom:14px; margin-bottom:18px; }
  .issuer { max-width:68%; display:flex; flex-direction:column; justify-content:flex-start; }
  .issuer-logo {
    height: 90px;
    max-width: 340px;
    display: block;
    margin-bottom: 8px;
    object-fit: contain;
  }
  .issuer-site { font-size:10px; color:var(--muted); margin-bottom:6px; }
  .issuer-meta { font-size:10px; color:var(--muted); }

  .qr { text-align:center; font-size:9px; }
  .qr img { width:105px; height:105px; border:1px solid #ddd; padding:6px; background:#fff; }

  .title { text-align:center; margin:22px 0 12px; font-family:var(--serif); }
  .title h1 { font-size:22px; margin:0; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; color:var(--accent); }
  .title .formal-line { margin-top:6px; font-size:11px; color:#222; font-weight:600; font-family: Inter, Arial, sans-serif; }
  .title .subtitle { margin-top:6px; font-size:10px; color:var(--muted); }
  .title .standard-ref { margin-top:6px; font-size:10px; color:var(--accent); font-weight:600; }

  .two-col { display:grid; grid-template-columns: 1fr 300px; gap:20px; align-items:start; }

  section { margin-bottom: 14px; padding-right:2px; }

  .section-title { font-family:var(--serif); font-size:11.5px; margin-bottom:5px; font-weight:700; color:var(--accent); text-transform:uppercase; font-variant:small-caps; }

  .meta-list { font-size:11px; color:#222; }

  .meta-list ul {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .meta-list li {
    margin-bottom: 2px;
  }

  .result-panel { margin:14px 0; display:flex; justify-content:center; }
  .result-box {
    width:100%;
    max-width:640px;
    background:#ffffff;
    border:3px solid var(--accent);
    padding:8px 14px;
    box-shadow: 0 6px 18px rgba(11,43,74,0.08);
    text-align:center;
  }
  .result-label { font-size:10px; font-weight:700; color:#222; margin-bottom:6px; font-family: Inter, Arial, sans-serif; }
  .result-value { font-family:var(--serif); font-size:30px; font-weight:800; color:var(--accent); margin:4px 0; letter-spacing:1px; }

  .verify-block { border:1px solid #d9d9d9; padding:10px; background:#f7f9fb; font-size:10.5px; margin-top:8px; }
  .verify-title { font-weight:700; color:var(--accent); font-size:11px; margin-bottom:6px; }

  .scope-summary { margin-top:12px; border-left:3px solid #e6eef8; padding-left:10px; font-size:10.5px; color:#222; }

  .final-box {
    border-top:1px solid #ddd;
    margin-top:10px;
    padding-top:8px;
  }
  .final-stamp {
    border:1px solid #e0e0e0;
    padding:10px;
    font-style:italic;
    color:#222;
    background:#fff;
    font-size:10.5px;
  }

  .footer {
    border-top: 1px solid #ddd;
    margin-top: 18px;
    padding-top: 6px;
    font-size: 9px;
    color: #666;
    display: flex;
    justify-content: space-between;
  }

  .muted { color:var(--muted); font-size:10px; }
  .small { font-size:10px; color:var(--muted); }

  @media print {
    .issuer-logo { height: 88px; max-width: 340px; }
    .two-col { gap:16px; }
  }
</style>
</head>
<body>
<div class="container">

  <header>
    <div class="issuer">
      ${CERTIF_SCOPE_LOGO_BASE64 ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" class="issuer-logo" alt="Issuer logo" />` : ""}
      <div class="issuer-site">${metadata.issuerSite}</div>
      <div class="issuer-meta small">Automated issuance · Standardized indicative attestation</div>
    </div>

    <div class="qr">
      <img src="${qrDataUrl}" alt="QR verification" />
      <div class="small">Scan to verify</div>
    </div>
  </header>

  <div class="title">
    <h1>Indicative Carbon Emissions Attestation</h1>
    <div class="formal-line">Issued pursuant to the Certif-Scope standardized methodology CS-SB-v1</div>
    <div class="standard-ref">Standard reference: ${metadata.standardRef}</div>
    <div class="subtitle">Non-regulatory · Methodology-based · Indicative attestation</div>
  </div>

  <div class="result-panel" role="region" aria-label="Estimated emissions result">
    <div class="result-box" role="figure" aria-labelledby="result-label">
      <div id="result-label" class="result-label">Declared aggregated indicative emissions</div>
      <div class="result-value">${metadata.totalCO2e} tCO₂e</div>
    </div>
  </div>

  <div class="two-col">
    <div>
      <section aria-labelledby="s1">
        <div class="section-title" id="s1">1. Identification of the issuer</div>
        <div class="meta-list">
          <div class="row"><strong>Issuer:</strong> ${metadata.issuerName}</div>
          <div class="row"><strong>Website:</strong> ${metadata.issuerSite}</div>
          <div class="row"><strong>Attestation reference:</strong> ${metadata.attestationId} <span class="small"> (Unique document identifier)</span></div>
          <div class="row"><strong>Issued date:</strong> ${metadata.issuedDate}</div>
          ${metadata.validUntil ? `<div class="row"><strong>Valid until:</strong> ${metadata.validUntil}</div>` : `<div class="row"><strong>Validity period:</strong> ${metadata.validityMonths} months</div>`}
        </div>
      </section>

      <section aria-labelledby="s2">
        <div class="section-title" id="s2">2. Title of the document</div>
        <div class="meta-list">
          <div><strong>This attestation constitutes an indicative technical attestation.</strong></div>
          <div style="margin-top:6px;">This attestation is issued for informational, decision-support, and preliminary procurement assessment purposes.</div>
        </div>
      </section>

      <section aria-labelledby="s3">
        <div class="section-title" id="s3">3. Identification of the object certified</div>
        <div class="meta-list">
          <div class="row"><strong>Entity name:</strong> ${metadata.companyName}</div>
          <div class="row"><strong>Activity sector:</strong> ${metadata.companySector}</div>
          <div class="row"><strong>Country:</strong> ${metadata.country}</div>
          <div class="row"><strong>Reporting year:</strong> ${metadata.year}</div>
        </div>
      </section>

      <section aria-labelledby="s4">
        <div class="section-title" id="s4">4. Scope</div>
        <div class="meta-list">
          <div><strong>Scope:</strong> Indicative estimation of greenhouse gas emissions derived exclusively from aggregated expenditure data using a spend-based approach. This attestation does not cover Scope 1 or Scope 2 emissions unless explicitly stated.</div>
          <div style="margin-top:6px; font-size:10.5px; color:var(--muted);"><strong>Note:</strong> This attestation is not intended to satisfy CSRD, ESRS, or mandatory regulatory reporting requirements.</div>
        </div>
      </section>

      <section aria-labelledby="s5">
        <div class="section-title" id="s5">5. Normative references</div>
        <div class="meta-list">
          <div style="margin-bottom:6px;"><em>The following standards and frameworks are referenced for methodological alignment and contextual consistency.</em></div>
          <ul>
            <li>GHG Protocol – Scope 3 (spend-based)</li>
            <li>ISO 14064-1 (reference)</li>
            <li>ISO 14083 (reference)</li>
            <li>CSRD / ESRS / EU Taxonomy (context)</li>
          </ul>
        </div>
      </section>
    </div>

    <aside>
      <div class="verify-block" style="margin-top:6px;">
        <div class="verify-title">Document scope summary</div>
        <div style="font-size:10.5px; color:#222; margin-top:6px;">
          – Indicative estimation<br/>
          – Spend-based methodology<br/>
          – Aggregated result only<br/>
          – Validity: ${metadata.validityMonths} months
        </div>
      </div>
    </aside>
  </div>

  <div class="footer">
    <div>Indicative carbon emissions attestation · Issued by Certif-Scope · certif-scope.com</div>
    <div>Page 1 / 2</div>
  </div>

  <div class="page-break"></div>

  <div class="two-col">
    <div>
      <section aria-labelledby="s6">
        <div class="section-title" id="s6">6. Declaration of result</div>
        <div class="meta-list">
          <div style="font-style:italic; margin-bottom:4px;">Formal declaration</div>
          <div class="row"><strong>Declaration:</strong> Pursuant to the information provided by the entity, Certif-Scope hereby attests the above indicative aggregated emissions result for the reporting year stated.</div>
        </div>
      </section>

      <section aria-labelledby="s7">
        <div class="section-title" id="s7">7. Methodology and limitations</div>
        <div class="meta-list">
          <ul>
            <li><strong>Methodology:</strong> Certif-Scope deterministic spend-based model v1.0.</li>
            <li><strong>Limitations:</strong> No physical activity data; no Scope 1 or 2; indicative model only.</li>
            <li><strong>Transferability:</strong> Non-transferable.</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="s8">
        <div class="section-title" id="s8">8. Verification & Integrity</div>
        <div class="verify-block">
          <div class="verify-title">Verification & Integrity</div>
          <div class="small">This attestation can be independently verified without access to the issuer's systems. Verification does not require access to Certif-Scope systems and remains possible even if the issuer becomes unavailable.</div>
          <div style="margin-top:8px;"><strong>Privacy by design:</strong> This attestation is generated without storage of underlying financial data. Verification relies solely on the attestation identifier and cryptographic integrity mechanisms.</div>
          <div
