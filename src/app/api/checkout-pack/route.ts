import { NextResponse } from "next/server";
import Stripe from "stripe";
import { paths, siteLocale } from "@/lib/site-locales";

export const runtime = "nodejs";

let stripeClient: Stripe | null = null;

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  stripeClient ??= new Stripe(stripeSecretKey);
  return stripeClient;
}

// ======================================================
// CONFIG — PACKS (SOURCE DE VÉRITÉ UNIQUE)
// ======================================================
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

// ======================================================
// CHECKOUT PACK — STRIPE (FACTURE AUTO)
// ======================================================
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pack = searchParams.get("pack");
  const locale = siteLocale(searchParams.get("siteLocale"));

  if (!pack || !PACKS[pack]) {
    return NextResponse.json({ error: "INVALID_PACK" }, { status: 400 });
  }

  const origin =
    process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
    req.headers.get("origin") ||
    (req.headers.get("x-forwarded-proto") &&
      req.headers.get("host") &&
      `${req.headers.get("x-forwarded-proto")}://${req.headers.get("host")}`) ||
    "http://localhost:3000";

  const { amount, credits, label } = PACKS[pack];

  const stripe = getStripeClient();

  if (!stripe) {
    return NextResponse.json(
      { error: "MISSING_STRIPE_SECRET_KEY" },
      { status: 500 },
    );
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    locale,

    // ✅ FACTURE STRIPE AUTOMATIQUE
    invoice_creation: {
      enabled: true,
    },

    line_items: [
      {
        price_data: {
          currency: "eur",
          unit_amount: amount,
          product_data: {
            name:
              locale === "de"
                ? `Certif-Scope — Paket mit ${credits} Bescheinigungen`
                : locale === "fr"
                  ? `Certif-Scope — Pack de ${credits} attestations`
                  : label,
          },
        },
        quantity: 1,
      },
    ],

    metadata: {
      product: "certif-scope-pack",
      pack,
      credits: String(credits),
      siteLocale: locale,
    },

    success_url: `${origin}${paths[locale].success}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}${paths[locale].pricing}#packs`,
  });

  return NextResponse.redirect(session.url!, 303);
}
