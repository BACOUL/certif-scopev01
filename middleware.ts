import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["de", "fr"] as const;

// Mets ici uniquement les pages réellement traduites par langue
const ALLOWED: Record<(typeof SUPPORTED_LOCALES)[number], string[]> = {
  de: [
    "/", // /de
    "/pricing",
    "/why-companies-ask",
    // ajoute au fur et à mesure: "/legal", "/privacy", etc.
  ],
  fr: [
    // si tu veux aussi éviter les 404 en FR, remplis ici
    // sinon laisse vide et FR ne redirigera pas (mais config matcher inclut /fr)
  ],
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // ======================================================
  // 1) Base response
  // ======================================================
  const res = NextResponse.next();

  // Sécurité HTTP de base
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // Cache strict pour routes sensibles
  if (pathname.startsWith("/verify") || pathname.startsWith("/api")) {
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  // ======================================================
  // 2) Locale fallback: /de/* (and optionally /fr/*) -> EN
  //    if page is not translated
  // ======================================================
  const locale = SUPPORTED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (!locale) return res;

  // Path after locale prefix
  const rest = pathname.replace(`/${locale}`, "") || "/"; // "/" or "/pricing"...
  const isAllowed = ALLOWED[locale]?.includes(rest);

  if (isAllowed) return res;

  // If FR list is empty, don't redirect FR (optional behavior)
  // Comment this block if you DO want FR fallback too.
  if (locale === "fr" && ALLOWED.fr.length === 0) {
    return res;
  }

  // Redirect to EN equivalent (remove locale prefix)
  const url = req.nextUrl.clone();
  url.pathname = rest === "/" ? "/" : rest;

  return NextResponse.redirect(url, 307);
}

// Routes concernées
export const config = {
  matcher: ["/verify/:path*", "/api/:path*", "/de/:path*", "/fr/:path*"],
};
