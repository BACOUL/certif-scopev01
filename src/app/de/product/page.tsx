// PATH: src/app/de/product/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung KMU: Produkt, PDF und Grenzen | Certif-Scope",
  description:
    "Entdecken Sie die Certif-Scope CO₂e-Bescheinigung: ein indikatives CO₂e-Dokument für 89 €, spend-based, mit verifizierbarer ID, für Kunden, Banken, Versicherungen und Ausschreibungen. Kein Audit, kein CSRD-/ESRS-Reporting.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/product/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/",
      de: "https://www.certif-scope.com/de/product/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung KMU: Produkt, PDF und Grenzen | Certif-Scope",
    description:
      "Indikative CO₂e-Bescheinigung auf Ausgabenbasis: standardisiertes Dokument, verifizierbare ID, Nutzung für Kunde, Bank, Versicherung oder Ausschreibung. Nicht regulatorisch.",
    url: "https://www.certif-scope.com/de/product/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const returnButtonClass =
  "inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors";

const benefitCards = [
  ["01", "Sofortige Verfügbarkeit", "Die Bescheinigung wird über einen standardisierten und deterministischen Ansatz schnell erzeugt, ohne operative Messgrößen, physische Datenerhebung oder vorherige CO₂-Expertise."],
  ["02", "Institutionell nutzbares Dokument", "Das Format passt zu Lieferanten-Onboarding, ESG-Screening, Einkaufsfragebögen und Due-Diligence-Prozessen durch Dritte."],
  ["03", "Explizite Gültigkeitsreferenz", "Jede Bescheinigung enthält eine eindeutige Kennung, mit der Dritte die Authentizität ohne Konto und ohne technisches Spezialwerkzeug bestätigen können."],
  ["04", "Deterministische Kohärenz", "Identische Angaben führen zum gleichen Ergebnis. Das unterstützt Stabilität, Vergleichbarkeit und vorhersehbare Review-Prozesse."],
  ["05", "Ohne Fachwissen zugänglich", "Kein Berater, keine Spezialsoftware und kein internes Sustainability-Team sind erforderlich. Der Ablauf ist bewusst einfach und geführt."],
  ["06", "Mehrsprachige europäische Nutzung", "Mehrere europäische Sprachen unterstützen grenzüberschreitende Lieferantenbeziehungen und institutionelle Review-Workflows."],
];

const pdfContents = [
  ["1. Zusammenfassung des CO₂e-Ergebnisses", "Ein einzelner aggregierter CO₂e-Wert in Tonnen CO₂-Äquivalent, klar und eindeutig für eine institutionelle Prüfung dargestellt."],
  ["2. Überblick über den deklarierten Umfang", "Eine High-Level-Sicht auf die deklarierten Kategorien, mit nützlichem Kontext ohne Offenlegung detaillierter Finanzdaten oder operativer Daten."],
  ["3. Normative Kontextreferenzen", "Verweise auf anerkannte europäische und internationale Rahmen wie CSRD, ESRS und GHG Protocol, um den institutionellen Kontext zu erklären, ohne regulatorische Konformität zu behaupten."],
  ["4. Verifizierungsreferenz und QR-Code", "Eine eindeutige Bescheinigungs-ID und ein QR-Code ermöglichen Dritten die Prüfung der Authentizität und Integrität über eine öffentliche Verifizierungsseite."],
  ["5. Institutionelle Metadaten", "Ausstellungsdatum, Gültigkeitszeitraum, deklariertes Referenzjahr und Basisidentifikation, die für Audit-Trails und interne Compliance-Prozesse nützlich sind."],
  ["6. Erklärung der Nutzungsgrenzen", "Eine klare Erklärung zur indikativen Natur des Dokuments und zur vorgesehenen Nutzung, um Verwechslungen mit Reporting, Audit oder Zertifizierung zu vermeiden."],
];

