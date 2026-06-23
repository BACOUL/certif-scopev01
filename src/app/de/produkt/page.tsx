import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - PRODUKT
   Temporary noindex while /de/* remains in staging per docs/localization/de-DE-runtime-seo-policy.md
====================================================== */

export const metadata: Metadata = {
  title: "CO2e-Bescheinigung: Produkt, PDF und Grenzen | Certif-Scope",
  description:
    "Ueberblick zur Certif-Scope CO2e-Bescheinigung: ein indikatives CO2e-Dokument fuer Unternehmen, mit pruefbarer ID, PDF-Format und klaren Grenzen. Kein CSRD-/ESRS-Bericht.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/produkt/",
    languages: {
      de: "https://www.certif-scope.com/de/produkt/",
    },
  },
  openGraph: {
    title: "CO2e-Bescheinigung: Produkt, PDF und Grenzen | Certif-Scope",
    description:
      "Indikative CO2e-Bescheinigung auf Basis von Ausgaben: standardisiertes Dokument, pruefbare ID und klare Nutzung fuer Kunden, Banken, Versicherer oder Ausschreibungen.",
    url: "https://www.certif-scope.com/de/produkt/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function ProduktPageDE() {
  return (
    <section
      id="product"
      data-section="product"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Certif-Scope CO2e-Bescheinigung",
            description:
              "Indikative und standardisierte CO2e-Bescheinigung auf Basis von Ausgaben, entwickelt als einfaches CO2e-Dokument mit pruefbarer ID fuer Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungskontexte.",
            provider: {
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "89",
              url: "https://www.certif-scope.com/de/preise/",
            },
            inLanguage: "de-DE",
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* SEITENKOPF */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO2e-Bescheinigung - Produkt
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Produktueberblick
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Eine strukturierte Darstellung der CO2e-Bescheinigung: Nutzen,
          typische Anwendungsfaelle, Inhalt des PDF, dokumentarische
          Integritaetspruefung und klare Grenzen.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* SOMMAIRE */}
      <nav
        aria-label="Produktbereiche"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a
              href="#product-overview"
              className="hover:text-[#1FB6C1] transition"
            >
              1. Produktvorstellung
            </a>
          </li>
          <li>
            <a href="#key-benefits" className="hover:text-[#1FB6C1] transition">
              2. Zentrale Vorteile
            </a>
          </li>
          <li>
            <a
              href="#why-the-product-exists"
              className="hover:text-[#1FB6C1] transition"
            >
              3. Warum dieses Produkt existiert
            </a>
          </li>
          <li>
            <a
              href="#attestation-pdf-contents"
              className="hover:text-[#1FB6C1] transition"
            >
              4. Inhalt des PDF
            </a>
          </li>
          <li>
            <a
              href="#verification-and-integrity"
              className="hover:text-[#1FB6C1] transition"
            >
              5. Pruefung & Integritaet
            </a>
          </li>
          <li>
            <a
              href="#usage-scenarios"
              className="hover:text-[#1FB6C1] transition"
            >
              6. Anwendungsszenarien
            </a>
          </li>
          <li>
            <a
              href="#limitations-and-fit"
              className="hover:text-[#1FB6C1] transition"
            >
              7. Grenzen & Eignung
            </a>
          </li>
        </ul>
      </nav>

      {/* CONTENU */}
      <div className="max-w-4xl mx-auto space-y-24">
        <section
          id="product-overview"
          data-section="product-overview"
          className="scroll-mt-24 border-b border-gray-200 pb-24"
        >
          <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#15B097]/10 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
              <span className="mr-2">1.</span>
              Produktvorstellung
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl relative z-10">
              Eine standardisierte CO2e-Bescheinigung fuer institutionelle
              Dokumentationszwecke, entwickelt fuer Situationen, in denen Dritte
              Umweltinformationen anfordern.
            </p>

            <p className="mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
              Certif-Scope stellt eine strukturierte CO2e-Bescheinigung bereit
              fuer Organisationen, die einen Umweltindikator an Kunden,
              Einkaufsabteilungen, Finanzinstitute oder oeffentliche Stellen
              kommunizieren muessen.
            </p>

            <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
              Das Produkt richtet sich an KMU und mittelgrosse Organisationen,
              die kein umfassendes regulatorisches Carbon-Reporting aufgebaut
              haben, aber in beruflichen oder institutionellen Kontexten
              standardisiert auf CO2e-Anfragen reagieren muessen.
            </p>

            <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
              Das Ergebnis ist ein klares, konsistentes und teilbares Dokument
              mit einem aggregierten CO2e-Indikator in einem festen Format. Es
              ist auf Lesbarkeit, Pruefung und Weitergabe an Dritte ausgelegt,
              ohne dass zusaetzliche Erlaeuterungen zwingend erforderlich sind.
            </p>

            <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
              Certif-Scope ist keine Stelle fuer externe Bestaetigungen und
              ersetzt weder regulatorisches Reporting noch eine fachliche
              Treibhausgas-Pruefung oder einen formalen Compliance-Rahmen. Der
              Dienst liefert ein indikatives, standardisiertes Dokument fuer
              haeufige Offenlegungsanfragen und bleibt dabei bewusst leicht,
              zugaenglich und fuer institutionelle Pruefprozesse nutzbar.
            </p>
          </div>

          <div className="mt-12 text-right">
            <a
              href="#top"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurueck zur Uebersicht
            </a>
          </div>
        </section>

        <section
          id="key-benefits"
          data-section="key-benefits"
          className="scroll-mt-24 border-b border-gray-200 pb-24"
        >
          <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/15 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
              <span className="mr-2">2.</span>
              Zentrale Vorteile
            </h2>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-4xl relative z-10">
              Dieser Abschnitt fasst den praktischen Nutzen der
              CO2e-Bescheinigung zusammen. Er beschreibt weder die
              Berechnungsmethode noch die Emissionsfaktoren.
            </p>

            <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
              Certif-Scope liefert eine standardisierte CO2e-Bescheinigung fuer
              institutionelle Zwecke. Jeder Nutzen entspricht einer konkreten
              Anforderung, die in Ausschreibungen, Lieferanten-Onboarding,
              ESG-Pruefungen oder Due-Diligence-Prozessen in Europa auftreten
              kann.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
              <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                Sofort verfuegbar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Bescheinigung wird ueber einen standardisierten und
                deterministischen Ansatz schnell erstellt, ohne operative
                Messdaten, physische Datenerhebung oder vorherige Carbon-Expertise.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
              <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
              <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                Dokument fuer institutionelle Prozesse
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Das Format passt zu Lieferanten-Onboarding, ESG-Screening,
                Einkaufsfrageboegen und Due-Diligence-Prozessen, die von Dritten
                durchgefuehrt werden.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
              <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                Explizite Pruefreferenz
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jede Bescheinigung enthaelt eine eindeutige ID, mit der Dritte
                die Echtheit ohne Konto und ohne technisches Spezialwerkzeug
                nachvollziehen koennen.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
              <div className="text-[#1FB6C1] text-4xl font-bold mb-3">04</div>
              <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                Deterministische Konsistenz
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identische Angaben erzeugen dasselbe Ergebnis. Das unterstuetzt
                Stabilitaet, Vergleichbarkeit und nachvollziehbare
                Pruefergebnisse.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="text-[#1FB6C1] text-4xl font-bold mb-3">05</div>
              <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                Ohne Vorwissen nutzbar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Es sind kein Berater, keine Spezialsoftware und kein eigenes
                Sustainability-Team erforderlich. Der Ablauf ist bewusst einfach
                und gefuehrt.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
              <div className="text-[#1FB6C1] text-4xl font-bold mb-3">06</div>
              <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                Europaeisch und mehrsprachig gedacht
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Das Format unterstuetzt grenzueberschreitende
                Lieferantenbeziehungen und institutionelle Pruefworkflows in
                europaeischen Kontexten.
              </p>
            </div>
          </div>

          <div className="mt-12 text-right">
            <a
              href="#top"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurueck zur Uebersicht
            </a>
          </div>
        </section>

        <section
          id="why-the-product-exists"
          data-section="why-the-product-exists"
          className="scroll-mt-24 border-b border-gray-200 pb-24"
        >
          <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent"
            />

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
              <span className="mr-2">3.</span>
              Warum dieses Produkt existiert
            </h2>

            <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
              In Europa betreffen klima- und nachhaltigkeitsbezogene
              Transparenzanforderungen vor allem groessere Unternehmen,
              Finanzinstitute und den oeffentlichen Sektor. Diese Erwartungen
              wirken zunehmend in Lieferketten hinein, auch zu KMU, die selbst
              nicht direkt zu einem umfassenden regulatorischen Reporting
              verpflichtet sind.
            </p>
          </div>

          <div className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Die regulatorische Kaskade
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
              Organisationen, die europaeische Nachhaltigkeits- und
              Risikorahmen beruecksichtigen, muessen Klimaexposition entlang
              ihrer Wertschoepfungsketten einordnen. Daraus entstehen
              standardisierte Informationsanfragen an Lieferanten, unabhaengig
              vom individuellen regulatorischen Status des jeweiligen
              Unternehmens.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>
                - Groessere Unternehmen im Kontext der{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/dir/2022/2464/oj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3A63] underline hover:text-[#15B097]"
                >
                  CSRD
                </a>{" "}
                dokumentieren Klimarisiken und Auswirkungen in der
                Wertschoepfungskette.
              </li>

              <li>
                - Angaben im Umfeld der{" "}
                <a
                  href="https://www.efrag.org/en/projects/esrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3A63] underline hover:text-[#15B097]"
                >
                  ESRS (EFRAG)
                </a>{" "}
                koennen Lieferanteninformationen betreffen, wenn der Sachverhalt
                wesentlich ist.
              </li>

              <li>
                - Finanzinstitute, die{" "}
                <a
                  href="https://www.eba.europa.eu/regulation-and-policy/sustainable-finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3A63] underline hover:text-[#15B097]"
                >
                  ESG-Leitlinien der EBA
                </a>{" "}
                beruecksichtigen, koennen CO2e-Indikatoren von Kunden und
                Gegenparteien anfordern.
              </li>

              <li>
                - Oeffentliche Beschaffung nimmt Umweltindikatoren zunehmend im
                Rahmen von{" "}
                <a
                  href="https://environment.ec.europa.eu/topics/sustainable-production-and-consumption/green-public-procurement_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3A63] underline hover:text-[#15B097]"
                >
                  EU Green Public Procurement
                </a>{" "}
                auf.
              </li>
            </ul>

            <p className="text-gray-700 text-sm mt-4">
              In der Praxis fuehrt dies dazu, dass KMU CO2e-Indikatoren liefern
              sollen, obwohl sie keine umfassenden regulatorischen Berichte
              erstellen.
            </p>
          </div>

          <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Die Marktluecke fuer KMU
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mb-6">
              Viele Sustainability-Tools und Beratungsansaetze sind auf groessere
              Organisationen ausgelegt. Sie setzen detaillierte operative Daten,
              Fachwissen und erhebliche Ressourcen voraus, die fuer KMU oft
              nicht verfuegbar sind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <li>- Begrenzte interne ESG-Kapazitaeten</li>
                <li>- Zeit-, Budget- und Ressourcenbeschraenkungen</li>
              </ul>

              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <li>
                  - Kein einfaches, standardisiertes Dokument fuer die erste
                  Antwort an Dritte
                </li>
                <li>
                  - Schwierigkeit, Konsistenz und Nachvollziehbarkeit von Zahlen
                  darzustellen
                </li>
              </ul>
            </div>

            <p className="mt-8 text-[#0B3A63] text-sm leading-relaxed font-medium">
              Certif-Scope wurde entwickelt, um diese Luecke mit einer
              standardisierten, zugaenglichen CO2e-Bescheinigung zu verkleinern:
              anschlussfaehig fuer institutionelle Erwartungen, aber realistisch
              und handhabbar fuer KMU.
            </p>
          </div>

          <div className="mt-12 text-right">
            <a
              href="#top"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurueck zur Uebersicht
            </a>
          </div>
        </section>

        <section
          id="attestation-pdf-contents"
          data-section="attestation-pdf-contents"
          className="scroll-mt-24 border-b border-gray-200 pb-24"
        >
          <div className="relative p-12 rounded-2xl bg-[#F0F4F8] border border-[#0B3A63]/15 shadow-md overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
              <span className="mr-2">4.</span>
              Inhalt des PDF der CO2e-Bescheinigung
            </h2>

            <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
              Die CO2e-Bescheinigung wird als standardisiertes PDF-Dokument
              bereitgestellt, das fuer institutionelle Dokumentationszwecke
              nutzbar ist. Jedes Element ist so strukturiert, dass Einkaufs-,
              Finanzrisiko- und Lieferantenpruefungen erleichtert werden.
            </p>

            <p className="mt-4 text-gray-600 text-sm max-w-4xl leading-relaxed relative z-10">
              Dieser Abschnitt beschreibt Struktur und Inhalt des gelieferten
              Dokuments. Die Berechnungsmethodik wird separat beschrieben.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                1. Zusammenfassung des CO2e-Ergebnisses
              </h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Ein einzelner aggregierter CO2e-Wert in Tonnen CO2-Aequivalent,
                dargestellt in einem klaren Format fuer eine institutionelle
                Pruefung.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                2. Ueberblick ueber den angegebenen Umfang
              </h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Ein Ueberblick ueber die angegebenen Kategorien, der Kontext
                gibt, ohne detaillierte Finanzdaten oder operative Daten
                offenzulegen.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                3. Normative Kontextreferenzen
              </h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Hinweise auf europaeische und internationale Rahmenwerke,
                darunter{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/dir/2022/2464/oj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3A63] underline hover:text-[#15B097]"
                >
                  CSRD
                </a>
                ,{" "}
                <a
                  href="https://www.efrag.org/en/projects/esrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3A63] underline hover:text-[#15B097]"
                >
                  ESRS (EFRAG)
                </a>{" "}
                sowie der{" "}
                <a
                  href="https://ghgprotocol.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3A63] underline hover:text-[#15B097]"
                >
                  GHG Protocol
                </a>
                . Diese Referenzen ordnen den institutionellen Kontext ein, ohne
                eine fachliche Gleichwertigkeit mit einem umfassenden Inventar zu
                behaupten.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                4. Pruefreferenz & QR-Code
              </h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Eine eindeutige Bescheinigungs-ID und ein QR-Code ermoeglichen
                Dritten, Echtheit und Integritaet des Dokuments ueber eine
                oeffentliche Pruefseite nachzuvollziehen.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                5. Institutionelle Metadaten
              </h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Ausstellungsdatum, dokumentarische Nutzungsdauer, angegebenes
                Referenzjahr und grundlegende Organisationsangaben fuer interne
                Nachvollziehbarkeit und Pruefprozesse.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                6. Erklaerung der Nutzungsgrenzen
              </h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Eine klare Beschreibung des indikativen Charakters und des
                vorgesehenen Nutzungsrahmens, damit das Dokument nicht als
                regulatorisches Reporting, fachliche Pruefung oder externe
                Bestaetigung verstanden wird.
              </p>
            </div>
          </div>

          <div className="mt-20 p-8 rounded-xl bg-[#F0FDFC] border border-[#1FB6C1]/30 shadow-sm">
            <h4 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Hinweis zur institutionellen Nutzung
            </h4>

            <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
              Diese Bescheinigung ist fuer Lieferantenbewertung,
              Einkaufs-Screening und Finanzrisiko-Pruefung konzipiert. Sie
              ersetzt weder regulatorische Sustainability-Berichte noch ein
              fachlich geprueftes Treibhausgasinventar.
            </p>
          </div>

          <div className="mt-12 text-right">
            <a
              href="#top"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurueck zur Uebersicht
            </a>
          </div>
        </section>

        <section
          id="verification-and-integrity"
          data-section="verification-and-integrity"
          className="scroll-mt-24 border-b border-gray-200 pb-24"
        >
          <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-md overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/90 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
              <span className="mr-2">5.</span>
              Pruefung & Integritaet
            </h2>

            <p className="text-white/80 text-sm max-w-4xl mt-4 leading-relaxed relative z-10">
              Dieser Abschnitt beschreibt, wie Echtheit und Integritaet des
              gelieferten Dokuments nachvollzogen werden koennen. Er beschreibt
              nicht die Berechnungsmethodik.
            </p>

            <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
              Jede CO2e-Bescheinigung wird mit integrierten
              Integritaetsmechanismen ausgegeben. Ihre Echtheit kann ohne Konto,
              ohne personenbezogene Daten und ohne Abhaengigkeit von einem
              zentralen Register nachvollzogen werden.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                Nachtraegliche Aenderungen erkennbar
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                Jede Bescheinigung wird als finales Dokument ausgegeben, dessen
                Integritaet nachvollzogen werden kann. Eine Veraenderung nach
                Ausgabe kann die Echtheitspruefung des Dokuments scheitern
                lassen.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                Unabhaengige Pruefung
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                Die Echtheit kann durch Dritte anhand oeffentlicher
                Pruefinformationen nachvollzogen werden, ohne Konto,
                Zugangsdaten oder Zugriff auf interne Systeme.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                Eindeutige Bescheinigungsreferenz
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                Jedes PDF enthaelt eine eindeutige Referenz-ID fuer Praezision,
                Nachvollziehbarkeit und Kommunikation in Einkaufs-, Bank- oder
                Compliance-Kontexten.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[#0B3A63]">
                Online-Komfort, dokumentarische Nachvollziehbarkeit
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                Ein QR-Code fuehrt optional zu einer oeffentlichen Erklaerseite.
                Die technische Nachvollziehbarkeit des Dokuments ist nicht als
                externe Umweltpruefung zu verstehen.
              </p>
            </div>
          </div>

          <div className="mt-20 p-10 bg-white rounded-xl border border-[#0B3A63]/15 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Vertrauens- und Integritaetsmerkmale
            </h3>

            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <li>- Bescheinigungen werden einmalig als finale Dokumente erstellt</li>
              <li>- Die Pruefung beruht nicht auf einer zentralen Datenbank</li>
              <li>- Kein Konto, keine Zugangsdaten und keine personenbezogenen Daten erforderlich</li>
              <li>- Ausgestellte Dokumente werden von Certif-Scope nicht gespeichert</li>
              <li>- Die Echtheit bleibt dokumentarisch nachvollziehbar</li>
            </ul>
          </div>

          <div className="mt-12 text-right">
            <a
              href="#top"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurueck zur Uebersicht
            </a>
          </div>
        </section>

        <section
          id="usage-scenarios"
          data-section="usage-scenarios"
          className="scroll-mt-24 border-b border-gray-200 pb-24"
        >
          <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]"
              aria-hidden="true"
            />

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6">
              <span className="mr-2">6.</span>
              Anwendungsszenarien
            </h2>

            <p className="text-lg text-gray-700 max-w-4xl leading-relaxed mt-6 pl-6">
              Die CO2e-Bescheinigung ist fuer Situationen gedacht, in denen eine
              Organisation einen standardisierten Umweltindikator bereitstellen
              soll, ohne ein umfassendes Treibhausgasinventar oder
              regulatorisches ESG-Reporting zu erstellen.
            </p>
          </div>

          <div className="mt-12 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl max-w-4xl">
            <p className="text-sm text-gray-600 leading-relaxed">
              Die folgenden Szenarien spiegeln haeufige institutionelle und
              administrative Situationen wider, in denen ein indikatives,
              standardisiertes CO2e-Dokument zu Screening-, Vergleichs- oder
              Dokumentationszwecken angefragt wird. Die Bescheinigung ersetzt
              keine fachlich gepruefte Carbon-Buchhaltung und kein
              regulatorisches ESG-Reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
            <div className="space-y-10 lg:col-span-2">
              <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
                <h3 className="text-2xl font-semibold text-[#0B3A63]">
                  Einkauf & Lieferanten-Onboarding
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Einkaufsabteilungen fragen haeufig vergleichbare
                  Umweltindikatoren beim Lieferanten-Onboarding oder in
                  Ausschreibungen an. Die Bescheinigung liefert ein
                  standardisiertes Dokument fuer RFP-Antworten und
                  Lieferantenqualifizierung.
                </p>
              </div>

              <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/40 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0B3A63]">
                  Versicherungen, Risiko & Zeichnung
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Versicherer koennen Umweltindikatoren fuer Kundeneinordnung,
                  Portfolioanalyse oder Zeichnungsentscheidungen anfragen. Die
                  Bescheinigung liefert ein klares und konsistentes Dokument,
                  das in Versicherungs- oder Erneuerungsunterlagen eingeordnet
                  werden kann.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-[#0B3A63] text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">
                Bank & Kreditanalyse
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Finanzinstitute dokumentieren Umweltaspekte zunehmend in
                Kreditanalyse und Kundenbetreuung. Die Bescheinigung kann als
                indikativer CO2e-Hinweis in Kreditunterlagen referenziert
                werden, ohne eine umfassende ESG-Offenlegung zu ersetzen.
              </p>
            </div>
          </div>

          <div className="mt-16 p-10 bg-white rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
              Oeffentliche Ausschreibungen & Verwaltungsunterlagen
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
              Vergabe- und Beschaffungsverfahren koennen Umweltindikatoren als
              Teil der Eignungs- oder Bewertungsunterlagen enthalten. Die
              Bescheinigung kann eine lesbare und pruefbare Dokumentationshilfe
              sein, sofern der jeweilige Anforderungskontext ein solches
              Dokument zulaesst.
            </p>
          </div>

          <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
              Zusaetzliche Anwendungsfaelle
            </h3>

            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
              <li>- Interne ESG-Uebersichten ohne physische Aktivitaetsdaten</li>
              <li>- Lieferantendokumentation auf Anfrage groesserer Kunden</li>
              <li>- Partner-Onboarding und Due-Diligence-Unterlagen</li>
              <li>- Screening auf automatisierten Einkaufsplattformen</li>
              <li>- Regelmaessige Bankpruefungen mit aktualisierten Indikatoren</li>
            </ul>

            <p className="mt-6 text-sm text-gray-700 leading-relaxed">
              Diese Anwendungsfaelle beschreiben praktische, nicht regulatorische
              Situationen, in denen ein standardisiertes Umweltdokument fuer
              Vergleich oder Dokumentation angefragt wird.
            </p>
          </div>

          <div className="mt-12 text-right">
            <a
              href="#top"
              aria-label="Zurueck zur Uebersicht"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurueck zur Uebersicht
            </a>
          </div>
        </section>

        <section
          id="limitations-and-fit"
          data-section="limitations-and-fit"
          className="scroll-mt-24 border-b border-gray-200 pb-24"
        >
          <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]"
              aria-hidden="true"
            />

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6">
              <span className="mr-2">7.</span>
              Grenzen & Eignung
            </h2>

            <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed pl-6">
              Dieser Abschnitt definiert Umfang, geeignete Anwendungsfaelle und
              Grenzen der CO2e-Bescheinigung. Ziel ist, Fehlinterpretationen in
              institutionellen, administrativen oder Compliance-Kontexten zu
              vermeiden.
            </p>
          </div>

          <div className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Was die Bescheinigung IST
            </h3>

            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
              <li>- Ein indikativer und standardisierter CO2e-Indikator</li>
              <li>- Deterministisch und bei identischen Angaben reproduzierbar</li>
              <li>- Strukturiert fuer Einkauf, Onboarding und Screening</li>
              <li>- Mit Integritaetsmechanismen und dokumentarischer Pruefung ausgegeben</li>
              <li>- Geeignet fuer Dokumentation, Vergleich und vorlaeufige Einordnung</li>
            </ul>
          </div>

          <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/30 to-transparent opacity-25" />

            <h3 className="text-2xl font-semibold mb-4 relative z-10">
              Was die Bescheinigung NICHT IST
            </h3>

            <ul className="space-y-3 text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
              <li>- Kein CSRD-/ESRS-Bericht und keine regulatorische Sustainability-Offenlegung</li>
              <li>- Kein umfassendes Treibhausgasinventar fuer Scope 1, 2 oder 3</li>
              <li>- Keine umfassende CO2-Bilanz, keine externe Bestaetigung und keine Lebenszyklusanalyse</li>
              <li>- Nicht fuer gesetzliche Einreichungen oder regulatorische Pflichten bestimmt</li>
              <li>- Kein Ersatz fuer fachliche oder wissenschaftliche Carbon-Analysen</li>
            </ul>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 p-10 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
                Wann es passt
              </h3>

              <ul className="space-y-3 text-sm text-gray-700 max-w-4xl leading-relaxed">
                <li>- Lieferanten-Onboarding mit Bedarf an einem einfachen Umweltindikator</li>
                <li>- Bank-, Versicherungs- und Kredit-Screening</li>
                <li>- Ausschreibungen mit standardisierter Dokumentationsanfrage</li>
                <li>- Organisationen ohne internes ESG-Team</li>
                <li>- Grenzueberschreitende Workflows mit klaren, vergleichbaren Dokumenten</li>
              </ul>
            </div>

            <div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
                Typische Empfaenger
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>- Einkaufs- und Sourcing-Teams</li>
                <li>- Finanzinstitute</li>
                <li>- Versicherungsanalysten und Underwriting-Teams</li>
                <li>- Oeffentliche Stellen</li>
                <li>- Risiko- und Compliance-Funktionen</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Wann es NICHT verwendet werden sollte
            </h3>

            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
              <li>- Verpflichtende CSRD- oder ESRS-Berichte</li>
              <li>- Fachlich bestaetigte Treibhausgasinventare</li>
              <li>- Carbon Accounting auf Basis physischer Aktivitaetsdaten</li>
              <li>- Wissenschaftliche Modellierung oder Lebenszyklusanalysen</li>
              <li>- Marketingaussagen, die verifizierte Nachweise erfordern</li>
            </ul>
          </div>

          <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent opacity-30" />

            <h3 className="text-2xl font-semibold mb-4 relative z-10">
              Abschliessende Klarstellung
            </h3>

            <p className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
              Die CO2e-Bescheinigung liefert ein standardisiertes und
              indikatives Signal ausschliesslich fuer Dokumentation und
              Screening. Verantwortung fuer Interpretation und Nutzung liegt
              beim Empfaenger. Regulatorisches Reporting, externe
              Bestaetigungen oder fachliche Carbon-Buchhaltung erfordern
              gesonderte Bewertungen nach den jeweils anwendbaren Standards.
            </p>
          </div>

          <div className="mt-12 text-right">
            <a
              href="#top"
              aria-label="Zurueck zur Uebersicht"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Zurueck zur Uebersicht
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
