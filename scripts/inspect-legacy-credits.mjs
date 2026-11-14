#!/usr/bin/env node
/**
 * Offline/private manifest. Never commit the file or print original key strings.
 * Default mode validates and prints aggregate counts only. --apply is staging ONLY.
 */
import { readFile } from "node:fs/promises";
import { planLegacyImport, applyLegacyImport } from "../src/lib/carbon/legacy-migration.ts";

const [, , filename, mode = "--dry-run"] = process.argv;
if (!filename || !["--dry-run", "--apply"].includes(mode)) {
 console.error("Usage: npm run legacy:inspect -- <private-manifest.json> [--dry-run|--apply]");
 process.exitCode = 2;
} else {
 try {
  const text = await readFile(filename, "utf8");
  const json = JSON.parse(text);
  if (json.version !== 1 || !Array.isArray(json.entries)) throw Error("INVALID_MANIFEST");
  const plan = planLegacyImport(json.entries, process.env.KEY_SECRET || "");
  const summary = {
   mode, count: plan.count, unexpiredRemainingCredits: plan.remainingCredits,
   zeroBalance: plan.zeroBalance, expired: plan.expired, planHash: plan.planHash,
   product: plan.product,
  };
  if (mode === "--dry-run") {
   console.log(JSON.stringify({ status: "REVIEW_REQUIRED", ...summary }, null, 2));
  } else {
   // Double protection: no production or shared database is permitted by this utility.
   if (process.env.CARBON_MIGRATION_TARGET !== "isolated-staging" ||
       process.env.CARBON_LEGACY_MIGRATION_APPROVED !== "YES_ISOLATED_STAGING_ONLY" ||
       process.env.CARBON_TEST_CHECKOUT !== "true" ||
       !process.env.CARBON_DATABASE_URL) throw Error("STAGING_APPROVAL_REQUIRED");
   const { Pool } = await import("pg");
   const pool = new Pool({ connectionString: process.env.CARBON_DATABASE_URL, max: 1 });
   try {
    const client = await pool.connect();
    try {
     const result = await applyLegacyImport(client, plan);
     console.log(JSON.stringify({ status: "STAGING_IMPORT_COMPLETE", ...summary, ...result }, null, 2));
    } finally { client.release(); }
   } finally { await pool.end(); }
  }
 } catch (error) {
  // Do not log the manifest or individual keys, which are customer credentials.
  const safeErrors = [
   "INVALID_MANIFEST", "INVALID_LEGACY_KEY", "DUPLICATE_LEGACY_KEY",
   "INVALID_CREDITS", "INVALID_USED_FLAG", "UNRECONCILED_USAGE",
   "INVALID_USAGE", "EXPIRY_REQUIRES_REVIEW", "UNRECONCILED_PURCHASE",
   "INVALID_DATE", "INVALID_PLAN", "LEGACY_IMPORT_CONFLICT",
   "LEGACY_CREDIT_COLLISION", "STAGING_APPROVAL_REQUIRED",
  ];
  const code = error instanceof Error && safeErrors.includes(error.message)
   ? error.message : "INSPECTION_FAILED";
  console.error(code);
  process.exitCode = 1;
 }
}
