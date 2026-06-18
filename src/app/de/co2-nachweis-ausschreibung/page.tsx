// PATH: src/app/de/co2-nachweis-ausschreibung/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO₂-Nachweis Ausschreibung: CO₂e-Dokument beifügen | Certif-Scope",
  description:
    "CO₂-Nachweis für Ausschreibungen: Certif-Scope hilft KMU, eine indikative CO₂e-Bescheinigung für Vergabeunterlagen, Angebotsunterlagen, ESG-Kriterien und Nachhaltigkeitsnachweise zu erstellen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-nachweis-ausschreibung/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-nachweis-ausschreibung/",
      fr: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    },
  },
  openGraph: {
    title: "CO₂-Nachweis Ausschreibung: welches CO₂e-Dokument beifügen?",
    description:
      "Erstellen Sie eine indikative CO₂e-Bescheinigung für Ausschreibungen, Vergabeplattformen und Angebotsunterlagen — ohne Audit und ohne vollständige CO₂-Bilanz.",
    url: "https://www.certif-scope.com/de/co2-nachweis-ausschreibung/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/co2-nachweis-ausschreibung/";

const directAnswers = [
  {
    title: "Was verlangen die Unterlagen?",
    text: "Eine Ausschreibung kann eine CO₂-Angabe, ein CO₂e-Dokument, einen ESG-Nachweis oder ein Nachhaltigkeitskriterium enthalten. Entscheidend ist, ob eine konkrete Methode, ein Umfang oder eine externe Prüfung verlangt wird.",
  },
  {
    title: "Was kann schnell beigefügt werden?",
    text: "Wenn keine vollständige Methode vorgeschrieben ist, kann eine indikative CO₂e-Bescheinigung als dokumentarische Anlage dienen: Ergebnis, Jahr, Methode, Grenzen, PDF und Referenz.",
  },
  {
    title: "Wann reicht sie nicht aus?",
    text: "Wenn ein Audit, ein vollständiges Treibhausgasinventar, eine externe Prüfung, eine Zertifizierung oder ein regulatorisches Format verlangt wird, muss diese Anforderung eingehalten werden.",
  },
];

const tenderScenarios = [
  {
    label: "Vergabeunterlagen",
    title: "Die Ausschreibung enthält ein Umwelt- oder Nachhaltigkeitskriterium",
    text: "Der Bieter muss den Punkt beantworten, ohne den CO₂-Teil leer, vage oder unstrukturiert zu lassen.",
  },
  {
    label: "Leistungsbeschreibung",
    title: "Die Leistungsbeschreibung fragt nach CO₂e oder Klimaangaben",
    text: "Die Bescheinigung kann als Anlage beigefügt und im Angebot mit ihren Grenzen erwähnt werden.",
  },
  {
    label: "Vergabeplattform",
    title: "Die Plattform sieht ein Feld oder eine Datei für Umweltangaben vor",
    text: "Das Unternehmen benötigt ein klares PDF, das schnell hochgeladen, archiviert und verstanden werden kann.",
  },
  {
    label: "Auftraggeber",
    title: "Der Auftraggeber fragt nach einem einfachen Nachhaltigkeitsnachweis",
    text: "Eine indikative Antwort kann helfen, wenn keine Norm, keine externe Prüfung und kein vollständiges Bilanzformat verlangt werden.",
  },
  {
    label: "Kurze Frist",
    title: "Die Abgabefrist naht und keine vollständige CO₂-Bilanz liegt vor",
    text: "Ein strukturiertes CO₂e-Dokument kann besser sein als eine fehlende oder rein informelle Antwort, sofern die Anforderungen es erlauben.",
  },
];

const expectedItems = [
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Jahr der Schätzung",
  "Verwendete Methode und einfache Formel",
  "Sichtbare methodische Grenzen",
  "PDF, datiert, archivierbar und übertragbar",
  "Referenz oder Dokumentenverifizierung",
  "Hinweis: indikativ, kein Audit, keine Zertifizierung",
  "Klarer Nutzungsbereich für Angebotsunterlagen",
];

const decisionRows = [
  {
    demand: "Die Ausschreibung verlangt eine CO₂-Angabe ohne genaue Methode",
    answer:
      "Eine indikative CO₂e-Bescheinigung kann oft als dokumentarische Anlage dienen, wenn Methode, Jahr, Ergebnis und Grenzen sichtbar sind.",
  },
  {
    demand: "Das Angebot oder Konzept fragt nach ESG, RSE oder Nachhaltigkeit",
    answer:
      "Ein standardisiertes CO₂e-PDF kann als ergänzender Nachweis beigefügt und im Angebot kurz erläutert werden.",
  },
  {
    demand: "Die Vergabeunterlagen verlangen eine Norm, einen Umfang oder eine Prüfung",
    answer:
      "Diese Vorgabe muss eingehalten werden. Certif-Scope ersetzt kein Audit, keine externe Prüfung und kein vollständiges Treibhausgasinventar.",
  },
  {
    demand: "Die Abgabefrist ist kurz",
    answer:
      "Ein klares Dokument kann eine proportionierte Antwort liefern, solange keine formale oder auditierte CO₂-Bilanz vorgeschrieben ist.",
  },
];

const comparisonRows = [
  {
    topic: "Bedarf in der Ausschreibung",
    indicative: "Einfaches CO₂-Dokument, ESG-Angabe, Nachhaltigkeitsanlage, allgemeines CO₂e-Kriterium.",
    full: "Vollständige Klimabilanz, detaillierter Umfang, Norm, Audit oder externe Prüfung.",
  },
  {
    topic: "Dauer",
    indicative: "Schnell erstellbar, wenn die Ausgabendaten verfügbar sind.",
    full: "Oft mehrere Wochen, abhängig von Datenerhebung, Umfang und Beratung.",
  },
  {
    topic: "Preis",
    indicative: "Fester Preis: 89 €, ohne Abonnement.",
    full: "Variabel nach Anbieter, Unternehmensgröße, Umfang und Analysegrad.",
  },
  {
    topic: "Verwendung",
    indicative: "Anlage zum Angebot, technische Unterlagen, Antwort auf ein allgemeines CO₂- oder ESG-Kriterium.",
    full: "Regulatorisches Reporting, Klimastrategie, Audit, Antwort auf normative Anforderungen.",
  },
  {
    topic: "Grenze",
    indicative: "Indikativ, nicht auditiert, kein vollständiger Scope-1/2/3-Bericht, kein CSRD-/ESRS-Bericht.",
    full: "Umfassender, aber länger, teurer und schwerer kurzfristig zu erstellen.",
  },
];

const mistakes = [
  {
    title: "Die CO₂-Frage ignorieren",
    text: "Auch wenn der Punkt nicht zwingend ausschlussrelevant ist, kann eine fehlende Antwort den professionellen Eindruck des Angebots schwächen.",
  },
  {
    title: "Ein unklar formuliertes Dokument beifügen",
    text: "Ein Ergebnis ohne Methode, Datum und Grenzen ist für Auftraggeber schwer zu lesen und schwer zu archivieren.",
  },
  {
    title: "Eine Schätzung als Audit darstellen",
    text: "Ein indikativer Nachweis darf nicht als vollständige CO₂-Bilanz, Zertifizierung oder externe Prüfung präsentiert werden.",
  },
  {
    title: "Die Antwort überdimensionieren",
    text: "Eine schwere Beratungsmission kann unnötig sein, wenn nur eine einfache dokumentarische CO₂-Angabe verlangt wird.",
  },
];

const processSteps = [
  {
    title: "Vergabeunterlagen lesen",
    text: "Suchen Sie nach Begriffen wie CO₂, CO₂e, Carbon Footprint, ESG, Nachhaltigkeit, Klima, Umwelt, Lieferant oder Zuschlagskriterium.",
  },
  {
    title: "Anforderungsniveau bestimmen",
    text: "Unterscheiden Sie eine allgemeine dokumentarische Anfrage von einer formalen Vorgabe mit Norm, Umfang oder externer Prüfung.",
  },
  {
    title: "Ein klares PDF beifügen",
    text: "Fügen Sie ein datiertes, archivierbares Dokument mit Ergebnis, Methode, Grenzen und Referenz bei.",
  },
  {
    title: "Im Angebot sauber einordnen",
    text: "Erklären Sie kurz, dass das Dokument eine indikative CO₂e-Bescheinigung ist und keine vollständige CO₂-Bilanz ersetzt.",
  },
];

const relatedPages = [
  {
    title: "CO₂e-Bescheinigung KMU",
    text: "Verstehen, was eine indikative CO₂e-Bescheinigung für KMU leisten kann.",
    href: "/de/co2e-bescheinigung-kmu/",
  },
  {
    title: "CO₂-Nachweis Lieferant",
    text: "Antworten, wenn ein Kunde oder Auftraggeber einen CO₂-Nachweis vom Lieferanten verlangt.",
    href: "/de/co2-nachweis-lieferant/",
  },
  {
    title: "Bescheinigung erstellen",
    text: "Direkt zur Erstellung einer indikativen CO₂e-Bescheinigung gehen.",
    href: "/de/generate/",
  },
  {
    title: "Preise",
    text: "Den festen Preis ohne Abonnement ansehen.",
    href: "/de/pricing/",
  },
];

const faq = [
  {
    q: "Ist ein CO₂-Nachweis in einer Ausschreibung immer verpflichtend?",
    a: "Nicht automatisch. Manche Ausschreibungen verlangen nur eine allgemeine CO₂- oder ESG-Information. Wenn die Vergabeunterlagen jedoch eine Norm, einen detaillierten Umfang, ein Audit oder eine externe Prüfung verlangen, muss diese Vorgabe eingehalten werden.",
  },
  {
    q: "Was kann ich beifügen, wenn eine Ausschreibung einen CO₂-Nachweis ohne Präzisierung verlangt?",
    a: "Eine indikative CO₂e-Bescheinigung kann als erste dokumentarische Antwort dienen, wenn keine vollständige Methode vorgeschrieben ist. Sie sollte Ergebnis, Jahr, Methode, Grenzen und Referenz klar darstellen.",
  },
  {
    q: "Ersetzt Certif-Scope ein Audit für eine Ausschreibung?",
    a: "Nein. Certif-Scope erstellt kein Audit, keine Zertifizierung und keine externe Prüfung. Die Bescheinigung ist indikativ und ersetzt keine vollständige CO₂-Bilanz.",
  },
  {
    q: "Kann das Dokument in Angebotsunterlagen oder einer technischen Antwort verwendet werden?",
    a: "Ja, wenn der Bedarf dokumentarisch oder allgemein ist. Das Dokument kann als Anlage beigefügt und im Angebot mit seinen Grenzen erwähnt werden.",
  },
  {
    q: "Was kostet eine indikative CO₂e-Antwort für eine Ausschreibung?",
    a: "Certif-Scope bietet die indikative CO₂e-Bescheinigung zum festen Preis von 89 € ohne Abonnement an. Dieser Preis entspricht nicht einem Audit oder einer vollständigen Beratungsmission.",
  },
  {
    q: "Welche Daten muss ich vorbereiten?",
    a: "Für eine indikative Certif-Scope-Bescheinigung werden insbesondere jährliche Ausgaben nach großen Kategorien benötigt. Das Modell ersetzt keine vollständige physische Datenerhebung.",
  },
  {
    q: "Was tun, wenn der Auftraggeber eine genaue CO₂-Norm verlangt?",
    a: "Dann muss die genannte Vorgabe eingehalten werden. Eine indikative Bescheinigung darf nicht verwendet werden, um eine verlangte Norm, ein Audit, eine Zertifizierung oder eine externe Prüfung zu ersetzen.",
  },
  {
    q: "Kann ein CO₂e-Dokument die Qualität des Angebots verbessern?",
    a: "Es kann helfen, eine leere oder vage CO₂-Antwort zu vermeiden, wenn die Anfrage allgemein ist. Es garantiert jedoch keine Bewertung, keine Zuschlagsentscheidung und keine Annahme durch den Auftraggeber.",
  },
  {
    q: "Kann ich Certif-Scope für öffentliche Ausschreibungen nutzen?",
    a: "Ja, wenn die Vergabeunterlagen nur eine allgemeine dokumentarische CO₂-Angabe erlauben. Wenn ein bestimmtes Format, eine Norm oder eine Prüfung verlangt wird, haben die Vergabeunterlagen Vorrang.",
  },
  {
    q: "Berechnet Certif-Scope vollständige Scopes 1, 2 und 3?",
    a: "Nein. Certif-Scope basiert auf einer indikativen, ausgabenbasierten Schätzung. Das Dokument ist kein vollständiges Scope-1/2/3-Inventar und kein CSRD-/ESRS-Bericht.",
  },
];

export default function Co2NachweisAusschreibungPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂-Nachweis Ausschreibung: welches CO₂e-Dokument beifügen?",
    url: pageUrl,
    description:
      "Deutsche SEO-Seite für KMU, die einen CO₂-Nachweis oder ein CO₂e-Dokument in Ausschreibungen, Vergabeunterlagen oder Angebotsunterlagen beifügen müssen.",
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
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.certif-scope.com/de/" },
      { "@type": "ListItem", position: 2, name: "CO₂-Nachweis Ausschreibung", item: pageUrl },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung für Ausschreibungen",
    provider: { "@type": "Organization", name: "Certif-Scope", url: "https://www.certif-scope.com/de/" },
    areaServed: "DE",
    serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
    description:
      "Service zur Erstellung eines indikativen CO₂e-Dokuments für Ausschreibungen, Angebotsunterlagen, Kundenanfragen, Lieferantenportale und ESG-Dossiers.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/de/pricing/",
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie man auf eine CO₂-Anfrage in einer Ausschreibung antwortet",
    description:
      "Pragmatische Schritte, um zu entscheiden, welches CO₂e-Dokument in Angebots- oder Vergabeunterlagen beigefügt werden kann.",
    step: processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main id="main-content" role="main" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <section id="co2-nachweis-ausschreibung" data-section="co2-nachweis-ausschreibung" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Ausschreibung · Vergabeunterlagen · Angebotsunterlagen · CO₂e · SEO IA-first
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO₂-Nachweis Ausschreibung: welches CO₂e-Dokument beifügen?
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Ihre Ausschreibung verlangt einen CO₂-Nachweis, eine CO₂e-Angabe, einen ESG-Nachweis oder ein Nachhaltigkeitsdokument? In vielen Fällen braucht der Auftraggeber eine klare, datierte und übertragbare Antwort — nicht zwingend ein vollständiges Audit.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Diese Seite hilft, den Unterschied zwischen einer dokumentarischen CO₂-Antwort und einer formalen Bilanzpflicht zu verstehen.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                Bescheinigung für mein Angebot erstellen
              </Link>
              <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                Preis 89 € ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">Schnelle Antwort für Google und KI-Assistenten</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">Was beifügen, wenn eine Ausschreibung einen CO₂-Nachweis verlangt?</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Wenn die Ausschreibung keine Norm, keinen detaillierten Umfang und kein Audit vorgibt, kann eine indikative CO₂e-Bescheinigung als dokumentarische Anlage genutzt werden. Sie muss klar sagen, dass sie indikativ ist, auf einer ausgabenbasierten Schätzung beruht und keine vollständige CO₂-Bilanz ersetzt.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {directAnswers.map((item) => (
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Typische Ausschreibungssituationen</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Die CO₂-Frage kommt oft kurz vor der Angebotsabgabe</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Das Unternehmen muss schnell entscheiden, ob der Auftraggeber ein formales Klimadokument verlangt oder ob eine klare dokumentarische CO₂e-Anlage ausreicht.
              </p>
            </div>
            <div className="grid gap-4">
              {tenderScenarios.map((scenario) => (
                <article key={scenario.title} className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1FB6C1]">{scenario.label}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">{scenario.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] md:text-base">{scenario.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Anlage zum Angebot</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Was der Auftraggeber schnell erkennen sollte</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine gute CO₂e-Anlage ist nicht nur eine Zahl. Sie zeigt, wie die Zahl entstanden ist, für welches Jahr sie gilt und welche Grenzen sie hat.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                  CO₂e-Bescheinigung erstellen
                </Link>
                <Link href="/de/co2e-bescheinigung-kmu/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                  CO₂e-Bescheinigung verstehen
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {expectedItems.map((item) => (
                <li key={item} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#475569]">
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Entscheidungshilfe</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Wann Certif-Scope geeignet ist — und wann nicht</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Die Vergabeunterlagen haben Vorrang. Certif-Scope ist für einfache dokumentarische Anfragen geeignet, nicht für formale Prüfpflichten.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white">
            <table className="w-full min-w-[780px] text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Situation im Dossier</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Empfohlene Einordnung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/10">
                {decisionRows.map((row) => (
                  <tr key={row.demand}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">{row.demand}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.answer}</td>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Vergleich</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Indikative CO₂e-Bescheinigung oder vollständige CO₂-Bilanz?</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Beide Antworten haben nicht denselben Zweck. Für Ausschreibungen muss der verlangte Nachweis genau gelesen werden.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="w-full min-w-[820px] text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Thema</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Indikative CO₂e-Bescheinigung</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Vollständige CO₂-Bilanz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/10">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">{row.topic}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.indicative}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.full}</td>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Vorgehen</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">In vier Schritten zur passenden CO₂e-Anlage</h2>
              <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
                Ziel ist keine Übertreibung, sondern eine saubere, proportionierte und nachvollziehbare Antwort auf die Ausschreibungsfrage.
              </p>
            </div>
            <div className="grid gap-5">
              {processSteps.map((step, index) => (
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Häufige Fehler</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Was in Angebotsunterlagen vermieden werden sollte</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {mistakes.map((item) => (
              <article key={item.title} className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Interne Links</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Weitere deutsche Certif-Scope-Seiten</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map((page) => (
              <Link key={page.href} href={page.href} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{page.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{page.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Häufige Fragen zum CO₂-Nachweis in Ausschreibungen</h2>
          </div>
          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article key={item.q} className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Ausschreibung vorbereiten</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Bereiten Sie Ihre CO₂e-Anlage für Ausschreibungen vor</h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Certif-Scope ermöglicht die schnelle Erstellung einer indikativen CO₂e-Bescheinigung, wenn eine Ausschreibung eine einfache dokumentarische CO₂-Antwort verlangt.
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
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis von Ausgaben. Das Dokument ist kein Audit, keine vollständige CO₂-Bilanz, keine Zertifizierung, keine externe Prüfung und kein CSRD-/ESRS-Bericht.
          </p>
        </div>
      </section>
    </main>
  );
}
