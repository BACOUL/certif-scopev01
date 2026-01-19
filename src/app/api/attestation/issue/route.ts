export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Paste only the base64 content of your logo here (no data: prefix, no newlines)
const CERTIF_SCOPE_LOGO_BASE64 = "";

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

    const metadata = session.metadata || {};

    // Core metadata
    const attestationId = metadata.attestationId || `CS-${session.id}`;
    const issuerName = metadata.issuerName || "Certif-Scope";
    const issuerSite = metadata.issuerSite || "https://certif-scope.com";
    const companyName = metadata.companyName || "—";
    const entityIdentifier = metadata.entityIdentifier || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";
    const totalCO2e = metadata.totalCO2e || "—";
    const methodology = metadata.methodology || "Certif-Scope deterministic spend-based methodology v1.0";
    const issuedDate = metadata.issuedDate || new Date().toISOString().slice(0, 10);
    const validUntil = metadata.validUntil || ""; // optional
    const validityMonths = metadata.validityMonths || "12"; // default 12 months
    const standardRef = metadata.standardRef || "Certif-Scope CS-SB-v1"; // make standard reference explicit

    const verifyUrl = `https://certif-scope.com/verify?id=${encodeURIComponent(attestationId)}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 120, margin: 1 });

    const html = `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>${issuerName} — Attestation</title>
