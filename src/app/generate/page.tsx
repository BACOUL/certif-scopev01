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
    executablePath:
      process.env.VERCEL
        ? await chromium.executablePath()
        : undefined,
    headless: true,
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  const pdfUint8 = await page.pdf({
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

  // ⚠️ conversion CRITIQUE
  return Buffer.from(pdfUint8);
}

/* ---------------- HTML ---------------- */

function buildHtml(data: AttestationData): string {
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(data))
    .digest("hex");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #0B3A63;
      padding: 40px;
    }
    h1 { font-size: 24px; }
    .block { margin-bottom: 16px; }
    .label { font-weight: bold; }
    .hash {
      font-size: 10px;
      word-break: break-all;
      color: #555;
    }
  </style>
</head>
<body>

  <h1>CO₂e Attestation</h1>

  <div class="block"><span class="label">Attestation ID:</span> ${data.attestationId}</div>
  <div class="block"><span class="label">Company:</span> ${data.companyName}</div>
  <div class="block"><span class="label">Country:</span> ${data.country}</div>
  <div class="block"><span class="label">Year:</span> ${data.year}</div>

  <div class="block">
    <span class="label">Total emissions:</span><br/>
    <strong>${data.totalEmissions.toFixed(2)} tCO₂e</strong>
  </div>

  <div class="block">
    Verification URL:<br/>
    ${data.verificationUrl}
  </div>

  <div class="hash">SHA-256: ${hash}</div>

</body>
</html>
`;
}
