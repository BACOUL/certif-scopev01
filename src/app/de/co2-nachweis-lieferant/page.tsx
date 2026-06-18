// PATH: src/app/de/co2-nachweis-lieferant/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO₂-Nachweis Lieferant erstellen | Indikative CO₂e-Bescheinigung für KMU",
  description:
    "Kunde verlangt einen CO₂-Nachweis? Certif-Scope hilft KMU, eine einfache indikative CO₂e-Bescheinigung für Lieferantenanfragen, ESG-Fragebögen und Kundendokumente zu erstellen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-nachweis-lieferant/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-nachweis-lieferant/",
      fr: "https://www.certif-scope.com/fr/attestation-co2-pme/",
    },
  },
  openGraph: {
    title: "CO₂-Nachweis für Lieferanten | Certif-Scope",
    description:
      "Erstellen Sie eine indikative CO₂e-Bescheinigung für Kundenanfragen, Lieferantenfragebögen und ESG-Dokumente — ohne Audit und ohne vollständige CO₂-Bilanz.",
    url: "https://www.certif-scope.com/de/co2-nachweis-lieferant/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/co2-nachweis-lieferant/";

const quickAnswers = [
  {
    title: "Direkte Antwort",
    text: "Certif-Scope hilft KMU, einen einfachen, indikativen CO₂e-Nachweis für Kunden- oder Lieferantenanfragen zu erstellen.",
  },
  {
    title: "Typischer Auslöser",
    text: "Ein Kunde, Auftraggeber, Einkaufsteam oder Lieferantenportal verlangt ein CO₂-Dokument, eine CO₂e-Angabe oder eine ESG-Information.",
  },
  {
    title: "Klare Grenze",
    text: "Die Bescheinigung ist kein Audit, keine vollständige CO₂-Bilanz, keine Zertifizierung und kein CSRD-/ESRS-Bericht.",
  },
];

const problemCards = [
  {
    title: "Kunden fragen früher nach CO₂-Daten",
    text: "Große Kunden und Auftraggeber strukturieren ihre Lieferantendaten. Dadurch werden CO₂-Angaben, ESG-Fragebögen und einfache Nachhaltigkeitsdokumente häufiger abgefragt.",
  },
  {
    title: "Viele KMU haben noch keine vollständige Bilanz",
    text: "Ein vollständiges Klimaprojekt kann sinnvoll sein, ist aber nicht immer notwendig, wenn der Kunde zunächst nur ein einfaches Dokument für seine Lieferantendatei verlangt.",
  },
  {
    title: "Die Anfrage ist oft administrativ",
    text: "In vielen Fällen geht es nicht um ein Audit, sondern um einen dokumentierten Nachweis: datiert, lesbar, nachvollziehbar und intern oder extern teilbar.",
  },
];

const solutionPillars = [
  {
    title: "Indikative CO₂e-Bescheinigung",
    text: "Ein klares PDF-Dokument mit Ergebnis, Methode, Jahr, Grenzen und Referenz für eine professionelle Kundenantwort.",
  },
  {
    title: "Spend-based Methode",
    text: "Die Schätzung basiert auf Ausgaben nach großen Kategorien. Sie ist schnell nutzbar, ohne vollständige physische Datenerhebung.",
  },
  {
    title: "Dokumentarischer Nachweis",
    text: "Die Bescheinigung ist für einfache Kundenanfragen, Lieferantenfragebögen und administrative ESG-Dossiers konzipiert.",
  },
  {
    title: "Prüfbarer Dokumentenbezug",
    text: "Das Dokument enthält eine Referenz zur Integrität und Authentizität der Bescheinigung, ohne eine externe Prüfung der Emissionen zu behaupten.",
  },
];

const supplierUseCases = [
  {
    title: "Großkunde verlangt einen CO₂-Nachweis",
    situation: "Ein großer Kunde verlangt vor Vertragsbeginn oder Vertragsverlängerung einen CO₂-Nachweis vom Lieferanten.",
    help: "Certif-Scope liefert ein strukturiertes CO₂e-Dokument statt einer vagen E-Mail-Antwort.",
    limit: "Wenn der Kunde eine zertifizierte oder auditierte CO₂-Bilanz verlangt, reicht eine indikative Bescheinigung nicht aus.",
  },
  {
    title: "Lieferantenfragebogen CO₂",
    situation: "Ein Fragebogen fragt nach CO₂e, Nachhaltigkeit, ESG oder Umweltinformationen für die Lieferantendatei.",
    help: "Die Bescheinigung kann als einfache Grundlage oder Anhang für die Antwort verwendet werden.",
    limit: "Die Angaben bleiben abhängig von den durch das Unternehmen eingegebenen Daten.",
  },
  {
    title: "Supplier Portal / Einkaufsplattform",
    situation: "Ein Portal bittet um ein CO₂-Dokument, eine Umweltinformation oder eine Datei zum Upload.",
    help: "Certif-Scope erzeugt ein übertragbares PDF mit Methode und Grenzen.",
    limit: "Die Plattformanforderungen müssen vor dem Upload geprüft werden, wenn bestimmte Normen genannt werden.",
  },
  {
    title: "Vertragsverlängerung Lieferant",
    situation: "Ein bestehender Kunde aktualisiert seine Lieferantenprüfung und fragt nach einem aktuellen CO₂e-Dokument.",
    help: "Eine datierte Bescheinigung kann helfen, den administrativen Teil des Dossiers schnell zu schließen.",
    limit: "Das Dokument ersetzt keine umfassende Dekarbonisierungsstrategie oder externe Validierung.",
  },
  {
    title: "Private Ausschreibung",
    situation: "Eine private Anfrage oder ein technisches Angebot enthält eine CO₂-, ESG- oder Nachhaltigkeitsfrage.",
    help: "Certif-Scope kann eine erste dokumentierte CO₂e-Einordnung liefern.",
    limit: "Bei formalen Ausschreibungsanforderungen entscheidet der Wortlaut der Vergabeunterlagen.",
  },
  {
    title: "Bank oder Versicherung im Lieferantendossier",
    situation: "Ein Kunde, eine Bank oder eine Versicherung verbindet das Lieferantendossier mit einfachen Umweltinformationen.",
    help: "Die Bescheinigung kann ein klares, vorsichtig formuliertes CO₂e-Dokument bereitstellen.",
    limit: "Sie ist nicht als regulatorisches Reporting oder vollständige Risikoprüfung zu verwenden.",
  },
];

const comparisonRows = [
  {
    certifScope: "Indikative CO₂e-Bescheinigung",
    notCertifScope: "Keine vollständige CO₂-Bilanz",
  },
  {
    certifScope: "Auf Ausgaben basierende Schätzung",
    notCertifScope: "Kein Audit und keine externe Prüfung",
  },
  {
    certifScope: "Schneller dokumentarischer Nachweis",
    notCertifScope: "Keine Zertifizierung",
  },
  {
    certifScope: "Geeignet für einfache Kundenanfragen",
    notCertifScope: "Kein CSRD-/ESRS-Bericht",
  },
  {
    certifScope: "Prüfbarer Dokumentenbezug / Verifizierung der Bescheinigung",
    notCertifScope: "Keine Validierung der Emissionsdaten durch einen Dritten",
  },
];

const methodPoints = [
  {
    title: "1. Erklärung durch das Unternehmen",
    text: "Der Nutzer gibt Unternehmensinformationen und Ausgaben nach großen Kategorien ein. Die Verantwortung für die eingegebenen Daten liegt beim Unternehmen.",
  },
  {
    title: "2. Anwendung von Emissionsfaktoren",
    text: "Die Methode nutzt eine ausgabenbasierte Berechnung, um eine CO₂e-Schätzung aus wirtschaftlichen Daten abzuleiten.",
  },
  {
    title: "3. Aggregiertes Ergebnis",
    text: "Das Ergebnis wird als aggregierte CO₂e-Schätzung ausgegeben und in einer indikativen Bescheinigung dokumentiert.",
  },
];

const steps = [
  {
    title: "Unternehmens- und Ausgabendaten eingeben",
    text: "Bereiten Sie die grundlegenden Unternehmensinformationen und die relevanten Ausgaben nach großen Kategorien vor.",
  },
  {
    title: "CO₂e-Schätzung automatisch berechnen",
    text: "Die Berechnung folgt der einfachen Formel: Ausgaben × Emissionsfaktor = geschätzte CO₂e-Emissionen.",
  },
  {
    title: "Bescheinigung herunterladen und teilen",
    text: "Laden Sie das PDF herunter und verwenden Sie es für Kundenanfragen, Lieferantenportale oder ESG-Fragebögen, wenn die Anfrage dafür geeignet ist.",
  },
];

const benefits = [
  "Schneller auf Kundenanfragen reagieren",
  "Ein administratives Dossier nicht wegen fehlender CO₂-Angaben blockieren",
  "Ein klares Dokument statt einer informellen Antwort liefern",
  "Einen Einkauf, Kunden oder Auftraggeber mit einer strukturierten Antwort beruhigen",
  "Eine erste CO₂e-Einordnung zeigen, ohne ein Audit zu behaupten",
  "Vorsichtig und ehrlich kommunizieren: indikativ, methodisch, begrenzt",
];

const faq = [
  {
    q: "Was ist ein CO₂-Nachweis für Lieferanten?",
    a: "Ein CO₂-Nachweis für Lieferanten ist ein Dokument, das eine CO₂e-Information oder eine CO₂e-Schätzung für ein Unternehmen bereitstellt. Bei Certif-Scope handelt es sich um eine indikative CO₂e-Bescheinigung auf Ausgabenbasis, nicht um eine vollständige CO₂-Bilanz.",
  },
  {
    q: "Warum verlangen Kunden einen CO₂-Nachweis von Lieferanten?",
    a: "Kunden und Einkaufsteams sammeln häufiger Umwelt-, ESG- oder CO₂-Informationen über ihre Lieferkette. Der Nachweis kann für eine Lieferantendatei, einen Fragebogen, ein Portal, einen Vertrag oder eine Ausschreibung angefragt werden.",
  },
  {
    q: "Reicht eine indikative CO₂e-Bescheinigung für eine Kundenanfrage aus?",
    a: "Das hängt vom Wortlaut der Anfrage ab. Wenn der Kunde ein einfaches CO₂-Dokument oder eine CO₂e-Angabe verlangt, kann Certif-Scope geeignet sein. Wenn ein Audit, eine Zertifizierung oder eine vollständige Bilanz verlangt wird, reicht die Bescheinigung nicht aus.",
  },
  {
    q: "Ist Certif-Scope eine zertifizierte CO₂-Bilanz?",
    a: "Nein. Certif-Scope ist keine zertifizierte CO₂-Bilanz, kein Audit, keine externe Prüfung und keine offizielle Zertifizierung. Das Dokument ist ausdrücklich indikativ.",
  },
  {
    q: "Ist Certif-Scope für Lieferantenfragebögen geeignet?",
    a: "Ja, wenn der Fragebogen eine einfache CO₂e-Information oder ein dokumentarisches CO₂-Dokument akzeptiert. Bei normativen, auditpflichtigen oder regulatorischen Anforderungen muss die genaue Vorgabe geprüft werden.",
  },
  {
    q: "Kann ich Certif-Scope für ESG-Anfragen von Kunden verwenden?",
    a: "Ja, für einfache ESG- oder Nachhaltigkeitsanfragen kann die Bescheinigung eine strukturierte CO₂e-Antwort liefern. Sie ersetzt jedoch keine umfassende ESG-Berichterstattung und keine externe Bewertung.",
  },
  {
    q: "Ersetzt Certif-Scope einen CSRD- oder ESRS-Bericht?",
    a: "Nein. Certif-Scope ersetzt keinen CSRD-/ESRS-Bericht und ist nicht als regulatorisches Reporting zu verwenden. Es handelt sich um einen einfachen, indikativen CO₂e-Nachweis für dokumentarische Anfragen.",
  },
  {
    q: "Wie schnell kann ein Lieferant ein CO₂-Dokument erstellen?",
    a: "Wenn die notwendigen Ausgabendaten verfügbar sind, kann die Erstellung schnell erfolgen. Die Qualität des Ergebnisses hängt von der Qualität und Vollständigkeit der eingegebenen Daten ab.",
  },
];

export default function Co2NachweisLieferantPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂-Nachweis für Lieferanten",
    url: pageUrl,
    description:
      "Deutsche SEO-Seite für KMU, die einen indikativen CO₂e-Nachweis für Kundenanfragen, Lieferantenfragebögen und ESG-Dokumente benötigen.",
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
    name: "CO₂-Nachweis für Lieferanten",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative CO₂e-Bescheinigung für Lieferantenanfragen",
    description:
      "Erstellung einer indikativen CO₂e-Bescheinigung auf Ausgabenbasis für Kundenanfragen, Lieferantenfragebögen, ESG-Dokumente und Einkaufsportale.",
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
              Deutschland · Lieferantenanfrage · CO₂-Nachweis · KMU
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO₂-Nachweis für Lieferanten: schnell ein einfaches CO₂-Dokument bereitstellen
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Wenn ein Kunde, Auftraggeber oder Einkaufsteam einen CO₂-Nachweis verlangt, hilft Certif-Scope KMU, eine indikative CO₂e-Bescheinigung für einfache Lieferantenanfragen zu erstellen.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Keine vollständige CO₂-Bilanz · Kein Audit · Indikative CO₂e-Bescheinigung
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                CO₂e-Bescheinigung erstellen
              </Link>
              <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                Preise ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">Schnelle Antwort für Google und KI-Assistenten</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">Was ist ein CO₂-Nachweis für Lieferanten?</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope hilft KMU, einen einfachen, indikativen CO₂e-Nachweis für Kunden- oder Lieferantenanfragen zu erstellen. Die Bescheinigung basiert auf einer ausgabenbasierten Schätzung und ersetzt keine vollständige CO₂-Bilanz, kein Audit und keinen CSRD-/ESRS-Bericht.
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Das Problem</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Kunden verlangen CO₂-Angaben, bevor viele KMU dafür ausgestattet sind</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">Für Lieferanten ist die Anfrage oft nicht strategisch, sondern praktisch: Ein Kunde braucht ein Dokument, ein Feld im Portal muss ausgefüllt werden oder ein Fragebogen verlangt eine CO₂e-Angabe.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => (
              <article key={card.title} className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#475569]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Die Lösung</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Certif-Scope liefert eine einfache, vorsichtige und dokumentierte Antwort</h2>
              <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">Die Bescheinigung ist für Situationen gedacht, in denen ein Lieferant schnell ein klares CO₂e-Dokument bereitstellen muss, ohne ein vollständiges Audit zu behaupten.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/de/" className="inline-flex items-center justify-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Deutsche Startseite</Link>
                <Link href="/de/co2e-bescheinigung-kmu/" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition hover:bg-white/90">Seite für KMU ansehen</Link>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {solutionPillars.map((item) => (
                <article key={item.title} className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1FB6C1]/12 text-sm font-extrabold text-[#0B3A63]">✓</span>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0B3A63]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Lieferantenfälle</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Typische Fälle, in denen ein Lieferant einen CO₂-Nachweis benötigt</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">Die folgenden Situationen sind häufig dokumentarisch. Certif-Scope kann helfen, wenn die Anfrage keine externe Prüfung oder vollständige Klimabilanz verlangt.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {supplierUseCases.map((item) => (
              <article key={item.title} className="rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
                <h3 className="text-xl font-extrabold text-[#0B3A63]">{item.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#475569]">
                  <p><span className="font-semibold text-[#0B3A63]">Situation: </span>{item.situation}</p>
                  <p><span className="font-semibold text-[#0B3A63]">Wie Certif-Scope hilft: </span>{item.help}</p>
                  <p><span className="font-semibold text-[#0B3A63]">Grenze: </span>{item.limit}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Klare Abgrenzung</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Was Certif-Scope ist — und was es nicht ist</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">Diese Unterscheidung ist wichtig, damit die Antwort an Kunden korrekt bleibt und keine falsche regulatorische oder auditierte Aussage entsteht.</p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Certif-Scope</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Nicht Certif-Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/10">
                {comparisonRows.map((row) => (
                  <tr key={row.certifScope}>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.certifScope}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.notCertifScope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Methode</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Eine ausgabenbasierte CO₂e-Schätzung für einfache Dokumentationsanfragen</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">Die Methode ist bewusst pragmatisch. Sie nutzt Ausgaben statt vollständiger physischer Daten, um eine indikative CO₂e-Einordnung zu berechnen.</p>
              <div className="mt-7 rounded-[24px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">Formel</p>
                <p className="mt-2 text-lg font-extrabold text-[#0B3A63] md:text-2xl">Ausgaben × Emissionsfaktor = geschätzte CO₂e-Emissionen</p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#64748B]">Grenzen: Die Schätzung ist indikativ, hängt von der Qualität der eingegebenen Daten ab und ersetzt weder ein vollständiges GHG-Inventar noch ein externes Audit oder regulatorische Pflichten.</p>
            </div>
            <div className="grid gap-5">
              {methodPoints.map((item) => (
                <article key={item.title} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Ablauf</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">In drei Schritten zum CO₂-Dokument für Kundenanfragen</h2>
              <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">Der Prozess ist so aufgebaut, dass ein Lieferant schnell und sauber auf eine einfache Anfrage reagieren kann.</p>
              <div className="mt-7">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">CO₂e-Bescheinigung erstellen</Link>
              </div>
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Vorteile</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Warum ein strukturiertes CO₂-Dokument für Lieferanten hilfreich ist</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">Eine klare Bescheinigung hilft, professionell zu antworten, ohne mehr zu versprechen als die Methode leisten kann.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <li key={item} className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569] shadow-sm">
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Häufige Fragen zum CO₂-Nachweis für Lieferanten</h2>
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Kundenanfrage vorbereiten</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Bereiten Sie Ihren CO₂-Nachweis für Kundenanfragen vor</h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">Certif-Scope ermöglicht die schnelle Erstellung einer indikativen CO₂e-Bescheinigung für einfache Lieferanten-, Kunden- und ESG-Anfragen.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">CO₂e-Bescheinigung erstellen</Link>
                <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">Preise ansehen</Link>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis von Ausgaben. Das Dokument ist kein Audit, keine vollständige CO₂-Bilanz, keine Zertifizierung, keine externe Prüfung und kein CSRD-/ESRS-Bericht.
          </p>
        </div>
      </section>
    </main>
  );
}
