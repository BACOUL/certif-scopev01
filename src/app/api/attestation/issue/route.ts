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

    // 2. Stripe = vérité absolue
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const companyName = metadata.companyName || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";
    const totalCO2e = metadata.totalCO2e || "—";
    const methodology =
      metadata.methodology || "Spend-based deterministic estimation";

    // 3. QR Code
    const qrDataUrl = await QRCode.toDataURL(
      `https://certif-scope.io/verify?id=${attestationId}`,
      { width: 72, margin: 1 }
    );

    // 4. HTML FINAL (source PDF)
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Certif-Scope Attestation</title>
  <style>
    body {
      font-family: Helvetica, Arial, sans-serif;
      color: #0B3A63;
      padding: 64px;
      font-size: 12px;
    }
    h1 {
      font-family: "Times New Roman", serif;
      font-size: 28px;
      text-align: center;
      margin-bottom: 40px;
    }
    .section {
      margin-bottom: 24px;
    }
    .label {
      font-weight: bold;
    }
    .small {
      font-size: 11px;
      color: #333;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <h1>Indicative Carbon Emissions Attestation</h1>

  <div class="section small">
    This attestation is issued through a standardized, deterministic issuance
    process operated by Certif-Scope, for indicative decision-support purposes only.
  </div>

  <div class="section">
    <div class="small"><span class="label">Entity:</span> ${companyName}</div>
    <div class="small"><span class="label">Country:</span> ${country}</div>
    <div class="small"><span class="label">Reference year:</span> ${year}</div>
    <div class="small"><span class="label">Indicative estimated value:</span> ${totalCO2e} tCO₂e</div>
  </div>

  <div class="section">
    <div class="small"><span class="label">Attestation ID:</span> ${attestationId}</div>
    <div class="small"><span class="label">Methodology:</span> ${methodology}</div>
  </div>

  <div class="section">
    <img src="${qrDataUrl}" width="72" height="72" />
    <div class="small">Verification via QR code.</div>
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
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Issuance error:", err);
    return new Response("Failed to issue attestation", { status: 500 });
  }
}
