// PATH: src/app/de/co2-bescheinigung-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "CO2-Bescheinigung KMU für 89 €: prüfbares PDF | Certif-Scope",
  description:
    "Erstellen Sie eine indikative CO2-Bescheinigung für KMU für 89 €, ohne Abo. Prüffähiges PDF für Kunden, Lieferanten, Banken, Versicherer oder Ausschreibungen. Keine externe Prüfung, keine CSRD.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bescheinigung-kmu/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-bescheinigung-kmu/",
    },
  },
  openGraph: {
    title: "CO2-Bescheinigung KMU für 89 €: prüfbares PDF",
    description:
      "Ein indikatives, klares und prüffähiges CO₂e-Dokument, um schnell auf Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen zu reagieren.",
    url: "https://www.certif-scope.com/de/co2-bescheinigung-kmu/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const directBenefits = [
  {
    title: "Festpreis 89 €",
    text: "Ein einfacher Preis ohne Abo, um eine indikative CO2-Bescheinigung für KMU für ein professionelles Dossier zu erstellen.",
  },
  {
    title: "Prüffähiges PDF",
    text: "Ein klares, datiertes und archivierbares Dokument, das an Kunden, Banken, Versicherer oder Einkaufsteams übermittelt werden kann.",
  },
  {
    title: "Ohne umfassende Prüfung",
    text: "Für einfache dokumentarische Anfragen, wenn keine externe Prüfung und keine umfassende Treibhausgasinventur verlangt werden.",
  },
];

const useCases = [
  "Ein Kunde fragt vor der Aufnahme als Lieferant nach einem einfachen CO₂e-Dokument.",
  "Ein Auftraggeber oder Einkaufsteam verlangt eine CO₂e-Information.",
  "Eine Bank fragt ein Umweltelement in einem Unternehmensdossier an.",
  "Ein Versicherer bittet um eine CO₂e- oder ESG-Information.",
  "Eine Ausschreibung verlangt ein CO₂e-Dokument, ohne einen umfassenden Standard vorzugeben.",
  "Eine Einkaufsplattform fordert eine CO₂e-Unterlage zum Hochladen an.",
];

const includedItems = [
  "Indikative CO₂e-Bescheinigung als PDF",
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Abgedecktes Jahr oder abgedeckter Zeitraum",
  "Deklarierte spend-based Methode",
  "Sichtbare methodische Grenzen",
  "Ausstellungsdatum",
  "Kennung oder Prüflogik",
  "Hinweis: keine externe Prüfung / keine umfassende Treibhausgasinventur",
];

const decisionRows = [
  {
    demand: "Der Dritte verlangt eine einfache CO₂e-Bescheinigung",
    answer:
      "Certif-Scope passt, wenn die Anfrage dokumentarisch ist und kein umfassender Standard vorgegeben wird.",
  },
  {
    demand: "Das Dossier verlangt eine umfassende oder extern geprüfte CO2-Bilanz",
    answer:
      "Dann muss diese Anforderung eingehalten werden. Certif-Scope ersetzt keine externe Prüfung.",
  },
  {
    demand: "Sie müssen schnell auf einen Kunden oder eine Ausschreibung reagieren",
    answer:
      "Eine indikative Bescheinigung kann helfen, ein leeres Dossier oder eine zu unklare Antwort zu vermeiden.",
  },
  {
    demand: "Sie wollen Ihre Klimastrategie vertieft steuern",
    answer:
      "Eine umfassende Treibhausgasinventur oder spezialisierte Begleitung kann dafür passender sein.",
  },
];

const comparisons = [
  {
    label: "Certif-Scope",
    scope: "Indikative CO₂e-Bescheinigung",
    bestFor:
      "Einfache Anfrage von Kunden, Lieferanten, Banken, Versicherern oder Ausschreibungen.",
    limit: "Ersetzt keine externe Prüfung und keine umfassende Treibhausgasinventur.",
  },
  {
    label: "Umfassende CO2-Bilanz",
    scope: "Detaillierte Inventur",
    bestFor:
      "Interne Steuerung, Klimastrategie oder formale Anforderung mit hohem Detailniveau.",
    limit:
      "Länger, teurer und für eine einfache dokumentarische Unterlage oft unverhältnismäßig.",
  },
  {
    label: "Externe Prüfung",
    scope: "Kontrolle oder unabhängige Assurance",
    bestFor:
      "Dossier mit vorgegebener Norm, externer Kontrolle oder unabhängiger Assurance.",
    limit:
      "Nicht erforderlich, wenn nur eine einfache indikative Bescheinigung verlangt wird.",
  },
];

