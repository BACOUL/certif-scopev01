import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { key } = await req.json();

    if (!key || typeof key !== "string") {
      return NextResponse.json(
        { valid: false, error: "Missing or invalid key" },
        { status: 400 }
      );
    }

    // TEMP: simple format check (XXXX-XXXX-XXXX)
    const isValidFormat = /^[A-Z0-9]{4}(-[A-Z0-9]{4}){2}$/.test(key);

    if (!isValidFormat) {
      return NextResponse.json(
        { valid: false, error: "Invalid key format" },
        { status: 400 }
      );
    }

    // TEMP: credits simulés
    return NextResponse.json({
      valid: true,
      remainingCredits: 10,
    });
  } catch {
    return NextResponse.json(
      { valid: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}
