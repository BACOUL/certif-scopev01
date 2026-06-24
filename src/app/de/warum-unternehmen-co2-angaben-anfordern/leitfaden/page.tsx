// PATH: src/app/de/warum-unternehmen-co2-angaben-anfordern/leitfaden/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - UEBERBLICK (LEITFADEN)
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/leitfaden/";

export const metadata: Metadata = {
  title:
    "CO2-Angaben Leitfaden: Anfragen richtig einordnen | Certif-Scope",
  description:
    "Überblick: CO2e-Anfragen von Kunden, Ausschreibungen, Banken, Versicherern oder KMU schnell einordnen, Screening von formellen Anforderungen unterscheiden und den passenden Leitfaden öffnen.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
      fr: "https://www.certif-scope.com/fr/why-companies-ask/guide/",
    },
  },
  openGraph: {
    title: "CO2-Angaben Leitfaden: Anfragen richtig einordnen",
    description:
      "Orientierung für CO2e-Anfragen: Welcher Fall liegt vor, welches Antwortniveau ist gemeint und wann reicht ein indikatives CO2e-Dokument nicht aus?",
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

export default function WhyCompaniesAskOverviewGuideDE() {
  return (
    <section
      id="why-companies-ask-guide"
      data-section="why-companies-ask-guide"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - WebPage (HUB GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CO2-Angaben Leitfaden",
            url: pageUrl,
            description:
              "Überblick: eine CO2e-Anfrage schnell einordnen (Lieferant, Ausschreibung, Bank/Versicherung, KMU) und die passenden Leitfäden öffnen.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com/de/",
            },
            inLanguage: "de-DE",
            breadcrumb: {
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
                  name: "Leitfaden",
                  item: pageUrl,
                },
              ],
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO2e-Anfragen verstehen - Überblick
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          CO2-Angaben Leitfaden
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Diese Seite dient als Orientierung. Sie hilft Ihnen, die erhaltene
          CO2e-Anfrage einzuordnen, das praktisch erwartete Niveau zu verstehen
          und den passenden Leitfaden zu öffnen. In vielen Fällen geht es um{" "}
          <strong>informatives Screening</strong>, nicht um eine Prüfung, eine
          offizielle Drittbestätigung oder regulatorisches Reporting.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Warum Unternehmen CO2-Angaben anfordern
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

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1. QUICK DIAG */}
          <section id="diagnostic">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Schnelldiagnose: Welche Art von Anfrage haben Sie erhalten?
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-gray-700 leading-relaxed mb-5">
                Wenn die Anfrage einen der folgenden Hinweise enthält, lässt
                sich der Fall meist in wenigen Sekunden einordnen:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Fall A - Einkauf / Kunde
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    "Bitte stellen Sie eine CO2-Bescheinigung für Lieferanten bereit"
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Typische Anfrage für Lieferantenaufnahme oder ESG-Fragebogen
                    im Einkauf.
                  </p>
                  <Link
                    href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Leitfaden "Lieferanten" öffnen
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Fall B - Ausschreibung
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    "CO2-Kriterium in Ausschreibung / RFP"
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Vergleichskriterium oder erwartete Anlage für Bewertung und
                    Vergabeunterlagen.
                  </p>
                  <Link
                    href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Leitfaden "Ausschreibung" öffnen
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Fall C - Bank / Versicherung
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    "ESG- oder CO2e-Fragebogen für Kredit- oder Versicherungsunterlagen"
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Informativer Screening-Einsatz für interne Risiko- oder
                    ESG-Einordnung.
                  </p>
                  <Link
                    href="/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Leitfaden "Banken & Versicherungen" öffnen
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Fall D - KMU ohne CO2-Bilanz
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    "Wir haben keine CO2-Bilanz, was sollen wir liefern?"
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Pädagogische Einordnung: indikative Bescheinigung statt
                    umfassende Treibhausgasinventur.
                  </p>
                  <Link
                    href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Leitfaden "KMU" öffnen
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 2. WHAT IS ACCEPTABLE */}
          <section id="acceptable">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Was in vielen Fällen angemessen ist: Screening
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Die meisten CO2e-Anfragen sind Screening-Anfragen: ein einfacher,
              konsistenter und archivierbarer Indikator. Ein Dokument ist dafür
              meist geeignet, wenn es als indikative Schätzung mit klarem
              Umfang und sichtbaren Grenzen dargestellt wird.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Geeignet (Screening / Unterlagen)
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>ESG-Fragebögen von Kunden oder Lieferantenportalen</li>
                  <li>Onboarding im Einkauf</li>
                  <li>Ausschreibung mit informativem CO2-Kriterium</li>
                  <li>Bank- oder Versicherungsunterlagen für interne Analyse</li>
                  <li>minimales Dokument zur Ablage</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Zu klären / nicht passend
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>Prüfung, offizielle Drittbestätigung oder externe Assurance</li>
                  <li>ausdrückliche Anforderung nach ISO 14064-1</li>
                  <li>offizielles CSRD- oder ESRS-Reporting</li>
                  <li>detaillierte, extern geprüfte Scope-1-, Scope-2- und Scope-3-Inventur</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. WHAT TO PROVIDE */}
          <section id="what-to-provide">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Empfohlener Mindestinhalt für einen wiederverwendbaren CO2e-Nachweis
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Um Rückfragen zu vermeiden, sollte das Dokument lesbar und
              wiederverwendbar sein: ein aggregiertes Ergebnis, eine erklärte
              Methode, ein angegebener Umfang, Grenzen und Elemente zur
              Nachvollziehbarkeit.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checkliste "Mindestnachweis"
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Name der Organisation (einfache Identifikation)</li>
                <li>abgedecktes Jahr und Ausstellungsdatum</li>
                <li>aggregiertes CO2e-Ergebnis (tCO2e)</li>
                <li>erklärte Methode (z. B. ausgabenbasiert) und Faktoren-Version</li>
                <li>angegebener Umfang (was einbezogen oder ausgeschlossen ist)</li>
                <li>sichtbare Hinweise: indikativ, keine Prüfung, kein CSRD-/ESRS-Reporting</li>
                <li>Nachvollziehbarkeit: eindeutige Kennung und Link/QR zur Prüfung</li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Lesen: "CO2-Nachweis Unternehmen"
                </Link>
              </div>
            </div>
          </section>

          {/* 4. NEXT STEPS */}
          <section id="next-steps">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Leitfäden nach Fall öffnen
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Jede der folgenden Seiten beantwortet eine eigene Such- und
              Nutzungssituation und erklärt, was erwartet wird, welche
              Formulierungen geeignet sind und welche Fälle zu klären sind.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Fall A
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    CO2-Bescheinigung Lieferanten
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Onboarding oder ESG-Fragebogen eines Kunden - häufigster Fall.
                  </p>
                </div>
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Öffnen
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Fall B
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    CO2-Bescheinigung Ausschreibung
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    CO2-Kriterium in RFP oder Ausschreibung - Vergleich und Dossier.
                  </p>
                </div>
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Öffnen
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Fall C
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    CO2-Anforderungen Banken & Versicherungen
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Unterlagen für Risiko- oder ESG-Screening, nicht als Garantie.
                  </p>
                </div>
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Öffnen
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Fall D
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    CO2-Bescheinigung für KMU
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Pädagogische Seite: was liefern, wenn keine CO2-Bilanz vorliegt.
                  </p>
                </div>
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Öffnen
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Synthese
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    CO2-Nachweis Unternehmen
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Definition und Checkliste für einen Mindestnachweis im Screening.
                  </p>
                </div>
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Öffnen
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Benötigen Sie ein klares, wiederverwendbares CO2e-Dokument?
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope erstellt eine indikative, standardisierte,
                nachvollziehbare und prüfbare CO2e-Bescheinigung für
                Einkaufs-, Bank-, Versicherungs- und ESG-Screening-Workflows.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/preise/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Preis ansehen
                </Link>
                <Link
                  href="/de/produkt/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Produkt verstehen
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/de/warum-unternehmen-co2-angaben-anfordern/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Zurück zu "Warum Unternehmen CO2-Angaben anfordern"
              </Link>
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
              <nav aria-label="Inhalt Leitfaden">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#diagnostic">
                      1. Schnelldiagnose
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#acceptable">
                      2. Was geeignet ist
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-to-provide">
                      3. Mindestinhalt
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#next-steps">
                      4. Leitfäden nach Fall
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#cta">
                      Weitergehen
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Wichtiger Hinweis
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Dieser Überblick ist ein Orientierungsleitfaden. Details zur
                Berechnung und zur Methode werden auf der Methodikseite des
                Produkts erläutert.
              </p>

              <div className="mt-5">
                <Link
                  href="/de/methodik/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Methodik
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
