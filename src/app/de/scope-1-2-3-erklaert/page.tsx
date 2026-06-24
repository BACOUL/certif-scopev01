// PATH: src/app/de/scope-1-2-3-erklaert/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Scope 1, 2, 3 erklärt: einfache Einordnung für KMU | Certif-Scope",
  description:
    "Scope 1, 2 und 3 verständlich erklärt: Unterschied zwischen Screening und detailliertem Treibhausgasinventar, mit vorsichtiger Antwort für KMU bei Kunden-, Lieferanten-, Bank- oder Ausschreibungsanfragen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/scope-1-2-3-erklaert/",
    languages: {
      de: "https://www.certif-scope.com/de/scope-1-2-3-erklaert/",
      fr: "https://www.certif-scope.com/fr/scope-1-2-3-explication/",
    },
  },
  openGraph: {
    title: "Scope 1, 2, 3 erklärt: einfache Einordnung für KMU",
    description:
      "Praktischer Leitfaden zu Scope 1/2/3, Screening vs. detailliertem Inventar und einer vorsichtigen Antwort für KMU.",
    url: "https://www.certif-scope.com/de/scope-1-2-3-erklaert/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function Scopes123ErklaertDE() {
  const pageUrl = "https://www.certif-scope.com/de/scope-1-2-3-erklaert/";

  const faq = [
    {
      q: "Sind Scope 1, 2 und 3 für KMU verpflichtend?",
      a: "Häufig nicht. Viele Scope-Anfragen kommen aus Lieferantenfragebögen oder ESG-Screenings. Eine detaillierte Aufschlüsselung nach Scope 1, 2 und 3 ist vor allem dann relevant, wenn Rahmen, Methode, Grenzen, Nachweise und ein bestimmtes Prüfniveau ausdrücklich verlangt werden.",
    },
    {
      q: "Warum wird besonders oft nach Scope 3 gefragt?",
      a: "Scope 3 umfasst die Wertschöpfungskette: Einkäufe, Unteraufträge, Transporte, Dienstleistungen, Geschäftsreisen und weitere indirekte Emissionsquellen. Bei vielen Unternehmen liegt dort ein großer Teil der Emissionen, weshalb größere Auftraggeber Informationen aus ihrer Lieferkette einholen.",
    },
    {
      q: "Kann ein aggregiertes CO₂e-Ergebnis ausreichen?",
      a: "Oft ja, wenn es um Screening, Vergleichbarkeit oder Archivierung im Dossier geht. Wichtig ist, Methode, Zeitraum, Grenzen und Einordnung klar zu nennen: keine externe Prüfung, kein detailliertes Scope-Inventar und keine regulatorische CSRD-/ESRS-Berichterstattung.",
    },
    {
      q: "Liefert Certif-Scope eine detaillierte Scope-1-2-3-Aufschlüsselung?",
      a: "Nein. Certif-Scope erstellt eine indikative spend-based CO₂e-Schätzung aus Ausgaben, mit aggregiertem Ergebnis und sichtbaren Grenzen. Das ersetzt kein detailliertes Inventar nach Scope 1, 2 und 3.",
    },
    {
      q: "Was tun, wenn ein Lastenheft GHG Protocol und Scopes verlangt?",
      a: "Prüfen Sie, ob ein organisatorisches Inventar mit definiertem Umfang, Aktivitätsdaten, Annahmen, Nachweisen und gegebenenfalls externer Prüfung gefordert wird. Wenn ja, ist eine indikative Bescheinigung nicht das passende Format. Bitten Sie bei Unklarheit um eine schriftliche Präzisierung des erwarteten Niveaus.",
    },
  ];

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/logo.png",
    sameAs: [] as string[],
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
        name: "CO2-Bescheinigung KMU",
        item: "https://www.certif-scope.com/de/co2-bescheinigung-kmu/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Scope 1 2 3 erklärt",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Scope 1, 2, 3 erklärt: einfache Einordnung für KMU",
    url: pageUrl,
    description:
      "Leitfaden für KMU: Scope 1, 2 und 3 verstehen, Screening von einem detaillierten Treibhausgasinventar unterscheiden und vorsichtig auf Dokumentationsanfragen antworten.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    breadcrumb: jsonLdBreadcrumb,
    inLanguage: "de-DE",
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie KMU auf eine Scope-1-2-3-Anfrage vorsichtig antworten",
    description:
      "Ein einfacher Ablauf, um Screening von einem detaillierten Inventar zu unterscheiden und das passende Antwortniveau zu wählen.",
    totalTime: "PT10M",
    inLanguage: "de-DE",
    step: [
      {
        "@type": "HowToStep",
        name: "Anforderung lesen: Screening oder Inventar?",
        text: "Achten Sie auf vorgegebene Rahmen, Grenzen, Scope-Aufschlüsselung, Nachweise und externe Prüfung. Fehlen diese Elemente, handelt es sich häufig um Screening.",
      },
      {
        "@type": "HowToStep",
        name: "Auf dem passenden Niveau antworten",
        text: "Für ein Screening kann ein dokumentiertes, datiertes CO₂e-Dokument mit Methode und Grenzen sinnvoll sein. Bei formalen Vorgaben muss das Lastenheft eingehalten werden.",
      },
      {
        "@type": "HowToStep",
        name: "Überzogene Zusagen vermeiden",
        text: "Eine indikative Schätzung sollte nicht als detailliertes Treibhausgasinventar dargestellt werden. Bei unklaren Anforderungen ist eine schriftliche Präzisierung sinnvoll.",
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

  const BackToTop = () => (
    <a
      href="#top"
      className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
    >
      Zurück zum Überblick
    </a>
  );

  return (
    <section
      id="scope-1-2-3-erklaert"
      data-section="scope-1-2-3-erklaert"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          KMU-Leitfaden — Scope 1/2/3 verstehen und vorsichtig antworten
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Scope 1, 2, 3 einfach erklärt <br />
          <span className="text-[#0B3A63]/90">
            und was KMU antworten können, wenn danach gefragt wird
          </span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Viele CO₂e-Anfragen erwähnen <strong>Scope 1/2/3</strong>. Entscheidend
          ist die Unterscheidung zwischen <strong>Screening</strong> (archivierbares
          Dokument, vergleichbarer Indikator) und einem{" "}
          <strong>detaillierten Inventar</strong> (Aktivitätsdaten, Grenzen,
          Annahmen und Nachweise). Diese Seite hilft bei einer klaren und
          vorsichtigen Einordnung.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/de/co2-bescheinigung-kmu/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Zur KMU-CO₂e-Bescheinigung
          </Link>

          <Link
            href="/de/erstellen/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
          >
            Indikative Bescheinigung erstellen →
          </Link>

          <Link
            href="/de/methodik/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Methodik und Grenzen
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ziel
            </p>
            <p className="text-gray-700 leading-relaxed">
              Scope 1/2/3 verstehen und auf dem erwarteten Niveau antworten, ohne
              zu viel zu versprechen.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Was Sie vermeiden
            </p>
            <p className="text-gray-700 leading-relaxed">
              Scope als Inventarstruktur mit einem einfachen Screening-Dokument
              für ein Dossier zu verwechseln.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Wann eskalieren
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wenn ein Rahmen, ein Umfang, Nachweise oder eine externe Prüfung
              ausdrücklich verlangt werden.
            </p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-14">
          <section className="lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Überblick
              </p>
              <nav aria-label="Überblick Scope 1/2/3 (mobil)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Definition: Scopes in einem Satz" />
                  <TocItem href="#scope123" label="Scope 1 / 2 / 3 (KMU-Beispiele)" />
                  <TocItem href="#screening-vs-inventar" label="Screening vs. detailliertes Inventar" />
                  <TocItem href="#what-to-answer" label="Was antworten? Sichere Formulierungen" />
                  <TocItem href="#red-flags" label="Signale für formale Anforderungen" />
                  <TocItem href="#scenarios" label="Praxisfälle (Lieferant, Ausschreibung, Bank)" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          <section id="definition" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Definition: Scope 1/2/3 in einem Satz
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Scope 1/2/3</strong> sind eine Struktur, um
                Treibhausgasemissionen in CO₂e einzuordnen:{" "}
                <strong>direkte Emissionen</strong> (Scope 1),{" "}
                <strong>eingekaufte Energie</strong> (Scope 2) und{" "}
                <strong>Wertschöpfungskette</strong> (Scope 3).
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Wichtig: Eine Anfrage, die Scopes erwähnt, bedeutet nicht
                automatisch, dass ein detailliertes Inventar verlangt wird. Viele
                Anfragen bleiben Screening: Dossier, Vergleichbarkeit und
                Archivierung.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Kontext als Referenz
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Scopes tauchen in Einkaufs-, ESG-, Bank- und
                Versicherungsprozessen auf. Sie stehen häufig in Fragebögen, auch
                wenn keine externe Prüfung und kein detailliertes Inventar
                gefordert werden.
              </p>
            </div>

            <div className="mt-6">
              <BackToTop />
            </div>
          </section>

          <section id="scope123" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Scope 1 / 2 / 3: konkrete Beispiele für KMU
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Scope 1
                </p>
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Direkte Emissionen
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Heizung mit Gas oder Heizöl</li>
                  <li>eigene Fahrzeuge und Kraftstoffverbrauch</li>
                  <li>interne Prozesse, falls industriell relevant</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Scope 2
                </p>
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Eingekaufte Energie
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Strom für Büro, Produktion oder Standort</li>
                  <li>eingekaufte Wärme oder Dampf, falls relevant</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Scope 3
                </p>
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Wertschöpfungskette
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Einkäufe und Unteraufträge</li>
                  <li>Transport und Logistik</li>
                  <li>Geschäftsreisen</li>
                  <li>Dienstleistungen wie IT, Beratung oder Miete</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-[760px] w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Was gefragt wird
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Was es bedeutet
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Risiko für KMU
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 text-gray-700">"Scope 1/2/3: ja/nein"</td>
                    <td className="p-4 text-gray-700">
                      Häufig ein Screening-Fragebogen
                    </td>
                    <td className="p-4 text-gray-700">
                      Die Anfrage als detaillierte externe Prüfung zu verstehen
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">
                      "Details nach Scopes + Nachweise"
                    </td>
                    <td className="p-4 text-gray-700">
                      Strukturiertes Inventar mit Aktivitätsdaten
                    </td>
                    <td className="p-4 text-gray-700">
                      Aufwand und Zeitbedarf zu unterschätzen
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">
                      "Rahmen + Grenzen + externe Prüfung"
                    </td>
                    <td className="p-4 text-gray-700">
                      Formale Anforderung mit klaren Vorgaben
                    </td>
                    <td className="p-4 text-gray-700">
                      Ein zu leichtes Dokument für ein formales Lastenheft zu senden
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <BackToTop />
            </div>
          </section>

          <section id="screening-vs-inventar" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Screening vs. detailliertes Inventar: die einfache Regel
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Scopes strukturieren ein Inventar. Viele Anfragen an KMU sind aber
              dossierorientiert: ein Indikator, ein Datum, eine Methode, sichtbare
              Grenzen und ein archivierbares Dokument. Zur Entscheidung helfen die
              Signale einer formalen Anforderung.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Screening (häufiger Fall)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Ziel: Vergleichbarkeit und Archivierung</li>
                  <li>Format: einfaches Dokument mit Grenzen</li>
                  <li>keine umfassenden Belege</li>
                  <li>Scope wird genannt, aber ohne operative Detailvorgaben</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Detailliertes Inventar (spezifischer Fall)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>vorgegebener Rahmen und definierte Grenzen</li>
                  <li>Erhebung von Aktivitätsdaten</li>
                  <li>Belege, Annahmen und Dokumentation</li>
                  <li>externe Prüfung oder gesondertes Prüfniveau verlangt</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Formulierung gegen Missverständnisse
              </h3>
              <p className="text-white/90 leading-relaxed">
                Wenn das Lastenheft keine Methode, keine Grenzen und keine
                Nachweise ausdrücklich vorgibt, behandeln Sie die Anfrage zunächst
                als Screening und antworten mit einem klaren Dokument: Datum,
                Methode und sichtbare Grenzen.
              </p>
            </div>

            <div className="mt-6">
              <BackToTop />
            </div>
          </section>

          <section id="what-to-answer" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Was antworten? Vorsichtige Formulierungen für KMU
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Das Ziel: <strong>ehrlich</strong>, <strong>klar abgegrenzt</strong>{" "}
              und <strong>dossierfähig</strong> antworten. So vermeiden Sie zwei
              Fehler: nichts zu liefern oder mehr zu behaupten, als das Dokument
              leisten kann.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Vorlage A — unklare Anfrage (Screening)
              </h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  "Wir stellen für das Jahr [JJJJ] einen{" "}
                  <strong>indikativen</strong> CO₂e-Indikator für Screeningzwecke
                  bereit. Die Methode ist angegeben, die Grenzen sind sichtbar
                  beschrieben, und das Dokument ist datiert und archivierbar."
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/de/erstellen/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
                >
                  Indikative Bescheinigung erstellen →
                </Link>
                <Link
                  href="/de/pruefen/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Dokument prüfen
                </Link>
                <Link
                  href="/de/grenzen-und-compliance/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Grenzen und Einordnung
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Vorlage B — es wird nach Scopes gefragt
              </h3>

              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  "Die Anfrage nennt Scope 1, 2 und 3. Können Sie bitte bestätigen,
                  ob ein detailliertes Inventar mit Grenzen, Methode, Nachweisen
                  und Prüfniveau erwartet wird, oder ob ein Screening-Dokument mit
                  aggregiertem CO₂e-Ergebnis, Methode und sichtbaren Grenzen für
                  diese Phase ausreicht?"
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Diese Formulierung schützt das KMU: Sie klärt den erwarteten
                Umfang schriftlich, ohne das Dossier unnötig zu blockieren.
              </p>
            </div>

            <div className="mt-6">
              <BackToTop />
            </div>
          </section>

          <section id="red-flags" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Signale: wann es eine formale Anforderung ist
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checkliste formale Anforderung
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>vorgegebener Rahmen oder Methode</li>
                <li>definierte organisatorische Grenzen, Standorte oder Einheiten</li>
                <li>erwartete Nachweise wie Energiedaten, Kilometer oder Belege</li>
                <li>externe Prüfung oder bestimmtes Prüfniveau verlangt</li>
                <li>präzises Lieferformat mit Anhängen, Tabellen oder Protokoll</li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-gray-700 leading-relaxed">
                  Wenn diese Elemente erscheinen, geht es nicht mehr nur um ein
                  Scope-Feld in einem Fragebogen. Dann steht ein Inventar mit
                  höherem Detailniveau im Raum. Eine indikative aggregierte
                  Schätzung darf in diesem Fall nicht als detailliertes Inventar
                  dargestellt werden.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/de/grenzen-und-compliance/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Grenzen und Einordnung
                  </Link>
                  <Link
                    href="/de/methodik/"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Spend-based Methodik
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <BackToTop />
            </div>
          </section>

          <section id="scenarios" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) Praxisfälle: Lieferant, Ausschreibung, Bank oder Versicherung
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dasselbe Wort Scope kann in sehr unterschiedlichen Situationen
              auftauchen. Wer den Kontext erkennt, antwortet genauer und
              vorsichtiger.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Lieferantenaufnahme
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Häufig geht es um einen Standardfragebogen und interne
                  Archivierung. Priorität: ein klares Dokument mit Methode,
                  Grenzen und Datum.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/de/co2-bescheinigung/">
                    Weiter: CO₂e-Bescheinigung verstehen →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Ausschreibung
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oft wird ein vergleichbarer CO₂e-Hinweis erwartet. Wenn kein
                  Rahmen vorgegeben ist, kann ein sauber eingeordnetes
                  Screening-Dokument sinnvoll sein.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/de/grenzen-und-compliance/">
                    Weiter: Grenzen und Einordnung →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Bank oder Versicherung
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Häufig genügt zunächst eine dokumentierte Mindestinformation:
                  Datum, Methode, Grenzen und archiviertes PDF für eine interne
                  ESG-Einordnung.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/de/co2-bescheinigung-kmu/">
                    Weiter: CO₂e-Bescheinigung für KMU →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Wenn eine Verwechslung vermieden werden muss
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wenn eine detaillierte Scope-Aufschlüsselung mit Nachweisen und
                  externer Prüfung verlangt wird, sollte der erwartete Umfang
                  geklärt oder ein eigener Inventarprozess gestartet werden.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <BackToTop />
            </div>
          </section>

          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Scope-Anfrage beantworten, ohne ein detailliertes Inventar zu behaupten
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Wenn es um Screening geht, zählt ein archivierbares Dokument:
                CO₂e-Ergebnis, Datum, Methode, sichtbare Grenzen und Prüflogik.
                Wenn die Anforderung formal ist, muss der vorgegebene Rahmen
                eingehalten oder schriftlich präzisiert werden.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/erstellen/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Indikative Bescheinigung erstellen
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
                href="/de/co2-bescheinigung-kmu/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Zurück zur KMU-Bescheinigung
              </Link>
              <a
                href="#top"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Seitenanfang
              </a>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              FAQ — Scope 1/2/3 für KMU
            </h2>

            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div
                  key={`${idx}-${item.q}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-[#0B3A63] mb-2">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <BackToTop />
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Überblick
              </p>
              <nav aria-label="Überblick Scope 1/2/3">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Definition" />
                  <TocItem href="#scope123" label="Scope 1 / 2 / 3" />
                  <TocItem href="#screening-vs-inventar" label="Screening vs. Inventar" />
                  <TocItem href="#what-to-answer" label="Was antworten?" />
                  <TocItem href="#red-flags" label="Anforderungssignale" />
                  <TocItem href="#scenarios" label="Praxisfälle" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Umfang im Blick behalten
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diese Seite hilft bei Scope-1-2-3-Anfragen in Screening-Kontexten
                wie Einkauf, Ausschreibung, Bank oder Versicherung. Certif-Scope
                erstellt eine indikative spend-based CO₂e-Schätzung aus Ausgaben
                und Emissionsfaktoren, mit aggregiertem Ergebnis und sichtbaren
                Grenzen. Das ist kein detailliertes Inventar nach Scope 1, 2 und 3.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/de/methodik/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Methodik
                </Link>
                <Link
                  href="/de/grenzen-und-compliance/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Grenzen
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Verwandte Seiten
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="underline" href="/de/co2-bescheinigung-kmu/">
                    CO₂e-Bescheinigung für KMU
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/co2-bescheinigung/">
                    CO₂e-Bescheinigung
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/grenzen-und-compliance/">
                    Grenzen und Compliance-Einordnung
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/de/pruefen/">
                    Dokumentenprüfung verstehen
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
                  Seitenanfang
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
