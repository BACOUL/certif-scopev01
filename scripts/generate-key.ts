import crypto from "crypto";

/**
 * CONFIG
 * ➜ DOIT être IDENTIQUE côté redeem
 */
const KEY_SECRET = process.env.KEY_SECRET!;
if (!KEY_SECRET) {
  throw new Error("Missing KEY_SECRET");
}

/**
 * FORMAT
 * CS-XXXX-XXXX-XXXX-SIGN
 */
function generateAccessKey(): string {
  const body = crypto.randomBytes(6).toString("hex").toUpperCase(); // 12 chars
  const formatted = `CS-${body.slice(0,4)}-${body.slice(4,8)}-${body.slice(8,12)}`;

  const signature = crypto
    .createHmac("sha256", KEY_SECRET)
    .update(formatted)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();

  return `${formatted}-${signature}`;
}

// === USAGE ===
console.log("NEW ACCESS KEY:");
console.log(generateAccessKey());
