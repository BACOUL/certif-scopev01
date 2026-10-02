import { createHmac, timingSafeEqual } from "node:crypto";

// Bind the document data to a successful server-side credit redemption.
function signature(params: URLSearchParams): string {
  const secret = process.env.KEY_SECRET;
  if (!secret) throw new Error("KEY_SECRET missing");
  const entries = [...params.entries()].filter(
    ([key]) => key !== "authorization",
  );
  entries.sort(([a], [b]) => a.localeCompare(b));
  return createHmac("sha256", secret)
    .update(JSON.stringify(entries))
    .digest("hex");
}

export function authorizeKeyDownload(params: URLSearchParams): void {
  params.set("expires", String(Date.now() + 30 * 60 * 1000));
  params.set("authorization", signature(params));
}

export function isAuthorizedKeyDownload(params: URLSearchParams): boolean {
  const expires = Number(params.get("expires"));
  const provided = params.get("authorization") || "";
  if (
    !Number.isFinite(expires) ||
    expires <= Date.now() ||
    !/^[a-f0-9]{64}$/.test(provided)
  )
    return false;
  if (!process.env.KEY_SECRET) return false;
  return timingSafeEqual(
    Buffer.from(provided, "hex"),
    Buffer.from(signature(params), "hex"),
  );
}
