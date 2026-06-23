// PATH: src/app/de/co2-bilanz-kmu/kosten/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/de/co2-bilanz-kmu/kosten/";

export const metadata: Metadata = {
  title:
    "Kosten CO2-Bilanz KMU: Preise, Alternativen und CO₂e-Dokument | Certif-Scope",
  description:
    "Was kostet eine CO2-Bilanz für KMU? Verstehen Sie Preisniveaus, den Unterschied zwischen detaillierter Bilanzierung und indikativer CO₂e-Bescheinigung sowie den Certif-Scope-Preis von 89 €.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title:
      "Kosten CO2-Bilanz KMU: Preise, Alternativen und CO₂e-Dokument",
    description:
      "Guide für KMU: Preisniveaus verstehen, keine zu schwere Lösung für eine einfache Anfrage wählen und den Certif-Scope-Preis von 89 € einordnen.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

const quickAnswers = [
  {
    title: "Variable Kosten",
    text: "Die Kosten hängen vom erwarteten Ergebnis ab: einfaches Screening-Dokument, detaillierte Treibhausgasbetrachtung, fachliche Begleitung oder externe Prüfung.",
  },
  {
    title: "Häufige Verwechslung",
    text: "Viele KMU suchen nach den Kosten einer CO2-Bilanz, obwohl sie tatsächlich nur ein einfaches CO₂e-Dokument für einen Dritten bereitstellen müssen.",
  },
  {
    title: "Certif-Scope-Preis",
    text: "Certif-Scope bietet eine indikative CO₂e-Bescheinigung für 89 €, ohne Abo, für einfache dokumentarische Anfragen.",
  },
];

const costDrivers = [
  "Anzahl der zu betrachtenden Kategorien und erwarteter Detailgrad.",
  "Ob detaillierte physische Daten erhoben werden müssen oder nicht.",
  "Geforderter Umfang: Screening, detaillierte Bilanzierung, Scope-Aufschlüsselung oder externe Prüfung.",
  "Umfang von Begleitung, Workshops, Annahmen und Abstimmungsschleifen.",
  "Mögliche Vorgabe einer externen Prüfung oder eines bestimmten methodischen Rahmens.",
];

const comparisonRows = [
  {
    level: "Indikative CO₂e-Bescheinigung",
    usage:
      "Einfache Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfrage.",
    effort: "Gering bis moderat",
    price: "89 € mit Certif-Scope",
  },
  {
    level: "Detaillierte Carbon-Betrachtung",
    usage:
      "Interne Steuerung, Klimastrategie, detaillierter Umfang und vertiefte Datenerhebung.",
    effort: "Hoch",
    price: "Kostenintensiver und länger",
  },
  {
    level: "Externe Prüfung oder Verifizierung",
    usage:
      "Formale Anforderung, vorgegebene Norm, Kontrolle durch Dritte oder regulatorisches Dossier.",
    effort: "Sehr hoch",
    price: "Höhere Kosten je nach Umfang",
  },
];

const decisionRows = [
  {
    demand: "Ein Kunde fragt ein einfaches Carbon-Dokument an",
    answer:
      "Ein indikatives CO₂e-Dokument kann passend sein, wenn keine genaue Norm vorgegeben wird.",
  },
  {
    demand: "Eine Ausschreibung fragt eine CO₂e-Information ab",
    answer:
      "Die Unterlagen müssen gelesen werden. Wenn der Bedarf dokumentarisch ist, kann eine Bescheinigung geeignet sein.",
  },
  {
    demand: "Das Dossier schreibt einen Rahmen oder eine externe Prüfung vor",
    answer:
      "Dann ist eine weitergehende Vorgehensweise nötig. Certif-Scope ist kein Ersatz für dieses Nachweisniveau.",
  },
  {
    demand: "Das KMU will seine Klimastrategie intern steuern",
    answer:
      "Eine detaillierte Treibhausgasbetrachtung oder spezialisierte Begleitung kann dafür passender sein.",
  },
];

const includedItems = [
  "Indikative CO₂e-Bescheinigung als PDF",
  "Aggregiertes Ergebnis in tCO₂e",
  "Deklarierte spend-based Methode",
  "Abgedecktes Jahr und Ausstellungsdatum",
  "Sichtbare Grenzen des Dokuments",
  "Kennung oder Dokumentenprüfung",
  "Festpreis 89 €",
  "Ohne Abo",
];

const mistakes = [
  {
    title: "Angebote vergleichen, die nicht denselben Bedarf abdecken",
    text: "Eine externe Prüfung, Carbon-Beratung und eine indikative Bescheinigung haben nicht dasselbe Ziel und deshalb nicht dasselbe Preisniveau.",
  },
  {
    title: "Für eine einfache Anfrage zu schwer einkaufen",
    text: "Wenn ein Dritter nur ein Screening-Dokument verlangt, kann eine aufwendige Vorgehensweise unverhältnismäßig sein.",
  },
  {
    title: "Nur den niedrigsten Preis betrachten",
    text: "Das Dokument muss klar, datiert, prüfbar und ausdrücklich auf seine Grenzen hinweisen.",
  },
  {
    title: "Eine Schätzung wie eine externe Prüfung darstellen",
    text: "Eine indikative Bescheinigung darf nicht als detaillierte Treibhausgasbetrachtung oder externe Verifizierung beschrieben werden.",
  },
];

const relatedPages = [
  {
    title: "Certif-Scope Preise",
    text: "Das Angebot für 89 € ohne Abo für eine indikative CO₂e-Bescheinigung ansehen.",
    href: "/de/preise/",
  },
  {
    title: "CO2-Bilanz KMU",
    text: "Einordnen, was ein KMU bei einer Carbon-Anfrage bereitstellen kann.",
    href: "/de/co2-bilanz-kmu/",
  },
  {
    title: "Grenzen und Compliance-Einordnung",
    text: "Verstehen, wann ein indikatives Dokument ausreicht und wann ein formaler Rahmen Vorrang hat.",
    href: "/de/grenzen-und-compliance/",
  },
];

const faq = [
  {
    q: "Was kostet eine CO2-Bilanz für ein KMU?",
    a: "Die Kosten hängen vom erwarteten Detailgrad ab. Ein indikatives Screening-Dokument ist deutlich leichter als eine detaillierte Treibhausgasbetrachtung mit Datenerhebung, Annahmen, fachlicher Begleitung und möglicher externer Prüfung.",
  },
  {
    q: "Warum kostet Certif-Scope 89 €?",
    a: "Certif-Scope erfüllt einen klar begrenzten Bedarf: eine indikative, standardisierte und prüfbare CO₂e-Bescheinigung erstellen, ohne externe Prüfung, ohne individuelle Carbon-Beratung und ohne Abo.",
  },
  {
    q: "Bedeutet ein niedriger Preis, dass das Dokument nichts wert ist?",
    a: "Nein. Der Preis bedeutet, dass das Dokument für einen begrenzten Einsatz gedacht ist: dokumentarisches Screening. Es kann bei einfachen Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen nützlich sein.",
  },
  {
    q: "Wann sollte ein KMU eine detailliertere Vorgehensweise bezahlen?",
    a: "Wenn ein Dossier einen methodischen Rahmen, einen detaillierten Umfang, technische Nachweise, eine externe Prüfung oder eine interne Klimastrategie verlangt, ist eine weitergehende Vorgehensweise angemessen.",
  },
  {
    q: "Ist die Certif-Scope-Bescheinigung eine detaillierte CO2-Bilanzierung?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung, nicht extern geprüft, nicht regulatorisch und nicht gleichzusetzen mit einer detaillierten Treibhausgasinventur oder CSRD-/ESRS-Berichterstattung.",
  },
];

export default function CO2BilanzKMUKostenPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kosten CO2-Bilanz KMU: Preise, Alternativen und CO₂e-Dokument",
    url: pageUrl,
    description:
      "Guide für KMU, um die Kosten einer CO2-Bilanz einzuordnen, Preisniveaus zu vergleichen und zu verstehen, wann eine indikative CO₂e-Bescheinigung ausreichen kann.",
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
        item: "https://www.certif-scope.com/de/co2-bilanz-kmu/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Kosten",
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
      "Service zur Erstellung einer indikativen CO₂e-Bescheinigung zum Festpreis für einfache Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen.",
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
        id="co2-bilanz-kmu-kosten"
        data-section="co2-bilanz-kmu-kosten"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Kosten · Preis · KMU · CO₂e-Bescheinigung
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Kosten einer CO2-Bilanz für KMU: welches Preisniveau passt zum
              Bedarf?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Der Preis hängt vor allem davon ab, welches Nachweisniveau
              tatsächlich erwartet wird. Ein KMU, das auf eine Anfrage von
              Kunden, Banken, Versicherern oder Ausschreibungen reagiert,
              benötigt nicht in jedem Fall eine externe Prüfung.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Diese Seite hilft, die Kosten eines indikativen CO₂e-Dokuments,
              einer detaillierten Treibhausgasbetrachtung und einer externen
              Prüfung auseinanderzuhalten.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/preise/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Certif-Scope-Preis 89 € ansehen
              </Link>
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Bescheinigung erstellen
              </Link>
            </div>
          </header>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)]"
              >
                <h2 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {item.text}
                </p>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Warum Preise variieren
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Oft werden sehr unterschiedliche Leistungen miteinander verglichen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Der Begriff CO2-Bilanz kann eine einfache Dokumentenunterlage,
                eine indikative Schätzung, eine detaillierte Betrachtung,
                fachliche Begleitung oder eine externe Prüfung meinen. Die Kosten
                hängen deshalb vom verlangten Niveau ab.
              </p>
            </div>

            <div className="grid gap-4">
              {costDrivers.map((driver) => (
                <div
                  key={driver}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {driver}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Praktischer Vergleich
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Drei Kostenstufen unterscheiden
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Um eine überdimensionierte Lösung zu vermeiden, sollte der Preis
              immer mit dem tatsächlichen Bedarf des Dossiers verbunden werden.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <article
                key={row.level}
                className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {row.level}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {row.usage}
                </p>
                <div className="mt-4 grid gap-2 text-sm text-[#475569]">
                  <p>
                    <strong className="text-[#0B3A63]">Aufwand:</strong>{" "}
                    {row.effort}
                  </p>
                  <p>
                    <strong className="text-[#0B3A63]">Preis:</strong>{" "}
                    {row.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="w-1/4 p-5 text-left font-semibold text-[#0B3A63]">
                    Niveau
                  </th>
                  <th className="w-1/3 p-5 text-left font-semibold text-[#0B3A63]">
                    Nutzung
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Aufwand
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/8">
                {comparisonRows.map((row) => (
                  <tr key={row.level}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.level}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.usage}
                    </td>
                    <td className="p-5 align-top text-[#475569]">
                      {row.effort}
                    </td>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Kaufentscheidung
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Welches Niveau sollten Sie für Ihr Dossier bezahlen?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Der richtige Preis ist der Preis für das verlangte Nachweisniveau.
              Eine einfache Anfrage rechtfertigt nicht immer eine aufwendige
              Mission.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Situation
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
                    Situation
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Was enthalten ist
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was die Certif-Scope-Bescheinigung für 89 € abdeckt
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Der Preis bezieht sich auf ein indikatives, standardisiertes und
                prüfbares CO₂e-Dokument. Er bezieht sich nicht auf externe
                Prüfung, individuelle Carbon-Beratung oder eine detaillierte
                Inventur.
              </p>
              <Link
                href="/de/preise/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Angebot für 89 € ansehen
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {includedItems.map((item) => (
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

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Fehler vermeiden
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Fehler, die den Preisvergleich verfälschen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Ein sinnvoller Vergleich betrachtet nicht nur den angezeigten
                Preis, sondern auch das tatsächlich verlangte Nachweisniveau.
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
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Festpreis · prüfbares PDF · ohne Abo
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Brauchen Sie ein CO₂e-Dokument, ohne eine externe Prüfung zu
                  beauftragen?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Erstellen Sie eine indikative CO₂e-Bescheinigung für 89 €,
                  mit deklarierter Methode, sichtbaren Grenzen und
                  übermittelbarem PDF.
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
            aggregierter Ausgaben. Das Dokument ist keine externe Carbon-Prüfung,
            keine detaillierte Treibhausgasinventur, keine externe Verifizierung
            und keine CSRD-/ESRS-Berichterstattung.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Verwandte Seiten
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Je nach Bedarf weiter einordnen
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  Lesen →
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
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zu den Kosten einer CO2-Bilanz für KMU
            </h2>
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
