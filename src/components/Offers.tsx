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
  details: "Énergie en MWh, émissions directes (scope 1) et émissions liées à l’électricité achetée (scope 2, location-based). Sources, périodes, facteurs, limites et méthode présentés dans le document.",
  limitation: "Offre en validation : seules certaines sources en France continentale et les périodes 2023–2025 sont couvertes. Aucune fiche B3 complète, certification, vérification indépendante ou acceptation par le destinataire n'est garantie. L'empreinte d'un produit et le scope 3 sont exclus.",
  prepare: "Préparer ma fiche fournisseur",
 },
 en: {
  eyebrow: "One Certif-Scope offer",
  heading: "Supplier carbon data sheet",
  context: "Prepare energy and emissions information requested by customers, drawing on disclosure B3 of the EU voluntary standard (EU) 2026/1560.",
  details: "Energy in MWh, direct emissions (scope 1) and purchased-electricity emissions (location-based scope 2). The document shows reporting periods, factors, sources, calculation methods and limitations.",
  limitation: "Under validation: only selected sources in mainland France and reporting years 2023–2025 are supported. This is not a complete B3 disclosure, statutory GHG inventory, independent certification or guaranteed buyer-accepted document. Product footprints and scope 3 are excluded.",
  prepare: "Prepare my supplier data sheet",
 },
 de: {
  eyebrow: "Ein Certif-Scope-Angebot",
  heading: "CO₂-Datenblatt für Lieferanten",
  context: "Bereiten Sie Energie- und Emissionsdaten für Kundenanfragen vor – orientiert an Angabe B3 des freiwilligen EU-Standards gemäß Verordnung (EU) 2026/1560.",
  details: "Energie in MWh, direkte Emissionen (Scope 1) und Emissionen aus eingekauftem Strom (standortbezogener Scope 2), mit Zeitraum, Faktoren, Quellen, Berechnung und Grenzen.",
  limitation: "In Prüfung: Nur ausgewählte Quellen auf dem französischen Festland und Berichtsjahre 2023–2025 werden unterstützt. Kein vollständiger B3-Nachweis, keine gesetzliche THG-Bilanz, unabhängige Zertifizierung oder garantierte Anerkennung. Produktfußabdruck und Scope 3 sind ausgeschlossen.",
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
