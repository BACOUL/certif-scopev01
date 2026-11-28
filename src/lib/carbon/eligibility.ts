import type { Calculation } from "./calculate";
import { REVIEW_GEOGRAPHY } from "./period";
import type { SourceKind } from "./factors";

// Proposed launch scope, not an approved registry of emission factors.
// Keep the broader research engine available in the isolated simulator.
export const LAUNCH_SOURCE_CANDIDATES = ["electricity","gas_pcs","gas_pci","diesel_b7","petrol_e10","fuel_oil_pci"] as const satisfies readonly SourceKind[];
export const LAUNCH_POLICY_VERSION = "CS-B3-P0-REVIEW-1";
const launchKinds = new Set<string>(LAUNCH_SOURCE_CANDIDATES);
type DataBlocker = "GEOGRAPHY_UNCONFIRMED"|"PERIOD_NOT_FULL_CALENDAR_YEAR"|"MISSING_REQUIRED_TOTAL"|"DECLARED_EXCLUSIONS"|"SOURCE_OUTSIDE_LAUNCH_SCOPE"|"NO_DOCUMENTED_ACTIVITY"|"ACTIVITY_NOT_DOCUMENTED";
type ReleaseBlocker = "FACTORS_NOT_APPROVED"|"HISTORICAL_ELECTRICITY_PROXY"|"METHOD_RELEASE_NOT_APPROVED"|"COMPARATIVE_REVIEW_PENDING"|"SERVER_ISSUANCE_DISABLED";

export function evaluateLaunch(result:Calculation) {
 const a=result.assessment;
 const dataBlockers:DataBlocker[]=[];
 const releaseBlockers:ReleaseBlocker[]=[];
 if(a.geography!==REVIEW_GEOGRAPHY) dataBlockers.push("GEOGRAPHY_UNCONFIRMED");
 // Conservative initial commercial policy, not a legal requirement.
 if(a.start!==a.year+"-01-01" || a.end!==a.year+"-12-31") dataBlockers.push("PERIOD_NOT_FULL_CALENDAR_YEAR");
 if([result.report.energy.value,result.report.scope1.value,result.report.scope2.value].some(v=>v===null||!Number.isFinite(v)||v<0)) dataBlockers.push("MISSING_REQUIRED_TOTAL");
 if(a.exclusions) dataBlockers.push("DECLARED_EXCLUSIONS");
 if(a.thermalPurchases.length || a.processEmissions.length || result.lines.some(l=>!launchKinds.has(l.kind))) dataBlockers.push("SOURCE_OUTSIDE_LAUNCH_SCOPE");
 // Avoid a zero from an entirely empty inventory being mistaken for a
 // documented zero. Explicit zero lines can be reviewed normally.
 if(!result.lines.length) dataBlockers.push("NO_DOCUMENTED_ACTIVITY");
 if(result.lines.some(l=>l.quality!=="invoice")) dataBlockers.push("ACTIVITY_NOT_DOCUMENTED");
 if(result.lines.some(l=>!l.factor.approvedForIssuance)) releaseBlockers.push("FACTORS_NOT_APPROVED");
 if(result.lines.some(l=>l.kind==="electricity"&&l.factor.selection!=="exact_year_candidate")) releaseBlockers.push("HISTORICAL_ELECTRICITY_PROXY");
 // Never infer approval from a complete simulation. No toggle, client field
 // or environment flag can activate issuance from this research module.
 releaseBlockers.push("METHOD_RELEASE_NOT_APPROVED","COMPARATIVE_REVIEW_PENDING","SERVER_ISSUANCE_DISABLED");
 return {
  policy:LAUNCH_POLICY_VERSION,
  dataStatus:dataBlockers.length?"needs_review" as const:"launch_candidate" as const,
  dataBlockers,releaseBlockers,
  // Optional mix does not independently block the B3 totals.
  renewableSplitAvailable:result.report.energyMix!==null,
  canPurchase:false as const,
 };
}
