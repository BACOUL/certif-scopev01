/** Existing CS-SB-v1 coefficients. No new factor or scientific validation is introduced. */
export const EMISSION_FACTORS = {
  it: 0.30, services: 0.22, goods: 0.45, logistics: 0.18,
  travel: 0.25, accommodation: 0.27, other: 0.25,
} as const;
export const FACTOR_VERSION = "Certif-Scope factors v1";
export const METHODOLOGY = "Certif-Scope deterministic spend-based methodology v1.0";
export const CATEGORIES = [
  {key: "it", label: "Services IT et numériques", includes: "Logiciels, cloud, SaaS, infogérance"},
  {key: "services", label: "Services professionnels", includes: "Conseil, comptabilité, juridique"},
  {key: "goods", label: "Biens et achats", includes: "Fournitures, équipements, matériaux"},
  {key: "logistics", label: "Logistique et transport", includes: "Fret, livraisons, transporteurs externes"},
  {key: "travel", label: "Déplacements professionnels", includes: "Billets, taxis, locations de voitures"},
  {key: "accommodation", label: "Hébergement et événements", includes: "Hôtels, conférences, événements"},
  {key: "other", label: "Autres dépenses externes", includes: "Marketing et frais externes non classés ailleurs"},
] as const;

export function parseExpense(value: string): number {
  const normalized = value.trim().replace(/[\s\u00a0\u202f]/g, "").replace(",", ".");
  if (!normalized) return 0;
  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) return NaN;
  const amount = Number(normalized);
  return Number.isFinite(amount) && amount >= 0 ? amount : NaN;
}
