import { NextResponse } from "next/server";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";

export const runtime = "nodejs";

function renderHTML(data: any) {
  return `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; }
    h1 { color: #0B3A63; }
    .box { margin-top: 20px; padding: 20px; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <h1>CO₂e Attestation</h1>
  <div class="box">
    <p><strong>Company:</strong> ${data.companyName}</p>
    <p><strong>Sector:</strong> ${data.sector}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Period:</strong> ${data.period}</p>
    <p><strong>Total emissions:</strong> ${data.total} tCO₂e</p>
    <p><strong>ID:</strong> ${data.id}</p>
    <img src="${data.qr}" width="120" />
  </div>
</body>
</html>
`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = uuidv4();
    const qr = await QRCode.toDataURL(`certif-scope:${id}`);

    const html = renderHTML({ ...body, id, qr });

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({ format: "A4", printBackground: true });
    await browser.close();

    const hash = crypto.createHash("sha256").update(pdf).digest("hex");

    return NextResponse.json({
      id,
      hash,
      pdfBase64: pdf.toString("base64"),
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: "PDF generation failed", details: e.message },
      { status: 500 }
    );
  }
}
