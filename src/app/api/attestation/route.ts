import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.PDFMONKEY_API_KEY;
    const templateId = process.env.PDFMONKEY_TEMPLATE_ID;

    if (!apiKey || !templateId) {
      return NextResponse.json(
        { error: "PDFMonkey not configured" },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.pdfmonkey.io/api/v1/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        document: {
          template_id: templateId,
          payload: body,
          status: "pending",
        },
      }),
    });

    const raw = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        { error: "PDFMonkey error", details: raw },
        { status: 500 }
      );
    }

    const json = JSON.parse(raw);

    const pdfUrl = json?.document?.download_url;

    if (!pdfUrl) {
      return NextResponse.json(
        { error: "No PDF URL returned", details: json },
        { status: 500 }
      );
    }

    return NextResponse.json({ pdfUrl });

  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal error", message: err?.message },
      { status: 500 }
    );
  }
}
