// PATH: src/app/de/co2-bilanz-kmu/pflicht/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "CO2-Bilanz KMU Pflicht: wann entsteht Handlungsbedarf? | Certif-Scope",
  description:
    "Ist eine CO2-Bilanz für KMU Pflicht? Verstehen Sie den Unterschied zwischen regulatorischer Vorgabe, Kundenanfrage, Ausschreibung, Bank, Versicherung oder Lieferantenunterlagen und was ohne externe Prüfung bereitgestellt werden kann.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bilanz-kmu/pflicht/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-bilanz-kmu/pflicht/",
    },
  },
  openGraph: {
    title: "CO2-Bilanz KMU Pflicht: wann entsteht Handlungsbedarf?",
    description:
      "Guide für KMU: regulatorische Vorgabe, Kundenanforderung und dokumentarischen Bedarf unterscheiden und einordnen, wann ein CO₂e-Dokument helfen kann.",
    url: "https://www.certif-scope.com/de/co2-bilanz-kmu/pflicht/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

const quickAnswers = [
  {
    title: "Keine pauschale Regel",
    text: "Für die meisten KMU ist eine umfassende CO2-Bilanz nicht automatisch als allgemeine Standardpflicht zu verstehen.",
  },
  {
    title: "Häufige Anfrage",
    text: "Der Bedarf entsteht oft durch Kunden, Ausschreibungen, Banken, Versicherer, Lieferantenportale oder Auftraggeber.",
  },
  {
    title: "Mögliche Antwort",
    text: "Wenn kein vollständiger Prüfrahmen verlangt wird, kann ein indikatives CO₂e-Dokument häufig eine erste strukturierte Antwort liefern.",
  },
];

const requestCases = [
  "Ein Kunde fragt vor der Lieferantenfreigabe nach Carbon-Unterlagen.",
  "Eine Ausschreibung nennt ein CO₂e-, ESG- oder Umweltkriterium.",
  "Eine Bank oder ein Versicherer fragt nach einer Umweltinformation.",
  "Ein Lieferantenportal verlangt einen einfachen Carbon-Nachweis.",
  "Ein Auftraggeber erwartet ein dokumentarisches Element im Einkaufsdossier.",
];

const decisionRows = [
  {
    demand: "Muss jede KMU eine umfassende CO2-Bilanz erstellen?",
    answer:
      "Nein, nicht als pauschale Standardregel. Der konkret anwendbare Rahmen muss je Unternehmen und je Dossier geprüft werden.",
  },
  {
    demand: "Ein Kunde fragt nach einer CO2-Bilanz ohne weitere Vorgaben",
    answer:
      "Die Anfrage sollte qualifiziert werden. Eine indikative CO₂e-Bescheinigung kann häufig einen dokumentarischen Bedarf abdecken.",
  },
  {
    demand: "Eine Ausschreibung nennt eine Norm, einen Umfang oder eine externe Prüfung",
    answer:
      "Dann ist die vorgegebene Anforderung maßgeblich. Certif-Scope ersetzt keine externe Prüfung und keine formale Verifizierung.",
  },
  {
    demand: "Das Dossier fragt nur eine Carbon- oder CO₂e-Information ab",
    answer:
      "Ein datiertes, archivierbares PDF mit Ergebnis, Methode und Grenzen kann eine verhältnismäßige Antwort sein.",
  },
];

const expectedItems = [
  "Aggregiertes CO₂e-Ergebnis",
  "Jahr, das von der Schätzung abgedeckt wird",
  "Verwendete Methode und allgemeine Formel",
  "Sichtbare Grenzen des Dokuments",
  "Ausstellungsdatum",
  "Archivierbares und übermittelbares PDF",
  "Kennung oder dokumentarische Prüfmöglichkeit",
  "Hinweis: indikativ, keine externe Prüfung, nicht regulatorisch",
];

const mistakes = [
  {
    title: "Kundenanfrage und regulatorische Vorgabe verwechseln",
    text: "Eine Anforderung in einem geschäftlichen Dossier ist nicht automatisch eine allgemeine regulatorische Pflicht.",
  },
  {
    title: "Gar nichts bereitstellen",
    text: "Fehlt ein Dokument vollständig, kann ein Dossier ins Stocken geraten, auch wenn keine allgemeine Standardpflicht besteht.",
  },
  {
    title: "Ein indikatives Dokument überdehnen",
    text: "Eine indikative Bescheinigung darf nicht als umfassende Treibhausgasinventur, externe Prüfung oder formale Verifizierung dargestellt werden.",
  },
  {
    title: "Zu früh eine zu schwere Vorgehensweise starten",
    text: "Wenn der Bedarf nur dokumentarisch ist, kann ein klar eingeordnetes erstes Dokument genügen, bevor eine weitergehende Prüfung beauftragt wird.",
  },
];

const relatedPages = [
  {
    title: "CO2-Bilanz KMU",
    text: "Die Pillar-Seite zeigt, was KMU bei einer Carbon-Anfrage bereitstellen können, ohne eine umfassende Inventur zu versprechen.",
    href: "/de/co2-bilanz-kmu/",
  },
  {
    title: "Bank ESG Unterlagen KMU",
    text: "Einordnen, wie ein CO₂e-Dokument in einem Bank- oder ESG-Dossier genutzt werden kann, ohne eine Annahme zu versprechen.",
    href: "/de/bank-esg-unterlagen-kmu/",
  },
  {
    title: "CO2-Bescheinigung KMU",
    text: "Verstehen, wann eine indikative CO₂e-Bescheinigung als einfaches Carbon-Dokument dienen kann.",
    href: "/de/co2-bescheinigung-kmu/",
  },
];

const faq = [
  {
    q: "Muss jede KMU eine CO2-Bilanz erstellen?",
    a: "Für die meisten KMU besteht kein pauschaler Automatismus, eine umfassende CO2-Bilanz allein wegen ihrer Unternehmensgröße zu erstellen. Der konkrete Rahmen sollte aber je Unternehmen, Branche und Dossier geprüft werden.",
  },
  {
    q: "Warum erhält eine KMU trotzdem eine Anfrage zur CO2-Bilanz?",
    a: "Kunden, Auftraggeber, Banken, Versicherer oder Ausschreibungen können eine Carbon-Information in ihren eigenen Prozessen abfragen. Das ist häufig eine dokumentarische oder vertragliche Erwartung, nicht automatisch eine allgemeine Pflicht für jedes Unternehmen.",
  },
  {
    q: "Bedeutet eine Kundenanfrage, dass eine externe Prüfung nötig ist?",
    a: "Nicht unbedingt. Wenn die Anfrage keine konkrete Norm, keinen detaillierten Umfang, keine technischen Nachweise und keine externe Verifizierung verlangt, kann eine indikative CO₂e-Bescheinigung häufig als erste Antwort dienen.",
  },
  {
    q: "Was kann ich bereitstellen, wenn eine CO2-Bilanz angefragt wird und ich keine habe?",
    a: "Zuerst sollte das erwartete Nachweisniveau geklärt werden. Ist der Bedarf dokumentarisch, kann ein CO₂e-PDF mit aggregiertem Ergebnis, Jahr, deklarierter Methode, Grenzen und Prüfmöglichkeit passen.",
  },
  {
    q: "Ersetzt Certif-Scope eine regulatorische CO2-Bilanz?",
    a: "Nein. Certif-Scope erstellt eine indikative CO₂e-Bescheinigung, nicht extern verifiziert, nicht regulatorisch und nicht gleichzusetzen mit einer umfassenden Treibhausgasinventur oder CSRD-/ESRS-Berichterstattung.",
  },
];

export default function CO2BilanzKMUPflichtPageDE() {
  const pageUrl =
    "https://www.certif-scope.com/de/co2-bilanz-kmu/pflicht/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bilanz KMU Pflicht: wann entsteht Handlungsbedarf?",
    url: pageUrl,
    description:
      "Guide für KMU, um regulatorische Vorgaben, Kundenanfragen, Ausschreibungen, Banken, Versicherungen und dokumentarischen CO₂e-Bedarf voneinander zu unterscheiden.",
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
        name: "Pflicht",
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
        id="co2-bilanz-kmu-pflicht"
        data-section="co2-bilanz-kmu-pflicht"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Pflicht · KMU · Kunde · Ausschreibung
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO2-Bilanz KMU Pflicht: wann entsteht Handlungsbedarf?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Für die meisten KMU ist eine umfassende CO2-Bilanz nicht
              automatisch eine allgemeine Standardpflicht. Trotzdem kann eine
              Anfrage über Kunden, Ausschreibungen, Banken, Versicherer oder
              Auftraggeber entstehen.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Die richtige Frage lautet daher nicht nur, ob eine Pflicht
              besteht. Entscheidend ist, welches Nachweisniveau tatsächlich
              erwartet wird und welches Dokument dazu passt.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                CO₂e-Dokument erstellen
              </Link>
              <Link
                href="/de/co2-bilanz-kmu/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Guide für KMU ansehen
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
                Warum die Verwechslung entsteht
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Eine Dossier-Anfrage kann schnell wie eine allgemeine Pflicht wirken
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Wenn ein Einkäufer nach einer CO2-Bilanz fragt, kann eine KMU
                annehmen, dass sofort eine umfassende externe Prüfung nötig ist.
                In vielen Fällen geht es jedoch zunächst um ein dokumentarisches
                Screening: ein lesbarer CO₂e-Indikator für Unterlagen.
              </p>
            </div>

            <div className="grid gap-4">
              {requestCases.map((requestCase) => (
                <div
                  key={requestCase}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {requestCase}
                </div>
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
                Nützliches Dokument
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was kann bereitgestellt werden, wenn kein vollständiger Prüfrahmen verlangt wird?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Ein indikatives CO₂e-Dokument soll dem Dritten Ergebnis,
                Methode, abgedecktes Jahr, Umfang und Grenzen verständlich
                machen.
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
              Praktische Entscheidung
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Regulatorische Vorgabe, Kundenanforderung oder einfaches Screening: wie entscheiden?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Das passende Nachweisniveau hängt vom angefragten Dokument ab.
              Gibt es eine konkrete Norm, einen festgelegten Umfang oder eine
              externe Verifizierung, muss diese Vorgabe beachtet werden. Sonst
              kann ein indikatives Dokument verhältnismäßig sein.
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
                  Empfohlene Einordnung
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
                    Empfohlene Einordnung
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Fehler vermeiden
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Häufige Fehler, wenn KMU nach Pflicht suchen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Das größte Risiko besteht darin, zu wenig, zu spät oder zu
                schwer zu reagieren, oder ein indikatives Dokument wie eine
                formale externe Prüfung wirken zu lassen.
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

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Verhältnismäßige Antwort
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Nicht überdimensionieren, wenn das Dossier nur ein Dokument erwartet
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope ist für Fälle gedacht, in denen eine KMU eine
              indikative, klare und prüfbare CO₂e-Bescheinigung bereitstellen
              muss, ohne eine externe Prüfung oder eine regulatorische Inventur
              zu behaupten.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/de/erstellen/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Bescheinigung erstellen
              </Link>
              <Link
                href="/de/preise/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Preis 89 € ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Verwandte Seiten
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Weiter nach Situation
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
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

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zur CO2-Bilanz-Pflicht für KMU
            </h2>
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

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis
            von Ausgaben. Das Dokument ist keine externe Carbon-Prüfung, keine
            umfassende Treibhausgasinventur, keine externe Verifizierung und
            keine CSRD-/ESRS-Berichterstattung.
          </p>
        </div>
      </section>
    </main>
  );
}
