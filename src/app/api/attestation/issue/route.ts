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

Si tu ne veux PAS de logo :
- laisse la constante vide ""
==============================================================================
*/
const CERTIF_SCOPE_LOGO_BASE64 = "";

export async function GET(req: Request) {
  try {
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    /* ---------------------------------------------------------------------
       1. Stripe — source de vérité
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
       2. QR Code — vérification publique
    --------------------------------------------------------------------- */
    const qrDataUrl = await QRCode.toDataURL(
      `https://certif-scope.io/verify?id=${attestationId}`,
      { width: 72, margin: 1 }
    );

    /* ---------------------------------------------------------------------
       3. HTML — VERSION PREMIUM / 1 PAGE / 9 SECTIONS CANONIQUES
    --------------------------------------------------------------------- */
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Certif-Scope Attestation</title>

<style>
  @page { size: A4; margin: 24mm; }

  body {
    font-family: Inter, Helvetica, Arial, sans-serif;
    font-size: 10.5px;
    line-height: 1.45;
    color: #0b0b0b;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 14px;
    margin-bottom: 20px;
  }

  .issuer { max-width: 65%; }

  .issuer-logo {
    height: 26px;
    margin-bottom: 6px;
  }

  .issuer-name {
    font-size: 12px;
    font-weight: 600;
  }

  .issuer-meta {
    font-size: 9px;
    color: #6b7280;
    margin-top: 4px;
  }

  .qr {
    text-align: center;
    font-size: 8.5px;
    color: #6b7280;
  }

  .qr img {
    width: 64px;
    height: 64px;
    margin-bottom: 4px;
  }

  .title {
    text-align: center;
    margin: 18px 0 18px;
  }

  .title h1 {
    font-size: 18px;
    margin: 0;
    font-weight: 600;
  }

  .subtitle {
    font-size: 10px;
    color: #6b7280;
    margin-top: 4px;
  }

  .section {
    margin-bottom: 14px;
  }

  .section-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .row { margin-bottom: 3px; }
  .label { font-weight: 600; }

  .result-box {
    border: 1px solid #e5e7eb;
    padding: 16px;
    text-align: center;
    margin: 18px 0 20px;
  }

  .result-value {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .result-unit {
    font-size: 10px;
    color: #374151;
  }

  ul {
    margin: 4px 0 0 14px;
    padding: 0;
  }

  li { margin-bottom: 3px; }

  .footer {
    border-top: 1px solid #e5e7eb;
    margin-top: 18px;
    padding-top: 10px;
    font-size: 8.8px;
    color: #6b7280;
  }
</style>
</head>

<body>

<!-- 1. IDENTIFICATION DE L’ÉMETTEUR -->
<div class="header">
  <div class="issuer">
    ${
      CERTIF_SCOPE_LOGO_BASE64
        ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" class="issuer-logo" />`
        : ""
    }
    <div class="issuer-name">Certif-Scope</div>
    <div class="issuer-meta">
      Independent issuer of standardized indicative carbon attestations<br/>
      Automated issuance · No human signatory · Format v1.x
    </div>
  </div>
  <div class="qr">
    <img src="${qrDataUrl}" />
    Verify authenticity
  </div>
</div>

<!-- 2. TITRE DU DOCUMENT -->
<div class="title">
  <h1>Indicative Carbon Emissions Attestation</h1>
  <div class="subtitle">
    Non-regulatory · Methodology-based · Decision-support document
  </div>
</div>

<!-- 3. IDENTIFICATION DE L’OBJET CERTIFIÉ -->
<div class="section">
  <div class="section-title">3. Identification of the certified entity</div>
  <div class="row"><span class="label">Entity name:</span> ${companyName}</div>
  <div class="row"><span class="label">Entity identifier:</span> ${entityIdentifier}</div>
  <div class="row"><span class="label">Country:</span> ${country}</div>
  <div class="row"><span class="label">Reporting year:</span> ${year}</div>
</div>

<!-- 4. PORTÉE / SCOPE -->
<div class="section">
  <div class="section-title">4. Scope of the attestation</div>
  <p>
    Indicative estimation of greenhouse gas emissions based exclusively on
    aggregated expenditure data using a spend-based approach.
  </p>
</div>

<!-- 5. RÉFÉRENCES TECHNIQUES / NORMATIVES -->
<div class="section">
  <div class="section-title">5. Technical and normative references</div>
  <ul>
    <li>GHG Protocol – Scope 3 (spend-based approach)</li>
    <li>ISO 14064-1 (reference framework)</li>
    <li>ISO 14083 (value chain emissions)</li>
    <li>CSRD / ESRS / EU Taxonomy (contextual references)</li>
  </ul>
</div>

<!-- 6. DÉCLARATION DE RÉSULTAT -->
<div class="result-box">
  <div class="section-title">6. Indicative emissions result</div>
  <div class="result-value">${totalCO2e}</div>
  <div class="result-unit">tCO₂e (indicative)</div>
</div>

<!-- 7. MÉTHODOLOGIE -->
<div class="section">
  <div class="section-title">7. Methodology statement</div>
  <p>
    Result generated using the <strong>${methodology}</strong>, based on a
    deterministic spend-based estimation model. No physical activity data,
    no Scope 1 or Scope 2 emissions, and no audit or verification performed.
  </p>
</div>

<!-- 8. AUTHENTIFICATION ET TRAÇABILITÉ -->
<div class="section">
  <div class="section-title">8. Authentication and traceability</div>
  <div><span class="label">Attestation ID:</span> ${attestationId}</div>
  <div>
    Authenticity and integrity can be verified independently via the QR code
    or the public verification interface.
  </div>
</div>

<!-- 9. CLAUSES FINALES -->
<div class="footer">
  This attestation is indicative only. It does not constitute a regulatory
  carbon footprint, a greenhouse gas inventory, a third-party verified
  statement, or a CSRD / ESRS-compliant disclosure.<br/><br/>

  Results are derived exclusively from data provided by the entity, under its
  sole responsibility. Certif-Scope does not store input data and does not
  perform audit, validation, verification, or assurance services.
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
        "Content-Disposition": \`attachment; filename="certif-scope-\${attestationId}.pdf"\`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
      }
