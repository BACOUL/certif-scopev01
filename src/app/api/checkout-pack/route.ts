// app/api/checkout-pack/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * CERTIF-SCOPE — CHECKOUT PACKS
 *
 * Packs:
 *  - 5 credits  → 349 €
 *  - 10 credits → 590 €
 *  - 50 credits → 2450 €
 *
 * Stripe is the single source of truth.
 * Keys / credits are generated later via webhook.
 */

const PACKS: Record<
  string,
  { credits: number; amountEur: number; label: string }
> = {
  "5": { credits: 5, amountEur: 349, label: "Pack of 5 attestations" },
  "10": { credits: 10, amountEur: 590, label: "Pack of 10 attestations" },
  "50": { credits: 50, amountEur: 2450, label: "Pack of 50 attestations" },
};

export async function GET(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe not configured" },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(req.url);
    const pack = searchParams.get("pack");

    if (!pack || !PACKS[pack]) {
      return NextResponse.json(
        { error: "Invalid pack" },
        { status: 400 }
      );
    }

    const { credits, amountEur, label } = PACKS[pack];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: amountEur * 100,
            product_data: {
              name: label,
              description: `${credits} CO₂e attestation credits`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
      metadata: {
        product: "certif-scope-pack",
        credits: String(credits),
        pack: pack,
      },
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}
