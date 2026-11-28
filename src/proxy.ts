import { NextRequest, NextResponse } from "next/server";

/**
 * Display-only safeguard for the original Certif-Scope website on Vercel Preview\n * and the isolated review project. This draft branch denies writes on EVERY target.
 *
 * The historical site has live Stripe/credits/PDF routes (including GET endpoints).
 * Never call them from a visual review deployment. This is NOT a replacement
 * for isolated project credentials or an audit of the business routes.
 */
export function proxy(request: NextRequest) {
  // REVIEW_ONLY_LOCK: this separate draft branch MUST remain read-only on any target.
  // Explicitly remove this guard only in a future, approved, tested release.
  
  const path = request.nextUrl.pathname;
  const isApi = path === "/api" || path.startsWith("/api/");
  const isPrivateFlow = /\/(?:success|erfolg)(?:\/|$)/i.test(path);
  const isReadOnlyMethod = request.method === "GET" || request.method === "HEAD";

  if (isApi || isPrivateFlow || !isReadOnlyMethod) {
    return new NextResponse("Preview de consultation uniquement : paiement, API et donnees clients desactives.", {
      status: 403,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
