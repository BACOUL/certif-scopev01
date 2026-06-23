// PATH: src/app/de/co2-bilanz-vs-co2-bescheinigung/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.certif-scope.com/de/co2-bilanz-vs-co2-bescheinigung/";

export const metadata: Metadata = {
  title:
    "CO2-Bilanz vs CO2-Bescheinigung: Unterschied verstehen | Certif-Scope",
  description:
    "CO2-Bilanz oder CO2-Bescheinigung? Verstehen, wann eine detaillierte Bilanzierung nötig ist und wann eine indikative CO₂e-Bescheinigung als einfaches Dokument helfen kann.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title:
      "CO2-Bilanz vs CO2-Bescheinigung: Unterschied verstehen",
    description:
      "Vergleich zwischen detaillierter CO2-Bilanzierung und indikativer CO₂e-Bescheinigung für einfache Dokumentenanfragen.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

const requiredReminder =
  "Die Certif-Scope-Bescheinigung ist indikativ, nicht extern geprüft, nicht regulatorisch, keine CSRD- oder ESRS-Berichterstattung und nicht gleichzusetzen mit einer detaillierten Treibhausgasinventur oder externen Prüfung.";

const standardLimits = [
  "Sie hängt von den Informationen ab, die der Nutzer eingibt.",
  "Sie eignet sich für einfache dokumentarische Anfragen.",
  "Sie sagt keine Annahme durch Kunde, Bank, Versicherer, Käufer oder Plattform zu.",
  "Wenn eine verbindliche Methode vorgegeben ist, muss das Unternehmen dieser Methode folgen.",
];

const concerns = [
  {
    title: "Vor der Entscheidung",
    text: "Sie müssen auf eine Carbon-Anfrage antworten, wissen aber nicht, ob ein indikatives Dokument genügt oder ob eine detaillierte CO2-Bilanzierung erwartet wird.",
  },
  {
    title: "Einfache Kundenanfrage",
    text: "Ein Kunde, eine Bank, ein Versicherer oder ein Einkaufsteam fragt eine CO₂e-Information an, ohne eine genaue Norm oder Methode vorzuschreiben.",
  },
  {
    title: "Vorgegebene Methode",
    text: "Das Dossier nennt eine Norm, eine externe Prüfung, eine bestimmte Nachweismethode oder eine detaillierte GHG-Protocol-Auswertung.",
  },
  {
    title: "Begriffe sauber trennen",
    text: "Sie möchten vermeiden, eine indikative Bescheinigung als detaillierte CO2-Bilanz oder als formales Klimadokument darzustellen.",
  },
];

const comparisonRows = [
  {
    criterion: "Ziel",
    full: "Emissionen differenziert erfassen und eine strukturierte Klimabetrachtung aufbauen.",
    certifScope:
      "Schnell eine einfache, indikative und dokumentarische CO₂e-Antwort bereitstellen.",
  },
  {
    criterion: "Detailgrad",
    full: "Detaillierte Betrachtung nach Quellen, Posten, Systemgrenzen und Annahmen.",
    certifScope:
      "Aggregiertes CO₂e-Ergebnis, deklarierte Methode und sichtbar ausgewiesene Grenzen.",
  },
  {
    criterion: "Methode",
    full: "Ausführliche Methode nach dem geforderten Rahmen, häufig GHG Protocol oder ein spezieller Standard.",
    certifScope:
      "Indikative spend-based Schätzung für einfache Dokumentenanfragen.",
  },
  {
    criterion: "Benötigte Daten",
    full: "Detaillierte Aktivitätsdaten, Energie, Einkäufe, Fahrten, Rechnungen und organisatorische Grenzen.",
    certifScope:
      "Nutzereingaben für eine aggregierte Schätzung, ohne detaillierte physische Datenerhebung.",
  },
  {
    criterion: "Erstellungszeit",
    full: "Je nach Datensammlung oft mehrere Tage oder Wochen.",
    certifScope: "Wenige Minuten, wenn die benötigten Angaben bereitliegen.",
  },
  {
    criterion: "Kosten",
    full: "Variabel je nach Umfang, Beratung, Datentiefe und externer Prüfung.",
    certifScope: "Festpreis 89 €, ohne Abo.",
  },
  {
    criterion: "Begleitung",
    full: "Kann Beratung, Analyse, Maßnahmenplanung oder externe Prüfung umfassen.",
    certifScope:
      "Keine Beratung, keine Maßnahmenplanung und keine externe Prüfung.",
  },
  {
    criterion: "Empfohlene Nutzung",
    full: "Treibhausgasinventur, Klimastrategie, vorgegebene Methode oder formale Berichterstattung.",
    certifScope:
      "Einfaches Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsdossier.",
  },
  {
    criterion: "Grenzen",
    full: "Aufwendiger, länger und kostenintensiver, aber geeigneter für formale Anforderungen.",
    certifScope:
      "Indikativ, nicht extern geprüft, nicht regulatorisch und keine CSRD- oder ESRS-Berichterstattung.",
  },
  {
    criterion: "Wann wählen?",
    full: "Wenn eine detaillierte Treibhausgasinventur, eine Klimastrategie oder eine bestimmte Methode verlangt wird.",
    certifScope:
      "Wenn ein Unternehmen schnell ein standardisiertes, indikatives und prüfbares CO₂e-Dokument übermitteln muss.",
  },
];

const provides = [
  "Standardisiertes PDF",
  "Aggregiertes CO₂e-Ergebnis",
  "Deklarierte spend-based Methode",
  "Sichtbare Grenzen",
  "Ausstellungsdatum",
  "Prüf- oder Dokumentenkennung",
  "Leicht weiterzugeben",
  "Festpreis 89 €, ohne Abo",
];

const notAdapted = [
  "Das Unternehmen muss eine detaillierte Treibhausgasinventur erstellen.",
  "Scope 1, Scope 2 und Scope 3 müssen getrennt berechnet werden.",
  "Eine ausführliche GHG-Protocol-Auswertung ist vorgeschrieben.",
  "Eine ISO-Norm oder externe Prüfung ist verpflichtend.",
  "Eine CSRD- oder ESRS-Berichterstattung wird verlangt.",
  "Das Unternehmen möchte eine umfassende Klimastrategie aufbauen.",
];

const faq = [
  {
    q: "Ist eine CO₂e-Bescheinigung eine CO2-Bilanz?",
    a: "Nein. Eine indikative CO₂e-Bescheinigung ist kein detaillierter Bilanzierungsprozess. Sie liefert eine begrenzte dokumentarische Antwort mit deklarierter Methode und sichtbaren Grenzen.",
  },
  {
    q: "Wann passt Certif-Scope?",
    a: "Certif-Scope passt, wenn ein KMU schnell ein einfaches, standardisiertes, indikatives und prüfbares CO₂e-Dokument bereitstellen muss und keine Pflichtmethode vorgegeben ist.",
  },
  {
    q: "Wann ist eine detaillierte CO2-Bilanzierung nötig?",
    a: "Sie ist nötig, wenn eine Treibhausgasinventur, eine Klimastrategie, eine Norm, eine externe Prüfung oder eine formale Berichterstattung verlangt wird.",
  },
  {
    q: "Kann das bei einer einfachen Kundenanfrage helfen?",
    a: "Ja, wenn ein Kunde nur eine einfache dokumentarische CO₂e-Information anfragt und keine genaue Methode vorschreibt. Die Annahme bleibt immer Entscheidung des Empfängers.",
  },
  {
    q: "Ist das ein CSRD- oder ESRS-Dokument?",
    a: "Nein. Die Certif-Scope-Bescheinigung ist nicht regulatorisch und ersetzt keine anwendbaren Berichtspflichten.",
  },
];

const relatedLinks = [
  {
    href: "/de/methodik/",
    title: "Methodik verstehen",
    text: "Nachvollziehen, wie die spend-based CO₂e-Schätzung eingeordnet wird.",
  },
  {
    href: "/de/co2-bescheinigung-kmu/",
    title: "CO2-Bescheinigung für KMU",
    text: "Sehen, wann eine indikative Bescheinigung für einfache Anfragen passt.",
  },
  {
    href: "/de/pruefen/demo/",
    title: "Dokumentenprüfung ansehen",
    text: "Verstehen, was ein Empfänger an einem Certif-Scope-Dokument prüfen kann.",
  },
];

function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href="/de/erstellen/"
        className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1FB6C1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1FB6C1]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
      >
        CO₂e-Bescheinigung erstellen — 89 €
      </Link>
      <Link
        href="/api/sample"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#0B3A63] bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
      >
        Kostenloses Beispiel herunterladen
      </Link>
    </div>
  );
}

export default function CO2BilanzVsBescheinigungPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bilanz vs CO2-Bescheinigung: Unterschied verstehen",
    url: pageUrl,
    description:
      "Vergleich zwischen detaillierter CO2-Bilanzierung und indikativer CO₂e-Bescheinigung für einfache dokumentarische Anfragen.",
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
        name: "CO2-Bilanz vs CO2-Bescheinigung",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung Certif-Scope",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative spend-based CO₂e-Bescheinigung",
    description:
      "Indikatives CO₂e-Dokument für einfache Carbon-Anfragen, wenn keine detaillierte Bilanzierungsmethode vorgegeben ist.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/de/erstellen/",
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

      <section className="bg-[#F8FAFC] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/70">
                Vergleich · Vor der Auswahl · CO₂e
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                CO2-Bilanz oder CO2-Bescheinigung: was ist der Unterschied?
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0B3A63]/80">
                Eine detaillierte CO2-Bilanzierung und eine indikative
                CO₂e-Bescheinigung beantworten nicht dieselbe Frage.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B3A63]/70">
                Eine Bilanzierung ist für tiefere Analysen und formale
                Anforderungen gedacht. Certif-Scope ist für einfache
                Dokumentenanfragen gedacht, wenn schnell ein standardisiertes,
                indikatives und prüfbares CO₂e-Dokument benötigt wird.
              </p>
              <div className="mt-8">
                <PrimaryCtas />
              </div>
            </header>

            <aside className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-[#0B3A63]">
                Dokument Certif-Scope
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["Festpreis 89 €", "Prüfbares PDF", "Ohne Abo"].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-bold text-[#0B3A63]"
                    >
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1FB6C1]" />
                      {badge}
                    </div>
                  )
                )}
              </div>
              <div className="mt-5 rounded-lg border border-[#0B3A63]/10 bg-white p-4">
                <p className="text-sm leading-relaxed text-[#0B3A63]/80">
                  {requiredReminder}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              Wann diese Seite relevant ist
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Konkrete Situationen, in denen die Unterscheidung wichtig ist
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {concerns.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0B3A63]/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              Vergleich
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Detaillierte CO2-Bilanzierung oder indikative CO₂e-Bescheinigung?
            </h2>
          </div>
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#0B3A63]/10 bg-white">
            <table className="min-w-[820px] w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="p-4 text-left font-bold text-[#0B3A63]">
                    Kriterium
                  </th>
                  <th className="p-4 text-left font-bold text-[#0B3A63]">
                    Detaillierte CO2-Bilanzierung
                  </th>
                  <th className="p-4 text-left font-bold text-[#0B3A63]">
                    Indikative CO₂e-Bescheinigung Certif-Scope
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/10">
                {comparisonRows.map((row) => (
                  <tr key={row.criterion}>
                    <td className="p-4 align-top font-bold text-[#0B3A63]">
                      {row.criterion}
                    </td>
                    <td className="p-4 align-top leading-relaxed text-[#0B3A63]/75">
                      {row.full}
                    </td>
                    <td className="p-4 align-top leading-relaxed text-[#0B3A63]/75">
                      {row.certifScope}
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
              Was Certif-Scope bereitstellen kann
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Ein standardisiertes PDF für eine einfache Dokumentenanfrage
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Das Dokument dient dazu, eine eingeordnete Carbon-Information zu
              übermitteln, ohne sich als externe Prüfung oder verpflichtende
              Berichterstattung darzustellen.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {provides.map((item) => (
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

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              Wann es nicht passt
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Fälle, in denen eine umfangreichere Vorgehensweise nötig ist
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0B3A63]/75">
              Certif-Scope ist für dokumentarische Anfragen gedacht. Sobald ein
              verbindlicher Rahmen vorgegeben ist, hat dieser Rahmen Vorrang.
            </p>
          </div>
          <div className="grid gap-3">
            {notAdapted.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#0B3A63]/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-[#0B3A63]/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
                Beispiel für eine Formulierung
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                Kurzer Hinweis zum Dokument
              </h2>
              <blockquote className="mt-5 rounded-lg border-l-4 border-[#1FB6C1] bg-[#F8FAFC] p-5 text-base leading-relaxed text-[#0B3A63]/80">
                "Anbei finden Sie eine indikative CO₂e-Bescheinigung auf Basis
                einer spend-based Methode, mit aggregiertem Ergebnis, sichtbaren
                Grenzen und Prüfkennung."
              </blockquote>
            </article>

            <article className="rounded-lg border border-[#0B3A63]/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
                Wichtiger Hinweis
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                Grenzen vor der Weitergabe kennen
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#0B3A63]/80">
                {requiredReminder}
              </p>
              <ul className="mt-4 space-y-2">
                {standardLimits.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-[#0B3A63]/75"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1FB6C1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Häufige Fragen
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
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

      <section className="bg-[#F8FAFC] py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold text-[#0B3A63]">
            Sinnvolle nächste Seiten
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-[#0B3A63]/10 bg-white p-5 transition hover:border-[#1FB6C1]"
              >
                <h3 className="font-extrabold text-[#0B3A63]">{link.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0B3A63]/75">
                  {link.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Prüfbares PDF · Festpreis · ohne Abo
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Eine einfache CO₂e-Antwort vorbereiten
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
              Erstellen Sie eine indikative CO₂e-Bescheinigung für ein
              dokumentarisches Dossier, mit deklarierter Methode und sichtbaren
              Grenzen.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/de/erstellen/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
            >
              CO₂e-Bescheinigung erstellen — 89 €
            </Link>
            <Link
              href="/api/sample"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
            >
              Kostenloses Beispiel herunterladen
            </Link>
            <Link
              href="/de/pruefen/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
            >
              Bescheinigung prüfen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
