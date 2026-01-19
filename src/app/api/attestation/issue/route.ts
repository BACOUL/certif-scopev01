// src/app/api/attestation/issue/route.ts

export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/*
==============================================================================
LOGO BASE64
👉 COLLE ICI UNIQUEMENT LE CONTENU BASE64 DU LOGO
(sans "data:image/png;base64," et sans retour à la ligne)
==============================================================================
*/
const CERTIF_SCOPE_LOGO_BASE64 = "";

export async function GET(req: Request) {
  try {
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    /* ---------------------------------------------------------------------
       1. Stripe session (source de vérité)
    --------------------------------------------------------------------- */
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

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

    /* ---------------------------------------------------------------------
       2. QR CODE (vérification publique)
    --------------------------------------------------------------------- */
    const qrDataUrl = await QRCode.toDataURL(
      `https://certif-scope.com/verify?id=${attestationId}`,
      { width: 90, margin: 1 }
    );

    /* ---------------------------------------------------------------------
       3. HTML — ATTESTATION PREMIUM 1 PAGE / 9 SECTIONS
       Style inspiré documents officiels (État / TCF)
    --------------------------------------------------------------------- */
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Certif-Scope Attestation</title>

<style>
  @page {
    size: A4;
    margin: 22mm;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10.2px;
    line-height: 1.45;
    color: #000;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
    margin-bottom: 14px;
  }

  .issuer {
    max-width: 70%;
  }

  .issuer-logo {
    height: 28px;
    margin-bottom: 4px;
  }

  .issuer-name {
    font-size: 13px;
    font-weight: bold;
  }

  .issuer-site {
    font-size: 9px;
  }

  .issuer-meta {
    font-size: 9px;
    margin-top: 4px;
  }

  .qr {
    text-align: center;
    font-size: 8px;
  }

  .qr img {
    width: 80px;
    height: 80px;
  }

  .title {
    text-align: center;
    margin: 14px 0 12px;
  }

  .title h1 {
    font-size: 17px;
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 9.5px;
    margin-top: 4px;
  }

  .section {
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .row {
    margin-bottom: 2px;
  }

  .label {
    font-weight: bold;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .result-box {
    border: 2px solid #000;
    padding: 10px;
    text-align: center;
    margin: 12px 0;
  }

  .result-value {
    font-size: 22px;
    font-weight: bold;
    margin: 6px 0;
  }

  ul {
    margin: 4px 0 0 14px;
    padding: 0;
  }

  li {
    margin-bottom: 2px;
  }

  .footer {
    border-top: 1px solid #000;
    margin-top: 10px;
    padding-top: 6px;
    font-size: 8.5px;
  }
</style>
</head>

<body>

<!-- 1. ISSUER -->
<div class="header">
  <div class="issuer">
    ${
      CERTIF_SCOPE_LOGO_BASE64
        ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" class="issuer-logo" />`
        : ""
    }
    <div class="issuer-name">Certif-Scope</div>
    <div class="issuer-site">https://certif-scope.com</div>
    <div class="issuer-meta">
      Independent issuer of standardized indicative carbon attestations<br/>
      Automated issuance · No human signatory
    </div>
  </div>

  <div class="qr">
    <img src="${qrDataUrl}" /><br/>
    Verification QR
  </div>
</div>

<!-- 2. TITLE -->
<div class="title">
  <h1>Indicative Carbon Emissions Attestation</h1>
  <div class="subtitle">
    Non-regulatory · Methodology-based · Decision-support document
  </div>
</div>

<!-- 3 & 4 -->
<div class="grid-2 section">
  <div>
    <div class="section-title">3. Entity identification</div>
    <div class="row"><span class="label">Entity name:</span> ${companyName}</div>
    <div class="row"><span class="label">Entity identifier:</span> ${entityIdentifier}</div>
    <div class="row"><span class="label">Country:</span> ${country}</div>
    <div class="row"><span class="label">Reporting year:</span> ${year}</div>
  </div>

  <div>
    <div class="section-title">4. Scope of the attestation</div>
    Indicative estimation of greenhouse gas emissions based exclusively on
    aggregated expenditure data using a spend-based approach.
  </div>
</div>

<!-- 6. RESULT -->
<div class="result-box">
  <div class="section-title">6. Estimated emissions result</div>
  <div class="result-value">${totalCO2e} tCO₂e</div>
  Indicative aggregated value
</div>

<!-- 5 & 7 -->
<div class="grid-2 section">
  <div>
    <div class="section-title">5. Technical references</div>
    <ul>
      <li>GHG Protocol – Scope 3 (spend-based)</li>
      <li>ISO 14064-1 (reference)</li>
      <li>ISO 14083 (reference)</li>
      <li>CSRD / ESRS / EU Taxonomy (context)</li>
    </ul>
  </div>

  <div>
    <div class="section-title">7. Methodology & limitations</div>
    <ul>
      <li>${methodology}</li>
      <li>No physical activity data</li>
      <li>No Scope 1 or Scope 2 calculation</li>
      <li>Indicative model, not a GHG inventory</li>
    </ul>
  </div>
</div>

<!-- 8 -->
<div class="section">
  <div class="section-title">8. Authentication and traceability</div>
  <div class="row"><span class="label">Attestation ID:</span> ${attestationId}</div>
  Authenticity and integrity can be verified via QR code or public interface.
</div>

<!-- 9 -->
<div class="footer">
  <strong>9. Legal notice</strong><br/>
  This attestation is indicative only. It does not constitute a regulatory report,
  a greenhouse gas inventory, a third-party verified statement, or a CSRD / ESRS
  compliant disclosure.<br/><br/>
  Results are derived exclusively from data provided by the entity, under its sole
  responsibility. Certif-Scope does not perform audit, validation, verification,
  or assurance services.
</div>

</body>
</html>
`;

    /* ---------------------------------------------------------------------
       4. PDFSHIFT
    --------------------------------------------------------------------- */
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
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
}
