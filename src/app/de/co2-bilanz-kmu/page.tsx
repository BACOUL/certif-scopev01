// PATH: src/app/de/co2-bilanz-kmu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO₂-Bilanz KMU: Pflicht, Kosten, Beispiel und Alternative | Certif-Scope",
  description:
    "Guide für KMU in Deutschland: CO₂-Bilanz Pflicht, Kosten, Beispiele, Kundenanfragen, Banken, Ausschreibungen und Alternative durch indikative CO₂e-Bescheinigung.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bilanz-kmu/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
      de: "https://www.certif-scope.com/de/co2-bilanz-kmu/",
    },
  },
  openGraph: {
    title: "CO₂-Bilanz KMU: Pflicht, Kosten, Beispiel und Alternative",
    description:
      "Was sollten KMU liefern, wenn ein Kunde eine CO₂-Bilanz oder einen CO₂-Nachweis verlangt? Pflicht, Kosten, Beispiele und indikative CO₂e-Bescheinigung verstehen.",
    url: "https://www.certif-scope.com/de/co2-bilanz-kmu/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/co2-bilanz-kmu/";

const directAnswers = [
  {
    title: "Ist ein KMU immer verpflichtet?",
    text: "Nein. Viele KMU erhalten eine CO₂-Anfrage in einem kommerziellen, bankbezogenen, versicherungsbezogenen oder lieferantenbezogenen Kontext, ohne allgemein verpflichtet zu sein, eine vollständige CO₂-Bilanz zu erstellen.",
  },
  {
    title: "Was kann schnell geliefert werden?",
    text: "Wenn die Anfrage dokumentarisch bleibt, kann eine indikative CO₂e-Bescheinigung als erste Antwort dienen: aggregiertes Ergebnis, Methode, Jahr, Grenzen, PDF und verifizierbare ID.",
  },
  {
    title: "Wann braucht man eine vollständige Bilanz?",
    text: "Wenn eine Norm, ein detaillierter Umfang, ein Audit, eine externe Prüfung oder ein regulatorisches Reporting ausdrücklich verlangt wird, muss dieser Rahmen befolgt werden.",
  },
];

const useCases = [
  {
    label: "Kunde",
    title: "Ein Kunde verlangt ein CO₂-Dokument",
    text: "Sie müssen eine klare Antwort in ein Kundendossier einfügen, ohne sofort eine vollständige CO₂-Bilanz zu starten.",
  },
  {
    label: "Lieferant",
    title: "Ein Auftraggeber verlangt einen CO₂e-Nachweis",
    text: "Sie müssen eine lesbare CO₂-Information in einem Lieferantenportal oder Einkaufsfragebogen bereitstellen.",
  },
  {
    label: "Bank",
    title: "Eine Bank verlangt ein Umwelt-Element",
    text: "Sie müssen ein professionelles Dossier mit einer einfachen, datierten und übertragbaren CO₂-Information ergänzen.",
  },
  {
    label: "Versicherung",
    title: "Ein Versicherer fragt nach ESG oder CO₂",
    text: "Sie müssen ein indikatives Dokument liefern, ohne daraus ein Audit oder ein vollständiges THG-Inventar zu machen.",
  },
  {
    label: "Ausschreibung",
    title: "Ein Dossier erwähnt CO₂ oder Nachhaltigkeit",
    text: "Sie müssen schnell auf eine allgemeine Anforderung reagieren, wenn keine vollständige CO₂-Norm vorgeschrieben ist.",
  },
];

const expectedItems = [
  "Name des Unternehmens oder der deklarierten Einheit",
  "Jahr, das von der Schätzung abgedeckt wird",
  "Aggregiertes CO₂e-Ergebnis in tCO₂e",
  "Verwendete Methode und allgemeine Formel",
  "Sichtbare methodische Grenzen",
  "Ausstellungsdatum und dokumentarische Gültigkeit",
  "Dokumentarische Kontroll-ID",
  "Archivfähiges PDF für Kunden, Finanzierer oder Auftraggeber",
];

const comparisonRows = [
  {
    topic: "Ziel",
    indicative: "Schnelle Antwort auf eine dokumentarische oder Screening-Anfrage.",
    full: "Detailliertes THG-Inventar zur Steuerung einer Klimastrategie.",
  },
  {
    topic: "Benötigte Daten",
    indicative: "Jährliche Ausgaben nach großen Kategorien.",
    full: "Physische Daten, fachliche Datenerhebung, Hypothesen, Bereiche und detaillierte Faktoren.",
  },
  {
    topic: "Dauer",
    indicative: "Wenige Minuten, wenn die Beträge verfügbar sind.",
    full: "Oft mehrere Wochen je nach Datenerhebung, Umfang und Begleitung.",
  },
  {
    topic: "Preis",
    indicative: "Fester Preis: 89 €, einmalige Zahlung, ohne Abonnement.",
    full: "Variabel je nach Unternehmensgröße, Umfang, Anbieter und Analysegrad.",
  },
  {
    topic: "Geeignete Nutzung",
    indicative: "Einfache Anfrage von Kunde, Lieferant, Bank, Versicherung oder Ausschreibung.",
    full: "Fortgeschrittenes Reporting, Reduktionsplan, Klimasteuerung oder normative Anforderung.",
  },
  {
    topic: "Grenze",
    indicative: "Indikativ, nicht auditiert, kein vollständiger Scope-1/2/3-Bericht.",
    full: "Vollständiger, aber länger, teurer und schwerer zu erstellen.",
  },
];

const decisionRows = [
  {
    signal: "Die Anfrage nennt nur allgemein CO₂-Bilanz, CO₂e oder ESG-Element",
    response: "Das erwartete Niveau klären und eine indikative CO₂e-Bescheinigung erwägen, wenn kein präziser Rahmen verlangt wird.",
  },
  {
    signal: "Das Dossier verlangt eine Norm, einen Umfang oder externe Prüfung",
    response: "Die angegebene Anforderung befolgen. Eine indikative Bescheinigung ersetzt dieses Nachweisniveau nicht.",
  },
  {
    signal: "Der Bedarf ist dringend für ein Kunden- oder Lieferantendossier",
    response: "Ein datiertes indikatives Dokument mit sichtbaren Grenzen und verifizierbarer ID erstellen und die übermittelten Elemente archivieren.",
  },
  {
    signal: "Das Unternehmen möchte intern eine Klimastrategie steuern",
    response: "Eine umfassendere Analyse mit physischen Daten und detaillierter Emissionsposten-Bewertung planen.",
  },
];

const relatedGuides = [
  {
    title: "CO₂-Bilanz Pflicht für KMU",
    text: "Verstehen, ob die Anfrage eine echte Pflicht oder ein vertragliches Bedürfnis ist.",
    href: "/de/co2-bilanz-pflicht-kmu/",
  },
  {
    title: "CO₂e-Bescheinigung KMU",
    text: "Verstehen, was eine indikative Bescheinigung ist und wann sie nützlich sein kann.",
    href: "/de/co2e-bescheinigung-kmu/",
  },
  {
    title: "CO₂-Nachweis Lieferant",
    text: "Auf eine Einkaufs- oder Lieferantenanfrage antworten, ohne die Antwort zu überdimensionieren.",
    href: "/de/co2-nachweis-lieferant/",
  },
  {
    title: "CO₂-Nachweis Ausschreibung",
    text: "Wissen, was beizufügen ist, wenn eine Ausschreibung CO₂, ESG oder Nachhaltigkeit erwähnt.",
    href: "/de/co2-nachweis-ausschreibung/",
  },
  {
    title: "Methodik",
    text: "Die ausgabenbasierte Methode, die Grenzen und den Verifizierungsansatz verstehen.",
    href: "/de/methodik/",
  },
  {
    title: "Preis",
    text: "Den Preis einer einfachen CO₂e-Bescheinigung mit einer vollständigen CO₂-Bilanz vergleichen.",
    href: "/de/pricing/",
  },
];

const faq = [
  {
    q: "Muss ein KMU immer eine CO₂-Bilanz erstellen?",
    a: "In vielen Fällen gibt es keine allgemeine Pflicht für KMU, eine vollständige CO₂-Bilanz zu erstellen. Anfragen sind häufig vertraglich oder dokumentarisch: Kunde, Lieferant, Bank, Versicherung, Ausschreibung oder ESG-Fragebogen.",
  },
  {
    q: "Was sollte man liefern, wenn ein Kunde eine CO₂-Bilanz verlangt?",
    a: "Zuerst muss das verlangte Niveau geprüft werden. Ist die Anfrage allgemein, kann ein datiertes, archivierbares und klar begrenztes CO₂e-Dokument helfen. Wenn der Kunde eine Norm, einen Umfang oder eine externe Prüfung verlangt, muss diese Anforderung erfüllt werden.",
  },
  {
    q: "Was ist der Unterschied zwischen einer indikativen CO₂e-Bescheinigung und einer vollständigen CO₂-Bilanz?",
    a: "Eine indikative CO₂e-Bescheinigung beantwortet ein Screening-Bedürfnis mit aggregiertem Ergebnis und sichtbaren Grenzen. Eine vollständige CO₂-Bilanz ist ein detailliertes THG-Inventar mit Aktivitätsdaten, Hypothesen, Bereichen und häufig Begleitung oder externer Prüfung.",
  },
  {
    q: "Ersetzt Certif-Scope ein CO₂-Audit?",
    a: "Nein. Certif-Scope erstellt eine indikative, nicht auditierte und nicht regulatorische CO₂e-Bescheinigung. Sie ist kein CSRD-/ESRS-Reporting und kein vollständiges THG-Inventar.",
  },
  {
    q: "Wie viel kostet eine einfache CO₂-Antwort für KMU?",
    a: "Der Preis hängt vom erwarteten Niveau ab. Eine standardisierte indikative Antwort ist leichter als eine vollständige Bilanz. Certif-Scope bietet eine indikative CO₂e-Bescheinigung für 89 € ohne Abonnement an.",
  },
  {
    q: "Welche Daten sind für eine indikative Bescheinigung nötig?",
    a: "Für eine indikative spend-based Methode reichen jährliche Ausgaben nach großen Kategorien. Das Modell benötigt keine detaillierten physischen Daten wie kWh, Kilometer oder Liter.",
  },
  {
    q: "Enthält das Dokument eine Verifizierung?",
    a: "Ja. Die Bescheinigung ist dafür konzipiert, eine Referenz und eine verifizierbare ID zu enthalten, damit zentrale dokumentarische Informationen kontrolliert werden können.",
  },
  {
    q: "Kann eine CO₂e-Bescheinigung in einem Lieferantendossier verwendet werden?",
    a: "Ja, wenn die Anfrage ein einfaches CO₂-Dokument oder ein Screening-Element betrifft. Sie darf nicht als vollständiges CO₂-Audit oder regulatorisches Inventar dargestellt werden.",
  },
  {
    q: "Kann eine Bank dieses Dokument verlangen?",
    a: "Eine Bank kann ein Umwelt-Element in einem professionellen Dossier verlangen. Eine indikative Bescheinigung kann bei einer einfachen Anfrage helfen, wenn kein regulatorischer Rahmen oder vollständiges Audit verlangt wird.",
  },
  {
    q: "Was tun, wenn eine Ausschreibung eine CO₂-Bilanz verlangt?",
    a: "Die Vergabeunterlagen müssen genau gelesen werden. Wenn eine Methode, ein Umfang oder ein verpflichtendes Format vorgeschrieben ist, muss dies eingehalten werden. Ist die Anfrage allgemein, kann ein indikatives CO₂e-Dokument eine erste strukturierte Antwort sein.",
  },
  {
    q: "Berechnet Certif-Scope vollständige Scopes 1, 2 und 3?",
    a: "Nein. Certif-Scope nutzt eine indikative Methode auf Basis aggregierter Ausgaben. Das Dokument ist kein vollständiges Scope-1/2/3-Inventar.",
  },
  {
    q: "Wie lange dauert es, die Bescheinigung zu erhalten?",
    a: "Wenn die Basisinformationen und Jahresausgaben verfügbar sind, kann die Bescheinigung unmittelbar nach Zahlung erstellt werden.",
  },
];

export default function Co2BilanzKmuPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂-Bilanz KMU: Pflicht, Kosten, Beispiel und Alternative",
    url: pageUrl,
    description:
      "Guide für KMU, um zu verstehen, was bei einer Anfrage nach CO₂-Bilanz, CO₂e-Bescheinigung oder einfachem CO₂-Dokument zu liefern ist.",
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
        name: "CO₂-Bilanz KMU",
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
    serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
    description:
      "Service zur Erstellung eines indikativen CO₂e-Dokuments aus jährlichen Ausgaben für Lieferanten-, Bank-, Versicherungs-, Ausschreibungs- und ESG-Screening-Anfragen.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <section id="co2-bilanz-kmu" data-section="co2-bilanz-kmu" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Guide KMU · SEO · KI-first · Kunde · Bank · Ausschreibung
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              CO₂-Bilanz KMU: Pflicht, Kosten, Beispiel und schnelle Alternative
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Ein KMU braucht nicht immer sofort eine vollständige CO₂-Bilanz. Wenn die Anfrage ein einfaches CO₂-Dokument für Kunden, Lieferanten, Banken, Versicherungen oder Ausschreibungen betrifft, kann eine indikative CO₂e-Bescheinigung ausreichen — mit klar angegebenem Umfang und sichtbaren Grenzen.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Diese Seite erklärt, was geliefert werden kann, wann eine indikative CO₂e-Bescheinigung passend ist, wann eine vollständige CO₂-Bilanz erforderlich wird, was eine einfache Antwort kostet und wie ein indikatives Dokument nicht als Audit dargestellt wird.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                CO₂e-Bescheinigung erstellen
              </Link>
              <Link href="/de/pricing/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                Preis 89 € ansehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">
              Schnelle Antwort für Google und KI-Assistenten
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Was liefern, wenn ein KMU eine Anfrage nach CO₂-Bilanz erhält?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Wenn die Anfrage keine Norm, kein Audit und keinen regulatorischen Umfang vorgibt, kann ein KMU häufig zunächst eine indikative CO₂e-Bescheinigung liefern. Dieses Dokument enthält eine aggregierte, datierte und methodisch begrenzte Schätzung. Es ersetzt keine vollständige CO₂-Bilanz, kann aber eine einfache dokumentarische Anfrage beantworten.
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Der tatsächliche Bedarf</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Selten wird ausdrücklich ein vollständiges Audit verlangt
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Der Begriff CO₂-Bilanz wird oft breit verwendet. In der Praxis erhalten KMU eher eine Anfrage nach CO₂-Dokument, CO₂e-Kennzahl, ESG-Element oder Nachweis für ein Dossier.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Vor dem Start eines vollständigen Audits sollte daher geprüft werden, ob eine einfache dokumentarische Information oder ein echtes detailliertes THG-Inventar erwartet wird.
              </p>
            </div>
            <div className="grid gap-4">
              {useCases.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1FB6C1]">{item.label}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] md:text-base">{item.text}</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Konkrete Antwort</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Was sollte eine einfache CO₂-Antwort enthalten?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Wenn die Anfrage allgemein ist, kann ein Screening-Dokument ausreichen. Es muss lesbar, datiert, archivierbar und eindeutig bezüglich Ergebnis, Methode, Umfang und Grenzen sein.
              </p>
              <Link href="/de/generate/" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                Dokument jetzt erstellen
              </Link>
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Vergleich für KMU</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Vollständige CO₂-Bilanz oder indikative CO₂e-Bescheinigung?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Die richtige Antwort hängt von der Anfrage ab. Certif-Scope ist für Situationen gedacht, in denen ein KMU eine strukturierte CO₂-Antwort liefern muss, ohne ein vollständiges Audit vorzugeben.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-[28px] border border-white/16 bg-white/8">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="p-4 text-left font-semibold text-white">Thema</th>
                  <th className="p-4 text-left font-semibold text-white">Indikative CO₂e-Bescheinigung</th>
                  <th className="p-4 text-left font-semibold text-white">Vollständige CO₂-Bilanz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-4 font-semibold text-white">{row.topic}</td>
                    <td className="p-4 leading-relaxed text-white/82">{row.indicative}</td>
                    <td className="p-4 leading-relaxed text-white/82">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Entscheidungshilfe</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Wie entscheiden, welches Niveau erwartet wird?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Vor der Erstellung eines Dokuments sollte der genaue Wortlaut der Anfrage geprüft werden. Entscheidend ist, ob nur ein Nachweis verlangt wird oder eine Norm, ein Umfang und eine Prüfung vorgeschrieben sind.
              </p>
            </div>
            <div className="grid gap-4">
              {decisionRows.map((row) => (
                <article key={row.signal} className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#0B3A63]">{row.signal}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{row.response}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Verwandte Leitfäden</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Weiterführende Seiten zur CO₂-Antwort für KMU
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{guide.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{guide.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Häufige Fragen zur CO₂-Bilanz für KMU
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Nächster Schritt</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Eine einfache CO₂e-Antwort vorbereiten
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Erstellen Sie eine indikative CO₂e-Bescheinigung, wenn die Anfrage dokumentarisch bleibt und kein vollständiges Audit verlangt wird.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                  Bescheinigung erstellen
                </Link>
                <Link href="/de/methodik/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Methodik ansehen
                </Link>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Ausgabenbasis. Das Dokument ist kein Audit, keine zertifizierte CO₂-Bilanz, keine externe Prüfung, kein vollständiges Scope-1/2/3-Inventar und kein CSRD-/ESRS-Bericht.
          </p>
        </div>
      </section>
    </main>
  );
}
