import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { AttestationPdf } from "@/components/pdf/AttestationPdf";

export async function GET() {
  const pdfBuffer = await renderToBuffer(
    <AttestationPdf
      attestationId="PREVIEW"
      companyName="TEST COMPANY"
      country="FR"
      year="2026"
      totalCO2e={42}
      methodology="PREVIEW MODE"
      qrDataUrl="data:image/png;base64,..." // QR fake
    />
  );

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=preview.pdf",
    },
  });
}
