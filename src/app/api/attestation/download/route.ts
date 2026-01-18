import { NextResponse } from "next/server";
import Stripe from "stripe";
import { generateAttestationPdf } from "@/lib/generateAttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/* ---------- POST (logique principale) ---------- */
export async function POST(req: Request) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return new NextResponse("Missing sessionId", { status: 400 });
    }

    // 1. Vérification Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new NextResponse("Payment not completed", { status: 403 });
    }

    // 2. Metadata
    const metadata = session.metadata || {};
    const expenses = metadata.expenses
      ? JSON.parse(metadata.expenses)
      : {};

    // 3. Calcul CO₂e (spend-based V1)
    const totalEmissions =
      (expenses.it || 0) * 0.0002 +
      (expenses.services || 0) * 0.00015 +
      (expenses.goods || 0) * 0.0004 +
      (expenses.logistics || 0) * 0.0005 +
      (expenses.travel || 0) * 0.00025 +
      (expenses.accommodation || 0) * 0.00018 +
      (expenses.other || 0) * 0.0002;

    const attestationId = `CS-${session.id}`;

    // 4. Génération PDF
    const pdf = await generateAttestationPdf({
      attestationId,
      companyName: metadata.companyName || "—",
      country: metadata.country || "—",
      year: metadata.year || "—",
      totalEmissions,
      verificationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/verify?id=${attestationId}`,
    });

    // 5. Téléchargement
    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
      },
    });
  } catch (err: any) {
    console.error("❌ PDF error:", err);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}

/* ---------- GET (pour le bouton <a>) ---------- */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return new NextResponse("Missing sessionId", { status: 400 });
  }

  return POST(
    new Request(req.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    })
  );
                  }
