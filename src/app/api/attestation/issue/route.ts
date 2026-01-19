export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
  try {
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    // 1. session_id depuis l’URL
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    // 2. Stripe = source de vérité
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

    // 3. QR Code
    const qrDataUrl = await QRCode.toDataURL(
      `https://certif-scope.io/verify?id=${attestationId}`,
      { width: 72, margin: 1 }
    );

    // 4. HTML FINAL — INSTITUTIONAL
    const html = `
<!DOCTYPE html>
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

    /* ===== SECTION 1 ===== */

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

    /* ===== SECTION 2 ===== */

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

    /* ===== SECTIONS GENERIC ===== */

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

    /* ===== SECTION 3 ===== */

    .section-object .row {
      margin-bottom: 6px;
    }

    /* ===== FOOTER ===== */

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

  <!-- SECTION 1 — ISSUER IDENTIFICATION -->
  <div class="header">
    <div class="issuer">
      <img src="/logo.png" alt="Certif-Scope logo" class="issuer-logo" />
      <div class="issuer-name">Certif-Scope</div>
      <div class="issuer-role">
        Independent issuer of standardized indicative carbon attestations
      </div>
      <div class="issuer-meta">
        Automated issuance system · No human signatory<br/>
        Attestation format: Certif-Scope v1.x
      </div>
    </div>

    <div class="qr">
      <img src="${qrDataUrl}" alt="Verification QR code" />
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

  <!-- SECTION 3 — IDENTIFICATION OF THE OBJECT CERTIFIED -->
  <section class="section section-object small">
    <div class="row"><span class="label">Entity name:</span> ${companyName}</div>
    <div class="row"><span class="label">Entity identifier:</span> ${entityIdentifier}</div>
    <div class="row"><span class="label">Country:</span> ${country}</div>
    <div class="row"><span class="label">Reporting year:</span> ${year}</div>
  </section>

  <!-- SECTION 4 — RESULT -->
  <section class="section small">
    <div><span class="label">Total estimated emissions:</span> ${totalCO2e} tCO₂e</div>
  </section>

  <!-- SECTION 5 — METHODOLOGY -->
  <section class="section small">
    <div><span class="label">Methodology:</span> ${methodology}</div>
  </section>

  <!-- SECTION 6 — TRACEABILITY -->
  <section class="section small">
    <div><span class="label">Attestation ID:</span> ${attestationId}</div>
    <div>Verification available via QR code or public verification interface.</div>
  </section>

  <!-- SECTION 7 — LEGAL CLAUSES -->
  <div class="footer">
    This attestation is indicative only. It does not constitute a regulatory report,
    a GHG inventory, or a CSRD/ESRS-compliant disclosure. All input data remain under
    the responsibility of the user. Certif-Scope does not retain underlying business
    or financial data.
  </div>

</body>
</html>
`;

    // 5. PDFShift
    const response = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.PDFSHIFT_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: html,
        format: "A4",
        margin: {
          top: "24mm",
          right: "20mm",
          bottom: "24mm",
          left: "20mm",
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return new Response(error, { status: response.status });
    }

    const pdfBuffer = await response.arrayBuffer();

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": \`attachment; filename="certif-scope-\${attestationId}.pdf"\`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Issuance error:", err);
    return new Response("Failed to issue attestation", { status: 500 });
  }
}
