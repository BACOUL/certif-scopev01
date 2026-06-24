// PATH: src/app/de/co2-angaben-ausschreibung/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "CO2-Angaben Ausschreibung: welches CO₂e-Dokument beilegen? | Certif-Scope",
  description:
    "Guide für KMU: Was tun, wenn eine Ausschreibung CO2-Angaben, ein CO₂e-Dokument, ESG-Unterlagen oder ein Umweltkriterium verlangt, ohne dass eine externe Prüfung gefordert wird.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-angaben-ausschreibung/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-angaben-ausschreibung/",
      fr: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    },
  },
  openGraph: {
    title: "CO2-Angaben Ausschreibung: welches CO₂e-Dokument beilegen?",
    description:
      "Eine Ausschreibung mit einer indikativen, datierten und übermittelbaren CO₂e-Bescheinigung beantworten, wenn kein umfassender Prüfrahmen verlangt wird.",
    url: "https://www.certif-scope.com/de/co2-angaben-ausschreibung/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/co2-angaben-ausschreibung/";

const directAnswers = [
  {
    title: "Was verlangen die Unterlagen wirklich?",
    text: "Ausschreibungsunterlagen können eine CO2-Bilanz, CO₂e-Angaben, ESG-Unterlagen oder ein Umweltkriterium nennen. Zuerst muss geprüft werden, ob eine konkrete Methode verlangt wird oder ob eine dokumentarische Antwort ausreicht.",
  },
  {
    title: "Was lässt sich schnell beilegen?",
    text: "Wenn kein umfassender Rahmen vorgegeben ist, kann eine indikative CO₂e-Bescheinigung als Carbon-Unterlage dienen: aggregiertes Ergebnis, Jahr, Methode, Grenzen, PDF und prüfbare Kennung.",
  },
  {
    title: "Wann reicht die Bescheinigung nicht aus?",
    text: "Wenn die Vergabeunterlagen eine externe Prüfung, eine umfassende Treibhausgasinventur, eine externe Verifizierung oder ein formales Berichtsformat verlangen, muss diese Anforderung beachtet werden.",
  },
];

const tenderScenarios = [
  {
    label: "Vergabeunterlagen",
    title: "Die Unterlagen enthalten ein Umwelt- oder ESG-Kriterium",
    text: "Das Angebot sollte das Kriterium beantworten, ohne den Carbon-Teil leer oder unpräzise zu lassen.",
  },
  {
    label: "Technische Angebotsunterlagen",
    title: "Die technische Antwort fragt nach CO₂e-Informationen",
    text: "Das Dokument kann als Anlage beigefügt und in der technischen Antwort erwähnt werden, mit sichtbaren Grenzen.",
  },
  {
    label: "Vergabeplattform",
    title: "Die Plattform sieht eine Datei als Anlage vor",
    text: "Der Bewerber muss kurzfristig ein klares, datiertes und übermittelbares PDF bereitstellen können.",
  },
  {
    label: "Öffentlicher oder privater Auftraggeber",
    title: "Der Auftraggeber verlangt eine einfache Umweltunterlage",
    text: "Eine indikative Antwort kann helfen, wenn die Unterlagen keine umfassende Carbon-Methode verlangen.",
  },
  {
    label: "Kurze Frist",
    title: "Die Abgabefrist nähert sich und keine externe Prüfung liegt vor",
    text: "Eine eingeordnete dokumentarische Unterlage kann verhindern, dass der Carbon-Teil vollständig leer bleibt.",
  },
];

const expectedItems = [
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Jahr, das von der Schätzung abgedeckt wird",
  "Deklarierte und lesbare Methode",
  "Explizite methodische Grenzen",
  "Datiertes, archivierbares und übermittelbares PDF",
  "Referenz oder prüfbare Kennung",
  "Hinweis: indikatives Dokument, keine externe Prüfung",
  "Klar benannter Nutzungsrahmen",
];

const decisionRows = [
  {
    demand: "Die Unterlagen fragen einen Carbon-Indikator ohne Methode ab",
    answer:
      "Eine indikative CO₂e-Bescheinigung kann häufig als Screening-Dokument beigefügt werden, mit sichtbaren Grenzen und Methode.",
  },
  {
    demand: "Die technische Antwort fragt ESG- oder CO₂e-Informationen ab",
    answer:
      "Ein standardisiertes PDF kann als Anlage dienen und in der technischen Antwort erwähnt werden, damit die Antwort nicht vage bleibt.",
  },
  {
    demand: "Die Unterlagen schreiben eine Norm, einen Umfang oder eine externe Prüfung vor",
    answer:
      "Dann ist die Vorgabe maßgeblich. Eine indikative Bescheinigung ersetzt keine externe Prüfung, keine externe Verifizierung und keine umfassende Treibhausgasinventur.",
  },
  {
    demand: "Die Abgabefrist ist kurz",
    answer:
      "Eine klar eingeordnete dokumentarische Antwort kann helfen, wenn keine umfassende Carbon-Anforderung vorgegeben ist.",
  },
];

const comparisonRows = [
  {
    topic: "Bedarf im Dossier",
    indicative: "Einfaches Carbon-Dokument, ESG-Kriterium, Screening, CO₂e-Anlage.",
    full: "Umfassende Carbon-Anforderung, detaillierter Umfang, Methode oder externe Prüfung.",
  },
  {
    topic: "Frist",
    indicative: "Wenige Minuten, wenn die Ausgaben verfügbar sind.",
    full: "Mehrere Wochen je nach Datenerhebung, Umfang und Begleitung.",
  },
  {
    topic: "Kosten",
    indicative: "Fester Preis: 89 €, ohne Abo.",
    full: "Variabel je nach Dienstleister, Unternehmensgröße, Umfang und Detailgrad.",
  },
  {
    topic: "Nutzung",
    indicative: "Anlage zum Dossier, technische Antwort, Antwort auf ein allgemeines Carbon-Kriterium.",
    full: "Vertiefte Berichterstattung, Klimastrategie, externe Prüfung, formale Anforderung.",
  },
  {
    topic: "Grenze",
    indicative: "Indikativ, keine externe Prüfung, keine umfassende Scope-1/2/3-Inventur, kein CSRD-/ESRS-Reporting.",
    full: "Detaillierter, aber länger, teurer und schwerer zu erstellen.",
  },
];

const mistakes = [
  {
    title: "Die Carbon-Anfrage ignorieren",
    text: "Auch wenn das Kriterium nicht ausschließend wirkt, kann eine fehlende Antwort die Qualität des Dossiers schwächen.",
  },
  {
    title: "Ein unklarer Anhang",
    text: "Ein Ergebnis ohne Methode, ohne Datum und ohne Grenzen ist für Auftraggeber schwer einzuordnen und zu archivieren.",
  },
  {
    title: "Eine Schätzung wie eine externe Prüfung darstellen",
    text: "Ein indikatives Dokument darf nicht wie eine umfassende Treibhausgasinventur oder externe Verifizierung wirken.",
  },
  {
    title: "Die Antwort zu schwer anlegen",
    text: "Eine umfangreiche externe Vorgehensweise kann überdimensioniert sein, wenn nur eine einfache Unterlage erwartet wird.",
  },
];

const processSteps = [
  {
    title: "Unterlagen lesen",
    text: "Suchen Sie nach Begriffen wie CO2-Bilanz, CO₂e, Carbon Footprint, ESG, Umwelt, Lieferantenunterlagen oder Klimakriterium.",
  },
  {
    title: "Erwartetes Niveau bestimmen",
    text: "Trennen Sie eine allgemeine dokumentarische Anfrage von einer formalen Vorgabe mit Methode, Umfang oder externer Verifizierung.",
  },
  {
    title: "Ein klares PDF beilegen",
    text: "Stellen Sie ein datiertes, archivierbares Dokument mit prüfbarer Kennung sowie klaren Angaben zu Methode und Grenzen bereit.",
  },
  {
    title: "Dokument in der Antwort einordnen",
    text: "Erwähnen Sie in der technischen Antwort klar, dass das Dokument indikativ ist und welchen Nutzungsrahmen es abdeckt.",
  },
];

const relatedPages = [
  {
    title: "CO2-Bilanz KMU",
    text: "Einordnen, was ein KMU bei einer allgemeinen Carbon-Anfrage bereitstellen kann.",
    href: "/de/co2-bilanz-kmu/",
  },
  {
    title: "CO2-Nachweis Lieferanten",
    text: "Auf eine Nachfrage von Kunden, Einkäufern oder Auftraggebern reagieren.",
    href: "/de/co2-nachweis-lieferanten/",
  },
  {
    title: "CO2-Bescheinigung KMU",
    text: "Verstehen, was eine indikative Bescheinigung ist und wann sie nützlich sein kann.",
    href: "/de/co2-bescheinigung-kmu/",
  },
  {
    title: "CO2-Bilanz KMU Beispiel",
    text: "Sehen, wie ein einfaches und lesbares Carbon-Dokument strukturiert werden kann.",
    href: "/de/co2-bilanz-kmu/beispiel/",
  },
  {
    title: "Preise",
    text: "Den Preis eines indikativen CO₂e-Dokuments ohne Abo ansehen.",
    href: "/de/preise/",
  },
  {
    title: "Methodik",
    text: "Die spend-based Methode, ihren Umfang und ihre Grenzen verstehen.",
    href: "/de/methodik/",
  },
];

const faq = [
  {
    q: "Ist eine CO2-Bilanz in einer Ausschreibung immer erforderlich?",
    a: "Nicht automatisch. Manche Unterlagen verlangen nur eine Carbon-Information oder ein Umweltkriterium. Wenn eine Methode, ein detaillierter Umfang oder eine externe Verifizierung genannt wird, muss diese Vorgabe beachtet werden.",
  },
  {
    q: "Was kann beigefügt werden, wenn eine CO2-Bilanz ohne weitere Details verlangt wird?",
    a: "Ein indikatives, datiertes und archivierbares CO₂e-Dokument mit prüfbarer Kennung kann als erste Antwort dienen, wenn keine umfassende Methode vorgegeben ist. Methode, Jahr, Nutzungsrahmen und Grenzen müssen sichtbar bleiben.",
  },
  {
    q: "Ersetzt die Certif-Scope-Bescheinigung eine externe Carbon-Prüfung?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung, nicht extern verifiziert, nicht regulatorisch und nicht gleichzusetzen mit einer umfassenden Treibhausgasinventur oder CSRD-/ESRS-Berichterstattung.",
  },
  {
    q: "Kann das Dokument in technischen Angebotsunterlagen verwendet werden?",
    a: "Ja, wenn der Bedarf dokumentarisch oder vergleichend bleibt. Das Dokument kann als Anlage beigefügt oder in der technischen Antwort erwähnt werden, mit klarer Angabe seiner Grenzen.",
  },
  {
    q: "Was kostet eine indikative CO₂e-Antwort für eine Ausschreibung?",
    a: "Certif-Scope bietet eine indikative CO₂e-Bescheinigung für 89 € ohne Abo. Dieser Preis entspricht keiner externen Prüfung und keiner individuellen Carbon-Beratung.",
  },
  {
    q: "Welche Daten sollten vorbereitet werden?",
    a: "Für eine indikative Certif-Scope-Bescheinigung werden vor allem Jahresausgaben nach großen Kategorien benötigt. Das ersetzt keine detaillierte physische Datenerhebung.",
  },
  {
    q: "Was tun, wenn der Auftraggeber eine bestimmte Carbon-Methode verlangt?",
    a: "Dann sollte die Vorgabe aus den Unterlagen beachtet werden. Eine indikative Bescheinigung darf nicht genutzt werden, um eine ausdrücklich verlangte Methode, Prüfung oder externe Verifizierung zu ersetzen.",
  },
  {
    q: "Kann die Bescheinigung die Qualität der Antwort verbessern?",
    a: "Sie kann helfen, eine leere Carbon-Antwort zu vermeiden, wenn die Anfrage allgemein bleibt. Sie liefert eine klare, datierte und begrenzte Unterlage, macht aber keine Aussage über Bewertung oder Annahme des Dossiers.",
  },
  {
    q: "Kann dieses Dokument bei öffentlichen Ausschreibungen beigelegt werden?",
    a: "Ja, wenn die Unterlagen nur ein allgemeines Carbon-Element verlangen und diese Art von Anlage zulassen. Wenn ein Format oder eine Methode vorgeschrieben ist, haben die Unterlagen Vorrang.",
  },
  {
    q: "Berechnet Certif-Scope vollständige Scopes 1, 2 und 3?",
    a: "Nein. Certif-Scope beruht auf einer indikativen Schätzung anhand aggregierter Ausgaben. Das Dokument ist keine umfassende Inventur der Scopes 1, 2 und 3.",
  },
];

export default function CO2AngabenAusschreibungPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Angaben Ausschreibung: welches CO₂e-Dokument beilegen?",
    url: pageUrl,
    description:
      "Guide für KMU, um auf CO2-Angaben, CO₂e-Dokumente oder Umweltkriterien in Ausschreibungen mit einer indikativen Bescheinigung zu reagieren, wenn keine externe Prüfung verlangt wird.",
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
        name: "CO2-Angaben Ausschreibung",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung für Ausschreibungsunterlagen",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative CO₂e-Bescheinigung spend-based",
    description:
      "Service zur Erstellung eines indikativen CO₂e-Dokuments für Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/de/preise/",
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie man auf CO2-Angaben in einer Ausschreibung reagiert",
    description:
      "Einfache Vorgehensweise, um zu entscheiden, welches CO₂e-Dokument einer Ausschreibung beigefügt werden kann, wenn kein umfassender Prüfrahmen verlangt wird.",
    inLanguage: "de-DE",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <section
        id="co2-angaben-ausschreibung"
        data-section="co2-angaben-ausschreibung"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Ausschreibung · Vergabeunterlagen · Technische Antwort · CO₂e · KI-Suche
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO2-Angaben Ausschreibung: welches CO₂e-Dokument gehört in das Dossier?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Ihre Ausschreibung verlangt eine CO2-Bilanz, CO₂e-Angaben,
              ESG-Unterlagen oder ein Umweltkriterium? Häufig erwartet der
              Auftraggeber eine klare, datierte, archivierbare und
              übermittelbare Unterlage, nicht zwingend eine umfassende externe
              Carbon-Prüfung.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Diese Seite erklärt, wie Sie entscheiden, was beigelegt werden
              kann, wann eine indikative CO₂e-Bescheinigung ausreicht, wie sie
              in technischen Angebotsunterlagen eingeordnet wird und wann eine
              formellere Anforderung Vorrang hat.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Bescheinigung für mein Dossier erstellen
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
              Was beilegen, wenn eine Ausschreibung CO2-Angaben verlangt?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Wenn die Unterlagen keine konkrete Methode, keinen detaillierten
              Umfang und keine externe Prüfung verlangen, kann eine KMU eine
              indikative CO₂e-Bescheinigung als dokumentarische Carbon-Unterlage
              beilegen. Methode, Jahr, aggregiertes Ergebnis und Grenzen müssen
              sichtbar bleiben.
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
                Häufige Fälle in Ausschreibungen
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Die Carbon-Anfrage kommt oft kurz vor der Abgabe
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Das Unternehmen muss schnell reagieren, obwohl nicht immer klar
                ist, ob die Unterlagen eine externe Prüfung oder nur eine
                dokumentarische Carbon-Unterlage erwarten. Entscheidend ist ein
                verhältnismäßiges Nachweisniveau.
              </p>
            </div>

            <div className="grid gap-4">
              {tenderScenarios.map((scenario) => (
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
                Unterlage zum Beilegen
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was der Auftraggeber schnell lesen können sollte
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine nützliche Ausschreibungsunterlage ist mehr als ein Satz in
                der technischen Antwort. Sie sollte klar, begrenzt, datiert,
                übermittelbar und zum erwarteten Nachweisniveau passend sein.
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
              Schnelle Entscheidung
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Screening oder formale Anforderung: das erwartete Niveau zählt
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Wenn die Unterlagen einen Standard, einen präzisen Umfang oder
              eine externe Verifizierung verlangen, muss dieser Rahmen beachtet
              werden. Sonst kann eine indikative CO₂e-Antwort oft passend sein.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Anforderung im Dossier
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

          <div className="mt-10 hidden rounded-[28px] border border-white/16 bg-white/8 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Anforderung im Dossier
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
              Indikative CO₂e-Bescheinigung oder umfassende CO2-Bilanz?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Beide Antworten haben nicht denselben Zweck. Die erste deckt einen
              einfachen dokumentarischen Bedarf ab. Die zweite dient einer
              umfassenden Carbon-Analyse oder einer formalen Vorgabe.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Thema
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Indikative CO₂e-Bescheinigung
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Umfassende CO2-Bilanz
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/10">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.topic}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.indicative}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.full}
                    </td>
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
                Fehler, die eine Ausschreibungsantwort schwächen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Die Carbon-Antwort sollte verhältnismäßig bleiben: klar genug,
                um den Bedarf zu dokumentieren, ohne ein Nachweisniveau zu
                behaupten, das die Unterlage nicht abdeckt.
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
                  Wie auf CO2-Angaben in einer Ausschreibung reagieren?
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
                  Ausschreibung · PDF mit prüfbarer Kennung · ohne Abo
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Benötigen Sie eine Carbon-Unterlage für ein Dossier?
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
              Diese Guides ergänzen das Thema: KMU, Lieferanten, CO₂e-Bescheinigung,
              Beispiel, Preis und Methode.
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
              Häufige Fragen zu CO2-Angaben in Ausschreibungen
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
