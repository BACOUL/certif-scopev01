import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PACKS: Record<
  string,
  { amount: number; credits: number; label: string }
> = {
  "5": {
    amount: 34900,
    credits: 5,
    label: "Certif-Scope — Pack of 5 attestations",
  },
  "10": {
    amount: 59000,
    credits: 10,
    label: "Certif-Scope — Pack of 10 attestations",
  },
  "50": {
    amount: 245000,
    credits: 50,
    label: "Certif-Scope — Pack of 50 attestations",
  },
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pack = searchParams.get("pack");

  if (!pack || !PACKS[pack]) {
    return NextResponse.json(
      { error: "Invalid pack" },
      { status: 400 }
    );
  }

  const origin =
    req.headers.get("origin") ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";

  const { amount, credits, label } = PACKS[pack];

  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    line_items: [
      {
        price_data: {
          currency: "eur",
          unit_amount: amount,
          product_data: {
            name: label,
          },
        },
        quantity: 1,
      },
    ],

    metadata: {
      product: "certif-scope-pack",
      pack: pack,
      credits: String(credits),
    },

    success_url: `${origin}/success`,
    cancel_url: `${origin}/pricing`,
  });

  return NextResponse.redirect(session.url!, 303);
}
