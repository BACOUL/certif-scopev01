import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — WHY COMPANIES ASK (DE)
====================================================== */

export const metadata: Metadata = {
  title: "Warum Unternehmen einen CO₂e-Nachweis verlangen — Certif-Scope",
  description:
    "Verstehen, warum Einkaufsteams, Banken und Versicherer standardisierte CO₂e-Nachweise von Lieferanten anfordern: Risikoklassifizierung, Onboarding und klare Nutzungsgrenzen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/why-companies-ask",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask",
      fr: "https://www.certif-scope.com/fr/why-companies-ask",
      de: "https://www.certif-scope.com/de/why-companies-ask",
    },
  },
  openGraph: {
    title: "Warum Unternehmen einen CO₂e-Nachweis verlangen — Certif-Scope",
    description:
      "Institutionelle Gründe für CO₂e-Nachweise in Lieferketten — und was diese Dokumente bedeuten (und was nicht).",
    url: "https://www.certif-scope.com/de/why-companies-ask",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function WhyCompaniesAskPageDE() {
  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT, NON-PRODUCT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Warum Unternehmen einen CO₂e-Nachweis verlangen",
            url: "https://www.certif-scope.com/de/why-companies-ask",
            description:
              "Institutionelle Erklärung, warum Organisationen standardisierte CO₂e-Nachweise von Lieferanten anfordern und wie diese Dokumente in der Praxis genutzt werden.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e-Nachweis — Anforderung in der Lieferkette
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Warum Unternehmen ihn anfordern
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Einkaufsteams, Banken, Versicherer und öffentliche Stellen verlangen
          zunehmend einen standardisierten CO₂e-Nachweis von ihren Lieferanten.
          Diese Seite erklärt die institutionellen Gründe hinter dieser
          Anforderung — und was ein solcher Nachweis tatsächlich bedeutet (und
          was nicht).
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Risikoklassifizierung von Lieferanten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Große Organisationen müssen Lieferanten nach Umwelt- und
            Klimarisiken klassifizieren — als Teil der Einkaufsgovernance und
            interner ESG-Richtlinien, einschließlich verantwortungsvoller
            Beschaffungsrahmen wie ISO 20400.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>ESG-Screening von Lieferanten</li>
            <li>Umweltindikatoren in Ausschreibungen</li>
            <li>Abgleich mit internen Beschaffungsrichtlinien</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Regulatorischer Druck auf Finanzinstitute
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Banken und Versicherer sollen Umwelt- und Klimarisiken in ihre
            Analyseprozesse integrieren — z. B. im Rahmen der EU-Taxonomie, der
            EBA-Leitlinien oder Solvency II. Ein standardisierter CO₂e-Nachweis
            hilft, Exposition zu dokumentieren, ohne vollständiges CSRD- oder
            ESRS-Reporting zu verlangen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due-Diligence und Lieferanten-Onboarding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Viele Organisationen verlangen eine CO₂e-Schätzung im Rahmen der
            Lieferanten-Due-Diligence. Der Nachweis liefert ein strukturiertes
            und verifizierbares Dokument, das zu institutionellen Onboarding-
            Prozessen passt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Damit können KMU Anforderungen erfüllen, die früher lange Prozesse
            oder teure Prüfungen implizierten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Zugänglichkeit für nicht-technische Lieferanten
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Die meisten KMU können kein CSRD/ESRS-Reporting oder ein vollständiges
            Treibhausgas-Inventar erstellen. Der Nachweis bietet einen
            institutionell nutzbaren Indikator, der ausschließlich aus
            jährlichen Ausgaben abgeleitet wird — ohne physische Daten und ohne
            spezielle Expertise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Schnellere Freigabeprozesse
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lieferantenfreigaben verzögern sich häufig durch fehlende oder
            inkonsistente Umweltinformationen. Ein standardisiertes CO₂e-Dokument
            reduziert Prüfzeiten und unterstützt Onboarding-Entscheidungen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Sofortige und unabhängige Verifikation
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>eindeutige Nachweis-ID</li>
            <li>im Dokument integrierter Integritätsschutz</li>
            <li>permanente Verifikations-URL</li>
            <li>QR-Code für institutionelle Workflows</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Prüfer können die Echtheit in Sekunden verifizieren und bestätigen,
            dass das Dokument nicht verändert wurde.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Grenzüberschreitende Nutzbarkeit
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Das Format ist auf Erwartungen von Einkaufsteams und Finanzinstituten
            in mehreren europäischen Rechtsräumen ausgerichtet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Was dieser Nachweis nicht ist
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>keine Zertifizierung</li>
            <li>kein Audit</li>
            <li>kein Prüfungs-/Assurance-Mandat</li>
            <li>kein regulatorischer CO₂-Bericht</li>
            <li>kein CSRD- oder ESRS-Reporting</li>
            <li>kein Scope-1/2/3-Inventar</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Rechtlicher Umfang und Zweck
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dieser Nachweis ist ausschließlich indikativ. Er ist kein Audit,
            keine Zertifizierung, kein Assurance-Engagement und kein rechtlich
            bindender CO₂-Fußabdruck.
          </p>
        </section>
      </div>
    </section>
  );
}
