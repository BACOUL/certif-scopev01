import { body, json, failure } from "@/lib/carbon/http";
import { rateLimit, db } from "@/lib/carbon/store";
import { digest } from "@/lib/carbon/crypto";
import { readCreditStatus } from "@/lib/carbon/credit-status";

export const runtime = "nodejs";

/** Never expose raw customer keys in URLs or logs. This is a read-only endpoint. */
export async function POST(req: Request) {
 try {
  const request = await body(req);
  await rateLimit(digest(["credit-status", req.headers.get("x-vercel-forwarded-for") || "shared"]), 30);
  const status = await readCreditStatus(db(), request.key, process.env.KEY_SECRET);
  return json(status, status.valid ? 200 : 403);
 } catch (error) {
  return failure(error);
 }
}
export async function GET() {
 return json({ error: "POST_REQUIRED" }, 405);
}
