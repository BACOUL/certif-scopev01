import { pdf } from "@react-pdf/renderer";
import fs from "fs";
import path from "path";
import { AttestationPdf } from "@/lib/AttestationPdf";

/* ─────────────────────────────────────────────
   LOGO — même source que le vrai PDF
───────────────────────────────────────────── */
const logoPath = path.join(process.cwd(), "public/logo.png");
const logoBase64 = `data:image/png;base64,${fs
  .readFileSync(logoPath)
  .toString("base64")}`;

export const runtime = "nodejs";

export async function GET() {
  // ─────────────────────────────────────────────
  // Données FACTICES mais CONTRAT COMPLET
  // ─────────────────────────────────────────────
  const doc = AttestationPdf({
    attestationId: "CS-PREVIEW-2026",
    companyName: "Preview Entity",
    country: "FR",
    year: "2025",
    totalCO2e: 123.45,
    methodology: "Spend-based deterministic estimation",
    logoDataUrl: logoBase64,
    qrDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+X2ZkAAAAASUVORK5CYII=",
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
