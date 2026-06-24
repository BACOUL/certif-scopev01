// PATH: src/app/de/co2-bilanz-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/de/co2-bilanz-kmu/";

export const metadata: Metadata = {
  title:
    "CO2-Bilanz KMU: Pflicht, Kosten, Beispiel und Alternative | Certif-Scope",
  description:
    "Guide für KMU in Deutschland: CO2-Bilanz, Kosten, Beispiele, Kunden-, Bank- und Ausschreibungsanfragen sowie eine indikative CO₂e-Bescheinigung als einfache dokumentarische Antwort.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    },
  },
  openGraph: {
    title: "CO2-Bilanz KMU: Pflicht, Kosten, Beispiel und Alternative",
    description:
      "Was kann ein KMU bereitstellen, wenn ein Dritter eine CO2-Bilanz oder ein CO₂e-Dokument anfragt? Einordnung zu Pflicht, Kosten, Anwendungsfällen und indikativer Bescheinigung.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const directAnswers = [
  {
    title: "Ist jedes KMU verpflichtet?",
    text: "Nein. Viele KMU erhalten CO2-Anfragen im Kunden-, Bank-, Versicherungs- oder Lieferantenkontext, ohne dass daraus automatisch eine allgemeine Pflicht zu einer detaillierten CO2-Bilanzierung entsteht.",
  },
  {
    title: "Was lässt sich schnell bereitstellen?",
    text: "Wenn die Anfrage dokumentarisch bleibt, kann eine indikative CO₂e-Bescheinigung als erste Antwort dienen: aggregiertes Ergebnis, Methode, Jahr, Grenzen, PDF und prüfbare Kennung.",
  },
  {
    title: "Wann braucht es eine detaillierte Bilanzierung?",
    text: "Wenn eine Norm, ein genauer Umfang, eine externe Prüfung oder regulatorische Berichterstattung ausdrücklich verlangt wird, muss dieses Verfahren befolgt werden.",
  },
];

const useCases = [
  {
    label: "Kunde",
    title: "Ein Kunde fragt ein CO2-Dokument an",
    text: "Sie müssen einem Kundendossier eine klare Antwort beilegen, ohne sofort eine umfassende Carbon-Analyse zu starten.",
  },
  {
    label: "Lieferant",
    title: "Ein Auftraggeber verlangt einen CO₂e-Nachweis",
    text: "Sie sollen in einem Lieferanten- oder Einkaufsfragebogen eine lesbare Carbon-Information bereitstellen.",
  },
  {
    label: "Bank",
    title: "Eine Bank fragt ein Umweltelement an",
    text: "Sie möchten ein Unternehmensdossier mit einer einfachen, datierten und übermittelbaren CO₂e-Information ergänzen.",
  },
  {
    label: "Versicherung",
    title: "Ein Versicherer fragt ESG- oder Carbon-Angaben an",
    text: "Sie benötigen ein indikatives Dokument, ohne es als externe Prüfung oder umfassende Treibhausgasinventur darzustellen.",
  },
  {
    label: "Ausschreibung",
    title: "Ein Dossier nennt ein CO2- oder ESG-Kriterium",
    text: "Sie müssen schnell auf eine allgemeine Anforderung reagieren, wenn kein detaillierter Carbon-Standard vorgeschrieben ist.",
  },
];

const expectedItems = [
  "Name des Unternehmens oder der deklarierten Einheit",
  "Abgedecktes Jahr der Schätzung",
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Verwendete Methode und allgemeine Formel",
  "Sichtbare methodische Grenzen",
  "Ausstellungsdatum und dokumentarische Einordnung",
  "Kennung für die Dokumentenprüfung",
  "Archivierbares PDF zur Weitergabe an Kunden, Finanzierer oder Auftraggeber",
];

