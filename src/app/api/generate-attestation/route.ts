import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

function sha256(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    /* ============================
       1. INPUT (TEMPORAIREMENT SIMPLE)
       ============================ */

    const {
      supplierName = "Example Supplier Ltd",
      country = "France",
      activity = "Professional services",
      referenceYear = "2024",
      co2Value = "23.4",
      language = "en",
    } = req.body || {};

    /* ============================
       2. IDENTIFIANTS
       ============================ */

    const attestationId = `CS-ATT-${new Date().getFullYear()}-${uuidv4()
      .split("-")[0]
      .toUpperCase()}`;

    const issuedDate = new Date().toISOString().split("T")[0];

    /* ============================
       3. CANONICAL PAYLOAD (HASH INTERNE)
       ============================ */

    const canonicalPayload = JSON.stringify({
      attestationId,
      issuedDate,
      supplierName,
      country,
      activity,
      referenceYear,
      co2Value,
    });

    const issuanceHash = sha256(canonicalPayload);

    /* ============================
       4. URLS
       ============================ */

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    const verifyUrl = `${baseUrl}/verify/${attestationId}`;
    const logoUrl = `${baseUrl}/logo.png`;

    /* ============================
       5. QR CODE
       ============================ */

    const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, {
      margin: 1,
      width: 300,
    });

    /* ============================
       6. LOAD HTML TEMPLATE
       ============================ */

    const templatePath = path.join(
      process.cwd(),
      "lib",
      "attestations",
      `attestation.${language}.html`
    );

    let html = fs.readFileSync(templatePath, "utf8");

    /* ============================
       7. INJECT VARIABLES
       ============================ */

    html = html
      .replace(/{{logo_url}}/g, logoUrl)
      .replace(/{{issued_date}}/g, issuedDate)
      .replace(/{{attestation_id}}/g, attestationId)
      .replace(/{{supplier_name}}/g, supplierName)
      .replace(/{{country}}/g, country)
      .replace(/{{activity}}/g, activity)
      .replace(/{{reference_year}}/g, referenceYear)
      .replace(/{{co2_value}}/g, co2Value)
      .replace(/{{qr_code_data_url}}/g, qrCodeDataUrl);

    /* ============================
       8. PDF GENERATION
       ============================ */

    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "24mm",
        right: "24mm",
        bottom: "24mm",
        left: "24mm",
      },
    });

    await browser.close();

    /* ============================
       9. RESPONSE
       ============================ */

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${attestationId}.pdf"`
    );

    return res.status(200).send(pdfBuffer);

  } catch (error: any) {
    console.error("ATTESTATION_ERROR", error);
    return res.status(500).json({
      error: "Attestation generation failed",
      details: error.message,
    });
  }
  }
