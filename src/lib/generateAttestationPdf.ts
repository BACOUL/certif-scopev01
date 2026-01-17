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
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      bottom: "20mm",
      left: "20mm",
      right: "20mm",
    },
  });

  await browser.close();
  return pdf;
}

/* ---------------- HTML ---------------- */

function buildHtml(data: AttestationData): string {
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(data))
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
      font-family: Arial, sans-serif;
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
      margin-bottom: 20px;
    }
    .label {
      font-weight: bold;
    }
    .footer {
      margin-top: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #444;
    }
    .hash {
      word-break: break-all;
      font-size: 10px;
    }
  </style>
</head>
<body>
  <div class="container">

    <div class="header">
      <img src="https://certif-scopev01.vercel.app/logo.png" class="logo" />
      <h1>CO₂e Attestation</h1>
    </div>

    <div class="section">
      <div><span class="label">Attestation ID:</span> ${data.attestationId}</div>
      <div><span class="label">Company:</span> ${data.companyName}</div>
      <div><span class="label">Country:</span> ${data.country}</div>
      <div><span class="label">Reference year:</span> ${data.year}</div>
    </div>

    <div class="section">
      <div><span class="label">Total estimated emissions:</span></div>
      <div style="font-size:22px;font-weight:bold;">
        ${data.totalEmissions.toFixed(2)} tCO₂e
      </div>
      <div style="font-size:12px;">
        Methodology: Spend-based (indicative, non-audited)
      </div>
    </div>

    <div class="footer">
      <div>
        <div class="label">Verification</div>
        <div>${data.verificationUrl}</div>
        <div class="hash">SHA-256: ${hash}</div>
      </div>
      <img src="${qrUrl}" />
    </div>

  </div>
</body>
</html>
`;
}
