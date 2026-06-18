// PATH: src/app/de/product/methodik/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spend-based Methodik CO₂e KMU | Certif-Scope",
  description:
    "Verstehen Sie die Certif-Scope Methodik: indikative CO₂e-Schätzung auf Ausgabenbasis, Emissionsfaktoren, Grenzen, Datenschutz, Versionierung und nicht-auditierter Rahmen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/product/methodik/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/methodology/",
      de: "https://www.certif-scope.com/de/product/methodik/",
    },
  },
  openGraph: {
    title: "Spend-based Methodik CO₂e KMU | Certif-Scope",
    description:
      "Spend-based Methode, Emissionsfaktoren, indikative Berechnung, Grenzen und Datenschutz der Certif-Scope CO₂e-Bescheinigung.",
    url: "https://www.certif-scope.com/de/product/methodik/",
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
  formula?: string;
};

type Section = {
  id: string;
  title: string;
  intro: string;
  blocks: Block[];
};

const toc = [
  ["s1", "Umfang & Ziel der Methodik"],
  ["s2", "Theoretische Grundlagen"],
  ["s3", "Mathematisches Modell"],
  ["s4", "Kategorien & Grenzen"],
  ["s5", "Normalisierung der Eingaben"],
  ["s6", "Transformationskette"],
  ["s7", "Zuweisung der Emissionsfaktoren"],
  ["s8", "Berechnungsfluss & Formeln"],
  ["s9", "Interne Kontrollen & Schutzmechanismen"],
  ["s10", "Versionierung der Faktoren"],
  ["s11", "Update-Zyklus der Datensätze"],
  ["s12", "Daten, Datenschutz & DSGVO"],
] as const;

