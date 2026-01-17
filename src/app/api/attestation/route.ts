import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.PDFMONKEY_API_KEY;
    const templateId = process.env.PDFMONKEY_TEMPLATE_ID;

    if (!apiKey || !templateId) {
      return NextResponse.json(
        { error: "PDFMonkey env vars missing" },
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
          document_template_id: templateId,
          payload: body,
          status: "pending",
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: "PDFMonkey error", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal error", message: err?.message },
      { status: 500 }
    );
  }
}
