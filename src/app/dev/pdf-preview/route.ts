import { pdf } from "@react-pdf/renderer";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

export async function GET() {
  try {
    // ─────────────────────────────────────────────
    // Génération d’une attestation de prévisualisation
    // (sans QR, sans URL, conforme à l’acte institutionnel)
    // ─────────────────────────────────────────────
    const doc = AttestationPdf({
      attestationId: "CS-PREVIEW-2026",
      companyName: "Preview Entity",
      country: "FR",
      year: "2026",
    });

    const buffer = await pdf(doc).toBuffer();

    return new Response(buffer as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="certif-scope-preview.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("❌ PDF preview error:", err);
    return new Response("Failed to generate preview PDF", { status: 500 });
  }
}
