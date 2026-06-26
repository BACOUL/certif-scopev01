// PATH: src/app/de/kostenlose-co2-bilanz-tools/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/de/kostenlose-co2-bilanz-tools/";
const frUrl = "https://www.certif-scope.com/fr/outils-gratuits-bilan-carbone/";

export const metadata: Metadata = {
  title: "Kostenlose CO2-Bilanz Tools für KMU: welche wählen? | Certif-Scope",
  description:
    "Praktischer Vergleich kostenloser CO2-Bilanz Tools für KMU: Rechner, Grenzen, Bankunterlagen und wann eine indikative CO2e-Bescheinigung passender ist.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
      fr: frUrl,
    },
  },
  openGraph: {
    title: "Kostenlose CO2-Bilanz Tools für KMU",
    description:
      "Wann ein kostenloser CO2-Rechner reicht und wann ein datiertes, standardisiertes CO2e-Dokument für Bank, Kunde oder Ausschreibung sinnvoller ist.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function KostenloseCO2BilanzToolsDE() {
  const tools = [
    {
      name: "Kostenlose CO2-Rechner",
      use: "Erste Orientierung und grobe Emissionsschätzung.",
      limit: "Das Ergebnis ist nicht immer als sauberes Dokument für Dritte gedacht.",
    },
    {
      name: "Greenly / ähnliche Online-Rechner",
      use: "Schneller Einstieg in eine vereinfachte Klimabilanz.",
      limit: "Kostenlose Versionen sind häufig begrenzt und nicht immer dossierfertig.",
    },
    {
      name: "GoodPlanet / MyClimate",
      use: "Allgemeine Sensibilisierung, Reisen, Dienstleistungen und erste Größenordnung.",
      limit: "Gut zum Schätzen, weniger klar als standardisierte Bescheinigung für eine Anfrage.",
    },
    {
      name: "GHG Protocol / Tabellen",
      use: "Methodische Orientierung und Verständnis von Scope 1, 2 und 3.",
      limit: "Technischer und aufwendiger, wenn ein KMU nur schnell ein Dokument braucht.",
    },
    {
      name: "Ausgabenbasierte Schätzung",
      use: "Pragmatische Antwort, wenn aggregierte Ausgaben verfügbar sind.",
      limit: "Muss klar als indikativ, nicht geprüft und nicht vollständig eingeordnet werden.",
    },
  ];

  const decisions = [
    {
      need: "Nur eine erste Einschätzung",
      answer: "Ein kostenloser Rechner kann reichen, um eine Größenordnung zu verstehen.",
    },
    {
      need: "Bank, Kunde oder Ausschreibung fragt nach CO2-Angaben",
      answer: "Ein klares PDF mit Ergebnis, Jahr, Methode und Grenzen ist oft praktischer.",
    },
    {
      need: "Audit, CSRD, ESRS oder exakte Norm wird verlangt",
      answer: "Dann reicht eine indikative Bescheinigung nicht. Der geforderte Rahmen muss eingehalten werden.",
    },
  ];

  const faq = [
    {
      q: "Welches kostenlose CO2-Bilanz Tool ist für KMU geeignet?",
      a: "Für eine erste Orientierung können kostenlose Rechner hilfreich sein. Entscheidend ist aber der Zweck: interne Schätzung, Bankunterlage, Lieferantenanfrage oder Ausschreibung.",
    },
    {
      q: "Reicht ein kostenloser CO2-Rechner für eine Bank?",
      a: "Manchmal ja, wenn die Bank nur einen einfachen Indikator verlangt. Wenn ein archivierbares Dokument erwartet wird, ist eine indikative CO2e-Bescheinigung oft sauberer.",
    },
    {
      q: "Ist Certif-Scope ein kostenloser CO2-Rechner?",
      a: "Nein. Certif-Scope ist eine dokumentarische Lösung: eine indikative, standardisierte und prüfbare CO2e-Bescheinigung für einfache B2B-Anfragen.",
    },
    {
      q: "Ist die Bescheinigung eine vollständige CO2-Bilanz?",
      a: "Nein. Sie ist eine indikative, ausgabenbasierte Schätzung. Sie ist kein Audit, keine vollständige THG-Inventur und kein CSRD-/ESRS-Reporting.",
    },
  ];

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "de-DE",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
        name: "Kostenlose CO2-Bilanz Tools",
        item: pageUrl,
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-64 w-64 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] top-52 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
            KMU - kostenlose Rechner - CO2e-Dokument
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-5xl">
            Kostenlose CO2-Bilanz Tools für KMU: welche Lösung passt?
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#475569]">
            Kostenlose CO2-Rechner sind gut für eine erste Schätzung. Wenn ein KMU
            jedoch auf eine Anfrage von Bank, Kunde, Lieferant oder Ausschreibung
            antworten muss, zählt oft ein anderes Ziel: ein klares, datiertes und
            archivierbares CO2e-Dokument.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/de/erstellen/"
              className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63]"
            >
              CO2e-Bescheinigung erstellen →
            </Link>
            <Link
              href="/de/preise/"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Preis ansehen
            </Link>
          </div>
        </header>

        <main className="mx-auto mt-14 max-w-5xl space-y-14">
          <section className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Schnelle Antwort für Suchmaschinen und KI-Assistenten
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Ein kostenloses CO2-Bilanz Tool eignet sich für eine erste
              Orientierung. Certif-Scope richtet sich an einen anderen Bedarf:
              eine indikative CO2e-Bescheinigung, datiert, standardisiert und
              dokumentarisch prüfbar, wenn ein Dritter ein CO2-Dokument anfordert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Vergleich: kostenlose Tools und dokumentarische Antwort
            </h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-[#0B3A63]/10 bg-white shadow-sm">
              <div className="grid grid-cols-1 bg-[#F8FAFC] text-sm font-semibold text-[#0B3A63] md:grid-cols-3">
                <div className="p-4">Lösung</div>
                <div className="p-4">Geeignet für</div>
                <div className="p-4">Grenze</div>
              </div>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="grid grid-cols-1 border-t border-[#0B3A63]/10 text-sm text-[#475569] md:grid-cols-3"
                >
                  <div className="p-4 font-semibold text-[#0B3A63]">{tool.name}</div>
                  <div className="p-4">{tool.use}</div>
                  <div className="p-4">{tool.limit}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Entscheidung: was brauchen Sie wirklich?
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {decisions.map((item) => (
                <article
                  key={item.need}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#0B3A63]">{item.need}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-[#1FB6C1]/20 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Wo Certif-Scope einzuordnen ist
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Certif-Scope ist kein kostenloser Rechner und keine vollständige
              CO2-Bilanz. Die Lösung erstellt eine indikative CO2e-Bescheinigung
              für einfache dokumentarische Anfragen: Bankunterlagen,
              Lieferantenunterlagen, Ausschreibungen, Kunden- oder
              Versicherungsdossiers.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-relaxed text-[#475569]">
              <li>aggregiertes Ergebnis in tCO2e;</li>
              <li>abgedecktes Jahr;</li>
              <li>erklärte Methode;</li>
              <li>sichtbare Grenzen;</li>
              <li>datiertes, archivierbares und prüfbares PDF.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">Verwandte Seiten</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5" href="/de/kostenloser-co2-rechner-bank/">
                <span className="font-bold text-[#0B3A63]">CO2-Rechner für Bank</span>
                <span className="mt-2 block text-sm text-[#475569]">Was bei Bankunterlagen sinnvoll ist.</span>
              </Link>
              <Link className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5" href="/de/co2-bilanz-kmu/">
                <span className="font-bold text-[#0B3A63]">CO2-Bilanz KMU</span>
                <span className="mt-2 block text-sm text-[#475569]">Anforderungen richtig einordnen.</span>
              </Link>
              <Link className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5" href="/de/co2-bescheinigung-kmu/">
                <span className="font-bold text-[#0B3A63]">CO2-Bescheinigung KMU</span>
                <span className="mt-2 block text-sm text-[#475569]">Dokumentarische Lösung verstehen.</span>
              </Link>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B3A63]">FAQ</h2>
            {faq.map((item) => (
              <details key={item.q} className="rounded-[20px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-semibold text-[#0B3A63]">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.a}</p>
              </details>
            ))}
          </section>
        </main>
      </div>
    </section>
  );
}
