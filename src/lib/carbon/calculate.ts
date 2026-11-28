import { assessmentSchema } from "./schema";
import { selectReviewFactor, METHOD, SOURCE, CATEGORIES, category } from "./factors";
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
 if(assessment.thermalPurchases.length)warnings.push("THERMAL_EMISSION_FACTOR_UNAVAILABLE");
 const lines=assessment.activities.map(a=>{
  const f=selectReviewFactor(a.kind,assessment.year);
  if(f.source===SOURCE && f.year!==assessment.year)warnings.push("FACTOR_YEAR_DIFFERS");
  if(a.kind==="electricity" && f.selection==="historical_demo_only")warnings.push("ELECTRICITY_EXACT_YEAR_UNAVAILABLE_DEMO_ONLY");
  if(!f.approvedForIssuance)warnings.push("FACTORS_NOT_APPROVED_FOR_ISSUANCE");
  if(a.quality!=="invoice")warnings.push("UNVERIFIED_ACTIVITY");
  if(a.kind==="solar_pv_owned")warnings.push("PV_OPERATIONAL_ONLY_NO_AVOIDED_EMISSIONS");
  return {...a, ...(a.kind==="solar_pv_owned"?{renewableEnergyKwh:a.quantity}:{}), factor:f, kgCO2e:a.quantity*f.value, biogenicCO2kg:a.quantity*f.biogenic, energyKwh:f.energy===null?a.energyKwh!:a.quantity*f.energy};
 });
 // B3 §32: energy split is disclosed only when each relevant line is supported by a declared value.
// Missing renewable information is null (never an inferred zero). Location-based GHG totals are independent of this split.
 type EnergyLine = {energyKwh:number;renewableEnergyKwh?:number};
 const split=(rows:EnergyLine[], sourceMissing=false)=>{
  const totalKwh=rows.reduce((sum,l)=>sum+l.energyKwh,0);
  const complete=!sourceMissing && rows.every(l=>l.renewableEnergyKwh!==undefined);
  const renewableKwh=complete?rows.reduce((sum,l)=>sum+l.renewableEnergyKwh!,0):null;
  return {totalMwh:totalKwh/1000,totalComplete:!sourceMissing,renewableMwh:renewableKwh===null?null:renewableKwh/1000,
   nonRenewableMwh:renewableKwh===null?null:(totalKwh-renewableKwh)/1000,complete};
 };
 const electricitySplit=split(lines.filter(l=>l.kind==="electricity"||l.kind==="solar_pv_owned"),missing.includes("electricity")||missing.includes("self_generation"));
 const fuelCategories=new Set<string>(["gas","diesel_b7","petrol_e10","other_fuels"]);
 const fuelsSplit=split(lines.filter(l=>fuelCategories.has(category(l.kind))),
   [...fuelCategories].some(kind=>missing.includes(kind)));
 const thermalLines=assessment.thermalPurchases.map(a=>({energyKwh:a.quantityKwh,renewableEnergyKwh:a.renewableEnergyKwh}));
 const thermalEnergyMissing=assessment.sources.purchased_heat==="unknown"||(assessment.sources.purchased_heat==="known"&&!thermalLines.length);
 const missingEnergy=["electricity","gas","diesel_b7","petrol_e10","other_fuels","self_generation"]
   .some(kind=>missing.includes(kind))||thermalEnergyMissing;
 const energyBreakdown={electricity:electricitySplit,fuels:fuelsSplit,thermal:split(thermalLines,thermalEnergyMissing),total:split([...lines.filter(l=>category(l.kind)!=="refrigerants"),...thermalLines],missingEnergy)};
 if(lines.some(l=>l.factor.source===SOURCE))warnings.push("HISTORICAL_FACTORS");
 if(lines.some(l=>l.factor.version===EU_F_GAS_VERSION))warnings.push("PURE_F_GAS_ONLY_MASS_RELEASE_NOT_CHARGE");
 if(!energyBreakdown.total.complete)warnings.push("ENERGY_SPLIT_NOT_AVAILABLE");
 if(!energyBreakdown.total.totalComplete)warnings.push("ENERGY_TOTAL_INCOMPLETE");
 const scope1Kg=lines.filter(l=>l.factor.scope===1).reduce((s,l)=>s+l.kgCO2e,0);
 const scope2Kg=lines.filter(l=>l.factor.scope===2).reduce((s,l)=>s+l.kgCO2e,0);
 // A numerical subtotal is not a complete company-wide metric. Keep legacy
 // raw subtotals for the simulation, but use report for all new disclosures.
 const scope1Sources = ["gas","diesel_b7","petrol_e10","other_fuels","refrigerants","processes","self_generation"];
 const scope2Sources = ["electricity","purchased_heat","self_generation"];
 const hasExclusions = Boolean(assessment.exclusions);
 const metric = (knownSum:number, incomplete:boolean) => ({
  status: (hasExclusions || incomplete ? "partial" : "declared_covered") as "partial" | "declared_covered",
  value: hasExclusions || incomplete ? null : knownSum,
  knownSum,
 });
 const scope1 = metric(scope1Kg/1000, missing.some(k=>scope1Sources.includes(k)));
 const scope2 = metric(scope2Kg/1000, missing.some(k=>scope2Sources.includes(k)));
 const energy = metric(energyBreakdown.total.totalMwh, missingEnergy);
 const total = metric((scope1Kg+scope2Kg)/1000, scope1.value===null || scope2.value===null);
 const report = {
  scope1, scope2, energy, total,
  scopeShares: total.value!==null && total.value>0 && scope1.value!==null && scope2.value!==null
    ? {scope1:scope1.value/total.value,scope2:scope2.value/total.value} : null,
  energyMix: energy.value!==null && energyBreakdown.total.complete
    ? {renewableMwh:energyBreakdown.total.renewableMwh,nonRenewableMwh:energyBreakdown.total.nonRenewableMwh} : null,
  // Release approval must come from validated methodology, factors and commercial controls.
  releaseApproved:false as const,
 };
 return {methodology:METHOD,assessment,lines,report,scope1T:scope1Kg/1000,scope2LocationT:scope2Kg/1000,totalT:(scope1Kg+scope2Kg)/1000,
  // Keep the measured sum for traceability. When source categories are missing,
  // it MUST NOT be presented as company total energy in PDF, UI or CSV.
  energyMwh:energyBreakdown.total.totalMwh,energyTotalComplete:energyBreakdown.total.totalComplete,energyBreakdown,biogenicCO2T:lines.reduce((s,l)=>s+l.biogenicCO2kg,0)/1000,
  coverage:missing.length || assessment.exclusions?"partial":"declared_sources_covered", missing, warnings:[...new Set(warnings)],
  // Source refresh and external methodology validation are release blockers, not hidden claims.
  saleEligible:false};
}
export type Calculation = ReturnType<typeof calculate>;
