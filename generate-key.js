import crypto from "crypto";

const KEY_SECRET = process.env.KEY_SECRET;
if (!KEY_SECRET) {
  throw new Error("KEY_SECRET missing");
}

function sign(body) {
  return crypto
    .createHmac("sha256", KEY_SECRET)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

function generateKey() {
  const p1 = crypto.randomBytes(2).toString("hex").toUpperCase();
  const p2 = crypto.randomBytes(2).toString("hex").toUpperCase();
  const p3 = crypto.randomBytes(2).toString("hex").toUpperCase();
  const p4 = crypto.randomBytes(2).toString("hex").toUpperCase();

  const body = `CS-${p1}-${p2}-${p3}-${p4}`;
  const sig = sign(body);

  return `${body}-${sig}`;
}

console.log(generateKey());
