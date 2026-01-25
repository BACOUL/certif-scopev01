import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const RATE_LIMIT = {
  windowMs: 60_000, // 1 minute
  maxVerify: 5,
  maxApi: 30,
};

// Mémoire Edge locale (OK V1)
const ipStore = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, limit: number) {
  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry || entry.resetAt < now) {
    ipStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > limit;
}

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // 🔓 EXCEPTION ABSOLUE — NE JAMAIS TOUCHER
  if (path === "/api/attestation/issue") {
    return NextResponse.next();
  }

  const res = NextResponse.next();

  const ip =
    req.ip ??
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    "unknown";

  // Cache strict pour routes sensibles
  if (path.startsWith("/verify") || path.startsWith("/api")) {
    res.headers.set("Cache-Control", "no-store");
  }

  // Rate-limit VERIFY
  if (path.startsWith("/verify")) {
    if (rateLimit(`verify:${ip}`, RATE_LIMIT.maxVerify)) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  // Rate-limit API (SAUF issue)
  if (path.startsWith("/api")) {
    if (rateLimit(`api:${ip}`, RATE_LIMIT.maxApi)) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  return res;
}

export const config = {
  matcher: ["/verify/:path*", "/api/:path*"],
};
