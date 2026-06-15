import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["de", "fr"] as const;

const ALLOWED: Record<(typeof SUPPORTED_LOCALES)[number], string[]> = {
  de: ["/", "/pricing", "/why-companies-ask"],
  fr: [], // FR: pas de fallback vers EN
};

// Ton site est en trailingSlash: true
const TRAILING_SLASH = true;

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

function normalizeRestPath(rest: string) {
  // Format stable: "/" ou "/pricing" (sans trailing slash)
  let out = rest || "/";
  if (out.length > 1 && out.endsWith("/")) out = out.slice(0, -1);
  return out;
}

function withTrailingSlash(pathname: string) {
  if (!TRAILING_SLASH) return pathname;
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
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

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    res.headers.set("X-Robots-Tag", "noindex, follow");
  }

  // Cache strict routes sensibles
  if (pathname.startsWith("/verify") || pathname.startsWith("/api")) {
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  // 2) Locale detection
  const locale = SUPPORTED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (!locale) return res;

  // 3) Fallback: /de/* -> EN si page non traduite ; FR reste tel quel
  const rawRest = pathname.replace(`/${locale}`, "") || "/";
  const rest = normalizeRestPath(rawRest); // "/" ou "/pricing"

  const isAllowed = ALLOWED[locale].includes(rest);
  if (isAllowed) return res;

  // FR: aucun fallback
  if (locale === "fr" && ALLOWED.fr.length === 0) return res;

  // DE: redirect permanent vers EN canonique, avec trailing slash stable
  const url = req.nextUrl.clone();
  url.pathname = withTrailingSlash(rest === "/" ? "/" : rest);

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/verify/:path*", "/api/:path*", "/de/:path*", "/fr/:path*"],
};