const comparisonRows = [
  {
    topic: "Ziel",
    indicative:
      "Schnell auf eine dokumentarische Anfrage oder ein Screening antworten.",
    full: "Eine detaillierte Treibhausgasbetrachtung für Strategie und Steuerung aufbauen.",
  },
  {
    topic: "Benötigte Daten",
    indicative: "Jahresausgaben nach großen Kategorien.",
    full: "Physische Daten, interne Erhebung, Annahmen, Grenzen und detaillierte Faktoren.",
  },
  {
    topic: "Dauer",
    indicative: "Wenige Minuten, wenn die Beträge vorliegen.",
    full: "Je nach Datenerhebung, Umfang und Begleitung häufig mehrere Wochen.",
  },
  {
    topic: "Preis",
    indicative: "Festpreis: 89 €, einmalige Zahlung, ohne Abo.",
    full: "Variabel je nach Größe, Umfang, Dienstleister und Detailtiefe.",
  },
  {
    topic: "Geeignete Nutzung",
    indicative:
      "Einfache Anfrage von Kunden, Lieferanten, Banken, Versicherern oder Ausschreibungen.",
    full: "Vertiefte Berichterstattung, Reduktionsplan, Klimasteuerung oder formale Anforderung.",
  },
  {
    topic: "Grenze",
    indicative:
      "Indikativ, keine externe Prüfung, keine CSRD-/ESRS-Berichterstattung und keine detaillierte Scope-1/2/3-Inventur.",
    full: "Detailreicher, aber länger, kostenintensiver und aufwendiger zu erstellen.",
  },
];

const decisionRows = [
  {
    signal:
      'Die Anfrage nennt allgemein "CO2-Bilanz", "CO₂e" oder "ESG-Unterlage"',
    response:
      "Den erwarteten Detailgrad klären und eine indikative CO₂e-Bescheinigung prüfen, wenn kein genauer Rahmen vorgegeben ist.",
  },
  {
    signal: "Das Dossier schreibt eine Norm, einen Umfang oder eine externe Prüfung vor",
    response:
      "Die angegebene Anforderung befolgen: Eine indikative Bescheinigung ist nicht für dieses Nachweisniveau gedacht.",
  },
  {
    signal: "Der Bedarf ist dringend für ein Kunden- oder Lieferantendossier",
    response:
      "Ein datiertes Dokument mit sichtbaren Grenzen und prüfbarer Kennung erstellen und die übermittelten Angaben intern nachvollziehbar halten.",
  },
  {
    signal: "Das Unternehmen will eine Klimastrategie intern steuern",
    response:
      "Eine weitergehende Vorgehensweise mit physischen Daten und detaillierter Analyse der Emissionsposten einplanen.",
  },
];

const relatedGuides = [
  {
    title: "CO2-Bilanz vs CO2-Bescheinigung",
    text: "Die Unterschiede zwischen detaillierter Bilanzierung und indikativer Bescheinigung sauber einordnen.",
    href: "/de/co2-bilanz-vs-co2-bescheinigung/",
  },
  {
    title: "Methodik von Certif-Scope",
    text: "Verstehen, wie die spend-based CO₂e-Schätzung aufgebaut ist und wo ihre Grenzen liegen.",
    href: "/de/methodik/",
  },
  {
    title: "CO2-Bescheinigung für KMU",
    text: "Einordnen, wann eine indikative CO₂e-Bescheinigung für einfache Anfragen geeignet sein kann.",
    href: "/de/co2-bescheinigung-kmu/",
  },
  {
    title: "Grenzen und Compliance",
    text: "Nachlesen, was Certif-Scope leisten kann und was ausdrücklich außerhalb des Produkts liegt.",
    href: "/de/grenzen-und-compliance/",
  },
  {
    title: "Bank- und ESG-Unterlagen für KMU",
    text: "Eine einfache Carbon-Unterlage für Bank- oder Finanzierungsgespräche vorsichtig einordnen.",
    href: "/de/bank-esg-unterlagen-kmu/",
  },
  {
    title: "Scope 1, 2 und 3 erklärt",
    text: "Die wichtigsten Scope-Begriffe verstehen, ohne Certif-Scope als detaillierte Scope-Inventur zu verwenden.",
    href: "/de/scope-1-2-3-erklaert/",
  },
];

