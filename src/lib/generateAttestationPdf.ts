import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import crypto from "crypto";

export async function generateAttestationPdf(html: string) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  // 👉 format A4, margins propres pour attestation
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      right: "15mm",
      bottom: "20mm",
      left: "15mm",
    },
  });

  await browser.close();

  // 🔐 Empreinte SHA-256 (preuve d’intégrité)
  const hash = crypto
    .createHash("sha256")
    .update(pdfBuffer)
    .digest("hex");

  return {
    pdfBuffer,
    sha256: hash,
  };
}
