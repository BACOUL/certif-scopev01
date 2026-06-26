// PATH: src/app/de/kostenloser-co2-rechner-bank/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/de/kostenloser-co2-rechner-bank/";
const frUrl = "https://www.certif-scope.com/fr/bilan-carbone-gratuit-banque/";

export const metadata: Metadata = {
  title: "Kostenloser CO2-Rechner für Bankunterlagen: reicht das? | Certif-Scope",
  description:
    "Eine Bank fragt nach CO2-Angaben oder ESG-Unterlagen? Verstehen, wann ein kostenloser CO2-Rechner reicht und wann eine indikative CO2e-Bescheinigung sinnvoller ist.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
      fr: frUrl,
    },
  },
  openGraph: {
    title: "Kostenloser CO2-Rechner für Bankunterlagen: reicht das?",
    description:
      "Praktischer KMU-Leitfaden für Bankanfragen: kostenloser Rechner, CO2e-Dokument, Grenzen und Formulierung für den Bankberater.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function KostenloserCO2RechnerBankDE() {
  const expectations = [
    "ein einfacher Umwelt- oder ESG-Indikator;",
    "ein CO2e-Ergebnis für ein abgedecktes Jahr;",
    "ein datiertes Dokument für die Kundenakte;",
    "eine verständliche Methode mit sichtbaren Grenzen;",
    "ein PDF, das intern archiviert werden kann.",
  ];

  const choices = [
    {
      title: "Kostenlosen Rechner nutzen",
      text: "Gut, um eine erste Größenordnung zu erhalten oder eine beginnende Nachhaltigkeitsdokumentation zu zeigen.",
    },
    {
      title: "CO2e-Bescheinigung beilegen",
      text: "Sinnvoll, wenn die Bank ein klares, datiertes und standardisiertes Dokument für die Akte erwartet.",
    },
    {
      title: "Umfassende Bilanz erstellen",
      text: "Nötig, wenn die Bank eine Norm, externe Prüfung, genaue Scopes oder ein regulatorisches Reporting vorgibt.",
    },
  ];

  const messageLines = [
    "Guten Tag,",
    "anbei erhalten Sie eine indikative CO2e-Bescheinigung für unser Unternehmen.",
    "Das Dokument enthält ein aggregiertes Ergebnis, das abgedeckte Jahr, die verwendete Methode und die methodischen Grenzen.",
    "Es handelt sich nicht um ein vollständiges Audit und nicht um ein regulatorisches Reporting, sondern um eine dokumentarische Antwort auf Ihre ESG-/Umweltanfrage.",
    "Mit freundlichen Grüßen",
  ];

  const faq = [
    {
      q: "Reicht ein kostenloser CO2-Rechner für eine Bank?",
      a: "Das hängt von der Anfrage ab. Wenn die Bank nur eine erste Information will, kann ein Rechner reichen. Wenn sie ein Dokument für die Akte erwartet, ist eine datierte CO2e-Bescheinigung oft besser geeignet.",
    },
    {
      q: "Warum fragt eine Bank nach CO2-Angaben?",
      a: "CO2-Angaben können Teil eines ESG-Screenings, einer Risikoanalyse, eines Finanzierungsdossiers oder einer internen Nachhaltigkeitsdokumentation sein.",
    },
    {
      q: "Ersetzt Certif-Scope ein Audit?",
      a: "Nein. Certif-Scope erstellt eine indikative, ausgabenbasierte CO2e-Bescheinigung. Sie ersetzt kein Audit, keine vollständige THG-Inventur und kein CSRD-/ESRS-Reporting.",
    },
    {
      q: "Was sollte ein Bankdokument enthalten?",
      a: "Name des Unternehmens, abgedecktes Jahr, aggregiertes CO2e-Ergebnis, Methode, Grenzen, Ausstellungsdatum und eine klare Einordnung des Dokuments.",
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie auf eine CO2-Anfrage einer Bank antworten",
    description:
      "Ein einfacher Prozess, um zwischen kostenlosem CO2-Rechner, indikativer CO2e-Bescheinigung und umfassender Bilanz zu wählen.",
    inLanguage: "de-DE",
    step: [
      {
        "@type": "HowToStep",
        name: "Anfrage prüfen",
        text: "Lesen Sie, ob die Bank einen einfachen Indikator, ein PDF-Dokument oder einen genauen Standard verlangt.",
      },
      {
        "@type": "HowToStep",
        name: "Antwortniveau wählen",
        text: "Ein kostenloser Rechner dient der Orientierung. Eine Bescheinigung eignet sich für ein archivierbares Dokument.",
      },
      {
        "@type": "HowToStep",
        name: "Grenzen nennen",
        text: "Machen Sie klar, dass das Dokument indikativ ist und kein Audit oder regulatorisches Reporting ersetzt.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-64 w-64 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] top-52 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
            Bank - ESG - CO2e-Unterlagen
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-5xl">
            Kostenloser CO2-Rechner für Bankunterlagen: reicht das?
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#475569]">
            Wenn eine Bank CO2-Angaben, ESG-Unterlagen oder einen
            Nachhaltigkeitsnachweis anfragt, ist nicht immer ein vollständiges Audit
            gemeint. Häufig braucht sie ein klares, datiertes und archivierbares
            CO2e-Dokument.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/de/erstellen/"
              className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63]"
            >
              CO2e-Bescheinigung erstellen →
            </Link>
            <Link
              href="/de/kostenlose-co2-bilanz-tools/"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Kostenlose Tools ansehen
            </Link>
          </div>
        </header>

        <main className="mx-auto mt-14 max-w-5xl space-y-14">
          <section className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Schnelle Antwort
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Ein kostenloser CO2-Rechner kann für eine erste Einschätzung reichen.
              Wenn die Bank jedoch ein Dokument für Unterlagen, ESG-Screening oder
              Risikoanalyse benötigt, ist eine indikative CO2e-Bescheinigung oft
              sauberer: Ergebnis, Jahr, Methode, Grenzen und PDF in einem Format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Was die Bank häufig erwartet
            </h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {expectations.map((item) => (
                <li
                  key={item}
                  className="rounded-[18px] border border-[#0B3A63]/10 bg-white p-4 text-sm text-[#475569] shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Drei mögliche Antworten
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {choices.map((choice) => (
                <article
                  key={choice.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#0B3A63]">{choice.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {choice.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-[#1FB6C1]/20 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Formulierung für den Bankberater
            </h2>
            <div className="mt-5 rounded-[20px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm">
              {messageLines.map((line) => (
                <p key={line} className="mb-2 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Wann Certif-Scope passt
            </h2>
            <div className="mt-6 rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <p className="text-base leading-relaxed text-[#475569]">
                Certif-Scope passt, wenn die Bank eine einfache dokumentarische
                Antwort benötigt und keine externe Prüfung oder vollständige
                THG-Inventur vorgibt. Die Bescheinigung bleibt bewusst vorsichtig:
                indikativ, nicht auditiert, nicht regulatorisch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/preise/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:bg-[#0B3A63] hover:text-white"
                >
                  Preis ansehen
                </Link>
                <Link
                  href="/de/methodik/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/20 px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:bg-[#F8FAFC]"
                >
                  Methode lesen
                </Link>
              </div>
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
