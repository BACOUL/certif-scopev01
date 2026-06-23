// PATH: src/app/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - DEUTSCHLAND
   Index-Entscheidung: index.
   Diese Seite erklärt, warum Kunden CO2-Angaben von Lieferanten anfordern.
   Die transaktionale Lösungsseite bleibt:
   /de/co2-nachweis-lieferanten/
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/";

export const metadata: Metadata = {
  title:
    "CO2-Bescheinigung Lieferanten: warum Kunden sie anfordern | Certif-Scope",
  description:
    "Warum Kunden, Einkaufsteams oder Auftraggeber eine CO2-Bescheinigung von Lieferanten anfordern: Anlass, Erwartungsniveau und vorsichtige Antwort mit einem indikativen CO₂e-Dokument.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title: "CO2-Bescheinigung Lieferanten: warum Kunden sie anfordern",
    description:
      "Einordnung für KMU-Lieferanten: warum eine CO₂e-Bescheinigung angefragt wird, was in der Praxis erwartet wird und wo die Grenzen eines indikativen Dokuments liegen.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function SupplierCarbonAttestationDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bescheinigung Lieferanten",
    url: pageUrl,
    description:
      "Praktischer Leitfaden: verstehen, warum Kunden oder Einkaufsteams eine CO2-Bescheinigung von Lieferanten anfordern, welches Niveau meistens erwartet wird und wie ein KMU mit einem indikativen, standardisierten CO₂e-Dokument vorsichtig antworten kann.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    inLanguage: "de-DE",
  };

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
        name: "CO2-Bescheinigung Lieferanten",
        item: pageUrl,
      },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "de-DE",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kann ein Einkäufer eine extern geprüfte CO2-Bilanz verlangen?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ja, ein Auftraggeber kann im Vertrag oder Lastenheft bestimmte Anforderungen vorgeben. In der Praxis geht es häufig zuerst um eine einfache CO₂e-Information für ein Screening. Wenn eine externe Prüfung gefordert wird, müssen Standard und Umfang genau geklärt werden.",
        },
      },
      {
        "@type": "Question",
        name: "Bedeutet CO2-Bescheinigung Lieferanten automatisch CSRD oder ESRS?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Nein. Lieferantenanfragen sind meist eine Informationssammlung in der Wertschöpfungskette. Ein indikatives CO₂e-Dokument kann als Screening-Information dienen, ersetzt aber kein regulatorisches Reporting.",
        },
      },
      {
        "@type": "Question",
        name: "Was tun, wenn Scope 1, 2 und 3 abgefragt werden?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Es sollte geklärt werden, ob der Kunde eine indikative Information oder eine detaillierte Treibhausgasinventur erwartet. Wenn eine umfassende Inventur verlangt wird, ist eine einfache CO₂e-Bescheinigung nicht das passende Ersatzformat.",
        },
      },
    ],
  };

  return (
    <section
      id="supplier-carbon-attestation"
      data-section="supplier-carbon-attestation"
      className="mx-auto max-w-7xl px-6 pb-24 pt-12"
    >
      {/* JSON-LD */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* PAGE HEADER */}
      <header className="mb-14">
        <p className="mb-3 text-xs uppercase tracking-wider text-[#64748B]">
          CO2-Anfragen von Kunden verstehen
        </p>

        <h1 className="mb-6 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          CO2-Bescheinigung Lieferanten: was Kunden wirklich anfordern
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
          Wenn ein Kunde, Einkaufsteam oder Auftraggeber eine CO2-Bescheinigung
          von einem Lieferanten anfordert, ist das in vielen Fällen keine
          regulatorische Prüfung. Häufig geht es um eine operative Anfrage des
          Einkaufs: eine einfache, nachvollziehbare und wiederverwendbare{" "}
          <strong>CO₂e-Information</strong> für ESG-Screening, Lieferantenaufnahme
          oder bestimmte Ausschreibungen.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/"
            className="inline-block rounded-md border border-[#0B3A63] px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
          >
            Zurück zum Guide
          </Link>

          <Link
            href="/de/co2-nachweis-lieferanten/"
            className="inline-block rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
          >
            Lieferantenlösung ansehen
          </Link>
        </div>

        <div className="mt-10 h-[2px] w-20 bg-gray-300" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl space-y-12">
        <section id="why">
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63]">
            Warum ein Einkäufer CO2-Angaben von einem Lieferanten anfordert
          </h2>

          <p className="mb-4 leading-relaxed text-gray-700">
            Unternehmen mit Transparenzanforderungen müssen zunehmend
            Umweltinformationen entlang ihrer Wertschöpfungskette sammeln. In
            der Praxis zeigt sich das durch Lieferantenfragebögen, Kriterien für
            verantwortlichen Einkauf und einfache Nachweise für interne
            Entscheidungen.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
            <h3 className="mb-3 text-lg font-semibold text-[#0B3A63]">
              Was der Einkäufer meistens erhalten möchte
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>eine schnell verfügbare CO₂e-Information</li>
              <li>ein dokumentierbares und teilbares Format</li>
              <li>eine erklärte und stabile Methode</li>
              <li>ein Dokument, das für mehrere Anfragen nutzbar bleibt</li>
              <li>ein Mindestmaß an Nachvollziehbarkeit: Kennung, Datum, Version</li>
            </ul>
          </div>
        </section>

        <section id="acceptable">
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63]">
            Wann das sinnvoll ist - und wann es genauer geklärt werden muss
          </h2>

          <p className="mb-6 leading-relaxed text-gray-700">
            Eine Anfrage nach einer CO2-Bescheinigung für Lieferanten ist
            meistens sinnvoll, wenn sie dem <strong>Screening</strong>, der{" "}
            <strong>Lieferantenaufnahme</strong> oder einem{" "}
            <strong>internen Vergleich</strong> dient. Kritisch wird sie, wenn
            sie als Ersatz für eine regulatorische CO2-Bilanz, eine externe
            Prüfung oder eine formelle Absicherung verstanden wird.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#0B3A63]">
                Häufigster Fall
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>RSE- oder ESG-Fragebögen von Kunden</li>
                <li>Vorqualifizierung vor einer Geschäftsbeziehung</li>
                <li>Ausschreibung mit informativem Carbon-Kriterium</li>
                <li>interne Unterlage für verantwortlichen Einkauf</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#0B3A63]">
                Fälle, die eingerahmt werden müssen
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Anforderung einer externen Prüfung</li>
                <li>ausdrücklich vorgegebener geprüfter Standard</li>
                <li>offizielles CSRD- oder ESRS-Reporting</li>
                <li>detaillierte und extern geprüfte Scope-Angaben</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="what-to-provide">
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63]">
            Was Ihr Kunde als Unterlage erwartet
          </h2>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Name der Organisation</li>
              <li>abgedecktes Jahr und Ausstellungsdatum</li>
              <li>aggregiertes CO₂e-Ergebnis</li>
              <li>deklarierte Methode</li>
              <li>eindeutige Dokumentenkennung</li>
              <li>sichtbare Hinweise: indikativ, keine externe Prüfung, kein CSRD-/ESRS-Reporting</li>
            </ul>
          </div>
        </section>

        <section id="how-to-answer">
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63]">
            Wie Sie ohne Überversprechen antworten
          </h2>

          <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Geeignet:</strong> "indikative CO₂e-Information",
                "spend-based Schätzung", "Dokument für ESG-Screening".
              </li>
              <li>
                <strong>Zu vermeiden:</strong> Aussagen mit amtlichem,
                regulatorischem oder extern bestätigtem Anspruch, wenn diese
                Prüfung nicht ausdrücklich erbracht wurde.
              </li>
            </ul>
          </div>
        </section>

        <section id="why-standard">
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63]">
            Warum ein standardisiertes Dokument wirklich hilft
          </h2>

          <p className="mb-4 leading-relaxed text-gray-700">
            Ein standardisiertes Dokument reduziert die Zeit, die für jede
            einzelne Anfrage benötigt wird. Es vermeidet Missverständnisse über
            Umfang und Methode und erleichtert die Weitergabe an Einkaufsteams,
            ohne eine weitergehende Anforderung zu ersetzen.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/de/co2-nachweis-lieferanten/"
              className="inline-block rounded-md border border-[#0B3A63] px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
            >
              CO2-Nachweis Lieferanten
            </Link>
            <Link
              href="/de/co2-bescheinigung-kmu/"
              className="inline-block rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
            >
              CO2-Bescheinigung KMU
            </Link>
          </div>
        </section>

        <section id="faq">
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63]">
            Häufige Fragen
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 font-semibold text-[#0B3A63]">
                Kann ein Einkäufer eine extern geprüfte CO2-Bilanz verlangen?
              </h3>
              <p className="leading-relaxed text-gray-700">
                Ja, ein Auftraggeber kann vertraglich bestimmte Anforderungen
                vorgeben. In der Praxis beziehen sich viele Anfragen jedoch auf
                eine einfache Screening-Information. Wenn eine externe Prüfung
                verlangt wird, sollten Standard und Umfang genau angefragt
                werden.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 font-semibold text-[#0B3A63]">
                Bedeutet CO2-Bescheinigung Lieferanten automatisch CSRD oder ESRS?
              </h3>
              <p className="leading-relaxed text-gray-700">
                Nein. Lieferantenanfragen sind meistens eine
                Informationssammlung in der Wertschöpfungskette. Ein indikatives
                Dokument kann als Screening-Information nützlich sein, aber nicht
                als regulatorisches Reporting.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 font-semibold text-[#0B3A63]">
                Was tun, wenn Scope 1, 2 und 3 abgefragt werden?
              </h3>
              <p className="leading-relaxed text-gray-700">
                Es sollte geklärt werden, ob der Kunde eine indikative
                Information oder eine detaillierte Treibhausgasinventur erwartet.
                Wenn eine umfassende Inventur gefordert ist, ist dieses einfache
                Dokument nicht das richtige Ersatzformat.
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="pt-2">
          <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
            <h2 className="mb-3 text-2xl font-extrabold">
              Schnell antworten, ohne den Rahmen zu überschreiten
            </h2>
            <p className="max-w-2xl leading-relaxed text-white/90">
              Wenn Ihr Kunde eine CO2-Bescheinigung von Lieferanten anfragt,
              geht es oft um eine verwertbare CO₂e-Information für den Einkauf.
              Certif-Scope erstellt ein indikatives, strukturiertes,
              nachvollziehbares und prüfbares Dokument.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/de/preise/"
                className="inline-block rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#0B3A63] transition-colors hover:bg-gray-100"
              >
                Preis ansehen
              </Link>
              <Link
                href="/de/grenzen-und-compliance/"
                className="inline-block rounded-md border border-white/40 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
              >
                Grenzen verstehen
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/de/warum-unternehmen-co2-angaben-anfordern/"
              className="inline-block rounded-md border border-[#0B3A63] px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
            >
              Zurück zum Guide
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
