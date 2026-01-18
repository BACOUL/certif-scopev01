import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import crypto from "crypto";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2022-11-15" });

const withTimeout = <T,>(p: Promise<T>, ms = 15000) =>
  Promise.race([
    p,
    new Promise<T>((_, rej) => setTimeout(() => rej(new Error("timeout")), ms)),
  ]);

export async function GET(req: Request) {
  console.log("PDF route START", { url: req.url, time: Date.now() });

  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      console.log("MISSING session_id");
      return new Response("Missing session_id", { status: 400 });
    }
    console.log("STEP sessionId", sessionId);

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("MISSING STRIPE KEY");
      return new Response("Server misconfiguration", { status: 500 });
    }

    let session;
    try {
      session = await withTimeout(stripe.checkout.sessions.retrieve(sessionId), 8000);
      console.log("AFTER_STRIPE", { id: session.id, payment_status: session.payment_status });
    } catch (e) {
      console.error("STRIPE ERROR", e);
      return new Response("Stripe retrieval failed", { status: 502 });
    }

    if (session.payment_status !== "paid") {
      console.log("PAYMENT NOT PAID", session.payment_status);
      return new Response("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;
    const companyName = metadata.companyName || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";
    const totalCO2e = Number(metadata.totalCO2e ?? 0);
    const methodology = metadata.methodology || "Spend-based deterministic estimation";

    let qrDataUrl = "";
    try {
      qrDataUrl = await withTimeout(
        QRCode.toDataURL(`https://certif-scope.io/verify?id=${attestationId}`, { width: 72, margin: 1 }),
        3000
      );
      console.log("AFTER_QR length", qrDataUrl.length);
    } catch (e) {
      console.warn("QR FAILED, continuing without QR", e);
      qrDataUrl = ""; // fallback: generate PDF sans QR pour debug
    }

    // Construire un doc minimal si AttestationPdf pose problème
    let doc;
    try {
      doc = AttestationPdf({
        attestationId,
        companyName,
        country,
        year,
        qrDataUrl,
        totalCO2e,
        methodology,
      });
      console.log("DOC CREATED");
    } catch (e) {
      console.error("ATT_PDF INSTANTIATION ERROR", e);
      // fallback minimal document structure pour tester toBuffer
      doc = (
        <Document>
          <Page>
            <Text>Certif-Scope debug PDF</Text>
          </Page>
        </Document>
      );
    }

    console.log("BEFORE_PDF_TO_BUFFER");
    let buffer: Buffer;
    try {
      const buf = await withTimeout(pdf(doc).toBuffer(), 15000);
      buffer = Buffer.from(buf as Uint8Array);
      console.log("AFTER_PDF_TO_BUFFER size", buffer.length);
    } catch (e) {
      console.error("PDF TO BUFFER ERROR", e);
      return new Response("Failed to generate attestation (pdf)", { status: 500 });
    }

    console.log("SENDING RESPONSE");
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("UNCAUGHT PDF error:", err);
    return new Response("Failed to generate attestation", { status: 500 });
  }
      }
