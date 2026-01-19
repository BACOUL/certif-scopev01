import { pdf } from "@react-pdf/renderer";
import { AttestationPdf } from "@/lib/AttestationPdf";
import QRCode from "qrcode";

export const runtime = "nodejs";

export async function GET() {
  const qrDataUrl = await QRCode.toDataURL("DEV-PREVIEW");

  const doc = AttestationPdf({
    attestationId: "DEV-001",
    companyName: "TEST COMPANY",
    country: "FR",
    year: "2024",
    totalCO2e: "123.45",
    methodology: "DEV spend-based",
    qrDataUrl,
  });

  const buffer = await pdf(doc).toBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Cache-Control": "no-store",
    },
  });
}
