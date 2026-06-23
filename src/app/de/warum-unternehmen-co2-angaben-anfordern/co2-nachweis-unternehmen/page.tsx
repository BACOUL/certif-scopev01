// PATH: src/app/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - CO2-NACHWEIS UNTERNEHMEN
   Temporary noindex while /de/* remains in staging per docs/localization/de-DE-runtime-seo-policy.md
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/";

export const metadata: Metadata = {
  title:
    "CO2-Nachweis Unternehmen: was liefern, ohne Prüfung | Certif-Scope",
  description:
    "Verstehen, was mit einem CO2-Nachweis oder CO2-Dokument für Unternehmen gemeint sein kann: Mindestinhalt für Screening, Grenzen und vorsichtige Antwort ohne Prüfung oder regulatorisches Reporting.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title: "CO2-Nachweis Unternehmen: was liefern, ohne Prüfung",
    description:
      "Warum ein CO2-Nachweis angefragt wird und wie ein Unternehmen mit einem indikativen, standardisierten und prüfbaren CO2e-Dokument für Screening antworten kann.",
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

export default function CompanyCarbonProofDE() {
  return (
    <section
      id="company-carbon-proof"
      data-section="company-carbon-proof"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CO2-Nachweis Unternehmen",
            url: pageUrl,
            description:
              "Leitfaden: die Idee eines CO2-Nachweises für Unternehmen verstehen und mit einem standardisierten, indikativen und prüfbaren Dokument für Screening antworten.",
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
                  name: "CO2-Nachweis Unternehmen",
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
          CO2e-Anfragen verstehen - Synthese "Nachweis"
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          CO2-Nachweis Unternehmen: was das bedeutet und was Sie liefern können
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Ein "CO2-Nachweis" oder "CO2-Dokument" ist nicht automatisch eine
          Prüfung oder eine umfassende CO2-Bilanz. In vielen Workflows
          (Einkauf, Bank, Versicherung) geht es um einen Mindestnachweis: ein
          lesbares und archivierbares Dokument mit einem indikativen
          CO2e-Ergebnis, erklärter Methode und sichtbaren Grenzen.
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
          <section id="definition">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Definition: Was heißt "CO2-Nachweis" in der Praxis?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In B2B-Anfragen sind "CO2-Nachweis", "CO2-Dokument" oder
              "CO2-Angaben" oft nicht standardisierte Begriffe. Gemeint ist
              häufig ein Dokument, mit dem ein Dritter sehen kann, dass ein
              CO2e-Indikator vorliegt, nach einer beschriebenen Methode erzeugt
              wurde und in einer Akte abgelegt werden kann.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Zwei Nachweisniveaus, die nicht verwechselt werden sollten
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  <strong>Mindestnachweis (Screening)</strong>: indikativer
                  CO2e-Indikator, Methode und Grenzen.
                </li>
                <li>
                  <strong>Stärkerer Nachweis (Prüfung / Assurance)</strong>:
                  detaillierte Inventur und externe Prüfung.
                </li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="why-requested">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Warum ein CO2-Nachweis angefordert wird
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Die Anfrage zielt selten auf "perfekte Carbon-Daten". Häufig
              braucht eine Organisation ein wiederverwendbares Dokument für
              Workflows: Lieferantenqualifizierung, Kreditunterlagen,
              Versicherungsanalyse, ESG-Fragebögen oder Ausschreibungen. Ohne
              Mindestnachweis bleiben informelle Angaben schwer vergleichbar
              und schwer archivierbar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Einkauf
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">
                  Lieferanten-Screening
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Vergleichen, qualifizieren und einen Mindestnachweis ablegen.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Bank
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">
                  Unterlagen / Risiko
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Informativer ESG-Indikator für interne Dokumentation.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Versicherung
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">
                  Exposition
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Branchenverständnis und Einordnung eines Umweltprofils.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="what-to-provide">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Was liefern: Mindestinhalt eines geeigneten Nachweises
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Damit ein CO2-Nachweis praktisch nutzbar ist, muss er lesbar und
              vergleichbar sein. Er muss außerdem eingeordnet werden: Es handelt
              sich um eine indikative Schätzung für Screening, nicht um eine
              Prüfung oder regulatorisches Reporting.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checkliste "Mindestnachweis" (Screening)
              </h3>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>einfache Identifikation der Einheit (Name)</li>
                <li>abgedecktes Jahr und Ausstellungsdatum</li>
                <li>aggregiertes CO2e-Ergebnis (tCO2e) und Einheit</li>
                <li>erklärte Methode (z. B. ausgabenbasiert) und Faktoren-Version</li>
                <li>angegebener Umfang (was enthalten oder ausgeschlossen ist)</li>
                <li>sichtbare Hinweise: indikativ, keine Prüfung, kein CSRD-/ESRS-Reporting</li>
                <li>Nachvollziehbarkeit: eindeutige Kennung, Link/QR zur Prüfung</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                Diese Checkliste ersetzt keine umfassende Inventur, deckt aber
                die häufigsten operativen Screening-Anforderungen ab.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section id="verification">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Was einen Nachweis glaubwürdig macht: Nachvollziehbarkeit und Prüfung
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Glaubwürdigkeit im Screening bedeutet nicht Prüfung: Entscheidend
              ist die Fähigkeit, ein standardisiertes, stabiles und
              kontrollierbares Dokument bereitzustellen. Dritte möchten
              Integrität und Herkunft prüfen können, ohne erst jemanden
              kontaktieren zu müssen.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Einfache Vertrauenssignale (Screening)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>eindeutige Dokumentenkennung</li>
                <li>öffentlicher Prüflink</li>
                <li>Datum und Formatversion</li>
                <li>sichtbare Angaben zu Umfang und Grenzen</li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/de/pruefen/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Dokument prüfen
                </Link>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="when-not-enough">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Wann ein minimaler CO2-Nachweis nicht ausreicht
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ein Mindestnachweis ist für Screening nützlich. Er passt nicht,
              wenn die Anfrage ausdrücklich einen Standard, eine externe Prüfung
              oder eine detaillierte Inventur verlangt. Dann sollten Rahmen,
              Norm, Umfang, Scopes und Assurance-Niveau schriftlich geklärt
              werden.
            </p>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                Beispiele für Anfragen, die geklärt werden müssen
              </h3>
              <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                <li>"CO2-Prüfung" oder "externe Assurance"</li>
                <li>"ISO 14064-1 erforderlich"</li>
                <li>offizielles CSRD-/ESRS-Reporting</li>
                <li>Anforderung einer detaillierten, geprüften Scope-1-, Scope-2- und Scope-3-Inventur</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Nützliche Links
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link className="underline" href="/de/grenzen-und-compliance/">
                    Grenzen & Compliance
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/methodik/">
                    Methodik (ausgabenbasierte Schätzung)
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/"
                  >
                    Fall Lieferanten
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/"
                  >
                    Fall Ausschreibung
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/"
                  >
                    Fall Banken & Versicherungen
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Häufige Fragen (CO2-Nachweis)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Bedeutet "CO2-Nachweis" automatisch eine geprüfte CO2-Bilanz?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nein, nicht automatisch. Der Begriff wird oft allgemein
                  verwendet. Zuerst sollte geklärt werden, welches Niveau
                  erwartet wird: Screening als Mindestnachweis oder eine
                  stärkere Prüfung. In vielen Fällen geht es um Screening.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Ist es angemessen, eine Schätzung bereitzustellen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, wenn die Anfrage auf einen informativen Indikator zielt
                  und das Dokument seine Grenzen klar nennt: indikative
                  Schätzung, keine Prüfung, kein CSRD-/ESRS-Reporting.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Was macht den Nachweis praktisch nutzbar?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ein standardisiertes Format, eine erklärte Methode, sichtbare
                  Grenzen und eine einfache Prüfung per Kennung und Link/QR.
                  Das macht das Dokument für institutionelle Workflows nutzbar.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Einen klaren und prüfbaren CO2-Nachweis für Screening bereitstellen
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Wenn ein "CO2-Nachweis" angefragt wird, ist häufig ein
                Screening-Dokument gemeint: indikativ, standardisiert,
                archivierbar und kontrollierbar. Certif-Scope erstellt ein
                eingeordnetes, nachvollziehbares und prüfbares CO2e-Dokument.
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
              <nav aria-label="Inhalt CO2-Nachweis">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#definition">
                      1. Definition
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why-requested">
                      2. Warum angefragt
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-to-provide">
                      3. Mindestinhalt
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#verification">
                      4. Nachvollziehbarkeit & Prüfung
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#when-not-enough">
                      5. Wann es nicht reicht
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
                Ein minimaler CO2-Nachweis ist für Screening in Einkauf,
                Bank- oder Versicherungsunterlagen nützlich, wenn er als
                indikative Schätzung mit klaren Grenzen dargestellt wird. Er
                ersetzt keine Prüfung und keine umfassende Emissionsinventur.
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

