// PATH: src/app/de/co2-dokument-lieferanten/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/de/co2-dokument-lieferanten/";

export const metadata: Metadata = {
  title:
    "CO2-Dokument Lieferanten: einfache CO₂e-Bescheinigung bereitstellen",
  description:
    "KMU-Lieferanten: Auf Kundenanfragen, Einkaufsplattformen oder Lieferantenfragebögen mit einer indikativen, einfachen und prüfbaren CO₂e-Bescheinigung antworten.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title:
      "CO2-Dokument Lieferanten: einfache CO₂e-Bescheinigung bereitstellen",
    description:
      "Auf eine Carbon-Anfrage im Lieferantendossier mit einem indikativen, datierten, übermittelbaren und vorsichtig eingeordneten CO₂e-PDF reagieren.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

const requiredReminder =
  "Die Certif-Scope-Bescheinigung ist indikativ, nicht extern geprüft, nicht regulatorisch, keine CSRD-/ESRS-Berichterstattung und ersetzt keine detaillierte Treibhausgasinventur oder externe Prüfung.";

const standardLimits = [
  "Sie hängt von den Angaben ab, die der Nutzer eingibt.",
  "Sie eignet sich für einfache dokumentarische Anfragen.",
  "Sie sagt keine Annahme durch Kunde, Bank, Versicherer, Einkäufer oder Plattform zu.",
  "Wenn eine verbindliche Methode vorgegeben ist, muss das Unternehmen dieser Methode folgen.",
];

const concerns = [
  {
    title: "Lieferantenfreigabe",
    text: "Ein Kunde kann ein Carbon-Dokument verlangen, bevor ein Lieferantenkonto oder eine Geschäftsbeziehung freigegeben wird.",
  },
  {
    title: "Kundendossier",
    text: "Ein KMU-Lieferant muss eine CO₂e-Unterlage in ein Dossier oder eine kommerzielle Antwort einfügen.",
  },
  {
    title: "Einkaufsplattform",
    text: "Ein Lieferantenportal kann ein Carbon-, RSE- oder ESG-Feld enthalten, das mit einem PDF ergänzt werden soll.",
  },
  {
    title: "Einfache CO₂e-Anfrage",
    text: "Wenn keine verpflichtende Methode vorgegeben ist, kann eine indikative Bescheinigung eine praktische Antwort sein.",
  },
];

const provides = [
  "Standardisiertes PDF",
  "Aggregiertes CO₂e-Ergebnis",
  "Deklarierte Methode",
  "Sichtbare Grenzen",
  "Ausstellungsdatum",
  "Prüf- oder Dokumentenkennung",
  "Dokument, das leicht an einen Kunden übermittelt werden kann",
  "Festpreis 89 EUR, ohne Abo",
];

const notAdapted = [
  "Der Kunde verlangt eine umfassende externe Prüfung.",
  "Eine detaillierte Aufschlüsselung nach Scope 1, 2 und 3 wird gefordert.",
  "Eine detaillierte GHG-Protocol-Vorgehensweise ist vorgeschrieben.",
  "Eine ISO-Norm oder eine externe Verifizierung ist verpflichtend.",
  "Das Dossier verlangt CSRD- oder ESRS-Berichterstattung.",
  "Die Plattform schreibt eine eigene Berechnung oder ein nicht kompatibles Format vor.",
];

const faq = [
  {
    q: "Was kann man bereitstellen, wenn ein Kunde ein Carbon-Dokument verlangt?",
    a: "Zuerst sollte das erwartete Niveau geprüft werden. Wenn die Anfrage einfach bleibt, kann ein indikatives CO₂e-PDF mit aggregiertem Ergebnis, Methode, Datum und Grenzen eine klare dokumentarische Antwort sein.",
  },
  {
    q: "Passt Certif-Scope für eine Lieferantenplattform?",
    a: "Ja, für eine einfache dokumentarische Anfrage ohne Pflichtmethode. Das PDF kann übermittelt oder hochgeladen werden, sagt aber keine Annahme durch die Plattform zu.",
  },
  {
    q: "Was ist der Unterschied zu einer detaillierten CO2-Bilanz?",
    a: "Eine detaillierte CO2-Bilanz ist tiefer und kann vorgegebene Anforderungen abdecken. Certif-Scope liefert eine indikative, nicht extern geprüfte und nicht regulatorische CO₂e-Bescheinigung.",
  },
  {
    q: "Ist das Dokument prüfbar?",
    a: "Das Dokument kann eine Prüfkennung und Kontrollinformationen enthalten. Das bleibt eine dokumentarische Prüfung, keine externe Validierung.",
  },
  {
    q: "Was tun, wenn der Kunde seine eigene Methode vorgibt?",
    a: "Wenn eine Kundenmethode, eine Norm oder eine externe Verifizierung vorgegeben ist, muss das Unternehmen diese Anforderung befolgen, statt den Rahmen durch eine indikative Bescheinigung zu ersetzen.",
  },
];

const relatedLinks = [
  {
    href: "/de/co2-nachweis-lieferanten/",
    title: "CO2-Nachweis Lieferanten",
    text: "Den umfassenderen Guide zu Lieferantenanfragen lesen.",
  },
  {
    href: "/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/",
    title: "Warum Kunden danach fragen",
    text: "Verstehen, woher Carbon-Anfragen im Einkauf entstehen.",
  },
  {
    href: "/de/pruefen/demo/",
    title: "Prüfdemo ansehen",
    text: "Sehen, was ein Empfänger an einem Dokument kontrollieren kann.",
  },
];

function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href="/de/erstellen/"
        className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1FB6C1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1FB6C1]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
      >
        CO₂e-Bescheinigung erstellen - 89 EUR
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

