import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";
import QRCode from "qrcode";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/* =======================
   STYLES PDF
======================= */
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    color: "#0B3A63",
  },
  box: {
    border: "2 solid #0B3A63",
    borderRadius: 10,
    padding: 24,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    alignItems: "center",
  },
  logo: {
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 6,
  },
  value: {
    fontSize: 12,
  },
  footer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  small: {
    fontSize: 9,
    color: "#444",
  },
});

/* =======================
   PDF COMPONENT
======================= */
function AttestationPdf(props: {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  verificationUrl: string;
  qrDataUrl: string;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.box}>
          <View style={styles.header}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
              style={styles.logo}
            />
            <Text style={styles.title}>CO₂e Attestation</Text>
          </View>

          <Text style={styles.label}>Attestation ID</Text>
          <Text style={styles.value}>{props.attestationId}</Text>

          <Text style={styles.label}>Company</Text>
          <Text style={styles.value}>{props.companyName}</Text>

          <Text style={styles.label}>Country</Text>
          <Text style={styles.value}>{props.country}</Text>

          <Text style={styles.label}>Reference year</Text>
          <Text style={styles.value}>{props.year}</Text>

          <View style={styles.footer}>
            <View>
              <Text style={styles.label}>Verification</Text>
              <Text style={styles.small}>{props.verificationUrl}</Text>
              <Text style={styles.small}>
                Verifiable independently — no data stored
              </Text>
            </View>

            <Image src={props.qrDataUrl} style={{ width: 90, height: 90 }} />
          </View>
        </View>
      </Page>
    </Document>
  );
}

/* =======================
   API GET
======================= */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new NextResponse("Missing session_id", { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new NextResponse("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?id=${attestationId}`;

    const qrDataUrl = await QRCode.toDataURL(verificationUrl);

    const doc = (
      <AttestationPdf
        attestationId={attestationId}
        companyName={metadata.companyName || "—"}
        country={metadata.country || "—"}
        year={metadata.year || "—"}
        verificationUrl={verificationUrl}
        qrDataUrl={qrDataUrl}
      />
    );

    const buffer = await pdf(doc).toBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("PDF ERROR:", err);
    return new NextResponse("Failed to generate attestation", { status: 500 });
  }
                       }
