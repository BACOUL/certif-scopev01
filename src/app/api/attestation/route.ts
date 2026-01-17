import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.PDFMONKEY_API_KEY;
    const templateId = process.env.PDFMONKEY_TEMPLATE_ID;

    if (!apiKey || !templateId) {
      return NextResponse.json(
        { error: "Missing PDFMonkey env vars" },
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
          status: "published",
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "PDFMonkey error", details: text },
        { status: 500 }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      pdfUrl: data.document.download_url,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Server error", message: err.message },
      { status: 500 }
    );
  }
}
