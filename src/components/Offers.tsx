import { Locale, COPY } from "@/lib/carbon/copy";

/**
 * Single public offer. Historical spend-based statements remain available
 * through a separate non-promoted legacy support flow for existing customers.
 */
const SINGLE_OFFER = {
 fr: {
  eyebrow: "Une seule offre Certif-Scope",
  heading: "Fiche de données carbone fournisseur",
  context: "Préparez les données énergétiques et d'émissions demandées par vos clients : une démarche inspirée de la rubrique B3 du standard volontaire européen (UE) 2026/1560.",
  details: "Énergie en MWh, émissions directes (scope 1) et émissions de l'énergie achetée (scope 2, location-based). Sources, périodes, facteurs, limites et méthode présentés dans le document.",
  limitation: "La fiche ne constitue pas un rapport volontaire complet, un bilan GES réglementaire, une certification ou une garantie d'acceptation par un donneur d'ordre. Certains postes et la ventilation renouvelable/non renouvelable ne sont pas encore pris en charge.",
  prepare: "Préparer ma fiche fournisseur",
 },
 en: {
  eyebrow: "One Certif-Scope offer",
  heading: "Supplier carbon data sheet",
  context: "Prepare energy and emissions information requested by customers, drawing on disclosure B3 of the EU voluntary standard (EU) 2026/1560.",
  details: "Energy in MWh, direct emissions (scope 1) and purchased-energy emissions (location-based scope 2). The document shows reporting periods, factors, sources, calculation methods and limitations.",
  limitation: "Not a complete voluntary sustainability report, mandatory GHG inventory, certification or guarantee of buyer acceptance. Some emission sources and the renewable/non-renewable energy breakdown are not yet supported.",
  prepare: "Prepare my supplier data sheet",
 },
 de: {
  eyebrow: "Ein Certif-Scope-Angebot",
  heading: "CO₂-Datenblatt für Lieferanten",
  context: "Bereiten Sie Energie- und Emissionsdaten für Kundenanfragen vor – orientiert an Angabe B3 des freiwilligen EU-Standards gemäß Verordnung (EU) 2026/1560.",
  details: "Energie in MWh, direkte Emissionen (Scope 1) und Emissionen aus zugekaufter Energie (standortbezogener Scope 2), mit Zeitraum, Faktoren, Quellen, Berechnung und Grenzen.",
  limitation: "Kein vollständiger freiwilliger Nachhaltigkeitsbericht, keine gesetzliche THG-Bilanz, keine Zertifizierung und keine garantierte Anerkennung durch Auftraggeber. Einige Quellen und die Aufschlüsselung nach erneuerbaren/nicht erneuerbaren Energien fehlen noch.",
  prepare: "Lieferanten-Datenblatt vorbereiten",
 },
} as const;

export default function Offers({ locale }: { locale: Locale }) {
 const c = COPY[locale], offer = SINGLE_OFFER[locale];
 return <section className="content" aria-label={offer.heading}>
  <p className="tag">{offer.eyebrow}</p>
  <div className="card">
   <h2>{offer.heading}</h2>
   <p>{offer.context}</p>
   <p>{offer.details}</p>
   <p><strong>{c.price}</strong> — {c.priceNote}</p>
   <div className="actions">
    <a className="button" href={`/${locale}/generate`}>{offer.prepare}</a>
    <a className="button secondary" href={`/api/sample?locale=${locale}`}>{c.sample}</a>
   </div>
   <p className="small">{offer.limitation}</p>
  </div>
 </section>;
}
