// PATH: src/app/de/co2e-bescheinigung-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung KMU: einfacher CO₂-Nachweis | Certif-Scope",
  description:
    "CO₂e-Bescheinigung für KMU in Deutschland: einfacher, indikativer CO₂-Nachweis für Kunden, Lieferanten, Banken, Versicherungen und Ausschreibungen. 89 €, ohne Abonnement.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2e-bescheinigung-kmu/",
    languages: {
      fr: "https://www.certif-scope.com/fr/attestation-co2-pme/",
      de: "https://www.certif-scope.com/de/co2e-bescheinigung-kmu/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung KMU: einfacher CO₂-Nachweis",
    description:
      "Erstellen Sie eine indikative CO₂e-Bescheinigung für professionelle Anfragen, ohne Audit und ohne vollständige CO₂-Bilanz.",
    url: "https://www.certif-scope.com/de/co2e-bescheinigung-kmu/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/co2e-bescheinigung-kmu/";

const quickAnswers = [
  {
    title: "Kurz erklärt",
    text: "Eine CO₂e-Bescheinigung für KMU ist ein dokumentarischer Nachweis mit einer indikativen Treibhausgas-Schätzung. Sie hilft, wenn ein Dossier eine CO₂e-Angabe verlangt.",
  },
  {
    title: "Typische Verwendung",
    text: "Kundenanfrage, Lieferantenfragebogen, Bank- oder Versicherungsdossier, Ausschreibung, ESG-/RSE-Fragebogen oder interne Dokumentation.",
  },
  {
    title: "Klare Grenze",
    text: "Die Bescheinigung ist kein Audit, keine vollständige CO₂-Bilanz, keine externe Prüfung und kein CSRD-/ESRS-Bericht.",
  },
];

const useCases = [
  "Ein Kunde verlangt einen CO₂-Nachweis vor Vertragsabschluss.",
  "Ein Lieferantenportal fragt nach einer CO₂e-Angabe.",
  "Eine Bank oder Versicherung möchte ein einfaches Umwelt-Dokument archivieren.",
  "Eine Ausschreibung erwähnt CO₂, ESG, Nachhaltigkeit oder Umweltleistung.",
  "Ein Unternehmen braucht schnell ein PDF statt einer informellen Antwort.",
  "Die Anfrage ist dokumentarisch und verlangt kein formales Audit.",
];

const comparisonRows = [
  {
    topic: "Zweck",
    certifScope: "Schnelle dokumentarische Antwort auf eine CO₂e-Anfrage.",
    fullBilanz: "Vollständige Analyse der Emissionen und Klimastrategie.",
  },
  {
    topic: "Methode",
    certifScope: "Ausgabenbasierte Schätzung: Ausgaben × Emissionsfaktor.",
    fullBilanz: "Detaillierte Datenerhebung, physische Daten, Prozessanalyse.",
  },
  {
    topic: "Dauer",
    certifScope: "Wenige Minuten, wenn die Ausgaben verfügbar sind.",
    fullBilanz: "Oft mehrere Wochen.",
  },
  {
    topic: "Preis",
    certifScope: "89 €, ohne Abonnement.",
    fullBilanz: "Variabel, meist deutlich höher.",
  },
  {
    topic: "Grenze",
    certifScope: "Indikativ, nicht auditiert, kein vollständiger Scope-1/2/3-Bericht.",
    fullBilanz: "Geeignet für detaillierte oder formale Anforderungen.",
  },
];

const steps = [
  {
    title: "Angaben vorbereiten",
    text: "Sie benötigen grundlegende Unternehmensinformationen und jährliche Ausgaben nach Kategorien.",
  },
  {
    title: "Schätzung berechnen",
    text: "Die Berechnung basiert auf einer spend-based Methode mit Emissionsfaktoren.",
  },
  {
    title: "PDF erhalten",
    text: "Das Ergebnis wird als Bescheinigung mit Datum, Methode, Grenzen und Referenz bereitgestellt.",
  },
];

const faq = [
  {
    q: "Was ist eine CO₂e-Bescheinigung für KMU?",
    a: "Es ist ein dokumentarischer CO₂e-Nachweis mit einer indikativen Schätzung. Er ist für einfache professionelle Anfragen gedacht, wenn keine vollständige CO₂-Bilanz verlangt wird.",
  },
  {
    q: "Ist das eine zertifizierte CO₂-Bilanz?",
    a: "Nein. Certif-Scope erstellt keine zertifizierte CO₂-Bilanz, kein Audit und keine externe Prüfung. Das Dokument ist ausdrücklich indikativ.",
  },
  {
    q: "Kann ich die Bescheinigung einem Kunden senden?",
    a: "Ja, wenn der Kunde einen einfachen CO₂e-Nachweis oder ein CO₂-Dokument verlangt. Bei formalen Anforderungen muss der Wortlaut des Dossiers beachtet werden.",
  },
  {
    q: "Kann ich das Dokument für eine Ausschreibung verwenden?",
    a: "Ja, wenn die Ausschreibung eine allgemeine CO₂e-Information oder ein Dokument verlangt. Wenn ein Audit, eine Norm oder eine externe Prüfung verlangt wird, reicht eine indikative Bescheinigung nicht aus.",
  },
  {
    q: "Wie wird das Ergebnis berechnet?",
    a: "Die Methode ist ausgabenbasiert. Vereinfacht: Ausgaben × Emissionsfaktor = geschätzte CO₂e-Emissionen.",
  },
  {
    q: "Welche Daten muss ich eingeben?",
    a: "Die Bescheinigung nutzt jährliche Ausgaben nach großen Kategorien. Sie nutzt keine vollständige physische Datenerhebung wie kWh, Liter oder Kilometer.",
  },
  {
    q: "Was kostet die CO₂e-Bescheinigung?",
    a: "Der Preis beträgt 89 € ohne Abonnement.",
  },
  {
    q: "Erfüllt Certif-Scope CSRD oder ESRS?",
    a: "Nein. Das Dokument ersetzt keinen CSRD-/ESRS-Bericht und ist nicht als regulatorisches Reporting zu verwenden.",
  },
];

export default function Co2eBescheinigungKmuPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂e-Bescheinigung KMU",
    url: pageUrl,
    description:
      "SEO- und KI-orientierte deutsche Seite zur indikativen CO₂e-Bescheinigung für KMU.",
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
    name: "CO₂e-Bescheinigung für KMU",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
    description:
      "Erstellung einer indikativen CO₂e-Bescheinigung für Kunden, Lieferanten, Banken, Versicherungen und Ausschreibungen.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Deutschland · CO₂e-Bescheinigung · KMU · SEO IA-first
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO₂e-Bescheinigung KMU: einfacher CO₂-Nachweis für professionelle Anfragen
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Wenn Kunden, Lieferanten, Banken, Versicherungen oder Ausschreibungen einen CO₂-Nachweis verlangen, kann eine indikative CO₂e-Bescheinigung eine schnelle und klare Antwort liefern.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Certif-Scope erstellt ein PDF mit Ergebnis, Methode, Jahr, Grenzen und Referenz. Das Dokument ist keine vollständige CO₂-Bilanz und kein Audit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                CO₂e-Bescheinigung erstellen
              </Link>
              <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                Preis ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">
              Schnelle Antwort für Google und KI-Assistenten
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Wofür ist diese CO₂e-Bescheinigung gedacht?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Sie ist für dokumentarische Anfragen gedacht: ein Kunde, ein Auftraggeber oder ein Dossier verlangt eine CO₂e-Angabe, aber keine vollständige, auditierte CO₂-Bilanz.
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Konkrete Nutzung</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Wann ein CO₂-Nachweis für KMU nützlich ist
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Viele KMU benötigen kein großes Beratungsprojekt, sondern zuerst ein klares, professionelles Dokument für eine konkrete Anfrage.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <li key={item} className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Vergleich</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              CO₂e-Bescheinigung oder vollständige CO₂-Bilanz?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Beide Antworten haben nicht denselben Zweck. Certif-Scope ist für einfache Dokumentationsanfragen gedacht.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Thema</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Certif-Scope</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Vollständige CO₂-Bilanz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/10">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">{row.topic}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.certifScope}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.fullBilanz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Ablauf</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                In drei Schritten zur Bescheinigung
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
                Die Erstellung ist bewusst einfach gehalten, damit KMU schnell auf konkrete Anfragen reagieren können.
              </p>
            </div>
            <div className="grid gap-5">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-[24px] border border-white/16 bg-white/8 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Schritt {index + 1}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/82">{step.text}</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Fester Preis · PDF · Kein Abonnement</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Erstellen Sie Ihre CO₂e-Bescheinigung für 89 €
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Ein einfacher, indikativer CO₂-Nachweis für professionelle Anfragen — mit Methode, Grenzen und Referenz.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                  CO₂e-Bescheinigung erstellen
                </Link>
                <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zur CO₂e-Bescheinigung für KMU
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article key={item.q} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
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
