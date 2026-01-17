import { NextResponse } from "next/server";
import Stripe from "stripe";
import { generateAttestationPdf } from "@/lib/generateAttestationPdf";

export const runtime = "nodejs"; // ⚠️ OBLIGATOIRE (pas edge)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;
  const body = await req.text(); // ⚠️ RAW BODY obligatoire

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Stripe webhook signature error:", err.message);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // 🎯 SEUL EVENT ACCEPTÉ
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const metadata = session.metadata || {};

    // 🆔 ID ATTESTATION — déterministe + traçable
    const attestationId = `CS-${session.id}`;

    try {
      await generateAttestationPdf({
        attestationId,
        companyName: metadata.companyName || "—",
        country: metadata.country || "—",
        year: metadata.year || "—",
        totalEmissions: Number(metadata.totalEmissions || 0),
        verificationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/verify?id=${attestationId}`,
      });

      console.log("✅ Attestation generated:", attestationId);
    } catch (err: any) {
      console.error("❌ PDF generation failed:", err.message);
      return new NextResponse("PDF generation failed", { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
