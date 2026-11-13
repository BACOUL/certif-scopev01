import { z } from "zod";
import { CATEGORIES, FACTORS } from "./factors";
const text = z.string().trim().min(1).max(180).refine(s => !/[\x00-\x1f]/.test(s), "CONTROL_CHARACTERS");
export const assessmentSchema = z.object({
 locale: z.enum(["fr", "en", "de"]), company: text, identifier: text, country: z.literal("FR"),
 year: z.number().int().min(2023).max(2026), boundary: text, declarant: text,
 start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
 sources: z.object(Object.fromEntries(CATEGORIES.map(k => [k, z.enum(["known", "not_applicable", "unknown"])])) as Record<typeof CATEGORIES[number], z.ZodEnum<{ known: "known"; not_applicable: "not_applicable"; unknown: "unknown" }>>).strict(),
 activities: z.array(z.object({
  id: z.string().regex(/^[a-zA-Z0-9_-]{1,40}$/), kind: z.enum(Object.keys(FACTORS) as [keyof typeof FACTORS, ...Array<keyof typeof FACTORS>]),
  quantity: z.number().finite().min(0).max(1e9), unit: z.enum(["kWh", "kWh PCS", "kWh PCI", "L"]),
  energyKwh: z.number().finite().min(0).max(1e9).optional(),
  renewableEnergyKwh: z.number().finite().min(0).max(1e9).optional(),
  quality: z.enum(["invoice", "estimate", "declaration"]), evidence: text,
 }).strict()).max(40),
 exclusions: z.string().trim().max(600), confirmed: z.literal(true),
}).strict().superRefine((x,ctx)=>{
 const start = new Date(x.start), end = new Date(x.end);
 if (!Number.isFinite(+start) || !Number.isFinite(+end) || start.toISOString().slice(0,10)!==x.start || end.toISOString().slice(0,10)!==x.end || start>end || +end-+start>366*86400000 || start.getUTCFullYear()!==x.year || end.getUTCFullYear()!==x.year)
 ctx.addIssue({code:"custom",message:"INVALID_PERIOD"});
 if(x.year===2026 && x.end>new Date().toISOString().slice(0,10))ctx.addIssue({code:"custom",message:"FUTURE_PERIOD_NOT_ALLOWED"});
 if(new Set(x.activities.map(a=>a.id)).size!==x.activities.length)ctx.addIssue({code:"custom",message:"DUPLICATE_ACTIVITY"});
 if(new Set(x.activities.map(a=>`${a.kind}|${a.evidence.trim().toLowerCase()}`)).size!==x.activities.length)ctx.addIssue({code:"custom",message:"DUPLICATE_EVIDENCE"});
 for(const a of x.activities){
  const f=FACTORS[a.kind];
  if(a.unit!==f.unit)ctx.addIssue({code:"custom",message:"UNIT_MISMATCH"});
  if(f.energy===null && a.energyKwh===undefined)ctx.addIssue({code:"custom",message:"FUEL_ENERGY_REQUIRED"});
  if(f.energy!==null && a.energyKwh!==undefined)ctx.addIssue({code:"custom",message:"UNEXPECTED_ENERGY"});
  if(f.energy===null && ((a.quantity===0)!==(a.energyKwh===0)))ctx.addIssue({code:"custom",message:"INCONSISTENT_FUEL_ENERGY"});
  const energyKwh=f.energy===null?a.energyKwh:a.quantity*f.energy;
  if(a.renewableEnergyKwh!==undefined && energyKwh!==undefined && a.renewableEnergyKwh>energyKwh+1e-7)
   ctx.addIssue({code:"custom",message:"RENEWABLE_EXCEEDS_TOTAL_ENERGY"});
 }
});
export type Assessment = z.infer<typeof assessmentSchema>;
