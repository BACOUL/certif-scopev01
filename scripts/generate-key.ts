import crypto from "crypto";

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

/**
 * FORMAT
 * CS-XXXX-XXXX-XXXX-SIGN
 */
function generateAccessKey(): string {
  const body = crypto.randomBytes(6).toString("hex").toUpperCase(); // 12 chars
  const formatted = `CS-${body.slice(0, 4)}-${body.slice(4, 8)}-${body.slice(8, 12)}`;

  const signature = crypto
    .createHmac("sha256", KEY_SECRET!)
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
    const text = await res.text();
    throw new Error(`KV write failed: ${res.status} ${text}`);
  }
}

/* ================= MAIN ================= */

/**
 * USAGE:
 * node scripts/generate-key.ts [credits] [count]
 *
 * EXAMPLES:
 * node scripts/generate-key.ts           → 1 key, 1 credit
 * node scripts/generate-key.ts 10        → 1 key, 10 credits
 * node scripts/generate-key.ts 5 10      → 10 keys, 5 credits each
 */

const credits = Number(process.argv[2] || 1);
const count = Number(process.argv[3] || 1);

(async () => {
  for (let i = 0; i < count; i++) {
    const key = generateAccessKey();
    await storeKey(key, credits);
    console.log(key);
  }
})();
