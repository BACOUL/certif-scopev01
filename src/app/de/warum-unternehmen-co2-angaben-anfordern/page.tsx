import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - WARUM UNTERNEHMEN CO2-ANGABEN ANFORDERN (DE)
   SEO-Rolle: indexierbarer Hub fuer das erklaerende Cluster.
   Die transaktionalen Loesungsseiten bleiben separat:
   /de/co2-bescheinigung/
   /de/co2-bescheinigung-kmu/
   /de/co2-bilanz-kmu/
   /de/co2-angaben-ausschreibung/
   /de/co2-nachweis-lieferanten/
   /de/co2-dokument-lieferanten/
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/";

export const metadata: Metadata = {
  title:
    "Warum Unternehmen CO2-Angaben anfordern | Certif-Scope",
  description:
    "Warum Kunden, Einkaufsteams, Banken, Versicherer und Auftraggeber CO2-Angaben von KMU anfordern: ESG-Screening, Lieferantenunterlagen und einfache dokumentarische Antworten.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title:
      "Warum Unternehmen CO2-Angaben anfordern",
    description:
      "Verstehen, warum Organisationen CO2-Angaben anfordern, in welchen Kontexten diese Fragen entstehen und was ein indikatives CO₂e-Dokument leisten kann - und was nicht.",
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

export default function WhyCompaniesAskGermanPage() {
  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - WebPage (STRICT, NON-PRODUCT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Warum Unternehmen CO2-Angaben anfordern",
            url: pageUrl,
            description:
              "Institutionelle Einordnung, warum Organisationen CO2-Angaben von Lieferanten, KMU und Geschäftspartnern anfordern und wie solche Angaben als Screening-Information genutzt werden können.",
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
                  name: "Startseite",
                  item: "https://www.certif-scope.com/de/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Warum Unternehmen CO2-Angaben anfordern",
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
          CO2-Anfragen verstehen - Lieferanten, Banken, Versicherer
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Warum Unternehmen CO2-Angaben anfordern
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Einkaufsteams, Banken, Versicherer, Auftraggeber und teilweise
          öffentliche Stellen fragen immer häufiger nach CO2-Angaben von KMU
          und Lieferanten. Diese Seite erklärt, warum solche Anfragen entstehen,
          in welchem Rahmen sie genutzt werden und was ein einfaches
          CO₂e-Dokument wirklich bedeutet - ohne daraus eine umfassende
          CO2-Bilanz oder eine externe Prüfung zu machen.
        </p>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 max-w-4xl">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Hilfreiche Seiten, um das erwartete Niveau einzuordnen
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              wenn die Anfrage wie eine Pflicht wirkt, prüfen Sie zuerst das
              tatsächlich erwartete Niveau auf der Seite{" "}
              <Link
                href="/de/co2-bilanz-kmu/pflicht/"
                className="underline text-[#0B3A63]"
              >
                CO2-Bilanz KMU: wann wird sie verlangt?
              </Link>
            </li>
            <li>
              wenn es um Budget und Aufwand geht, lesen Sie{" "}
              <Link
                href="/de/co2-bilanz-kmu/kosten/"
                className="underline text-[#0B3A63]"
              >
                was eine CO2-Bilanz für KMU kosten kann
              </Link>
            </li>
            <li>
              wenn Sie das erwartete Format sehen möchten, nutzen Sie das{" "}
              <Link
                href="/de/co2-bilanz-kmu/beispiel/"
                className="underline text-[#0B3A63]"
              >
                Beispiel einer CO2-Bilanz für KMU
              </Link>{" "}
              oder die{" "}
              <Link
                href="/de/co2-bilanz-kmu/pdf-vorlage/"
                className="underline text-[#0B3A63]"
              >
                PDF-Vorlage für ein einfaches CO2-Dokument
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Fall 1: Lieferanten
          </Link>
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Fall 2: Ausschreibung
          </Link>
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Fall 3: Banken & Versicherer
          </Link>
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Fall 4: KMU
          </Link>
          <Link
            href="/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Synthese: CO2-Nachweis
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 1 */}
        <section id="risk-classification">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Einordnung von Lieferantenrisiken
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Größere Organisationen ordnen Lieferanten zunehmend nach
            Umweltbezug und dokumentarischem Risiko ein. In der Praxis zeigt
            sich das in der Lieferantenaufnahme, in Einkaufsprozessen und in
            Ausschreibungen durch einfache Fragen nach CO2e-Daten.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>ESG-Screening von Lieferanten vor einer Zusammenarbeit</li>
            <li>Umweltangaben in Ausschreibungen oder Lieferantenfragebögen</li>
            <li>
              Vergleichbarkeit und Ablage eines Dokuments in einer internen
              Akte
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section id="finance-pressure">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Indirekter Druck über Banken und Versicherer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Banken und Versicherer berücksichtigen ökologische Faktoren
            zunehmend in internen Analysen, etwa bei Risiko, Branchenexposition
            oder ESG-Kohärenz. Dadurch entstehen Ketteneffekte: Auch wenn eine
            KMU selbst kein umfassendes ESG-Reporting erstellt, kann sie für ein
            Dossier eine einfache CO2e-Information beisteuern müssen.
          </p>
        </section>

        {/* 3 */}
        <section id="due-diligence">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due Diligence und Lieferantenaufnahme
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Viele Organisationen fragen CO2e-Informationen im Rahmen ihrer
            Lieferantenprüfung ab. Das operative Bedürfnis ist meist klar: ein
            strukturiertes, lesbares und wiederverwendbares Dokument, das in
            institutionelle Workflows passt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Für Lieferanten geht es darum, lange Rückfragen zu vermeiden. Ein
            standardisiertes CO2-Dokument senkt die Reibung und kann interne
            Freigabeprozesse beschleunigen, ohne ein weitergehendes Verfahren zu
            ersetzen.
          </p>
        </section>

        {/* 4 */}
        <section id="accessibility">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Zugängliche Antwort für nicht spezialisierte KMU
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Viele KMU können kurzfristig keine detaillierte Emissionsinventur
            erstellen oder externe Spezialisten einbinden. In vielen
            Alltagsanfragen geht es zuerst um eine indikative Information für
            ein Screening. Ein klar eingeordnetes CO2-Dokument erlaubt eine
            proportionierte Antwort.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Genau diesen Rahmen erklären die Seiten{" "}
            <Link
              href="/de/co2-bilanz-kmu/"
              className="underline text-[#0B3A63]"
            >
              CO2-Bilanz KMU
            </Link>
            ,{" "}
            <Link
              href="/de/co2-bilanz-kmu/beispiel/"
              className="underline text-[#0B3A63]"
            >
              Beispiel
            </Link>{" "}
            und{" "}
            <Link
              href="/de/co2-bilanz-kmu/pdf-vorlage/"
              className="underline text-[#0B3A63]"
            >
              PDF-Vorlage
            </Link>
            , die zeigen, welches Antwortniveau in einem Lieferantenkontext oft
            angefragt wird.
          </p>
        </section>

        {/* 5 */}
        <section id="cycle-acceleration">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Schnellere Freigabe- und Abstimmungsprozesse
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Freigaben dauern länger, wenn CO2e-Informationen uneinheitlich sind:
            anderes Format, unklarer Zeitraum, fehlende Methode oder keine
            Dokumentenkennung. Ein standardisiertes Dokument reduziert interne
            Bearbeitungszeit und begrenzt wiederholte Rückfragen.
          </p>
        </section>

        {/* 6 */}
        <section id="verification">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Schnelle dokumentarische Prüfung
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>eindeutige Dokumentenkennung</li>
            <li>sichtbare Angaben zu Umfang und Grenzen</li>
            <li>öffentliche Prüfroutine über eine URL</li>
            <li>QR-Code für Dossiers und interne Tools</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Beim Screening sucht ein Dritter meistens ein Dokument, das schnell
            abgelegt und geprüft werden kann: Herkunft, Integrität, Datum und
            Version.
          </p>
        </section>

        {/* 7 */}
        <section id="cross-border">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Grenzüberschreitende Nutzung: die Formatlogik
          </h2>
          <p className="text-gray-700 leading-relaxed">
            CO2e-Anfragen entstehen in ähnlicher Form in mehreren europäischen
            B2B-Kontexten. Entscheidend ist dabei oft keine einzelne lokale
            Norm, sondern ein klares, stabiles und wiederverwendbares Format
            für Einkauf, Finanzierung oder Versicherung.
          </p>
        </section>

        {/* 8 */}
        <section id="what-it-is-not">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Was dieses CO2-Dokument nicht ist
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>keine amtliche Bestätigung</li>
            <li>keine externe Prüfung</li>
            <li>keine Assurance-Leistung</li>
            <li>keine regulatorische Carbon-Meldung</li>
            <li>keine CSRD- oder ESRS-Meldung</li>
            <li>keine detaillierte Scope-1-, Scope-2- oder Scope-3-Inventur</li>
          </ul>
        </section>

        {/* 9 */}
        <section id="legal-scope">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Nutzungsrahmen: Screening und interne Dokumentation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das hier beschriebene CO2-Dokument ist indikativ. Es passt zu
            Screening, interner Ablage und einfachen Nachfragen aus Einkauf,
            Bank, Versicherung oder Lieferkette. Es ist keine externe Prüfung,
            keine behördliche Einordnung und keine umfassende Emissionsinventur.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Für eine KMU bedeutet das: Bevor ein aufwendigerer Prozess gestartet
            wird, sollte zuerst geklärt werden, ob die Anfrage tatsächlich eine{" "}
            <Link
              href="/de/co2-bilanz-kmu/pflicht/"
              className="underline text-[#0B3A63]"
            >
              Pflicht oder nur eine dokumentarische Erwartung
            </Link>{" "}
            beschreibt und welches{" "}
            <Link
              href="/de/co2-bilanz-kmu/kosten/"
              className="underline text-[#0B3A63]"
            >
              Aufwand- und Kostenniveau
            </Link>{" "}
            für den jeweiligen Fall sinnvoll ist.
          </p>
        </section>

        {/* CLUSTER LINKS */}
        <section id="cluster-links">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Nützliche Guides für KMU
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/de/co2-bilanz-kmu/"
                >
                  CO2-Bilanz KMU: Hauptseite →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/de/co2-bilanz-kmu/pflicht/"
                >
                  CO2-Bilanz KMU: wann wird sie verlangt? →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/de/co2-bilanz-kmu/kosten/"
                >
                  Was kostet eine CO2-Bilanz für KMU? →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/de/co2-bilanz-kmu/beispiel/"
                >
                  Beispiel einer CO2-Bilanz für KMU →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/de/co2-bilanz-kmu/pdf-vorlage/"
                >
                  PDF-Vorlage: CO2-Dokument für KMU →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="pt-2">
          <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">
              Auf eine CO2-Anfrage mit einem klaren Dokument reagieren
            </h2>
            <p className="text-white/90 leading-relaxed max-w-2xl">
              Wenn ein Kunde, eine Bank, ein Versicherer oder ein Auftraggeber
              nach CO2-Angaben fragt, ist häufig ein Screening-Dokument gemeint:
              lesbar, archivierbar und prüfbar. Certif-Scope erstellt ein
              indikatives, standardisiertes und nachvollziehbares
              CO₂e-Dokument.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/de/preise/"
                className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
              >
                Preis ansehen
              </Link>
              <Link
                href="/de/grenzen-und-compliance/"
                className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Grenzen verstehen
              </Link>
              <Link
                href="/de/erstellen/"
                className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Dokument erstellen
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="#top"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurück nach oben
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
