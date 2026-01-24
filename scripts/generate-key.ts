import crypto from "crypto";
import fetch from "node-fetch";

/* ================= CONFIG ================= */

const {
  KEY_SECRET,
  CLOUDFLARE_ACCOUNT_ID,
  CF_KV_NAMESPACE_ID,
  CLOUDFLARE_API_TOKEN,
} = process.env;

if (
  !KEY_SECRET ||
  !CLOUDFLARE_ACCOUNT_ID ||
  !CF_KV_NAMESPACE_ID ||
  !CLOUDFLARE_API_TOKEN
) {
  throw new Error("Missing ENV variables");
}

/* ================= HELPERS ================= */

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

async function storeKey(key: string, credits: number) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      credits,
      usedCredits: 0,
      createdAt: new Date().toISOString(),
      source: "manual",
    }),
  });

  if (!res.ok) {
    throw new Error("KV write failed");
  }
}

/* ================= MAIN ================= */

const credits = Number(process.argv[2] || 1);
const count = Number(process.argv[3] || 1);

(async () => {
  for (let i = 0; i < count; i++) {
    const key = generateAccessKey();
    await storeKey(key, credits);
    console.log(key);
  }
})();
