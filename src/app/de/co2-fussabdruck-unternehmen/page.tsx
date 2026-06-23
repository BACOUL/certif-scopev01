// PATH: src/app/de/co2-fussabdruck-unternehmen/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA - PAGE DE
   Temporary noindex while /de/* remains in staging per docs/localization/de-DE-runtime-seo-policy.md
====================================================== */

const pageUrl =
  "https://www.certif-scope.com/de/co2-fussabdruck-unternehmen/";

export const metadata: Metadata = {
  title:
    "CO2-Fußabdruck Unternehmen: Pflicht, Kosten und was liefern? | Certif-Scope",
  description:
    "CO2-Fußabdruck Unternehmen: verstehen, was wirklich angefragt wird, ob eine Pflicht besteht, welche Kosten vom Anspruch abhängen und welches Dokument bei Kunden, Ausschreibungen, Lieferanten, Banken oder Versicherern passen kann.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title:
      "CO2-Fußabdruck Unternehmen: Pflicht, Kosten und was liefern?",
    description:
      "Unternehmensleitfaden: Pflicht, Kosten, passendes Dokument und Unterschied zwischen Screening-Antwort und umfassender CO2-Bilanz.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

export default function CO2FussabdruckUnternehmenPageDE() {
  const faq = [
    {
      q: "Was ist ein CO2-Fußabdruck für Unternehmen?",
      a: "Ein CO2-Fußabdruck für Unternehmen ist eine Schätzung der Treibhausgasemissionen, die mit der Tätigkeit eines Unternehmens in einem bestimmten Zeitraum verbunden sind. Je nach Kontext kann damit ein einfaches Screening-Dokument oder eine deutlich umfassendere Bilanz gemeint sein.",
    },
    {
      q: "Ist ein CO2-Fußabdruck für Unternehmen verpflichtend?",
      a: "Nicht allgemein für alle Unternehmen. In der Praxis entstehen viele Anfragen vor allem durch Kunden, Ausschreibungen, Lieferantenregistrierungen, Banken oder Versicherer.",
    },
    {
      q: "Was kostet ein CO2-Fußabdruck für Unternehmen?",
      a: "Die Kosten hängen vom erwarteten Niveau ab. Eine Screening-Antwort ist einfacher und leichter als eine umfassende Bilanz mit detailliertem Umfang, Aktivitätsdaten und externer Prüfung.",
    },
    {
      q: "Was sollte ein CO2-Dokument für Unternehmen enthalten?",
      a: "Ein CO2e-Ergebnis, ein abgedecktes Jahr, eine erklärte Methode, sichtbare Grenzen, ein stabiles Format und eine Prüfmöglichkeit, wenn es sich um ein Screening-Dokument handelt.",
    },
    {
      q: "Worin liegt der Unterschied zwischen Unternehmen und KMU?",
      a: "Das Grundprinzip ist ähnlich. Die Seite CO2-Bilanz KMU richtet sich aber konkreter an kleine und mittlere Unternehmen, die häufig dokumentarische Anfragen erhalten.",
    },
    {
      q: "Wann reicht ein einfaches Dokument aus?",
      a: "Wenn die Anfrage allgemein, dokumentarisch und auf Screening ausgerichtet ist: Lieferant, Ausschreibung, Bank, Versicherung oder ein archivierbarer CO2e-Nachweis.",
    },
    {
      q: "Wann ist ein umfassenderer Ansatz nötig?",
      a: "Wenn ein Standard, ein genauer Umfang, Nachweise, eine detaillierte Aufschlüsselung oder eine externe Prüfung ausdrücklich verlangt werden.",
    },
    {
      q: "Ist eine CO2e-Bescheinigung für Unternehmen prüfbar?",
      a: "Ja, wenn sie eine eindeutige Kennung und eine Kontrolllogik enthält, mit der ein Dritter Herkunft und Integrität des Dokuments prüfen kann.",
    },
  ];

  const relatedPages = [
    {
      title: "CO2-Bilanz KMU",
      text: "Die wichtigste Pillar-Seite für Anforderungen kleiner und mittlerer Unternehmen.",
      href: "/de/co2-bilanz-kmu/",
      cta: "KMU-Seite ansehen",
    },
    {
      title: "CO2-Bescheinigung",
      text: "Der passende Einstieg, wenn die reale Anfrage ein CO2e-Dokument für Screening betrifft.",
      href: "/de/co2-bescheinigung/",
      cta: "CO2-Bescheinigung ansehen",
    },
    {
      title: "CO2-Angaben Ausschreibung",
      text: "Wenn ein CO2-Kriterium in einer Ausschreibung oder einem Vergabedossier auftaucht.",
      href: "/de/co2-angaben-ausschreibung/",
      cta: "Ausschreibungsleitfaden ansehen",
    },
    {
      title: "CO2-Nachweis Lieferanten",
      text: "Wenn es um Lieferantenregistrierung, Einkaufsunterlagen oder Screening im Beschaffungsprozess geht.",
      href: "/de/co2-nachweis-lieferanten/",
      cta: "Lieferantenleitfaden ansehen",
    },
  ];

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com/de/",
    logo: "https://www.certif-scope.com/assets/logo.png",
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
        name: "CO2-Fußabdruck Unternehmen",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Fußabdruck Unternehmen",
    url: pageUrl,
    description:
      "CO2-Fußabdruck Unternehmen: Pflicht, Kosten und passendes Dokument je nach realem Kontext der Anfrage.",
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
    name: "Indikatives CO2e-Dokument für Unternehmen",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikativer CO2e-Indikator für Screening",
    description:
      "Dienst zur Erstellung eines indikativen, spend-based CO2e-Dokuments für Unternehmen, die eine klare, archivierbare und prüfbare dokumentarische Antwort benötigen.",
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

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a
        href={href}
        className="text-[#0B3A63] transition-colors hover:text-[#1FB6C1] hover:underline underline-offset-4"
      >
        {label}
      </a>
    </li>
  );

  return (
    <section
      id="co2-fussabdruck-unternehmen"
      data-section="co2-fussabdruck-unternehmen"
      className="relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
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

      <div id="top" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-8 md:pt-16">
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
            Unternehmen - CO2e - Pflicht - Kosten - Screening
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            CO2-Fußabdruck Unternehmen:
            <br />
            <span className="relative inline-block">
              ist er verpflichtend
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            was kostet er und was liefern?
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Überblick, um das tatsächlich erwartete Niveau in einem CO2-Dossier
            für Unternehmen einzuordnen.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Der Begriff "CO2-Fußabdruck Unternehmen" kann sehr
                unterschiedliche Anforderungen meinen.
              </strong>{" "}
              In manchen Fällen geht es um ein CO2e-Screening-Dokument, das einem
              Dossier beigefügt werden soll. In anderen Fällen ist eine deutlich
              umfassendere CO2-Bilanz mit detailliertem Umfang, Aktivitätsdaten
              und höheren Erwartungen gemeint.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              Diese Seite ist ein breiter Einstieg. Sie führt anschließend zur
              passenden Unterseite:{" "}
              <Link
                href="/de/co2-bilanz-kmu/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                CO2-Bilanz KMU
              </Link>
              ,{" "}
              <Link
                href="/de/co2-bescheinigung/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                CO2-Bescheinigung
              </Link>
              ,{" "}
              <Link
                href="/de/co2-angaben-ausschreibung/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                Ausschreibung
              </Link>{" "}
              oder{" "}
              <Link
                href="/de/co2-nachweis-lieferanten/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                Lieferanten
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Frage 1
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Zielt die Anfrage auf ein Screening-Dokument oder auf eine
                umfassendere CO2-Bilanz?
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Frage 2
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Kommt der Bedarf von einem Kunden, einer Ausschreibung, einer
                Lieferantenregistrierung oder einer Bank?
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Frage 3
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Nennt das Dossier wirklich einen Standard, einen Umfang und
                detaillierte Nachweise?
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/de/erstellen/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
            >
              CO2-Dokument erstellen
            </Link>

            <Link
              href="/de/preise/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Preis ansehen
            </Link>

            <Link
              href="/de/pruefen/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
            >
              Dokument prüfen
            </Link>
          </div>
        </header>

        <section className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0B3A63]">
              In der Praxis meint die Anfrage "CO2-Fußabdruck Unternehmen" oft
              einen dieser Fälle
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                Ein Kunde fordert einen CO2e-Nachweis für ein Dossier an.
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                Eine Ausschreibung enthält ein umweltbezogenes Kriterium.
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                Eine Lieferantenregistrierung stockt ohne CO2-Dokument.
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                Eine Bank oder ein Versicherer bittet um einen einfachen
                ESG-Indikator.
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              Entscheidend ist daher,{" "}
              <strong className="text-[#0B3A63]">
                was das Dossier tatsächlich erwartet
              </strong>
              , statt automatisch von einer umfassenden CO2-Bilanz auszugehen.
            </p>
          </div>
        </section>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <section className="lg:hidden">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Inhalt
                </p>
                <nav
                  aria-label="Inhalt CO2-Fußabdruck Unternehmen mobil"
                  className="mt-4"
                >
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Was ist ein CO2-Fußabdruck Unternehmen?" />
                    <TocItem href="#obligation" label="Ist er verpflichtend?" />
                    <TocItem href="#what-is-expected" label="Was tatsächlich erwartet wird" />
                    <TocItem href="#difference" label="Einfaches Dokument oder umfassende Bilanz" />
                    <TocItem href="#cost" label="Was kostet es?" />
                    <TocItem href="#best-entry" label="Welche Seite danach lesen?" />
                    <TocItem href="#related-guides" label="Verwandte Leitfäden" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            <section id="definition" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Was ist ein CO2-Fußabdruck für Unternehmen?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Ein CO2-Fußabdruck für Unternehmen ist eine Schätzung der
                Treibhausgasemissionen, die mit der Tätigkeit eines Unternehmens
                in einem bestimmten Zeitraum verbunden sind. In der Praxis meint
                dieser Begriff aber sehr unterschiedliche Antwortniveaus.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Übliche Bedeutung in einem Dossier
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Häufig wird ein lesbares, archivierbares, datiertes und
                    wiederverwendbares CO2e-Dokument für ein Kunden-, Lieferanten-
                    oder Bankdossier erwartet.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Technischere Bedeutung
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    In anderen Fällen bezeichnet der Begriff eine umfassendere
                    Bilanz mit Aktivitätsdaten, detailliertem Umfang und einem
                    anspruchsvolleren methodischen Rahmen.
                  </p>
                </div>
              </div>
            </section>

            <section id="obligation" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) CO2-Fußabdruck Unternehmen: ist er verpflichtend?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Nicht allgemein für alle Unternehmen. Sehr häufig ist die
                Anfrage vor allem dokumentarisch: Sie kommt von einem Kunden,
                einer Lieferantenregistrierung, einer Ausschreibung, einer Bank
                oder einem Versicherer.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Wenn es konkret um ein kleines oder mittleres Unternehmen geht,
                ist die Seite{" "}
                <Link
                  href="/de/co2-bilanz-kmu/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  CO2-Bilanz KMU
                </Link>{" "}
                genauer. Wenn die eigentliche Frage die Pflicht betrifft, führt
                die Seite{" "}
                <Link
                  href="/de/co2-bilanz-kmu/pflicht/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  CO2-Bilanz KMU Pflicht
                </Link>{" "}
                direkt zum Kern des Themas.
              </p>
            </section>

            <section id="what-is-expected" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Was in vielen Dossiers tatsächlich erwartet wird
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                In vielen Fällen wird keine detaillierte Inventur erwartet,
                sondern ein einfaches Dokument auf dem passenden Niveau.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Was das Dossier häufig braucht
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>ein schnell verständliches CO2e-Ergebnis;</li>
                  <li>ein abgedecktes Jahr;</li>
                  <li>eine erklärte Methode;</li>
                  <li>sichtbare Grenzen;</li>
                  <li>ein stabiles und archivierbares PDF;</li>
                  <li>eine Prüfmöglichkeit oder Kennung.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    In diesen Fällen ist der beste Einstieg nicht immer
                    "CO2-Fußabdruck Unternehmen", sondern oft{" "}
                    <Link
                      href="/de/co2-bescheinigung/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      CO2-Bescheinigung
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section id="difference" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Einfaches Dokument oder umfassendere Bilanz?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Das richtige Antwortniveau hängt vom Anspruch des Dossiers ab.
                Wichtig ist, weder zu wenig zu liefern noch eine deutlich
                schwerere Vorgehensweise zu wählen, wenn nur ein Screening
                gemeint ist.
              </p>

              <div className="mt-6 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Niveau
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Nutzung
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Komplexität
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Typischer Fall
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">Screening-Dokument</td>
                      <td className="p-4 text-[#475569]">
                        Dossierfähige Antwort
                      </td>
                      <td className="p-4 text-[#475569]">Niedrig bis moderat</td>
                      <td className="p-4 text-[#475569]">
                        Kunde, Lieferant, Bank, Versicherung, allgemeine
                        Ausschreibung
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Umfassende Bilanz</td>
                      <td className="p-4 text-[#475569]">
                        Tiefere Analyse
                      </td>
                      <td className="p-4 text-[#475569]">Hoch</td>
                      <td className="p-4 text-[#475569]">
                        Vorgegebener Standard, detaillierter Umfang,
                        stärkere Nachweise
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="cost" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Was kostet ein CO2-Fußabdruck für Unternehmen?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Die Kosten variieren stark je nach erwartetem Niveau. Eine
                Screening-Antwort ist einfacher, schneller und leichter als eine
                umfassende Vorgehensweise mit detaillierter Datenerhebung,
                Abgrenzungen und breiterem Umfang.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Um die Preislogik genauer zu verstehen, ist die Seite{" "}
                <Link
                  href="/de/co2-bilanz-kmu/kosten/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  Kosten einer CO2-Bilanz für KMU
                </Link>{" "}
                am hilfreichsten.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/preise/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Preis ansehen
                </Link>
              </div>
            </section>

            <section id="best-entry" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Welche Seite sollten Sie danach lesen?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Diese Seite ist bewusst breit angelegt. Der nächste Schritt hängt
                vom realen Kontext der Anfrage ab.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Wenn Sie ein KMU sind
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Lesen Sie{" "}
                    <Link
                      href="/de/co2-bilanz-kmu/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      CO2-Bilanz KMU
                    </Link>
                    .
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Wenn Sie ein Dokument übermitteln möchten
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Lesen Sie{" "}
                    <Link
                      href="/de/co2-bescheinigung/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      CO2-Bescheinigung
                    </Link>
                    .
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Wenn es um eine Ausschreibung geht
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Lesen Sie{" "}
                    <Link
                      href="/de/co2-angaben-ausschreibung/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      CO2-Angaben Ausschreibung
                    </Link>
                    .
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Wenn es ein Lieferantendossier ist
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Lesen Sie{" "}
                    <Link
                      href="/de/co2-nachweis-lieferanten/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      CO2-Nachweis Lieferanten
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section id="related-guides" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                7) Verwandte Leitfäden
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {relatedPages.map((page) => (
                  <div
                    key={page.href}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#0B3A63]">
                      {page.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {page.text}
                    </p>
                    <div className="mt-5">
                      <Link
                        href={page.href}
                        className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                      >
                        {page.cta}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Screening-Antwort
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Ein klares und prüfbares CO2-Dokument für Unternehmen erstellen
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Certif-Scope kann ein indikatives CO2e-Dokument für Kunden-,
                  Lieferanten-, Ausschreibungs-, Bank- und Versicherungsdossiers
                  erstellen, ohne es als Prüfung oder umfassende Bilanz
                  darzustellen.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/de/erstellen/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    CO2-Dokument erstellen
                  </Link>

                  <Link
                    href="/de/co2-bescheinigung/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    CO2-Bescheinigung ansehen
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                FAQ - CO2-Fußabdruck Unternehmen
              </h2>

              <div className="mt-6 space-y-5">
                {faq.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#0B3A63]">
                      {item.q}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Inhalt
                </p>

                <nav aria-label="Inhalt CO2-Fußabdruck Unternehmen" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Was ist ein CO2-Fußabdruck Unternehmen?" />
                    <TocItem href="#obligation" label="Ist er verpflichtend?" />
                    <TocItem href="#what-is-expected" label="Was tatsächlich erwartet wird" />
                    <TocItem href="#difference" label="Einfaches Dokument oder umfassende Bilanz" />
                    <TocItem href="#cost" label="Was kostet es?" />
                    <TocItem href="#best-entry" label="Welche Seite danach lesen?" />
                    <TocItem href="#related-guides" label="Verwandte Leitfäden" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Nützlicher Hinweis
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Diese Seite ist ein breiter Einstieg rund um
                  "CO2-Fußabdruck Unternehmen". Für Screening-Bedarf sind die
                  Seiten zu KMU, Bescheinigung, Lieferanten und Ausschreibungen
                  oft direkter nutzbar.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/de/methodik/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Methodik
                  </Link>
                  <Link
                    href="/de/grenzen-und-compliance/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Grenzen
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Nützliche Links
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#475569]">
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/co2-bilanz-kmu/"
                    >
                      CO2-Bilanz KMU
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/co2-bescheinigung/"
                    >
                      CO2-Bescheinigung
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/co2-angaben-ausschreibung/"
                    >
                      CO2-Angaben Ausschreibung
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/co2-nachweis-lieferanten/"
                    >
                      CO2-Nachweis Lieferanten
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/preise/"
                    >
                      Preise
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Schnellzugriff
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/de/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Startseite DE
                  </Link>
                  <a
                    href="#top"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Nach oben
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
