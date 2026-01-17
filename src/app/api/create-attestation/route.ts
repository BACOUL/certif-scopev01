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

    const response = await fetch(`${pdfServiceUrl}/api/attestation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: "PDF service error", details: text },
        { status: 502 }
      );
    }

    const result = await response.json();

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: "Generation failed",
        message: err?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
