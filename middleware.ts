import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Ne jamais toucher aux assets / fichiers / routes techniques
function isBypassPath(pathname: string) {
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/images")
  ) {
    return true;
  }

  if (
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest"
  ) {
    return true;
  }

  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return true;
  }

  return false;
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // 0) Bypass assets / fichiers
  if (isBypassPath(pathname)) {
    return NextResponse.next();
  }

  // 1) Base response + security headers (cohérents avec next.config)
  const res = NextResponse.next();
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");

  // Cache strict routes sensibles
  if (
    pathname.startsWith("/verify") ||
    pathname.startsWith("/fr/verify") ||
    pathname.startsWith("/de/pruefen") ||
    pathname.startsWith("/de/technische-pruefung") ||
    pathname.startsWith("/api")
  ) {
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  return res;
}

export const config = {
  matcher: ["/verify/:path*", "/api/:path*", "/de/:path*", "/fr/:path*"],
};
