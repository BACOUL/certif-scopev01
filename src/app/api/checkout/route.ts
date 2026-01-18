import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // obligatoire (Stripe + crypto)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const body = await req.json();

    const {
      company,
      year,
      country,
      expenses,
    } = body;

    // ID brouillon non persistant (contexte métier)
    const draftId = `draft_${Date.now()}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      // 🔗 CONTEXTE MÉTIER PORTÉ PAR STRIPE (source de vérité)
      metadata: {
        draftId,
        companyName: company?.name || "",
        companyId: company?.id || "",
        year: String(year),
        country: country || "",
        expenses: JSON.stringify(expenses || {}),
      },

      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 8900,
            product_data: {
              name: "CO₂e Attestation — Certif-Scope",
              description:
                "Standardized spend-based CO₂e attestation (PDF, non-audited)",
            },
          },
          quantity: 1,
        },
      ],

      // ✅ SESSION ID TRANSMIS AU SUCCESS FLOW
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/generate`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: error.message || "Stripe checkout failed" },
      { status: 500 }
    );
  }
}
