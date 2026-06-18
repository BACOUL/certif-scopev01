// PATH: src/app/de/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung für KMU | Certif-Scope Deutschland",
  description:
    "Erstellen Sie eine indikative CO₂e-Bescheinigung für Kunden, Lieferanten, Banken, Versicherungen und Ausschreibungen. Einfacher CO₂-Nachweis für KMU, ohne Audit und ohne Abonnement.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/",
    languages: {
      fr: "https://www.certif-scope.com/fr/",
      de: "https://www.certif-scope.com/de/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung für KMU | Certif-Scope",
    description:
      "Ein einfacher CO₂e-Nachweis für deutsche KMU, wenn Kunden, Lieferanten, Banken, Versicherungen oder Ausschreibungen ein CO₂-Dokument verlangen.",
    url: "https://www.certif-scope.com/de/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/";

const useCases = [
  {
    title: "Kundenanfragen",
    text: "Ein Kunde fragt nach einem CO₂-Nachweis, einem CO₂e-Dokument oder einer einfachen Umweltinformation für seine Lieferantendatei.",
  },
  {
    title: "Lieferantenprüfung",
    text: "Ein Einkäufer oder Auftraggeber möchte eine klare, datierte und nachvollziehbare CO₂e-Angabe archivieren.",
  },
  {
    title: "Ausschreibungen",
    text: "Ein Vergabeportal oder ein technisches Angebot verlangt einen CO₂e-Nachweis oder eine RSE-/ESG-Angabe.",
  },
  {
    title: "Banken und Versicherungen",
    text: "Ein Dossier benötigt einen einfachen CO₂e-Beleg, ohne sofort eine vollständige Klimabilanz zu erstellen.",
  },
];

const quickAnswers = [
  {
    title: "Was ist Certif-Scope?",
    text: "Certif-Scope erstellt eine indikative CO₂e-Bescheinigung für KMU. Das Dokument basiert auf einer ausgabenbasierten Schätzung und ist für einfache professionelle Anfragen gedacht.",
  },
  {
    title: "Wann ist es nützlich?",
    text: "Wenn ein Kunde, Lieferant, Einkäufer, Versicherer, eine Bank oder eine Ausschreibung einen CO₂-Nachweis verlangt, aber kein vollständiges Audit vorschreibt.",
  },
  {
    title: "Was ist es nicht?",
    text: "Es ist keine vollständige CO₂-Bilanz, kein Audit, keine externe Prüfung und kein CSRD- oder ESRS-Bericht.",
  },
];

const steps = [
  {
    title: "Unternehmensdaten eingeben",
    text: "Geben Sie die grundlegenden Informationen und die jährlichen Ausgaben nach Kategorien ein.",
  },
  {
    title: "CO₂e-Ergebnis berechnen",
    text: "Die Schätzung verwendet eine spend-based Methode: Ausgaben × Emissionsfaktor.",
  },
  {
    title: "PDF herunterladen",
    text: "Sie erhalten eine datierte Bescheinigung mit Methode, Grenzen und einer überprüfbaren Referenz.",
  },
];

const comparisonRows = [
  {
    topic: "Ziel",
    certifScope: "Ein einfaches, indikatives CO₂e-Dokument für professionelle Anfragen.",
    fullAudit: "Eine vollständige CO₂-Bilanz, ein Audit oder eine detaillierte Klimastrategie.",
  },
  {
    topic: "Dauer",
    certifScope: "Wenige Minuten, wenn die Ausgaben verfügbar sind.",
    fullAudit: "Mehrere Wochen je nach Daten, Umfang und Beratung.",
  },
  {
    topic: "Kosten",
    certifScope: "Fester Preis: 89 €, ohne Abonnement.",
    fullAudit: "Variabel je nach Anbieter, Umfang und Analysegrad.",
  },
  {
    topic: "Grenze",
    certifScope: "Indikativ, nicht auditiert, kein vollständiger Scope-1/2/3-Bericht.",
    fullAudit: "Besser geeignet bei formalen, normativen oder regulatorischen Anforderungen.",
  },
];

const faq = [
  {
    q: "Was ist eine CO₂e-Bescheinigung für KMU?",
    a: "Eine CO₂e-Bescheinigung ist ein dokumentarischer Nachweis mit einer indikativen Treibhausgas-Schätzung. Sie kann verwendet werden, wenn ein Kunde, Lieferant, Einkäufer oder eine Ausschreibung eine einfache CO₂e-Information verlangt.",
  },
  {
    q: "Ersetzt Certif-Scope eine vollständige CO₂-Bilanz?",
    a: "Nein. Certif-Scope ersetzt keine vollständige CO₂-Bilanz, kein Audit, keine externe Prüfung und keinen CSRD- oder ESRS-Bericht.",
  },
  {
    q: "Für wen ist Certif-Scope gedacht?",
    a: "Certif-Scope richtet sich an KMU, die schnell ein einfaches CO₂e-Dokument für Kunden, Lieferanten, Banken, Versicherungen oder Ausschreibungen benötigen.",
  },
  {
    q: "Welche Methode wird verwendet?",
    a: "Die Bescheinigung basiert auf einer ausgabenbasierten Methode. Die Formel lautet vereinfacht: Ausgaben × Emissionsfaktor = geschätzte CO₂e-Emissionen.",
  },
  {
    q: "Kann das Dokument in einer Ausschreibung verwendet werden?",
    a: "Ja, wenn die Ausschreibung nur einen allgemeinen CO₂e-Nachweis oder eine Umweltinformation verlangt. Wenn eine Norm, ein Audit oder eine externe Prüfung verlangt wird, muss diese Anforderung eingehalten werden.",
  },
  {
    q: "Wie viel kostet die Bescheinigung?",
    a: "Der Preis beträgt 89 € ohne Abonnement. Dieser Preis entspricht nicht einer vollständigen Beratungsleistung oder einem Audit.",
  },
];

export default function GermanHomePage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂e-Bescheinigung für KMU",
    url: pageUrl,
    description:
      "Deutsche Startseite von Certif-Scope für indikative CO₂e-Bescheinigungen und einfache CO₂-Nachweise für KMU.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/",
    },
    inLanguage: "de-DE",
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
      "Service zur Erstellung einer indikativen CO₂e-Bescheinigung für Kunden, Lieferanten, Banken, Versicherungen und Ausschreibungen.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
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
              Deutschland · KMU · CO₂e-Bescheinigung · SEO IA-first
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO₂e-Bescheinigung für KMU, wenn ein CO₂-Nachweis verlangt wird
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Certif-Scope hilft deutschen KMU, eine einfache indikative CO₂e-Bescheinigung zu erstellen, wenn Kunden, Lieferanten, Banken, Versicherungen oder Ausschreibungen ein CO₂-Dokument verlangen.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Das Dokument ist klar, datiert, als PDF übertragbar und mit Methode sowie Grenzen versehen. Es ersetzt keine vollständige CO₂-Bilanz, kein Audit und keinen regulatorischen Bericht.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                CO₂e-Bescheinigung erstellen
              </Link>
              <Link
                href="/de/pricing/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Preis ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">
              Schnelle Antwort für Google und KI-Assistenten
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Was liefert Certif-Scope?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Ausgabenbasis. Sie ist für einfache professionelle Anfragen gedacht, zum Beispiel von Kunden, Einkäufern, Banken, Versicherungen oder Ausschreibungen. Sie ist kein Audit und keine vollständige CO₂-Bilanz.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {quickAnswers.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5">
                  <h3 className="text-base font-extrabold text-[#0B3A63]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Typische Anwendungsfälle
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Für welche Situationen ist der CO₂e-Nachweis gedacht?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Die Bescheinigung hilft, wenn ein Unternehmen schnell eine strukturierte CO₂e-Antwort benötigt und keine vollständige Klimabilanz verlangt wird.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-extrabold text-[#0B3A63]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Einfacher Ablauf
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Von der Eingabe zum PDF in wenigen Schritten
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Der Ablauf bleibt bewusst einfach: Angaben eintragen, Ergebnis prüfen und die Bescheinigung als PDF herunterladen.
              </p>
            </div>

            <div className="grid gap-5">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Schritt {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Wichtig für die Einordnung
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Eine Bescheinigung ist nicht dasselbe wie eine vollständige CO₂-Bilanz
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Certif-Scope ist für dokumentarische CO₂e-Anfragen gedacht. Wenn ein Auftraggeber eine bestimmte Norm, ein Audit, eine externe Prüfung oder einen vollständigen Scope-1/2/3-Bericht verlangt, muss diese Anforderung eingehalten werden.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-white/16 bg-white/8">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="p-5 text-left font-semibold text-white">Thema</th>
                  <th className="p-5 text-left font-semibold text-white">Certif-Scope</th>
                  <th className="p-5 text-left font-semibold text-white">Vollständige CO₂-Bilanz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 align-top font-semibold text-white">{row.topic}</td>
                    <td className="p-5 align-top leading-relaxed text-white/82">{row.certifScope}</td>
                    <td className="p-5 align-top leading-relaxed text-white/82">{row.fullAudit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Fester Preis · PDF · Kein Abonnement
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Erstellen Sie Ihre CO₂e-Bescheinigung für 89 €
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Eine einfache, indikative Bescheinigung für professionelle Anfragen — mit Methode, Grenzen und überprüfbarer Referenz.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/de/generate/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  CO₂e-Bescheinigung erstellen
                </Link>
                <Link
                  href="/de/pricing/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Preis ansehen
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis von Ausgaben. Das Dokument ist kein Audit, keine vollständige CO₂-Bilanz, keine externe Prüfung und kein CSRD-/ESRS-Bericht.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zur CO₂e-Bescheinigung
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
              >
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
