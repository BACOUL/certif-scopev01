// PATH: src/app/de/scope-1-2-3-erklaerung/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — DE
   Source de vérité : /fr/scope-1-2-3-explication/
   Objectif : adapter le langage au marché allemand sans modifier la logique produit.
====================================================== */

export const metadata: Metadata = {
  title: "Scopes 1, 2, 3: einfache Erklärung für KMU + was antworten | Certif-Scope",
  description:
    "Scopes 1, 2, 3 einfach erklärt: Unterschied zwischen Screening und vollständigem Inventar verstehen und als KMU sicher antworten bei Lieferantenanfragen, Ausschreibungen, Banken oder Versicherungen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/scope-1-2-3-erklaerung/",
    languages: {
      fr: "https://www.certif-scope.com/fr/scope-1-2-3-explication",
      de: "https://www.certif-scope.com/de/scope-1-2-3-erklaerung/",
    },
  },
  openGraph: {
    title: "Scopes 1, 2, 3: einfache Erklärung für KMU + was antworten",
    description:
      "Praktischer Leitfaden: Scopes 1/2/3, Screening vs vollständiges Inventar und sichere Antwort für Ausschreibungen, Lieferanten, Banken und Versicherungen.",
    url: "https://www.certif-scope.com/de/scope-1-2-3-erklaerung/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function Scopes123ExplanationDE() {
  const pageUrl = "https://www.certif-scope.com/de/scope-1-2-3-erklaerung/";

  const faq = [
    {
      q: "Scopes 1/2/3: Ist das für ein KMU verpflichtend?",
      a: "Meistens nicht. Viele Scope-Anfragen kommen aus Lieferantenfragebögen oder ESG-Screenings. Eine vollständige Aufschlüsselung nach Scopes ist nur dann erforderlich, wenn der Rahmen ausdrücklich vorgegeben ist: Methode, Umfang, Nachweise und/oder Assurance-Niveau.",
    },
    {
      q: "Warum wird besonders Scope 3 angefragt?",
      a: "Scope 3 betrifft die Wertschöpfungskette: Einkäufe, Unteraufträge, Transport, Dienstleistungen, Geschäftsreisen und ähnliche Posten. Große Unternehmen sammeln häufig Informationen in ihrer Lieferkette, weshalb diese Fragen bei KMU ankommen.",
    },
    {
      q: "Kann ein aggregiertes CO₂e-Ergebnis genügen?",
      a: "Oft ja, wenn es um Screening geht: Vergleichbarkeit, Archivierung und Dossierfähigkeit. Voraussetzung ist, dass Methode, Umfang und Grenzen klar genannt werden: kein Audit, kein vollständiges Inventar, kein CSRD-/ESRS-Reporting.",
    },
    {
      q: "Liefert Certif-Scope detaillierte Scopes 1/2/3?",
      a: "Nein. Certif-Scope erstellt eine indikative spend-based CO₂e-Schätzung aus Ausgaben, mit aggregiertem Ergebnis und expliziten Grenzen. Das ersetzt kein vollständiges, nach Scopes aufgeschlüsseltes Inventar.",
    },
    {
      q: "Was antworten, wenn das Lastenheft GHG Protocol + Scopes verlangt?",
      a: "Prüfen Sie, ob ein vollständiges organisatorisches Inventar verlangt wird: Umfang, Aktivitätsdaten, Hypothesen, Nachweise und mögliche Prüfung. Wenn ja, ist eine indikative Bescheinigung nicht geeignet. Dann sollte die formale Anforderung befolgt oder schriftlich geklärt werden.",
    },
  ];

  const scopeCards = [
    {
      label: "Scope 1",
      title: "Direkte Emissionen",
      items: ["Gas- oder Ölheizung", "eigene Fahrzeuge und Kraftstoff", "interne Prozesse, falls industriell relevant"],
    },
    {
      label: "Scope 2",
      title: "Eingekaufte Energie",
      items: ["Strom für Büros oder Standorte", "eingekaufte Wärme oder Dampf, falls relevant"],
    },
    {
      label: "Scope 3",
      title: "Wertschöpfungskette",
      items: ["Einkäufe und Unteraufträge", "Transport und Logistik", "Geschäftsreisen", "Dienstleistungen wie IT oder Beratung"],
    },
  ];

  const requirementRows = [
    {
      asked: "„Scopes 1/2/3: ja/nein“",
      implies: "Oft ein Screening-Fragebogen",
      risk: "Als verpflichtendes Audit überinterpretieren",
    },
    {
      asked: "„Details nach Scopes + Nachweise“",
      implies: "Strukturiertes Inventar und Aktivitätsdatenerhebung",
      risk: "Aufwand und Frist unterschätzen",
    },
    {
      asked: "„Referenzrahmen + Umfang + Assurance“",
      implies: "Formale Anforderung mit explizitem Rahmen",
      risk: "Ein nicht passendes Dokument zum Lastenheft liefern",
    },
  ];

  const formalSignals = [
    "vorgegebener Referenzrahmen, Methode, Norm oder Standard",
    "definierter Umfang: Organisation, Standorte, Grenzen",
    "Nachweise oder Belege: Energieabrechnungen, Kilometer, Aktivitätsdaten",
    "Assurance-Niveau oder Drittprüfung verlangt",
    "präzises Lieferformat: Anhänge, Berechnungstabelle, Protokoll",
  ];

  const scenarioCards = [
    {
      title: "Lieferantenregistrierung",
      text: "Oft: Standardfragebogen und interne Archivierung. Priorität: ein klares Dokument mit Methode, Grenzen und Datum liefern.",
      href: "/de/co2-nachweis-lieferant/",
      cta: "Mehr: CO₂-Nachweis Lieferant →",
    },
    {
      title: "Ausschreibung",
      text: "Oft: Bewertungskriterium und Vergleichbarkeit. Wenn kein Referenzrahmen vorgeschrieben ist, kann ein Screening-Dokument akzeptabel sein.",
      href: "/de/co2-nachweis-ausschreibung/",
      cta: "Mehr: CO₂-Nachweis Ausschreibung →",
    },
    {
      title: "Bank / Versicherung",
      text: "Oft: minimale Dokumentation für internes ESG-Screening und Archivierung: Datum, Methode, Grenzen.",
      href: "/de/co2-bilanz-kmu/",
      cta: "Mehr: CO₂-Bilanz KMU →",
    },
    {
      title: "Wann Verwechslung vermeiden",
      text: "Wenn eine vollständige Aufschlüsselung nach Scopes, Nachweise und Assurance verlangt werden, muss dies klar als umfassendere Anforderung behandelt werden.",
      href: "/de/methodik/",
      cta: "Methodik ansehen →",
    },
  ];

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/logo.png",
    sameAs: [] as string[],
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite (DE)",
        item: "https://www.certif-scope.com/de/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "CO₂-Bilanz KMU",
        item: "https://www.certif-scope.com/de/co2-bilanz-kmu/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Scopes 1/2/3: Erklärung",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Scopes 1, 2, 3: einfache Erklärung für KMU + was antworten",
    url: pageUrl,
    description:
      "Deutscher Leitfaden: Scopes 1/2/3, Unterschied zwischen Screening und vollständigem Inventar und sichere Antwort für KMU bei Lieferantenanfragen, Ausschreibungen, Banken und Versicherungen.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    breadcrumb: jsonLdBreadcrumb,
    inLanguage: "de-DE",
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie ein KMU auf eine Scopes-1/2/3-Anfrage antwortet",
    description:
      "Ein einfacher Prozess, um Screening und vollständiges Inventar zu unterscheiden und dann auf dem richtigen Niveau zu antworten.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Anforderung lesen: Screening oder Inventar?",
        text: "Suchen Sie nach vorgeschriebenem Referenzrahmen, Umfang, Scope-Aufschlüsselung, Nachweisen und Assurance-Niveau. Ohne diese Elemente ist die Anfrage häufig Screening.",
      },
      {
        "@type": "HowToStep",
        name: "Auf dem richtigen Niveau antworten",
        text: "Für Screening: ein dokumentiertes CO₂e-Ergebnis mit Datum, Methode und klaren Grenzen liefern. Für ein vollständiges Inventar: das Lastenheft befolgen.",
      },
      {
        "@type": "HowToStep",
        name: "Überversprechen vermeiden",
        text: "Eine indikative Schätzung nicht als vollständiges Inventar darstellen. Bei unklarer Anfrage eine schriftliche Klarstellung einholen.",
      },
    ],
  };

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a className="text-[#0B3A63] hover:underline underline-offset-4" href={href}>
        {label}
      </a>
    </li>
  );

  const BackToTop = () => (
    <a
      href="#top"
      className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
    >
      Zurück zum Inhaltsverzeichnis
    </a>
  );

  return (
    <section
      id="scope-1-2-3-erklaerung"
      data-section="scope-1-2-3-erklaerung"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          KMU-Leitfaden — Scopes 1/2/3 verstehen und sicher antworten
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Scopes 1, 2, 3: einfache Erklärung für KMU <br />
          <span className="text-[#0B3A63]/90">und was antworten, wenn sie angefragt werden</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Viele CO₂-Anfragen erwähnen <strong>Scopes 1/2/3</strong>. Entscheidend ist die Unterscheidung zwischen <strong>Screening</strong> — ein archivierbares und vergleichbares Dokument — und <strong>vollständigem Inventar</strong> mit Aktivitätsdaten, Umfang, Hypothesen und Nachweisen. Diese Seite gibt eine klare Lesart und eine sichere Antwort.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/de/co2-bilanz-kmu/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Zurück zur Pillar-Seite CO₂-Bilanz KMU
          </Link>

          <Link
            href="/de/generate/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#1FB6C1] text-white hover:bg-[#19AAB4] transition-colors font-semibold"
          >
            Bescheinigung erstellen (Screening) →
          </Link>

          <a
            href="/de/co2-bilanz-kmu/#difference"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Unterschied: indikativ vs Inventar
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Ziel</p>
            <p className="text-gray-700 leading-relaxed">Scopes 1/2/3 verstehen und auf dem erwarteten Niveau antworten, ohne zu überversprechen.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Was Sie vermeiden</p>
            <p className="text-gray-700 leading-relaxed">„Scope“ als Inventarstruktur mit einem dossierfähigen Screening-Dokument verwechseln.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Wann eskalieren</p>
            <p className="text-gray-700 leading-relaxed">Wenn Standard, Umfang, Nachweise oder Assurance ausdrücklich verlangt werden.</p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-14">
          <section className="lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">Inhaltsverzeichnis</p>
              <nav aria-label="Inhaltsverzeichnis Scopes 1/2/3 mobile">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Definition: Scopes in einem Satz" />
                  <TocItem href="#scope123" label="Scope 1 / 2 / 3: Beispiele für KMU" />
                  <TocItem href="#screening-vs-inventar" label="Screening vs vollständiges Inventar" />
                  <TocItem href="#what-to-answer" label="Was antworten: sichere Templates" />
                  <TocItem href="#red-flags" label="Signale formaler Anforderungen" />
                  <TocItem href="#scenarios" label="Konkrete Fälle" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          <section id="definition" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">1) Definition: Scopes 1/2/3 in einem Satz</h2>
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Scopes 1/2/3</strong> sind eine Art, ein Emissionsinventar in CO₂e zu <strong>strukturieren</strong>: <strong>direkt</strong> (Scope 1), <strong>eingekaufte Energie</strong> (Scope 2) und <strong>Wertschöpfungskette</strong> (Scope 3).
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Wichtig: Wenn eine Anfrage „Scopes“ erwähnt, bedeutet das nicht automatisch, dass ein vollständiges Inventar verlangt wird. Viele Anfragen bleiben Screening: Dossier, Vergleichbarkeit, Archivierung.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Rahmen</h3>
              <p className="text-gray-700 leading-relaxed">
                Scopes erscheinen in Einkauf, ESG, Bank- und Versicherungsprozessen sowie in Standardfragebögen, selbst wenn keine externe Prüfung verlangt wird.
              </p>
            </div>
            <div className="mt-6"><BackToTop /></div>
          </section>

          <section id="scope123" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">2) Scope 1 / 2 / 3: konkrete Beispiele für KMU</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scopeCards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">{card.label}</p>
                  <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">{card.title}</h3>
                  <ul className="list-disc ml-5 text-gray-700 space-y-2">
                    {card.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-[760px] w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">Was angefragt wird</th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">Was es bedeutet</th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">KMU-Risiko</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {requirementRows.map((row) => (
                    <tr key={row.asked}>
                      <td className="p-4 text-gray-700">{row.asked}</td>
                      <td className="p-4 text-gray-700">{row.implies}</td>
                      <td className="p-4 text-gray-700">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6"><BackToTop /></div>
          </section>

          <section id="screening-vs-inventar" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">3) Screening vs vollständiges Inventar: die einfache Regel</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Scopes strukturieren ein Inventar. Viele Anfragen, die ein KMU erhält, sind aber dossierorientiert: eine Kennzahl, ein Datum, eine Methode, Grenzen und ein archivierbares Dokument. Entscheidend sind Signale einer formalen Anforderung.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Screening, häufigster Fall</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Ziel: Vergleichbarkeit und Archivierung</li>
                  <li>Format: einfaches Dokument mit Grenzen</li>
                  <li>keine vollständigen Nachweise</li>
                  <li>„Scope“ erwähnt ohne operative Details</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Vollständiges Inventar, seltener Fall</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>vorgegebener Rahmen oder Standard mit detailliertem Umfang</li>
                  <li>Erhebung von Aktivitätsdaten</li>
                  <li>Belege, Hypothesen und Nachweise</li>
                  <li>Prüfung oder Assurance verlangt</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Anti-Fehler-Satz</h3>
              <p className="text-white/90 leading-relaxed">
                Wenn das Lastenheft nicht ausdrücklich Methode, Umfang und Nachweise verlangt, behandeln Sie die Anfrage als Screening und antworten mit einem klaren Dokument: Datum, Methode, sichtbare Grenzen.
              </p>
            </div>
            <div className="mt-6"><BackToTop /></div>
          </section>

          <section id="what-to-answer" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">4) Was antworten: sichere Templates für KMU</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ziel ist eine ehrliche, klar abgegrenzte und dossierfähige Antwort. Damit vermeiden Sie zwei Fehler: nichts liefern und blockieren, oder zu viel versprechen und ein vertragliches Risiko schaffen.
            </p>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Template A — unklare Anfrage, Screening</h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  „Wir stellen einen <strong>indikativen</strong> CO₂e-Indikator für das Jahr [JJJJ] bereit, der für Screening bestimmt ist. Die Methode ist deklariert, die Grenzen sind ausdrücklich genannt: kein Audit, kein vollständiges Inventar, kein CSRD-/ESRS-Reporting. Das Dokument ist datiert und archivierbar.“
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/de/generate/" className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#1FB6C1] text-white hover:bg-[#19AAB4] transition-colors font-semibold">
                  Bescheinigung erstellen (Screening) →
                </Link>
                <Link href="/de/verify/" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">
                  Dokument verifizieren
                </Link>
                <Link href="/de/methodik/" className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                  Methodik und Grenzen
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Template B — es werden „Scopes“ verlangt</h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  „Die Anfrage erwähnt Scopes 1/2/3. Können Sie bestätigen, ob ein <strong>vollständiges Inventar</strong> nach Scopes verlangt wird — inklusive Umfang, Methode, Nachweisen und Assurance-Niveau — oder ob zu diesem Zeitpunkt ein <strong>Screening-Dokument</strong> mit aggregiertem CO₂e-Ergebnis, Methode und klaren Grenzen akzeptiert wird?“
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">Dieses Template schützt das KMU: schriftliche Klarstellung, ohne das Dossier zu blockieren.</p>
            </div>
            <div className="mt-6"><BackToTop /></div>
          </section>

          <section id="red-flags" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">5) Signale: Wann es eine formale Anforderung ist und kein Screening</h2>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Checkliste „formale Anforderung“</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                {formalSignals.map((signal) => <li key={signal}>{signal}</li>)}
              </ul>
              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-gray-700 leading-relaxed">
                  Wenn diese Elemente auftauchen, geht es nicht mehr nur um „Scopes“ in einem Fragebogen. Dann handelt es sich um eine Inventaranforderung. Eine aggregierte indikative Schätzung darf in diesem Fall nicht als vollständiges Inventar dargestellt werden.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/de/methodik/" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">
                    Methodik und Grenzen
                  </Link>
                  <Link href="/de/verify/" className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    Verifizierung verstehen
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6"><BackToTop /></div>
          </section>

          <section id="scenarios" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">6) Konkrete Fälle: Lieferant, Ausschreibung, Bank und Versicherung</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Gleiches Vokabular, unterschiedliche Ziele. Das richtige Szenario zu erkennen verhindert inkohärente Antworten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scenarioCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">{card.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{card.text}</p>
                  <div className="mt-4">
                    <Link className="underline text-[#0B3A63]" href={card.href}>{card.cta}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6"><BackToTop /></div>
          </section>

          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">Auf Scopes 1/2/3 antworten, ohne in die Falle zu geraten</h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Wenn die Anfrage Screening ist, geht es um ein archivierbares Dokument: CO₂e-Ergebnis, Datum, Methode, klare Grenzen und Verifizierung. Wenn die Anforderung formal ist, müssen Umfang, Nachweise und Assurance des Lastenhefts befolgt werden.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/de/generate/" className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold">
                  Bescheinigung erstellen (Screening)
                </Link>
                <Link href="/de/pricing/" className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors">
                  Preis ansehen
                </Link>
                <Link href="/de/verify/" className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors">
                  Dokument verifizieren
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/de/co2-bilanz-kmu/" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">
                Zurück zur Pillar-Seite
              </Link>
              <a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                Nach oben
              </a>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">FAQ — Scopes 1/2/3 für KMU</h2>
            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div key={`${idx}-${item.q}`} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="font-semibold text-[#0B3A63] mb-2">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8"><BackToTop /></div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">Inhaltsverzeichnis</p>
              <nav aria-label="Inhaltsverzeichnis Scopes 1/2/3">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Definition" />
                  <TocItem href="#scope123" label="Scope 1 / 2 / 3" />
                  <TocItem href="#screening-vs-inventar" label="Screening vs Inventar" />
                  <TocItem href="#what-to-answer" label="Was antworten" />
                  <TocItem href="#red-flags" label="Anforderungssignale" />
                  <TocItem href="#scenarios" label="Konkrete Fälle" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Umfang erinnern</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diese Seite hilft, auf Scope-1/2/3-Anfragen in Screening-Kontexten zu antworten: Einkauf, Ausschreibung, Bank oder Versicherung. Certif-Scope erstellt eine indikative spend-based CO₂e-Schätzung — Ausgaben × Faktoren — mit aggregiertem Ergebnis und klaren Grenzen. Es ist kein vollständig nach Scopes aufgeschlüsseltes Inventar.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/de/methodik/" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">
                  Methodik
                </Link>
                <Link href="/de/verify/" className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                  Verifizierung
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Verwandte Seiten</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link className="underline" href="/de/co2-bilanz-kmu/">Pillar-Seite: CO₂-Bilanz KMU</Link></li>
                <li><Link className="underline" href="/de/co2-nachweis-lieferant/">CO₂-Nachweis Lieferant</Link></li>
                <li><Link className="underline" href="/de/co2-nachweis-ausschreibung/">CO₂-Nachweis Ausschreibung</Link></li>
                <li><Link className="underline" href="/de/verify/">Verifizierung verstehen</Link></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">Schnellzugriff</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/de/" className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                  Startseite DE
                </Link>
                <a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                  Nach oben
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
