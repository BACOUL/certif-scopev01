// PATH: src/app/de/co2-bilanz-kmu/beispiel/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beispiel CO₂-Bilanz KMU: Muster für CO₂e-Dokument | Certif-Scope",
  description:
    "Sehen Sie ein Beispiel für eine CO₂-Bilanz für KMU: Struktur einer indikativen CO₂e-Bescheinigung, erwartete Elemente, Grenzen, Verifizierung und Nutzung in Kunden-, Bank- oder Ausschreibungsdossiers.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bilanz-kmu/beispiel/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
      de: "https://www.certif-scope.com/de/co2-bilanz-kmu/beispiel/",
    },
  },
  openGraph: {
    title: "Beispiel CO₂-Bilanz KMU: Muster für CO₂e-Dokument",
    description:
      "Verstehen, wie eine indikative CO₂e-Bescheinigung für KMU aussieht: Inhalt, Struktur, Grenzen und Einsatzfälle.",
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
    text: "Ein CO₂e-Dokument, das in einem Dossier genutzt werden kann: aggregiertes Ergebnis, Jahr, Methode, Grenzen, Datum und Verifizierung.",
  },
  {
    title: "Was es nicht ist",
    text: "Es ist kein CO₂-Audit, kein vollständiges THG-Inventar und kein regulatorisches CSRD-/ESRS-Reporting.",
  },
  {
    title: "Reale Nutzung",
    text: "Das Beispiel hilft zu verstehen, was an Kunden, Lieferanten, Einkäufer, Banken, Versicherer oder Ausschreibungen übermittelt werden kann.",
  },
];

const documentParts = [
  "Name oder einfache Identifikation der Einheit",
  "Jahr oder abgedeckter Zeitraum",
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Deklarierte und verständliche Methode",
  "Ausstellungsdatum",
  "Sichtbare Grenzen des Dokuments",
  "Verifizierungs-ID oder Referenz",
  "Expliziter Hinweis: indikativ, kein Audit, nicht regulatorisch",
];

const previewRows = [
  {
    label: "Dokumenttyp",
    value: "Indikative CO₂e-Bescheinigung",
    purpose: "Die Art des Dokuments sofort klarstellen.",
  },
  {
    label: "Ergebnis",
    value: "Aggregiertes Ergebnis in tCO₂e",
    purpose: "Eine schnelle Lektüre durch den Dritten ermöglichen.",
  },
  {
    label: "Methode",
    value: "Deklarierte spend-based Methode",
    purpose: "Erklären, wie die Schätzung erstellt wurde.",
  },
  {
    label: "Grenzen",
    value: "Kein Audit, kein vollständiges THG-Inventar",
    purpose: "Jede Verwechslung über den Umfang des Dokuments vermeiden.",
  },
];

const useCases = [
  "Antwort auf einen Kunden- oder Lieferantenfragebogen.",
  "Anlage für eine Ausschreibung ohne vorgeschriebene Norm.",
  "Dokument für eine Bank oder einen Versicherer.",
  "Lieferantenregistrierung mit einfacher CO₂-Nachweis-Anfrage.",
  "Kommerzielles Dossier, in dem eine CO₂e-Information verlangt wird.",
];

const decisionRows = [
  {
    demand: "Ich möchte sehen, was das Dokument enthält, bevor ich bezahle",
    answer: "Das Beispiel soll Struktur, Schlüsselfelder, Grenzen und die Art des erwarteten Ergebnisses zeigen.",
  },
  {
    demand: "Mein Kunde verlangt nur eine CO₂-Information",
    answer: "Eine indikative CO₂e-Bescheinigung kann häufig genügen, wenn keine vollständige Norm vorgeschrieben ist.",
  },
  {
    demand: "Das Dossier verlangt ein Audit oder eine externe Prüfung",
    answer: "Diese Anforderung muss befolgt werden. Das Certif-Scope-Beispiel ersetzt kein vollständiges Audit.",
  },
  {
    demand: "Ich möchte mit einer vollständigen CO₂-Bilanz vergleichen",
    answer: "Der wichtigste Unterschied ist der Umfang: indikatives Screening gegenüber detailliertem Inventar.",
  },
];

