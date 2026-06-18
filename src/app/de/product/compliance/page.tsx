// PATH: src/app/de/product/compliance/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance und Grenzen der CO₂e-Bescheinigung | Certif-Scope",
  description:
    "Rechtlicher Rahmen der Certif-Scope CO₂e-Bescheinigung: indikatives Dokument, kein Audit, kein vollständiges THG-Inventar, kein CSRD-/ESRS-Reporting, Verantwortlichkeiten und Nutzungsgrenzen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/product/compliance/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/compliance/",
      de: "https://www.certif-scope.com/de/product/compliance/",
    },
  },
  openGraph: {
    title: "Compliance und Grenzen der CO₂e-Bescheinigung | Certif-Scope",
    description:
      "Rechtliche Grenzen, Verantwortlichkeiten, zulässige Nutzungen und regulatorische Nicht-Gleichwertigkeit der indikativen CO₂e-Bescheinigung Certif-Scope.",
    url: "https://www.certif-scope.com/de/product/compliance/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const backClass =
  "inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors";

type Block = {
  title: string;
  text?: string;
  items?: string[];
  dark?: boolean;
};

type ComplianceSection = {
  id: string;
  title: string;
  intro: string;
  blocks: Block[];
};

const toc = [
  ["compliance-scope-legal-boundaries", "Compliance-Umfang & rechtliche Grenzen"],
  ["regulatory-alignment-non-equivalence", "Regulatorische Ausrichtung & Nicht-Gleichwertigkeit"],
  ["legal-boundary-interpretation", "Rechtliche Interpretationsgrenze"],
  ["regulatory-non-equivalence-misuse-prevention", "Nicht-Gleichwertigkeit & Missbrauchsprävention"],
  ["data-boundaries-prohibited-interpretations", "Datengrenzen & verbotene Interpretationen"],
  ["legal-non-equivalence-regulatory-disclosures", "Keine Gleichwertigkeit mit regulatorischen Offenlegungen"],
  ["prohibited-claims-misuse-prevention", "Verbotene Aussagen & Missbrauchsprävention"],
  ["disclaimers-liability-legal-safeguards", "Haftungsausschlüsse & rechtliche Schutzklauseln"],
  ["auditability-independent-verification-boundaries", "Auditierbarkeit & Grenzen der unabhängigen Verifizierung"],
  ["liability-framework-legal-responsibilities", "Haftungsrahmen & rechtliche Verantwortlichkeiten"],
] as const;

const sections: ComplianceSection[] = [
  {
    id: "compliance-scope-legal-boundaries",
    title: "1. Compliance-Umfang & rechtliche Grenzen",
    intro:
      "Diese Section definiert den exakten rechtlichen Umfang von Certif-Scope. Sie beschreibt, was das System erzeugen darf, was es nicht abdeckt und in welchem regulatorischen Kontext die CO₂e-Bescheinigung zu verstehen ist.",
    blocks: [
      {
        title: "Definierter rechtlicher Umfang",
        items: [
          "Erzeugt indikative CO₂e-Schätzungen ausschließlich auf Basis spend-based Faktoren.",
          "Orientiert sich an der Scope-3-spend-based Logik des GHG Protocol.",
          "Kompatibel mit methodischen Prinzipien aus ISO 14064-1 und ISO 14083, ohne diese vollständig zu ersetzen.",
          "Geeignet für nicht bindende Indikatoren in Procurement-, Lieferanten- und Bankprozessen.",
          "Unabhängig von primären Lieferantendaten.",
        ],
      },
      {
        title: "Rechtliche Einordnung",
        text:
          "Finanzielle Ausgaben → Kategoriezuordnung → Referenzfaktor → indikative CO₂e-Schätzung. Das Ergebnis stellt keine realen operativen Emissionen dar, sondern eine indikative Intensität aus wirtschaftlichen sektoralen Referenzen.",
      },
      {
        title: "Explizite rechtliche und methodische Ausschlüsse",
        items: [
          "Kein CSRD-konformes Reporting und keine Nachhaltigkeitserklärung.",
          "Keine Verifizierung primärer Daten nach ESRS E1, E2 oder E3.",
          "Keine Produkt- oder Lieferanten-CO₂-Bilanz.",
          "Keine operativen Scope-1- oder Scope-2-Emissionen.",
          "Keine Lebenszyklusanalyse nach ISO 14040/44.",
          "Kein Audit, keine Assurance und keine Prüfungsmeinung.",
          "Keine physischen Aktivitätsdaten wie kWh, Kilometer oder Kraftstoffverbrauch.",
        ],
      },
    ],
  },
  {
    id: "regulatory-alignment-non-equivalence",
    title: "2. Regulatorische Ausrichtung & Nicht-Gleichwertigkeit",
    intro:
      "Certif-Scope stützt sich auf anerkannte methodische Rahmen, ohne eine vollständige regulatorische Compliance-Lösung zu sein. Die Ausrichtung schafft methodische Kohärenz, aber keine rechtliche Gleichwertigkeit.",
    blocks: [
      {
        title: "Referenzrahmen ohne Ersatzwirkung",
        items: [
          "GHG Protocol — Scope-3-spend-based Methodik.",
          "ISO 14064-1 — Prinzipien von Relevanz, Kohärenz und Transparenz.",
          "ISO 14083 — Transport-Emissionslogik als nicht verpflichtende Referenz.",
          "EEIO-Modellierung — makroökonomische Grundlage der Emissionsintensitäten.",
          "ADEME / DEFRA — veröffentlichte Intensitäten als zugängliche Grundlage.",
        ],
      },
      {
        title: "Keine Gleichwertigkeit mit verpflichtenden Rahmen",
        items: [
          "Keine CSRD- oder ESRS-Offenlegung.",
          "Keine EU-Taxonomie-Eignung oder Taxonomie-Ausrichtung.",
          "Kein vollständiges Corporate-GHG-Inventar mit Primärdaten.",
          "Kein nationales Emissionsreporting und keine CO₂-Steuererklärung.",
          "Keine ISO-14064-Verifizierung durch Dritte.",
        ],
      },
      {
        title: "Zweck der regulatorischen Ausrichtung",
        dark: true,
        items: [
          "Transparente methodische Einordnung.",
          "Kompatibilität mit Screening- und Risikobewertungsprozessen.",
          "Bessere Auditierbarkeit durch feste Versionierung und deterministische Ergebnisse.",
          "Klare Trennung zwischen indikativem Dokument und verpflichtender Compliance.",
        ],
      },
    ],
  },
  {
    id: "legal-boundary-interpretation",
    title: "3. Rechtliche Interpretationsgrenze",
    intro:
      "Diese Section legt fest, was die Ergebnisse rechtlich darstellen und was sie ausdrücklich nicht darstellen dürfen. Ziel ist, jede Gleichsetzung mit geprüften Umweltdaten oder regulatorischen Erklärungen zu verhindern.",
    blocks: [
      {
        title: "Was das Ergebnis rechtlich darstellt",
        items: [
          "Eine indikative und nicht bindende CO₂e-Schätzung auf Ausgabenbasis.",
          "Eine finanzielle Umrechnung in Emissionsschätzungen nach wirtschaftlichen Kategorien.",
          "Ein reproduzierbares Ergebnis aus einem deterministischen Modell.",
          "Ein statisches Dokument mit eingebetteter Faktorversion.",
          "Ein Indikator für ESG-Vorprüfung und institutionelles Screening.",
        ],
      },
      {
        title: "Was das Ergebnis nicht darstellt",
        items: [
          "Kein verifiziertes THG-Inventar nach ISO 14064-1.",
          "Keine ESRS-Umwelterklärung und kein CSRD-Reporting.",
          "Keine EU-Taxonomie-Eignung oder Ausrichtung.",
          "Keine lieferantenspezifische Genauigkeit oder vorgelagerte Rückverfolgbarkeit.",
          "Keine physische Emissionsmessung oder operative Überwachung.",
          "Keine zertifizierte CO₂-Bilanz für regulatorische Zwecke.",
        ],
      },
      {
        title: "Institutionelle Interpretationsverantwortung",
        text:
          "Institutionen bleiben vollständig verantwortlich für Interpretation, Kontextualisierung und nachgelagerte Nutzung der Werte. Certif-Scope übernimmt keine Verantwortung für Compliance-Entscheidungen, die auf dem Ergebnis beruhen.",
      },
    ],
  },
  {
    id: "regulatory-non-equivalence-misuse-prevention",
    title: "4. Nicht-Gleichwertigkeit & Missbrauchsprävention",
    intro:
      "Die Ergebnisse von Certif-Scope dürfen nicht als regulatorische Erklärung, verpflichtender Umweltbericht oder zertifizierte Berechnung verstanden werden. Diese Section definiert die Missbrauchsverbote.",
    blocks: [
      {
        title: "Keine Gleichwertigkeit mit regulatorischen Rahmen",
        items: [
          "CSRD.",
          "ESRS.",
          "Verpflichtende EU-Taxonomie-Erklärungen.",
          "Zertifizierte ISO-14064-1-Inventare.",
          "ISO-14083-Logistikbuchhaltung.",
          "Lieferantenspezifische CO₂-Erklärungen.",
        ],
      },
      {
        title: "Missbrauchsprävention",
        items: [
          "Ergebnisse dürfen nicht als auditiert oder zertifiziert bezeichnet werden.",
          "Ergebnisse dürfen nicht als Scope-1- oder Scope-2-Emissionen dargestellt werden.",
          "Keine behauptete Gleichwertigkeit mit regulatorischen Einreichungen.",
          "Keine Nutzung in Umwelt- oder Marketingaussagen.",
          "Keine Vermischung mit primären Lieferantendaten.",
        ],
      },
      {
        title: "Verantwortlichkeiten",
        dark: true,
        text:
          "Certif-Scope validiert, auditiert und korrigiert die vom Nutzer angegebenen Finanzdaten nicht. Die Verantwortung für Genauigkeit und Vollständigkeit der Eingaben liegt ausschließlich beim Nutzer oder der einreichenden Institution.",
      },
    ],
  },
  {
    id: "data-boundaries-prohibited-interpretations",
    title: "5. Datengrenzen & verbotene Interpretationen",
    intro:
      "Diese Section beschreibt, was die Daten darstellen und welche Interpretationen ausdrücklich verboten sind, um rechtliche und methodische Fehlverwendung zu vermeiden.",
    blocks: [
      {
        title: "Was die Daten darstellen",
        items: [
          "Indikative CO₂e-Werte, ausschließlich aus finanziellen Ausgaben abgeleitet.",
          "Schätzungen je Kategorie auf Basis durchschnittlicher wirtschaftlicher Kohlenstoffintensitäten.",
          "Spend-based Modellierung in Anlehnung an das GHG Protocol.",
          "Ein reproduzierbares Ergebnis mit definierter Berechnungsversion.",
          "Ein nicht bindender Indikator für institutionelles Pre-Screening.",
        ],
      },
      {
        title: "Was die Daten nicht darstellen",
        items: [
          "Keine tatsächlichen operativen Emissionen eines Unternehmens.",
          "Keine primären lieferantenspezifischen Emissionsdaten.",
          "Keine aktivitätsbasierten Messungen wie kWh, Kilometer, Kraftstoff oder Wärme.",
          "Keine Lebenszyklusanalyse und keine cradle-to-gate Bewertung.",
          "Keine Daten für CSRD/ESRS oder ein zertifiziertes ISO-Audit.",
          "Kein Nachweis für regulatorische oder Umweltangaben.",
        ],
      },
      {
        title: "Verbotene Interpretationen",
        items: [
          "Die Werte als zertifizierte, auditierte oder validierte Emissionen darstellen.",
          "Die Werte als Compliance-Nachweis eines Lieferanten nutzen.",
          "Umweltleistung oder Effizienzgewinn daraus ableiten.",
          "Gleichwertigkeit mit verpflichtenden regulatorischen Erklärungen annehmen.",
          "Die Werte in Marketing- oder ESG-Aussagen nutzen.",
          "Die Schätzung als Scope-1- oder Scope-2-Messung interpretieren.",
        ],
      },
    ],
  },
  {
    id: "legal-non-equivalence-regulatory-disclosures",
    title: "6. Keine Gleichwertigkeit mit regulatorischen Offenlegungen",
    intro:
      "Certif-Scope-Ergebnisse sind keine offiziellen oder regulatorischen Emissionsberichte. Diese Grenzen schützen Institutionen vor Fehlinterpretationen und Nicht-Compliance.",
    blocks: [
      {
        title: "Wesentliche Unterschiede zu verpflichtendem Reporting",
        items: [
          "Das Ergebnis ist indikativ und ausgabenbasiert, nicht physisch gemessen.",
          "Keine Aktivitätsdaten wie kWh, Kraftstoff, Wärme, Kälte oder Distanzen.",
          "Keine Validierung durch Auditoren oder akkreditierte Stellen.",
          "Nicht konform mit CSRD, ESRS E1, ISO 14064-1 oder vollständigen GHG-Protocol-Inventaren.",
        ],
      },
      {
        title: "Nicht zulässige rechtliche Nutzungen",
        items: [
          "Nicht gültig für CSRD-/ESRS-Erklärungen.",
          "Nicht gültig in ISO-14064-1-Zertifizierungsprozessen.",
          "Nicht gültig für die EU-Taxonomie-Klassifizierung grüner Aktivitäten.",
          "Nicht gültig für Umwelt- oder Marketingaussagen.",
          "Nicht gültig für CO₂-Kompensation oder CO₂-Märkte.",
        ],
      },
      {
        title: "Institutionelle Verantwortung",
        dark: true,
        text:
          "Institutionen bleiben vollständig verantwortlich zu prüfen, ob der indikative Wert für ihre interne Nutzung geeignet ist. Certif-Scope ist von keinem regulatorischen Rahmen als Reporting-Mechanismus anerkannt.",
      },
    ],
  },
  {
    id: "prohibited-claims-misuse-prevention",
    title: "7. Verbotene Aussagen & Missbrauchsprävention",
    intro:
      "Die Werte sind ausschließlich indikativ. Sie dürfen nicht für Werbung, regulatorische Einreichungen, öffentliche ESG-Erklärungen oder Performance-Vergleiche genutzt werden.",
    blocks: [
      {
        title: "Verbotene externe Kommunikation",
        items: [
          "Keine ESG-Marketingaussage oder Werbezusage.",
          "Keine Aussage wie klimaneutral, CO₂-arm oder gleichwertig.",
          "Kein öffentlicher Vergleich mit Wettbewerbern oder Branchendurchschnitten.",
          "Keine Nutzung für Produkt-Umweltlabel oder Ökodesign-Compliance.",
          "Keine Veröffentlichung als auditierte oder regulatorisch genehmigte Daten.",
        ],
      },
      {
        title: "Verbotene regulatorische Nutzung",
        items: [
          "Nicht akzeptabel für CSRD- oder ESRS-Einreichungen.",
          "Nicht akzeptabel für ISO-14064-1-Verifizierung.",
          "Nicht akzeptabel für EU-Taxonomie-Klassifizierung.",
          "Nicht akzeptabel für Green-Claims-Compliance.",
          "Nicht akzeptabel für nationale Emissionsregister.",
        ],
      },
      {
        title: "Rechtsrisiken vermeiden",
        text:
          "Eine irreführende Darstellung kann Risiken nach Verbraucherschutz-, Werbe-, Due-Diligence- und Vertragsrecht auslösen. Deshalb muss die indikative Natur immer sichtbar bleiben.",
      },
    ],
  },
  {
    id: "disclaimers-liability-legal-safeguards",
    title: "8. Haftungsausschlüsse & rechtliche Schutzklauseln",
    intro:
      "Diese Section definiert rechtliche Hinweise und Haftungsgrenzen, damit Nutzer, Prüfer und Institutionen die indikative Natur des Ergebnisses korrekt verstehen.",
    blocks: [
      {
        title: "Natur des Ergebnisses",
        items: [
          "Ergebnisse sind indikative Schätzungen, keine verifizierten Emissionen.",
          "Werte werden aus spend-based wirtschaftlichen Intensitäten erzeugt.",
          "Ergebnisse sind nicht gleichwertig mit gemessenen CO₂-Emissionen.",
          "Keine Garantie der Genauigkeit gegenüber realer operativer Aktivität.",
          "Nicht geeignet für regulatorische Einreichungen oder Umweltangaben.",
        ],
      },
      {
        title: "Verantwortung des Nutzers",
        items: [
          "Nutzer bleiben für Genauigkeit, Vollständigkeit und Relevanz der Ausgaben verantwortlich.",
          "Nutzer müssen Ausgaben korrekt kategorisieren.",
          "Certif-Scope prüft keine Buchungsbelege und keine Rechnungen.",
          "Certif-Scope kann fehlende oder falsch deklarierte Werte nicht erkennen.",
        ],
      },
      {
        title: "Plattform-Haftungsgrenzen",
        items: [
          "Keine Verantwortung für institutionelle Entscheidungen auf Basis dieser Indikatoren.",
          "Keine Verantwortung für ESG-Scoring oder Risikomodelle Dritter.",
          "Keine Verantwortung für Handelsstreitigkeiten über indikative Werte.",
          "Keine Verantwortung für regulatorische Sanktionen aus Fehlinterpretationen.",
        ],
      },
    ],
  },
  {
    id: "auditability-independent-verification-boundaries",
    title: "9. Auditierbarkeit & Grenzen der unabhängigen Verifizierung",
    intro:
      "Diese Section legt fest, was Dritte unabhängig prüfen können und was außerhalb der Verifizierung bleibt. Sie verhindert die Verwechslung mit einem regulatorischen Audit.",
    blocks: [
      {
        title: "Umfang der unabhängigen Verifizierung",
        items: [
          "Korrekte Anwendung der Emissionsfaktoren je Kategorie.",
          "Korrekte Multiplikation von Ausgaben mit Emissionsfaktoren.",
          "Korrekte Aggregation der Ergebnisse zum Gesamtwert.",
          "Übereinstimmung der Datensatzversion mit den eingebetteten Metadaten.",
        ],
      },
      {
        title: "Grenzen der Verifizierung",
        items: [
          "Keine Validierung der vom Nutzer gelieferten Finanzdaten.",
          "Keine Bestätigung, ob Ausgaben vollständig oder korrekt sind.",
          "Keine Bewertung realer Lieferantenemissionen.",
          "Kein Ersatz für CSRD-/ESRS-Reporting.",
        ],
      },
      {
        title: "Explizite Verifizierungsgrenze",
        dark: true,
        text:
          "Certif-Scope speichert keine detaillierten Finanzdaten. Unabhängige Prüfer können daher nicht erneut auf Nutzereingaben zugreifen oder diese fachlich validieren. Verifizierung bleibt auf Struktur, Version und Mathematik begrenzt.",
      },
    ],
  },
  {
    id: "liability-framework-legal-responsibilities",
    title: "10. Haftungsrahmen & rechtliche Verantwortlichkeiten",
    intro:
      "Die CO₂e-Bescheinigung ist ein indikatives Ergebnis, abgeleitet aus Ausgaben, die der Nutzer bereitstellt. Sie ist keine Umweltzertifizierung, kein Compliance-Bericht und keine auditierte Messung.",
    blocks: [
      {
        title: "Rechtliche Natur der Bescheinigung",
        items: [
          "Kein Umweltzertifikat.",
          "Kein Compliance-Bericht.",
          "Keine auditierte Messung.",
          "Berechnung ausschließlich aus Nutzereingaben, veröffentlichten Kategorien und fester Faktorversion.",
        ],
      },
      {
        title: "Verantwortungsverteilung",
        items: [
          "Der Nutzer verantwortet Genauigkeit und Vollständigkeit der Finanzdaten.",
          "Certif-Scope verantwortet die deterministische Verarbeitung validierter Werte.",
          "Dritte Prüfer verantworten ihre unabhängige Nachrechnung.",
          "Keine Partei darf den Sinn der Bescheinigung über ihren definierten Umfang hinaus erweitern.",
        ],
      },
      {
        title: "Explizite Haftungsausschlüsse",
        items: [
          "Keine Garantie für die Genauigkeit der Nutzerdaten.",
          "Keine Validierung lieferantenspezifischer CO₂-Performance.",
          "Keine Garantie für CSRD-, ESRS-, EU-Taxonomie- oder ISO-Audit-Compliance.",
          "Keine Relevanz zur Minderung regulatorischer Sanktionen oder rechtlicher Verteidigung.",
          "Keine Verifizierung operativer Scope-1/2/3-Emissionen aus Aktivitätsdaten.",
        ],
      },
      {
        title: "Institutionelle Schutzmechanismen",
        dark: true,
        text:
          "Die Bescheinigung enthält rechtliche Hinweise und Versionsmetadaten. Sie weist ausdrücklich darauf hin, dass die Ergebnisse indikativ, nicht bindend und nicht gegen physische Operationen oder reale Emissionen validiert sind.",
      },
    ],
  },
];

function BackToTop() {
  return (
    <div className="mt-12 text-right">
      <a href="#top" className={backClass}>Zurück zum Inhaltsverzeichnis</a>
    </div>
  );
}

function BlockCard({ block }: { block: Block }) {
  return (
    <div className={block.dark ? "mt-8 p-8 bg-[#0B3A63] text-white rounded-xl shadow-md" : "mt-8 p-8 bg-white border border-gray-200 rounded-xl shadow-sm"}>
      <h3 className={`text-2xl font-semibold mb-4 ${block.dark ? "text-white" : "text-[#0B3A63]"}`}>{block.title}</h3>
      {block.text ? <p className={`text-sm leading-relaxed max-w-5xl ${block.dark ? "text-white/90" : "text-gray-700"}`}>{block.text}</p> : null}
      {block.items ? (
        <ul className={`space-y-2 text-sm leading-relaxed max-w-5xl ${block.dark ? "text-white/90" : "text-gray-700"}`}>{block.items.map((item) => <li key={item}>• {item}</li>)}</ul>
      ) : null}
    </div>
  );
}

export default function ProductCompliancePageDE() {
  return (
    <section id="compliance" data-section="compliance" className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Compliance und Grenzen der CO₂e-Bescheinigung | Certif-Scope",
            url: "https://www.certif-scope.com/de/product/compliance/",
            inLanguage: "de-DE",
            description:
              "Rechtlicher Rahmen, Verantwortlichkeiten und Nutzungsgrenzen der indikativen CO₂e-Bescheinigung Certif-Scope.",
            isPartOf: { "@type": "WebSite", name: "Certif-Scope", url: "https://www.certif-scope.com/de/" },
          }),
        }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">CO₂e-Bescheinigung — Compliance</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">Compliance-Rahmen & rechtliche Grenzen</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Rechtlicher und methodischer Rahmen der CO₂e-Bescheinigung: indikatives Dokument, kein Audit, kein vollständiges THG-Inventar, kein CSRD-/ESRS-Reporting, Verantwortlichkeiten des Nutzers, zulässige Nutzungen und Interpretationsgrenzen.
        </p>
        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <nav aria-label="Compliance-Abschnitte" className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className="hover:text-[#1FB6C1] transition">{label}</a></li>)}
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto space-y-24">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 border-b border-gray-200 pb-24">
            <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed max-w-5xl mt-6">{section.intro}</p>
            </div>
            {section.blocks.map((block) => <BlockCard key={`${section.id}-${block.title}`} block={block} />)}
            <BackToTop />
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-3 justify-center">
        <Link href="/de/product/" className={backClass}>Zurück zur Produktübersicht</Link>
        <Link href="/de/product/methodik/" className={backClass}>Methodik ansehen</Link>
        <Link href="/de/generate/" className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#1FB6C1] text-white hover:bg-[#19AAB4] transition-colors font-semibold">CO₂e-Bescheinigung erstellen</Link>
      </div>
    </section>
  );
}
