import { z } from "zod";
import { CATEGORIES, FACTORS } from "./factors";
import { FIRST_REVIEW_YEAR, REVIEW_GEOGRAPHY, reportingToday } from "./period";
const text = z.string().trim().min(1).max(180).refine(s => !/[\x00-\x1f]/.test(s), "CONTROL_CHARACTERS");
export const createAssessmentSchema = (clock:()=>Date=()=>new Date()) => z.object({
 locale: z.enum(["fr", "en", "de"]), company: text, identifier: text, country: z.literal("FR"),
 geography: z.literal(REVIEW_GEOGRAPHY).optional(),
 year: z.number().int().min(FIRST_REVIEW_YEAR).max(9999), boundary: text, declarant: text,
 start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
 sources: z.object(Object.fromEntries(CATEGORIES.map(k => [k, z.enum(["known", "not_applicable", "unknown"])])) as Record<typeof CATEGORIES[number], z.ZodEnum<["known", "not_applicable", "unknown"]>>).strict(),
 activities: z.array(z.object({
  id: z.string().regex(/^[a-zA-Z0-9_-]{1,40}$/), kind: z.enum(Object.keys(FACTORS) as [keyof typeof FACTORS, ...Array<keyof typeof FACTORS>]),
  quantity: z.number().finite().min(0).max(1e9), unit: z.enum(["kWh", "kWh PCS", "kWh PCI", "L", "kg"]),
  energyKwh: z.number().finite().min(0).max(1e9).optional(),
  renewableEnergyKwh: z.number().finite().min(0).max(1e9).optional(),
  generatedKwh: z.number().finite().min(0).max(1e9).optional(),
  exportedKwh: z.number().finite().min(0).max(1e9).optional(),
  quality: z.enum(["invoice", "estimate", "declaration"]), evidence: text,
 }).strict()).max(40),
 // Energy-only thermal purchases until an independently qualified network factor exists.
 thermalPurchases: z.array(z.object({
  id: z.string().regex(/^[a-zA-Z0-9_-]{1,40}$/),
  kind: z.enum(["heat","steam","cooling"]),
  network: text,
  quantityKwh: z.number().finite().min(0).max(1e9),
  renewableEnergyKwh: z.number().finite().min(0).max(1e9).optional(),
  evidence: text,
 }).strict()).max(40).default([]),
 // Imported documented process-only totals, not a sector-specific calculator.
 // Restricted to gross non-biogenic process emissions within the reporting
 // boundary. Mixed inventories, combustion, fugitive releases, offsets and
 // carbon removals must not be entered as process totals.
 processEmissions: z.array(z.object({
  id: z.string().regex(/^[a-zA-Z0-9_-]{1,40}$/),
  process: text,
  grossTCO2e: z.number().finite().min(0).max(1e9),
  method: text,
  gwpBasis: text,
  evidence: text,
  confirmedBoundary: z.literal(true),
 }).strict()).max(40).default([]),
 exclusions: z.string().trim().max(600), confirmed: z.literal(true),
}).strict().superRefine((x,ctx)=>{
 const start = new Date(x.start), end = new Date(x.end);
 if (!Number.isFinite(+start) || !Number.isFinite(+end) || start.toISOString().slice(0,10)!==x.start || end.toISOString().slice(0,10)!==x.end || start>end || +end-+start>366*86400000 || start.getUTCFullYear()!==x.year || end.getUTCFullYear()!==x.year)
 ctx.addIssue({code:"custom",message:"INVALID_PERIOD"});
 const today=reportingToday(clock());
 if(x.year>Number(today.slice(0,4)) || x.start>today || x.end>today)ctx.addIssue({code:"custom",message:"FUTURE_PERIOD_NOT_ALLOWED"});
 if(new Set(x.activities.map(a=>a.id)).size!==x.activities.length)ctx.addIssue({code:"custom",message:"DUPLICATE_ACTIVITY"});
 if(new Set(x.activities.map(a=>`${a.kind.startsWith("gas_")?"gas":a.kind}|${a.evidence.trim().toLowerCase()}`)).size!==x.activities.length)ctx.addIssue({code:"custom",message:"DUPLICATE_EVIDENCE"});
 if(x.thermalPurchases.length && x.sources.purchased_heat!=="known")
  ctx.addIssue({code:"custom",message:"THERMAL_SOURCE_CONFLICT"});
 if(x.processEmissions.length && x.sources.processes!=="known")
  ctx.addIssue({code:"custom",message:"PROCESS_SOURCE_CONFLICT"});
 if(new Set(x.processEmissions.map(a=>[a.process.trim().toLowerCase(),a.evidence.trim().toLowerCase()].join("|"))).size!==x.processEmissions.length)
  ctx.addIssue({code:"custom",message:"DUPLICATE_PROCESS_EVIDENCE"});
 if(new Set([...x.activities,...x.thermalPurchases,...x.processEmissions].map(a=>a.id)).size!==x.activities.length+x.thermalPurchases.length+x.processEmissions.length)
  ctx.addIssue({code:"custom",message:"DUPLICATE_ACTIVITY"});
 if(new Set(x.thermalPurchases.map(a=>[a.kind,a.network.trim().toLowerCase(),a.evidence.trim().toLowerCase()].join("|"))).size!==x.thermalPurchases.length)
  ctx.addIssue({code:"custom",message:"DUPLICATE_THERMAL_EVIDENCE"});
 for(const a of x.thermalPurchases){
  if(a.renewableEnergyKwh!==undefined && a.renewableEnergyKwh>a.quantityKwh)
   ctx.addIssue({code:"custom",message:"RENEWABLE_EXCEEDS_TOTAL_ENERGY"});
 }
 for(const a of x.activities){
  const f=FACTORS[a.kind];
  if(a.kind.startsWith("wood_") && a.renewableEnergyKwh!==undefined && Math.abs(a.renewableEnergyKwh-a.quantity)>0.001)
   ctx.addIssue({code:"custom",message:"PURE_WOOD_RENEWABLE_MISMATCH"});
  if(a.kind==="solar_pv_owned"){
   // Only the directly consumed portion is counted. No netting of exports
   // against imported electricity. Other generation/storage configurations
   // stay unsupported until a separate reviewed allocation method exists.
   if(a.generatedKwh===undefined || a.exportedKwh===undefined || a.quality!=="invoice")
    ctx.addIssue({code:"custom",message:"PV_METERED_BALANCE_REQUIRED"});
   else if(Math.abs(a.generatedKwh-a.exportedKwh-a.quantity)>0.001)
    ctx.addIssue({code:"custom",message:"PV_BALANCE_MISMATCH"});
   if(a.renewableEnergyKwh!==undefined && Math.abs(a.renewableEnergyKwh-a.quantity)>0.001)
    ctx.addIssue({code:"custom",message:"PV_RENEWABLE_MISMATCH"});
  } else if(a.generatedKwh!==undefined || a.exportedKwh!==undefined){
   ctx.addIssue({code:"custom",message:"UNEXPECTED_GENERATION_BALANCE"});
  }
  if(a.unit!==f.unit)ctx.addIssue({code:"custom",message:"UNIT_MISMATCH"});
  if(f.energy===null && a.energyKwh===undefined)ctx.addIssue({code:"custom",message:"FUEL_ENERGY_REQUIRED"});
  if(f.energy!==null && a.energyKwh!==undefined)ctx.addIssue({code:"custom",message:"UNEXPECTED_ENERGY"});
  if(f.energy===null && ((a.quantity===0)!==(a.energyKwh===0)))ctx.addIssue({code:"custom",message:"INCONSISTENT_FUEL_ENERGY"});
  // Broad plausibility screen ONLY for road diesel B7 / petrol E10.
  // Normal liquid road fuels are around 9–10 kWh PCI per litre.
  // 5–15 is an intentionally generous input-error guard, not an official
  // tolerance, conversion factor, or proof of the supplied energy value.
  // Source for physical properties: ADEME PCI et masse volumique:
  // https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/pci_et_masse_volumique.htm
  if((a.kind==="diesel_b7" || a.kind==="petrol_e10") && a.quantity>0 && a.energyKwh!==undefined) {
   const ratio=a.energyKwh/a.quantity;
   if(ratio<5 || ratio>15)ctx.addIssue({code:"custom",message:"IMPLAUSIBLE_FUEL_ENERGY"});
  }
  const energyKwh=f.energy===null?a.energyKwh:a.quantity*f.energy;
  if(a.kind.startsWith("refrigerant_") && (a.renewableEnergyKwh!==undefined || a.energyKwh!==undefined))
   ctx.addIssue({code:"custom",message:"REFRIGERANT_HAS_NO_ENERGY_DATA"});
  if(a.renewableEnergyKwh!==undefined && a.quality!=="invoice")
   ctx.addIssue({code:"custom",message:"RENEWABLE_SHARE_NEEDS_DOCUMENTED_RECORD"});
  if(a.renewableEnergyKwh!==undefined && energyKwh!==undefined && a.renewableEnergyKwh>energyKwh+1e-7)
   ctx.addIssue({code:"custom",message:"RENEWABLE_EXCEEDS_TOTAL_ENERGY"});
 }
});
export const assessmentSchema = createAssessmentSchema();
export type Assessment = z.infer<typeof assessmentSchema>;
