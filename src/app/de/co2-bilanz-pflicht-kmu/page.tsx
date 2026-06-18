// PATH: src/app/de/co2-bilanz-pflicht-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO₂-Bilanz Pflicht KMU: wann muss man reagieren? | Certif-Scope",
  description:
    "Ist eine CO₂-Bilanz für KMU Pflicht? Erfahren Sie, wie sich gesetzliche Berichtspflichten, Kundenanfragen, Ausschreibungen, Banken und einfache CO₂-Nachweise unterscheiden.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bilanz-pflicht-kmu/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-bilanz-pflicht-kmu/",
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/",
    },
  },
  openGraph: {
    title: "CO₂-Bilanz Pflicht KMU: wann muss man reagieren?",
    description:
      "Ein deutscher Leitfaden für KMU: gesetzliche Pflicht, Kundenanforderung, Ausschreibung, Bank, Versicherung oder einfacher dokumentarischer CO₂e-Nachweis.",
    url: "https://www.certif-scope.com/de/co2-bilanz-pflicht-kmu/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/co2-bilanz-pflicht-kmu/";

const quickAnswers = [
  {
    title: "Keine pauschale Antwort",
    text: "Für viele KMU besteht keine automatische allgemeine Pflicht, jederzeit eine vollständige CO₂-Bilanz vorzulegen. Entscheidend sind Größe, Rechtsrahmen, Branche, Konzernbezug und konkrete Anfrage.",
  },
  {
    title: "Häufige Auslöser",
    text: "Der Bedarf entsteht oft nicht direkt durch eine gesetzliche Pflicht, sondern durch Kunden, Auftraggeber, Ausschreibungen, Banken, Versicherer oder Lieferantenportale.",
  },
  {
    title: "Mögliche erste Antwort",
    text: "Wenn kein Audit, keine Norm und kein vollständiger Bericht verlangt werden, kann eine indikative CO₂e-Bescheinigung eine proportionierte dokumentarische Antwort sein.",
  },
];

const requestCases = [
  "Ein Kunde fragt nach einem CO₂-Nachweis, bevor er ein KMU als Lieferant listet.",
  "Eine Ausschreibung erwähnt CO₂e, ESG, Nachhaltigkeit oder ein Umweltkriterium.",
  "Eine Bank oder Versicherung fragt nach einer einfachen Umwelt- oder Klimainformation.",
  "Ein Lieferantenportal verlangt ein CO₂-Dokument oder eine CO₂e-Angabe.",
  "Ein Auftraggeber möchte eine dokumentierte Antwort im Einkaufs- oder Vertragsprozess.",
  "Ein Konzern sammelt CO₂-Informationen entlang seiner Lieferkette.",
];

const decisionRows = [
  {
    demand: "Gibt es eine allgemeine CO₂-Bilanz-Pflicht für jedes KMU?",
    answer:
      "Nein, nicht als pauschale Regel für jedes KMU. Der konkrete Rechtsrahmen und die Unternehmenssituation müssen geprüft werden.",
  },
  {
    demand: "Ein Kunde verlangt 'Ihre CO₂-Bilanz' ohne weitere Präzisierung",
    answer:
      "Die Anfrage sollte qualifiziert werden. Oft wird ein dokumentarischer CO₂e-Nachweis erwartet, nicht zwingend ein vollständiges Audit.",
  },
  {
    demand: "Eine Ausschreibung verlangt eine Norm, einen Umfang oder eine externe Prüfung",
    answer:
      "Dann hat die Vorgabe Vorrang. Eine indikative Bescheinigung ersetzt keine verlangte Norm, kein Audit und keine externe Prüfung.",
  },
  {
    demand: "Der Vorgang verlangt nur eine CO₂- oder CO₂e-Information",
    answer:
      "Ein PDF mit Ergebnis, Jahr, Methode, Grenzen und Referenz kann eine proportionierte erste Antwort sein.",
  },
];

const expectedItems = [
  "Aggregiertes CO₂e-Ergebnis",
  "Jahr oder Zeitraum der Schätzung",
  "Verwendete Methode und Formel",
  "Sichtbare Grenzen des Dokuments",
  "Ausstellungsdatum",
  "PDF, archivierbar und übertragbar",
  "Referenz oder Dokumentenverifizierung",
  "Hinweis: indikativ, kein Audit, kein regulatorischer Bericht",
];

const mistakes = [
  {
    title: "Kundenanfrage und gesetzliche Pflicht verwechseln",
    text: "Eine Anforderung in einem kommerziellen Dossier ist nicht automatisch eine allgemeine gesetzliche Pflicht für alle KMU.",
  },
  {
    title: "Gar nichts liefern",
    text: "Ein fehlendes Dokument kann ein Dossier verzögern, auch wenn keine formale Pflicht zu einer vollständigen CO₂-Bilanz besteht.",
  },
  {
    title: "Eine Schätzung als vollständige Bilanz verkaufen",
    text: "Ein indikativer CO₂e-Nachweis darf nicht als Audit, Zertifizierung, regulatorischer Bericht oder vollständiges GHG-Inventar dargestellt werden.",
  },
  {
    title: "Zu früh eine schwere Mission starten",
    text: "Wenn nur ein dokumentarischer Nachweis verlangt wird, kann ein erster klar begrenzter Nachweis sinnvoll sein, bevor ein vollständiges Projekt gestartet wird.",
  },
];

const contexts = [
  {
    title: "Gesetzlicher oder regulatorischer Rahmen",
    text: "Einige Unternehmen unterliegen Nachhaltigkeitsberichts- oder Offenlegungspflichten. Für KMU muss geprüft werden, ob Größe, Börsennotierung, Konzernstruktur oder Sonderregeln betroffen sind.",
  },
  {
    title: "Kunden- und Lieferkettenanforderung",
    text: "Ein KMU kann indirekt betroffen sein, wenn ein größerer Kunde CO₂- oder ESG-Daten von Lieferanten sammelt.",
  },
  {
    title: "Ausschreibung oder Vergabe",
    text: "Vergabeunterlagen können Umwelt- oder CO₂-Kriterien enthalten. Der genaue Wortlaut entscheidet, ob eine einfache Anlage reicht oder eine formale Prüfung verlangt wird.",
  },
  {
    title: "Bank, Versicherung oder Finanzierung",
    text: "Finanzpartner können Umweltinformationen als Teil eines Dossiers anfragen, ohne zwingend eine vollständige CO₂-Bilanz zu verlangen.",
  },
];

const relatedPages = [
  {
    title: "CO₂e-Bescheinigung KMU",
    text: "Die deutsche Hauptseite zur indikativen CO₂e-Bescheinigung für kleine und mittlere Unternehmen.",
    href: "/de/co2e-bescheinigung-kmu/",
  },
  {
    title: "CO₂-Nachweis Lieferant",
    text: "Antworten, wenn ein Kunde oder Auftraggeber einen CO₂-Nachweis vom Lieferanten verlangt.",
    href: "/de/co2-nachweis-lieferant/",
  },
  {
    title: "CO₂-Nachweis Ausschreibung",
    text: "Verstehen, was bei Vergabeunterlagen und Angebotsunterlagen beigefügt werden kann.",
    href: "/de/co2-nachweis-ausschreibung/",
  },
  {
    title: "Bescheinigung erstellen",
    text: "Direkt zur Erstellung einer indikativen CO₂e-Bescheinigung gehen.",
    href: "/de/generate/",
  },
];

const faq = [
  {
    q: "Ist eine CO₂-Bilanz für alle KMU in Deutschland Pflicht?",
    a: "Nicht pauschal für jedes KMU. Ob eine Pflicht besteht, hängt vom konkreten Rechtsrahmen, der Unternehmensgröße, möglichen Konzernbezügen, der Börsennotierung und der Art der Anfrage ab. Viele KMU erhalten dennoch CO₂-Anfragen von Kunden, Banken, Versicherern oder Ausschreibungen.",
  },
  {
    q: "Warum fragt ein Kunde nach einer CO₂-Bilanz, wenn ich gesetzlich nicht betroffen bin?",
    a: "Große Kunden oder Auftraggeber sammeln zunehmend CO₂- und ESG-Informationen entlang ihrer Lieferkette. Für das KMU ist es dann oft eine kommerzielle oder dokumentarische Anforderung, nicht zwingend eine eigene gesetzliche Berichtspflicht.",
  },
  {
    q: "Muss eine Kundenanfrage immer mit einem Audit beantwortet werden?",
    a: "Nein. Wenn die Anfrage keine Norm, keinen detaillierten Umfang, keine externe Prüfung und kein vollständiges Treibhausgasinventar verlangt, kann ein indikativer CO₂e-Nachweis eine erste Antwort sein.",
  },
  {
    q: "Was kann ich liefern, wenn ich noch keine vollständige CO₂-Bilanz habe?",
    a: "Zuerst sollte die Anfrage qualifiziert werden. Wenn der Bedarf dokumentarisch ist, kann eine indikative CO₂e-Bescheinigung mit Ergebnis, Jahr, Methode, Grenzen und Referenz geeignet sein.",
  },
  {
    q: "Ersetzt Certif-Scope eine gesetzliche Nachhaltigkeitsberichterstattung?",
    a: "Nein. Certif-Scope ersetzt keinen CSRD-/ESRS-Bericht, keine gesetzliche Nachhaltigkeitsberichterstattung, kein Audit und keine externe Prüfung. Es handelt sich um eine indikative CO₂e-Bescheinigung für einfache dokumentarische Anfragen.",
  },
  {
    q: "Ist eine CO₂e-Bescheinigung dasselbe wie eine vollständige CO₂-Bilanz?",
    a: "Nein. Eine indikative CO₂e-Bescheinigung ist ein begrenztes Dokument mit einer Schätzung. Eine vollständige CO₂-Bilanz hat einen deutlich breiteren Umfang, andere Datentiefe und kann je nach Anforderung eine externe Prüfung benötigen.",
  },
  {
    q: "Kann Certif-Scope bei Ausschreibungen helfen?",
    a: "Ja, wenn die Ausschreibung eine allgemeine CO₂- oder ESG-Information akzeptiert. Wenn die Vergabeunterlagen eine bestimmte Norm, einen Umfang oder eine Prüfung verlangen, müssen diese Vorgaben eingehalten werden.",
  },
  {
    q: "Welche Formulierung sollte ich gegenüber Kunden verwenden?",
    a: "Die Antwort sollte klar sagen, dass es sich um eine indikative CO₂e-Bescheinigung handelt. Sie sollte nicht als zertifizierte CO₂-Bilanz, Audit, externe Prüfung oder regulatorischer Bericht bezeichnet werden.",
  },
];

export default function Co2BilanzPflichtKmuPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂-Bilanz Pflicht KMU: wann muss man reagieren?",
    url: pageUrl,
    description:
      "Deutscher Leitfaden für KMU zur Unterscheidung zwischen gesetzlicher CO₂-Bilanz-Pflicht, Kundenanfrage, Ausschreibung und dokumentarischem CO₂e-Nachweis.",
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
      { "@type": "ListItem", position: 2, name: "CO₂-Bilanz Pflicht KMU", item: pageUrl },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung für KMU",
    provider: { "@type": "Organization", name: "Certif-Scope", url: "https://www.certif-scope.com/de/" },
    areaServed: "DE",
    serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
    description:
      "Erstellung eines indikativen CO₂e-Dokuments für einfache Kundenanfragen, Lieferantenportale, Banken, Versicherungen und Ausschreibungen.",
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
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main id="main-content" role="main" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <section id="co2-bilanz-pflicht-kmu" data-section="co2-bilanz-pflicht-kmu" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              KMU · CO₂-Bilanz Pflicht · Kundenanfrage · Ausschreibung · SEO IA-first
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO₂-Bilanz Pflicht für KMU: wann muss man wirklich reagieren?
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Viele KMU fragen sich, ob sie eine vollständige CO₂-Bilanz erstellen müssen. In der Praxis entsteht der Bedarf oft durch Kunden, Ausschreibungen, Banken, Versicherer oder Lieferantenportale — nicht immer durch eine direkte gesetzliche Pflicht.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Diese Seite hilft, Pflicht, Kundenanforderung und einfachen CO₂e-Nachweis sauber zu unterscheiden.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                CO₂e-Bescheinigung erstellen
              </Link>
              <Link href="/de/co2e-bescheinigung-kmu/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                CO₂e-Bescheinigung verstehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">Schnelle Antwort für Google und KI-Assistenten</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">Ist eine CO₂-Bilanz für KMU Pflicht?</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Für viele KMU gibt es keine pauschale automatische Pflicht, jederzeit eine vollständige CO₂-Bilanz vorzulegen. Trotzdem können Kunden, Auftraggeber, Ausschreibungen, Banken oder Versicherer einen CO₂-Nachweis verlangen. Wenn kein Audit oder regulatorischer Bericht gefordert wird, kann eine indikative CO₂e-Bescheinigung eine erste dokumentarische Antwort sein.
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Typische Auslöser</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Warum KMU trotzdem nach CO₂-Dokumenten gefragt werden</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine CO₂-Anfrage ist häufig Teil eines Dossiers. Entscheidend ist, ob eine formale Pflicht, eine Kundenvorgabe oder nur ein dokumentarischer Nachweis vorliegt.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {requestCases.map((item) => (
                <li key={item} className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569] shadow-sm">
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Einordnung</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Vier Situationen, die oft verwechselt werden</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Wer richtig antworten will, muss zuerst den Ursprung der Anfrage verstehen.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contexts.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Entscheidungshilfe</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Was tun, wenn eine CO₂-Bilanz oder ein CO₂-Nachweis verlangt wird?</h2>
          </div>
          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white">
            <table className="w-full min-w-[780px] text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Anfrage</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Praktische Einordnung</th>
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Was ein einfaches Dokument enthalten sollte</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Ein CO₂e-Nachweis muss lesbar, begrenzt und archivierbar sein</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Wenn der Bedarf dokumentarisch ist, hilft ein klares PDF mehr als eine vage Antwort. Die Grenzen müssen jedoch sichtbar bleiben.
              </p>
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

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Certif-Scope richtig verwenden</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Eine indikative Bescheinigung ist eine Antwort auf einfache Anfragen, nicht auf formale Prüfpflichten</h2>
              <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
                Certif-Scope ist für Fälle gedacht, in denen ein KMU schnell ein klares CO₂e-Dokument bereitstellen muss, ohne eine vollständige Bilanz, ein Audit oder einen regulatorischen Bericht zu behaupten.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/16 bg-white/8 p-6">
              <h3 className="text-xl font-extrabold text-white">Formulierung, die sauber bleibt</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/82 md:text-base">
                "Wir stellen eine indikative CO₂e-Bescheinigung bereit. Das Dokument basiert auf einer ausgabenbasierten Schätzung, enthält Methode und Grenzen und ersetzt keine vollständige CO₂-Bilanz, kein Audit und keinen CSRD-/ESRS-Bericht."
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                  CO₂e-Bescheinigung erstellen
                </Link>
                <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Preis ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Häufige Fehler</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Was KMU bei CO₂-Anfragen vermeiden sollten</h2>
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
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Häufige Fragen zur CO₂-Bilanz-Pflicht für KMU</h2>
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
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">CO₂-Anfrage beantworten</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Bereiten Sie eine vorsichtige CO₂e-Antwort für Ihr Dossier vor</h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Certif-Scope ermöglicht die schnelle Erstellung einer indikativen CO₂e-Bescheinigung, wenn ein Kunde, Auftraggeber oder Dossier einen einfachen CO₂-Nachweis verlangt.
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
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis von Ausgaben. Das Dokument ist kein Audit, keine vollständige CO₂-Bilanz, keine Zertifizierung, keine externe Prüfung, keine Rechtsberatung und kein CSRD-/ESRS-Bericht.
          </p>
        </div>
      </section>
    </main>
  );
}
