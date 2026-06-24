// PATH: src/app/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - BANKEN / VERSICHERUNGEN
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/";

export const metadata: Metadata = {
  title:
    "CO2-Angaben für Banken und Versicherungen: warum sie gefragt werden | Certif-Scope",
  description:
    "Verstehen, warum Banken oder Versicherer CO2-Angaben anfordern können: ESG- und Risiko-Screening, erwartete Inhalte und wann ein indikatives CO2e-Dokument passend eingeordnet ist.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
      fr: "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances/",
    },
  },
  openGraph: {
    title:
      "CO2-Angaben für Banken und Versicherungen: warum und was liefern",
    description:
      "Warum Finanzakteure CO2-Angaben anfragen und wie Unternehmen mit einem indikativen, standardisierten und vorsichtig eingeordneten CO2e-Dokument antworten können.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function FinanceCO2RequirementsDE() {
  const jsonLdBreadcrumb = {
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
        name: "Warum Unternehmen CO2-Angaben anfordern",
        item: "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "CO2-Angaben für Banken und Versicherungen",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Angaben für Banken und Versicherungen",
    url: pageUrl,
    description:
      "Praktischer Leitfaden: warum eine Bank oder ein Versicherer CO2-Angaben anfordern kann, welches Niveau oft erwartet wird und wann ein indikatives Dokument geeignet ist.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    inLanguage: "de-DE",
    breadcrumb: jsonLdBreadcrumb,
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com/de/",
    logo: "https://www.certif-scope.com/assets/logo.png",
    sameAs: [],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "de-DE",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ist das für ein KMU gesetzlich verpflichtend?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Meist handelt es sich nicht um eine direkte Reportingpflicht des KMU, sondern um eine Informationssammlung oder ein internes ESG-Screening der anfragenden Organisation.",
        },
      },
      {
        "@type": "Question",
        name: "Kann eine indikative Schätzung für Bank- oder Versicherungsunterlagen geeignet sein?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ja, wenn die Anfrage einen informativen Indikator betrifft und das Dokument seine Grenzen ausdrücklich nennt: Schätzung, nicht geprüft, kein CSRD-/ESRS-Reporting.",
        },
      },
      {
        "@type": "Question",
        name: "Was tun, wenn ISO 14064-1 oder ein anderer Standard verlangt wird?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Dann sollte der genaue erwartete Umfang geklärt werden: Scopes, externe Prüfung und organisatorische Grenzen. Eine indikative Schätzung ist keine ISO-Inventur.",
        },
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie auf eine CO2-Anfrage von Bank oder Versicherer antworten",
    description:
      "Ein einfacher Prozess, um mit einem indikativen CO2e-Dokument für ESG- oder Risiko-Screening zu antworten.",
    totalTime: "PT10M",
    inLanguage: "de-DE",
    step: [
      {
        "@type": "HowToStep",
        name: "Erwartetes Niveau erkennen",
        text:
          "Prüfen Sie, ob die Anfrage einen Standard, einen Umfang oder eine externe Prüfung vorgibt.",
      },
      {
        "@type": "HowToStep",
        name: "Indikatives Dokument bereitstellen",
        text:
          "Liefern Sie ein aggregiertes CO2e-Ergebnis, das abgedeckte Jahr, die verwendete Methode und sichtbare Grenzen.",
      },
      {
        "@type": "HowToStep",
        name: "Grenzen klar nennen",
        text:
          "Machen Sie deutlich, dass das Dokument indikativ ist und keine Prüfung oder umfassende Inventur darstellt.",
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO2-Anfragen verstehen
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          CO2-Angaben, die von einer Bank oder Versicherung angefragt werden
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Finanzinstitute fragen in manchen Unterlagen nach CO2-Angaben. In
          vielen Fällen geht es um einen <strong>informativen Indikator</strong>{" "}
          für internes ESG- oder Risiko-Screening, nicht um eine umfassende
          CO2-Prüfung.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Zurück zum Guide
          </Link>

          <Link
            href="/de/produkt/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Produkt ansehen
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU */}
      <div className="max-w-4xl space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Warum diese Anfrage entsteht
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Banken und Versicherer nutzen Umweltindikatoren, um ihre internen
            Risiko- oder ESG-Analysen zu ergänzen. CO2e wird dabei häufig als
            einfacher Indikator verwendet, der eine Umweltinformation in einer
            Kundenakte dokumentierbar macht.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Was in der Regel erwartet wird
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>aggregiertes CO2e-Ergebnis</li>
            <li>abgedecktes Jahr</li>
            <li>verwendete Methode</li>
            <li>Hinweise zu Grenzen: indikativ, keine Prüfung</li>
            <li>archivierbares PDF-Dokument</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Weiterführende Seiten
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/de/co2-bilanz-kmu/"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Leitfaden CO2-Bilanz KMU
            </Link>

            <Link
              href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/"
              className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              CO2-Bescheinigung KMU
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

