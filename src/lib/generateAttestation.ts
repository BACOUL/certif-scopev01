import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import crypto from "crypto";

export type AttestationData = {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  totalEmissions?: number;
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

  await page.setContent(html, { waitUntil: "networkidle0" });

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

  return Buffer.from(pdf);
}

/* =======================
   HTML PREMIUM
======================= */

function buildHtml(data: AttestationData): string {
  const hash = crypto
    .createHash("sha256")
    .update(
      JSON.stringify({
        attestationId: data.attestationId,
        companyName: data.companyName,
        country: data.country,
        year: data.year,
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
<title>CO₂e Attestation</title>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #0B3A63;
    margin: 0;
    padding: 0;
  }

  .page {
    border: 2px solid #0B3A63;
    border-radius: 14px;
    padding: 32px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }

  .logo {
    height: 42px;
  }

  .title {
    text-align: right;
  }

  h1 {
    margin: 0;
    font-size: 22px;
  }

  .subtitle {
    font-size: 11px;
    color: #444;
    margin-top: 4px;
  }

  .section {
    margin-bottom: 22px;
  }

  .section-title {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .label {
    font-size: 10px;
    font-weight: bold;
  }

  .value {
    font-size: 11px;
    margin-bottom: 6px;
  }

  .result-box {
    border: 1px solid #0B3A63;
    border-radius: 10px;
    padding: 18px;
    text-align: center;
    margin: 24px 0;
  }

  .result {
    font-size: 26px;
    font-weight: bold;
    margin-top: 6px;
  }

  .small {
    font-size: 9px;
    color: #444;
    line-height: 1.4;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 28px;
  }

  .hash {
    font-size: 9px;
    word-break: break-all;
    margin-top: 6px;
  }
</style>
</head>
<body>
  <div class="page">

    <div class="header">
      <img src="${process.env.NEXT_PUBLIC_BASE_URL}/logo.png" class="logo" />
      <div class="title">
        <h1>CO₂e Attestation</h1>
        <div class="subtitle">
          Instant spend-based estimate for institutional use
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Entity information</div>

      <div class="label">Attestation ID</div>
      <div class="value">${data.attestationId}</div>

      <div class="label">Company / Legal entity</div>
      <div class="value">${data.companyName}</div>

      <div class="label">Main country</div>
      <div class="value">${data.country}</div>

      <div class="label">Reference year</div>
      <div class="value">${data.year}</div>
    </div>

    <div class="result-box">
      <div class="label">Total estimated emissions</div>
      <div class="result">
        ${data.totalEmissions !== undefined ? `${data.totalEmissions} tCO₂e` : "Indicative CO₂e value"}
      </div>
      <div class="small">
        Spend-based estimation derived from annual external expenditures
      </div>
    </div>

    <div class="section">
      <div class="section-title">Methodology</div>
      <div class="small">
        This attestation is generated using a standardized spend-based methodology.
        Annual external expenditures are converted into estimated CO₂e emissions
        using sector-average emission factors. This approach is commonly used when
        physical activity data is not available.
      </div>
    </div>

    <div class="section">
      <div class="section-title">Scope & limitations</div>
      <div class="small">
        This document provides an indicative estimate only. It does not constitute
        a full greenhouse gas inventory, audit, or regulatory reporting under CSRD,
        ESRS, or equivalent frameworks. Scope 1 and Scope 2 emissions are not included.
      </div>
    </div>

    <div class="footer">
      <div style="max-width:65%">
        <div class="section-title">Verification</div>
        <div class="small">${data.verificationUrl}</div>
        <div class="hash">SHA-256: ${hash}</div>
        <div class="small">
          Verifiable independently — no data stored by Certif-Scope
        </div>
      </div>
      <img src="${qrUrl}" width="90" height="90" />
    </div>

  </div>
</body>
</html>
`;
}
