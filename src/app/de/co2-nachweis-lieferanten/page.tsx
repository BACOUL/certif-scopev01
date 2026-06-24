// PATH: src/app/de/co2-nachweis-lieferanten/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "CO2-Nachweis Lieferanten: auf Kundenanfragen antworten | Certif-Scope",
  description:
    "Guide für KMU-Lieferanten: Was tun, wenn ein Kunde, Einkaufsteam oder Auftraggeber einen CO2-Nachweis, ein CO₂e-Dokument oder eine einfache Carbon-Unterlage verlangt.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-nachweis-lieferanten/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-nachweis-lieferanten/",
      fr: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    },
  },
  openGraph: {
    title: "CO2-Nachweis Lieferanten: was an Kunden übermitteln?",
    description:
      "Auf eine Carbon-Anfrage von Kunden oder Einkaufsteams mit einer indikativen, datierten und übermittelbaren CO₂e-Bescheinigung reagieren, ohne eine externe Prüfung zu ersetzen.",
    url: "https://www.certif-scope.com/de/co2-nachweis-lieferanten/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/co2-nachweis-lieferanten/";

const directAnswers = [
  {
    title: "Warum fragt Ihr Kunde danach?",
    text: "Ein Kunde, Auftraggeber oder ein Einkaufsteam kann ein Carbon-Dokument anfordern, um ein Lieferantendossier, einen Einkaufsfragebogen, ESG-Unterlagen oder eine interne Prüfung der Lieferkette zu ergänzen.",
  },
  {
    title: "Was lässt sich schnell bereitstellen?",
    text: "Wenn die Anfrage allgemein bleibt, kann eine indikative CO₂e-Bescheinigung eine klare dokumentarische Antwort liefern: aggregiertes Ergebnis, Methode, Jahr, Grenzen, PDF und prüfbare Kennung.",
  },
  {
    title: "Wann braucht es mehr?",
    text: "Wenn der Einkäufer eine Norm, eine externe Prüfung, eine externe Verifizierung oder einen detaillierten Umfang vorgibt, muss diese Anforderung beachtet werden statt ein indikatives Dokument zu verwenden.",
  },
];

const buyerScenarios = [
  {
    label: "Lieferantenfreigabe",
    title: "Lieferantenfreigabe vor der Validierung eines Kundenkontos",
    text: "Der Einkauf fragt ein Carbon-Dokument ab, um Ihr Dossier zu ergänzen, bevor Ihr Unternehmen als Lieferant freigegeben wird.",
  },
  {
    label: "Erneuerung",
    title: "Jährlicher ESG- oder Einkaufsfragebogen",
    text: "Ein bestehender Kunde fragt eine CO₂e-Information an, um sein Lieferantendossier zu aktualisieren.",
  },
  {
    label: "Einkaufsplattform",
    title: "Lieferantenportal mit Carbon-Feld",
    text: "Eine Einkaufsplattform verlangt einen Nachweis oder eine Carbon-Angabe, die als PDF hochgeladen werden kann.",
  },
  {
    label: "Großkunde",
    title: "Kunde möchte eine dokumentarische Unterlage archivieren",
    text: "Der Kunde benötigt ein lesbares, datiertes und übermittelbares Dokument für ein Lieferanten-Screening.",
  },
  {
    label: "Vertriebsdossier",
    title: "Umweltanfrage vor Vertragsabschluss oder Verlängerung",
    text: "Eine Carbon-Information kann vor der Unterzeichnung oder Erneuerung eines Vertrags angefragt werden.",
  },
];

const expectedItems = [
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Jahr, das von der Schätzung abgedeckt wird",
  "Deklarierte und verständliche Methode",
  "Sichtbare Grenzen des Dokuments",
  "Datiertes, archivierbares und übermittelbares PDF",
  "Referenz oder prüfbare Kennung",
  "Klar benannter Nutzungsrahmen",
  "Expliziter Hinweis: indikatives Dokument, keine externe Prüfung",
];

const decisionRows = [
  {
    demand: "Allgemeine Anfrage: Haben Sie einen CO2-Nachweis?",
    answer:
      "Zuerst das erwartete Niveau klären. Eine indikative CO₂e-Bescheinigung kann oft als erste dokumentarische Antwort dienen, wenn keine Methode vorgegeben ist.",
  },
  {
    demand: "Lieferantenfragebogen mit CO₂e- oder ESG-Feld",
    answer:
      "Ein standardisiertes PDF mit Ergebnis, Methode, Jahr und Grenzen ist in der Regel sauberer als eine informelle Tabellenangabe.",
  },
  {
    demand: "Lastenheft mit Norm, Umfang oder externer Prüfung",
    answer:
      "Die vorgegebene Anforderung hat Vorrang. Certif-Scope ersetzt keine externe Prüfung, keine umfassende Treibhausgasinventur und keine externe Verifizierung.",
  },
  {
    demand: "Einkäufer möchte mehrere Lieferanten vergleichen",
    answer:
      "Ein klares, datiertes Dokument mit prüfbarer Kennung erleichtert die Einordnung und reduziert Rückfragen im Dossier.",
  },
];

const comparisonRows = [
  {
    topic: "Bedarf im Einkauf",
    indicative:
      "Screening, Lieferantenfreigabe, Lieferantendossier, einfache ESG- oder CO₂e-Anfrage.",
    full:
      "Formale Anforderung, detaillierte Analyse, externe Prüfung, Reporting oder vorgegebene Methode.",
  },
  {
    topic: "Frist",
    indicative: "Wenige Minuten, wenn die Jahresausgaben verfügbar sind.",
    full: "Mehrere Wochen je nach Datenerhebung, Umfang und Begleitung.",
  },
  {
    topic: "Kosten",
    indicative: "Fester Preis: 89 €, ohne Abo.",
    full: "Variabel je nach Dienstleister, Unternehmensgröße, Umfang und Detailgrad.",
  },
  {
    topic: "Grenze",
    indicative:
      "Indikativ, keine externe Prüfung, keine umfassende Scope-1/2/3-Inventur, kein CSRD-/ESRS-Reporting.",
    full:
      "Passender für detaillierte Anforderungen, aber länger und schwerer umzusetzen.",
  },
];

const mistakes = [
  {
    title: "Zu lange warten",
    text: "Das Lieferantendossier bleibt offen, obwohl eine klare indikative Antwort den Austausch hätte voranbringen können.",
  },
  {
    title: "Eine detaillierte Bilanz versprechen",
    text: "Eine Scope-1/2/3-Betrachtung ohne belastbare Detaildaten kann die Glaubwürdigkeit der Antwort schwächen.",
  },
  {
    title: "Eine ungerahmte Datei senden",
    text: "Eine Tabelle ohne Methode, Datum und Grenzen ist für Einkaufsteams schwer einzuordnen und zu archivieren.",
  },
  {
    title: "Screening und externe Prüfung verwechseln",
    text: "Ein indikatives Dokument kann helfen, muss aber klar zeigen, dass es keine externe Carbon-Prüfung ersetzt.",
  },
];

const processSteps = [
  {
    title: "Kundenanfrage lesen",
    text: "Prüfen Sie, ob der Kunde eine einfache Carbon-Information, ein Lieferantendokument oder einen präzisen technischen Rahmen verlangt.",
  },
  {
    title: "Das passende Niveau wählen",
    text: "Bei einer dokumentarischen Anfrage kann eine indikative CO₂e-Bescheinigung passen. Wenn eine Methode vorgegeben ist, muss diese Methode befolgt werden.",
  },
  {
    title: "Ein klares PDF übermitteln",
    text: "Senden Sie ein datiertes, archivierbares Dokument mit prüfbarer Kennung und klaren Angaben zu Methode und Grenzen.",
  },
];

const relatedPages = [
  {
    title: "CO2-Bilanz KMU",
    text: "Verstehen, was ein KMU bei einer allgemeinen Carbon-Anfrage bereitstellen kann.",
    href: "/de/co2-bilanz-kmu/",
  },
  {
    title: "CO2-Bescheinigung KMU",
    text: "Verstehen, was eine indikative Bescheinigung ist und wann sie nützlich sein kann.",
    href: "/de/co2-bescheinigung-kmu/",
  },
  {
    title: "CO2-Angaben Ausschreibung",
    text: "Auf ein Dossier reagieren, in dem ein Carbon- oder ESG-Kriterium genannt wird.",
    href: "/de/co2-angaben-ausschreibung/",
  },
  {
    title: "Kosten einer Carbon-Antwort",
    text: "Den Preis einer indikativen Bescheinigung mit einer umfassenderen Vorgehensweise vergleichen.",
    href: "/de/co2-bilanz-kmu/kosten/",
  },
  {
    title: "Methodik Certif-Scope",
    text: "Die spend-based Methode, ihre Grenzen und ihren Nutzungsrahmen verstehen.",
    href: "/de/methodik/",
  },
  {
    title: "Preise CO₂e-Bescheinigung",
    text: "Den Preis eines indikativen CO₂e-Dokuments ohne Abo ansehen.",
    href: "/de/preise/",
  },
];

const faq = [
  {
    q: "Warum fragt ein Kunde nach einem CO2-Nachweis für Lieferanten?",
    a: "Häufig möchte der Kunde oder Einkauf ein Lieferantendossier ergänzen, ESG-Antworten vergleichen, ein CO₂e-Dokument archivieren oder den dokumentarischen Aufwand in der Lieferkette reduzieren.",
  },
  {
    q: "Braucht man immer eine externe Carbon-Prüfung?",
    a: "Nein, nicht automatisch. Wenn die Anfrage allgemein oder dokumentarisch ist, kann eine indikative CO₂e-Bescheinigung helfen. Wenn das Dossier eine Norm, einen genauen Umfang oder eine externe Verifizierung vorgibt, muss dieser Rahmen beachtet werden.",
  },
  {
    q: "Was sollte ein Carbon-Dokument für Lieferanten enthalten?",
    a: "Ein aggregiertes CO₂e-Ergebnis, das abgedeckte Jahr, die verwendete Methode, methodische Grenzen, ein Ausstellungsdatum, ein archivierbares PDF-Format und eine Referenz oder prüfbare Kennung.",
  },
  {
    q: "Ersetzt Certif-Scope eine detaillierte CO2-Bilanz?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung, nicht extern geprüft, nicht regulatorisch und nicht gleichzusetzen mit einer umfassenden Treibhausgasinventur oder CSRD-/ESRS-Berichterstattung.",
  },
  {
    q: "Wann ist die Bescheinigung nützlich?",
    a: "Sie ist nützlich für eine einfache Lieferantenanfrage, einen Einkaufsfragebogen, eine Kundenanfrage, ein ESG-Screening, ein Bankdossier oder eine Ausschreibung, die keine externe Prüfung verlangt.",
  },
  {
    q: "Kann eine CO₂e-Bescheinigung eine Lieferantenfreigabe erleichtern?",
    a: "Sie kann helfen, wenn der offene Punkt ein einfaches Carbon-Dokument ist. Sie sagt keine Annahme durch den Einkäufer zu, liefert aber eine strukturierte und übermittelbare Antwort.",
  },
  {
    q: "Welche Daten werden benötigt?",
    a: "Für die indikative Methode von Certif-Scope werden vor allem Jahresausgaben nach großen Kategorien genutzt. Das Dokument ersetzt keine detaillierte physische Datenerhebung wie kWh, Kilometer oder Liter.",
  },
  {
    q: "Was kostet die Lieferanten-Bescheinigung?",
    a: "Certif-Scope bietet eine indikative CO₂e-Bescheinigung für 89 € ohne Abo, um ein standardisiertes Dokument für Kunden- oder Lieferantendossiers zu erstellen.",
  },
  {
    q: "Kann das Dokument an einen Auftraggeber übermittelt werden?",
    a: "Ja, es ist als PDF zum Herunterladen und Weitergeben gedacht, etwa an Kunden, Einkaufsteams, Banken, Versicherer oder in berufliche Dossiers, mit sichtbaren Grenzen.",
  },
  {
    q: "Was tun, wenn der Kunde eine externe Verifizierung verlangt?",
    a: "Wenn eine externe Verifizierung, eine genaue Norm oder eine externe Prüfung ausdrücklich verlangt wird, reicht die indikative Bescheinigung nicht aus. Dann muss die Kundenanforderung oder das Lastenheft befolgt werden.",
  },
];

export default function CO2NachweisLieferantenPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Nachweis Lieferanten: was an Kunden übermitteln?",
    url: pageUrl,
    description:
      "Guide für KMU, die auf eine Lieferantenanfrage mit einer indikativen CO₂e-Bescheinigung antworten müssen, wenn das Dossier keine externe Prüfung verlangt.",
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
        name: "CO2-Nachweis Lieferanten",
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
      "Service zur Erstellung eines indikativen CO₂e-Dokuments für Lieferanten-, Einkaufs-, Kunden-, Bank-, Versicherungs- oder Ausschreibungsanfragen.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/de/preise/",
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

      <section
        id="co2-nachweis-lieferanten"
        data-section="co2-nachweis-lieferanten"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Lieferant · Kunde · Einkauf · KI-Suche
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO2-Nachweis Lieferanten: was übermitteln, wenn ein Kunde ihn verlangt?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Ein Kunde, Einkäufer oder Auftraggeber fragt einen CO2-Nachweis für
              Lieferanten an? In vielen Fällen sucht er zuerst ein klares,
              datiertes, archivierbares und übermittelbares CO₂e-Dokument, nicht
              zwingend eine externe Carbon-Prüfung.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Diese Seite erklärt, was Sie bereitstellen können, wie Sie eine
              Lieferantenfreigabe nicht blockieren, wann eine indikative
              CO₂e-Bescheinigung passen kann und wann eine weitergehende
              Anforderung Vorrang hat.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Lieferanten-Bescheinigung erstellen
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
              Schnelle Antwort für Google und KI-Assistenten
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Was tun, wenn ein Kunde einen CO2-Nachweis für Lieferanten verlangt?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Zuerst muss geklärt werden, ob der Kunde eine umfassende
              Treibhausgasinventur oder nur eine dokumentarische Unterlage
              erwartet. Wenn die Anfrage allgemein bleibt, kann eine indikative
              CO₂e-Bescheinigung eine erste strukturierte Antwort liefern. Wenn
              das Lastenheft eine Norm, eine externe Prüfung oder eine externe
              Verifizierung vorgibt, muss diese Anforderung beachtet werden.
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
                Reale Fälle auf Lieferantenseite
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Die Anfrage kommt oft, wenn das Dossier weitergehen muss
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Lieferanten haben nicht immer Zeit, eine umfassende Carbon-
                Vorgehensweise zu starten. Sie brauchen eine proportionierte,
                verständliche und übermittelbare dokumentarische Antwort für
                das Einkaufsteam.
              </p>
            </div>

            <div className="grid gap-4">
              {buyerScenarios.map((scenario) => (
                <article
                  key={scenario.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1FB6C1]">
                    {scenario.label}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                    {scenario.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] md:text-base">
                    {scenario.text}
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
                Erwarteter Inhalt
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was der Kunde im Dokument schnell lesen können sollte
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Ein gutes Lieferantendokument darf nicht mehr versprechen, als
                es abdeckt. Es sollte klar, begrenzt, datiert und leicht in ein
                Einkaufsdossier übertragbar sein.
              </p>
              <Link
                href="/de/erstellen/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                PDF jetzt erstellen
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
              Nicht überdimensionieren
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Das richtige Dokument hängt davon ab, was der Einkäufer wirklich verlangt
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Certif-Scope kann eine Screening-Antwort für Lieferanten
              unterstützen. Wenn der Einkäufer eine externe Prüfung, eine Norm
              oder eine externe Verifizierung vorgibt, muss diese Anforderung
              befolgt werden.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Eingegangene Anfrage
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-white">
                  {row.demand}
                </h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Empfohlene Antwort
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/84">
                  {row.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden overflow-x-auto rounded-[28px] border border-white/16 bg-white/8 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Eingegangene Anfrage
                  </th>
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Empfohlene Antwort
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {decisionRows.map((row) => (
                  <tr key={row.demand}>
                    <td className="p-5 align-top font-semibold text-white">
                      {row.demand}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-white/82">
                      {row.answer}
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Vergleich
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Lieferanten-Bescheinigung oder detaillierte CO2-Bilanz?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Beide Antworten haben nicht denselben Zweck. Die erste deckt einen
              einfachen dokumentarischen Bedarf ab. Die zweite dient einer
              umfassenderen Carbon-Analyse.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Thema</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Indikative CO₂e-Bescheinigung</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Detaillierte CO2-Bilanz</th>
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

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Fehler vermeiden
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Warum viele KMU bei diesem Thema blockieren
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Die Schwierigkeit liegt nicht nur in der Carbon-Berechnung. Oft
                fehlt ein einfaches, sauberes und übermittelbares Dokument zum
                richtigen Zeitpunkt.
              </p>
            </div>

            <div className="grid gap-5">
              {mistakes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
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
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Einfache Methode
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Wie auf eine Lieferantenanfrage antworten?
                </h2>
              </div>

              <div className="grid gap-5">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Schritt {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Lieferantenantwort · PDF mit prüfbarer Kennung · ohne Abo
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Ihr Kunde fragt ein Carbon-Dokument an?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Erstellen Sie eine indikative CO₂e-Bescheinigung für 89 €,
                  mit deklarierter Methode, sichtbaren Grenzen und
                  übermittelbarem PDF-Format.
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
                  href="/de/preise/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Preis ansehen
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis
            von Ausgaben. Das Dokument ist keine externe Carbon-Prüfung, keine
            umfassende Treibhausgasinventur, keine externe Verifizierung und
            keine CSRD-/ESRS-Berichterstattung.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Internes SEO-Maillage
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Je nach Situation weiterlesen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Diese Guides ergänzen das Thema: KMU, CO₂e-Bescheinigung,
              Ausschreibung, Preis und Methode.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {page.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  Guide lesen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ für KI-Suche
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zum CO2-Nachweis für Lieferanten
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#475569]">
              Kurze, strukturierte Antworten für KMU, Suchmaschinen und
              KI-Assistenten.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm"
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
    </main>
  );
}
