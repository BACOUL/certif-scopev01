import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["de", "fr"] as const;

const ALLOWED: Record<(typeof SUPPORTED_LOCALES)[number], string[]> = {
  de: ["/", "/pricing", "/why-companies-ask"],
  fr: [], // FR: pas de fallback vers EN
};

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

  // Fichiers statiques classiques
  if (
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest"
  ) {
    return true;
  }

  // Toute URL avec extension (.png, .jpg, .svg, .css, .js, .map, etc.)
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return true;
  }

  return false;
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // ======================================================
  // 0) Bypass assets / fichiers
  // ======================================================
  if (isBypassPath(pathname)) {
    return NextResponse.next();
  }

  // ======================================================
  // 1) Base response + security headers
  // ======================================================
  const res = NextResponse.next();

  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // Cache strict routes sensibles
  if (pathname.startsWith("/verify") || pathname.startsWith("/api")) {
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  // ======================================================
  // 2) Locale detection
  // ======================================================
  const locale = SUPPORTED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (!locale) return res;

  // ======================================================
  // 3) Fallback: /de/* -> EN si page non traduite
  //    FR reste tel quel
  // ======================================================
  const rest = pathname.replace(`/${locale}`, "") || "/"; // "/" ou "/pricing"
  const isAllowed = ALLOWED[locale].includes(rest);

  if (isAllowed) return res;

  // Ne pas rediriger FR si tu ne veux pas de fallback
  if (locale === "fr" && ALLOWED.fr.length === 0) return res;

  const url = req.nextUrl.clone();
  url.pathname = rest === "/" ? "/" : rest;

  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/verify/:path*", "/api/:path*", "/de/:path*", "/fr/:path*"],
};
