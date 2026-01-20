export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Paste only the base64 content of your logo here (no data: prefix, no newlines)
const CERTIF_SCOPE_LOGO_BASE64 = "";

/**
 * Simple HTML escaper to avoid injection in the generated HTML.
 */
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Persist a minimal attestation record as JSONL if ATTESTATION_STORE_PATH is set.
 * Record contains: attestationId, issuedDate, sessionId, companyName, totalCO2e, year, createdAt
 */
async function persistAttestation(record: Record<string, any>) {
  const storePath = process.env.ATTESTATION_STORE_PATH;
  if (!storePath) return;
  try {
    const dir = path.dirname(storePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const line = JSON.stringify(record) + "\n";
    fs.appendFileSync(storePath, line, { encoding: "utf8" });
  } catch (err) {
    console.error("Persist attestation failed:", err);
  }
}

export async function GET(req: Request) {
  try {
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return new Response("Missing session_id", { status: 400 });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    const metadataRaw = session.metadata || {};

    // Required metadata keys
    const required = ["companyName", "totalCO2e", "year"];
    const missing = required.filter((k) => {
      const v = metadataRaw[k];
      return v === undefined || v === null || String(v).trim() === "";
    });
    if (missing.length) {
      return new Response(`Missing metadata: ${missing.join(", ")}`, { status: 400 });
    }

    // Parse and validate numeric totalCO2e
    const totalCO2eNum = Number(String(metadataRaw.totalCO2e).replace(",", "."));
    if (Number.isNaN(totalCO2eNum)) {
      return new Response("Invalid metadata: totalCO2e must be a number", { status: 400 });
    }

    // Build sanitized metadata (escaped for HTML)
    const metadata = {
      attestationId: metadataRaw.attestationId || `CS-${session.id}`,
      issuerName: escapeHtml(String(metadataRaw.issuerName || "Certif-Scope")),
      issuerSite: escapeHtml(String(metadataRaw.issuerSite || "https://certif-scope.com")),
      companyName: escapeHtml(String(metadataRaw.companyName)),
      companySector: escapeHtml(String(metadataRaw.companySector || "—")), // ADDED: activity sector
      entityIdentifier: escapeHtml(String(metadataRaw.entityIdentifier || "—")), // kept in backend but not displayed
      country: escapeHtml(String(metadataRaw.country || "—")),
