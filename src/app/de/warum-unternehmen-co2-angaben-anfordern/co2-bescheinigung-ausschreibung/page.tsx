// PATH: src/app/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - CO2-BESCHEINIGUNG AUSSCHREIBUNG (GUIDE)
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/";

export const metadata: Metadata = {
  title:
    "CO2-Bescheinigung Ausschreibung: was liefern, ohne Prüfung | Certif-Scope",
  description:
    "Ausschreibung: verstehen, was CO2-Angaben im Dossier bedeuten können, Screening von formellen Anforderungen unterscheiden und ein indikatives CO2e-Dokument ohne Überversprechen einordnen.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres/",
    },
  },
  openGraph: {
    title:
      "CO2-Bescheinigung Ausschreibung: was im Dossier wirklich gemeint sein kann",
    description:
      "Praktischer Leitfaden: Screening oder formelle Anforderung, was in Vergabeunterlagen erwartet wird und wie ein KMU mit einem indikativen CO2e-Dokument vorsichtig antworten kann.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function CarbonAttestationTenderDE() {
  const faq = [
    {
      q: "Ist es ausschließend, keine CO2-Bilanz in einer Ausschreibung zu haben?",
      a: "Nicht automatisch. In vielen Unterlagen dient der CO2e-Indikator dem Vergleich. Wenn keine formelle Anforderung an Standard, Umfang, Nachweise oder Assurance genannt wird, kann eine konsistente, datierte und klar eingeordnete Schätzung für Screening geeignet sein.",
    },
    {
      q: "Kann eine ausgabenbasierte Schätzung geeignet sein?",
      a: "Ja, wenn keine Methode vorgegeben ist und der Zweck Screening ist. Die Methode und ihre Grenzen müssen klar genannt werden: indikativ, keine Prüfung, keine umfassende Inventur, kein CSRD-/ESRS-Reporting.",
    },
    {
      q: "Woran erkenne ich, ob eine detaillierte Inventur nach Scopes verlangt wird?",
      a: "Achten Sie auf formelle Signale: vorgegebener Standard wie GHG Protocol, detaillierter Umfang, erwartete Belege oder externe Prüfung. Ohne diese Elemente ist die Anfrage häufig Screening.",
    },
    {
      q: "Was antworten, wenn ISO 14064-1 erwähnt wird?",
      a: "Das ist ein anderer und anspruchsvollerer Rahmen. Bitten Sie schriftlich um Klarstellung zu Umfang, erwarteten Daten und Assurance-Niveau. Eine aggregierte indikative Schätzung darf nicht als ISO-Inventur dargestellt werden.",
    },
    {
      q: "Was konkret als Dossier-PDF liefern?",
      a: "Ein klares und archivierbares PDF: aggregiertes CO2e-Ergebnis, abgedecktes Jahr, erklärte Methode, sichtbare Grenzen, Ausstellungsdatum, Kennung und Prüfmöglichkeit für Integrität und Herkunft.",
    },
  ];

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Warum Unternehmen CO2-Angaben anfordern",
        item: "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "CO2-Bescheinigung Ausschreibung",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bescheinigung Ausschreibung",
    url: pageUrl,
    description:
      "Praktischer Leitfaden: verstehen, was eine CO2-Anfrage in einer Ausschreibung bedeuten kann und wie ein Unternehmen mit einem datierten, archivierbaren und indikativen CO2e-Dokument für Screening antwortet.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    inLanguage: "de-DE",
    breadcrumb: jsonLdBreadcrumb,
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "de-DE",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie man auf eine CO2-Anfrage in einer Ausschreibung vorsichtig antwortet",
    description:
      "Drei Schritte, um Screening von formellen Anforderungen zu unterscheiden und ein dossierfähiges Dokument bereitzustellen.",
    totalTime: "PT15M",
    inLanguage: "de-DE",
    step: [
      {
        "@type": "HowToStep",
        name: "Anforderung lesen: Screening oder formelle Inventur?",
        text: "Prüfen Sie, ob ein Standard, ein detaillierter Umfang, Belege oder ein Assurance-Niveau ausdrücklich genannt werden. Ohne diese Elemente ist die Anfrage häufig Screening.",
      },
      {
        "@type": "HowToStep",
        name: "Klares und archivierbares Dokument bereitstellen",
        text: "Liefern Sie ein PDF mit aggregiertem CO2e-Ergebnis, abgedecktem Jahr, erklärter Methode, sichtbaren Grenzen, Datum und Kennung.",
      },
      {
        "@type": "HowToStep",
        name: "Überversprechen vermeiden",
        text: "Stellen Sie eine indikative Schätzung nicht als Prüfung oder umfassende Inventur dar. Bitten Sie um schriftliche Klarstellung, wenn Standard oder Umfang genannt werden, aber unklar bleiben.",
      },
    ],
  };

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a className="text-[#0B3A63] hover:underline underline-offset-4" href={href}>
        {label}
      </a>
    </li>
  );

  return (
    <section
      id="carbon-attestation-tender"
      data-section="carbon-attestation-tender"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      {/* TOP */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO2-Anfragen verstehen - Ausschreibungen (Screening)
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          CO2-Bescheinigung in Ausschreibungen: <br />
          <span className="text-[#0B3A63]/90">
            was wirklich angefragt wird und was KMU ohne Prüfung liefern können
          </span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          In Ausschreibungen werden Begriffe wie "CO2-Bilanz" oder
          "CO2-Nachweis" oft allgemein verwendet. Häufig geht es um{" "}
          <strong>Screening</strong>: Vergleich, Ablage und Einkaufsunterlagen,
          nicht um eine detaillierte Inventur mit Belegen und externer Prüfung.
          Diese Seite hilft, das richtige Antwortniveau zu finden.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Zurück zum Guide
          </Link>

          <Link
            href="/de/erstellen/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
          >
            Bescheinigung für Screening erstellen
          </Link>

          <Link
            href="/de/pruefen/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Dokument prüfen
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Was der Käufer meist sucht
            </p>
            <p className="text-gray-700 leading-relaxed">
              Einen lesbaren CO2e-Indikator und ein archivierbares Dokument für
              die Unterlagen.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Was das Dokument einordnet
            </p>
            <p className="text-gray-700 leading-relaxed">
              Methode, Umfang, sichtbare Grenzen und ein standardisiertes Format.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Wann eskaliert werden sollte
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vorgegebener Standard, detaillierter Umfang, Belege oder externe
              Prüfung.
            </p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* MOBILE TOC */}
          <section className="lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Inhalt
              </p>
              <nav aria-label="Inhalt CO2-Bescheinigung Ausschreibung mobil">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#why" label="Warum angefragt" />
                  <TocItem href="#criterion-vs-formal" label="Kriterium vs. formelle Anforderung" />
                  <TocItem href="#what-expected" label="Was im Dossier erwartet wird" />
                  <TocItem href="#what-to-provide" label="Was liefern" />
                  <TocItem href="#red-flags" label="Formelle Anforderung erkennen" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          {/* 1 */}
          <section id="why" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Warum CO2-Angaben in Ausschreibungen auftauchen
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Verantwortliche Beschaffung wird breiter eingesetzt. Käufer
              möchten ökologische Informationen dokumentieren und einen
              nachvollziehbaren Vergleich ablegen. CO2e ist ein einfacher
              Indikator, der in eine Bewertung einfließen kann, auch wenn das
              Lastenheft allgemein formuliert bleibt.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Was der Käufer in der Praxis sucht
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>einen lesbaren und vergleichbaren CO2e-Indikator</li>
                <li>ein Dokument, das den Unterlagen beigefügt oder archiviert werden kann</li>
                <li>ein Element für die umweltbezogene Einordnung</li>
                <li>eine einfache Grundlage, um Anbieterinformationen zu verfolgen</li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="criterion-vs-formal" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Bewertungskriterium oder formelle CO2-Anforderung?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Der zentrale Punkt: Ein Bewertungskriterium kann oft eine
              konsistente Schätzung verwenden, wenn Methode und Grenzen
              ausdrücklich genannt werden. Eine formelle Anforderung legt
              dagegen Methode, Umfang und manchmal Belege oder externe Prüfung
              fest.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Screening (häufig)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>gewichtetes Umweltkriterium</li>
                  <li>Indikator für den Vergleich</li>
                  <li>Methode nicht vorgegeben oder allgemein formuliert</li>
                  <li>wenige oder keine Belege ausdrücklich verlangt</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Formelle Anforderung (seltener, aber wichtiger)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>vorgegebener Standard oder Protokoll</li>
                  <li>detaillierter Umfang</li>
                  <li>erwartete Nachweise oder Rohdaten</li>
                  <li>Erwartung einer Drittprüfung</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Regel gegen Fehlinterpretation
              </h3>
              <p className="text-white/90 leading-relaxed">
                Wenn die Ausschreibung nicht ausdrücklich Methode, Umfang und
                Belege vorgibt, behandeln Sie die Anfrage vorsichtig als
                Screening und liefern Sie ein datiertes Dokument mit erklärter
                Methode und sichtbaren Grenzen.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section id="what-expected" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Was im Dossier erwartet wird: Lesbarkeit, Kohärenz, Nachvollziehbarkeit
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In Ausschreibungen ist das Ziel oft operativ: einen verständlichen
              Indikator und ein archivierbares Dokument liefern. Die
              Glaubwürdigkeit entsteht aus einem Standardformat, einer erklärten
              Methode, einem klaren Umfang und offen benannten Grenzen.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Dossierfähige Checkliste (Screening)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>aggregiertes CO2e-Ergebnis (tCO2e) und abgedecktes Jahr</li>
                <li>erklärte Methode (Prinzip und Faktoren-Version)</li>
                <li>sichtbare Grenzen: indikativ, keine Prüfung, keine umfassende Inventur, kein CSRD-/ESRS-Reporting</li>
                <li>Ausstellungsdatum und eindeutige Kennung</li>
                <li>Prüfmöglichkeit für Integrität und Herkunft</li>
                <li>identifizierbares, teilbares und leicht beizufügendes PDF</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="what-to-provide" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Was liefern: einfache Antwortformulierung für KMU
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ziel ist eine schnelle Antwort ohne Falle: ein klares Dokument
              liefern und nur dann eskalieren, wenn eine formelle Anforderung
              schriftlich genannt ist.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formulierungsbeispiel
              </h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  "Wir stellen für das Jahr [JJJJ] einen{" "}
                  <strong>indikativen</strong> CO2e-Indikator für Screening
                  bereit. Die Methode ist erklärt, Umfang und Grenzen sind
                  sichtbar genannt (keine Prüfung, keine umfassende Inventur,
                  kein CSRD-/ESRS-Reporting). Das Dokument ist datiert,
                  identifizierbar und prüfbar."
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/de/erstellen/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
                >
                  Bescheinigung für Screening erstellen
                </Link>
                <Link
                  href="/de/pruefen/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Dokument prüfen
                </Link>
                <Link
                  href="/de/co2-bilanz-kmu/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Pillar-Seite: CO2-Bilanz KMU
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Wenn das Dossier "Scopes" erwähnt
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bitten Sie um schriftliche Klärung, ohne den Prozess zu blockieren:
              </p>
              <div className="mt-3 rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-gray-700 leading-relaxed">
                  "Können Sie bitte bestätigen, ob eine nach Scopes
                  aufgeschlüsselte Inventur verlangt wird (Umfang, Methode,
                  Belege, Assurance-Niveau), oder ob in dieser Phase ein
                  Screening-Dokument mit aggregiertem CO2e-Ergebnis, Methode und
                  sichtbaren Grenzen ausreicht?"
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="red-flags" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Signale: Wann eine detaillierte CO2-Inventur nötig werden kann
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Eine detaillierte Inventur wird relevant, wenn die Ausschreibung
              ausdrücklich einen Rahmen und ein Nachweisniveau vorgibt. Dann
              müssen Lieferumfang, Zeitplan und Budget an diese Anforderung
              angepasst werden.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checkliste "formelle Anforderung"
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>vorgegebener Standard (GHG Protocol, ISO 14064-1 usw.)</li>
                <li>definierter Umfang (Organisation, Standorte, Grenzen)</li>
                <li>erwartete Belege (Energie, Kilometer, Einkäufe usw.)</li>
                <li>Scope-1-, Scope-2- und Scope-3-Aufschlüsselung mit Details verlangt</li>
                <li>Prüfung oder Assurance durch Dritte verlangt</li>
                <li>präziser Lieferumfang (Anhänge, Berechnungstabelle, Belege)</li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  In diesem Fall darf eine aggregierte indikative Schätzung
                  nicht als detaillierte Inventur dargestellt werden. Die
                  vorsichtige Strategie: schriftlich klären und sich bei
                  bestätigter Anforderung am genannten Rahmen ausrichten.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/de/scope-1-2-3-erklaert/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Scope 1/2/3: Erklärung für KMU
                  </Link>
                  <Link
                    href="/de/grenzen-und-compliance/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Grenzen & Compliance
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) FAQ - CO2-Bescheinigung in Ausschreibungen
            </h2>

            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div
                  key={`${idx}-${item.q}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-[#0B3A63] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Schnell auf eine CO2-Anfrage in Ausschreibungen reagieren
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Wenn das Ziel Screening ist, reicht häufig ein klares und
                archivierbares Dokument: aggregiertes CO2e-Ergebnis, Jahr,
                Methode, sichtbare Grenzen, Kennung und Prüfmöglichkeit.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/erstellen/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Bescheinigung für Screening erstellen
                </Link>
                <Link
                  href="/de/preise/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Preis ansehen
                </Link>
                <Link
                  href="/de/pruefen/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Dokument prüfen
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/de/warum-unternehmen-co2-angaben-anfordern/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Zurück zum Guide
              </Link>
              <a
                href="#top"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Nach oben
              </a>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Inhalt
              </p>
              <nav aria-label="Inhalt CO2-Bescheinigung Ausschreibung">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#why" label="Warum angefragt" />
                  <TocItem href="#criterion-vs-formal" label="Kriterium vs. Anforderung" />
                  <TocItem href="#what-expected" label="Was erwartet wird" />
                  <TocItem href="#what-to-provide" label="Was liefern" />
                  <TocItem href="#red-flags" label="Formelle Signale" />
                  <TocItem href="#faq" label="FAQ" />
                  <TocItem href="#cta" label="Weitergehen" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Hinweis zum Umfang
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Dieser Leitfaden behandelt CO2-Anfragen in Ausschreibungen, wenn
                sie Screening bezwecken: Vergleich, Ablage und Einkaufsunterlagen.
                Er ersetzt keine Prüfung und keine regulatorische Anforderung,
                wenn diese ausdrücklich genannt wird.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/de/grenzen-und-compliance/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Grenzen & Compliance
                </Link>
                <Link
                  href="/de/co2-bilanz-kmu/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Pillar-Seite: CO2-Bilanz KMU
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Verwandte Seiten
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="underline" href="/de/co2-bilanz-kmu/">
                    CO2-Bilanz KMU
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/scope-1-2-3-erklaert/">
                    Scope 1/2/3: Erklärung
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/"
                  >
                    Banken / Versicherungen: CO2-Anforderungen
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Schnellzugriff
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/de/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Startseite DE
                </Link>
                <a
                  href="#top"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Nach oben
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

