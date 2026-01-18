import { pdf } from "@react-pdf/renderer";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

export async function GET() {
  try {
    // ─────────────────────────────────────────────
    // Attestation de PRÉVISUALISATION
    // (données factices mais contrat complet)
    // ─────────────────────────────────────────────
    const doc = AttestationPdf({
      attestationId: "CS-PREVIEW-2026",
      companyName: "Preview Entity",
      country: "FR",
      year: "2026",

      // Champs désormais obligatoires
      totalCO2e: 123.45,
      methodology: "Spend-based deterministic estimation",
      hash: "preview-hash-not-final",

      // QR factice (1×1 px, conforme React-PDF)
      qrDataUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+X2ZkAAAAASUVORK5CYII=",
    });

    const buffer = (await pdf(doc).toBuffer()) as unknown as Buffer;

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
