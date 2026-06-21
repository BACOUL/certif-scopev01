import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/de/pruefen/demo/";

export const metadata: Metadata = {
  title: "Demo zur Prüfung einer Certif-Scope-Bescheinigung",
  description:
    "Sehen Sie ein fiktives Beispiel für die Prüfung einer Certif-Scope-Bescheinigung: angezeigte Daten, Status, Grenzen und Elemente, die ein Empfänger kontrollieren kann.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title: "Demo zur Prüfung einer Certif-Scope-Bescheinigung",
    description:
      "Pädagogische Seite mit einem fiktiven Beispiel dafür, was ein Empfänger bei der Prüfung einer Certif-Scope-Bescheinigung sehen kann.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const demoRows = [
  ["Unternehmen", "Beispiel GmbH"],
  ["Jahr", "2025"],
  ["Ergebnis", "42,8 tCO₂e"],
  ["Methode", "Spend-based indikativ"],
  ["Faktorversion", "Beispiel v1"],
  ["Dokument-ID", "CS-DEMO-2025-0001"],
  ["Status", "Beispieldokument, nicht als echte Bescheinigung verwendbar"],
];

const controlItems = [
  "Kohärenz der Dokument-ID",
  "Angegebene Methode",
  "Angezeigtes Datum oder angezeigter Zeitraum",
  "Grenzen des Dokuments",
  "Dokumentstatus",
  "Integrität oder Prüfung, sofern im realen Ablauf verfügbar",
];

const faq = [
  {
    q: "Prüft diese Seite eine echte Bescheinigung?",
    a: "Nein. Diese Seite ist eine fiktive und pädagogische Demonstration. Sie validiert kein echtes Dokument und simuliert keine kryptografische Prüfung.",
  },
  {
    q: "Was sieht ein Empfänger bei einer echten Prüfung?",
    a: "Er kann dokumentarische Kontrollinformationen sehen: Dokument-ID, Methode, Datum, Status, Grenzen und Elemente, die helfen, das übermittelte Dokument einzuordnen.",
  },
  {
    q: "Ist das hier angezeigte Ergebnis verwendbar?",
    a: "Nein. Die Angaben Beispiel GmbH, 2025 und 42,8 tCO₂e sind fiktiv. Sie dienen ausschließlich dazu, den Prüfablauf zu veranschaulichen.",
  },
  {
    q: "Wo kann eine echte Bescheinigung geprüft werden?",
    a: "Eine echte Bescheinigung sollte über die reale Certif-Scope-Prüfseite oder über den QR-Code des Dokuments geprüft werden.",
  },
];

export default function VerifyDemoPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Demo zur Prüfung einer Certif-Scope-Bescheinigung",
    url: pageUrl,
    description:
      "Pädagogische Seite mit einem fiktiven Beispiel zur Prüfung einer Certif-Scope-Bescheinigung.",
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
        name: "Bescheinigung prüfen",
        item: "https://www.certif-scope.com/de/pruefen/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Demo",
        item: pageUrl,
      },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main id="main-content" role="main" className="bg-white">
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

      <section className="bg-[#F8FAFC] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/70">
                Demo · Prüfung · fiktives Beispiel
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                Demo zur Prüfung einer Certif-Scope-Bescheinigung
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0B3A63]/80">
                Diese Seite zeigt, was ein Empfänger sehen kann, wenn er eine
                Prüfseite öffnet. Die angezeigten Daten sind fiktiv und beziehen
                sich auf keine echte Bescheinigung.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B3A63]/70">
                Die Demo ist ausschließlich pädagogisch. Sie verändert nicht die
                echte Prüfseite, validiert kein PDF und simuliert keine
                kryptografische Prüfung.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/api/sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1FB6C1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1FB6C1]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
                >
                  Kostenloses Beispiel herunterladen
                </Link>
                <Link
                  href="/de/pruefen/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#0B3A63] bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
                >
                  Echte Bescheinigung prüfen
                </Link>
                <Link
                  href="/de/erstellen/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#0B3A63] bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
                >
                  Meine Bescheinigung erstellen — 89 €
                </Link>
              </div>
            </header>

            <aside className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <div className="rounded-lg bg-[#0B3A63] px-4 py-3 text-sm font-bold text-white">
                Beispielprüfung
              </div>
              <div className="mt-5 rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                <p className="text-sm font-bold text-[#0B3A63]">
                  Angezeigter Status
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#0B3A63]/75">
                  Beispieldokument, nicht als echte Bescheinigung verwendbar.
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#0B3A63]/70">
                Die Certif-Scope-Bescheinigung ist indikativ, nicht extern
                fachlich geprüft, nicht regulatorisch, kein CSRD-/ESRS-Reporting
                und ersetzt weder ein vollständiges Treibhausgasinventar noch
                eine externe Prüfung.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              Fiktive Daten
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Beispiel einer Prüfkarte
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0B3A63]/75">
              Diese Informationen zeigen einen möglichen Anzeigezustand. Sie
              dürfen nicht als Nachweis kopiert werden und ersetzen keine echte
              Prüfung.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="min-w-[560px] w-full text-sm">
              <tbody className="divide-y divide-[#0B3A63]/10">
                {demoRows.map(([label, value]) => (
                  <tr key={label}>
                    <th className="w-1/3 p-4 text-left font-bold text-[#0B3A63]">
                      {label}
                    </th>
                    <td className="p-4 leading-relaxed text-[#0B3A63]/80">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Was der Empfänger kontrollieren kann
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Eine dokumentarische Einordnung, keine Zusage zur Annahme
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Eine echte Bescheinigung hängt von den Angaben des Nutzers ab. Sie
              ist für einfache dokumentarische Anfragen gedacht, sichert aber
              keine Annahme durch Kunden, Banken, Versicherer, Einkäufer oder
              Plattformen zu. Wenn eine bestimmte Methode verlangt wird, muss
              das Unternehmen diese Methode befolgen.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {controlItems.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/20 bg-white/10 p-4 text-sm leading-relaxed text-white/90"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1FB6C1]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Häufige Fragen zur Demo
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-lg border border-[#0B3A63]/10 bg-white p-5"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0B3A63]/75">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-lg border border-[#0B3A63]/10 bg-[#0B3A63] p-6 text-white md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Kostenloses Beispiel · echte Prüfung · Bescheinigung 89 €
                </p>
                <h2 className="mt-3 text-3xl font-extrabold">
                  Den Ablauf testen oder Ihr Dokument erstellen
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/api/sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
                >
                  Kostenloses Beispiel herunterladen
                </Link>
                <Link
                  href="/de/pruefen/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
                >
                  Echte Bescheinigung prüfen
                </Link>
                <Link
                  href="/de/erstellen/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
                >
                  Meine Bescheinigung erstellen — 89 €
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
