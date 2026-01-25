import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Sécurité HTTP de base
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // Cache strict pour routes sensibles
  if (
    req.nextUrl.pathname.startsWith("/verify") ||
    req.nextUrl.pathname.startsWith("/api")
  ) {
    res.headers.set("Cache-Control", "no-store");
  }

  return res;
}

// Routes concernées
export const config = {
  matcher: ["/verify/:path*", "/api/:path*"],
};
