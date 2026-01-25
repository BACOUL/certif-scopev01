import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Sécurité HTTP minimale (safe Edge)
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // Données sensibles : jamais en cache
  if (
    req.nextUrl.pathname.startsWith("/api") ||
    req.nextUrl.pathname.startsWith("/verify")
  ) {
    res.headers.set("Cache-Control", "no-store");
  }

  return res;
}

export const config = {
  matcher: ["/api/:path*", "/verify/:path*"],
};
