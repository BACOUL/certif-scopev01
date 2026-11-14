/**
 * Fail-closed release review. This DOES NOT publish, enable checkout, or prove
 * the evidence is authentic: only a reviewer can independently authenticate it.
 *
 * Expected private file: .private/release-evidence.json (never commit).
 * Example required shape for each item:
 * { "passed": true, "reviewer": "Full name", "reviewedAt": "2026-11-13",
 *   "evidenceRef": "audit/2026-11-13#factor-cross-check" }
 */
import {readFileSync} from "node:fs";
import {resolve} from "node:path";

export const REQUIRED = [
 "ademe_23_11_licensed_export_verified",
 "ademe_23_11_terms_and_commercial_reuse_approved",
 "factor_boundaries_units_years_and_geography_cross_checked",
 "b3_scope1_scope2_and_energy_cases_reviewed",
 "stripe_real_sandbox_e2e_and_webhook_verified",
 "legacy_orders_credits_refunds_reconciled",
 "pdf_fr_en_de_visual_mobile_accessibility_checked",
 "privacy_tax_legal_claims_reviewed",
 "data_retention_backup_restore_and_purge_verified",
 "owner_explicit_release_approval"
];
function safeLoad(){
 try{return JSON.parse(readFileSync(resolve(".private/release-evidence.json"),"utf8"));}
 catch{return null;}
}
const data=safeLoad();
const missing=[];
for(const key of REQUIRED){
 const x=data?.checks?.[key];
 if(!x || x.passed!==true || typeof x.reviewer!=="string" || x.reviewer.trim().length<4 ||
    !/^20\d{2}-\d{2}-\d{2}$/.test(x.reviewedAt||"") ||
    typeof x.evidenceRef!=="string" || x.evidenceRef.trim().length<8){
  missing.push(key);
 }
}
if(missing.length){
 console.error("RELEASE BLOCKED: unverified requirements:",missing.join(", "));
 process.exitCode=1;
} else {
 console.log("All review entries are present. Independently validate each reference. This command DOES NOT authorize a deploy.");
}
