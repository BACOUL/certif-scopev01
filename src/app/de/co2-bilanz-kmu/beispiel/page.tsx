// PATH: src/app/de/co2-bilanz-kmu/beispiel/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "CO2-Bilanz KMU Beispiel: CO₂e-Dokument richtig einordnen | Certif-Scope",
  description:
    "Ein Beispiel für ein CO2-Bilanz-Dokument für KMU: Struktur einer indikativen CO₂e-Bescheinigung, erwartete Elemente, Grenzen, Prüfung und Nutzung in Kunden-, Bank- oder Ausschreibungsunterlagen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bilanz-kmu/beispiel/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-bilanz-kmu/beispiel/",
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
    },
  },
  openGraph: {
    title: "CO2-Bilanz KMU Beispiel: CO₂e-Dokument richtig einordnen",
    description:
      "Verstehen, wie eine indikative CO₂e-Bescheinigung für KMU aufgebaut ist: Inhalt, Struktur, Grenzen und typische Einsatzfälle.",
    url: "https://www.certif-scope.com/de/co2-bilanz-kmu/beispiel/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const quickAnswers = [
  {
    title: "Was das Beispiel zeigt",
    text: "Ein CO₂e-Dokument für Unterlagen: aggregiertes Ergebnis, Jahr, Methode, Grenzen, Datum und Dokumentenprüfung.",
  },
  {
    title: "Was es nicht ist",
    text: "Es ist keine detaillierte CO2-Bilanz, keine vollständige Treibhausgasinventur und keine regulatorische CSRD-/ESRS-Berichterstattung.",
  },
  {
    title: "Praktischer Einsatz",
    text: "Das Beispiel hilft zu verstehen, was an Kunden, Lieferanten, Einkauf, Banken, Versicherer oder Ausschreibungsstellen übermittelt werden kann.",
  },
];

const documentParts = [
  "Name oder einfache Identifikation der Einheit",
  "Abgedecktes Jahr oder Zeitraum",
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Deklarierte und verständliche Methode",
  "Ausstellungsdatum",
  "Sichtbare Grenzen des Dokuments",
  "Kennung oder Prüfreferenz des Dokuments",
  "Klare Einordnung: indikativ, nicht extern geprüft, nicht regulatorisch",
];

const previewRows = [
  {
    label: "Dokumenttyp",
    value: "Indikative CO₂e-Bescheinigung",
    purpose: "Die Art des Dokuments sofort verständlich machen.",
  },
  {
    label: "Ergebnis",
    value: "Aggregiertes Ergebnis in tCO₂e",
    purpose: "Eine schnelle Lesbarkeit für den Dritten ermöglichen.",
  },
  {
    label: "Methode",
    value: "Deklarierte spend-based Methode",
    purpose: "Erklären, wie die Schätzung erstellt wurde.",
  },
  {
    label: "Grenzen",
    value: "Keine externe Prüfung, keine vollständige Treibhausgasinventur",
    purpose: "Verwechslungen über die Reichweite des Dokuments vermeiden.",
  },
];

const useCases = [
  "Antwort auf einen Kunden- oder Lieferantenfragebogen.",
  "Anlage für eine Ausschreibung ohne vorgegebene Norm.",
  "Dokument für eine Bank oder einen Versicherer.",
  "Lieferantenregistrierung mit einfacher Carbon-Anfrage.",
  "Vertriebsunterlage, wenn eine CO₂e-Information angefragt wird.",
];

const decisionRows = [
  {
    demand: "Ich möchte sehen, was das Dokument enthält, bevor ich bezahle",
    answer:
      "Das Beispiel sollte Struktur, Schlüsselfelder, Grenzen und die Art des erwarteten Ergebnisses zeigen.",
  },
  {
    demand: "Mein Kunde verlangt nur eine Carbon-Information",
    answer:
      "Eine indikative CO₂e-Bescheinigung kann passend sein, wenn kein vollständiger methodischer Rahmen verlangt wird.",
  },
  {
    demand: "Das Dossier verlangt eine externe Prüfung oder Verifizierung",
    answer:
      "Dann muss diese Anforderung eingehalten werden. Das Certif-Scope-Beispiel ersetzt dieses Nachweisniveau nicht.",
  },
  {
    demand: "Ich möchte mit einer detaillierten CO2-Bilanz vergleichen",
    answer:
      "Der wichtigste Unterschied liegt im Umfang: indikatives Screening gegenüber detaillierter Inventur.",
  },
];

