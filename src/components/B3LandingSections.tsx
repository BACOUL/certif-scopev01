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
  faqTitle:"Questions fréquentes avant de commander",
  faqs:[
   ["Quelles données faut-il préparer ?","Vos factures ou relevés d’électricité et de gaz, vos quantités de carburant et, le cas échéant, les masses de gaz frigorigène réellement émises et documentées. Il faut identifier toutes les sources concernées : une source non couverte ou inconnue empêche l’achat."],
   ["Est-ce accepté par mon client ou un donneur d’ordre ?","Nous ne pouvons pas le garantir. Transmettez le spécimen PDF au destinataire avant de commander et vérifiez le périmètre exigé. Une fiche indicative n’est pas un audit ni un bilan GES réglementaire."],
   ["Puis-je produire une fiche pour 2026 ?","L’exercice 2026 reste accessible en aperçu provisoire, sans achat. Les facteurs historiques ADEME doivent encore être actualisés et validés avant toute ouverture commerciale."],
   ["Que recevrai-je pour 89 € ?","Le tarif envisagé couvre une fiche PDF, un export CSV et des données JSON signées. La signature authentifie les données JSON, pas la véracité des déclarations ni le PDF lui-même. Les ventes restent désactivées pendant la validation."],
   ["Et mon ancienne attestation CO₂e fondée sur les dépenses ?","Cette ancienne offre n’est plus ouverte aux nouveaux achats dans la refonte. Les droits et packs existants doivent être rapprochés avant migration. Contactez le support avec votre référence de commande, sans transmettre de clé privée."]
  ],
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
  faqTitle:"Frequently asked questions before ordering",
  faqs:[
   ["What records do I need?","Electricity and gas bills or meter readings, fuel quantities and, where applicable, documented masses of refrigerant gases actually released. All relevant sources must be identified: any unknown or unsupported source prevents checkout."],
   ["Will my buyer accept this sheet?","Acceptance is not guaranteed. Send the sample PDF to the recipient before ordering and check the required reporting boundary. This data sheet is not an audit or statutory GHG inventory."],
   ["Can I generate a final sheet for 2026?","The 2026 period is available as a provisional preview only, not for purchase. Historical ADEME emission factors still need validation and updating before commercial release."],
   ["What is included in the proposed €89 price?","A PDF data sheet, CSV export and signed JSON data. The signature proves technical integrity of the JSON, not the underlying declarations or the PDF itself. Sales remain disabled during validation."],
   ["What about my older spend-based CO₂e attestation?","The legacy product is not available for new sales in the redesigned version. Existing customer orders and credits require reconciliation before migration. Contact support with your order reference, never your private key."]
  ],
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
  faqTitle:"Häufige Fragen vor der Bestellung",
  faqs:[
   ["Welche Unterlagen brauche ich?","Strom- und Gasrechnungen oder Zählerstände, Kraftstoffmengen und gegebenenfalls dokumentierte Massen tatsächlich freigesetzter Kältemittel. Alle relevanten Quellen müssen erfasst sein: Unbekannte oder nicht unterstützte Quellen verhindern den Kauf."],
   ["Akzeptiert mein Auftraggeber dieses Datenblatt?","Eine Annahme kann nicht garantiert werden. Senden Sie vor der Bestellung das Muster-PDF an den Empfänger und prüfen Sie die geforderten Bilanzgrenzen. Es handelt sich weder um ein Audit noch um eine gesetzliche THG-Bilanz."],
   ["Gibt es ein endgültiges Datenblatt für 2026?","Für 2026 ist nur eine vorläufige Vorschau verfügbar, kein Kauf. Historische ADEME-Emissionsfaktoren müssen vor der Markteinführung aktualisiert und validiert werden."],
   ["Was umfasst der geplante Preis von 89 €?","Ein PDF-Datenblatt, ein CSV-Export und signierte JSON-Daten. Die Signatur bestätigt die technische Integrität der JSON-Daten, nicht die Richtigkeit der Angaben oder das PDF selbst. Verkäufe bleiben während der Validierung deaktiviert."],
   ["Was passiert mit meiner alten ausgabenbasierten CO₂-Bescheinigung?","Das frühere Produkt steht in der Neufassung nicht mehr zum Neukauf bereit. Bestehende Bestellungen und Guthaben müssen vor einer Migration geprüft werden. Wenden Sie sich mit Ihrer Bestellreferenz an den Support; senden Sie niemals Ihren privaten Schlüssel."]
  ],
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
  <section className="feature-section faq-section" aria-labelledby="supplier-faq-title">
   <h2 id="supplier-faq-title" className="section-heading">{c.faqTitle}</h2>
   <div className="faq-items">{c.faqs.map(([question,answer])=><details key={question} className="faq-item"><summary>{question}</summary><p>{answer}</p></details>)}</div>
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
