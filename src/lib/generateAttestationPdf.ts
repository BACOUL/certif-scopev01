import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import crypto from "crypto";

export async function generateAttestationPdf(html: string) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
  });

  const page = await browser.newPage();

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

  // 🔐 Preuve d’intégrité (SHA-256)
  const sha256 = crypto
    .createHash("sha256")
    .update(pdfBuffer)
    .digest("hex");

  return {
    pdfBuffer,
    sha256,
  };
}