const mistakes = [
  {
    title: "Ein zu komplexes Beispiel suchen",
    text: "Ein nützliches Dokument für ein KMU-Dossier muss schnell lesbar sein. Komplexität ist nicht immer ein Zeichen von Relevanz.",
  },
  {
    title: "Die Grenzen vergessen",
    text: "Ein Beispiel ohne sichtbare Grenzen kann mit einem Audit oder einem vollständigen Inventar verwechselt werden.",
  },
  {
    title: "Muster und Nachweis verwechseln",
    text: "Ein Beispiel zeigt die Struktur. Eine ausgestellte Bescheinigung muss Daten, Datum und eine Verifizierungslogik enthalten.",
  },
  {
    title: "Ein Screening als Audit darstellen",
    text: "Das Dokument muss eindeutig bleiben: indikativ, nicht regulatorisch, kein Audit, kein vollständiges THG-Inventar.",
  },
];

const relatedPages = [
  {
    title: "Bescheinigung erstellen",
    text: "Ein indikatives CO₂e-Dokument erzeugen, das übermittelt werden kann.",
    href: "/de/generate/",
  },
  {
    title: "Certif-Scope Preis",
    text: "Das Angebot für 89 € ohne Abonnement ansehen.",
    href: "/de/pricing/",
  },
  {
    title: "Kosten CO₂-Bilanz KMU",
    text: "Indikative Bescheinigung, vollständiges Inventar und Audit vergleichen.",
    href: "/de/co2-bilanz-kmu/kosten/",
  },
];

const faq = [
  {
    q: "Wie sieht ein Beispiel für eine CO₂-Bilanz für KMU aus?",
    a: "Für ein Screening sieht es wie ein indikatives CO₂e-Dokument aus: aggregiertes Ergebnis, abgedecktes Jahr, deklarierte Methode, sichtbare Grenzen, Ausstellungsdatum und Verifizierungslogik.",
  },
  {
    q: "Muss ein Beispiel detaillierte Scopes 1, 2 und 3 enthalten?",
    a: "Nicht immer. Wenn das Dossier nur eine einfache CO₂-Information verlangt, kann ein aggregiertes Ergebnis genügen. Eine detaillierte Aufschlüsselung gehört zu einer umfassenderen Inventar-Maßnahme.",
  },
  {
    q: "Worauf achtet ein Kunde bei diesem Dokument?",
    a: "Der Kunde achtet vor allem darauf, ob das Dokument klar, datiert, archivierbar, verständlich, mit der Anfrage vereinbar und hinsichtlich Methode und Grenzen ausdrücklich formuliert ist.",
  },
  {
    q: "Ersetzt das Certif-Scope-Beispiel ein CO₂-Audit?",
    a: "Nein. Certif-Scope erstellt eine indikative, nicht auditierte und nicht regulatorische CO₂e-Bescheinigung. Sie ist kein vollständiges THG-Inventar und kein CSRD-/ESRS-Reporting.",
  },
  {
    q: "In welchen Fällen ist dieses Beispiel nützlich?",
    a: "Es ist nützlich, um zu verstehen, was in einem Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsdossier geliefert werden kann, wenn keine vollständige Norm oder externe Prüfung verlangt wird.",
  },
];

