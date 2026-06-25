import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - DATENVERARBEITUNG
====================================================== */

export const metadata: Metadata = {
  title: "Überblick zur Datenverarbeitung | Certif-Scope",
  description:
    "Überblick zur Datenverarbeitung durch Certif-Scope: Datenflüsse, Aufbewahrung, technische Dienstleister und Verantwortlichkeiten im Rahmen der DSGVO-Grundsätze.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/datenverarbeitung/",
    languages: {
      de: "https://www.certif-scope.com/de/datenverarbeitung/",
      fr: "https://www.certif-scope.com/fr/data-processing/",
    },
  },
  openGraph: {
    title: "Überblick zur Datenverarbeitung | Certif-Scope",
    description:
      "Überblick zur Datenverarbeitung durch Certif-Scope, einschließlich Datenflüsse, Aufbewahrung und Rollenverteilung.",
    url: "https://www.certif-scope.com/de/datenverarbeitung/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function DatenverarbeitungPageDE() {
  return (
    <section
      id="data-processing"
      data-section="data-processing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://www.certif-scope.com/de/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Datenverarbeitung",
                item: "https://www.certif-scope.com/de/datenverarbeitung/",
              },
            ],
          }),
        }}
      />

      {/* SEITENKOPF - KANONISCHE AUSRICHTUNG */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Datenschutz & DSGVO
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Überblick zur Datenverarbeitung
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Dieses Dokument bietet einen nicht vertraglichen Überblick über die
          Datenverarbeitung durch Certif-Scope. Es dient der Transparenz, der
          institutionellen Einordnung und der internen Bewertung und ergänzt die
          Datenschutzhinweise.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* INHALT - KANONISCHE BREITE */}
      <div className="max-w-4xl mx-auto space-y-14">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Zweck und Umfang
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dieser Überblick zur Datenverarbeitung beschreibt die praktische
            Logik des Datenumgangs bei Certif-Scope. Er ersetzt nicht die
            Datenschutzhinweise und stellt keinen Auftragsverarbeitungsvertrag
            dar. Ziel ist ausschließlich, auf allgemeiner Ebene zu erklären,
            wie Daten innerhalb des Dienstes fließen.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Datenflüsse - Überblick
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope funktioniert nach einem deterministischen und
            zustandsarmen Modell. Datenflüsse sind bewusst auf das begrenzt,
            was für die Erstellung und Prüfung einer CO2e-Bescheinigung
            notwendig ist.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Typische Verarbeitungssequenz:
            <br />
            Eingabe durch den Nutzer - Berechnung im Arbeitsspeicher - technische
            PDF-Erstellung - Download durch den Nutzer
            <br />
            Die Prüfelemente werden direkt in das erzeugte Dokument integriert
            und beruhen nicht auf einer Datenbankabfrage.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Detaillierte Finanzdaten werden von Certif-Scope nicht gespeichert.
            Wenn die PDF-Konvertierung durch einen technischen Dienstleister
            erfolgt, werden nur die für die Erstellung der PDF-Bescheinigung
            notwendigen Informationen übermittelt.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Kategorien verarbeiteter Daten
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Kontaktdaten (E-Mail-Adresse)</li>
            <li>optionale organisatorische Identifikationsdaten</li>
            <li>angegebene Jahresausgaben (EUR) für die CO2e-Berechnung</li>
            <li>technische Metadaten (Hash, Zeitstempel, Version des Datensatzes)</li>
            <li>minimale technische Protokolle für Sicherheit und Missbrauchsprävention</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Es findet kein Verhaltensprofiling, keine Nutzerverfolgung, keine
            Anreicherung und keine sekundäre Datennutzung statt. Certif-Scope
            nutzt kein Marketingtracking, keine verhaltensbezogenen Analytics
            und keine Werbe-Cookies.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Merkmale der Verarbeitung
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>deterministische und reproduzierbare Berechnungen</li>
            <li>Verarbeitung ohne dauerhafte Speicherung der Eingabedaten</li>
            <li>Aktionen, die ausschließlich vom Nutzer ausgelöst werden</li>
            <li>einziger Zweck: Erstellung und Prüfung einer Bescheinigung</li>
            <li>vorübergehende Verarbeitung im Arbeitsspeicher</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Speicherung und Aufbewahrung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Finanzdaten, die für die CO2e-Berechnung verwendet werden, werden
            nur im Arbeitsspeicher verarbeitet und nie in dauerhaften Datenbanken
            gespeichert.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Erzeugte PDF-Bescheinigungen werden direkt an den Nutzer übergeben
            und nicht von Certif-Scope aufbewahrt. E-Mail-Kommunikation kann bis
            zu zwölf (12) Monate für Support und Betrieb gespeichert werden.
            Zugangsschlüssel und Paketguthaben können einen minimalen
            technischen Status erfordern, um Gültigkeit und Verbrauch zu
            verwalten, ohne detaillierte Ausgabendaten zu speichern.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Dienstleister und Infrastruktur
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Certif-Scope nutzt eine begrenzte Zahl technischer Dienstleister:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Hosting- und Deployment-Infrastruktur</li>
            <li>Stripe für die Zahlungsabwicklung</li>
            <li>Resend für transaktionale E-Mails oder Support-E-Mails</li>
            <li>
              Cloudflare KV für den technischen Status von Zugangsschlüsseln
              und Paketguthaben
            </li>
            <li>PDFShift für die technische Umwandlung zur PDF-Erstellung</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Zahlungsdaten werden von Stripe verarbeitet und nicht von
            Certif-Scope gespeichert. PDFShift kann nur die Daten erhalten, die
            für die technische Produktion des angeforderten PDF erforderlich
            sind. Alle Dienstleister arbeiten in einem vertraglichen Rahmen, der
            an die Anforderungen der DSGVO angelehnt ist.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Rollen und Verantwortlichkeiten
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope handelt für die zur Bereitstellung des Dienstes
            notwendigen Vorgänge als Verantwortlicher. Nutzer bleiben für die
            Richtigkeit, Angemessenheit und Zulässigkeit der von ihnen
            übermittelten Informationen verantwortlich. Eine gemeinsame
            Verantwortlichkeit ist damit nicht verbunden.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Nicht vertraglicher Charakter
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dieses Dokument dient ausschließlich der Information. Es stellt
            keinen Auftragsverarbeitungsvertrag dar und ändert keine
            vertraglichen oder rechtlichen Pflichten, die an anderer Stelle
            definiert sind.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Aktualisierung und Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dieser Überblick kann aktualisiert werden, um technische,
            betriebliche oder rechtliche Entwicklungen abzubilden. Bei Fragen
            zur Datenverarbeitung:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
