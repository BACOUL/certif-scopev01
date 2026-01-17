import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const pdfServiceUrl = process.env.CERTIF_SCOPE_PDF_URL;
    if (!pdfServiceUrl) {
      return NextResponse.json(
        { error: "PDF service URL not configured" },
        { status: 500 }
      );
    }

    const res = await fetch(`${pdfServiceUrl}/api/attestation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json(
        { error: "PDF service error", details: err },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal error", message: err?.message },
      { status: 500 }
    );
  }
}
