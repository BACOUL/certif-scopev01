import { NextResponse } from "next/server";
import Stripe from "stripe";
import { generateAttestationPdf } from "@/lib/generateAttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return new NextResponse("Missing sessionId", { status: 400 });
    }

    // 🔒 On revalide le paiement côté Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new NextResponse("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const pdf = await generateAttestationPdf({
      attestationId,
      companyName: metadata.companyName || "—",
      country: metadata.country || "—",
      year: metadata.year || "—",
      totalEmissions: Number(metadata.totalEmissions || 0),
      verificationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/verify?id=${attestationId}`,
    });

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
      },
    });
  } catch (err: any) {
    console.error("❌ Download error:", err.message);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}
