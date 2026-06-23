// PATH: src/app/de/versicherung-esg-unterlagen-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.certif-scope.com/de/versicherung-esg-unterlagen-kmu/";

export const metadata: Metadata = {
  title:
    "CO2e-Bescheinigung für Versicherung und ESG-Unterlagen KMU | Certif-Scope",
  description:
    "Auf eine CO2-, ESG- oder Umweltanfrage eines Versicherers, Maklers oder Risiko-Fragebogens mit einer indikativen CO2e-Bescheinigung für KMU antworten.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title:
      "CO2e-Bescheinigung für Versicherung und ESG-Unterlagen KMU",
    description:
      "Einordnen, wann ein indikatives CO2e-Dokument in einem Versicherungs- oder ESG-Fragebogen helfen kann, ohne eine Prämienentscheidung oder Annahme zu versprechen.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

const concerns = [
  {
    title: "Versicherungsfragebogen",
    text: "Ein Versicherer kann Umweltinformationen in einem Unternehmensfragebogen oder einer Risikoprüfung anfordern.",
  },
  {
    title: "Vertragsverlängerung",
    text: "Eine CO2e-Information kann bei einer Verlängerung, einer Dossieraktualisierung oder einem Austausch mit einem Makler angefragt werden.",
  },
  {
    title: "Nichtfinanzielle Einordnung",
    text: "Einige Risiko- oder Versicherungsplattformen sammeln ESG-Elemente, um Unternehmensdossiers besser zu dokumentieren.",
  },
  {
    title: "RSE-/ESG-Anfrage eines Maklers oder Versicherers",
    text: "Wenn die Anfrage einfach bleibt und keine verpflichtende Methode vorgibt, kann ein indikatives PDF die Antwort strukturieren.",
  },
];

const provides = [
  "Standardisiertes PDF",
  "Aggregiertes CO2e-Ergebnis",
  "Erklärte Methode",
  "Sichtbare Grenzen",
  "Ausstellungsdatum",
  "Prüfkennung",
  "Einfach weiterleitbares Dokument",
  "Festpreis 89 EUR, ohne Abonnement",
];

const notAdapted = [
  "Der Versicherer verlangt eine umfassende CO2-Prüfung.",
  "Eine detaillierte Aufschlüsselung nach Scope 1, 2 und 3 wird angefragt.",
  "Eine umfassende GHG-Protocol-Methode wird vorgegeben.",
  "Eine ISO-Norm oder externe Prüfung ist ausdrücklich erforderlich.",
  "Das Dossier betrifft CSRD- oder ESRS-Reporting.",
  "Der Vertrag schreibt ein bestimmtes Formular oder eine versicherungsspezifische Methode vor.",
];

const faq = [
  {
    q: "Kann ein Versicherer eine CO2-Information anfordern?",
    a: "Ja. Ein Versicherer, Makler oder eine Risikoplattform kann eine CO2- oder ESG-Information in einem Unternehmensdossier anfragen.",
  },
  {
    q: "Kann das Dokument in einem ESG-Fragebogen helfen?",
    a: "Ja, wenn der Fragebogen eine einfache dokumentarische Information verlangt und keine verpflichtende Methode vorgibt. Die Bescheinigung bleibt indikativ und begrenzt.",
  },
  {
    q: "Ist das ein regulatorischer Nachweis?",
    a: "Nein. Die Certif-Scope-Bescheinigung ist indikativ, nicht extern geprüft, nicht regulatorisch und nicht mit CSRD-/ESRS-Reporting oder einer umfassenden Treibhausgasinventur gleichzusetzen.",
  },
  {
    q: "Was tun, wenn der Versicherer eine Prüfung verlangt?",
    a: "Wenn eine Prüfung, ein Standard, eine genaue Methode oder eine externe Kontrolle verlangt wird, sollte diese Vorgabe befolgt werden, statt allein eine indikative Bescheinigung zu nutzen.",
  },
  {
    q: "Ist das PDF prüfbar?",
    a: "Das PDF kann eine Prüfkennung und dokumentarische Kontrollelemente enthalten. Das ersetzt keine versicherungstechnische Validierung und keine vertragliche Entscheidung.",
  },
];

const relatedLinks = [
  {
    href: "/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/",
    title: "Banken und Versicherungen",
    text: "Verstehen, warum Finanzakteure CO2-Angaben anfragen können.",
  },
  {
    href: "/de/bank-esg-unterlagen-kmu/",
    title: "Bankunterlagen KMU",
    text: "Einordnen, was geliefert werden kann, wenn eine Bank ein CO2-Element anfragt.",
  },
  {
    href: "/de/pruefen/demo/",
    title: "Prüf-Demo",
    text: "Einem Empfänger zeigen, welche Elemente er kontrollieren kann.",
  },
];

const requiredReminder =
  "Die Certif-Scope-Bescheinigung ist indikativ, nicht extern geprüft, nicht regulatorisch, kein CSRD-/ESRS-Reporting und ersetzt keine umfassende CO2-Bilanz, keine Treibhausgasinventur und keine externe Prüfung.";

const standardLimits = [
  "Sie hängt von den Angaben ab, die der Nutzer bereitstellt.",
  "Sie eignet sich für einfache dokumentarische Anfragen.",
  "Sie stellt keine Annahme durch Kunden, Banken, Versicherer, Käufer oder Plattformen sicher.",
  "Wenn eine verpflichtende Methode vorgegeben ist, muss das Unternehmen dieser Methode folgen.",
];

function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href="/de/erstellen/"
        className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1FB6C1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1FB6C1]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
      >
        Bescheinigung erstellen - 89 EUR
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

export default function VersicherungESGUnterlagenKMUPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2e-Bescheinigung für Versicherung und ESG-Unterlagen KMU",
    url: pageUrl,
    description:
      "Auf eine CO2-, ESG- oder Umweltanfrage eines Versicherers, Maklers oder Risiko-Fragebogens mit einer indikativen CO2e-Bescheinigung für KMU antworten.",
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
        name: "CO2e-Bescheinigung Versicherung KMU",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO2e-Bescheinigung für Versicherung und KMU",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative spend-based CO2e-Bescheinigung",
    description:
      "Erstellung einer indikativen CO2e-Bescheinigung, um auf eine CO2-, ESG- oder Umweltanfrage eines Versicherers, Maklers oder Risiko-Fragebogens zu antworten.",
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
                Versicherung - ESG - KMU
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                CO2e-Bescheinigung für Versicherung und ESG-Unterlagen KMU
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0B3A63]/80">
                Ein KMU kann eine CO2- oder Umweltanfrage von einem Versicherer,
                einem Makler, einer Risikoplattform oder einem ESG-Fragebogen
                erhalten.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B3A63]/70">
                Certif-Scope kann eine einfache dokumentarische Antwort liefern,
                wenn die Anfrage keine externe Prüfung verlangt. Das Dokument
                verspricht keine Prämienänderung, keine Annahme und keine
                vertragliche Entscheidung.
              </p>
              <div className="mt-8">
                <PrimaryCtas />
              </div>
            </header>

            <aside className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-[#0B3A63]">
                Certif-Scope-Dokument
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["Festpreis 89 EUR", "Prüfbares PDF", "Ohne Abonnement"].map(
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
              Konkrete Situationen, in denen eine einfache CO2-Antwort hilfreich ist
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

      <section className="bg-[#0B3A63] py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Was Certif-Scope liefern kann
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Ein standardisiertes PDF für eine einfache dokumentarische Anfrage
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Das Dokument dient dazu, eine eingeordnete CO2-Information zu
              übermitteln, ohne sich als Prüfung oder Pflichtreporting darzustellen.
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
              Fälle, in denen eine umfassendere Vorgehensweise nötig ist
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0B3A63]/75">
              Certif-Scope ist hilfreich, wenn die Anfrage dokumentarisch bleibt.
              Sobald ein verpflichtender Rahmen vorgegeben ist, hat dieser Rahmen
              Vorrang.
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
                Formulierungsbeispiel
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                Kurzer Begleittext zum Dokument
              </h2>
              <blockquote className="mt-5 rounded-lg border-l-4 border-[#1FB6C1] bg-[#F8FAFC] p-5 text-base leading-relaxed text-[#0B3A63]/80">
                "Anbei finden Sie eine indikative CO2e-Bescheinigung, erstellt
                nach einer spend-based Methode, mit aggregiertem Ergebnis,
                sichtbaren Grenzen und Prüfkennung."
              </blockquote>
            </article>

            <article className="rounded-lg border border-[#0B3A63]/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
                Pflichtiger Hinweis
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                Grenzen vor der Übermittlung kennen
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
            Seiten, die Sie danach lesen können
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-[#0B3A63]/10 bg-white p-5 transition hover:border-[#1FB6C1]"
              >
                <h3 className="font-extrabold text-[#0B3A63]">
                  {link.title}
                </h3>
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
              Prüfbares PDF - Festpreis - ohne Abonnement
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Eine einfache CO2-Antwort vorbereiten
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
              Erstellen Sie eine indikative CO2e-Bescheinigung für ein
              dokumentarisches Dossier, mit erklärter Methode und sichtbaren
              Grenzen.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/de/erstellen/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
            >
              Bescheinigung erstellen - 89 EUR
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
