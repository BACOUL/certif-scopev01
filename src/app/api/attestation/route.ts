import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.PDFMONKEY_API_KEY;
    const templateId = process.env.PDFMONKEY_TEMPLATE_ID;

    if (!apiKey || !templateId) {
      return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
    }

    const payload = {
      companyName: String(body.companyName),
      sector: String(body.sector),
      country: String(body.country),
      period: String(body.period),
      scope1: String(body.scope1),
      scope2: String(body.scope2),
      scope3: String(body.scope3),
      total: String(body.total),
    };

    const res = await fetch("https://api.pdfmonkey.io/api/v1/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        document: {
          template_id: templateId,
          payload,
          status: "published",
        },
      }),
    });

    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        { error: "PDFMonkey error", details: text },
        { status: 500 }
      );
    }

    const data = JSON.parse(text);

    return NextResponse.json({
      document: data.document,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Server error", message: err.message },
      { status: 500 }
    );
  }
}
