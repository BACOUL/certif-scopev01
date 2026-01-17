import { NextResponse } from "next/server";
import Stripe from "stripe";
import fs from "fs";
import path from "path";

export const runtime = "nodejs"; // obligatoire pour Stripe (pas edge)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const body = await req.text(); // RAW body obligatoire
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new NextResponse("Invalid webhook signature", { status: 400 });
  }

  // 🎯 On traite UNIQUEMENT le paiement confirmé
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};

    const attestationId = `CS-${Date.now()}`;

    const dir = path.join(process.cwd(), "public", "attestations");
    fs.mkdirSync(dir, { recursive: true });

    const filePath = path.join(dir, `${attestationId}.txt`);

    const expenses = metadata.expenses
      ? JSON.parse(metadata.expenses)
      : {};

    const content = `
CERTIF-SCOPE — CO₂e ATTESTATION

Attestation ID: ${attestationId}
Stripe session: ${session.id}
Amount paid: ${session.amount_total! / 100} €
Currency: ${session.currency?.toUpperCase()}

Company: ${metadata.companyName || "—"}
Company ID: ${metadata.companyId || "—"}
Country: ${metadata.country || "—"}
Reference year: ${metadata.year || "—"}

Expenses (declared):
- IT & digital: ${expenses.it || 0} €
- Professional services: ${expenses.services || 0} €
- Purchased goods: ${expenses.goods || 0} €
- Logistics: ${expenses.logistics || 0} €
- Travel: ${expenses.travel || 0} €
- Accommodation: ${expenses.accommodation || 0} €
- Other: ${expenses.other || 0} €

Methodology: Spend-based (indicative)
Audit: NO
Status: PAID
Generated at: ${new Date().toISOString()}

This attestation is generated automatically after confirmed payment.
`;

    fs.writeFileSync(filePath, content.trim());

    // 🔗 pointeur pour la page /success
    const latestPath = path.join(dir, "latest.json");
    fs.writeFileSync(
      latestPath,
      JSON.stringify({
        attestationId,
        createdAt: new Date().toISOString(),
      })
    );

    console.log("✅ Attestation generated:", attestationId);
  }

  return NextResponse.json({ received: true });
      }
