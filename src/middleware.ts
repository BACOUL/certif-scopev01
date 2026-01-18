import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // 🔥 BYPASS TOTAL POUR LE DOWNLOAD PDF
  if (pathname === "/api/attestation/download") {
    return NextResponse.next();
  }

  return NextResponse.next();
}

// ⛔️ NE PAS matcher toutes les routes API
export const config = {
  matcher: ["/api/attestation/download"],
};
