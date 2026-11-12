import { assessmentSchema } from "./schema";
import { FACTORS, METHOD, SOURCE, CATEGORIES, category } from "./factors";
export function calculate(input: unknown) {
 const assessment = assessmentSchema.parse(input);
 const warnings: string[] = ["NOT_AUDITED", "SCOPE3_EXCLUDED", "MARKET_BASED_NOT_CALCULATED", "HISTORICAL_FACTORS"];
 const missing: string[] = [];
 for(const c of CATEGORIES){
  const rows=assessment.activities.filter(a=>category(a.kind)===c);
  if(assessment.sources[c]==="not_applicable" && rows.length)throw new Error("SOURCE_CONFLICT");
  if(assessment.sources[c]==="unknown" || (assessment.sources[c]==="known" && rows.length===0))missing.push(c);
 }
 if(assessment.start!==`${assessment.year}-01-01` || assessment.end!==`${assessment.year}-12-31`)warnings.push("PARTIAL_YEAR");
 if(assessment.exclusions)warnings.push("DECLARED_EXCLUSIONS");
 const lines=assessment.activities.map(a=>{
  const f=FACTORS[a.kind];
  if(f.year!==assessment.year)warnings.push("FACTOR_YEAR_DIFFERS");
  if(a.quality!=="invoice")warnings.push("UNVERIFIED_ACTIVITY");
  return {...a, factor:{...f,source:SOURCE,version:"ADEME-V23.6",retrieved:"2026-11-12"}, kgCO2e:a.quantity*f.value, biogenicCO2kg:a.quantity*f.biogenic, energyKwh:f.energy===null?a.energyKwh!:a.quantity*f.energy};
 });
 const scope1Kg=lines.filter(l=>l.factor.scope===1).reduce((s,l)=>s+l.kgCO2e,0);
 const scope2Kg=lines.filter(l=>l.factor.scope===2).reduce((s,l)=>s+l.kgCO2e,0);
 return {methodology:METHOD,assessment,lines,scope1T:scope1Kg/1000,scope2LocationT:scope2Kg/1000,totalT:(scope1Kg+scope2Kg)/1000,
  energyMwh:lines.reduce((s,l)=>s+l.energyKwh,0)/1000,biogenicCO2T:lines.reduce((s,l)=>s+l.biogenicCO2kg,0)/1000,
  coverage:missing.length || assessment.exclusions?"partial":"declared_sources_covered", missing, warnings:[...new Set(warnings)],
  // Source refresh and external methodology validation are release blockers, not hidden claims.
  saleEligible:missing.length===0 && !assessment.exclusions && !warnings.includes("PARTIAL_YEAR")};
}
export type Calculation = ReturnType<typeof calculate>;