const integrityPrinciples = [
  ["Fälschungserkennende Ausgabe", "Jede Bescheinigung wird als finales Dokument ausgegeben, dessen Integrität geprüft werden kann. Eine Änderung nach Ausstellung macht die Authentizität des Dokuments ungültig."],
  ["Unabhängige Verifizierung", "Die Authentizität kann von jedem Dritten anhand öffentlicher Verifikationsinformationen geprüft werden, ohne Konto, ohne Login und ohne Zugriff auf interne Systeme."],
  ["Eindeutige Bescheinigungsreferenz", "Jedes PDF enthält eine eindeutige Referenz für präzise Zitation, Rückverfolgbarkeit und Kommunikation in Einkaufs-, Bank- oder Compliance-Kontexten."],
  ["Online-Komfort, Offline-Gültigkeit", "Ein QR-Code bietet optionalen Zugang zu einer öffentlichen Erklärseite. Die Verifizierung bleibt langfristig möglich und hängt nicht von einem zentralen Register ab."],
];

const trustItems = [
  "Bescheinigungen werden einmalig ausgestellt und können nicht verändert werden.",
  "Die Prüfung hängt nicht von einer zentralen Datenbank oder einem Register ab.",
  "Kein Konto, Login oder personenbezogene Daten sind erforderlich.",
  "Ausgestellte Dokumente werden nicht von Certif-Scope gespeichert.",
  "Die Authentizität bleibt über die Zeit unabhängig vom Aussteller überprüfbar.",
];

const additionalUses = [
  "Interne ESG-Dashboards ohne physische Aktivitätsdaten",
  "Lieferantendokumentation, die von Großkunden verlangt wird",
  "Partner-Onboarding und Due-Diligence-Dossiers",
  "Screening auf automatisierten Einkaufsplattformen",
  "Periodische Bank-Reviews mit aktuellen Umweltindikatoren",
];

const isItems = [
  "Ein indikativer und standardisierter CO₂e-Indikator",
  "Deterministisch und bei identischer Erklärung reproduzierbar",
  "Für Einkaufs-, Onboarding- und Screening-Workflows strukturiert",
  "Mit Integritätsmechanismen und unabhängiger Verifizierung ausgegeben",
  "Geeignet für Dokumentation, Vergleich und vorläufige Bewertung",
];

const isNotItems = [
  "Kein CSRD-, ESRS- oder regulatorisches Sustainability-Reporting",
  "Kein Treibhausgasinventar nach Scope 1, 2 oder 3",
  "Keine auditierte CO₂-Bilanz, Zertifizierung oder Lebenszyklusanalyse",
  "Nicht für gesetzliche Einreichungen oder regulatorische Pflichten gültig",
  "Kein Ersatz für eine fachliche oder wissenschaftliche CO₂-Analyse",
];

const fitItems = [
  "Lieferanten-Onboarding mit Basis-Umweltindikator",
  "Bank-, Versicherungs- und Kredit-Screening",
  "Öffentliche Vergaben mit standardisierter Dokumentationsanforderung",
  "Organisationen ohne internes ESG-Team",
  "Grenzüberschreitende Workflows, die klare und vergleichbare Dokumente benötigen",
];

const recipients = [
  "Einkaufs- und Sourcing-Teams",
  "Finanzinstitutionen",
  "Versicherungsanalysten und Underwriter",
  "Öffentliche Stellen",
  "Compliance- und Risikofunktionen",
];

const notUseItems = [
  "Verpflichtendes CSRD- oder ESRS-Reporting",
  "Zertifizierte oder auditierte THG-Inventare",
  "CO₂-Buchhaltung auf Basis physischer Aktivitätsdaten",
  "Wissenschaftliche Modellierung oder Lebenszyklusanalysen",
  "Marketing- oder öffentliche Aussagen, die geprüfte Nachweise erfordern",
];

function BackToSummary() {
  return (
    <div className="mt-12 text-right">
      <a href="#top" className={returnButtonClass}>Zurück zum Inhaltsverzeichnis</a>
    </div>
  );
}

function Card({ title, text, highlighted = false }: { title: string; text: string; highlighted?: boolean }) {
  return (
    <div className={`p-8 rounded-xl border shadow-sm hover:shadow-md transition ${highlighted ? "bg-[#F8FAFC] border-[#1FB6C1]/25" : "bg-white border-gray-200"}`}>
      <h3 className="text-2xl font-semibold text-[#0B3A63]">{title}</h3>
      <p className="text-sm text-gray-700 mt-3 leading-relaxed">{text}</p>
    </div>
  );
}

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className={`space-y-3 text-sm leading-relaxed max-w-4xl ${light ? "text-white/90" : "text-gray-700"}`}>
      {items.map((item) => <li key={item}>• {item}</li>)}
    </ul>
  );
}

