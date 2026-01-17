import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // MOCK TEMPORAIRE POUR VALIDER LE PIPELINE
    // (on vérifiera Puppeteer après)
    const fakePdfBase64 =
      "JVBERi0xLjQKJcfsj6IKMSAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyA+PgplbmRvYmoK";

    return NextResponse.json({
      id: "demo-attestation",
      pdfBase64: fakePdfBase64,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal error", message: err?.message },
      { status: 500 }
    );
  }
}
