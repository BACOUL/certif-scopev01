/**
 * Explicitly limited to PURE fluorinated substances, not commercial refrigerant
 * blends or the installed charge of equipment. Quantity is documented MASS
 * EMITTED to atmosphere (kg), not kg purchased / charged into equipment.
 *
 * Legal source: Regulation (EU) 2024/573, Annex I, 100-year GWP column.
 * https://eur-lex.europa.eu/eli/reg/2024/573/oj
 * These are GWP coefficients, not ADEME Base Carbone factors.
 */
export const EU_F_GAS_SOURCE = "https://eur-lex.europa.eu/eli/reg/2024/573/oj";
export const EU_F_GAS_VERSION = "EU-2024-573-ANNEX-I-GWP100";
export const PURE_F_GASES = {
 refrigerant_hfc32:  {id:"HFC-32",value:675},
 refrigerant_hfc134a:{id:"HFC-134a",value:1430},
 refrigerant_hfc125: {id:"HFC-125",value:3500},
 refrigerant_hfc143a:{id:"HFC-143a",value:4470},
} as const;
export type PureFGasKind=keyof typeof PURE_F_GASES;
export const REFRIGERANT_FACTORS=Object.fromEntries(
 Object.entries(PURE_F_GASES).map(([kind,gas])=>[kind,{
  id:gas.id, row:`EU-2024-573-ANNEX-I:${gas.id}`,
  value:gas.value,scope:1 as const,unit:"kg" as const,year:2024,
  energy:0 as const,biogenic:0 as const,
  boundary:"Émissions fugitives — gaz fluoré pur, masse effectivement émise",
  validity:"PRP sur 100 ans — annexe I, règlement (UE) 2024/573",
  source:EU_F_GAS_SOURCE,version:EU_F_GAS_VERSION,
 }])
) as Record<PureFGasKind, {
 id:string;row:string;value:number;scope:1;unit:"kg";year:2024;
 energy:0;biogenic:0;boundary:string;validity:string;source:string;version:string;
}>;
