import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

export async function GET() {
  try {
    /* ─────────────────────────────────────────────
       1. QR CODE FACTICE (mais valide)
    ───────────────────────────────────────────── */
    const qrDataUrl = await QRCode.toDataURL(
      "https://certif-scope.io/verify?id=CS-PREVIEW",
      { width: 72, margin: 1 }
    );

    /* ─────────────────────────────────────────────
       2. PDF — DONNÉES STATIQUES
       ⚠️ AUCUN logo ici
    ───────────────────────────────────────────── */
    const doc = AttestationPdf({
      attestationId: "CS-PREVIEW-2026",
      companyName: "Preview Entity",
      country: "FR",
      year: "2025",
      totalCO2e: 123.45,
      methodology: "Spend-based deterministic estimation",
      qrDataUrl,
      hash: "PREVIEW_HASH",
    });

    const buffer = Buffer.from(
      (await pdf(doc).toBuffer()) as unknown as Uint8Array
    );

    /* ─────────────────────────────────────────────
       3. RÉPONSE — TÉLÉCHARGEMENT PDF
    ───────────────────────────────────────────── */
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="certif-scope-preview.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("❌ PDF PREVIEW ERROR:", err);
    return new Response("Preview generation failed", { status: 500 });
  }
}