const faq = [
  {
    q: "Muss ein KMU immer eine CO2-Bilanz erstellen?",
    a: "In vielen Fällen besteht für ein KMU keine allgemeine Pflicht zu einer detaillierten CO2-Bilanzierung. Anfragen entstehen häufig vertraglich oder administrativ: Kunde, Lieferant, Bank, Versicherung, Ausschreibung oder ESG-Fragebogen.",
  },
  {
    q: "Was kann ein KMU liefern, wenn ein Kunde eine CO2-Bilanz anfragt?",
    a: "Zuerst sollte geprüft werden, welches Nachweisniveau verlangt wird. Bei einer allgemeinen Anfrage kann ein datiertes, archivierbares und klar begrenztes CO₂e-Dokument eine saubere erste Antwort sein. Wenn der Kunde eine Norm, einen Umfang oder eine externe Prüfung verlangt, muss diese Anforderung befolgt werden.",
  },
  {
    q: "Was ist der Unterschied zwischen einer indikativen CO₂e-Bescheinigung und einer detaillierten Bilanzierung?",
    a: "Eine indikative CO₂e-Bescheinigung beantwortet eine Screening- oder Dokumentenanfrage mit aggregiertem Ergebnis und klaren Grenzen. Eine detaillierte Bilanzierung zielt auf eine umfassendere Treibhausgasbetrachtung mit Aktivitätsdaten, Annahmen, Systemgrenzen und oft fachlicher Begleitung.",
  },
  {
    q: "Ersetzt die Certif-Scope-Bescheinigung eine externe Carbon-Prüfung?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung. Sie ist nicht extern geprüft, nicht regulatorisch und nicht gleichzusetzen mit CSRD-/ESRS-Berichterstattung oder einer detaillierten Treibhausgasinventur.",
  },
  {
    q: "Was kostet eine einfache Carbon-Antwort für KMU?",
    a: "Die Kosten hängen vom erwarteten Detailgrad ab. Eine standardisierte indikative Antwort ist deutlich leichter als eine vertiefte Bilanzierung. Certif-Scope bietet eine indikative CO₂e-Bescheinigung für 89 €, ohne Abo.",
  },
  {
    q: "Welche Daten werden für eine indikative Bescheinigung benötigt?",
    a: "Für eine spend-based Schätzung reichen Jahresausgaben nach großen Kategorien. Das Modell benötigt keine detaillierten physischen Daten wie kWh, Kilometer oder Liter.",
  },
  {
    q: "Enthält das Dokument eine Dokumentenprüfung?",
    a: "Ja. Die Bescheinigung ist so gestaltet, dass zentrale Dokumentinformationen über eine Referenz oder Kennung geprüft werden können.",
  },
  {
    q: "Kann eine CO₂e-Bescheinigung in einem Lieferantendossier genutzt werden?",
    a: "Ja, wenn die Anfrage ein einfaches Carbon-Dokument oder ein Screening-Element betrifft. Sie darf nicht als externe Carbon-Prüfung oder regulatorische Treibhausgasinventur dargestellt werden.",
  },
  {
    q: "Kann eine Bank ein solches Dokument anfragen?",
    a: "Eine Bank kann in einem Unternehmensdossier ein Umweltelement anfragen. Eine indikative Bescheinigung kann bei einer einfachen dokumentarischen Anfrage helfen, wenn keine regulatorische Methode oder detaillierte Prüfung verlangt wird.",
  },
  {
    q: "Was tun, wenn eine Ausschreibung eine CO2-Bilanz verlangt?",
    a: "Das Leistungsverzeichnis muss genau gelesen werden. Wenn Methode, Umfang oder Format verbindlich vorgegeben sind, müssen diese Vorgaben befolgt werden. Wenn die Anfrage allgemein bleibt, kann ein indikatives CO₂e-Dokument eine strukturierte erste Antwort sein.",
  },
  {
    q: "Berechnet Certif-Scope Scope 1, Scope 2 und Scope 3 detailliert?",
    a: "Nein. Certif-Scope nutzt eine indikative Methode auf Basis aggregierter Ausgaben. Das Dokument ist keine detaillierte Inventur der Scopes 1, 2 und 3.",
  },
  {
    q: "Wie schnell kann die Bescheinigung erstellt werden?",
    a: "Wenn die Grundinformationen und Jahresausgaben vorliegen, kann die Bescheinigung unmittelbar nach der Zahlung erstellt werden.",
  },
];

