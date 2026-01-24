import crypto from "crypto";

const KEY_SECRET = process.env.KEY_SECRET!;
if (!KEY_SECRET) {
  throw new Error("KEY_SECRET missing");
}

function generateKey() {
  const a = crypto.randomBytes(2).toString("hex").toUpperCase(); // 4
  const b = crypto.randomBytes(2).toString("hex").toUpperCase(); // 4
  const c = crypto.randomBytes(2).toString("hex").toUpperCase(); // 4
  const d = crypto.randomBytes(2).toString("hex").toUpperCase(); // 4

  const keyBody = `CS-${a}-${b}-${c}-${d}`;

  const signature = crypto
    .createHmac("sha256", KEY_SECRET)
    .update(keyBody)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();

  return `${keyBody}-${signature}`;
}

console.log(generateKey());