<style>
  /* 1. Page & margins (do not modify) */
  @page {
    size: A4;
    margin: 20mm;
  }

  /* 2. Global font size and line-height (PDFShift-safe) */
  body {
    font-family: Inter, "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 10.8px;
    line-height: 1.42;
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

  /* Header */
  header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:3px solid var(--accent); padding-bottom:12px; margin-bottom:18px; }
  .issuer { max-width:68%; }
  .issuer-logo { height:36px; display:block; margin-bottom:6px; } /* 36px max */
  .issuer-name { font-weight:700; font-size:15px; color:var(--accent); }
  .issuer-site { font-size:10px; color:var(--muted); margin-bottom:6px; }
  .issuer-meta { font-size:10px; color:var(--muted); }

  /* QR (adjusted) */
  .qr { text-align:center; font-size:9px; }
  .qr img { width:105px; height:105px; border:1px solid #ddd; padding:6px; background:#fff; } /* 105px */

  /* Title area: serif titles */
  .title { text-align:center; margin:18px 0 8px; font-family:var(--serif); }
  .title h1 { font-size:22px; margin:0; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; color:var(--accent); }
  .title .formal-line { margin-top:6px; font-size:11px; color:#222; font-weight:600; font-family: Inter, Arial, sans-serif; }
  .title .subtitle { margin-top:6px; font-size:10px; color:var(--muted); }
  .title .standard-ref { margin-top:6px; font-size:10px; color:var(--accent); font-weight:600; }

  /* Layout */
  .two-col { display:grid; grid-template-columns: 1fr 300px; gap:20px; align-items:start; }

  /* Sections spacing (reduced) */
  section { margin-bottom: 12px; } /* 12px */

  /* Section titles (preserve hierarchy) */
  .section-title { font-family:var(--serif); font-size:11.5px; margin-bottom:5px; font-weight:700; color:var(--accent); text-transform:uppercase; font-variant:small-caps; }

  .meta-list { font-size:11px; color:#222; }

  /* Result panel: padding reduced for A4 fit */
  .result-panel { margin:18px 0; display:flex; justify-content:center; }
  .result-box {
    width:100%;
    max-width:640px;
    background:#ffffff;
    border:4px solid var(--accent);
    padding:14px 18px; /* reduced padding */
    box-shadow: 0 6px 18px rgba(11,43,74,0.08);
    text-align:center;
  }
  .result-label { font-size:11px; font-weight:700; color:#222; margin-bottom:6px; font-family: Inter, Arial, sans-serif; }
  .result-value { font-family:var(--serif); font-size:40px; font-weight:800; color:var(--accent); margin:6px 0; letter-spacing:1px; }
  .result-official { font-size:12px; font-weight:700; color:#222; margin-top:6px; }
  .result-note { font-size:10px; color:var(--muted); margin-top:4px; }

  /* Verification block */
  .verify-block { border:1px solid #d9d9d9; padding:10px; background:#f7f9fb; font-size:10.5px; margin-top:8px; }
  .verify-title { font-weight:700; color:var(--accent); font-size:11px; margin-bottom:6px; }

  /* Aside micro-block (scope summary) */
  .scope-summary { margin-top:12px; border-left:3px solid #e6eef8; padding-left:10px; font-size:10.5px; color:#222; }

  /* Final legal box */
  .final-box { border-top:1px solid #ddd; margin-top:18px; padding-top:12px; }
  .final-stamp { border:1px solid #e0e0e0; padding:10px; font-style:italic; color:#222; background:#fff; font-size:10.5px; }

  .muted { color:var(--muted); font-size:10px; }
  .small { font-size:10px; color:var(--muted); }
</style>
</head>
<body>
<div class="container">

  <header>
    <div class="issuer">
      ${CERTIF_SCOPE_LOGO_BASE64 ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" class="issuer-logo" />` : ""}
      <div class="issuer-name">${issuerName}</div>
      <div class="issuer-site">${issuerSite}</div>
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
    <div class="standard-ref">Standard reference: ${standardRef}</div>
    <div class="subtitle">Non-regulatory · Methodology-based · Indicative attestation</div>
  </div>

  <!-- Result emphasized and centered -->
  <div class="result-panel" role="region" aria-label="Estimated emissions result">
    <div class="result-box" role="figure" aria-labelledby="result-label">
      <div id="result-label" class="result-label">Declared aggregated indicative emissions</div>
      <div class="result-value">${totalCO2e} tCO₂e</div>
      <div class="result-note">(aggregated estimate based on declared expenditures)</div>
      <div class="result-official">Declared aggregated indicative emissions for reporting year</div>
    </div>
  </div>

  <div class="two-col">
    <div>
      <!-- 1 Identification of the issuer -->
      <section aria-labelledby="s1">
        <div class="section-title" id="s1">1. Identification of the issuer</div>
        <div class="meta-list">
          <div class="row"><strong>Issuer:</strong> ${issuerName}</div>
          <div class="row"><strong>Website:</strong> ${issuerSite}</div>
          <div class="row"><strong>Attestation reference:</strong> ${attestationId} <span class="small"> (Unique document identifier)</span></div>
          <div class="row"><strong>Issued date:</strong> ${issuedDate}</div>
          ${validUntil ? `<div class="row"><strong>Valid until:</strong> ${validUntil}</div>` : `<div class="row"><strong>Validity period:</strong> ${validityMonths} months</div>`}
        </div>
      </section>

      <!-- 2 Title of the document -->
      <section aria-labelledby="s2">
        <div class="section-title" id="s2">2. Title of the document</div>
        <div class="meta-list">
          <div><strong>This attestation constitutes an indicative technical attestation.</strong></div>
          <div style="margin-top:6px;">This attestation is issued for informational, decision-support, and preliminary procurement assessment purposes.</div>
        </div>
      </section>

      <!-- 3 Identification of the object certified -->
      <section aria-labelledby="s3">
        <div class="section-title" id="s3">3. Identification of the object certified</div>
        <div class="meta-list">
          <div class="row"><strong>Entity name:</strong> ${companyName}</div>
          <div class="row"><strong>Entity identifier:</strong> ${entityIdentifier}</div>
          <div class="row"><strong>Country:</strong> ${country}</div>
          <div class="row"><strong>Reporting year:</strong> ${year}</div>
        </div>
      </section>

      <!-- 4 Scope -->
      <section aria-labelledby="s4">
        <div class="section-title" id="s4">4. Scope</div>
        <div class="meta-list">
          <div><strong>Scope:</strong> Indicative estimation of greenhouse gas emissions derived exclusively from aggregated expenditure data using a spend-based approach. This attestation does not cover Scope 1 or Scope 2 emissions unless explicitly stated.</div>
          <div style="margin-top:6px; font-size:10.5px; color:var(--muted);"><strong>Note:</strong> This attestation is not intended to satisfy CSRD, ESRS, or mandatory regulatory reporting requirements.</div>
        </div>
      </section>

      <!-- 5 Normative references -->
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

      <!-- 6 Declaration of result -->
      <section aria-labelledby="s6">
        <div class="section-title" id="s6">6. Declaration of result</div>
        <div class="meta-list">
          <div style="font-style:italic; margin-bottom:8px;">Formal declaration</div>
          <div class="row"><strong>Declaration:</strong> Pursuant to the information provided by the entity, Certif-Scope hereby attests the above indicative aggregated emissions result for the reporting year stated.</div>
        </div>
      </section>

      <!-- 7 Methodology and limitations -->
      <section aria-labelledby="s7">
        <div class="section-title" id="s7">7. Methodology and limitations</div>
        <div class="meta-list">
          <ul>
            <li><strong>Methodology:</strong> ${methodology}</li>
            <li><strong>Limitations:</strong> No physical activity data; no Scope 1 or Scope 2 calculation; indicative model, not a GHG inventory.</li>
            <li><strong>Non-transferable:</strong> This attestation is issued to the named entity and is non-transferable.</li>
          </ul>
        </div>
      </section>
    </div>

    <aside>
      <!-- 8 Authentication and traceability (isolated) -->
      <section aria-labelledby="s8">
        <div class="section-title" id="s8">8. Verification & Integrity</div>
        <div class="verify-block">
          <div class="verify-title">Verification & Integrity</div>
          <div class="small">This attestation can be independently verified without access to the issuer's systems. Verification does not require access to Certif-Scope systems and remains possible even if the issuer becomes unavailable.</div>
          <div style="margin-top:8px;"><strong>Privacy by design:</strong> This attestation is generated without storage of underlying financial data. Verification relies solely on the attestation identifier and cryptographic integrity mechanisms.</div>
          <div style="margin-top:8px;"><strong>Verification URL:</strong><br/><a href="${verifyUrl}" style="color:var(--accent); text-decoration:none;">${verifyUrl}</a></div>
          <div class="small" style="margin-top:8px;">Scan the QR code at the top of this document to confirm authenticity and integrity.</div>

          <!-- Micro-block: document scope summary to balance layout -->
          <div class="scope-summary" style="margin-top:12px;">
            <strong>Document scope summary</strong>
            <div style="margin-top:6px;">
              – Indicative estimation<br/>
              – Spend-based methodology<br/>
              – Aggregated result only<br/>
              – Validity: ${validityMonths} months
            </div>
          </div>
        </div>
      </section>

      <!-- 9 Final clauses and liability (stamp-like) -->
      <section aria-labelledby="s9" style="margin-top:12px;">
        <div class="section-title" id="s9">9. Final clauses and liability</div>
        <div class="final-box">
          <div class="final-stamp">
            <div><strong>Issued pursuant to the Certif-Scope internal standard CS-SB-v1.</strong></div>
            <div style="margin-top:6px;"><strong>Legal effect:</strong> This document is indicative only and does not constitute a regulatory disclosure under CSRD, ESRS, or equivalent frameworks. It is provided for decision-support purposes.</div>
            <div style="margin-top:6px;"><strong>Liability:</strong> Results are derived exclusively from data provided by the entity, under its sole responsibility. Certif-Scope does not accept liability for inaccuracies in source data. This document is valid for a period of ${validityMonths} months from the issued date unless a specific valid-until date is provided.</div>
            <div style="margin-top:8px; color:var(--muted); font-size:10px;">Any alteration, reproduction, or misuse of this document may constitute an offense under applicable laws.</div>
            <div style="margin-top:8px; color:var(--muted); font-size:10px;"><strong>Certif-Scope does not perform audit, validation, verification, or assurance services.</strong></div>
            <div style="margin-top:8px; color:var(--muted); font-size:10px;"><em>CS-SB-v1 is an internal standardized methodology maintained by Certif-Scope.</em></div>
          </div>
        </div>
      </section>
    </aside>
  </div>

  <div class="footer muted" style="margin-top:18px;">
    For verification and audit trail, consult the verification URL or contact ${issuerName} via ${issuerSite}.
  </div>

</div>
</body>
</html>
`;

    const pdfResponse = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.PDFSHIFT_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: html,
        format: "A4",
        use_print: true,
      }),
    });

    if (!pdfResponse.ok) {
      const error = await pdfResponse.text();
      return new Response(error, { status: pdfResponse.status });
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());
    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${issuerName.toLowerCase().replace(/\\s+/g,'-')}-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
}