export default function CO2BilanzKMUPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bilanz KMU: Pflicht, Kosten, Beispiel und Alternative",
    url: pageUrl,
    description:
      "Guide für KMU, die eine CO2-Bilanz, eine CO₂e-Bescheinigung oder ein einfaches Carbon-Dokument anfragen oder bereitstellen müssen.",
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
        name: "CO2-Bilanz KMU",
        item: pageUrl,
      },
    ],
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
    serviceType: "Indikative spend-based CO₂e-Bescheinigung",
    description:
      "Service zur Erstellung eines indikativen CO₂e-Dokuments auf Basis aggregierter Jahresausgaben, für einfache Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen.",
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

      <section
        id="co2-bilanz-kmu"
        data-section="co2-bilanz-kmu"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Guide KMU · SEO · dokumentarische Antwort · Bank · Ausschreibung
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO2-Bilanz KMU: Pflicht, Kosten, Beispiel und schnelle Alternative
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Ein KMU braucht nicht in jedem Fall eine detaillierte
              CO2-Bilanzierung. Wenn es um ein einfaches Carbon-Dokument für
              Kunden, Lieferanten, Finanzierer, Versicherer oder Ausschreibungen
              geht, kann eine indikative CO₂e-Bescheinigung ausreichen, sofern
              Umfang und Grenzen klar benannt werden.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Diese Seite erklärt, was ein KMU bereitstellen kann, wann eine
              indikative CO₂e-Bescheinigung passt, wann eine detaillierte
              Bilanzierung nötig wird, was eine einfache Antwort kostet und wie
              ein indikatives Dokument nicht mit einer externen Carbon-Prüfung
              verwechselt wird.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                CO₂e-Bescheinigung erstellen
              </Link>

              <Link
                href="/de/preise/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Preis 89 € ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">
              Schnelle Antwort für Suche und KI-Assistenten
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Was kann ein KMU liefern, wenn eine CO2-Bilanz angefragt wird?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Wenn keine Norm, keine externe Prüfung und kein regulatorischer
              Umfang genannt werden, kann ein KMU häufig mit einer indikativen
              CO₂e-Bescheinigung beginnen. Das Dokument zeigt eine aggregierte,
              datierte und methodisch eingeordnete Schätzung. Es ist keine
              detaillierte CO2-Bilanzierung, kann aber eine einfache
              dokumentarische Anfrage beantworten.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {directAnswers.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5"
                >
                  <h3 className="text-base font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {item.text}
                  </p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Der eigentliche Bedarf
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Oft wird nicht wörtlich eine externe Prüfung verlangt
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Der Begriff CO2-Bilanz wird im Alltag breit verwendet. In der
                Praxis erhält ein KMU eher eine Anfrage nach einem
                Carbon-Dokument, einem CO₂e-Indikator, einer ESG-Unterlage oder
                einem Nachweis für ein Dossier.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Vor einer aufwendigen Bilanzierung sollte deshalb geprüft
                werden, was tatsächlich erwartet wird: eine einfache
                dokumentarische Information oder eine detaillierte
                Treibhausgasbetrachtung.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1FB6C1]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] md:text-base">
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Konkrete Antwort
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was sollte eine einfache Carbon-Antwort enthalten?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Wenn die Anfrage allgemein bleibt, kann ein Screening-Dokument
                ausreichen. Es sollte lesbar, datiert, archivierbar und
                transparent zu Ergebnis, Methode, Umfang und Grenzen sein.
              </p>
              <Link
                href="/de/erstellen/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Dokument jetzt erstellen
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {expectedItems.map((item) => (
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
              Vergleich für KMU
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Detaillierte CO2-Bilanzierung oder indikative CO₂e-Bescheinigung:
              was passt?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Die richtige Antwort hängt von der Anfrage ab. Certif-Scope ist
              für Situationen gedacht, in denen ein KMU eine strukturierte
              Carbon-Antwort liefern muss, ohne eine externe Prüfung
              darzustellen.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-white/16 bg-white/8">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="p-5 text-left font-semibold text-white">
                    Thema
                  </th>
                  <th className="p-5 text-left font-semibold text-white">
                    Indikative CO₂e-Bescheinigung
                  </th>
                  <th className="p-5 text-left font-semibold text-white">
                    Detaillierte CO2-Bilanzierung
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 font-semibold text-white">{row.topic}</td>
                    <td className="p-5 leading-relaxed text-white/82">
                      {row.indicative}
                    </td>
                    <td className="p-5 leading-relaxed text-white/82">
                      {row.full}
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Entscheidungsmethode
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Wie erkennen Sie, ob Certif-Scope ausreicht?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Eine indikative Bescheinigung passt, wenn die Anfrage
                dokumentarisch und allgemein ist. Sie sollte nicht verwendet
                werden, wenn ausdrücklich eine detaillierte Treibhausgasinventur,
                eine bestimmte Norm oder eine externe Prüfung gefordert wird.
              </p>
            </div>

            <div className="grid gap-5">
              {decisionRows.map((row, index) => (
                <article
                  key={row.signal}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Fall {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#0B3A63]">
                    {row.signal}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {row.response}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Certif-Scope-Lösung
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Eine indikative CO₂e-Bescheinigung für 89 €, wenn schnell ein
                  Dokument gebraucht wird
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
                  Das Dokument ist für Fälle konzipiert, in denen ein KMU eine
                  einfache, standardisierte und prüfbare Carbon-Antwort liefern
                  muss, ohne sie als regulatorische Bilanzierung oder externe
                  Prüfung darzustellen.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/de/erstellen/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
                >
                  Bescheinigung erstellen
                </Link>
                <Link
                  href="/de/methodik/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Methodik verstehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Interne SEO-Verknüpfung
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Verwandte Seiten zur Einordnung Ihres Falls
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Diese Seiten ergänzen den Hauptguide und helfen, das passende
              Dokument je nach Situation einzuordnen: Methode, Grenzen,
              Bankdossier, Scope-Begriffe oder CO₂e-Bescheinigung.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  {guide.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {guide.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  Guide lesen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ für Suche und KI-Assistenten
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zur CO2-Bilanz für KMU
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#475569]">
              Kurze und strukturierte Antworten für Geschäftsführung, Suchmaschinen
              und KI-Assistenten.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Schnelle Antwort · klarer Umfang · Dokument mit prüfbarer Kennung
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Brauchen Sie ein einfaches Carbon-Dokument für Ihr KMU?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Erstellen Sie eine indikative, datierte, standardisierte und
                  übermittelbare CO₂e-Bescheinigung, um auf eine Kunden-,
                  Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfrage
                  zu reagieren.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/de/erstellen/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Bescheinigung erstellen
                </Link>
                <Link
                  href="/de/grenzen-und-compliance/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Grenzen ansehen
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis
            aggregierter Ausgaben. Das Dokument ist keine externe Carbon-Prüfung,
            keine detaillierte Treibhausgasinventur, keine externe Verifizierung
            und keine CSRD-/ESRS-Berichterstattung.
          </p>
        </div>
      </section>
    </main>
  );
}
