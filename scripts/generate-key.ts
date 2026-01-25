import crypto from "crypto";

/* ======================================================
   CONFIG — ENV OBLIGATOIRES
====================================================== */

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

/* ======================================================
   CONSTANTES
====================================================== */

// Validité clé : 1 an
const KEY_VALIDITY_DAYS = 365;

/* ======================================================
   HELPERS
====================================================== */

/**
 * FORMAT STRICT
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

function computeExpiryDate(): string {
  const now = new Date();
  now.setDate(now.getDate() + KEY_VALIDITY_DAYS);
  return now.toISOString();
}

async function storeKey(key: string, credits: number) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`;

  const payload = {
    credits,                 // nombre total de crédits
    usedCredits: 0,          // crédits consommés
    createdAt: new Date().toISOString(),
    expiresAt: computeExpiryDate(), // ⏳ VALIDITÉ 1 AN
    used: false,             // compatibilité redeem-key
    source: "manual",
    version: "v1",
  };

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`KV write failed: ${res.status} ${text}`);
  }
}

/* ======================================================
   MAIN
====================================================== */

/**
 * USAGE
 * node scripts/generate-key.ts [credits] [count]
 *
 * EXAMPLES
 * node scripts/generate-key.ts
 *   → 1 key, 1 credit, valid 1 year
 *
 * node scripts/generate-key.ts 10
 *   → 1 key, 10 credits, valid 1 year
 *
 * node scripts/generate-key.ts 5 10
 *   → 10 keys, 5 credits each, valid 1 year
 */

const credits = Number(process.argv[2] || 1);
const count = Number(process.argv[3] || 1);

if (credits <= 0 || count <= 0) {
  throw new Error("credits and count must be positive numbers");
}

(async () => {
  console.log(`\nGenerating ${count} key(s) with ${credits} credit(s) each`);
  console.log(`Validity: ${KEY_VALIDITY_DAYS} days\n`);

  for (let i = 0; i < count; i++) {
    const key = generateAccessKey();
    await storeKey(key, credits);
    console.log(key);
  }

  console.log("\nDone.\n");
})();
