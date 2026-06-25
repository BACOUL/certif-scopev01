import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - DATENSCHUTZ
====================================================== */

export const metadata: Metadata = {
  title: "Datenschutz | Certif-Scope",
  description:
    "Datenschutzhinweise von Certif-Scope: Datenminimierung, privacy-by-design, keine Marketing-Tracker und begrenzte technische Verarbeitung für CO2e-Dokumente.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/datenschutz/",
    languages: {
      de: "https://www.certif-scope.com/de/datenschutz/",
      fr: "https://www.certif-scope.com/fr/privacy/",
    },
  },
  openGraph: {
    title: "Datenschutz | Certif-Scope",
    description:
      "Datenschutzhinweise zu Certif-Scope, einschließlich CO2e-Berechnung, PDF-Erstellung und privacy-by-design-Grundsätzen.",
    url: "https://www.certif-scope.com/de/datenschutz/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function DatenschutzPageDE() {
  return (
    <section
      id="privacy"
      data-section="privacy"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - WebPage (LEGAL / PRIVACY) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Datenschutz",
            url: "https://www.certif-scope.com/de/datenschutz/",
            description:
              "Datenschutzhinweise dazu, wie Certif-Scope personenbezogene Daten nach Grundsätzen der Datenminimierung und privacy-by-design verarbeitet.",
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
                name: "Datenschutz",
                item: "https://www.certif-scope.com/de/datenschutz/",
              },
            ],
          }),
        }}
      />

      {/* SEITENKOPF */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Datenschutz & ePrivacy
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Datenschutz
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Diese Datenschutzhinweise erklären, wie Certif-Scope personenbezogene
          und nicht personenbezogene Daten verarbeitet. Der Dienst folgt einem
          strikten privacy-by-design-Ansatz und dem Grundsatz der
          Datenminimierung.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* INHALT */}
      <div className="max-w-4xl space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Privacy-by-design-Grundsätze
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope ist darauf ausgelegt, ohne Nutzerkonten, ohne
            verhaltensbezogenes Tracking und ohne unnötige Datenerhebung zu
            funktionieren. Datenschutz durch Technikgestaltung und durch
            datenschutzfreundliche Voreinstellungen wird in allen Schritten
            berücksichtigt.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>keine Nutzerkonten und keine dauerhaften Nutzerprofile</li>
            <li>keine Werbung, kein Profiling und kein Verhaltenstracking</li>
            <li>keine Drittanbieter-Analytics und keine Reichweitenmessung</li>
            <li>keine Cookies, die eine Einwilligung erfordern</li>
            <li>keine Speicherung detaillierter eingegebener Finanzdaten</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Daten, die Sie freiwillig bereitstellen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Je nach Nutzung von Certif-Scope können Sie freiwillig folgende
            Informationen bereitstellen:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>E-Mail-Adresse bei Support- oder Informationsanfragen</li>
            <li>optionale Angaben zur Identifikation einer Organisation</li>
            <li>Jahresausgaben (EUR), die für die CO2e-Berechnung eingegeben werden</li>
            <li>Inhalte von Nachrichten, die über Formulare gesendet werden</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Verarbeitung der CO2e-Berechnung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CO2e-Berechnungen werden im Browser des Nutzers durchgeführt.
            Detaillierte Finanzdaten werden auf dem Gerät des Nutzers
            verarbeitet und nicht auf Servern von Certif-Scope gespeichert.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Detaillierte Finanzdaten werden von Certif-Scope nicht gespeichert.
            Nur die für die Erstellung der PDF-Bescheinigung strikt
            notwendigen Informationen, etwa ein aggregiertes CO2e-Ergebnis,
            Dokumentmetadaten und die im Dokument sichtbaren
            Identifikationsangaben, können zur PDF-Erstellung verarbeitet
            werden. Eine detaillierte Aufschlüsselung der Ausgaben wird von
            Certif-Scope weder gespeichert noch protokolliert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Cookies, Tracker und ePrivacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope verwendet keine Werbe-Cookies, keine Tracking-Cookies
            und keine Drittanbieter-Analytics. Es findet kein Marketingtracking,
            keine Verhaltensanalyse und keine Werbeverfolgung statt. Die
            Website stützt sich nicht auf Cookies, die nach ePrivacy eine
            Einwilligung erfordern.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>keine Marketing- oder Analytics-Cookies</li>
            <li>kein seitenübergreifendes oder verhaltensbezogenes Tracking</li>
            <li>kein Consent-Banner für solche Zwecke erforderlich</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Soweit streng notwendige Cookies eingesetzt werden, sind sie auf den
            wesentlichen technischen Betrieb der Website beschränkt und
            speichern keine persönlichen Inhalte.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Speicherung und Aufbewahrungsdauer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope speichert Eingabedaten für die CO2e-Berechnung nicht
            dauerhaft. Finanzwerte werden nur vorübergehend im Arbeitsspeicher
            verarbeitet und nach der Erstellung der Bescheinigung gelöscht.
          </p>
          <p className="text-gray-700 leading-relaxed">
            E-Mails und Support-Kommunikation können für operative Zwecke und
            Support bis zu zwölf (12) Monate aufbewahrt und auf Anfrage
            gelöscht werden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Datenweitergabe und technische Dienstleister
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Certif-Scope verkauft, vermietet oder monetarisiert keine
            personenbezogenen Daten. Begrenzte Verarbeitungen können technische
            Dienstleister betreffen, die für den Betrieb des Dienstes notwendig
            sind:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>ein Anbieter für Hosting und Deployment</li>
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
            Certif-Scope gespeichert. Wenn PDFShift eingesetzt wird, werden nur
            die für die technische Produktion der PDF-Bescheinigung notwendigen
            Daten übermittelt; detaillierte Finanzdaten werden von Certif-Scope
            nicht gespeichert. Die Dienstleister arbeiten auf Grundlage
            vertraglicher Vorkehrungen, die an die Anforderungen der DSGVO
            angelehnt sind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Ihre Rechte nach der DSGVO
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Zur Ausübung Ihrer Rechte kontaktieren Sie:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Sicherheitsmaßnahmen
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope nutzt HTTPS-Verschlüsselung sowie gängige technische
            und organisatorische Maßnahmen, um Daten vor unbefugtem Zugriff,
            Veränderung oder Offenlegung zu schützen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Aktualisierung dieser Hinweise
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Hinweise können aktualisiert werden, um rechtliche,
            technische oder betriebliche Entwicklungen abzubilden. Die jeweils
            aktuelle Fassung ist auf dieser Seite verfügbar.
          </p>
        </section>
      </div>
    </section>
  );
}