const processSteps = [
  {
    title: "Anfrage prüfen",
    text: "Lesen Sie, ob das Dossier eine Bescheinigung, einen CO₂e-Indikator, eine umfassende CO2-Bilanz oder eine externe Prüfung verlangt.",
  },
  {
    title: "Passendes Niveau wählen",
    text: "Wenn der Bedarf dokumentarisch ist und kein Standard vorgegeben wird, kann eine indikative CO₂e-Bescheinigung ausreichen.",
  },
  {
    title: "PDF erstellen",
    text: "Erstellen Sie ein klares, datiertes Dokument mit Ergebnis, Methode, Grenzen und Informationen zur Prüfung.",
  },
];

const mistakes = [
  {
    title: "Die Bescheinigung als externe Prüfung darstellen",
    text: "Das Dokument muss klar als indikativ, nicht regulatorisch und nicht als umfassende Treibhausgasinventur beschrieben werden.",
  },
  {
    title: "Eine Datei ohne Methode senden",
    text: "Ein nützliches CO₂e-Dokument sollte erklären, wie das Ergebnis geschätzt wurde und welche Grenzen gelten.",
  },
  {
    title: "Für eine einfache Anfrage eine zu schwere Lösung wählen",
    text: "Wenn ein Dritter nur eine dokumentarische Unterlage verlangt, kann ein leichteres Format angemessen sein.",
  },
  {
    title: "Zu spät reagieren",
    text: "CO₂e-Anfragen kommen häufig mitten im Dossier. Ein einfaches Dokument kann einen administrativen Engpass reduzieren.",
  },
];

const relatedPages = [
  {
    title: "Bescheinigung erstellen",
    text: "Direkt zum deutschen Certif-Scope-Erstellungsfluss.",
    href: "/de/erstellen/",
  },
  {
    title: "Certif-Scope Preise",
    text: "Das Angebot für 89 € ohne Abo ansehen.",
    href: "/de/preise/",
  },
  {
    title: "Demo der Dokumentenprüfung",
    text: "Nachvollziehen, wie eine indikative CO₂e-Bescheinigung geprüft wird.",
    href: "/de/pruefen/demo/",
  },
];

const faq = [
  {
    q: "Was ist eine CO2-Bescheinigung für KMU?",
    a: "Es ist ein Dokument, das eine indikative CO₂e-Schätzung für ein KMU ausweist, mit aggregiertem Ergebnis, erklärter Methode, abgedecktem Jahr, Ausstellungsdatum, Grenzen und dokumentarischer Prüflogik.",
  },
  {
    q: "Was kostet die Certif-Scope-Bescheinigung?",
    a: "Die Certif-Scope-Bescheinigung kostet 89 €, ohne Abo. Der Preis bezieht sich auf ein indikatives CO₂e-Dokument, nicht auf eine umfassende Prüfung oder eine Beratungsmission.",
  },
  {
    q: "Wann nutzt ein KMU eine CO2-Bescheinigung?",
    a: "Sie kann genutzt werden, um auf eine Anfrage von Kunden, Lieferanten, Banken, Versicherern, Ausschreibungen oder Einkaufsplattformen zu reagieren, wenn der Bedarf dokumentarisch ist und kein umfassender Standard verlangt wird.",
  },
  {
    q: "Ersetzt die Bescheinigung eine umfassende CO2-Bilanz?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung, nicht regulatorisch und nicht gleichzusetzen mit einer umfassenden Treibhausgasinventur oder CSRD-/ESRS-Berichterstattung.",
  },
  {
    q: "Ist das Dokument prüffähig?",
    a: "Das Dokument ist so gestaltet, dass es archiviert und nach der Certif-Scope-Logik geprüft werden kann. Dritte sollen die Dokumentenintegrität und den Umfang der Bescheinigung nachvollziehen können.",
  },
];

