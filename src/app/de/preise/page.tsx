// PATH: src/app/de/preise/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO2-Bescheinigung Preis: 89€ ohne Abo | Certif-Scope Deutschland",
  description:
    "Erstellen Sie eine indikative CO₂e-Bescheinigung für 89€, ohne Abo. Überprüfbares PDF für Lieferanten-, Bank-, Versicherungs- und Ausschreibungsanfragen. Keine regulatorische CSRD-/ESRS-Berichterstattung.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/preise/",
    languages: {
      de: "https://www.certif-scope.com/de/preise/",
    },
  },
  openGraph: {
    type: "website",
    title: "CO2-Bescheinigung Preis: 89€ ohne Abo | Certif-Scope Deutschland",
    description:
      "Indikative CO₂e-Bescheinigung für 89€, ohne Abo. Standardisiertes, datiertes, archivierbares und überprüfbares PDF für einfache dokumentarische Anfragen.",
    url: "https://www.certif-scope.com/de/preise/",
    siteName: "Certif-Scope",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const includedItems = [
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Abgedecktes Jahr und Ausstellungsdatum",
  "Spend-based Methode kurz erläutert",
  "Methodische Grenzen sichtbar",
  "Standardisiertes und archivierbares PDF",
  "Eindeutige Dokument-ID zur Kontrolle",
  "Dokumentarisch überprüfbares PDF",
  "Dokumentarische Gültigkeit von einem Jahr",
];

const fitItems = [
  {
    title: "Lieferanten- oder Kundenanfrage",
    text: "Ein Unternehmen fragt eine einfache CO₂e-Information, einen CO₂e-Beleg oder ein ESG-Dokument für ein Dossier an.",
  },
  {
    title: "Bank, Versicherung oder ESG-Screening",
    text: "Sie müssen eine indikative CO₂e-Antwort liefern, ohne ein langes oder kostenintensives Beratungsprojekt zu starten.",
  },
  {
    title: "Ausschreibung ohne umfassende regulatorische Anforderung",
    text: "Die Unterlagen verlangen eine CO₂e-Angabe, schreiben aber keine externe fachliche Prüfung und kein vollständiges Treibhausgasinventar vor.",
  },
];

const limitItems = [
  "Ersetzt kein vollständiges Treibhausgasinventar.",
  "Ist keine regulatorische CSRD-/ESRS-Berichterstattung.",
  "Deckt kein detailliertes Scope-1-, Scope-2- und Scope-3-Inventar ab.",
  "Ist keine externe fachliche Prüfung und keine behördliche Validierung.",
];

const packs = [
  {
    name: "Paket mit 5",
    price: "349€",
    unit: "69€ pro Bescheinigung",
    text: "Für mehrere Lieferantendossiers oder mehrere Kundenanfragen im Jahr.",
    href: "/api/checkout-pack?pack=5",
  },
  {
    name: "Paket mit 10",
    price: "590€",
    unit: "59€ pro Bescheinigung",
    text: "Für regelmäßige Nutzung in Vertriebsantworten, Einkaufsvorgängen oder Ausschreibungen.",
    href: "/api/checkout-pack?pack=10",
  },
  {
    name: "Paket mit 50",
    price: "2 450€",
    unit: "49€ pro Bescheinigung",
    text: "Für Netzwerke, Plattformen oder Organisationen mit größerem Lieferantenvolumen.",
    href: "/api/checkout-pack?pack=50",
  },
];

const faqs = [
  {
    question: "Warum kostet die Bescheinigung 89€?",
    answer:
      "Das Produkt ist standardisiert: Es erzeugt ein indikatives, datiertes, archivierbares und überprüfbares CO₂e-Dokument, ohne Beratungsmission, ohne Vor-Ort-Erhebung und ohne vollständige fachliche Prüfung.",
  },
  {
    question: "Ist das eine regulatorische CO₂-Bilanz?",
    answer:
      "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf spend-based Grundlage. Das Dokument ersetzt kein vollständiges Treibhausgasinventar, keine detaillierte fachliche Prüfung und keine CSRD-/ESRS-Berichterstattung.",
  },
  {
    question: "Wann sollte diese Bescheinigung genutzt werden?",
    answer:
      "Sie ist geeignet, wenn ein Kunde, ein Einkaufsteam, eine Bank, ein Versicherer oder eine Ausschreibung eine CO₂e-Angabe oder einen einfachen CO₂e-Beleg erwartet, der zeitnah weitergegeben werden kann.",
  },
  {
    question: "Kann das Dokument in einer Ausschreibung verwendet werden?",
    answer:
      "Das hängt von den Ausschreibungsunterlagen ab. Wenn ein Screening-Dokument oder eine indikative CO₂e-Angabe gefragt ist, kann die Bescheinigung hilfreich sein. Wenn ein bestimmter Standard, eine externe Prüfung oder ein genauer Umfang vorgeschrieben ist, muss diese Anforderung eingehalten werden.",
  },
  {
    question: "Werden detaillierte Ausgabendaten gespeichert?",
    answer:
      "Nein. Certif-Scope ist datensparsam konzipiert. Detaillierte Ausgabendaten werden nicht als dauerhafte Finanzhistorie gespeichert. Das finale Dokument sollte vom Nutzer heruntergeladen und archiviert werden.",
  },
];

export default function PricingPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bescheinigung Preis: 89€ ohne Abo",
    url: "https://www.certif-scope.com/de/preise/",
    description:
      "Klarer Preis für eine indikative CO₂e-Bescheinigung für 89€, ohne Abo, standardisiert und überprüfbar.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    inLanguage: "de-DE",
  };

  const jsonLdOffer = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung Certif-Scope",
    serviceType: "Indikative CO₂e-Bescheinigung auf spend-based Grundlage",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/generate",
      description:
        "Indikative CO₂e-Bescheinigung, standardisiertes und überprüfbares PDF, ohne Abo.",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main-content" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOffer) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <section
        id="pricing"
        data-section="pricing"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Preis CO₂e-Bescheinigung für KMU
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0B3A63] md:text-5xl">
              Eine indikative CO₂e-Bescheinigung für 89€, ohne Abo
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope erstellt ein indikatives, standardisiertes und
              überprüfbares CO₂e-PDF, damit Sie schnell auf Lieferanten-,
              Bank-, Versicherungs- oder Ausschreibungsanfragen antworten
              können - ohne ein vollständiges Treibhausgasinventar zu starten.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/generate"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                CO₂e-Bescheinigung für 89€ erstellen
              </Link>

              <Link
                href="/de/#cas-adaptes"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Einsatz für KMU einordnen
              </Link>
            </div>
          </header>

          <section className="mt-16 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_70px_rgba(11,58,99,0.13)] md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.65),transparent)]" />
              <div className="absolute right-[-12%] top-[-18%] h-56 w-56 rounded-full bg-[#1FB6C1]/8 blur-3xl" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <div>
                  <p className="inline-flex rounded-full border border-[#1FB6C1]/20 bg-[#1FB6C1]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]">
                    Hauptangebot
                  </p>

                  <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                    Indikative CO₂e-Bescheinigung
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                    Ein klares, datiertes und überprüfbares PDF für Situationen,
                    in denen eine schnelle CO₂e-Antwort erwartet wird - ohne
                    Beratungsprojekt und ohne Vor-Ort-Erhebung.
                  </p>

                  <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Preis pro Dokument
                    </p>
                    <div className="mt-3 flex items-end justify-center">
                      <span className="text-6xl font-extrabold tracking-tight text-[#0B3A63] md:text-7xl">
                        89€
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#64748B]">
                      einmalige Zahlung · ohne Abo
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Link
                      href="/generate"
                      className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
                    >
                      CO₂e-Bescheinigung erstellen
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">
                    Was enthalten ist
                  </h3>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {includedItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-[#0B3A63]/8 bg-white px-4 py-3 text-sm leading-relaxed text-[#475569]"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[linear-gradient(180deg,rgba(11,58,99,0.04)_0%,rgba(31,182,193,0.04)_100%)] p-5">
                    <p className="text-sm font-semibold text-[#0B3A63]">
                      Umfang des Preises
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      Der Preis deckt die Erstellung einer standardisierten,
                      indikativen Bescheinigung ab. Er deckt keine Beratung,
                      keine Vor-Ort-Erhebung, keine externe fachliche Prüfung
                      und kein vollständiges Treibhausgasinventar ab.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.16)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Klare Einordnung
              </p>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                89€ für ein Screening-Dokument, nicht für ein vollständiges Inventar
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">
                    Certif-Scope - 89€
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Indikative Bescheinigung: aggregiertes Ergebnis,
                    ausgewiesene Methode, sichtbare Grenzen und dokumentarische
                    Kontrolle.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">
                    Vollständiges Treibhausgasinventar - gesondertes Angebot
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Detaillierte Datenerhebung, vollständige Abgrenzungen,
                    Aktivitätsdaten, Begleitung, Annahmen und gegebenenfalls
                    externe fachliche Prüfung.
                  </p>
                </div>
              </div>

              <a
                href="#pricing-limits"
                className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Umfang ansehen →
              </a>
            </aside>
          </section>
        </div>
      </section>

      <section
        id="pricing-fit"
        data-section="pricing-fit"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Wann Certif-Scope passt
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Wann reicht eine Bescheinigung für 89€ aus?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Certif-Scope ist geeignet, wenn ein Unternehmen ein einfaches,
                indikatives und überprüfbares CO₂e-Dokument weitergeben muss,
                ohne dass eine vollständige regulatorische Berichterstattung
                verlangt wird.
              </p>

              <Link
                href="/generate"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                CO₂e-Bescheinigung erstellen
              </Link>
            </div>

            <div className="grid gap-5">
              {fitItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing-limits"
        data-section="pricing-limits"
        className="relative overflow-hidden bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Transparenter Umfang
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                  Was der Preis nicht verspricht
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#475569]">
                  Diese Klarheit schützt den Nutzer und stärkt die
                  Nachvollziehbarkeit des Dokuments gegenüber Einkauf, Bank,
                  Versicherung oder Auftraggeber.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {limitItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]"
                  >
                    <span className="font-semibold text-[#0B3A63]">Grenze: </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="packs"
        data-section="packs"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Wiederkehrende Nutzung
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Pakete für mehrere Bescheinigungen
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Die Pakete sind für Organisationen gedacht, die im Jahr mehrere
              Dokumente erstellen müssen: mehrere Dossiers, mehrere Einheiten,
              mehrere Lieferanten oder mehrere Kundenanfragen.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packs.map((pack) => (
              <div
                key={pack.name}
                className="flex flex-col rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_18px_45px_rgba(11,58,99,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  Paket
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                  {pack.name}
                </h3>

                <div className="mt-6">
                  <p className="text-4xl font-extrabold tracking-tight text-[#0B3A63]">
                    {pack.price}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#64748B]">
                    {pack.unit}
                  </p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-[#475569]">
                  {pack.text}
                </p>

                <a
                  href={pack.href}
                  className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  {pack.name} kaufen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing-faq"
        data-section="pricing-faq"
        className="relative overflow-hidden bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Häufige Fragen
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Preis und Umfang verstehen
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="final-cta-pricing"
        data-section="final-cta-pricing"
        className="relative overflow-hidden bg-white py-20 md:py-24"
      >
        <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Einfacher Preis · überprüfbares Dokument · ohne Abo
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Eine indikative CO₂e-Bescheinigung für 89€ erstellen
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Antworten Sie schnell auf eine CO₂e-Anfrage mit einem klaren,
                  standardisierten, datierten, archivierbaren und überprüfbaren
                  PDF - ohne das Dokument als vollständiges Inventar darzustellen.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/generate"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  CO₂e-Bescheinigung erstellen
                </Link>

                <Link
                  href="/de/#cas-adaptes"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Einsatz für KMU einordnen
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Indikative CO₂e-Schätzung auf Basis deklarierter Ausgaben nach
            spend-based Ansatz. Keine externe fachliche Prüfung, kein
            vollständiges Treibhausgasinventar und keine regulatorische
            CSRD-/ESRS-Berichterstattung.
          </p>
        </div>
      </section>
    </main>
  );
}
