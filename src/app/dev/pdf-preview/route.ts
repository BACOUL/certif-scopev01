import { pdf } from "@react-pdf/renderer";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

export async function GET() {
  const doc = AttestationPdf({
    attestationId: "CS-PREVIEW-2026",
    companyName: "Preview Entity",
    country: "FR",
    year: "2025",
    totalCO2e: 123.45,
    methodology: "Spend-based deterministic estimation",
    qrDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+X2ZkAAAAASUVORK5CYII=",

    // ✅ LIGNE OBLIGATOIRE AJOUTÉE
    logoUrl: "http://localhost:3000/logo.png",

    hash: "PREVIEW_HASH",
  });

  const buffer = Buffer.from(
    (await pdf(doc).toBuffer()) as unknown as Uint8Array
  );

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="attestation-preview.pdf"',
    },
  });
}
