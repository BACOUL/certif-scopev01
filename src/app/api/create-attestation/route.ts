import { NextResponse } from "next/server";
import { generateAttestation } from "@/lib/generateAttestation";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const result = await generateAttestation(payload);

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to generate attestation" },
      { status: 500 }
    );
  }
}
