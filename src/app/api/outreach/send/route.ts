import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAHkg1JibuVZLtCEImmX6W7qAdcZ/VkRdMRckWGVYO+Eo=
-----END PUBLIC KEY-----`;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const MAX_SKEW_MS = 5 * 60_000;

function configured() {
  return Boolean(String(process.env.RESEND_API_KEY || "").trim());
}

function verifySignature(timestamp: string, rawBody: string, signature: string) {
  const ts = Number(timestamp);
  if (!Number.isFinite(ts) || Math.abs(Date.now() - ts) > MAX_SKEW_MS) return false;
  if (!signature) return false;
  try {
    const message = Buffer.from(`${timestamp}.${rawBody}`, "utf8");
    const sig = Buffer.from(signature, "base64url");
    return crypto.verify(null, message, PUBLIC_KEY, sig);
  } catch {
    return false;
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, service: "certif-scope-outreach-relay", configured: configured() },
    { headers: { "cache-control": "no-store" } },
  );
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  const timestamp = String(req.headers.get("x-certif-timestamp") || "");
  const signature = String(req.headers.get("x-certif-signature") || "");
  if (!verifySignature(timestamp, rawBody, signature)) {
    return NextResponse.json({ ok: false, error: "INVALID_SIGNATURE" }, { status: 401 });
  }
  if (!configured()) {
    return NextResponse.json({ ok: false, error: "RESEND_NOT_CONFIGURED" }, { status: 503 });
  }

  let body: any;
  try { body = JSON.parse(rawBody || "{}"); }
  catch { return NextResponse.json({ ok: false, error: "INVALID_JSON" }, { status: 400 }); }

  if (body?.action === "ping") {
    return NextResponse.json({ ok: true, provider: "resend" }, { headers: { "cache-control": "no-store" } });
  }
  if (body?.action !== "send") {
    return NextResponse.json({ ok: false, error: "INVALID_ACTION" }, { status: 400 });
  }

  const to = String(body?.to || "").trim().toLowerCase();
  const subject = String(body?.subject || "").trim();
  const text = String(body?.text || "").trim();
  const html = String(body?.html || "").trim();
  const headers = body?.headers && typeof body.headers === "object" ? body.headers : {};
  if (!EMAIL_RE.test(to)) return NextResponse.json({ ok: false, error: "INVALID_RECIPIENT" }, { status: 400 });
  if (!subject || !text || !html) return NextResponse.json({ ok: false, error: "MESSAGE_MISSING" }, { status: 400 });
  if (subject.length > 300 || text.length > 100_000 || html.length > 250_000) {
    return NextResponse.json({ ok: false, error: "MESSAGE_TOO_LARGE" }, { status: 413 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);
  const result = await resend.emails.send({
    from: "Certif-Scope <no-reply@certif-scope.com>",
    replyTo: "contact@certif-scope.com",
    to,
    subject,
    text,
    html,
    headers,
  });

  if (result.error || !result.data?.id) {
    console.error("CERTIF_OUTREACH_RESEND_ERROR", result.error || "NO_MESSAGE_ID");
    return NextResponse.json({ ok: false, error: "RESEND_SEND_FAILED" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, provider: "resend", id: result.data.id });
}
