import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spend-based CO₂e-Methodik für KMU | Certif-Scope Deutschland",
  description:
    "Methodik von Certif-Scope: indikative CO₂e-Schätzung aus Ausgaben, Emissionsfaktoren, Berechnungslogik, Grenzen, Datenschutz und nicht regulatorischer Rahmen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/methodik/",
    languages: {
      de: "https://www.certif-scope.com/de/methodik/",
    },
  },
  openGraph: {
    title: "Spend-based CO₂e-Methodik für KMU | Certif-Scope Deutschland",
    description:
      "Spend-based Methode, Emissionsfaktoren, indikative Berechnung, Grenzen und Datenschutz der Certif-Scope CO₂e-Bescheinigung.",
    url: "https://www.certif-scope.com/de/methodik/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

type Tone = "white" | "light" | "dark";

type MethodBlock = {
  title: string;
  text?: string[];
  items?: string[];
  formula?: string;
  tone?: Tone;
};

type MethodSection = {
  id: string;
  title: string;
  intro: string;
  blocks: MethodBlock[];
};

const sections: MethodSection[] = [
  {
    id: "s1",
    title: "1. Umfang und Ziel der Methodik",
    intro:
      "Dieser Abschnitt definiert den genauen Umfang, die Grenzen und den institutionellen Zweck der Certif-Scope-Methodik. Die Methode soll korrekt eingeordnet werden, Fehlverwendung vermeiden und eine reproduzierbare, indikative CO₂e-Schätzung auf Basis finanzieller Ausgaben ermöglichen.",
    blocks: [
      {
        title: "Definierter Umfang",
        tone: "light",
        items: [
          "Umrechnung jährlicher Ausgaben in indikative CO₂e-Schätzungen.",
          "Nutzung kategoriebezogener Emissionsfaktoren in kg CO₂e / €.",
          "Orientierung am spend-based Ansatz des GHG Protocol Corporate Standard.",
          "Deterministische Ergebnisse durch versionierte Emissionsfaktoren.",
          "Institutionelle Anwendungsfälle mit schneller Dokumentation und nicht bindenden Indikatoren.",
        ],
      },
      {
        title: "Berechnungskette",
        text: [
          "Finanzielle Eingaben in EUR werden Kategorien zugeordnet, mit den passenden Emissionsfaktoren verbunden, deterministisch berechnet und als CO₂e-Ergebnis mit Versionsmetadaten dokumentiert.",
        ],
      },
      {
        title: "Außerhalb des Umfangs",
        items: [
          "Keine physischen Aktivitätsdaten wie kWh, Kilometer, Tonnen, Materialmassen oder Kraftstoffmengen.",
          "Keine Lebenszyklusanalyse und keine cradle-to-grave-Bewertung.",
          "Keine lieferantenspezifischen Primärdaten und keine fachliche Bestätigung solcher Daten.",
          "Keine Berechnung operativer Scope-1- oder Scope-2-Emissionen.",
          "Keine Gleichstellung mit CSRD- oder ESRS-Berichterstattung.",
        ],
      },
      {
        title: "Methodischer Kontext",
        tone: "dark",
        text: [
          "Die Methodik nutzt etablierte Referenzen, ohne sie zu ersetzen. Certif-Scope bleibt auf eine indikative spend-based Umrechnung begrenzt.",
        ],
        items: [
          "GHG Protocol Corporate Standard — indirekte Emissionen im Scope-3-spend-based Kontext.",
          "ISO 14064-1 — Prinzipien wie Relevanz, Konsistenz und Transparenz.",
          "EEIO-Logik — Environmentally Extended Input-Output als wirtschaftlicher Modellkontext.",
        ],
      },
      {
        title: "Eingaben und Versionierung",
        text: [
          "Alle Eingaben müssen numerisch, nicht negativ und in Euro angegeben sein. Fehlende Werte werden als null behandelt. Jede Berechnung enthält die semantische Version des Emissionsfaktor-Datensatzes, damit das Ergebnis später nachvollzogen werden kann.",
        ],
      },
      {
        title: "Institutioneller Zweck",
        text: [
          "Die Methodik ist für Situationen gedacht, in denen Institutionen schnelle, standardisierte und nachvollziehbare Indikatoren benötigen, aber keine physischen Aktivitätsdaten vorliegen.",
        ],
        items: [
          "Einkaufs-Screening und Lieferanten-Onboarding.",
          "Bank- oder Versicherungsunterlagen mit indikativer CO₂e-Einordnung.",
          "Dokumentation für einfache Förder-, Beschaffungs- oder Due-Diligence-Anfragen.",
          "Portfolioanalysen, wenn nur Finanzdaten verfügbar sind.",
        ],
      },
    ],
  },
  {
    id: "s2",
    title: "2. Theoretische Grundlagen",
    intro:
      "Dieser Abschnitt beschreibt die theoretische Grundlage der ausgabenbasierten Methodik. Er erklärt, warum das Modell mathematisch nachvollziehbar ist, woher der Ansatz stammt und wie er in wissenschaftliche und wirtschaftliche Rahmen eingeordnet wird.",
    blocks: [
      {
        title: "Ursprung des ausgabenbasierten Modells",
        text: [
          "Der spend-based Ansatz geht auf umweltbezogen erweiterte Input-Output-Modelle zurück. Diese verbinden wirtschaftliche Einkaufsströme mit sektoralen Umweltwirkungen aus volkswirtschaftlichen Konten und Emissionsinventaren.",
        ],
        items: [
          "Input-Output-Tabellen beschreiben Einkaufsflüsse zwischen Wirtschaftssektoren.",
          "Umweltkonten ordnen Emissionen der gesamten Aktivität eines Sektors zu.",
          "Die statistische Kopplung ermöglicht durchschnittliche Emissionsintensitäten je Sektor.",
        ],
      },
      {
        title: "Mathematische Grundlage",
        tone: "light",
        text: [
          "Das Modell beruht auf einer Proportionalitätsannahme zwischen finanzieller Ausgabe und zugehöriger Emissionsintensität. Es nutzt eine lineare, deterministische Formel.",
        ],
        formula:
          "Emissionen (kg CO₂e) = Ausgaben (€) × Emissionsfaktor (kg CO₂e / €)",
        items: [
          "Keine Annahme zum operativen Verhalten des Unternehmens.",
          "Keine Lieferantendifferenzierung.",
          "Keine technologische Korrektur oder Effizienzanpassung.",
        ],
      },
      {
        title: "Warum ein lineares Modell verwendet wird",
        items: [
          "Es vermeidet spekulative oder prädiktive Modellierung.",
          "Es macht Ergebnisse über Institutionen hinweg reproduzierbar.",
          "Es benötigt keine primären operativen Lieferantendaten.",
          "Es ist mathematisch transparent und dokumentarisch nachvollziehbar.",
          "Es passt zum spend-based Vorgehen, wenn physische Daten fehlen.",
        ],
      },
      {
        title: "Wissenschaftlicher und methodischer Kontext",
        tone: "dark",
        text: [
          "Die Methode steht im Kontext etablierter wissenschaftlicher und normativer Referenzen. Diese dienen als Bezugspunkte, nicht als Aussage, dass Certif-Scope deren vollständigen Umfang erfüllt.",
        ],
        items: [
          "GHG Protocol — Leitlinien für Scope-3-Schätzungen auf Ausgabenbasis.",
          "ISO 14064-1 — Prinzipien zu Relevanz, Konsistenz und Transparenz.",
          "Eurostat Supply-Use-Tabellen — Struktur intersektoraler Finanzflüsse.",
          "Nationale Umweltkonten — sektorale Zuordnung von CO₂e-Emissionen.",
        ],
      },
      {
        title: "Geeignete Nutzungssituationen",
        text: [
          "Der Ansatz eignet sich, wenn physische oder aktivitätsbezogene Daten nicht vorliegen, aber eine schnelle, standardisierte und indikative CO₂e-Dokumentation benötigt wird.",
        ],
        items: [
          "Lieferanten können keine physischen Aktivitätsdaten bereitstellen.",
          "Große Portfolios benötigen eine schnelle Vorabschätzung.",
          "Viele Dienstleister verfügen über keine eigene Umweltberichterstattung.",
          "Budgetdaten sind vorhanden, operative Umweltdaten aber nicht.",
        ],
      },
    ],
  },
  {
    id: "s3",
    title: "3. Mathematisches Modell",
    intro:
      "Dieser Abschnitt beschreibt die mathematische Struktur des spend-based Berechnungsmodells. Er hält Variablen, Rechenregeln und Verarbeitungsvorgaben so fest, dass Ergebnisse deterministisch und reproduzierbar bleiben.",
    blocks: [
      {
        title: "Grundformel",
        text: [
          "Certif-Scope nutzt ein strikt lineares Modell. Innerhalb einer Kategorie sind Emissionen proportional zur finanziellen Ausgabe.",
        ],
        formula: "Eᵢ = Sᵢ × Fᵢ",
        items: [
          "Eᵢ = Emissionen der Kategorie i in kg CO₂e.",
          "Sᵢ = Ausgaben der Kategorie i in EUR.",
          "Fᵢ = Emissionsfaktor der Kategorie i in kg CO₂e / EUR.",
        ],
      },
      {
        title: "Gesamtergebnis",
        tone: "light",
        text: [
          "Das Gesamtergebnis entsteht durch Summierung aller Kategorieergebnisse.",
        ],
        formula: "Eₜₒₜₐₗ = Σ (Sᵢ × Fᵢ)",
      },
      {
        title: "Deterministische Eigenschaften",
        items: [
          "Identische Eingaben erzeugen identische Ergebnisse.",
          "Keine probabilistischen oder prädiktiven Annahmen.",
          "Kein Regressionsmodell und keine Anpassungskurve.",
          "Keine versteckten Variablen oder Korrekturkoeffizienten.",
          "Keine Normalisierung nach Lieferant oder Region.",
        ],
      },
      {
        title: "Regeln je Kategorie",
        text: [
          "Jede Kategorie wird unabhängig verarbeitet. Das verhindert stille Umverteilung und hält den Rechenweg nachvollziehbar.",
        ],
        items: [
          "Keine Umverteilung zwischen Kategorien.",
          "Keine Gewichtung nach Lieferantentyp.",
          "Keine sektorale Substitution.",
          "Keine Zwischenaggregation vor der finalen Summe.",
        ],
      },
      {
        title: "Keine Extrapolation",
        tone: "dark",
        text: [
          "Certif-Scope extrapoliert fehlende Werte nicht. Wenn eine Ausgabenkategorie nicht angegeben wird, trägt sie mit null zum Ergebnis bei. Diese Regel verhindert künstliche Erhöhungen oder Annahmen aus unvollständigen Informationen.",
        ],
      },
      {
        title: "Vermeidung von Doppelzählung",
        text: [
          "Eine Ausgabe kann nur einer Kategorie zugeordnet werden. Überschneidungen, Mehrfachzählungen und anteilige Mehrfachzuweisungen werden ausgeschlossen.",
        ],
        items: [
          "Jeder Euro wird nur einmal berücksichtigt.",
          "Kategorien dürfen sich nicht überschneiden.",
          "Es gibt keine Aufteilung einer Ausgabe auf mehrere Faktoren.",
        ],
      },
    ],
  },
  {
    id: "s4",
    title: "4. Kategoriedefinitionen und Grenzen",
    intro:
      "Dieser Abschnitt definiert die wirtschaftlichen Kategorien der Methode. Jede Kategorie hat einen festen Umfang, eine feste Zuordnungsregel und einen klaren Emissionsfaktor-Kontext.",
    blocks: [
      {
        title: "Energie und Versorgungsleistungen",
        text: [
          "Umfasst Strom, Wärme, Kühlung, Wasser und zugehörige Dienstleistungsverträge. Direkt in Fahrzeugen genutzte Kraftstoffe werden nicht hier erfasst.",
        ],
      },
      {
        title: "Bürobetrieb",
        tone: "light",
        text: [
          "Umfasst Bürobedarf, Möbel, kleinere Ausrüstung und Verbrauchsmaterialien. IT-Hardware und digitale Dienste sind getrennt ausgewiesen.",
        ],
      },
      {
        title: "IT-Ausstattung und digitale Dienste",
        text: [
          "Umfasst Hardware, Softwarelizenzen, Cloud-Dienste und digitale Abonnements. Telekommunikationsverträge werden bei Kommunikationsdiensten eingeordnet, wenn das Kategoriemodell dies vorsieht.",
        ],
      },
      {
        title: "Transport und Logistik",
        tone: "light",
        text: [
          "Umfasst Fracht, Lieferungen, Kurierdienste und transportbezogene Geschäftsreisen. Pendelverkehr von Mitarbeitenden liegt außerhalb des spend-based Modells dieser Bescheinigung.",
        ],
      },
      {
        title: "Professionelle Dienstleistungen",
        text: [
          "Umfasst Beratung, Rechtsdienstleistungen, Buchhaltung, Schulungen und Outsourcing. Ausgelagerte Fertigung wird nicht automatisch darunter subsumiert.",
        ],
      },
      {
        title: "Marketing und Medieneinkauf",
        tone: "light",
        text: [
          "Umfasst Werbung, Medienflächen, Sponsoring und Druckmaterialien. Eventlogistik wird je nach Funktion anderen Kategorien zugeordnet.",
        ],
      },
      {
        title: "Bau, Arbeiten und Instandhaltung",
        text: [
          "Umfasst Renovierung, Reparaturen, Baumaterialien und Wartungsverträge. Der Energieverbrauch von Gebäuden wird davon getrennt betrachtet.",
        ],
      },
      {
        title: "Sonstige gekaufte Waren und Dienstleistungen",
        tone: "light",
        text: [
          "Umfasst Produkte und Dienstleistungen, die nicht eindeutiger an anderer Stelle eingeordnet sind. Elemente, die explizit einer anderen Kategorie zugehören, bleiben dort.",
        ],
      },
      {
        title: "Nicht enthaltene Vorgänge",
        items: [
          "Keine direkten Scope-1-Emissionen aus Verbrennung, interner Flotte oder Vor-Ort-Prozessen.",
          "Keine market-based Scope-2-Stromberechnung.",
          "Keine Zuordnung von Pendelwegen.",
          "Keine lieferantenspezifische Emissionsanpassung.",
          "Keine Erweiterung zu einer Lebenszyklus-Systemgrenze.",
        ],
      },
      {
        title: "Deterministische Zuordnungsregeln",
        tone: "dark",
        items: [
          "Eine Ausgabe gehört genau zu einer Kategorie.",
          "Keine Umverteilung zwischen Kategorien.",
          "Keine proportionale Aufteilung für Mehrzweckausgaben.",
          "Die Zuordnung folgt der wirtschaftlichen Funktion, nicht dem Namen des Lieferanten.",
          "Dritte können dieselbe Kategorisierung aus denselben Eingaben nachvollziehen.",
        ],
      },
    ],
  },
  {
    id: "s5",
    title: "5. Normalisierungsregeln für Eingaben",
    intro:
      "Dieser Abschnitt beschreibt die Regeln, die vor der CO₂e-Berechnung auf deklarierte Ausgaben angewendet werden. Ziel sind strukturierte, numerische Eingaben und deterministische Ergebnisse ohne stille Korrekturen.",
    blocks: [
      {
        title: "Erforderliche Eingabestruktur",
        items: [
          "Jährliche Ausgabe je Kategorie.",
          "Nur numerische Werte, als ganze Zahl oder Dezimalwert.",
          "Währung ausschließlich Euro.",
          "Ein Wert gehört genau zu einer Kategorie.",
          "Nicht angegebene Kategorien zählen als null.",
        ],
      },
      {
        title: "Strikte Validierungsregeln",
        tone: "light",
        items: [
          "Negative Werte werden zurückgewiesen.",
          "Nicht numerische Zeichen werden zurückgewiesen.",
          "Leere Felder werden als null behandelt.",
          "Infinity und NaN stoppen die Berechnung.",
          "Gemischte Währungsformate werden zurückgewiesen.",
          "Tausendertrennzeichen werden nicht als fachliche Information interpretiert.",
        ],
        text: [
          "Diese Regeln sorgen dafür, dass dieselben Eingangskontrollen später ohne implizite Annahmen nachvollzogen werden können.",
        ],
      },
      {
        title: "Keine Inferenz und keine Schätzung fehlender Werte",
        text: [
          "Certif-Scope versucht nicht, fehlende Werte zu erraten oder aus anderen Angaben abzuleiten. Es werden keine KI-Mechanismen, kein Machine Learning, kein statistisches Auffüllen und keine historische Extrapolation genutzt.",
        ],
        items: [
          "Keine Annahmen auf Basis von Lieferanten.",
          "Keine sektoralen Durchschnittswerte für fehlende Eingaben.",
          "Keine Interpolation oder Kurvenanpassung.",
          "Keine Extrapolation aus Vorjahren.",
        ],
      },
      {
        title: "Reproduzierbare Eingangskontrolle",
        tone: "dark",
        items: [
          "Die Validierung der Eingaben kann Schritt für Schritt nachvollzogen werden.",
          "Keine versteckte Transformation und keine stille Korrektur.",
          "Keine implizite Einheitenumrechnung.",
          "Deterministisches Verhalten zwischen dokumentierten Versionen.",
        ],
        text: [
          "Die Regeln passen zum spend-based Ansatz und zu einer institutionellen Dokumentation, ohne daraus eine regulatorische Prüfung zu machen.",
        ],
      },
    ],
  },
  {
    id: "s6",
    title: "6. Transformationskette",
    intro:
      "Dieser Abschnitt beschreibt die lineare Verarbeitungskette für validierte Eingaben. Keine Inferenz, statistische Modellierung oder automatische Umverteilung greift in den Ablauf ein.",
    blocks: [
      {
        title: "Linearer Verarbeitungsfluss",
        items: [
          "1. Erfassung der Eingaben: Finanzbeträge werden je Kategorie angegeben.",
          "2. Strukturelle Validierung: Format, Präzision und zulässige Kategorie werden geprüft.",
          "3. Zuordnung zu Kategorien: Validierte Werte werden mit einer festen internen Klassifikation verbunden.",
          "4. Zuordnung der Emissionsfaktoren: Jede Kategorie nutzt genau einen Faktor aus einer bestimmten Version.",
          "5. Umrechnung: Ausgabe je Kategorie × Emissionsfaktor.",
          "6. Aggregation: Kategorieergebnisse werden zum Gesamtwert addiert.",
          "7. Ausgabeformat: Werte werden in ein stabiles PDF-Dokument mit Metadaten eingesetzt.",
        ],
      },
      {
        title: "Beschreibung der Schritte",
        tone: "light",
        items: [
          "Eingaben werden nur akzeptiert, wenn sie vorab definierte Strukturregeln erfüllen.",
          "Die strukturelle Validierung stellt nicht negative numerische Werte und eindeutige Kategorien sicher.",
          "Die Zuordnung nutzt feste interne Kategorien ohne automatische Erweiterung.",
          "Jede Kategorie erhält einen Faktor aus einem versionierten Datensatz.",
          "Die Umrechnung bleibt eine deterministische Multiplikation.",
          "Die Aggregation ist eine transparente Addition ohne Gewichtung.",
          "Das Ausgabeformat nutzt vordefinierte Felder und Metadaten.",
        ],
      },
      {
        title: "Ausgeschlossene Transformationen",
        items: [
          "Keine Vorhersage oder prädiktive Modellierung.",
          "Keine Interpolation fehlender Daten.",
          "Keine lieferantenbezogene Emissionsschätzung.",
          "Keine Währungsumrechnung.",
          "Keine mehrjährige Skalierung.",
          "Keine Anpassung durch Machine Learning.",
          "Keine automatische Reklassifizierung oder Umverteilung.",
        ],
      },
      {
        title: "Begründung der Transformationskette",
        tone: "dark",
        text: [
          "Eine deterministische, lineare Kette sorgt dafür, dass jede Bescheinigung anhand der Eingaben, Kategoriedefinitionen und Emissionsfaktor-Version reproduziert werden kann. Das reduziert Mehrdeutigkeit bei institutioneller Nachvollziehung.",
        ],
      },
    ],
  },
  {
    id: "s7",
    title: "7. Zuordnung der Emissionsfaktoren",
    intro:
      "Dieser Abschnitt definiert, wie jeder finanziellen Kategorie ein eindeutiger Emissionsfaktor aus einem versionierten Datensatz zugeordnet wird. Der Prozess bleibt regelbasiert und reproduzierbar.",
    blocks: [
      {
        title: "Zuordnungsprinzipien",
        items: [
          "Jede wirtschaftliche Kategorie entspricht genau einem internen Klassifikationseintrag.",
          "Jeder interne Klassifikationseintrag entspricht genau einem Emissionsfaktor.",
          "Jeder Emissionsfaktor ist mit einer Datensatzversion verbunden.",
          "Dynamisches Remapping, Ausweichkategorien und automatische Umverteilung sind ausgeschlossen.",
        ],
      },
      {
        title: "Linearer Zuordnungsprozess",
        tone: "light",
        items: [
          "1. Die Eingabekategorie wird einer festen internen Tabellenzeile zugeordnet.",
          "2. Das System identifiziert die aktive Datensatzversion für diese Kategorie.",
          "3. Der Emissionsfaktor wird aus einem statischen, versionierten Eintrag gelesen.",
          "4. Der Faktor wird auf Vorhandensein und numerische Gültigkeit geprüft.",
          "5. Der Faktor wird als unveränderliche Referenz an die Kategorie gebunden.",
        ],
      },
      {
        title: "Regeln zur Versionsbindung",
        text: [
          "Die Versionsbindung stellt sicher, dass eine ausgestellte Bescheinigung später mit derselben Faktorversion nachvollzogen werden kann, auch wenn spätere Datensätze veröffentlicht werden.",
        ],
        items: [
          "Die Faktorversion wird zum Zeitpunkt der Berechnung festgehalten.",
          "Neue Datensatzversionen ändern frühere Bescheinigungen nicht.",
          "Historische Versionen bleiben referenzierbar.",
          "Jede neue Faktorversion erhält eine eigene Versionskennung.",
        ],
      },
      {
        title: "Ausgeschlossene Zuordnungsverhalten",
        items: [
          "Keine Schätzung anhand der Lieferantenidentität.",
          "Keine gewichteten Durchschnittsfaktoren oder Mischfaktoren.",
          "Keine proportionale Anpassung.",
          "Keine prädiktive Modellierung.",
          "Keine Ersatzwerte bei unvollständiger Kategorie.",
          "Keine Zusammenlegung benachbarter Kategorien.",
          "Keine Inferenz zwischen Kategorien.",
        ],
      },
      {
        title: "Warum die strikte Zuordnung nötig ist",
        tone: "dark",
        text: [
          "Eine klare Eins-zu-eins-Zuordnung zwischen Kategorie und Emissionsfaktor reduziert Mehrdeutigkeit und verhindert methodische Drift. Institutionen können Ergebnisse konsistent nachvollziehen, ohne Zugriff auf interne Systeme zu benötigen.",
        ],
      },
    ],
  },
  {
    id: "s8",
    title: "8. Berechnungsfluss und Formeln",
    intro:
      "Dieser Abschnitt beschreibt den internen Berechnungsfluss von Finanzdaten zu CO₂e-Schätzungen. Die Verarbeitung beruht auf linearen Operationen, validierten Eingaben, isolierten Kategorien, Faktorzuordnung und finaler Aggregation.",
    blocks: [
      {
        title: "Lineare Sequenz ohne Verzweigung",
        items: [
          "Eingabekategorien werden nach erlaubter Struktur und numerischem Typ validiert.",
          "Jede Kategorie wird isoliert und unabhängig verarbeitet.",
          "Der Emissionsfaktor wird aus einem versionierten Datensatz abgerufen.",
          "Der Faktor wird direkt mit der Ausgabenhöhe multipliziert.",
          "Die Einzelwerte werden zum Gesamtergebnis addiert.",
        ],
      },
      {
        title: "Zentrale spend-based Formel",
        tone: "light",
        text: [
          "Für jede Kategorie wird eine direkte Multiplikation angewendet.",
        ],
        formula:
          "Emissionen(Kategorie) = Ausgabe(Kategorie) × Emissionsfaktor(Kategorie)",
        items: [
          "Kein Gewichtungsfaktor.",
          "Keine Elastizitätsannahme.",
          "Kein lieferantenspezifischer Modifikator.",
        ],
      },
      {
        title: "Validierungsregeln für Eingaben",
        items: [
          "Werte müssen numerisch und nicht negativ sein.",
          "Nicht unterstützte Kategorien werden zurückgewiesen, nicht neu zugeordnet.",
          "Nullwerte werden normal verarbeitet und tragen null bei.",
          "Keine Inferenz aus partiellen oder fehlenden Feldern.",
          "Keine automatische Umverteilung zwischen Kategorien.",
        ],
      },
      {
        title: "Aggregationslogik",
        tone: "light",
        text: [
          "Nach der Berechnung je Kategorie entsteht der Gesamtwert durch eine einzige arithmetische Summe.",
        ],
        formula: "Gesamtemissionen = Σ [ Ausgabe(i) × Emissionsfaktor(i) ]",
        items: [
          "Keine Normalisierung.",
          "Keine Skalierung.",
          "Keine Abschreibung.",
          "Keine Trendanalyse.",
        ],
      },
      {
        title: "Ausgeschlossene Rechenverhalten",
        items: [
          "Keine prädiktive Modellierung.",
          "Keine Rekonstruktion von Zeitreihen.",
          "Keine gewichteten Mittelwerte oder Faktor-Mischungen.",
          "Keine lieferantenspezifische Anpassung.",
          "Keine sektoralen Trendkoeffizienten.",
          "Keine externe Datenanreicherung.",
        ],
      },
      {
        title: "Warum dieses Modell erforderlich ist",
        tone: "dark",
        text: [
          "Ein strikt lineares und deterministisches Modell macht die Bescheinigung jederzeit anhand der Eingabekategorien und der Faktorversion nachvollziehbar. Dadurch entstehen keine dynamischen Annahmen, die später nicht mehr reproduzierbar wären.",
        ],
      },
    ],
  },
  {
    id: "s9",
    title: "9. Interne Kontrollen und Rechengrenzen",
    intro:
      "Dieser Abschnitt beschreibt interne Mechanismen, die sicherstellen, dass der Rechenprozess deterministisch, valide und strukturell konsistent bleibt. Kontrollen greifen vor, während und nach der Berechnung.",
    blocks: [
      {
        title: "Kontrollen auf Eingabeebene",
        items: [
          "Nicht numerische Werte werden vor der Verarbeitung zurückgewiesen.",
          "Negative Werte sind nicht zulässig und lösen eine Validierungsmeldung aus.",
          "Nicht gelistete Kategorien werden nicht angenähert.",
          "Leere Felder lösen keine Inferenz und keine Substitution aus.",
          "Alle Eingaben werden gegen vordefinierte Kategoriekennungen validiert.",
        ],
      },
      {
        title: "Schutzregeln während der Berechnung",
        tone: "light",
        text: [
          "Die Schutzregeln erhalten die strukturelle Stabilität und eine strikt deterministische Ausführung.",
        ],
        items: [
          "Jede Kategorie wird isoliert verarbeitet.",
          "Die Version der Emissionsfaktoren wird vor Beginn der Berechnung festgehalten.",
          "Keine iterative Neuberechnung und keine Optimierung.",
          "Keine dynamische Gewichtung.",
          "Zwischenergebnisse werden nicht vor der finalen Ausgabe gerundet.",
        ],
      },
      {
        title: "Validierung nach der Verarbeitung",
        items: [
          "Das Gesamtergebnis wird erneut gegen die Summe der Kategorieergebnisse geprüft.",
          "Kategorieergebnisse und finaler Gesamtwert müssen rechnerisch zusammenpassen.",
          "Strukturelle Abweichungen stoppen den Export.",
          "Versionskennungen für Faktoren und Logik werden in das Dokument aufgenommen.",
        ],
      },
      {
        title: "Reproduzierbarkeit",
        tone: "dark",
        text: [
          "Die Berechnung nutzt keine externen Dienste, keine Echtzeitabfragen und keine dynamischen Anpassungen. Dieselben Eingaben und dieselbe Faktorversion führen deshalb zum gleichen Ergebnis.",
        ],
      },
      {
        title: "Ausgeschlossene Verhaltensweisen",
        items: [
          "Automatische Aktualisierung von Emissionsfaktoren während der Berechnung.",
          "Schätz-, Prognose- oder Extrapolationsalgorithmen.",
          "Kategorieersatz oder extrapoliertes Mapping.",
          "Probabilistische Modelle oder Optimierungsmodelle.",
          "Datenanreicherung durch externe Quellen oder Echtzeitdaten.",
        ],
      },
    ],
  },
  {
    id: "s10",
    title: "10. Versionierung der Emissionsfaktoren und Aktualisierungsmodell",
    intro:
      "Dieser Abschnitt erklärt, wie Emissionsfaktoren versioniert, aktualisiert, stabilisiert und validiert werden. Neue Faktorversionen ändern keine bereits ausgestellten Bescheinigungen und werden nicht still angewendet.",
    blocks: [
      {
        title: "Versionsstruktur",
        items: [
          "Die Versionierung folgt einer festen MAJOR.MINOR.PATCH-Hierarchie.",
          "MAJOR-Versionen stehen für Änderungen des methodischen Umfangs.",
          "MINOR-Versionen stehen für Aktualisierungen der Emissionsfaktor-Datensätze.",
          "PATCH-Versionen decken kleinere Korrekturen oder Klarstellungen ab.",
        ],
      },
      {
        title: "Auslöser für Aktualisierungen",
        tone: "light",
        text: [
          "Aktualisierungen werden nur unter kontrollierten und transparenten Bedingungen eingeführt.",
        ],
        items: [
          "Neue veröffentlichte Durchschnittswerte von ADEME oder DEFRA.",
          "Überarbeitete EEIO-bezogene Datensätze.",
          "Dokumentierte methodische Präzisierungen im Kontext von ESRS oder GHG Protocol.",
          "Korrektur dokumentierter Inkonsistenzen.",
        ],
      },
      {
        title: "Rückwirkungsfreiheit",
        items: [
          "Bereits erzeugte Bescheinigungen bleiben mit ihren eingebetteten Metadaten nachvollziehbar.",
          "Es erfolgt keine rückwirkende Neuberechnung.",
          "Ältere Versionen bleiben über ihre Metadaten prüfbar.",
          "Jede Bescheinigung enthält die verwendete Faktorversion.",
        ],
      },
      {
        title: "Integritätskontrollen bei Aktualisierungen",
        tone: "dark",
        items: [
          "Kohärenzprüfung über alle Kategorien.",
          "Zurückweisung auffälliger Werte außerhalb definierter Schwellen.",
          "Kryptografischer Hash zur Integrität des Datensatzes.",
          "Vergleich mit der vorherigen Version.",
        ],
      },
      {
        title: "Keine Echtzeit-Substitution",
        text: [
          "Aktualisierungen werden nicht dynamisch geladen, nicht in Echtzeit abgerufen und nicht still ersetzt. Faktoren sind lokal, statisch und vor der Berechnung versioniert.",
        ],
      },
      {
        title: "Ausgeschlossene Aktualisierungen",
        items: [
          "Automatische Aufnahme externer Datensätze.",
          "Live-Aktualisierung ohne öffentliche Versionsänderung.",
          "Kategorie-Remapping oder Extrapolation aus fehlenden Daten.",
          "Dynamische Inflation oder Deflation von Faktoren anhand makroökonomischer Trends.",
        ],
      },
    ],
  },
  {
    id: "s11",
    title: "11. Aktualisierungszyklus der Datensätze und institutionelle Validierung",
    intro:
      "Dieser Abschnitt beschreibt Planung, Validierung und Veröffentlichung von Datensätzen. Ziel sind Nachvollziehbarkeit, Reproduzierbarkeit und Stabilität für institutionelle Dokumentationsprozesse.",
    blocks: [
      {
        title: "Aktualisierungsfrequenz",
        items: [
          "Jährliche Integration öffentlich verfügbarer Datensätze wie ADEME oder DEFRA, soweit im Faktorenset vorgesehen.",
          "Zwischenaktualisierungen nur bei dokumentierten Korrekturen.",
          "Keine automatische Aufnahme von Echtzeitquellen.",
          "Dokumentierter Veröffentlichungsrhythmus für institutionelle Nutzer.",
        ],
      },
      {
        title: "Validierungskette",
        tone: "light",
        text: [
          "Jede Datensatzrevision folgt einem mehrstufigen Prüfprozess, damit das Ergebnis deterministisch und nachvollziehbar bleibt.",
        ],
        items: [
          "Kohärenzprüfung über alle Emissionskategorien.",
          "Vergleich mit der vorherigen Version zur Erkennung von Anomalien.",
          "Zurückweisung auffälliger Werte außerhalb definierter Schwellen.",
          "Integritäts-Hash des finalen Datensatzes.",
        ],
      },
      {
        title: "Institutionelle Kompatibilität",
        items: [
          "Stabilität für Einkaufs-, Bank- und Versicherungsprozesse.",
          "Keine Formatänderung ohne entsprechende MINOR- oder MAJOR-Version.",
          "Archivierung früherer Versionen für rückblickende Nachvollziehung.",
          "Unabhängige Integritätskontrolle über den Hash des Datensatzes.",
        ],
      },
      {
        title: "Veröffentlichungspolitik",
        tone: "dark",
        items: [
          "Jeder neue Datensatz erhält eine semantische Version.",
          "Änderungen werden in einem Änderungsprotokoll beschrieben.",
          "Vorherige Versionen bleiben referenzierbar.",
          "Frühere Datensätze werden nicht überschrieben.",
        ],
      },
      {
        title: "Ausgeschlossene Aktualisierungsszenarien",
        items: [
          "Stille Aktualisierungen ohne öffentliche Versionsänderung.",
          "Rückwirkender Ersatz historischer Werte.",
          "Zusammenführung von Datensätzen ohne formale Governance.",
          "Echtzeitströme volatiler Daten.",
        ],
      },
    ],
  },
  {
    id: "s12",
    title: "12. Daten, Datenschutz und DSGVO-Rahmen",
    intro:
      "Dieser Abschnitt beschreibt Datenverarbeitung, Rechtsgrundlagen, Minimierung und Schutzmechanismen von Certif-Scope. Die Architektur folgt dem Prinzip privacy-by-design und vermeidet dauerhaftes Speichern detaillierter Finanzdaten durch Certif-Scope.",
    blocks: [
      {
        title: "Anwendbare Rechtsgrundlagen",
        items: [
          "Die Verarbeitung kann zur Vertragserfüllung erfolgen, soweit sie zur Erstellung der angeforderten Bescheinigung erforderlich ist.",
          "Ein berechtigtes Interesse kann für notwendige Sicherheitskontrollen gelten, etwa Missbrauchsprävention.",
          "Es werden keine besonderen Kategorien personenbezogener Daten verarbeitet.",
          "Kein Profiling natürlicher Personen und kein personenbezogenes Scoring.",
        ],
      },
      {
        title: "Minimierungsprinzipien",
        tone: "light",
        text: [
          "Certif-Scope verarbeitet nur Informationen, die für die Erstellung der Bescheinigung erforderlich sind. Detaillierte Ausgabendaten werden nicht als dauerhafte Finanzhistorie gespeichert.",
        ],
        items: [
          "Keine Nutzeridentität erforderlich, um den CO₂e-Indikator zu berechnen.",
          "Keine dauerhafte Speicherung direkt identifizierbarer personenbezogener Angaben für die Berechnung.",
          "Verarbeitung der Eingaben nur für den Erstellungsvorgang.",
          "Kein Verhaltens-Tracking und keine Werbe-Analytics.",
        ],
      },
      {
        title: "Cookies und Tracking",
        items: [
          "Keine Analytics- oder Profiling-Cookies.",
          "Keine Werbepixel und keine verhaltensbezogenen Marketing-Skripte.",
          "Etwaige Cookies sind funktional und nicht werblich.",
          "Keine Übertragung an externe Marketingdienste.",
        ],
      },
      {
        title: "Speicherung und Löschung",
        tone: "dark",
        items: [
          "Keine dauerhafte serverseitige Speicherung detaillierter finanzieller Eingabedaten durch Certif-Scope.",
          "Keine Logs mit detaillierten Nutzereingaben.",
          "Keine Backups detaillierter Eingabewerte als Finanzhistorie.",
          "Eingaben werden nach Abschluss des Erstellungszyklus nicht als dauerhaftes Berechnungsprotokoll vorgehalten.",
        ],
      },
      {
        title: "Drittzugriff",
        text: [
          "Drittanbieter dürfen nicht so eingesetzt werden, dass sie detaillierte Finanzdaten für eigene Zwecke auswerten. Soweit technische Dienstleister erforderlich sind, bleibt der Zweck auf den Betrieb und die Erstellung des Dokuments beschränkt.",
        ],
        items: [
          "Kein Teilen mit Werbenetzwerken.",
          "Kein Marketing-Tracking.",
          "Keine Nutzung detaillierter Finanzdaten durch Dritte für Profiling.",
          "Keine externe Speicherung der Eingaben als Kundendatenbank.",
        ],
      },
      {
        title: "Institutionelle Kompatibilität",
        items: [
          "Datensparsame Verarbeitung für Einkaufs-, Bank- und Versicherungsunterlagen.",
          "Reduzierte personenbezogene Daten im Berechnungsprozess.",
          "Geeignet für einfache Screening-Workflows mit minimalen Eingaben.",
          "Dokumentarische Nutzung ohne zusätzliche personenbezogene Offenlegung.",
        ],
      },
    ],
  },
];

function blockClass(tone: Tone = "white") {
  if (tone === "dark") {
    return "mt-16 rounded-2xl bg-[#0B3A63] p-10 text-white shadow-md";
  }

  if (tone === "light") {
    return "mt-16 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-10 shadow-sm";
  }

  return "mt-16 rounded-2xl border border-gray-200 bg-white p-10 shadow-sm";
}

function textClass(tone: Tone = "white") {
  return tone === "dark"
    ? "text-sm leading-relaxed text-white/90"
    : "text-sm leading-relaxed text-gray-700";
}

function MethodBlockCard({ block }: { block: MethodBlock }) {
  const tone = block.tone ?? "white";

  return (
    <div className={blockClass(tone)}>
      <h3
        className={
          tone === "dark"
            ? "mb-4 text-2xl font-semibold text-white"
            : "mb-4 text-2xl font-semibold text-[#0B3A63]"
        }
      >
        {block.title}
      </h3>

      {block.text?.map((paragraph) => (
        <p key={paragraph} className={`${textClass(tone)} mb-4 max-w-5xl`}>
          {paragraph}
        </p>
      ))}

      {block.formula ? (
        <pre className="mb-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 text-sm text-[#0B3A63]">
          {block.formula}
        </pre>
      ) : null}

      {block.items ? (
        <ul className={`${textClass(tone)} max-w-5xl space-y-2`}>
          {block.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function MethodSection({ section }: { section: MethodSection }) {
  return (
    <section id={section.id} className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-12 shadow-md">
        <h2 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          {section.title}
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-700">
          {section.intro}
        </p>
      </div>

      {section.blocks.map((block) => (
        <MethodBlockCard key={block.title} block={block} />
      ))}

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block rounded-md border border-[#0B3A63] px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
        >
          Zurück zur Übersicht
        </a>
      </div>
    </section>
  );
}

export default function MethodikPageDE() {
  return (
    <section
      id="methodology"
      data-section="methodology"
      className="mx-auto max-w-7xl px-6 pb-24 pt-12"
    >
      <div id="top" />

      <header className="mb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
          CO₂e-Bescheinigung — Methodik
        </p>

        <h1 className="mb-6 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          Spend-based Methodik der CO₂e-Bescheinigung
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
          Diese Seite erklärt, wie Certif-Scope aus deklarierten Ausgaben ein
          indikatives CO₂e-Ergebnis ableitet: spend-based Modell,
          Emissionsfaktoren, Berechnungslogik, Aktualisierungsregeln,
          Datenschutz und methodische Grenzen.
        </p>

        <div className="mt-10 h-[2px] w-20 bg-gray-300" />
      </header>

      <nav
        aria-label="Abschnitte der Methodik"
        className="mb-16 max-w-4xl rounded-xl border border-gray-200 bg-[#F8FAFC] p-6 shadow-sm"
      >
        <ol className="grid list-inside list-decimal grid-cols-1 gap-3 text-sm font-medium text-[#0B3A63] md:grid-cols-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="transition hover:text-[#1FB6C1]"
              >
                {section.title.replace(/^\d+\.\s/, "")}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mx-auto max-w-4xl space-y-24">
        {sections.map((section) => (
          <MethodSection key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}
