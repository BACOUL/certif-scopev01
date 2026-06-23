import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung: Grenzen und Compliance | Certif-Scope Deutschland",
  description:
    "Rechtlicher und methodischer Rahmen der indikativen CO₂e-Bescheinigung Certif-Scope: nicht regulatorisch, keine CSRD-/ESRS-Berichterstattung, kein vollständiges Treibhausgasinventar.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/grenzen-und-compliance/",
    languages: {
      de: "https://www.certif-scope.com/de/grenzen-und-compliance/",
      fr: "https://www.certif-scope.com/fr/product/compliance/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung: Grenzen und Compliance | Certif-Scope Deutschland",
    description:
      "Grenzen, erlaubte Nutzung, Verantwortlichkeiten und rechtliche Einordnung der indikativen Certif-Scope CO₂e-Bescheinigung.",
    url: "https://www.certif-scope.com/de/grenzen-und-compliance/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

type BlockTone = "light" | "white" | "dark";

type ComplianceBlock = {
  title: string;
  text?: string[];
  items?: string[];
  tone?: BlockTone;
};

type ComplianceSection = {
  id: string;
  title: string;
  intro: string;
  blocks: ComplianceBlock[];
};

const sections: ComplianceSection[] = [
  {
    id: "compliance-scope-legal-boundaries",
    title: "1. Compliance-Rahmen und rechtliche Grenzen",
    intro:
      "Dieser Abschnitt definiert den genauen rechtlichen Rahmen von Certif-Scope. Er beschreibt, was das System erzeugen darf, was ausdrücklich nicht abgedeckt ist und wie die CO₂e-Bescheinigung in ihrem methodischen Kontext einzuordnen ist.",
    blocks: [
      {
        title: "Definierter rechtlicher Umfang",
        tone: "light",
        items: [
          "Liefert indikative CO₂e-Schätzungen auf Grundlage aggregierter Ausgaben und spend-based Emissionsfaktoren.",
          "Orientiert sich methodisch an der Scope-3-spend-based-Logik des GHG Protocol.",
          "Berücksichtigt Prinzipien wie Transparenz, Konsistenz und Nachvollziehbarkeit.",
          "Erzeugt nicht bindende Indikatoren für Beschaffung, Bankunterlagen, Versicherungsunterlagen und einfache B2B-Dokumentationsanfragen.",
          "Arbeitet unabhängig von primären Lieferantendaten oder physischen Aktivitätsdaten.",
        ],
      },
      {
        title: "Einordnung in den Berechnungsrahmen",
        text: [
          "Finanzielle Ausgaben werden einer Kategorie zugeordnet, mit einem Referenzfaktor verbunden und zu einer CO₂e-Schätzung verdichtet. Das Ergebnis beschreibt keine real gemessenen operativen Emissionen, sondern eine indikative Intensität aus wirtschaftlichen Referenzen.",
        ],
      },
      {
        title: "Ausdrückliche rechtliche und methodische Ausschlüsse",
        items: [
          "Keine CSRD- oder ESRS-Berichterstattung.",
          "Keine Prüfung primärer ESRS-E1-, E2- oder E3-Daten.",
          "Keine produkt- oder lieferantenspezifische CO₂-Fußabdruckanalyse.",
          "Keine operativen Scope-1- oder Scope-2-Emissionen.",
          "Keine Lebenszyklusanalyse nach ISO 14040/44.",
          "Keine externe fachliche Prüfung, keine Assurance-Leistung und keine fachliche Stellungnahme.",
          "Keine Nutzung physischer Aktivitätsdaten wie kWh, Kilometer, Kraftstoffmengen oder operative tCO₂e.",
        ],
      },
      {
        title: "Bezug zu internationalen Rahmenwerken",
        tone: "dark",
        text: [
          "Certif-Scope nutzt anerkannte methodische Bezugspunkte für eine indikative Emissionsschätzung, ohne regulatorische Pflichten zu ersetzen.",
        ],
        items: [
          "GHG Protocol — Scope-3-spend-based-Ansatz.",
          "ISO 14064-1 — Grundsätze zu Relevanz, Konsistenz und Transparenz.",
          "ISO 14083 — Orientierung für Emissionen im Transportkontext.",
          "EEIO-Modellierung — makroökonomische Zuordnung von Emissionsintensitäten.",
          "EU-Taxonomie — nur als Kontext für indikative Einordnung, nicht als Erfüllungsnachweis.",
        ],
      },
      {
        title: "Grenzen der Verantwortung",
        text: [
          "Certif-Scope liefert ausschließlich ein indikatives Ergebnis. Die Verantwortung für Richtigkeit, Vollständigkeit und Einordnung der eingegebenen Finanzdaten liegt beim Nutzer oder bei der einreichenden Institution.",
        ],
        items: [
          "Das Ergebnis ist keine fachlich abgenommene Emissionsangabe.",
          "Es besteht keine Gleichstellung mit CSRD- oder ESRS-Unterlagen.",
          "Die finale Interpretation und Nutzung liegt bei der empfangenden oder einreichenden Institution.",
          "Rechnungen, Lieferantendaten und operative Kennzahlen werden nicht validiert.",
        ],
      },
    ],
  },
  {
    id: "regulatory-alignment-non-equivalence",
    title: "2. Regulatorische Orientierung und Erklärung der Nicht-Gleichwertigkeit",
    intro:
      "Dieser Abschnitt erklärt, wie Certif-Scope methodische Bezugspunkte nutzt und zugleich klarstellt, dass das Ergebnis keine regulatorische Berichtspflicht ersetzt. Die Orientierung dient der methodischen Kohärenz, nicht einer rechtlichen Gleichstellung.",
    blocks: [
      {
        title: "Referenzrahmen nur als methodische Orientierung",
        tone: "light",
        text: [
          "Certif-Scope stützt seine Struktur auf etablierte methodische Bezugspunkte. Diese Rahmenwerke leiten die spend-based Logik, werden aber nicht vollständig nachgebildet und nicht als umfassendes Berichtssystem umgesetzt.",
        ],
        items: [
          "GHG Protocol — Scope-3-spend-based-Methodik.",
          "ISO 14064-1 — Relevanz, Konsistenz und Transparenz.",
          "ISO 14083 — Transportbezogene Systemgrenzen als Orientierung.",
          "EEIO-Modellierung — makroökonomische Grundlage der Emissionsfaktoren.",
          "ADEME / DEFRA — öffentlich zugängliche Intensitäten als Referenzquellen, soweit im Datensatz vorgesehen.",
        ],
      },
      {
        title: "Keine Gleichwertigkeit mit verpflichtenden Rahmenwerken",
        items: [
          "CSRD und ESRS-Berichterstattung.",
          "EU-Taxonomie-Eignung oder -Ausrichtung.",
          "Vollständiges Unternehmensinventar nach GHG Protocol mit primären Daten.",
          "Nationale Emissionsmeldungen oder steuerliche Emissionsregime.",
          "ISO-14064-Erklärungen mit externer Assurance oder unabhängiger fachlicher Bestätigung.",
        ],
      },
      {
        title: "Zweck der regulatorischen Orientierung",
        tone: "dark",
        text: [
          "Die Orientierung stärkt die institutionelle Nachvollziehbarkeit, weil sie auf klar benannten Prinzipien beruht. Sie macht Certif-Scope jedoch nicht zu einem vollständigen oder verpflichtenden Reporting-System.",
        ],
        items: [
          "Macht die Methodik transparenter.",
          "Unterstützt Screening- und Risikoeinschätzungsprozesse.",
          "Erleichtert Nachvollziehbarkeit über feste Versionsstände und deterministische Ergebnisse.",
          "Trennt indikative Dokumentation klar von bindenden Berichtspflichten.",
        ],
      },
      {
        title: "Beschränkungen der rechtlichen Interpretation",
        text: [
          "Certif-Scope-Ergebnisse dürfen nicht als geprüfte Umweltdaten, validiertes Treibhausgasinventar oder finanzregulatorische Unterlage verstanden werden. Jede regulatorische Verwendung erfordert eine eigene fachliche und rechtliche Prüfung durch die nutzende Institution.",
        ],
        items: [
          "Keine regulatorische Assurance.",
          "Keine beanspruchte Gleichstellung mit CSRD- oder ESRS-Strukturen.",
          "Keine Eignung für Einreichungen bei Behörden ohne zusätzliche fachliche Aufbereitung.",
          "Keine Ableitung operativer Emissionen oder lieferantenspezifischer Genauigkeit.",
        ],
      },
    ],
  },
  {
    id: "legal-boundary-interpretation",
    title: "3. Rechtliche Auslegungsgrenze",
    intro:
      "Dieser Abschnitt definiert die rechtlichen Grenzen der Interpretation. Er stellt sicher, dass Institutionen verstehen, was die Bescheinigung rechtlich darstellen kann und was ausdrücklich außerhalb ihres Umfangs liegt.",
    blocks: [
      {
        title: "Was das Ergebnis rechtlich darstellt",
        tone: "light",
        text: [
          "Die Bescheinigung ist eine indikative und nicht bindende CO₂e-Schätzung, die ausschließlich aus finanziellen Ausgaben abgeleitet wird. Sie ist ein Analyse- und Dokumentationsinstrument für Fälle, in denen physische Aktivitätsdaten oder lieferantenspezifische Daten nicht verfügbar sind.",
        ],
        items: [
          "Eine finanzielle Umrechnung in eine Emissionsschätzung nach wirtschaftlichen Kategorien.",
          "Ein reproduzierbares Ergebnis aus einem deterministischen Rechenweg.",
          "Ein statisches Dokument mit sichtbarer Version der verwendeten Emissionsfaktoren.",
          "Eine indikative Grundlage für ESG-Vorscreening und einfache B2B-Anfragen.",
        ],
      },
      {
        title: "Was das Ergebnis nicht darstellt",
        items: [
          "Kein validiertes Treibhausgasinventar nach ISO 14064-1.",
          "Keine ESRS-Umwelterklärung und keine CSRD-Berichterstattung.",
          "Keine EU-Taxonomie-Eignung oder -Ausrichtung.",
          "Keine lieferantenspezifische Genauigkeit oder vorgelagerte Rückverfolgbarkeit.",
          "Keine physische Emissionsmessung und kein operatives Monitoring.",
          "Kein durch eine externe Stelle abgenommenes CO₂e-Ergebnis für regulatorische Zwecke.",
        ],
      },
      {
        title: "Verantwortung der Institutionen",
        text: [
          "Institutionen, die Certif-Scope nutzen, bleiben für Kontextualisierung, interne Einordnung und spätere Verwendung der indikativen Werte verantwortlich. Certif-Scope entscheidet nicht, ob ein Ergebnis für einen konkreten regulatorischen oder vertraglichen Prozess ausreichend ist.",
        ],
        items: [
          "Nutzer müssen Ergebnisse in ihre eigenen internen Methoden einordnen.",
          "Für regulatorische Nutzung ist fachliches Urteil erforderlich.",
          "Die Eignung für eine bestimmte Jurisdiktion muss separat bewertet werden.",
          "Die Verantwortung für Kommunikation und Weitergabe liegt bei der nutzenden Institution.",
        ],
      },
      {
        title: "Rechtlicher Nutzungshinweis",
        tone: "dark",
        text: [
          "Certif-Scope-Ergebnisse sind nicht bindend. Sie sollten nicht für regulatorische Einreichungen, Streitfälle, vertragliche Zusicherungen oder öffentliche Umweltaussagen verwendet werden, wenn dafür ein vollständiger fachlicher Nachweis verlangt wird.",
        ],
        items: [
          "Nicht als abgenommener Emissionsnachweis zu verwenden.",
          "Nicht für pflichtige Anleger- oder Nachhaltigkeitsberichte bestimmt.",
          "Nicht als eigenständige ESG-Dokumentation für umfassende Nachweispflichten gedacht.",
          "Nicht als behördlich validierter Nachweis ökologischer Leistung einzuordnen.",
        ],
      },
    ],
  },
  {
    id: "regulatory-non-equivalence-misuse-prevention",
    title: "4. Regulatorische Nicht-Gleichwertigkeit und Missbrauchsprävention",
    intro:
      "Dieser Abschnitt hält fest, dass Certif-Scope-Ergebnisse nicht mit regulatorischen Erklärungen, verpflichtenden Umweltberichten oder fachlich abgenommenen Berechnungen gleichgesetzt werden dürfen. Er legt außerdem Regeln gegen irreführende Nutzung fest.",
    blocks: [
      {
        title: "Keine Gleichstellung mit regulatorischen Rahmenwerken",
        tone: "light",
        text: [
          "Certif-Scope liefert nur indikative Schätzungen. Sie dürfen nicht als verpflichtende regulatorische Dokumentation für die folgenden Rahmen genutzt werden:",
        ],
        items: [
          "CSRD.",
          "ESRS.",
          "Pflichtangaben im Zusammenhang mit der EU-Taxonomie.",
          "Vollständige ISO-14064-1-Inventare.",
          "Logistikbezogene Emissionsrechnungen nach ISO 14083.",
          "Lieferantenspezifische CO₂e-Erklärungen mit Primärdaten.",
        ],
      },
      {
        title: "Regeln gegen irreführende Nutzung",
        items: [
          "Ergebnisse dürfen nicht als extern abgenommen oder fachlich bestätigt bezeichnet werden.",
          "Ergebnisse dürfen nicht als Scope-1- oder Scope-2-Emissionen dargestellt werden.",
          "Eine Gleichstellung mit einer regulatorischen Einreichung darf nicht behauptet werden.",
          "Ergebnisse dürfen nicht für Umwelt- oder Marketingaussagen genutzt werden.",
          "Eine Vermischung mit primären lieferantenspezifischen Daten ist zu vermeiden, wenn dadurch der Umfang unklar wird.",
        ],
      },
      {
        title: "Klärung der Verantwortlichkeiten",
        tone: "dark",
        text: [
          "Certif-Scope validiert, korrigiert und prüft die vom Nutzer gelieferten Finanzdaten nicht fachlich. Die Verantwortung für Richtigkeit und Vollständigkeit der Eingaben liegt ausschließlich beim Nutzer oder bei der einreichenden Institution.",
        ],
        items: [
          "Keine Verantwortung für unrichtige, unvollständige oder irreführende Eingaben.",
          "Keine Verantwortung für die Interpretation durch Dritte.",
          "Keine automatische Anpassung an spätere regulatorische Entwicklungen.",
        ],
      },
    ],
  },
  {
    id: "data-boundaries-prohibited-interpretations",
    title: "5. Datengrenzen und unzulässige Interpretationen",
    intro:
      "Dieser Abschnitt beschreibt, was die von Certif-Scope erzeugten Werte darstellen und was sie ausdrücklich nicht darstellen. Diese Grenzen schützen vor falscher Interpretation der indikativen CO₂e-Werte.",
    blocks: [
      {
        title: "Was die Daten darstellen",
        tone: "light",
        items: [
          "Indikative CO₂e-Werte, die ausschließlich aus finanziellen Ausgaben abgeleitet werden.",
          "Kategoriebezogene Schätzungen auf Basis durchschnittlicher wirtschaftlicher Emissionsintensitäten.",
          "Eine spend-based Modellierung im Kontext der Empfehlungen des GHG Protocol.",
          "Ein reproduzierbares Ergebnis mit definierter Berechnungsversion.",
          "Ein nicht bindender Indikator für institutionelles Vorscreening.",
        ],
      },
      {
        title: "Was die Daten nicht darstellen",
        text: [
          "Das Ergebnis darf nicht als präzise Messung, fachliche Abnahme oder Bericht über physische Emissionen verstanden werden. Es stellt insbesondere nicht dar:",
        ],
        items: [
          "Die realen operativen Emissionen eines Unternehmens.",
          "Primäre lieferantenspezifische Emissionsdaten.",
          "Aktivitätsbasierte Messungen oder physische Aufzeichnungen wie kWh, Kilometer, Kraftstoff oder Wärme.",
          "Eine Lebenszyklusanalyse oder cradle-to-gate-Bewertung.",
          "Daten, die ohne weitere Facharbeit für CSRD-/ESRS-Zwecke geeignet wären.",
          "Einen Nachweis für regulatorische oder öffentliche Umweltaussagen.",
        ],
      },
      {
        title: "Unzulässige Interpretationen",
        items: [
          "Die Werte als fachlich bestätigte oder extern abgenommene Emissionen darzustellen.",
          "Die Werte als Nachweis der Lieferanten-Compliance zu verwenden.",
          "Aus der Schätzung eine Umweltleistung oder Effizienzsteigerung abzuleiten.",
          "Eine Gleichstellung mit verpflichtenden regulatorischen Erklärungen anzunehmen.",
          "Das Ergebnis in Umwelt- oder ESG-Marketingaussagen zu verwenden.",
          "Die Schätzung als Scope-1- oder Scope-2-Messung auszulegen.",
        ],
      },
      {
        title: "Warum diese Grenzen notwendig sind",
        text: [
          "Spend-based Modelle beruhen auf wirtschaftlichen Durchschnittswerten. Sie können reale physische Emissionen nicht mit derselben Genauigkeit abbilden wie aktivitätsbasierte Datenerhebung. Ohne klare Grenzen könnte eine indikative Schätzung fälschlich als regulatorische Erklärung verstanden werden.",
        ],
      },
      {
        title: "Hinweis gegen falsche Darstellung",
        tone: "dark",
        text: [
          "Jede Darstellung indikativer Certif-Scope-Werte als gemessene Emissionen, regulatorische Erklärung oder Nachweis ökologischer Leistung liegt außerhalb des vorgesehenen Umfangs. Institutionen bleiben für jede Weitergabe und Kommunikation der Ergebnisse verantwortlich.",
        ],
      },
    ],
  },
  {
    id: "legal-non-equivalence-regulatory-disclosures",
    title: "6. Rechtliche Nicht-Gleichwertigkeit mit regulatorischen Veröffentlichungen",
    intro:
      "Dieser Abschnitt verhindert, dass indikative Certif-Scope-Werte als amtliches oder verpflichtendes Emissionsreporting verstanden werden. Die Grenzen schützen Institutionen vor Fehlverwendung in Prozessen, die messbare und nachprüfbare Emissionsdaten verlangen.",
    blocks: [
      {
        title: "Wesentliche Unterschiede zu verpflichtendem Reporting",
        items: [
          "Das Ergebnis ist indikativ und ausgabenbasiert, nicht physisch gemessen.",
          "Es werden keine Aktivitätsdaten wie kWh, Kraftstoff, Wärme, Kälte oder Distanzen erhoben.",
          "Die Ergebnisse werden nicht von akkreditierten Stellen fachlich abgenommen.",
          "Das Ergebnis erfüllt nicht die Anforderungen von CSRD, ESRS E1, ISO 14064-1 oder vollständigen GHG-Protocol-Inventaren.",
        ],
      },
      {
        title: "Vergleich mit regulatorischen Rahmen",
        tone: "light",
        text: [
          "Die folgenden Rahmen verlangen physische, nachvollziehbare und fachlich belastbare Emissionsdaten, die ein spend-based Modell allein nicht liefern kann:",
        ],
        items: [
          "CSRD in der Europäischen Union — verpflichtende Nachhaltigkeitsinformationen.",
          "ESRS E1 — Scope-1-, Scope-2- und Scope-3-Angaben auf Basis von Aktivitätsdaten.",
          "ISO 14064-1 — quantifizierbare und überprüfbare Emissionsgrenzen.",
          "EU-Taxonomie — technische Kriterien mit messbaren Indikatoren.",
          "Bank- und EBA-Kontexte — Bewertungen, die auf validierten Umweltdaten beruhen können.",
        ],
      },
      {
        title: "Rechtlich ausgeschlossene Nutzungen",
        items: [
          "Nicht für verpflichtende CSRD-/ESRS-Einreichungen bestimmt.",
          "Nicht für ISO-14064-1-Verfahren mit externer fachlicher Bestätigung bestimmt.",
          "Nicht für die Einstufung grüner Vermögenswerte nach EU-Taxonomie bestimmt.",
          "Nicht für Umwelt- oder Marketingaussagen bestimmt.",
          "Nicht für CO₂-Kompensationsmechanismen oder Emissionsmärkte bestimmt.",
        ],
      },
      {
        title: "Institutionelle Verantwortung",
        tone: "dark",
        text: [
          "Institutionen müssen selbst prüfen, ob die indikative Bescheinigung für ihren internen Zweck ausreicht. Certif-Scope ist kein regulatorischer Meldeweg und ersetzt keine bestehenden Pflichten.",
        ],
      },
      {
        title: "Warum die Nicht-Gleichwertigkeit wesentlich ist",
        text: [
          "Ohne klare Trennung zwischen indikativen Werten und regulatorischen Veröffentlichungen könnten Organisationen falsche Schlüsse ziehen, Unterlagen fehlerhaft einordnen oder rechtliche Risiken erzeugen. Die klare Abgrenzung schützt Nutzer, Empfänger und die Integrität der Methode.",
        ],
      },
    ],
  },
  {
    id: "prohibited-claims-misuse-prevention",
    title: "7. Unzulässige Aussagen und Prävention irreführender Nutzung",
    intro:
      "Dieser Abschnitt legt strenge Grenzen für Kommunikation und Weitergabe fest. Certif-Scope-Werte sind nur indikativ und dürfen nicht für Werbung, regulatorische Einreichungen, öffentliche ESG-Erklärungen oder Leistungsvergleiche genutzt werden.",
    blocks: [
      {
        title: "Unzulässige Nutzung in externer Kommunikation",
        text: [
          "Im europäischen Verbraucherschutz- und Wettbewerbsumfeld dürfen Certif-Scope-Werte nicht so präsentiert werden, als seien sie extern abgenommen, fachlich bestätigt oder durch eine Behörde validiert.",
        ],
        items: [
          "Keine ESG-Marketingaussage und kein werblicher Umweltclaim.",
          "Keine Aussage zu Neutralität, Kompensation oder besonderer Umweltleistung.",
          "Kein öffentlicher Vergleich mit Wettbewerbern oder Branchendurchschnitten.",
          "Keine Nutzung für Produktumweltkennzeichnung oder Eco-Design-Aussagen.",
          "Keine Veröffentlichung als von einem Regulator bestätigte Angabe.",
        ],
      },
      {
        title: "Ausgeschlossene regulatorische Nutzung",
        tone: "light",
        text: [
          "Das Ergebnis darf nicht in einem rechtlichen, vertraglichen oder regulatorischen Dokument verwendet werden, wenn dort validierte Emissionsbuchhaltung verlangt wird.",
        ],
        items: [
          "Nicht für CSRD- oder ESRS-Einreichungen bestimmt.",
          "Nicht für ISO-14064-1-Verfahren bestimmt.",
          "Nicht für EU-Taxonomie-Klassifizierungen bestimmt.",
          "Nicht für Green-Claims-Prozesse oder damit verbundene Anforderungen bestimmt.",
          "Nicht für nationale Emissionsregister bestimmt.",
        ],
      },
      {
        title: "Prävention rechtlicher Risiken",
        text: [
          "Institutionen müssen sicherstellen, dass die indikativen Werte nicht als tatsächliche Emissionen ausgelegt werden. Eine irreführende Darstellung kann Risiken in Verbraucherrecht, Werbung, Bankprozessen, Beschaffung und vertraglicher Kommunikation erzeugen.",
        ],
        items: [
          "Risiken nach Regeln gegen irreführende Geschäftspraktiken.",
          "Risiken nach nationalen Werbe- und Verbraucherschutzregeln.",
          "Risiken in Bank-, Einkaufs- und Due-Diligence-Prozessen.",
          "Vertragliche Risiken durch ungenaue ESG-Angaben.",
        ],
      },
      {
        title: "Warum diese Verbote notwendig sind",
        tone: "dark",
        text: [
          "Ohne ausdrückliche Beschränkungen könnten indikative Werte als Daten auf regulatorischem Niveau erscheinen. Die Verbote sorgen für rechtliche Klarheit, schützen Nutzer und bewahren die Integrität der spend-based Schätzung.",
        ],
      },
    ],
  },
  {
    id: "disclaimers-liability-legal-safeguards",
    title: "8. Hinweise, Verantwortung und rechtliche Schutzmechanismen",
    intro:
      "Dieser Abschnitt legt die rechtlichen Hinweise und Haftungsgrenzen für Certif-Scope-Ergebnisse fest. Er stellt sicher, dass Nutzer, Empfänger und Institutionen die indikative Natur der Schätzung verstehen.",
    blocks: [
      {
        title: "Natur des Ergebnisses",
        items: [
          "Die Ergebnisse sind indikative Schätzungen, keine fachlich abgenommenen Emissionen.",
          "Die Werte entstehen aus wirtschaftlichen spend-based Intensitäten.",
          "Die Ergebnisse sind nicht gleichbedeutend mit gemessenen CO₂e-Emissionen.",
          "Es wird keine Genauigkeit im Verhältnis zur realen operativen Tätigkeit zugesichert.",
          "Das Dokument ist nicht für regulatorische Einreichungen oder Umweltclaims bestimmt.",
        ],
      },
      {
        title: "Verantwortung des Nutzers",
        tone: "light",
        text: [
          "Nutzer behalten die vollständige Verantwortung für Richtigkeit, Vollständigkeit und Relevanz der eingegebenen Ausgabendaten. Certif-Scope überprüft keine Buchungen und validiert keine zugrunde liegenden Buchhaltungsbelege.",
        ],
        items: [
          "Nutzer müssen Ausgaben korrekt kategorisieren.",
          "Nutzer müssen finanzielle Angaben vor der Übermittlung selbst prüfen.",
          "Certif-Scope erkennt nicht alle fehlenden oder fehlerhaft deklarierten Werte.",
          "Die Verantwortung für Interpretation und Weitergabe bleibt beim Nutzer.",
        ],
      },
      {
        title: "Grenzen der Plattformverantwortung",
        text: [
          "Certif-Scope stellt eine standardisierte Dokumentation bereit. Die Plattform verantwortet nicht die nachgelagerte Nutzung der Werte und nicht Entscheidungen, die auf Grundlage einer indikativen Schätzung getroffen werden.",
        ],
        items: [
          "Keine Verantwortung für institutionelle Entscheidungen auf Basis der Indikatoren.",
          "Keine Verantwortung für ESG-Scoring oder Risikomodelle, die Dritte daraus ableiten.",
          "Keine Verantwortung für kommerzielle Streitigkeiten über indikative Werte.",
          "Keine Verantwortung für regulatorische Folgen einer falschen Interpretation.",
        ],
      },
      {
        title: "Schutzmechanismen in jedem Ergebnis",
        tone: "dark",
        items: [
          "Jedes Ergebnis enthält Datensatzversion und methodische Grenzen.",
          "Jedes Dokument enthält Hinweise auf den indikativen Charakter.",
          "Die Ergebnisse sind nicht für Leistungsvergleiche und nicht für externe fachliche Bestätigungen gedacht.",
          "Die Bescheinigung darf nicht als regulatorischer Nachweis ausgelegt werden.",
        ],
        text: [
          "Diese Schutzmechanismen reduzieren Missverständnisse und erhalten die methodische Integrität über alle Anwendungsfälle hinweg.",
        ],
      },
    ],
  },
  {
    id: "independent-verification-boundaries",
    title: "9. Nachvollziehbarkeit und Grenzen unabhängiger Kontrolle",
    intro:
      "Dieser Abschnitt beschreibt, unter welchen Bedingungen Dritte eine Certif-Scope-Bescheinigung nachvollziehen können. Er grenzt den Kontrollumfang, die Reproduzierbarkeit und die Beschränkungen klar ab.",
    blocks: [
      {
        title: "Umfang einer unabhängigen Kontrolle",
        text: [
          "Dritte können die interne Kohärenz einer Bescheinigung anhand der eingebetteten Metadaten und der im Dokument ausgewiesenen Datensatzversion kontrollieren. Diese Kontrolle ist auf strukturelle und mathematische Reproduzierbarkeit begrenzt.",
        ],
        items: [
          "Richtige Anwendung der Emissionsfaktoren je Kategorie.",
          "Richtige Multiplikation von Ausgaben und Emissionsfaktoren.",
          "Richtige Aggregation von Kategorieergebnissen zum Gesamtwert.",
          "Kohärenz zwischen Datensatzversion und Dokumentmetadaten.",
        ],
      },
      {
        title: "Grenzen der Kontrolle",
        tone: "light",
        items: [
          "Die Richtigkeit der eingegebenen Finanzdaten wird nicht bestätigt.",
          "Vollständigkeit und Korrektheit der Ausgabenbeträge werden nicht bestätigt.",
          "Die reale CO₂e-Intensität eines Lieferanten wird nicht bewertet.",
          "Die Bescheinigung ersetzt keine CSRD-/ESRS-Berichterstattung.",
        ],
      },
      {
        title: "Voraussetzungen für Reproduzierbarkeit",
        items: [
          "Die Eingabewerte müssen mit den ursprünglich übermittelten Werten übereinstimmen.",
          "Das Kategorie-Mapping muss den veröffentlichten Definitionen folgen.",
          "Dieselbe Version des Emissionsfaktor-Datensatzes muss genutzt werden.",
          "Nachbearbeitung, Skalierung oder Umdeutung der Werte ist auszuschließen.",
        ],
      },
      {
        title: "Ausdrückliche Grenzen der Kontrolle",
        tone: "dark",
        text: [
          "Die Kontrolle kann den deterministischen Modellumfang nicht überschreiten. Certif-Scope speichert keine detaillierten Finanzdaten dauerhaft, sodass Dritte nicht erneut auf die ursprünglichen Eingaben zugreifen oder diese fachlich bewerten können.",
        ],
      },
      {
        title: "Unzulässige Interpretationen des Kontrollprozesses",
        items: [
          "Indikative Werte als extern abgenommene oder fachlich bestätigte Emissionen zu betrachten.",
          "Die Bescheinigung als regulatorischen Nachweis zu verwenden.",
          "Eine Validierung der Qualität der Nutzereingaben anzunehmen.",
          "Jahreswerte zu vergleichen, als sei die Aktivität vollständig gemessen und konstant.",
          "Ergebnisse als Ersatz für Scope-1-, Scope-2- oder Scope-3-Inventare oder für eine ACV mit Primärdaten zu nutzen.",
        ],
      },
    ],
  },
  {
    id: "liability-framework-legal-responsibilities",
    title: "10. Verantwortungsrahmen und rechtliche Pflichten",
    intro:
      "Dieser Abschnitt klärt die Verantwortlichkeiten der beteiligten Parteien. Die Bescheinigung ist ein indikatives CO₂e-Ergebnis aus vom Nutzer bereitgestellten Ausgabendaten und darf nicht als fachlich abgenommenes Emissionsergebnis oder Ersatz für regulatorische Berichterstattung verstanden werden.",
    blocks: [
      {
        title: "Rechtliche Natur der Bescheinigung",
        text: [
          "Die von Certif-Scope erzeugte CO₂e-Bescheinigung ist kein behördliches Dokument, kein Bericht zur Erfüllung regulatorischer Pflichten und keine Messung physischer Emissionen. Sie ist ein deterministisches Ergebnis auf Grundlage der folgenden Elemente:",
        ],
        items: [
          "vom Nutzer übermittelte Ausgabendaten,",
          "veröffentlichte Kategoriedefinitionen,",
          "eine feste Version des Emissionsfaktor-Datensatzes.",
        ],
      },
      {
        title: "Verteilung der Verantwortung",
        tone: "light",
        text: [
          "Die Rollen sind getrennt, damit keine falsche Interpretation entsteht.",
        ],
        items: [
          "Der Nutzer verantwortet Richtigkeit und Vollständigkeit der eingegebenen Finanzdaten.",
          "Certif-Scope verantwortet die deterministische Verarbeitung der validierten Eingaben im vorgesehenen Modell.",
          "Prüfende Dritte verantworten ihre eigene Kontrolle des nachvollziehbaren Rechenwegs.",
          "Keine Partei darf die Bedeutung der Bescheinigung über ihren definierten Umfang hinaus erweitern.",
        ],
      },
      {
        title: "Ausdrückliche Haftungsausschlüsse",
        items: [
          "Keine Zusage zur Richtigkeit der vom Nutzer gelieferten Daten.",
          "Keine Validierung lieferantenspezifischer CO₂e-Leistung.",
          "Keine Zusage zur Eignung für CSRD, ESRS, EU-Taxonomie oder ISO-Verfahren mit externer fachlicher Bestätigung.",
          "Keine Eignung zur Abwehr regulatorischer Sanktionen oder als rechtliche Verteidigung.",
          "Keine Kontrolle operativer Scope-1-, Scope-2- oder Scope-3-Emissionen auf Basis von Aktivitätsdaten.",
        ],
      },
      {
        title: "Unzulässige rechtliche Auslegung",
        text: [
          "Die CO₂e-Bescheinigung darf nicht ausgelegt werden als:",
        ],
        items: [
          "Nachweis realer Emissionen,",
          "behördliche oder externe Bestätigung einer Umweltleistung,",
          "Bestätigung der ESG-Leistung eines Lieferanten,",
          "Zusicherung der Vollständigkeit oder Richtigkeit der Daten,",
          "Ersatz für Veröffentlichungspflichten nach EU-Recht.",
        ],
      },
      {
        title: "Institutionelle Schutzmechanismen",
        tone: "dark",
        text: [
          "Um Fehlverwendung durch Institutionen oder Dritte zu begrenzen, enthält die Bescheinigung einen rechtlichen Hinweis und Versionsmetadaten. Sie macht deutlich, dass Ergebnisse indikativ, nicht bindend und nicht als Aussage über reale operative Emissionen zu verstehen sind.",
        ],
      },
    ],
  },
];

function getBlockClass(tone: BlockTone = "white") {
  if (tone === "dark") {
    return "mt-16 rounded-2xl bg-[#0B3A63] p-10 text-white shadow-md";
  }

  if (tone === "light") {
    return "mt-16 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-10";
  }

  return "mt-16 rounded-2xl border border-gray-200 bg-white p-10";
}

function getTextClass(tone: BlockTone = "white") {
  return tone === "dark"
    ? "text-sm leading-relaxed text-white/90"
    : "text-sm leading-relaxed text-gray-700";
}

function ComplianceBlockCard({ block }: { block: ComplianceBlock }) {
  const tone = block.tone ?? "white";

  return (
    <div className={getBlockClass(tone)}>
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
        <p key={paragraph} className={`${getTextClass(tone)} mb-4 max-w-5xl`}>
          {paragraph}
        </p>
      ))}

      {block.items ? (
        <ul className={`${getTextClass(tone)} max-w-5xl space-y-2`}>
          {block.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ComplianceSectionBlock({ section }: { section: ComplianceSection }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-12 shadow-lg">
        <h2 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          {section.title}
        </h2>

        <p className="mt-6 max-w-5xl text-lg leading-relaxed text-gray-700">
          {section.intro}
        </p>
      </div>

      {section.blocks.map((block) => (
        <ComplianceBlockCard key={block.title} block={block} />
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

export default function GermanCompliancePage() {
  return (
    <section
      id="compliance"
      data-section="compliance"
      className="mx-auto max-w-7xl px-6 pb-24 pt-12"
    >
      <div id="top" />

      <header className="mb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
          CO₂e-Bescheinigung — Grenzen und Compliance
        </p>

        <h1 className="mb-6 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          Compliance-Rahmen und rechtliche Grenzen
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
          Rechtlicher und methodischer Rahmen der indikativen CO₂e-Bescheinigung:
          nicht regulatorisch, keine CSRD-/ESRS-Berichterstattung, kein
          vollständiges Treibhausgasinventar, Verantwortung des Nutzers,
          erlaubte Nutzung und klare Grenzen der Interpretation.
        </p>

        <div className="mt-10 h-[2px] w-20 bg-gray-300" />
      </header>

      <nav
        aria-label="Compliance-Abschnitte"
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
          <ComplianceSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}
