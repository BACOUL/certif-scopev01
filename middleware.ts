import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isBypassPath(pathname: string) {
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/images")
  ) return true;

  if (
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest"
  ) return true;

  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return true;
  return false;
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  if (isBypassPath(pathname)) return NextResponse.next();

  const res = NextResponse.next();
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");

  // Attribution commerciale Certif-Scope : le moteur ajoute cs_ref au premier clic.
  // On le conserve côté serveur jusqu'au checkout sans exposer d'email ou de SIREN.
  const campaignRef = req.nextUrl.searchParams.get("cs_ref");
  if (campaignRef && campaignRef.length <= 512) {
    res.cookies.set("certif_scope_ref", campaignRef, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  if (pathname.startsWith("/verify") || pathname.startsWith("/api")) {
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  return res;
}

export const config = {
  matcher: ["/verify/:path*", "/api/:path*", "/de/:path*", "/fr/:path*"],
};
