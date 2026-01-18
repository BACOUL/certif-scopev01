import { pdf } from "@react-pdf/renderer";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

export default async function PdfPreviewPage() {
  const doc = AttestationPdf({
    attestationId: "CS-PREVIEW-2026",
    companyName: "Example Company Ltd",
    country: "FR",
    year: "2026",
    verificationUrl: "https://certif-scope.io/verify?id=CS-PREVIEW-2026",
    qrDataUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=test",
  });

  const buffer = await pdf(doc).toBuffer();

  return new Response(buffer as any, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
