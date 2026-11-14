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
  limitation: "Offre en validation : seules certaines sources en France continentale et les périodes 2023–2025 sont calculées avec des facteurs historiques ; 2026 est proposé en aperçu provisoire uniquement. Aucune fiche B3 complète, certification, vérification indépendante ou acceptation par le destinataire n'est garantie. L'empreinte d'un produit et le scope 3 sont exclus.",
  prepare: "Préparer ma fiche fournisseur",
  fitTitle: "Cette fiche peut vous convenir si…",
  fits: [
   "Vous devez répondre à une demande de données énergétiques et d’émissions au niveau de votre entreprise, et non d’un produit.",
   "Vos activités se situent en France continentale et concernent un exercice clos entre 2023 et 2025.",
   "Vous disposez de relevés ou factures pour les sources prises en charge, et pouvez identifier les sources non couvertes."
  ],
  notFitTitle: "Cette fiche ne répond pas à votre besoin si…",
  notFits: [
   "Votre client exige une empreinte carbone produit, le scope 3, un bilan GES réglementaire ou un rapport B3 intégral.",
   "Vous avez besoin d’une fiche définitive pour 2026 ou d’un audit indépendant.",
   "Vos émissions significatives proviennent d’activités non prises en charge (chaleur achetée, autres combustibles, procédés, mélanges frigorigènes)."
  ],
  beforePurchase: "Avant de payer : envoyez le spécimen PDF à votre client ou donneur d’ordre et vérifiez qu’il accepte ce format, ce périmètre et les limites de calcul.",
 },
 en: {
  eyebrow: "One Certif-Scope offer",
  heading: "Supplier carbon data sheet",
  context: "Prepare energy and emissions information requested by customers, drawing on disclosure B3 of the EU voluntary standard (EU) 2026/1560.",
  details: "Energy in MWh, direct emissions (scope 1) and purchased-electricity emissions (location-based scope 2). The document shows reporting periods, factors, sources, calculation methods and limitations.",
  limitation: "Under validation: only selected sources in mainland France and years 2023–2025 are calculated using historical factors; 2026 is preview-only. This is not a complete B3 disclosure, statutory GHG inventory, independent certification or guaranteed buyer-accepted document. Product footprints and scope 3 are excluded.",
  prepare: "Prepare my supplier data sheet",
  fitTitle: "This data sheet may suit you if…",
  fits: [
   "You need company-level energy and emissions information, not a product footprint.",
   "Your operations are in mainland France and the reporting year is complete (2023–2025).",
   "You have invoices or readings for supported sources and can identify unsupported sources."
  ],
  notFitTitle: "This data sheet is not suitable if…",
  notFits: [
   "Your customer requires a product carbon footprint, scope 3, a statutory GHG inventory or a complete B3 disclosure.",
   "You need a final 2026 data sheet or independent assurance.",
   "Material emissions come from unsupported activities (purchased heat, other fuels, processes or refrigerant blends)."
  ],
  beforePurchase: "Before payment: share the sample PDF with the recipient and confirm that they accept its format, boundary and calculation limitations.",
 },
 de: {
  eyebrow: "Ein Certif-Scope-Angebot",
  heading: "CO₂-Datenblatt für Lieferanten",
  context: "Bereiten Sie Energie- und Emissionsdaten für Kundenanfragen vor – orientiert an Angabe B3 des freiwilligen EU-Standards gemäß Verordnung (EU) 2026/1560.",
  details: "Energie in MWh, direkte Emissionen (Scope 1) und Emissionen aus eingekauftem Strom (standortbezogener Scope 2), mit Zeitraum, Faktoren, Quellen, Berechnung und Grenzen.",
  limitation: "In Prüfung: Nur ausgewählte Quellen auf dem französischen Festland und 2023–2025 mit historischen Faktoren; 2026 nur als Vorschau. Kein vollständiger B3-Nachweis, keine gesetzliche THG-Bilanz, unabhängige Zertifizierung oder garantierte Anerkennung. Produktfußabdruck und Scope 3 sind ausgeschlossen.",
  prepare: "Lieferanten-Datenblatt vorbereiten",
  fitTitle: "Dieses Datenblatt kann passen, wenn…",
  fits: [
   "Sie Energie- und Emissionsdaten Ihres Unternehmens benötigen, nicht den Fußabdruck eines Produkts.",
   "Ihre Tätigkeiten auf dem französischen Festland liegen und ein abgeschlossenes Berichtsjahr 2023–2025 betreffen.",
   "Sie für unterstützte Quellen Rechnungen oder Messwerte haben und nicht unterstützte Quellen benennen können."
  ],
  notFitTitle: "Dieses Datenblatt reicht nicht aus, wenn…",
  notFits: [
   "Ihr Kunde einen Produktfußabdruck, Scope 3, eine gesetzliche THG-Bilanz oder eine vollständige B3-Angabe verlangt.",
   "Sie ein endgültiges Datenblatt für 2026 oder eine unabhängige Prüfung benötigen.",
   "Wesentliche Emissionen aus nicht unterstützten Tätigkeiten stammen (eingekaufte Wärme, weitere Brennstoffe, Prozesse oder Kältemittelgemische)."
  ],
  beforePurchase: "Vor dem Bezahlen: Schicken Sie dem Empfänger das Muster-PDF und bestätigen Sie die Akzeptanz von Format, Abgrenzung und Berechnungsgrenzen.",
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
   <div className="grid" aria-label={offer.fitTitle}>
    <section>
     <h3>{offer.fitTitle}</h3>
     <ul className="benefits">{offer.fits.map(item=><li key={item}>{item}</li>)}</ul>
    </section>
    <section>
     <h3>{offer.notFitTitle}</h3>
     <ul className="benefits">{offer.notFits.map(item=><li key={item}>{item}</li>)}</ul>
    </section>
   </div>
   <p className="notice">{offer.beforePurchase}</p>
   <p><strong>{c.price}</strong> — {c.priceNote}</p>
   <div className="actions">
    <a className="button" href={`/${locale}/generate`}>{offer.prepare}</a>
    <a className="button secondary" href={`/api/sample?locale=${locale}`}>{c.sample}</a>
   </div>
   <p className="small">{offer.limitation}</p>
  </div>
 </section>;
}
