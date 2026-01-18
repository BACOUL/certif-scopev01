import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/* ─────────────────────────────────────────────
   LOGO — chargé UNE FOIS côté serveur
───────────────────────────────────────────── */
const logoPath = path.join(process.cwd(), "public/logo.png");
const logoBase64 = `data:image/png;base64,${fs
  .readFileSync(logoPath)
  .toString("base64")}`;

/**
 * Détermination robuste de l’URL de base
 */
function getBaseUrl(req: Request): string {
  const proto = req.headers.get("x-forwarded-proto");
  const host = req.headers.get("x-forwarded-host");

  if (proto && host) return `${proto}://${host}`;
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;

  throw new Error("Unable to determine base URL");
}

export async function GET(req: Request) {
  try {
    /* ─────────────────────────────────────────────
       1. session_id
    ───────────────────────────────────────────── */
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    /* ─────────────────────────────────────────────
       2. Stripe = vérité absolue
    ───────────────────────────────────────────── */
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    /* ─────────────────────────────────────────────
       3. Données métier reconstruites (stateless)
    ───────────────────────────────────────────── */
    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const companyName = metadata.companyName || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";

    const totalCO2e = Number(metadata.totalCO2e ?? 0);
    const methodology =
      metadata.methodology || "Spend-based deterministic estimation";

    const baseUrl = getBaseUrl(req);

    /* ─────────────────────────────────────────────
       4. PDF — première passe (hash)
    ───────────────────────────────────────────── */
    const dummyQr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+X2ZkAAAAASUVORK5CYII=";

    const draftDoc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
      logoDataUrl: logoBase64,
      qrDataUrl: dummyQr,
      hash: "",
    });

    const draftBuffer = Buffer.from(
      (await pdf(draftDoc).toBuffer()) as unknown as Uint8Array
    );

    /* ─────────────────────────────────────────────
       5. Hash cryptographique
    ───────────────────────────────────────────── */
    const hash = crypto
      .createHash("sha256")
      .update(draftBuffer)
      .digest("hex");

    /* ─────────────────────────────────────────────
       6. QR final
    ───────────────────────────────────────────── */
    const verificationUrl = `${baseUrl}/verify?id=${attestationId}`;

    const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 72,
      margin: 1,
    });

    /* ─────────────────────────────────────────────
       7. PDF FINAL (figé)
    ───────────────────────────────────────────── */
    const finalDoc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
      logoDataUrl: logoBase64,
      qrDataUrl,
      hash,
    });

    const finalBuffer = Buffer.from(
      (await pdf(finalDoc).toBuffer()) as unknown as Uint8Array
    );

    /* ─────────────────────────────────────────────
       8. Réponse HTTP
    ───────────────────────────────────────────── */
    return new Response(finalBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("❌ Attestation PDF error:", err);
    return new Response("Failed to generate attestation", { status: 500 });
  }
}