export default function CO2BescheinigungKMUPageDE() {
  const pageUrl = "https://www.certif-scope.com/de/co2-bescheinigung-kmu/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bescheinigung KMU für 89 €: prüfbares PDF",
    url: pageUrl,
    description:
      "Kommerzielle Seite zur Erstellung einer indikativen CO₂e-Bescheinigung für KMU für 89 €, für Anfragen von Kunden, Lieferanten, Banken, Versicherern oder Ausschreibungen.",
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
        name: "CO2-Bescheinigung KMU",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CO2-Bescheinigung KMU",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative spend-based CO₂e-Bescheinigung",
    description:
      "Erstellung einer indikativen CO₂e-Bescheinigung für KMU als PDF, mit erklärter Methode, sichtbaren Grenzen und dokumentarischer Prüflogik.",
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

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              CO2-Bescheinigung • KMU • prüffähiges PDF • 89 €
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO2-Bescheinigung KMU für 89 € für einfache CO₂e-Anfragen
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Erstellen Sie ein indikatives, klares und übermittelbares
              CO₂e-Dokument, wenn Kunden, Lieferanten, Banken, Versicherer oder
              Ausschreibungen eine einfache CO₂e-Information anfragen.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Certif-Scope ersetzt keine umfassende externe Prüfung. Es dient
              einfachen dokumentarischen Anfragen, wenn ein Dritter ein lesbares,
              datiertes, archivierbares und prüffähiges PDF erwartet.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                CO₂e-Bescheinigung erstellen
              </Link>
              <Link
                href="/de/preise/"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-7 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Preis 89 € ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {directBenefits.map((item) => (
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
                Anwendungsfälle
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Wann nutzt ein KMU eine CO2-Bescheinigung?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Die Bescheinigung ist nützlich, wenn der Bedarf administrativ
                oder kommerziell ist: Der Dritte möchte eine lesbare
                CO₂e-Unterlage, nicht zwingend ein umfassendes Klimaprojekt.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Inhalt des PDF
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was die Bescheinigung enthält
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Das Dokument ist darauf ausgelegt, schnell verstanden zu werden:
                Ergebnis, Methode, Zeitraum, Grenzen und dokumentarische Prüfung.
              </p>
              <Link
                href="/de/pruefen/demo/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Beispiel eines Dokuments ansehen
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {includedItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#475569]"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Passendes Antwortniveau
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Wann die Bescheinigung genügt und wann nicht
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Der Wert des Dokuments liegt in seinem klaren Rahmen. Es soll auf
              einfache Anfragen antworten, ohne ein höheres Nachweisniveau zu
              behaupten.
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
                  Antwort
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
                    Antwort
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Vergleich
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              CO₂e-Bescheinigung, umfassende CO2-Bilanz oder externe Prüfung:
              nicht verwechseln
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope adressiert einen klaren Bedarf: ein indikatives
              Dokument für eine einfache professionelle Anfrage erstellen.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {comparisons.map((row) => (
              <article
                key={row.label}
                className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {row.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  <strong className="text-[#0B3A63]">Umfang:</strong> {row.scope}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  <strong className="text-[#0B3A63]">Geeignet für:</strong>{" "}
                  {row.bestFor}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  <strong className="text-[#0B3A63]">Grenze:</strong> {row.limit}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="w-1/5 p-5 text-left font-semibold text-[#0B3A63]">
                    Option
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Umfang
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Geeignet für
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Grenze
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/8">
                {comparisons.map((row) => (
                  <tr key={row.label}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.label}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.scope}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.bestFor}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.limit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Einfacher Ablauf
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Wie nutzt man sie richtig?
                </h2>
              </div>

              <div className="grid gap-5">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Schritt {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Zu vermeiden
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Fehler vermeiden mit einer CO₂e-Bescheinigung
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Die Seite darf klar verkaufen, aber das Dokument muss in seinem
                Umfang vorsichtig und genau bleiben.
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
                  Festpreis • prüffähiges PDF • ohne Abo
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Bereit, Ihre CO₂e-Bescheinigung zu erstellen?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Erstellen Sie eine indikative CO₂e-Bescheinigung für 89 €,
                  mit erklärter Methode, sichtbaren Grenzen und übermittelbarem
                  PDF-Format.
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
                  Preis 89 € ansehen
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis
            von Ausgaben. Das Dokument ist keine externe Prüfung, keine
            umfassende Treibhausgasinventur und keine CSRD-/ESRS-Berichterstattung.
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
              Je nach Bedarf weitergehen
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
              Häufige Fragen zur CO₂e-Bescheinigung für KMU
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