export default function Co2BilanzKmuBeispielPageDE() {
  const pageUrl = "https://www.certif-scope.com/de/co2-bilanz-kmu/beispiel/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Beispiel CO₂-Bilanz KMU: Muster für CO₂e-Dokument",
    url: pageUrl,
    description:
      "Guide für KMU, um zu verstehen, wie eine indikative CO₂e-Bescheinigung aussieht, welche Elemente sie enthält und in welchen Fällen sie nützlich ist.",
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
        name: "CO₂-Bilanz KMU",
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
    serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
    description:
      "Service zur Erstellung einer indikativen, standardisierten und verifizierbaren CO₂e-Bescheinigung für Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungsdossiers.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/de/pricing/",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <section id="co2-bilanz-kmu-beispiel" data-section="co2-bilanz-kmu-beispiel" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Beispiel · CO₂e-Dokument · KMU-Bescheinigung
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Beispiel für eine CO₂-Bilanz für KMU: Wie sieht die Bescheinigung aus?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Wenn ein KMU eine CO₂-Anfrage erhält, möchte es häufig vor Zahlung oder Übermittlung sehen, wie ein konkretes Dokument aussieht. Hier ist die Struktur einer klaren und nutzbaren indikativen CO₂e-Bescheinigung.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Ziel ist nicht, ein vollständiges Audit zu zeigen, sondern zu verstehen, was ein Dritter in einem Kunden-, Bank-, Versicherungs-, Lieferanten- oder Ausschreibungsdossier schnell lesen kann.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                Bescheinigung erstellen
              </Link>
              <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                Preis 89 € ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)]">
                <h2 className="text-lg font-extrabold text-[#0B3A63]">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Erwartete Struktur</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was ein nützliches Beispiel enthalten sollte
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Ein gutes Beispiel soll nicht durch Komplexität beeindrucken. Es soll ein lesbares, archivierbares, verifizierbares und im Umfang vorsichtig formuliertes Dokument zeigen.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {documentParts.map((part) => (
                <li key={part} className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569] shadow-sm">
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Beispielhafte Lektüre</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Was der Dritte im Dokument versteht
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Das Dokument muss schnell lesbar sein: Worum handelt es sich, welches Ergebnis wird angegeben, welche Methode wird genutzt und welche Grenzen gelten?
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {previewRows.map((row) => (
              <article key={row.label} className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">{row.label}</p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#0B3A63]">{row.value}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{row.purpose}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="w-1/4 p-5 text-left font-semibold text-[#0B3A63]">Element</th>
                  <th className="w-1/3 p-5 text-left font-semibold text-[#0B3A63]">Beispielinhalt</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Rolle im Dossier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/8">
                {previewRows.map((row) => (
                  <tr key={row.label}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">{row.label}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.value}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.purpose}</td>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Indikatives Dokument</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Ein klares Beispiel muss auch sagen, was es nicht abdeckt
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Glaubwürdigkeit entsteht auch durch Grenzen. Ein Screening-Dokument darf niemals als vollständiges THG-Inventar oder Audit dargestellt werden.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article key={row.demand} className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Situation</p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-white">{row.demand}</h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Korrekte Lektüre</p>
                <p className="mt-2 text-sm leading-relaxed text-white/84">{row.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-white/16 bg-white/8 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="w-1/2 p-5 text-left font-semibold text-white">Situation</th>
                  <th className="w-1/2 p-5 text-left font-semibold text-white">Korrekte Lektüre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {decisionRows.map((row) => (
                  <tr key={row.demand}>
                    <td className="p-5 align-top font-semibold text-white">{row.demand}</td>
                    <td className="p-5 align-top leading-relaxed text-white/82">{row.answer}</td>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Einsatzfälle</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Wann dieses Beispiel einem KMU hilft
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Der Bedarf ist oft sehr konkret: Das KMU muss einem Dritten ein lesbares Dokument übermitteln, ohne eine zu schwere Maßnahme zu starten.
              </p>
            </div>
            <div className="grid gap-4">
              {useCases.map((useCase) => (
                <div key={useCase} className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base">
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Fehler vermeiden</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Fehler, die ein Beispiel unglaubwürdig machen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Ein Beispiel muss nicht alles zeigen. Es muss vor allem zum tatsächlichen Bedarf und zum Umfang des Dokuments passen.
              </p>
            </div>
            <div className="grid gap-5">
              {mistakes.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-extrabold text-[#0B3A63]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">{item.text}</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Beispiel gesehen · Dokument erstellen</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Bereit, eine indikative CO₂e-Bescheinigung zu erstellen?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Erstellen Sie ein CO₂e-Dokument mit aggregiertem Ergebnis, deklarierter Methode, sichtbaren Grenzen und verifizierbarer Referenz.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                  Bescheinigung erstellen
                </Link>
                <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Preis ansehen
                </Link>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis von Ausgaben. Das Dokument ist kein CO₂-Audit, kein vollständiges THG-Inventar, keine externe Prüfung und kein CSRD-/ESRS-Reporting.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Verwandte Seiten</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Je nach Bedarf weitergehen
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedPages.map((page) => (
              <Link key={page.href} href={page.href} className="group rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]">
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">{page.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{page.text}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">Lesen →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zum Beispiel einer CO₂-Bilanz für KMU
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article key={item.q} className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