const mistakes = [
  {
    title: "Ein zu komplexes Beispiel suchen",
    text: "Ein für KMU-Unterlagen nützliches Dokument sollte schnell lesbar sein. Komplexität ist nicht automatisch ein Zeichen für Passgenauigkeit.",
  },
  {
    title: "Die Grenzen weglassen",
    text: "Ein Beispiel ohne sichtbare Grenzen kann mit einer externen Prüfung oder einer vollständigen Inventur verwechselt werden.",
  },
  {
    title: "Beispiel und Nachweis verwechseln",
    text: "Ein Beispiel zeigt die Struktur. Eine ausgestellte Bescheinigung muss Daten, Datum und eine Logik zur Dokumentenprüfung enthalten.",
  },
  {
    title: "Ein Screening wie eine externe Prüfung darstellen",
    text: "Das Dokument muss eindeutig bleiben: indikativ, nicht regulatorisch, nicht extern geprüft und keine vollständige Treibhausgasinventur.",
  },
];

const relatedPages = [
  {
    title: "CO₂e-Bescheinigung erstellen",
    text: "Ein indikatives CO₂e-Dokument erzeugen, das weitergegeben werden kann.",
    href: "/de/erstellen/",
  },
  {
    title: "Certif-Scope Preise",
    text: "Das Angebot für 89 € ohne Abo ansehen.",
    href: "/de/preise/",
  },
  {
    title: "Kosten CO2-Bilanz KMU",
    text: "Indikative Bescheinigung, detaillierte Inventur und externe Prüfung einordnen.",
    href: "/de/co2-bilanz-kmu/kosten/",
  },
];

const faq = [
  {
    q: "Wie sieht ein Beispiel für eine CO2-Bilanz für KMU aus?",
    a: "Für ein Screening sieht es wie ein indikatives CO₂e-Dokument aus: mit aggregiertem Ergebnis, abgedecktem Jahr, deklarierter Methode, sichtbaren Grenzen, Ausstellungsdatum und einer Logik zur Dokumentenprüfung.",
  },
  {
    q: "Muss ein Beispiel detaillierte Scope-1-, Scope-2- und Scope-3-Werte enthalten?",
    a: "Nicht immer. Wenn ein Dossier nur eine einfache Carbon-Information verlangt, kann ein aggregiertes Ergebnis ausreichen. Eine detaillierte Aufschlüsselung gehört zu einer umfassenderen Inventur.",
  },
  {
    q: "Worauf achtet ein Kunde bei einem solchen Dokument?",
    a: "Ein Kunde prüft vor allem, ob das Dokument klar, datiert, archivierbar, verständlich, passend zur Anfrage und eindeutig zu Methode sowie Grenzen ist.",
  },
  {
    q: "Ersetzt das Certif-Scope-Beispiel eine externe Carbon-Prüfung?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung, nicht extern geprüft, nicht regulatorisch und nicht gleichzusetzen mit einer vollständigen Treibhausgasinventur oder CSRD-/ESRS-Berichterstattung.",
  },
  {
    q: "Wann ist dieses Beispiel nützlich?",
    a: "Es hilft zu verstehen, was in Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsunterlagen bereitgestellt werden kann, wenn keine vollständige Norm oder externe Verifizierung verlangt wird.",
  },
];