export default function ProductPageDE() {
  return (
    <section id="product" data-section="product" className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Certif-Scope CO₂e-Bescheinigung",
            description:
              "Indikative und standardisierte CO₂e-Bescheinigung auf Ausgabenbasis, entwickelt, um ein einfaches CO₂e-Dokument mit verifizierbarer ID für Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungsdossiers bereitzustellen.",
            provider: { "@type": "Organization", name: "Certif-Scope", url: "https://www.certif-scope.com" },
            offers: { "@type": "Offer", priceCurrency: "EUR", price: "89", url: "https://www.certif-scope.com/de/pricing/" },
            areaServed: "DE",
            serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
          }),
        }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">CO₂e-Bescheinigung — Produkt</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">Produktübersicht</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Eine strukturierte Präsentation der CO₂e-Bescheinigung: Nutzen, Anwendungsfälle, Inhalt des PDF-Dokuments, dokumentarische Integritätsprüfung und ausdrückliche Grenzen.
        </p>
        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <nav aria-label="Produktabschnitte" className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li><a href="#product-overview" className="hover:text-[#1FB6C1] transition">1. Produktvorstellung</a></li>
          <li><a href="#key-benefits" className="hover:text-[#1FB6C1] transition">2. Zentrale Vorteile</a></li>
          <li><a href="#why-the-product-exists" className="hover:text-[#1FB6C1] transition">3. Warum dieses Produkt existiert</a></li>
          <li><a href="#attestation-pdf-contents" className="hover:text-[#1FB6C1] transition">4. Inhalt des PDF</a></li>
          <li><a href="#verification-and-integrity" className="hover:text-[#1FB6C1] transition">5. Verifizierung & Integrität</a></li>
          <li><a href="#usage-scenarios" className="hover:text-[#1FB6C1] transition">6. Anwendungsszenarien</a></li>
          <li><a href="#limitations-and-fit" className="hover:text-[#1FB6C1] transition">7. Grenzen & Eignung</a></li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto space-y-24">
        <section id="product-overview" data-section="product-overview" className="scroll-mt-24 border-b border-gray-200 pb-24">
          <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#1FB6C1]/10 to-transparent pointer-events-none" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">1.</span>Produktvorstellung</h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl relative z-10">Eine standardisierte CO₂e-Bescheinigung, vorbereitet für institutionelle Nutzung und entwickelt, um Anfragen Dritter zur Umweltinformation zu beantworten.</p>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Certif-Scope liefert eine strukturierte CO₂e-Bescheinigung für Organisationen, die einen Umweltindikator an Kunden, Einkaufsabteilungen, Finanzinstitute oder öffentliche Stellen kommunizieren müssen.</p>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Das Produkt richtet sich an KMU und mittelgroße Organisationen, die kein vollständiges regulatorisches CO₂-Reporting besitzen, aber dennoch standardisiert auf CO₂e-Anfragen in beruflichen oder institutionellen Kontexten antworten müssen.</p>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Der Liefergegenstand ist ein klares, kohärentes und teilbares Dokument mit einem aggregierten CO₂e-Indikator in festem Format, optimiert für Lesbarkeit, Review und Wiederverwendung durch Dritte, ohne zusätzliche Erklärungen zu benötigen.</p>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Certif-Scope ist keine Zertifizierungsstelle und ersetzt weder regulatorisches Reporting noch ein Treibhausgas-Audit oder einen Compliance-Rahmen. Der Dienst liefert ein indikatives und standardisiertes Dokument für häufige Offenlegungsbedarfe, bleibt aber leicht, zugänglich und mit institutionellen Review-Prozessen kompatibel.</p>
          </div>
          <BackToSummary />
        </section>

        <section id="key-benefits" data-section="key-benefits" className="scroll-mt-24 border-b border-gray-200 pb-24">
          <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/15 to-transparent pointer-events-none" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">2.</span>Zentrale Vorteile</h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-4xl relative z-10">Dieser Abschnitt fasst den praktischen Nutzen der CO₂e-Bescheinigung zusammen. Er beschreibt weder die Berechnungsmethode noch die Emissionsfaktoren.</p>
            <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">Certif-Scope liefert eine standardisierte CO₂e-Bescheinigung für institutionelle Nutzung. Jeder Vorteil adressiert eine konkrete Anforderung aus Ausschreibungen, Lieferanten-Onboarding, ESG-Analysen oder Due-Diligence-Prozessen in Europa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {benefitCards.map(([number, title, text], index) => (
              <div key={number} className={`p-8 rounded-xl border shadow-sm hover:shadow-md transition ${index % 2 ? "bg-[#F8FAFC] border-[#1FB6C1]/30" : "bg-white border-gray-200"}`}>
                <div className="text-[#1FB6C1] text-4xl font-bold mb-3">{number}</div>
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <BackToSummary />
        </section>

        <section id="why-the-product-exists" data-section="why-the-product-exists" className="scroll-mt-24 border-b border-gray-200 pb-24">
          <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">3.</span>Warum dieses Produkt existiert</h2>
            <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">In Europa betreffen Klima-Transparenzpflichten vor allem große Unternehmen, Finanzinstitute und den öffentlichen Sektor. Diese Anforderungen wandern zunehmend in die Lieferketten, auch zu KMU, die nicht direkt regulatorisch berichtspflichtig sind.</p>
          </div>
          <div className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Die regulatorische Kaskade</h3>
            <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">Organisationen unter europäischen Nachhaltigkeits- und Risikomanagementrahmen müssen Klimaexpositionen in ihren Wertschöpfungsketten bewerten. Daraus entstehen standardisierte Informationsanfragen an Lieferanten, unabhängig von deren eigenem regulatorischem Status.</p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Große Unternehmen unter der <a href="https://eur-lex.europa.eu/eli/dir/2022/2464/oj" target="_blank" rel="noopener noreferrer" className="text-[#0B3A63] underline hover:text-[#1FB6C1]">CSRD</a> müssen Klimarisiken und Wertschöpfungsketten-Auswirkungen dokumentieren.</li>
              <li>• Die <a href="https://www.efrag.org/en/projects/esrs" target="_blank" rel="noopener noreferrer" className="text-[#0B3A63] underline hover:text-[#1FB6C1]">ESRS der EFRAG</a> können Lieferanteninformationen erfordern, wenn das Thema wesentlich ist.</li>
              <li>• Finanzinstitute unter <a href="https://www.eba.europa.eu/regulation-and-policy/sustainable-finance" target="_blank" rel="noopener noreferrer" className="text-[#0B3A63] underline hover:text-[#1FB6C1]">EBA ESG-Leitlinien</a> werden zur Erhebung von CO₂e-Indikatoren bei Kunden und Gegenparteien angehalten.</li>
              <li>• Öffentliche Beschaffung integriert zunehmend Umweltindikatoren über <a href="https://environment.ec.europa.eu/topics/sustainable-production-and-consumption/green-public-procurement_en" target="_blank" rel="noopener noreferrer" className="text-[#0B3A63] underline hover:text-[#1FB6C1]">EU Green Public Procurement</a>.</li>
            </ul>
            <p className="text-gray-700 text-sm mt-4">Praktisch führt dies dazu, dass KMU CO₂e-Indikatoren liefern müssen, obwohl sie keine vollständigen regulatorischen Berichte erstellen müssen.</p>
          </div>
          <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Die Marktlücke für KMU</h3>
            <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mb-6">Die meisten Sustainability-Tools und Beratungsansätze sind für große Organisationen konzipiert. Sie beruhen auf detaillierten operativen Daten, spezialisierter Expertise und erheblichen Ressourcen, die KMU oft nicht haben.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed"><li>• Begrenzte interne ESG-Expertise</li><li>• Zeit-, Budget- und Ressourcenbeschränkungen</li></ul>
              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed"><li>• Kein einfaches, standardisiertes Dokument für Dritte</li><li>• Schwierigkeit, Kohärenz und Glaubwürdigkeit der Zahlen zu zeigen</li></ul>
            </div>
            <p className="mt-8 text-[#0B3A63] text-sm leading-relaxed font-medium">Certif-Scope wurde geschaffen, um diese Lücke zu schließen: eine standardisierte, zugängliche CO₂e-Bescheinigung, die institutionelle Erwartungen berücksichtigt und zugleich realistisch für KMU nutzbar bleibt.</p>
          </div>
          <BackToSummary />
        </section>

        <section id="attestation-pdf-contents" data-section="attestation-pdf-contents" className="scroll-mt-24 border-b border-gray-200 pb-24">
          <div className="relative p-12 rounded-2xl bg-[#F0F4F8] border border-[#0B3A63]/15 shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-transparent pointer-events-none" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">4.</span>Inhalt des CO₂e-Bescheinigungs-PDF</h2>
            <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">Die CO₂e-Bescheinigung wird als standardisiertes PDF-Dokument ausgegeben, bereit für institutionelle Nutzung. Jedes Element ist so strukturiert, dass Einkaufsreview, Finanzrisikoprüfung und Lieferanten-Onboarding erleichtert werden.</p>
            <p className="mt-4 text-gray-600 text-sm max-w-4xl leading-relaxed relative z-10">Dieser Abschnitt beschreibt Struktur und Inhalt des gelieferten Dokuments. Die Berechnungsmethodik wird separat beschrieben.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {pdfContents.map(([title, text], index) => <Card key={title} title={title} text={text} highlighted={index % 2 === 1} />)}
          </div>
          <div className="mt-20 p-8 rounded-xl bg-[#F0FDFC] border border-[#1FB6C1]/30 shadow-sm"><h4 className="text-xl font-semibold text-[#0B3A63] mb-2">Hinweis zur institutionellen Nutzung</h4><p className="text-sm text-gray-700 leading-relaxed max-w-4xl">Diese Bescheinigung ist für Lieferantenbewertung, Einkaufs-Screening und Finanzrisiko-Review konzipiert. Sie ersetzt weder regulatorisches Sustainability-Reporting noch ein auditiertes THG-Inventar.</p></div>
          <BackToSummary />
        </section>

        <section id="verification-and-integrity" data-section="verification-and-integrity" className="scroll-mt-24 border-b border-gray-200 pb-24">
          <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-md overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/90 to-transparent pointer-events-none" aria-hidden="true" /><h2 className="text-4xl md:text-5xl font-extrabold relative z-10"><span className="mr-2">5.</span>Verifizierung & Integrität</h2><p className="text-white/80 text-sm max-w-4xl mt-4 leading-relaxed relative z-10">Dieser Abschnitt beschreibt, wie Authentizität und Integrität des gelieferten Dokuments geprüft werden. Er beschreibt nicht die Berechnungsmethodik.</p><p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">Jede CO₂e-Bescheinigung wird mit integrierten Integritätsmechanismen ausgegeben. Ihre Authentizität kann unabhängig geprüft werden, ohne Konto, ohne personenbezogene Daten und ohne Abhängigkeit von einem zentralen Register.</p></div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">{integrityPrinciples.map(([title, text], index) => <Card key={title} title={title} text={text} highlighted={index % 2 === 1} />)}</div>
          <div className="mt-20 p-10 bg-white rounded-xl border border-[#0B3A63]/15 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Vertrauens- und Integritätsgarantien</h3><BulletList items={trustItems} /></div>
          <BackToSummary />
        </section>

        <section id="usage-scenarios" data-section="usage-scenarios" className="scroll-mt-24 border-b border-gray-200 pb-24">
          <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden"><div className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]" aria-hidden="true" /><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6"><span className="mr-2">6.</span>Anwendungsszenarien</h2><p className="text-lg text-gray-700 max-w-4xl leading-relaxed mt-6 pl-6">Die CO₂e-Bescheinigung ist für Situationen konzipiert, in denen eine Organisation einen standardisierten Umweltindikator liefern muss, ohne ein vollständiges THG-Inventar oder regulatorisches ESG-Reporting zu erstellen.</p></div>
          <div className="mt-12 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl max-w-4xl"><p className="text-sm text-gray-600 leading-relaxed">Die folgenden Szenarien spiegeln häufige institutionelle und administrative Nutzungen wider, bei denen ein indikatives und standardisiertes CO₂e-Dokument zu Screening-, Vergleichs- oder Dokumentationszwecken verlangt wird. Die Bescheinigung ersetzt keine auditierte CO₂-Buchhaltung und kein regulatorisches ESG-Reporting.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20"><div className="space-y-10 lg:col-span-2"><div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63]">Einkauf & Lieferanten-Onboarding</h3><p className="mt-3 text-sm text-gray-700 leading-relaxed">Einkaufsabteilungen verlangen oft vergleichbare Umweltindikatoren beim Lieferanten-Onboarding oder bei Ausschreibungen. Die Bescheinigung liefert ein standardisiertes Dokument für RFP-Antworten und Lieferantenqualifikation.</p></div><div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/40 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63]">Versicherung, Risiko & Underwriting</h3><p className="mt-3 text-sm text-gray-700 leading-relaxed">Versicherer können Umweltindikatoren für Kundenklassifizierung, Portfolioanalyse oder Underwriting-Entscheidungen anfragen. Die Bescheinigung liefert ein klares und kohärentes Dokument für Versicherungs- und Verlängerungsdossiers.</p></div></div><div className="p-8 rounded-xl bg-[#0B3A63] text-white shadow-lg"><h3 className="text-2xl font-semibold mb-3">Bank & Kreditanalyse</h3><p className="text-white/90 text-sm leading-relaxed">Finanzinstitute dokumentieren zunehmend Umwelt-Expositionen in Kreditprüfung und Kundenmonitoring. Die Bescheinigung liefert ein indikatives CO₂e-Signal, das in Kreditdossiers referenziert werden kann, ohne vollständige ESG-Offenlegung zu verlangen.</p></div></div>
          <div className="mt-16 p-10 bg-white rounded-xl shadow-md border border-gray-200"><h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Öffentliche Vergaben & administrative Dossiers</h3><p className="text-sm text-gray-700 leading-relaxed max-w-4xl">Öffentliche Beschaffungsverfahren können Umweltindikatoren als Eignungs- oder Bewertungskriterien enthalten. Die Bescheinigung vereinfacht Antworten durch ein lesbares und verifizierbares Dokument für administrative Reviews.</p></div>
          <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm"><h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Zusätzliche Anwendungsfälle</h3><BulletList items={additionalUses} /><p className="mt-6 text-sm text-gray-700 leading-relaxed">Diese Anwendungsfälle spiegeln praktische nicht-regulatorische Situationen wider, in denen ein standardisiertes Umweltdokument für Vergleich oder Dokumentation verlangt wird.</p></div>
          <BackToSummary />
        </section>

        <section id="limitations-and-fit" data-section="limitations-and-fit" className="scroll-mt-24 border-b border-gray-200 pb-24">
          <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden"><div className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]" aria-hidden="true" /><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6"><span className="mr-2">7.</span>Grenzen & Eignung</h2><p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed pl-6">Dieser Abschnitt definiert Umfang, relevante Anwendungsfälle und Grenzen der CO₂e-Bescheinigung. Ziel ist, Fehlinterpretationen in institutionellen, administrativen oder Compliance-Kontexten zu vermeiden.</p></div>
          <div className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Was die Bescheinigung IST</h3><BulletList items={isItems} /></div>
          <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/30 to-transparent opacity-25" /><h3 className="text-2xl font-semibold mb-4 relative z-10">Was die Bescheinigung NICHT IST</h3><div className="relative z-10"><BulletList items={isNotItems} light /></div></div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10"><div className="lg:col-span-2 p-10 rounded-xl bg-white border border-gray-200 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Wann sie geeignet ist</h3><BulletList items={fitItems} /></div><div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Typische Empfänger</h3><BulletList items={recipients} /></div></div>
          <div className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Wann sie NICHT verwendet werden sollte</h3><BulletList items={notUseItems} /></div>
          <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent opacity-30" /><h3 className="text-2xl font-semibold mb-4 relative z-10">Abschließende Klarstellung</h3><p className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">Die CO₂e-Bescheinigung liefert ein standardisiertes und indikatives Signal ausschließlich für Dokumentation und Screening. Verantwortung für Interpretation und Nutzung liegt beim Empfänger. Regulatorisches Reporting, Zertifizierung oder auditierte CO₂-Buchhaltung erfordern dedizierte Bewertungen nach den anwendbaren Standards.</p></div>
          <BackToSummary />
        </section>
      </div>

      <div className="mt-16 flex flex-wrap gap-3 justify-center">
        <Link href="/de/generate/" className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#1FB6C1] text-white hover:bg-[#19AAB4] transition-colors font-semibold">CO₂e-Bescheinigung erstellen</Link>
        <Link href="/de/pricing/" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Preis ansehen</Link>
        <Link href="/de/methodik/" className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">Methodik ansehen</Link>
      </div>
    </section>
  );
}
