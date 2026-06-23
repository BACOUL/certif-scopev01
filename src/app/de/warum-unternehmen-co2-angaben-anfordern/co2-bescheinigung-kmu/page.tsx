// PATH: src/app/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - CO2-BESCHEINIGUNG KMU
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/";

export const metadata: Metadata = {
  title:
    "CO2-Bescheinigung KMU: was liefern ohne CO2-Bilanz | Certif-Scope",
  description:
    "Leitfaden für KMU: CO2-Anfragen verstehen, Screening von umfassender CO2-Bilanz unterscheiden und mit einer indikativen, standardisierten CO2e-Bescheinigung vorsichtig antworten.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/",
    },
  },
  openGraph: {
    title: "CO2-Bescheinigung KMU: was liefern ohne CO2-Bilanz",
    description:
      "Warum KMU CO2-Anfragen erhalten und wie sie mit einem indikativen, eingeordneten und wiederverwendbaren CO2e-Dokument antworten können.",
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

export default function CarbonAttestationSMEsDE() {
  return (
    <section
      id="carbon-attestation-smes"
      data-section="carbon-attestation-smes"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CO2-Bescheinigung KMU",
            url: pageUrl,
            description:
              "Leitfaden für KMU: verstehen, warum CO2-Angaben angefragt werden, was in der Praxis meist erwartet wird und wie eine indikative CO2e-Bescheinigung eingeordnet werden sollte.",
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
                  name: "CO2-Bescheinigung KMU",
                  item: pageUrl,
                },
              ],
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO2-Anfragen verstehen - Fall Nr. 4
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          CO2-Bescheinigung KMU: was liefern, wenn keine CO2-Bilanz vorliegt
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Viele KMU erhalten heute CO2-Anfragen von Kunden, Käufern, Banken
          oder Versicherern. In den meisten Fällen handelt es sich nicht um eine
          direkte regulatorische Pflicht oder Prüfung: Gefragt ist ein einfacher
          CO2e-Indikator für Screening und interne Dokumentation.
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

          <Link
            href="/de/pruefen/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Dokument prüfen
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1 */}
          <section id="why">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Warum KMU CO2-Anfragen erhalten
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Auch wenn Ihr Unternehmen selbst kein regulatorisches
              ESG-Reporting erstellt, können Ihre Partner davon betroffen sein
              oder interne Regeln für verantwortlichen Einkauf nutzen. Sie
              sammeln dann Umweltinformationen entlang ihrer Wertschöpfungskette.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Die häufigste Situation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Häufig wird nicht verlangt, dass ein KMU eine regulatorische
                Anforderung erfüllt. Es soll einen einfachen, wiederverwendbaren
                und dokumentierbaren CO2e-Indikator bereitstellen, damit Dossiers
                und Fragebögen nicht offen bleiben.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section id="what-is-expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Was in vielen Fällen wirklich erwartet wird
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Eine Anfrage nach "CO2-Bilanz KMU" wird oft allgemein formuliert.
              Praktisch ist der Bedarf häufig einfach: ein Dokument, mit dem ein
              Dritter die Information "CO2e-Angabe vorhanden" ablegen und
              nachvollziehen kann.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Was der Dritte schnell prüfen möchte
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>ein aggregiertes, indikatives CO2e-Ergebnis</li>
                <li>ein abgedecktes Jahr und ein Ausstellungsdatum</li>
                <li>eine erklärte Methode, etwa ausgabenbasiert</li>
                <li>ein standardisiertes und identifizierbares PDF</li>
                <li>klare Grenzen: keine Prüfung, kein CSRD-/ESRS-Reporting</li>
                <li>einen Link oder QR-Code zur dokumentarischen Prüfung</li>
              </ul>
            </div>
          </section>

          {/* 3 */}
          <section id="difference">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Indikative Schätzung vs. detaillierte CO2-Bilanz
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              KMU verwechseln häufig "CO2-Bilanz" mit einer geprüften
              detaillierten Inventur. Das sind unterschiedliche Objekte. Eine
              indikative Schätzung passt zu Screening. Eine detaillierte Bilanz
              dient einer breiteren Inventur und ist oft deutlich aufwendiger.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Schätzung / indikatives Dokument (Screening)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Ziel: schnell auf eine Drittanfrage antworten</li>
                  <li>aggregiertes Ergebnis und erklärte Methode</li>
                  <li>sichtbare Grenzen</li>
                  <li>geeignet für Einkaufs-, Bank- oder Versicherungsworkflows</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Detaillierte CO2-Bilanz (Inventur)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Ziel: detaillierte Inventur und Steuerung</li>
                  <li>physische Daten, Scopes und Annahmen</li>
                  <li>gegebenenfalls Prüfung oder externe Begleitung</li>
                  <li>signifikanter Aufwand bei Kosten und Zeit</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              In Onboarding- oder Screening-Kontexten ist eine Prüfung selten
              ausdrücklich verlangt. Wenn ein Standard oder eine Prüfung genannt
              wird, sollte der genaue Rahmen geklärt werden: Norm, Umfang und
              Scopes.
            </p>
          </section>

          {/* 4 */}
          <section id="how-to-respond">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Wie KMU effizient antworten können, ohne zu überdimensionieren
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Eine passende Antwort reduziert Reibung: ein standardisiertes,
              lesbares und wiederverwendbares Dokument, das Umfang und Grenzen
              klar nennt. So werden wiederholte Rückfragen reduziert.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Sichere Formulierungen
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Geeignet:</strong> "indikative CO2e-Schätzung",
                  "ausgabenbasierte Schätzung", "ESG-Screening-Unterlage",
                  "nicht geprüft".
                </li>
                <li>
                  <strong>Zu vermeiden:</strong> Aussagen mit offiziellem
                  Prüfanspruch, "als CSRD-/ESRS-Reporting", "CO2-Prüfung",
                  "regulatorische Inventur".
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wenn ein Dritter einen Standard verlangt, fragen Sie nach:
                  genaue Norm, organisatorischer Umfang, erwartete Scopes und
                  Assurance-Niveau. Ohne diese Angaben handelt es sich häufig
                  um Screening.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="why-standardize">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Warum Standardisierung Zeit spart und Vertrauen schafft
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              KMU verlieren Zeit, wenn jede Anfrage einzeln beantwortet wird:
              unterschiedliche Dateien, unerklärte Methoden, fehlendes Datum
              oder kein Umfang. Ein standardisiertes Dokument macht Antworten
              schneller und reduziert Rückfragen.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>weniger manuell ausgefüllte Fragebögen</li>
              <li>weniger Unklarheit über den Umfang</li>
              <li>ein wiederverwendbares Format für mehrere Anfragen</li>
              <li>ein Mindestnachweis zur Ablage</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Nützliche Links
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link className="underline" href="/de/produkt/">
                    Produkt: standardisiertes CO2e-Dokument
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/grenzen-und-compliance/">
                    Grenzen & Compliance
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/methodik/">
                    Methodik (ausgabenbasiert)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/pruefen/">
                    Dokument prüfen
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Häufige Fragen (KMU)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Muss ein KMU eine CO2-Bilanz haben?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nicht in der Mehrzahl der Fälle. Viele Anfragen, die KMU
                  erhalten, hängen mit Screening in Einkauf, Bank oder
                  Versicherung zusammen. Wenn Prüfung oder Norm ausdrücklich
                  verlangt werden, sollte das im Lastenheft erkennbar sein.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Kann eine Schätzung geeignet sein?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, wenn die Anfrage einen informativen Indikator betrifft
                  und das Dokument seine Grenzen klar nennt: indikative
                  Schätzung, nicht geprüft, kein CSRD-/ESRS-Reporting, keine
                  umfassende Inventur.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Was tun, wenn ein Kunde auf Scope 1/2/3 verweist?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Klären Sie, ob eine Screening-Information oder eine
                  detaillierte Inventur erwartet wird. Wenn eine detaillierte
                  Inventur verlangt wird, ist ein indikatives Dokument nicht das
                  passende Ersatzformat. Wenn es um Screening geht, kann eine
                  eingeordnete und standardisierte Schätzung passen.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Auf CO2-Anfragen ohne Prüfung mit einem klaren Dokument reagieren
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Wenn Sie als KMU nach einer "CO2-Bilanz" gefragt werden, ist
                häufig ein einfacher Indikator für Screening gemeint.
                Certif-Scope erstellt ein indikatives, standardisiertes,
                nachvollziehbares und prüfbares CO2e-Dokument.
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
                Zurück zum Guide
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
              <nav aria-label="Inhalt CO2-Bescheinigung KMU">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Warum KMU diese Anfragen erhalten
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#what-is-expected"
                    >
                      2. Was erwartet wird
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#difference"
                    >
                      3. Schätzung vs. Bilanz
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#how-to-respond"
                    >
                      4. Wie antworten
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#why-standardize"
                    >
                      5. Warum standardisieren
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#faq">
                      6. FAQ
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
                Hinweis zum Umfang
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Dieser Leitfaden behandelt CO2-Anfragen an KMU im Screening:
                Einkauf, Bank, Versicherung oder Dossier. Ein indikatives
                Dokument kann passen, wenn es seine Grenzen klar nennt. Es
                ersetzt keine Prüfung und keine detaillierte Emissionsinventur.
              </p>

              <div className="mt-5">
                <Link
                  href="/de/grenzen-und-compliance/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Grenzen & Compliance
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