export default function CO2BilanzKMUBeispielPageDE() {
  const pageUrl =
    "https://www.certif-scope.com/de/co2-bilanz-kmu/beispiel/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bilanz KMU Beispiel: CO₂e-Dokument richtig einordnen",
    url: pageUrl,
    description:
      "Guide für KMU, um zu verstehen, wie eine indikative CO₂e-Bescheinigung aufgebaut ist, welche Elemente sie enthält und in welchen Fällen sie nützlich sein kann.",
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
        name: "CO2-Bilanz KMU",
        item: "https://www.certif-scope.com/de/co2-bilanz-kmu/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Beispiel",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung für KMU",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative spend-based CO₂e-Bescheinigung",
    description:
      "Service zur Erstellung einer indikativen, standardisierten und prüfbaren CO₂e-Bescheinigung für Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungsunterlagen.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/de/preise/",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <section
        id="co2-bilanz-kmu-beispiel"
        data-section="co2-bilanz-kmu-beispiel"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Beispiel · CO₂e-Dokument · KMU-Bescheinigung
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Beispiel für eine CO2-Bilanz für KMU: Wie sieht die
              Bescheinigung aus?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Wenn ein KMU eine Carbon-Anfrage erhält, möchte es oft vorab
              sehen, wie ein konkretes Dokument aufgebaut ist. Hier ist die
              Struktur einer klaren und nutzbaren indikativen CO₂e-Bescheinigung.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Ziel ist nicht, eine detaillierte CO2-Bilanz zu zeigen, sondern
              zu verstehen, was ein Dritter in Kunden-, Bank-, Versicherungs-,
              Lieferanten- oder Ausschreibungsunterlagen schnell lesen kann.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                CO₂e-Bescheinigung erstellen
              </Link>
              <Link
                href="/de/preise/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Preis 89 € ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)]"
              >
                <h2 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {item.text}
                </p>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Erwartete Struktur
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was ein nützliches Beispiel enthalten sollte
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Ein gutes Beispiel muss nicht durch Komplexität beeindrucken.
                Es sollte ein Dokument zeigen, das lesbar, archivierbar,
                prüfbar und im Umfang vorsichtig eingeordnet ist.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {documentParts.map((part) => (
                <li
                  key={part}
                  className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569] shadow-sm"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {part}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Beispielhafte Lesart
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Was der Dritte im Dokument versteht
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Das Dokument sollte eine schnelle Einordnung ermöglichen: Worum
              geht es, welches Ergebnis wird genannt, welche Methode wurde
              verwendet und welche Grenzen gelten.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {previewRows.map((row) => (
              <article
                key={row.label}
                className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  {row.label}
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#0B3A63]">
                  {row.value}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {row.purpose}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="w-1/4 p-5 text-left font-semibold text-[#0B3A63]">
                    Element
                  </th>
                  <th className="w-1/3 p-5 text-left font-semibold text-[#0B3A63]">
                    Beispielinhalt
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Rolle im Dossier
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/8">
                {previewRows.map((row) => (
                  <tr key={row.label}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.label}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.value}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Indikatives Dokument
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Ein klares Beispiel sollte auch sagen, was es nicht abdeckt
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Glaubwürdigkeit entsteht auch durch Grenzen. Ein Screening-Dokument
              darf nicht wie eine vollständige Treibhausgasinventur oder externe
              Prüfung dargestellt werden.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Situation
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-white">
                  {row.demand}
                </h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Richtige Lesart
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/84">
                  {row.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-white/16 bg-white/8 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Situation
                  </th>
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Richtige Lesart
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {decisionRows.map((row) => (
                  <tr key={row.demand}>
                    <td className="p-5 align-top font-semibold text-white">
                      {row.demand}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-white/82">
                      {row.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Einsatzfälle
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Wann dieses Beispiel einem KMU hilft
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Der Bedarf ist häufig sehr konkret: Das KMU muss einem Dritten
                eine lesbare Unterlage bereitstellen, ohne in eine unnötig
                schwere Vorgehensweise einzusteigen.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {useCase}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Fehler vermeiden
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Häufige Fehler in einem Carbon-Dokument-Beispiel
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Ein gutes Beispiel soll bei der Entscheidung helfen, nicht für
                Verwirrung über Nachweisniveau oder Reichweite sorgen.
              </p>
            </div>

            <div className="grid gap-5">
              {mistakes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Konkretes Beispiel · prüfbares PDF · Festpreis
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Möchten Sie ein solches Dokument erstellen?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Erstellen Sie eine indikative CO₂e-Bescheinigung für 89 €,
                  mit deklarierter Methode, sichtbaren Grenzen und einem PDF,
                  das weitergegeben werden kann.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/de/erstellen/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  CO₂e-Bescheinigung erstellen
                </Link>
                <Link
                  href="/de/preise/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Preis ansehen
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis
            aggregierter Ausgaben. Das Dokument ist keine externe Carbon-Prüfung,
            keine vollständige Treibhausgasinventur, keine externe Verifizierung
            und keine CSRD-/ESRS-Berichterstattung.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Verwandte Seiten
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Je nach Bedarf weiter einordnen
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {page.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  Lesen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zum CO2-Bilanz-Beispiel für KMU
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
