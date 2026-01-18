import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // ✅ Autoriser explicitement le téléchargement PDF
  if (pathname.startsWith("/api/attestation/download")) {
    return NextResponse.next();
  }

  // ✅ Autoriser toutes les autres routes API
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

// Middleware actif uniquement sur les routes API
export const config = {
  matcher: ["/api/:path*"],
};
