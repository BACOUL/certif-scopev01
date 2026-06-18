// PATH: src/app/de/pricing/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preis CO₂e-Bescheinigung KMU: 89 € ohne Abo | Certif-Scope",
  description:
    "Erstellen Sie eine indikative CO₂e-Bescheinigung für 89 €, ohne Abonnement. PDF für Kundenanfragen, Lieferantenportale, Banken, Versicherungen und Ausschreibungen. Kein Audit, kein CSRD-/ESRS-Bericht.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/pricing/",
    languages: {
      de: "https://www.certif-scope.com/de/pricing/",
      fr: "https://www.certif-scope.com/fr/pricing/",
    },
  },
  openGraph: {
    type: "website",
    title: "Preis CO₂e-Bescheinigung KMU: 89 € ohne Abo | Certif-Scope",
    description:
      "Indikative CO₂e-Bescheinigung für 89 €, ohne Abonnement. Standardisiertes, datiertes, archivierbares und verifizierbares PDF für einfache CO₂-Anfragen.",
    url: "https://www.certif-scope.com/de/pricing/",
    siteName: "Certif-Scope",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/pricing/";

const includedItems = [
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Bezugsjahr und Ausstellungsdatum",
  "Ausgabenbasierte Methode klar beschrieben",
  "Sichtbare methodische Grenzen",
  "Standardisiertes und archivierbares PDF",
  "Eindeutige Verifikationsreferenz",
  "Dokumentarische Verifizierung durch Dritte",
  "Dokumentarische Gültigkeit von einem Jahr",
];

const fitItems = [
  {
    title: "Kunden- oder Lieferantenanfrage",
    text: "Ein Kunde, Auftraggeber oder Einkaufsteam verlangt eine einfache CO₂e-Angabe, einen CO₂-Nachweis oder ein Nachhaltigkeitsdokument.",
  },
  {
    title: "Bank, Versicherung oder ESG-Screening",
    text: "Ein Dossier verlangt eine indikative Umwelt- oder CO₂-Information, ohne eine vollständige Beratungsmission zu starten.",
  },
  {
    title: "Ausschreibung ohne vollständige Prüfanforderung",
    text: "Die Vergabeunterlagen fragen nach einem CO₂- oder ESG-Dokument, verlangen aber keine externe Prüfung und kein vollständiges Treibhausgasinventar.",
  },
];

const limitItems = [
  "Ersetzt keine vollständige CO₂-Bilanz.",
  "Ist kein CSRD-/ESRS-Bericht.",
  "Deckt kein vollständiges Scope-1/2/3-Inventar ab.",
  "Ist keine externe Prüfung, Zertifizierung oder Rechtsberatung.",
];

const packs = [
  {
    name: "Paket 5",
    price: "349 €",
    unit: "69 € pro Bescheinigung",
    text: "Für mehrere Kunden-, Lieferanten- oder Ausschreibungsdossiers innerhalb eines Jahres.",
    href: "/api/checkout-pack?pack=5",
  },
  {
    name: "Paket 10",
    price: "590 €",
    unit: "59 € pro Bescheinigung",
    text: "Für regelmäßige Nutzung in Angebotsunterlagen, Einkaufsprozessen oder Lieferantenanfragen.",
    href: "/api/checkout-pack?pack=10",
  },
  {
    name: "Paket 50",
    price: "2 450 €",
    unit: "49 € pro Bescheinigung",
    text: "Für Netzwerke, Plattformen oder Organisationen mit hohem Lieferanten- oder Dossiervolumen.",
    href: "/api/checkout-pack?pack=50",
  },
];

const faqs = [
  {
    question: "Warum kostet die Bescheinigung 89 €?",
    answer:
      "Certif-Scope ist ein standardisiertes Produkt: Es erstellt eine indikative CO₂e-Bescheinigung als PDF mit Ergebnis, Methode, Grenzen und Verifizierungsreferenz. Der Preis umfasst keine Beratungsmission, keine Datenerhebung vor Ort und kein Audit.",
  },
  {
    question: "Ist das eine zertifizierte CO₂-Bilanz?",
    answer:
      "Nein. Certif-Scope erstellt keine zertifizierte CO₂-Bilanz, kein Audit, keine externe Prüfung und keinen CSRD-/ESRS-Bericht. Es handelt sich um eine indikative CO₂e-Bescheinigung auf Ausgabenbasis.",
  },
  {
    question: "Wann ist die Bescheinigung sinnvoll?",
    answer:
      "Sie ist sinnvoll, wenn ein Kunde, Auftraggeber, Lieferantenportal, eine Bank, Versicherung oder Ausschreibung eine einfache CO₂e-Angabe oder ein dokumentarisches CO₂-Dokument verlangt.",
  },
  {
    question: "Kann ich die Bescheinigung in einer Ausschreibung verwenden?",
    answer:
      "Ja, wenn die Vergabeunterlagen eine allgemeine CO₂- oder ESG-Information akzeptieren. Wenn eine konkrete Norm, ein Umfang, ein Audit oder eine externe Prüfung verlangt wird, müssen die Vergabeunterlagen befolgt werden.",
  },
  {
    question: "Werden detaillierte Finanzdaten gespeichert?",
    answer:
      "Certif-Scope ist auf Datensparsamkeit ausgelegt. Die detaillierten Eingabedaten werden nicht als Kundendatenbank gespeichert. Das finale Dokument muss vom Nutzer heruntergeladen und archiviert werden.",
  },
  {
    question: "Warum gibt es Pakete?",
    answer:
      "Pakete sind für Unternehmen, Netzwerke oder Organisationen gedacht, die mehrere Dossiers, mehrere Einheiten oder wiederkehrende Kunden- und Lieferantenanfragen bearbeiten müssen.",
  },
];

export default function PricingPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Preis CO₂e-Bescheinigung KMU: 89 € ohne Abo",
    url: pageUrl,
    description:
      "Preisinformationen für eine standardisierte, indikative CO₂e-Bescheinigung auf Ausgabenbasis: 89 € pro Dokument, ohne Abonnement.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    inLanguage: "de-DE",
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung Certif-Scope",
    serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
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
      url: "https://www.certif-scope.com/de/generate/",
      description:
        "Indikative CO₂e-Bescheinigung als standardisiertes und verifizierbares PDF, ohne Abonnement.",
    },
  };

  const jsonLdFAQ = {
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
    <main id="main-content" role="main" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <section id="pricing" data-section="pricing" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              CO₂e-Bescheinigung für KMU · Preis
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0B3A63] md:text-5xl">
              Eine indikative CO₂e-Bescheinigung für 89 €, ohne Abonnement
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope erstellt ein standardisiertes, datiertes und verifizierbares CO₂e-PDF für einfache Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen — ohne ein vollständiges CO₂-Audit zu behaupten.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                Bescheinigung für 89 € erstellen
              </Link>
              <Link href="/de/co2e-bescheinigung-kmu/" className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                Nutzung für KMU verstehen
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
                    Ein klares PDF-Dokument für Situationen, in denen eine schnelle, vorsichtige und übertragbare CO₂e-Antwort benötigt wird.
                  </p>
                  <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Preis pro Dokument</p>
                    <div className="mt-3 flex items-end justify-center">
                      <span className="text-6xl font-extrabold tracking-tight text-[#0B3A63] md:text-7xl">89 €</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#64748B]">einmalige Zahlung · ohne Abonnement</p>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Link href="/de/generate/" className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                      Bescheinigung erstellen
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">Enthalten</h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {includedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#0B3A63]/8 bg-white px-4 py-3 text-sm leading-relaxed text-[#475569]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[linear-gradient(180deg,rgba(11,58,99,0.04)_0%,rgba(31,182,193,0.04)_100%)] p-5">
                    <p className="text-sm font-semibold text-[#0B3A63]">Preisumfang</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      Der Preis deckt die Erstellung einer standardisierten indikativen Bescheinigung ab. Er deckt keine Beratung, kein Audit vor Ort, keine externe Prüfung und kein vollständiges Treibhausgasinventar ab.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.16)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Klare Abgrenzung</p>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                89 € für einen dokumentarischen CO₂e-Nachweis, nicht für ein vollständiges Audit
              </h2>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">Certif-Scope — 89 €</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Indikative Bescheinigung: aggregiertes Ergebnis, erklärte Methode, sichtbare Grenzen und Dokumentenverifizierung.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">Vollständige CO₂-Bilanz — individuelles Angebot</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Detaillierte Datenerhebung, umfassende Scopes, Aktivitätsdaten, Beratung, Annahmen und gegebenenfalls externe Prüfung.
                  </p>
                </div>
              </div>
              <Link href="/de/co2-bilanz-pflicht-kmu/" className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                Grenzen verstehen →
              </Link>
            </aside>
          </section>
        </div>
      </section>

      <section id="pricing-fit" data-section="pricing-fit" className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Wann verwenden?</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">Wann eine Bescheinigung für 89 € sinnvoll ist</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Certif-Scope ist geeignet, wenn ein Unternehmen einen einfachen, indikativen und verifizierbaren CO₂e-Nachweis übermitteln muss, ohne dass eine vollständige regulatorische Prüfung verlangt wird.
              </p>
              <Link href="/de/generate/" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                Bescheinigung erstellen
              </Link>
            </div>
            <div className="grid gap-5">
              {fitItems.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing-limits" data-section="pricing-limits" className="relative overflow-hidden bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Transparenter Umfang</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">Was der Preis nicht verspricht</h2>
                <p className="mt-5 text-base leading-relaxed text-[#475569]">
                  Diese Klarheit schützt den Nutzer und erhöht die Glaubwürdigkeit des Dokuments gegenüber Kunden, Banken, Versicherern oder Auftraggebern.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {limitItems.map((item) => (
                  <li key={item} className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                    <span className="font-semibold text-[#0B3A63]">Grenze: </span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="packs" data-section="packs" className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">Wiederkehrende Nutzung</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Pakete für mehrere Bescheinigungen</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Pakete sind für Organisationen gedacht, die mehrere Dokumente pro Jahr benötigen: mehrere Dossiers, Einheiten, Lieferanten oder Kundenanfragen.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packs.map((pack) => (
              <div key={pack.name} className="flex flex-col rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_18px_45px_rgba(11,58,99,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Paket</p>
                <h3 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">{pack.name}</h3>
                <div className="mt-6">
                  <p className="text-4xl font-extrabold tracking-tight text-[#0B3A63]">{pack.price}</p>
                  <p className="mt-1 text-sm font-medium text-[#64748B]">{pack.unit}</p>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-[#475569]">{pack.text}</p>
                <a href={pack.href} className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                  {pack.name} kaufen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-faq" data-section="pricing-faq" className="relative overflow-hidden bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Preis und Umfang verstehen</h2>
          </div>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta-pricing" data-section="final-cta-pricing" className="relative overflow-hidden bg-white py-20 md:py-24">
        <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Einfacher Preis · verifizierbares Dokument · ohne Abonnement</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Erstellen Sie Ihre indikative CO₂e-Bescheinigung</h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Nutzen Sie Certif-Scope, wenn ein Dossier eine einfache CO₂e-Angabe verlangt und kein vollständiges Audit, keine externe Prüfung und kein regulatorischer Bericht gefordert werden.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                  Für 89 € erstellen
                </Link>
                <Link href="/de/co2-nachweis-lieferant/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Lieferantenfall ansehen
                </Link>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis von Ausgaben. Das Dokument ist kein Audit, keine zertifizierte CO₂-Bilanz, keine externe Prüfung, kein vollständiges Scope-1/2/3-Inventar und kein CSRD-/ESRS-Bericht.
          </p>
        </div>
      </section>
    </main>
  );
}
