import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["de", "fr"] as const;

// Pages réellement traduites (routes après le préfixe langue)
const ALLOWED: Record<(typeof SUPPORTED_LOCALES)[number], string[]> = {
  de: ["/", "/pricing", "/why-companies-ask"],
  fr: [], // FR: pas de fallback vers EN
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

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
  // 2) Fallback /de/* -> EN si page non traduite
  //    (FR reste tel quel)
  // ======================================================
  const locale = SUPPORTED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (!locale) return res;

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
