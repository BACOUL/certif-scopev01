import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const pdfUrl = process.env.CERTIF_SCOPE_PDF_URL;
  if (!pdfUrl) {
    return NextResponse.json(
      { error: "PDF service not configured" },
      { status: 500 }
    );
  }

  const res = await fetch(`${pdfUrl}/api/attestation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.text();
  return new NextResponse(data, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
