// ADEME Base Carbone V23.6, retrieved 2026-11-12. Raw records in docs/refonte/evidence.
// Use direct emissions rows, NEVER the lifecycle total. Historical proxies are disclosed.
export const METHOD = "CS-ENERGY-1.1.0";
export const SOURCE = "https://data.ademe.fr/datasets/base-carboner";
export const FACTORS = {
 electricity: { id: "43273", row: "JF-Ssewkm48XeLYhjMd0C", value: 0.0394, scope: 2, unit: "kWh", year: 2023, energy: 1, biogenic: 0, boundary: "Combustion à la centrale", validity: "Année 2023" },
 gas_pcs: { id: "37133", row: "3oceUt65q5HMNWwmGxohv", value: 0.181, scope: 1, unit: "kWh PCS", year: 2022, energy: 0.9, biogenic: 0, boundary: "Combustion", validity: "28/02/2025" },
 gas_pci: { id: "37132", row: "4hxvzq5E9w-8ueSVrvooB", value: 0.201, scope: 1, unit: "kWh PCI", year: 2022, energy: 1, biogenic: 0, boundary: "Combustion", validity: "28/02/2025" },
 diesel_b7: { id: "25775", row: "bxSZYsoSp4G8TYo_p8S27", value: 2.49, scope: 1, unit: "L", year: 2021, energy: null, biogenic: 0.155899, boundary: "Combustion", validity: "déc-20" },
 petrol_e10: { id: "13988", row: "75uU5oI94zp14HF0O-Yxe", value: 2.19, scope: 1, unit: "L", year: 2021, energy: null, biogenic: 0.151869, boundary: "Combustion", validity: "déc-20" },
} as const;
export type SourceKind = keyof typeof FACTORS;
export const CATEGORIES = ["electricity", "gas", "diesel_b7", "petrol_e10", "other_fuels", "refrigerants", "purchased_heat", "processes", "self_generation"] as const;
export type Category = typeof CATEGORIES[number];
export function category(kind: SourceKind): Category { return kind.startsWith("gas_") ? "gas" : kind as Category; }
