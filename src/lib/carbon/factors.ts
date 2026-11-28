// ADEME Base Carbone V23.6, retrieved 2026-11-12. Raw records in docs/refonte/evidence.
// Use direct emissions rows, NEVER the lifecycle total. Historical proxies are disclosed.
import {REFRIGERANT_FACTORS} from "./refrigerants";
export const METHOD = "CS-ENERGY-1.4.0-REVIEW";
export const SOURCE = "https://data.ademe.fr/datasets/base-carboner";
export const ADEME_FACTORS = {
 electricity: { id: "43273", row: "JF-Ssewkm48XeLYhjMd0C", value: 0.0394, scope: 2, unit: "kWh", year: 2023, energy: 1, biogenic: 0, boundary: "Combustion à la centrale", validity: "Année 2023" },
 gas_pcs: { id: "37133", row: "3oceUt65q5HMNWwmGxohv", value: 0.181, scope: 1, unit: "kWh PCS", year: 2022, energy: 0.9, biogenic: 0, boundary: "Combustion", validity: "28/02/2025" },
 gas_pci: { id: "37132", row: "4hxvzq5E9w-8ueSVrvooB", value: 0.201, scope: 1, unit: "kWh PCI", year: 2022, energy: 1, biogenic: 0, boundary: "Combustion", validity: "28/02/2025" },
 diesel_b7: { id: "25775", row: "bxSZYsoSp4G8TYo_p8S27", value: 2.49, scope: 1, unit: "L", year: 2021, energy: null, biogenic: 0.155899, boundary: "Combustion", validity: "déc-20" },
 petrol_e10: { id: "13988", row: "75uU5oI94zp14HF0O-Yxe", value: 2.19, scope: 1, unit: "L", year: 2021, energy: null, biogenic: 0.151869, boundary: "Combustion", validity: "déc-20" },
} as const;
// Candidates from exact ADEME API combustion records, France continentale.
// These older records are for demonstration only. Year below is the source
// validity reference, not an asserted activity year. Propane conversion from
// kgCO2e/GJ PCI to kgCO2e/kWh PCI is explicit: 1 kWh = 0.0036 GJ.
export const OTHER_FUEL_CANDIDATES = {
 fuel_oil_pci: {id:"14085",row:"pQ-LBaqf9uEHXW0-TMJtR",value:0.272,scope:1,unit:"kWh PCI",year:2017,energy:1,biogenic:0,boundary:"Combustion — fioul domestique, source fixe",validity:"déc-17",source:SOURCE,version:"ADEME-API-2026-11-27",retrieved:"2026-11-27"},
 butane_pci: {id:"13548",row:"e5XFpMbvZy1WTzzO5Oz_T",value:0.233,scope:1,unit:"kWh PCI",year:2017,energy:1,biogenic:0,boundary:"Combustion — butane, source incluant maritime",validity:"déc-17",source:SOURCE,version:"ADEME-API-2026-11-27",retrieved:"2026-11-27"},
 propane_pci: {id:"13554",row:"aRCjX1sQ_wNVhNm-nQcOk",value:64.8*0.0036,scope:1,unit:"kWh PCI",year:2017,energy:1,biogenic:0,boundary:"Combustion — propane, source incluant maritime ; 64,8 kgCO2e/GJ PCI × 0,0036 GJ/kWh",validity:"déc-17",source:SOURCE,version:"ADEME-API-2026-11-27",retrieved:"2026-11-27"},
} as const;
export const FACTORS = {...ADEME_FACTORS,...OTHER_FUEL_CANDIDATES,...REFRIGERANT_FACTORS} as const;
export type SourceKind = keyof typeof FACTORS;

/** Verified source row, not yet approved for commercial issuance.
 * Exact-year selection only; historic demo values are kept separately.
 * Evidence: docs/refonte/evidence/B03_ADEME_PHYSICAL_20261127.json.
 */
export const ELECTRICITY_2024 = {
 id:"43642", row:"4a-V7kBU5QVSOA-uwyHZp", value:0.035, scope:2 as const,
 unit:"kWh" as const, year:2024, energy:1 as const, biogenic:0 as const,
 boundary:"Combustion à la centrale", validity:"Données valides pour l'année 2024",
 source:SOURCE, version:"ADEME-API-2026-11-27", retrieved:"2026-11-27",
} as const;
export function selectReviewFactor(kind:SourceKind,year:number) {
 const f=kind==="electricity" && year===2024?ELECTRICITY_2024:FACTORS[kind];
 // The legacy demonstration is intentionally not an approved fallback.
 // In particular a 2023 factor for 2025/26 is a historic example, not a 2025/26 factor.
 const selection=kind==="electricity"
  ? f.year===year?"exact_year_candidate":"historical_demo_only"
  : "historical_demo_only";
 return {...f,source:"source" in f?f.source:SOURCE,
  version:"version" in f?f.version:"ADEME-V23.6",
  retrieved:"retrieved" in f?f.retrieved:"2026-11-13",
  selection, approvedForIssuance:false as const};
}

export const CATEGORIES = ["electricity", "gas", "diesel_b7", "petrol_e10", "other_fuels", "refrigerants", "purchased_heat", "processes", "self_generation"] as const;
export type Category = typeof CATEGORIES[number];
export function category(kind: SourceKind): Category { return kind.startsWith("gas_") ? "gas" : kind.startsWith("refrigerant_") ? "refrigerants" : kind in OTHER_FUEL_CANDIDATES ? "other_fuels" : kind as Category; }

/** Only create activity rows for supported sources. Unsupported source selections remain reportable as missing. */
export function firstSupportedKind(source: Category): SourceKind | undefined {
 return (Object.keys(FACTORS) as SourceKind[]).find(kind => category(kind) === source);
}
