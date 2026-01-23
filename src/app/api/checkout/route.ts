import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

// ======================================================
// STRIPE CLIENT (OK au build)
// ======================================================
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ======================================================
// LANGUES AUTORISÉES
// ======================================================
const ALLOWED_ATTESTATION_LOCALES = [
  "en","fr","de","es","it","pt","nl","pl","cs","sk","hu",
  "ro","bg","hr","sl","et","lv","lt","mt","el","fi","sv","da","ga",
] as const;

type AttestationLocale = (typeof ALLOWED_ATTESTATION_LOCALES)[number];

// ======================================================
// CHECKOUT
// ======================================================
export async function POST(req: Request) {
  try {
    // 🔐 ENV — vérifiées AU RUNTIME
    const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    if (!STRIPE_PRICE_ID) {
      return NextResponse.json(
        { error: "Missing STRIPE_PRICE_ID" },
        { status: 500 }
      );
    }

    if (!BASE_URL) {
      return NextResponse.json(
        { error: "Missing NEXT_PUBLIC_BASE_URL" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      companyName,
      companySector,
      entityIdentifier,
      year,
      country,
      totalCO2e,
      methodology,
      attestationLocale,
    } = body;

    // ───────────────── VALIDATION
    if (!companyName || !companySector || !year || !country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      totalCO2e === undefined ||
      Number.isNaN(Number(totalCO2e)) ||
      !methodology
    ) {
      return NextResponse.json(
        { error: "Invalid result" },
        { status: 400 }
      );
    }

    if (
      !attestationLocale ||
      !ALLOWED_ATTESTATION_LOCALES.includes(attestationLocale)
    ) {
      return NextResponse.json(
        { error: "Invalid language" },
        { status: 400 }
      );
    }

    // ───────────────── STRIPE CHECKOUT
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      // 🔑 CRITIQUE : garantit email client exploitable (Resend)
      customer_creation: "always",

      line_items: [
        {
          price: STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],

      metadata: {
        product: "certif-scope-attestation",

        companyName: String(companyName),
        companySector: String(companySector),
        entityIdentifier: String(entityIdentifier || ""),
        year: String(year),
        country: String(country),
        totalCO2e: String(totalCO2e),
        methodology: String(methodology),
        attestationLocale,
        referenceLocale: "en",
      },

      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/generate`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Stripe checkout failed" },
      { status: 500 }
    );
  }
}
