import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  return new NextResponse(
    `ROUTE OK — session_id = ${sessionId}`,
    { status: 200 }
  );
}
