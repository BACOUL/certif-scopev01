/* ======================================================================
   FILE: src/app/api/attestation/issue/route.ts
   ====================================================================== */

export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";

/*
======================================================================
CERTIF-SCOPE LOGO — BASE64
➡️ COLLE ICI UNIQUEMENT LE CONTENU BASE64 DU LOGO
➡️ SANS "data:image/png;base64,"
➡️ SANS SAUT DE LIGNE
➡️ ENTRE LES GUILLEMETS UNIQUEMENT
======================================================================
*/
const CERTIF_SCOPE_LOGO_BASE64 = "COLLE_ICI_TON_BASE64_EN_UNE_SEULE_LIGNE";
/*
======================================================================
*/

/*
IMPORTANT — STRIPE
❗️NE PAS forcer apiVersion
La version est typée côté SDK (ex: "2025-12-15.clover")
Forcer une autre valeur provoque une erreur TypeScript.
*/
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
  try {
    /* ============================================================
       1. CHECK CONFIG
       ============================================================ */
    if (!process.env.STRIPE_SECRET_KEY) {
      return new Response("STRIPE_SECRET_KEY missing", { status: 500 });
    }

    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    /* ============================================================
       2. GET SESSION ID
       ============================================================ */
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    /* ============================================================
       3. STRIPE = SOURCE OF TRUTH
       ============================================================ */
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const companyName = metadata.companyName || "—";
    const entityIdentifier = metadata.entityIdentifier || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";
    const totalCO2e = metadata.totalCO2e || "—";
    const methodology =
      metadata.methodology ||
      "Certif-Scope deterministic spend-based methodology v1.0";

    const issuedAtUtc = new Date().toISOString();

    /* ============================================================
       4. QR CODE (PUBLIC VERIFICATION)
       ============================================================ */
    const qrCodeDataUrl = await QRCode.toDataURL(
      `https://certif-scope.io/verify?id=${attestationId}`,
      { width: 96, margin: 1 }
    );

    /* ============================================================
       5. HTML ATTESTATION (FINAL)
       ============================================================ */
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Certif-Scope Attestation</title>
  <style>
    body {
      font-family: Inter, Helvetica, Arial, sans-serif;
      color: #0b0b0b;
      padding: 64px;
      font-size: 11px;
      line-height: 1.5;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 24px;
      margin-bottom: 48px;
    }

    .issuer {
      max-width: 65%;
    }

    .issuer-logo {
      height: 28px;
      margin-bottom: 12px;
    }

    .issuer-name {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .issuer-role {
      font-size: 11px;
      font-weight: 500;
      color: #374151;
      margin-bottom: 6px;
    }

    .issuer-meta {
      font-size: 10px;
      color: #6b7280;
    }

    .qr {
      text-align: center;
    }

    .qr img {
      width: 72px;
      height: 72px;
      margin-bottom: 6px;
    }

    .qr-caption {
      font-size: 9px;
      color: #6b7280;
    }

    .section-title {
      text-align: center;
      margin: 48px 0 40px;
    }

    .doc-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .doc-subtitle {
      font-size: 11px;
      color: #6b7280;
    }

    .section {
      margin-bottom: 28px;
    }

    .small {
      font-size: 10.5px;
      color: #374151;
    }

    .label {
      font-weight: 600;
    }

    .section-title-left {
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .reference-list,
    .scope-list {
      margin: 0 0 10px 16px;
      padding: 0;
    }

    .reference-list li,
    .scope-list li {
      margin-bottom: 4px;
    }

    .footer {
      margin-top: 48px;
      border-top: 1px solid #e5e7eb;
      padding-top: 16px;
      font-size: 9px;
      color: #6b7280;
    }
  </style>
</head>
<body>

<!-- SECTION 1 — ISSUER -->
<div class="header">
  <div class="issuer">
    <img
      class="issuer-logo"
      src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}"
      alt="Certif-Scope logo"
    />
    <div class="issuer-name">Certif-Scope</div>
    <div class="issuer-role">
      Independent issuer of standardized indicative carbon attestations
    </div>
    <div class="issuer-meta">
      Automated issuance system · No human signatory<br/>
      Issued (UTC): ${issuedAtUtc}
    </div>
  </div>

  <div class="qr">
    <img src="${qrCodeDataUrl}" alt="Verification QR code" />
    <div class="qr-caption">Verify authenticity and integrity</div>
  </div>
</div>

<!-- SECTION 2 — TITLE -->
<section class="section-title">
  <div class="doc-title">Indicative Carbon Emissions Attestation</div>
  <div class="doc-subtitle">
    Non-regulatory · Methodology-based · Decision-support document
  </div>
</section>

<!-- SECTION 3 — ENTITY -->
<section class="section small">
  <div><span class="label">Entity name:</span> ${companyName}</div>
  <div><span class="label">Entity identifier:</span> ${entityIdentifier}</div>
  <div><span class="label">Country:</span> ${country}</div>
  <div><span class="label">Reporting year:</span> ${year}</div>
</section>

<!-- SECTION 4 — SCOPE -->
<section class="section small">
  <div class="section-title-left">Scope of the attestation</div>
  <p>
    This attestation covers an indicative, non-regulatory estimation of
    greenhouse gas emissions based exclusively on aggregated expenditure
    data using a spend-based approach.
  </p>
</section>

<!-- SECTION 5 — REFERENCES -->
<section class="section small">
  <div class="section-title-left">Technical and normative references</div>
  <ul class="reference-list">
    <li>GHG Protocol – Scope 3, spend-based method (reference)</li>
    <li>ISO 14064-1 – Principles and terminology (reference)</li>
    <li>ISO 14083 – Value chain emission factors (reference)</li>
    <li>CSRD / ESRS / EU Taxonomy – contextual references</li>
  </ul>
</section>

<!-- SECTION 6 — RESULT -->
<section class="section small">
  <div class="section-title-left">Estimated emissions result</div>
  <div>
    <span class="label">Total estimated emissions:</span>
    ${totalCO2e} tCO₂e
  </div>
</section>

<!-- SECTION 7 — METHODOLOGY -->
<section class="section small">
  <div class="section-title-left">Methodology overview</div>
  <p>
    The estimation is generated using the
    <strong>${methodology}</strong>.
  </p>
  <ul class="scope-list">
    <li>Spend-based calculation using aggregated financial data</li>
    <li>No physical activity or operational data</li>
    <li>No Scope 1 or Scope 2 calculation</li>
    <li>Indicative model, not a GHG inventory</li>
  </ul>
</section>

<!-- SECTION 8 — TRACEABILITY -->
<section class="section small">
  <div class="section-title-left">Authentication and traceability</div>
  <div><span class="label">Attestation ID:</span> ${attestationId}</div>
  <div>
    Authenticity and integrity can be verified using the QR code or
    the public verification interface.
  </div>
</section>

<!-- FINAL CLAUSES -->
<div class="footer">
  This attestation is indicative only.<br/><br/>
  It does not constitute a regulatory report, a greenhouse gas inventory,
  a third-party verified statement, or a CSRD / ESRS-compliant disclosure.<br/><br/>
  Results are derived exclusively from data provided by the entity, under its
  sole responsibility, using a standardized spend-based estimation model.<br/><br/>
  Certif-Scope does not store input data and does not perform audit,
  validation, verification, or assurance services.
</div>

</body>
</html>`;

    /* ============================================================
       6. PDFSHIFT
       ============================================================ */
    const pdfResponse = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`api:${process.env.PDFSHIFT_API_KEY}`).toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: html,
        format: "A4",
        margin: "20mm",
      }),
    });

    if (!pdfResponse.ok) {
      const err = await pdfResponse.text();
      return new Response(`PDF generation failed: ${err}`, { status: 500 });
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();

    /* ============================================================
       7. RESPONSE
       ============================================================ */
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal server error", { status: 500 });
  }
       }
