import { NextRequest, NextResponse } from "next/server";

/**
 * Display-only safeguard for the original Certif-Scope website on Vercel Preview\n * or on the isolated review project (even for its initial production-target deploy).
 *
 * The historical site has live Stripe/credits/PDF routes (including GET endpoints).
 * Never call them from a visual review deployment. This is NOT a replacement
 * for isolated project credentials or an audit of the business routes.
 */
export function proxy(request: NextRequest) {
  const reviewDeployment = process.env.VERCEL_ENV === "preview" || process.env.VERCEL_PROJECT_ID === "prj_uB8VwMP9wnONmHvVbrTPxyqYXD65";
  if (!reviewDeployment) {
    return NextResponse.next();
  }

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
