import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - ALLGEMEINE NUTZUNGSBEDINGUNGEN
====================================================== */

export const metadata: Metadata = {
  title: "AGB | Certif-Scope",
  description:
    "Nutzungsbedingungen für Certif-Scope: Leistungsumfang, Preis, Verantwortlichkeiten, privacy-by-design und anwendbarer rechtlicher Rahmen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/agb/",
    languages: {
      de: "https://www.certif-scope.com/de/agb/",
      fr: "https://www.certif-scope.com/fr/terms/",
    },
  },
  openGraph: {
    title: "AGB | Certif-Scope",
    description:
      "Nutzungsbedingungen für Certif-Scope und die Erstellung indikativer spend-based CO2e-Bescheinigungen.",
    url: "https://www.certif-scope.com/de/agb/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function AGBPageDE() {
  return (
    <section
      id="terms"
      data-section="terms"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - WebPage (LEGAL / TERMS) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AGB",
            url: "https://www.certif-scope.com/de/agb/",
            description:
              "Nutzungsbedingungen für Certif-Scope und die Erstellung indikativer CO2e-Bescheinigungen.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            inLanguage: "de-DE",
          }),
        }}
      />

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
                name: "AGB",
                item: "https://www.certif-scope.com/de/agb/",
              },
            ],
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* KANONISCHER SEITENKOPF */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO2e-Bescheinigung - Nutzungsrahmen
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          AGB
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Diese Nutzungsbedingungen regeln die Nutzung von Certif-Scope und die
          Erstellung standardisierter CO2e-Bescheinigungen. Mit der Erstellung
          einer Bescheinigung bestätigt der Nutzer, diese Bedingungen gelesen
          zu haben und sie für die Nutzung des Dienstes zu akzeptieren.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* INHALT */}
      <div className="max-w-4xl mx-auto space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">1. Gegenstand</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Bedingungen definieren den vertraglichen Rahmen für die
            Nutzung von Certif-Scope. Der Dienst stellt indikative
            CO2e-Bescheinigungen bereit, die nach einer spend-based Methode auf
            Grundlage der vom Nutzer angegebenen Jahresausgaben (EUR) berechnet
            werden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Beschreibung des Dienstes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope wandelt Jahresausgaben (EUR) über ein deterministisches
            Berechnungsmodell in einen indikativen CO2e-Wert um. Der Dienst
            erstellt eine herunterladbare PDF-Bescheinigung, die insbesondere
            Folgendes enthält:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>ein aggregiertes CO2e-Ergebnis (indikativ)</li>
            <li>ein standardisiertes PDF-Format für dokumentarische Zwecke</li>
            <li>eine eindeutige Bescheinigungs-ID</li>
            <li>einen Prüflink und einen QR-Code</li>
            <li>integrierte Elemente zur Dokumentintegrität und Herkunft</li>
            <li>Name und Version des verwendeten Faktorensatzes</li>
            <li>eine angegebene dokumentarische Nutzungsdauer von einem (1) Jahr</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Die Bescheinigung ist keine externe Bestätigung, kein
            CSRD-/ESRS-Bericht, keine fachliche Treibhausgas-Prüfung und kein
            regulatorisches Emissionsinventar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Preis und Zahlung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Der Preis gilt pro Bescheinigung. Es besteht kein Abonnement. Es gilt
            der Preis, der zum Zeitpunkt des Kaufs auf der Preisseite angezeigt
            wird.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Zahlungen werden über Stripe abgewickelt. Umsatzsteuer ist nach der
            französischen Kleinunternehmerregelung nicht anwendbar (article 293
            B du CGI).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Bereitstellung des Dienstes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nach Zahlungsbestätigung wird die Bescheinigung unmittelbar
            erstellt und als herunterladbares PDF bereitgestellt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Neuerstellung und verlorene Bescheinigungen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope speichert die ausgestellten Bescheinigungen und die
            zugrunde liegenden Finanzdaten nach Ausstellung nicht dauerhaft. Der
            Nutzer ist für die Archivierung seines PDF verantwortlich.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eine Neuerstellung kann nach Ermessen von Certif-Scope ermöglicht
            werden und führt zu einer neuen Kennung sowie zu einem neuen
            Nutzungszeitraum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Kein Widerrufsrecht nach vollständiger Ausführung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nach der Richtlinie (EU) 2011/83/EU findet ein Widerrufsrecht bei
            vollständig erbrachten digitalen Dienstleistungen nicht Anwendung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Verantwortlichkeiten des Nutzers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Nutzer ist allein für die Richtigkeit der bereitgestellten
            Daten und für den Nutzungskontext der Bescheinigung verantwortlich.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Der Nutzer verpflichtet sich, die Bescheinigung nicht für
            irreführende oder ausgeschlossene Zwecke zu verwenden, etwa für
            Marketing-Claims, regulatorisches Reporting, externe Bestätigung
            oder fachliche Treibhausgas-Prüfung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Haftungsbegrenzung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope haftet nicht für Nutzungen, Auslegungen,
            Kommunikationen oder Entscheidungen Dritter auf Grundlage der
            Bescheinigung und nicht für Folgen einer Nutzung außerhalb des
            angegebenen Rahmens.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Geistiges Eigentum
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Inhalte, Dokumentstrukturen und Designelemente sind durch Rechte des
            geistigen Eigentums geschützt. Jede Vervielfältigung, Veränderung
            oder Weitergabe ohne vorherige Zustimmung ist untersagt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Personenbezogene Daten und ePrivacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope folgt strikten privacy-by-design-Grundsätzen. Weitere
            Einzelheiten finden sich in den Datenschutzhinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            11. Änderung dieser Bedingungen
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Bedingungen können jederzeit aktualisiert werden. Maßgeblich
            ist die jeweils aktuell auf der Website veröffentlichte Fassung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            12. Anwendbares Recht und Gerichtsbarkeit
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Bedingungen unterliegen französischem Recht. Für Streitigkeiten
            sind die französischen Gerichte zuständig.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            13. Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Für vertragliche Fragen kontaktieren Sie:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
