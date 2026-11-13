import { assessmentSchema } from "./schema";
import { FACTORS, METHOD, SOURCE, CATEGORIES, category } from "./factors";
import {EU_F_GAS_VERSION} from "./refrigerants";
export function calculate(input: unknown) {
 const assessment = assessmentSchema.parse(input);
 const warnings: string[] = ["NOT_AUDITED", "SCOPE3_EXCLUDED", "MARKET_BASED_NOT_CALCULATED"];
 if(assessment.year===2026)warnings.push("2026_PROVISIONAL");
 const missing: string[] = [];
 for(const c of CATEGORIES){
  const rows=assessment.activities.filter(a=>category(a.kind)===c);
  if(assessment.sources[c]!=="known" && rows.length)throw new Error("SOURCE_CONFLICT");
  if(assessment.sources[c]==="unknown" || (assessment.sources[c]==="known" && rows.length===0))missing.push(c);
 }
 if(assessment.start!==`${assessment.year}-01-01` || assessment.end!==`${assessment.year}-12-31`)warnings.push("PARTIAL_YEAR");
 if(assessment.exclusions)warnings.push("DECLARED_EXCLUSIONS");
 const lines=assessment.activities.map(a=>{
  const f=FACTORS[a.kind];
  if(!("version" in f) && f.year!==assessment.year)warnings.push("FACTOR_YEAR_DIFFERS");
  if(a.quality!=="invoice")warnings.push("UNVERIFIED_ACTIVITY");
  return {...a, factor:{...f,source:("source" in f?f.source:SOURCE),version:("version" in f?f.version:"ADEME-V23.6"),retrieved:"2026-11-13"}, kgCO2e:a.quantity*f.value, biogenicCO2kg:a.quantity*f.biogenic, energyKwh:f.energy===null?a.energyKwh!:a.quantity*f.energy};
 });
 // B3 §32: energy split is disclosed only when each relevant line is supported by a declared value.
// Missing renewable information is null (never an inferred zero). Location-based GHG totals are independent of this split.
 type EnergyLine = (typeof lines)[number];
 const split=(rows:EnergyLine[], sourceMissing=false)=>{
  const totalKwh=rows.reduce((sum,l)=>sum+l.energyKwh,0);
  const complete=!sourceMissing && rows.every(l=>l.renewableEnergyKwh!==undefined);
  const renewableKwh=complete?rows.reduce((sum,l)=>sum+l.renewableEnergyKwh!,0):null;
  return {totalMwh:totalKwh/1000,totalComplete:!sourceMissing,renewableMwh:renewableKwh===null?null:renewableKwh/1000,
   nonRenewableMwh:renewableKwh===null?null:(totalKwh-renewableKwh)/1000,complete};
 };
 const electricitySplit=split(lines.filter(l=>l.kind==="electricity"),missing.includes("electricity"));
 const fuelCategories=new Set<string>(["gas","diesel_b7","petrol_e10","other_fuels"]);
 const fuelsSplit=split(lines.filter(l=>fuelCategories.has(category(l.kind))),
   [...fuelCategories].some(kind=>missing.includes(kind)));
 const missingEnergy=["electricity","gas","diesel_b7","petrol_e10","other_fuels","purchased_heat","self_generation"]
   .some(kind=>missing.includes(kind));
 const energyBreakdown={electricity:electricitySplit,fuels:fuelsSplit,total:split(lines.filter(l=>category(l.kind)!=="refrigerants"),missingEnergy)};
 if(lines.some(l=>l.factor.source===SOURCE))warnings.push("HISTORICAL_FACTORS");
 if(lines.some(l=>l.factor.version===EU_F_GAS_VERSION))warnings.push("PURE_F_GAS_ONLY_MASS_RELEASE_NOT_CHARGE");
 if(!energyBreakdown.total.complete)warnings.push("ENERGY_SPLIT_NOT_AVAILABLE");
 if(!energyBreakdown.total.totalComplete)warnings.push("ENERGY_TOTAL_INCOMPLETE");
 const scope1Kg=lines.filter(l=>l.factor.scope===1).reduce((s,l)=>s+l.kgCO2e,0);
 const scope2Kg=lines.filter(l=>l.factor.scope===2).reduce((s,l)=>s+l.kgCO2e,0);
 return {methodology:METHOD,assessment,lines,scope1T:scope1Kg/1000,scope2LocationT:scope2Kg/1000,totalT:(scope1Kg+scope2Kg)/1000,
  // Keep the measured sum for traceability. When source categories are missing,
  // it MUST NOT be presented as company total energy in PDF, UI or CSV.
  energyMwh:energyBreakdown.total.totalMwh,energyTotalComplete:energyBreakdown.total.totalComplete,energyBreakdown,biogenicCO2T:lines.reduce((s,l)=>s+l.biogenicCO2kg,0)/1000,
  coverage:missing.length || assessment.exclusions?"partial":"declared_sources_covered", missing, warnings:[...new Set(warnings)],
  // Source refresh and external methodology validation are release blockers, not hidden claims.
  saleEligible:assessment.year<2026 && lines.length>0 && missing.length===0 && !assessment.exclusions && !warnings.includes("PARTIAL_YEAR")};
}
export type Calculation = ReturnType<typeof calculate>;