const sections: Section[] = [
  {
    id: "s1",
    title: "1. Umfang & Ziel der Methodik",
    intro:
      "Diese Section definiert den exakten Umfang, die Grenzen und den institutionellen Zweck der Certif-Scope Methodik. Das Modell bleibt strikt auf eine spend-based Umrechnung finanzieller Ausgaben in indikative CO₂e-Indikatoren begrenzt.",
    blocks: [
      {
        title: "Definierter Umfang",
        items: [
          "Umrechnung jährlicher Ausgaben in CO₂e-Schätzungen.",
          "Emissionsfaktoren je Kategorie in kg CO₂e / €.",
          "Ausrichtung an der spend-based Logik des GHG Protocol Corporate Standard.",
          "Deterministische und reproduzierbare Ergebnisse mit versionierten Faktoren.",
          "Institutionelle Screening-Fälle mit schnellen, nicht bindenden Indikatoren.",
        ],
      },
      {
        title: "Berechnungskette",
        text: "Finanzielle Eingaben (EUR) → Kategorie-Mapping → Auswahl der Emissionsfaktoren → deterministische Berechnung → CO₂e-Ergebnis mit eingebetteten Versionsmetadaten.",
      },
      {
        title: "Ausdrücklich außerhalb des Umfangs",
        items: [
          "Keine physischen Aktivitätsdaten wie kWh, km, transportierte Tonnen oder Materialmengen.",
          "Keine Lebenszyklusanalyse oder cradle-to-grave Bewertung.",
          "Keine lieferantenspezifischen Emissionen und keine Validierung primärer Daten.",
          "Keine Berechnung operativer Scope-1- oder Scope-2-Emissionen.",
          "Keine Gleichwertigkeit mit verpflichtendem CSRD- oder ESRS-Reporting.",
        ],
      },
    ],
  },
  {
    id: "s2",
    title: "2. Theoretische Grundlagen",
    intro:
      "Die spend-based Methodik stammt aus umweltökonomischen Input-Output-Modellen. Sie verbindet Wirtschaftsaktivität mit durchschnittlichen sektoralen Umweltwirkungen, wenn keine operativen Primärdaten verfügbar sind.",
    blocks: [
      {
        title: "Ursprung des Ausgabenmodells",
        text: "Das Modell basiert auf Environmentally Extended Input-Output (EEIO). Input-Output-Tabellen beschreiben Kaufströme zwischen Wirtschaftssektoren, während Umweltkonten Emissionen den Sektoren zuordnen.",
      },
      {
        title: "Mathematische Basis",
        text: "Das Modell nimmt eine Proportionalität zwischen finanziellen Ausgaben und zugeordneten Emissionen innerhalb einer Kategorie an.",
        formula: "Emissionen (kg CO₂e) = Ausgaben (€) × Emissionsfaktor (kg CO₂e / €)",
      },
      {
        title: "Warum ein lineares Modell akzeptiert wird",
        items: [
          "Es vermeidet spekulative oder prädiktive Modellierung.",
          "Es garantiert Reproduzierbarkeit zwischen Institutionen.",
          "Es benötigt keine operativen Primärdaten von Lieferanten.",
          "Es ist mathematisch transparent und prüfbar.",
          "Es passt zu GHG-Protocol-Empfehlungen, wenn physische Daten fehlen.",
        ],
      },
    ],
  },
  {
    id: "s3",
    title: "3. Mathematisches Modell",
    intro:
      "Diese Section beschreibt die exakte mathematische Struktur des Certif-Scope Berechnungsmotors: feste Variablen, lineare Regeln und deterministische Behandlung jeder Kategorie.",
    blocks: [
      { title: "Grundformel je Kategorie", formula: "Eᵢ = Sᵢ × Fᵢ" },
      {
        title: "Variablen",
        items: [
          "Eᵢ = Emissionen der Kategorie i (kg CO₂e).",
          "Sᵢ = Ausgaben der Kategorie i (EUR).",
          "Fᵢ = Emissionsfaktor der Kategorie i (kg CO₂e / EUR).",
          "Gesamtwert = Summe aller Kategorien.",
        ],
      },
      { title: "Gesamtformel", formula: "E_total = Σ (Sᵢ × Fᵢ)" },
      {
        title: "Deterministische Eigenschaften",
        items: [
          "Identische Eingaben erzeugen immer identische Ergebnisse.",
          "Keine probabilistische oder prädiktive Annahme.",
          "Keine Regression, keine Anpassungskurve.",
          "Keine versteckten Variablen oder Korrekturkoeffizienten.",
          "Keine Normalisierung nach Lieferant oder Region.",
        ],
      },
    ],
  },
  {
    id: "s4",
    title: "4. Kategorien & Grenzen",
    intro:
      "Die Methodik verwendet feste wirtschaftliche Kategorien mit deterministischem Umfang. Es gibt keine automatische Neuinterpretation, Umverteilung oder Rekategorisierung.",
    blocks: [
      {
        title: "Verwendete Kategorien",
        items: [
          "Energie & Versorgungsleistungen.",
          "Bürobetrieb.",
          "IT-Ausrüstung & digitale Services.",
          "Transport & Logistik.",
          "Professionelle Dienstleistungen.",
          "Marketing & Medieneinkauf.",
          "Bauarbeiten / Wartung.",
          "Sonstige gekaufte Waren & Dienstleistungen.",
        ],
      },
      {
        title: "Nicht enthaltene Operationen",
        items: [
          "Keine direkten Scope-1-Emissionen wie Kraftstoffverbrennung, interne Flotte oder Prozesse vor Ort.",
          "Keine Scope-2-Stromberechnung nach market-based Ansatz.",
          "Keine Pendelwege der Mitarbeitenden.",
          "Keine lieferantenspezifischen Emissionsanpassungen.",
          "Keine Ausweitung auf Lebenszyklusgrenzen.",
        ],
      },
      {
        title: "Deterministische Kategorisierung",
        dark: true,
        items: [
          "Eine Ausgabe kann nur einer Kategorie angehören.",
          "Keine Umverteilung zwischen Kategorien.",
          "Kein proportionaler Split für Mehrzweckausgaben.",
          "Die Zuordnung folgt der wirtschaftlichen Funktion, nicht dem Lieferantentyp.",
        ],
      },
    ],
  },
  {
    id: "s5",
    title: "5. Normalisierung der Eingaben",
    intro:
      "Vor der CO₂e-Berechnung gelten feste Eingaberegeln. Der Motor akzeptiert nur strukturierte, numerische Werte in EUR und nimmt keine stillen Korrekturen vor.",
    blocks: [
      {
        title: "Erforderliche Eingabestruktur",
        items: [
          "Jährliche Ausgabe je Kategorie.",
          "Nur numerische Werte: Ganzzahl oder Dezimalzahl.",
          "Währung strikt in Euro (EUR).",
          "Ein Wert = eine Kategorie, ohne Mehrfachzuordnung.",
          "Nicht ausgefüllte Kategorien = null, ohne Extrapolation.",
        ],
      },
      {
        title: "Strikte Validierungsregeln",
        items: [
          "Negative Werte werden abgelehnt.",
          "Nicht-numerische Zeichen werden abgelehnt.",
          "Leere Zeichenketten werden als null behandelt.",
          "Infinity und NaN stoppen die Berechnung.",
          "Gemischte Währungsformate werden abgelehnt.",
        ],
      },
      {
        title: "Keine Inferenz, keine Schätzung",
        text: "Certif-Scope errät, interpretiert oder ergänzt fehlende Werte niemals. Es gibt keine KI, kein maschinelles Lernen, keine Glättung und keine prädiktive Auffüllung der Eingaben.",
      },
    ],
  },
  {
    id: "s6",
    title: "6. Transformationskette",
    intro:
      "Die validierten Eingaben werden in einer linearen und deterministischen Verarbeitungskette behandelt. Keine Inferenz, keine statistische Modellierung und keine automatische Umverteilung greifen ein.",
    blocks: [
      {
        title: "Linearer Verarbeitungsfluss",
        items: [
          "1. Erfassung der finanziellen Eingaben je Kategorie.",
          "2. Strukturelle Validierung von Format, Präzision und Kategorien.",
          "3. Zuordnung zu einer festen internen Klassifikation.",
          "4. Zuweisung eines versionierten Emissionsfaktors.",
          "5. Umrechnung durch Multiplikation Ausgabe × Faktor.",
          "6. Aggregation zum Gesamtwert in CO₂e.",
          "7. Ausgabe in ein stabiles PDF mit Metadaten.",
        ],
      },
      {
        title: "Explizit verbotene Transformationen",
        items: [
          "Keine prädiktive Modellierung.",
          "Keine Interpolation fehlender Daten.",
          "Keine lieferantenbasierte Emissionsschätzung.",
          "Keine Währungsumrechnung.",
          "Keine mehrjährige Skalierung.",
          "Keine Anpassung durch maschinelles Lernen.",
        ],
      },
    ],
  },
  {
    id: "s7",
    title: "7. Zuweisung der Emissionsfaktoren",
    intro:
      "Jede finanzielle Kategorie wird deterministisch einem einzigen Emissionsfaktor aus einem versionierten Datensatz zugeordnet. Keine kontextuelle Substitution greift ein.",
    blocks: [
      {
        title: "Zuordnungsprinzipien",
        items: [
          "Jede wirtschaftliche Kategorie entspricht einer einzigen internen Klassifikation.",
          "Jede interne Klassifikation entspricht genau einem Emissionsfaktor.",
          "Jeder Faktor ist an eine unveränderliche Datensatzversion gebunden.",
          "Kein dynamisches Remapping und keine automatische Umverteilung.",
        ],
      },
      {
        title: "Version Locking",
        text: "Die Faktorversion wird zum Zeitpunkt der Berechnung eingefroren. Updates ändern niemals vergangene Bescheinigungen und frühere Versionen bleiben referenzierbar.",
      },
      {
        title: "Verbotenes Verhalten",
        items: [
          "Keine Schätzung anhand der Lieferantenidentität.",
          "Keine gewichteten Durchschnitte oder gemischten Faktoren.",
          "Keine prädiktive Modellierung.",
          "Keine Substitution bei unvollständigen Kategorien.",
          "Keine Fusion benachbarter Kategorien.",
        ],
      },
    ],
  },
  {
    id: "s8",
    title: "8. Berechnungsfluss & Formeln",
    intro:
      "Diese Section beschreibt den internen Ablauf von der validierten Ausgabe bis zur finalen CO₂e-Schätzung. Jeder Schritt ist linear und reproduzierbar.",
    blocks: [
      {
        title: "Zentrale Formel",
        formula: "Emissionen(Kategorie) = Ausgabe(Kategorie) × EF(Kategorie)",
      },
      {
        title: "Aggregationslogik",
        formula: "Gesamtemissionen = Σ [ Ausgabe(i) × EF(i) ]",
      },
      {
        title: "Verbotene Rechenverhalten",
        items: [
          "Keine prädiktive Modellierung.",
          "Keine Rekonstruktion von Zeitreihen.",
          "Keine gewichteten Mittelwerte oder Faktor-Mischungen.",
          "Keine lieferantenspezifischen Anpassungen.",
          "Keine Elastizitäts- oder Trendkoeffizienten.",
          "Keine externe Datenanreicherung.",
        ],
      },
    ],
  },
  {
    id: "s9",
    title: "9. Interne Kontrollen & Schutzmechanismen",
    intro:
      "Interne Kontrollen stellen sicher, dass der Berechnungsprozess deterministisch, gültig und strukturell kohärent bleibt.",
    blocks: [
      {
        title: "Eingabekontrollen",
        items: [
          "Nicht-numerische Werte werden vor jeder Verarbeitung abgelehnt.",
          "Negative Werte sind nicht erlaubt.",
          "Nicht gelistete Kategorien werden weder gemappt noch angenähert.",
          "Leere Felder lösen keine Inferenz oder Substitution aus.",
        ],
      },
      {
        title: "Schutzmechanismen während der Berechnung",
        items: [
          "Jede Kategorie wird isoliert verarbeitet.",
          "Die Version der Emissionsfaktoren wird vor Beginn der Berechnung gesperrt.",
          "Kein iteratives Neuberechnen und keine Optimierung.",
          "Keine dynamische Kalibrierung oder Gewichtung.",
        ],
      },
      {
        title: "Reproduzierbarkeit",
        dark: true,
        text: "Die Berechnung nutzt keinen externen Dienst, keine Echtzeitabfrage und keine dynamische Anpassung. Gleiche Eingaben und gleiche Faktorversion erzeugen exakt das gleiche Ergebnis.",
      },
    ],
  },
  {
    id: "s10",
    title: "10. Versionierung der Emissionsfaktoren",
    intro:
      "Emissionsfaktoren werden versioniert, aktualisiert, stabilisiert und validiert. Änderungen betreffen niemals bereits ausgestellte Bescheinigungen.",
    blocks: [
      {
        title: "Versionsstruktur",
        items: [
          "Versionierung folgt MAJOR.MINOR.PATCH.",
          "MAJOR für methodische Umfangsänderungen.",
          "MINOR für Updates von Emissionsfaktor-Datensätzen.",
          "PATCH für kleinere Korrekturen oder Klarstellungen.",
        ],
      },
      {
        title: "Update-Auslöser",
        items: [
          "Neue ADEME- oder DEFRA-Durchschnittswerte.",
          "Revision wirtschaftlicher EEIO-Datensätze.",
          "Regulatorische Ausrichtung, zum Beispiel ESRS oder GHG Protocol.",
          "Korrektur dokumentierter Inkonsistenzen.",
        ],
      },
      {
        title: "Keine Echtzeit-Substitution",
        text: "Faktoren werden nie dynamisch geladen, nie in Echtzeit abgerufen und nie still ersetzt. Sie sind lokal, statisch und vor jeder Berechnung versioniert gesperrt.",
      },
    ],
  },
  {
    id: "s11",
    title: "11. Update-Zyklus der Datensätze",
    intro:
      "Datensätze werden geplant, validiert und veröffentlicht. Jede Änderung ist versioniert und auditierbar; es gibt keine stille Aktualisierung.",
    blocks: [
      {
        title: "Update-Frequenz",
        items: [
          "Jährliche Integration öffentlicher ADEME- / DEFRA-Datensätze.",
          "Zwischenupdates nur bei offizieller Korrektur.",
          "Keine automatische Aufnahme von Echtzeit- oder volatilen Quellen.",
          "Dokumentierter Veröffentlichungskalender für Institutionen.",
        ],
      },
      {
        title: "Validierungskette",
        items: [
          "Kohärenzprüfung über alle Emissionskategorien.",
          "Vergleich mit der vorherigen Version zur Anomalieerkennung.",
          "Ablehnung von Ausreißern außerhalb definierter Schwellen.",
          "Integritäts-Fingerprint des finalen Datensatzes.",
        ],
      },
      {
        title: "Veröffentlichungspolitik",
        dark: true,
        items: [
          "Jeder neue Datensatz erhält eine semantische Version.",
          "Änderungen werden in einem öffentlichen Changelog dokumentiert.",
          "Vorherige Versionen bleiben dauerhaft zugänglich.",
          "Keine Löschung oder Überschreibung historischer Datensätze.",
        ],
      },
    ],
  },
  {
    id: "s12",
    title: "12. Daten, Datenschutz & DSGVO",
    intro:
      "Die Architektur folgt privacy-by-design: keine Speicherung detaillierter Eingaben, kein Profiling und keine Offenlegung an Dritte.",
    blocks: [
      {
        title: "Anwendbare Rechtsgrundlagen",
        items: [
          "Verarbeitung zur Vertragserfüllung (DSGVO Art. 6 Abs. 1 lit. b) für die angeforderte Bescheinigung.",
          "Berechtigtes Interesse (Art. 6 Abs. 1 lit. f) für notwendige Sicherheitskontrollen.",
          "Keine Verarbeitung sensibler Daten nach Art. 9.",
          "Kein automatisiertes Profiling natürlicher Personen.",
        ],
      },
      {
        title: "Minimierung",
        items: [
          "Keine Nutzeridentität erforderlich, um den Indikator zu berechnen.",
          "Keine direkte Speicherung personenbezogener Daten.",
          "Verarbeitung im Speicher ohne Persistenz detaillierter Eingaben.",
          "Kein Verhaltenstracking und keine Werbeanalyse.",
        ],
      },
      {
        title: "Speicherung & Löschung",
        dark: true,
        items: [
          "Keine serverseitige Speicherung detaillierter finanzieller Eingaben.",
          "Keine Logs mit detaillierten Nutzereingaben.",
          "Keine Backups mit eingegebenen Werten.",
          "Eingabedaten werden am Ende des Berechnungszyklus gelöscht.",
        ],
      },
      {
        title: "Institutionelle Kompatibilität",
        items: [
          "DSGVO-kompatibel und geeignet für Vertraulichkeitsanforderungen öffentlicher Beschaffung.",
          "Keine PII: geringeres Risiko für Institutionen.",
          "Kompatibel mit Bank- und Versicherungs-Screening auf Basis minimaler Daten.",
          "Nutzbar in administrativen Dossiers ohne PII-Exposition.",
        ],
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

function MethodBlock({ block }: { block: Block }) {
  const className = block.dark
    ? "mt-8 p-8 bg-[#0B3A63] text-white rounded-xl shadow-md"
    : "mt-8 p-8 bg-white border border-gray-200 rounded-xl shadow-sm";

  return (
    <div className={className}>
      <h3 className={`text-2xl font-semibold mb-4 ${block.dark ? "text-white" : "text-[#0B3A63]"}`}>{block.title}</h3>
      {block.text ? <p className={`text-sm leading-relaxed max-w-4xl ${block.dark ? "text-white/90" : "text-gray-700"}`}>{block.text}</p> : null}
      {block.formula ? (
        <pre className={`mt-4 p-4 rounded-lg border text-sm overflow-x-auto ${block.dark ? "bg-white/10 border-white/20 text-white" : "bg-[#F8FAFC] border-gray-200 text-[#0B3A63]"}`}>{block.formula}</pre>
      ) : null}
      {block.items ? (
        <ul className={`space-y-2 text-sm leading-relaxed max-w-4xl ${block.dark ? "text-white/90" : "text-gray-700"}`}>{block.items.map((item) => <li key={item}>• {item}</li>)}</ul>
      ) : null}
    </div>
  );
}

export default function ProductMethodikPageDE() {
  return (
    <section id="methodology" data-section="methodology" className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Spend-based Methodik CO₂e KMU | Certif-Scope",
            url: "https://www.certif-scope.com/de/product/methodik/",
            inLanguage: "de-DE",
            description:
              "Methodik der indikativen CO₂e-Bescheinigung: Ausgabenbasis, Emissionsfaktoren, Berechnungslogik, Versionierung, Datenschutz und Grenzen.",
            isPartOf: { "@type": "WebSite", name: "Certif-Scope", url: "https://www.certif-scope.com/de/" },
          }),
        }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">CO₂e-Bescheinigung — Methodik</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">Spend-based Methodik der CO₂e-Bescheinigung</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Diese Seite erklärt, wie Certif-Scope ein indikatives CO₂e-Ergebnis aus deklarierten Ausgaben schätzt: spend-based Modell, Emissionsfaktoren, Berechnungslogik, Update-Regeln, Datenschutz und Nutzungsgrenzen.
        </p>
        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <nav aria-label="Methodik-Abschnitte" className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          {toc.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="hover:text-[#1FB6C1] transition">{label}</a></li>
          ))}
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto space-y-24">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 border-b border-gray-200 pb-24">
            <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed max-w-4xl mt-6">{section.intro}</p>
            </div>
            {section.blocks.map((block) => <MethodBlock key={`${section.id}-${block.title}`} block={block} />)}
            <BackToTop />
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-3 justify-center">
        <Link href="/de/product/" className={backClass}>Zurück zur Produktübersicht</Link>
        <Link href="/de/generate/" className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#1FB6C1] text-white hover:bg-[#19AAB4] transition-colors font-semibold">CO₂e-Bescheinigung erstellen</Link>
        <Link href="/de/pricing/" className={backClass}>Preis ansehen</Link>
      </div>
    </section>
  );
}
