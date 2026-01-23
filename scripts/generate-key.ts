import crypto from "crypto";

const KEY_SECRET = process.env.KEY_SECRET!;
if (!KEY_SECRET) {
  throw new Error("KEY_SECRET missing");
}

function generateKey() {
  const publicId = crypto.randomBytes(4).toString("hex").toUpperCase();

  const signature = crypto
    .createHmac("sha256", KEY_SECRET)
    .update(publicId)
    .digest("hex")
    .slice(0, 16)
    .toUpperCase();

  return `CS-${publicId}-${signature}`;
}

console.log(generateKey());