export default function CO2DokumentLieferantenPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Dokument Lieferanten: einfache CO₂e-Bescheinigung bereitstellen",
    url: pageUrl,
    description:
      "Praktische Einordnung für KMU-Lieferanten, die auf eine Kunden-, Einkaufsplattform- oder Lieferantenfragebogen-Anfrage ein einfaches CO₂e-Dokument bereitstellen müssen.",
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
        name: "CO2-Dokument Lieferanten",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung für Lieferanten",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative CO₂e-Bescheinigung spend-based",
    description:
      "Erstellung eines einfachen, standardisierten und prüfbaren Carbon-Dokuments für Kundenanfragen, Einkaufsplattformen und Lieferantenfragebögen.",
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
                Lieferanten · Einkauf · CO₂e-Dokument
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                CO2-Dokument Lieferanten: einfache und prüfbare CO₂e-Bescheinigung bereitstellen
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0B3A63]/80">
                Wenn ein Kunde, Auftraggeber oder eine Einkaufsplattform ein Carbon-Dokument verlangt, braucht ein KMU-Lieferant häufig eine schnelle, klare und übermittelbare Antwort.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B3A63]/70">
                Diese Seite ist praktisch ausgerichtet: was beilegen, wie das Dokument formulieren und wann Certif-Scope passt, ohne eine detaillierte Lieferanten-CO2-Bilanz zu duplizieren.
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
                {["Festpreis 89 EUR", "Prüfbares PDF", "Ohne Abo"].map(
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
              Konkrete Situationen, in denen eine einfache Carbon-Antwort hilft
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
              Ein standardisiertes PDF für eine einfache Dokumentenanfrage
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Das Dokument dient dazu, eine eingeordnete Carbon-Information zu
              übermitteln, ohne sich als externe Prüfung oder als verpflichtendes
              Reporting darzustellen.
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
              Certif-Scope ist nützlich, wenn die Anfrage dokumentarisch bleibt.
              Sobald ein verbindlicher Rahmen vorgegeben ist, hat dieser Rahmen
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
                Beispiel-Formulierung
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                Kurze Nachricht zum Dokument
              </h2>
              <blockquote className="mt-5 rounded-lg border-l-4 border-[#1FB6C1] bg-[#F8FAFC] p-5 text-base leading-relaxed text-[#0B3A63]/80">
                "Anbei finden Sie eine indikative CO₂e-Bescheinigung nach einer spend-based Methode, mit aggregiertem Ergebnis, sichtbaren Grenzen und Prüfkennung."
              </blockquote>
            </article>

            <article className="rounded-lg border border-[#0B3A63]/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
                Pflicht-Hinweis
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

      {relatedLinks.length > 0 && (
        <section className="bg-[#F8FAFC] py-14 md:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0B3A63]">
              Nützliche Seiten zum Weiterlesen
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
      )}

      <section className="bg-[#0B3A63] py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Prüfbares PDF · Festpreis · ohne Abo
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Eine einfache Carbon-Antwort vorbereiten
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
