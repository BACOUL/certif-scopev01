// PATH: src/app/de/bank-esg-unterlagen-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/de/bank-esg-unterlagen-kmu/";

export const metadata: Metadata = {
  title:
    "Bank ESG Unterlagen KMU: welches CO2-Dokument bereitstellen? | Certif-Scope",
  description:
    "KMU: Auf eine CO2-, ESG- oder Umweltanfrage im Bankdossier mit einer indikativen, datierten und prüfbaren CO₂e-Bescheinigung antworten. Keine Finanzierungsgarantie, keine externe Prüfung.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title:
      "Bank ESG Unterlagen KMU: welches CO2-Dokument bereitstellen?",
    description:
      "Einordnung, wann eine indikative CO₂e-Bescheinigung bei Bank- oder Finanzierungsgesprächen dokumentarisch helfen kann, ohne eine Finanzierung oder Bankannahme zu versprechen.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const requiredReminder =
  "Die Certif-Scope-Bescheinigung ist indikativ, nicht extern geprüft, nicht regulatorisch, keine CSRD-/ESRS-Berichterstattung und ersetzt keine vollständige Treibhausgasinventur oder externe Prüfung.";

const standardLimits = [
  "Sie hängt von den Angaben ab, die der Nutzer eingibt.",
  "Sie eignet sich für einfache dokumentarische Anfragen.",
  "Sie sagt keine Annahme durch Bank, Versicherer, Kunde, Käufer oder Plattform zu.",
  "Wenn eine Pflichtmethode vorgegeben ist, muss das Unternehmen dieser Methode folgen.",
];

const concerns = [
  {
    title: "ESG-Anfrage in einem Bankdossier",
    text: "Ein Berater, eine Firmenkundenbetreuung oder eine Risikostelle kann ein Umweltelement anfragen, um ein Unternehmensdossier zu ergänzen.",
  },
  {
    title: "Unternehmensfinanzierung",
    text: "Eine Bank kann eine CO₂e-Information archivieren wollen, etwa im Rahmen einer Kredit-, Investitions- oder Entwicklungsanfrage.",
  },
  {
    title: "Jahresgespräch oder Dossierprüfung",
    text: "Bei einem jährlichen Gespräch, einer Verlängerung oder einer Dossierprüfung kann eine einfache Carbon- oder ESG-Unterlage angefragt werden.",
  },
  {
    title: "Einfacher Bank-ESG-Fragebogen",
    text: "Wenn der Fragebogen keine verbindliche Methode nennt, kann ein indikatives Dokument eine strukturierte Antwort liefern.",
  },
];

const provides = [
  "Standardisiertes, übermittelbares PDF",
  "Aggregiertes CO₂e-Ergebnis",
  "Deklarierte Methode",
  "Sichtbare Grenzen",
  "Ausstellungsdatum",
  "Prüf- oder Dokumentenkennung",
  "Leicht an ein Bankdossier anhängbar",
  "Festpreis 89 €, ohne Abo",
];

const notAdapted = [
  "Eine vollständige externe Prüfung wird ausdrücklich verlangt.",
  "Eine detaillierte Aufschlüsselung nach Scope 1, Scope 2 und Scope 3 ist gefordert.",
  "Die Bank schreibt eine vollständige GHG-Protocol-Methode vor.",
  "Eine ISO-Norm oder eine externe Verifizierung ist verpflichtend.",
  "Das Dossier verlangt eine CSRD- oder ESRS-Berichterstattung.",
  "Die Anfrage bindet das Dossier an ein proprietäres Bankformat.",
];

const faq = [
  {
    q: "Kann eine Bank ein CO2-Dokument von einem KMU anfragen?",
    a: "Ja. Eine Bank kann in einem Unternehmensdossier eine CO₂e- oder ESG-Information anfragen, häufig zur internen Einordnung. Das bedeutet nicht automatisch, dass eine vollständige externe Prüfung oder ein detailliertes Treibhausgasinventar gefordert ist.",
  },
  {
    q: "Ersetzt Certif-Scope eine detaillierte Carbon-Auswertung?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung, nicht extern geprüft, nicht regulatorisch, nicht CSRD-/ESRS-Berichterstattung und nicht gleichzusetzen mit einer vollständigen Treibhausgasinventur.",
  },
  {
    q: "Wird das Dokument automatisch von einer Bank akzeptiert?",
    a: "Nein. Das Dokument kann helfen, auf eine einfache dokumentarische Anfrage zu antworten. Es sagt keine Annahme durch die Bank, keine Finanzierung, keinen Zinssatz und keinen Bankvorteil zu.",
  },
  {
    q: "Was enthält das PDF?",
    a: "Das PDF enthält insbesondere ein aggregiertes CO₂e-Ergebnis, eine deklarierte Methode, ein Ausstellungsdatum, sichtbare Grenzen und eine Prüf- oder Dokumentenkennung.",
  },
  {
    q: "Was tun, wenn die Bank eine genaue Methode vorgibt?",
    a: "Wenn eine verpflichtende Methode, eine Norm, eine externe Prüfung oder ein bestimmtes Bankformat vorgegeben ist, muss das Unternehmen diese Anforderung befolgen, statt nur eine indikative Bescheinigung zu verwenden.",
  },
];

const relatedLinks = [
  {
    href: "/de/grenzen-und-compliance/",
    title: "Grenzen und Compliance-Einordnung",
    text: "Verstehen, was Certif-Scope leisten kann und was nicht.",
  },
  {
    href: "/de/methodik/",
    title: "Spend-based Methodik",
    text: "Verstehen, wie die indikative CO₂e-Schätzung eingeordnet wird.",
  },
  {
    href: "/de/pruefen/demo/",
    title: "Dokumentenprüfung ansehen",
    text: "Nachvollziehen, was ein Empfänger an einer Bescheinigung prüfen kann.",
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

export default function BankESGUnterlagenKMUPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bank ESG Unterlagen KMU: welches CO2-Dokument bereitstellen?",
    url: pageUrl,
    description:
      "Einordnung für KMU, die bei einer Bank-, Finanzierungs- oder ESG-Anfrage ein einfaches CO₂e-Dokument bereitstellen müssen.",
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
        name: "Bank ESG Unterlagen KMU",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung für Bank-ESG-Unterlagen von KMU",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative spend-based CO₂e-Bescheinigung",
    description:
      "Erstellung einer indikativen CO₂e-Bescheinigung, um auf eine einfache dokumentarische Carbon-, ESG- oder Umweltanfrage im Bankdossier eines KMU zu antworten.",
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
                Bank · KMU · CO₂e-Dokument
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                Bank ESG Unterlagen KMU: welches CO2-Dokument bereitstellen?
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0B3A63]/80">
                Eine Bank, eine Firmenkundenbetreuung, ein Finanzierer oder ein
                Partner kann bei einem KMU ein Carbon-, ESG- oder Umweltelement
                anfragen.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B3A63]/70">
                Certif-Scope kann helfen, wenn es um eine einfache dokumentarische
                Antwort geht. Das Dokument schafft keinen Anspruch auf einen Kredit,
                keinen besonderen Zinssatz und keine Bankannahme.
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
                {["Festpreis 89 €", "Prüfbares PDF", "Ohne Abo"].map((badge) => (
                  <div
                    key={badge}
                    className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-bold text-[#0B3A63]"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1FB6C1]" />
                    {badge}
                  </div>
                ))}
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
              Konkrete Situationen, in denen eine einfache CO₂e-Antwort helfen kann
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
              Was Certif-Scope bereitstellen kann
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Ein standardisiertes PDF für einfache Bank- oder ESG-Anfragen
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Das Dokument dient dazu, eine eingeordnete Carbon-Information zu
              übermitteln, ohne sich als externe Prüfung, ESG-Prüfung oder
              regulatorische Berichterstattung darzustellen.
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
              Fälle, in denen ein vollständigerer Ansatz nötig ist
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
                Kurzer Hinweis für das Bankdossier
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
              Eine einfache CO₂e-Antwort für ein Bankdossier vorbereiten
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
              Erstellen Sie eine indikative CO₂e-Bescheinigung für eine einfache
              dokumentarische Anfrage, mit deklarierter Methode und sichtbaren
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
