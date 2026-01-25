export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // ⛔️ NE JAMAIS INTERCEPTER issue
  if (pathname === "/api/attestation/issue") {
    return NextResponse.next();
  }

  const res = NextResponse.next();

  const ip =
    req.ip ??
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    "unknown";

  // Cache strict pour routes sensibles
  if (pathname.startsWith("/verify") || pathname.startsWith("/api")) {
    res.headers.set("Cache-Control", "no-store");
  }

  // Rate-limit VERIFY
  if (pathname.startsWith("/verify")) {
    if (rateLimit(`verify:${ip}`, RATE_LIMIT.maxVerify)) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  // Rate-limit API (SAUF issue)
  if (pathname.startsWith("/api")) {
    if (rateLimit(`api:${ip}`, RATE_LIMIT.maxApi)) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  return res;
}
