import type {Locale} from "@/lib/carbon/copy";

/**
 * Verifiable claims only: B3 is voluntary for eligible companies and the current
 * calculator covers a restricted set of mainland-French energy sources.
 */
const M = {
 fr: {
  eyebrow:"Pensé pour les échanges entre entreprises",
  title:"Une fiche lisible, pas une certification imaginaire.",
  lead:"Certif-Scope aide les petites entreprises françaises à organiser des données qui peuvent leur être demandées par un client, un acheteur ou un responsable RSE. Aucune obligation générale d'achat.",
  features:[
   ["01","Vos consommations","Électricité, gaz naturel et carburants pris en charge, avec les unités et les factures ou relevés déclarés."],
   ["02","Votre résultat","Énergie en MWh, émissions scope 1 et scope 2 location-based séparées, ventilations énergétiques uniquement lorsqu'elles sont justifiées."],
   ["03","Vos documents","Une fiche PDF, un CSV et un JSON signé : une trace technique des données déclarées et des méthodes, pas un audit indépendant."]
  ],
  processTitle:"Comment préparer votre fiche",
  process:[["1","Définir l'entreprise et l'exercice"],["2","Indiquer les sources concernées"],["3","Saisir les données disponibles"],["4","Contrôler l'aperçu avant paiement"]],
  cautionTitle:"Ce que notre fiche ne promet pas",
  caution:"Cette version de validation ne couvre ni tous les postes B3, ni les émissions de produits, ni le scope 3. Les facteurs historiques doivent être actualisés, et l'exercice 2026 reste provisoire. La CSRD ne rend pas ce document obligatoire pour toutes les PME ; vérifiez toujours ce que demande exactement le destinataire.",
  law:"Lire le règlement européen 2026/1560",
  source:"Consulter les données ADEME",
 },
 en: {
  eyebrow:"Built for business-to-business data requests",
  title:"A readable data sheet, not an invented certification.",
  lead:"Certif-Scope helps small French businesses organise information that customers, procurement teams or sustainability managers may request. There is no general legal requirement to purchase this service.",
  features:[
   ["01","Your activity data","Supported electricity, natural gas and fuel inputs, with stated units and supporting bills or meter readings."],
   ["02","Your calculation","Energy in MWh, separate scope 1 and location-based scope 2 emissions; energy breakdown only when documented."],
   ["03","Your files","A PDF data sheet, CSV and signed JSON: a technical record of declarations and methods, not an independent audit."]
  ],
  processTitle:"How your data sheet works",
  process:[["1","Set company and reporting period"],["2","Identify relevant sources"],["3","Enter available activity data"],["4","Review your free preview before purchase"]],
  cautionTitle:"What we do not promise",
  caution:"This validation version does not cover every B3 source, product footprints or scope 3. Historical factors still need updating; 2026 is preliminary. CSRD does not make this document mandatory for all SMEs. Confirm the recipient's needs before ordering.",
  law:"Read EU Regulation 2026/1560",
  source:"View ADEME data",
 },
 de: {
  eyebrow:"Für den Datenaustausch zwischen Unternehmen",
  title:"Ein verständliches Datenblatt, keine erfundene Zertifizierung.",
  lead:"Certif-Scope hilft kleinen französischen Unternehmen, die von Kunden, Einkauf oder Nachhaltigkeitsteams angefragten Angaben zu ordnen. Es besteht keine allgemeine Kaufpflicht.",
  features:[
   ["01","Ihre Verbrauchsdaten","Unterstützte Strom-, Erdgas- und Kraftstoffdaten mit Einheiten und angegebenen Rechnungen oder Zählerständen."],
   ["02","Ihre Berechnung","Energie in MWh, getrennte Emissionen von Scope 1 und standortbezogenem Scope 2; Energieaufteilung nur mit Nachweis."],
   ["03","Ihre Dateien","PDF-Datenblatt, CSV und signiertes JSON: technische Nachvollziehbarkeit der Angaben, keine unabhängige Prüfung."]
  ],
  processTitle:"So entsteht Ihr Datenblatt",
  process:[["1","Unternehmen und Berichtszeitraum"],["2","Relevante Quellen angeben"],["3","Verfügbare Daten eingeben"],["4","Kostenlose Vorschau vor dem Kauf prüfen"]],
  cautionTitle:"Was wir nicht versprechen",
  caution:"Diese Prüfversion deckt nicht alle B3-Quellen, keine Produktfußabdrücke und keinen Scope 3 ab. Historische Faktoren müssen aktualisiert werden; 2026 ist vorläufig. Die CSRD macht dieses Dokument nicht für alle KMU verpflichtend. Anforderungen des Empfängers bitte vorher klären.",
  law:"EU-Verordnung 2026/1560 lesen",
  source:"ADEME-Daten ansehen",
 }
} as const;

export default function B3LandingSections({locale}:{locale:Locale}){
 const c=M[locale];
 return <>
  <section className="feature-section" aria-labelledby="why-certif">
   <p className="tag">{c.eyebrow}</p>
   <h2 id="why-certif" className="section-heading">{c.title}</h2>
   <p className="section-lead">{c.lead}</p>
   <div className="feature-grid">{c.features.map(([num,title,description])=><article className="feature-card" key={num}><span className="feature-num">{num}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
  </section>
  <section className="feature-section">
   <h2 className="section-heading">{c.processTitle}</h2>
   <ol className="simple-steps">{c.process.map(([num,step])=><li key={num}><span aria-hidden="true">{num}</span>{step}</li>)}</ol>
  </section>
  <section className="limits-panel" aria-labelledby="limits-title">
   <div><p className="tag">B3 · UE 2026/1560</p><h2 id="limits-title">{c.cautionTitle}</h2><p>{c.caution}</p></div>
   <div className="resource-links">
    <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noopener noreferrer">{c.law}</a>
    <a href="https://base-empreinte.ademe.fr/" target="_blank" rel="noopener noreferrer">{c.source}</a>
   </div>
  </section>
 </>;
}
