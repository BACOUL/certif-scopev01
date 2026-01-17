import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import crypto from "crypto";

export type AttestationData = {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  totalEmissions: number;
  verificationUrl: string;
};

export async function generateAttestationPdf(
  data: AttestationData
): Promise<Buffer> {
  const html = buildHtml(data);

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      right: "20mm",
      bottom: "20mm",
      left: "20mm",
    },
  });

  await browser.close();

  // ✅ FIX TYPE — Uint8Array → Buffer
  return Buffer.from(pdf);
}

/* ---------------- HTML ---------------- */

function buildHtml(data: AttestationData): string {
  const hash = crypto
    .createHash("sha256")
    .update(
      JSON.stringify({
        attestationId: data.attestationId,
        companyName: data.companyName,
        country: data.country,
        year: data.year,
        totalEmissions: data.totalEmissions,
      })
    )
    .digest("hex");

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
    data.verificationUrl
  )}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #0B3A63;
      margin: 0;
      padding: 0;
    }

    .container {
      border: 2px solid #0B3A63;
      border-radius: 12px;
      padding: 32px;
      height: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }

    .logo {
      height: 48px;
    }

    h1 {
      margin: 0;
      font-size: 24px;
    }

    .section {
      margin-bottom: 24px;
    }

    .label {
      font-weight: bold;
    }

    .result {
      font-size: 22px;
      font-weight: bold;
      margin-top: 8px;
    }

    .note {
      font-size: 12px;
      color: #444;
      margin-top: 4px;
    }

    .footer {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 12px;
      color: #444;
    }

    .hash {
      font-size: 10px;
      word-break: break-all;
      margin-top: 4px;
    }
  </style>
</head>
<body>
  <div class="container">

    <div class="header">
      <img
        src="https://certif-scopev01.vercel.app/logo.png"
        class="logo"
        alt="Certif-Scope"
      />
      <h1>CO₂e Attestation (Indicative)</h1>
    </div>

    <div class="section">
      <div><span class="label">Attestation ID:</span> ${data.attestationId}</div>
      <div><span class="label">Company:</span> ${data.companyName}</div>
      <div><span class="label">Country:</span> ${data.country}</div>
      <div><span class="label">Reference year:</span> ${data.year}</div>
    </div>

    <div class="section">
      <div class="label">Total estimated emissions</div>
      <div class="result">${data.totalEmissions.toFixed(2)} tCO₂e</div>
      <div class="note">
        Methodology: Spend-based estimation (indicative, non-audited)
      </div>
    </div>

    <div class="footer">
      <div>
        <div class="label">Verification</div>
        <div>${data.verificationUrl}</div>
        <div class="hash">SHA-256: ${hash}</div>
      </div>
      <img src="${qrUrl}" alt="Verification QR code" />
    </div>

  </div>
</body>
</html>
`;
}
