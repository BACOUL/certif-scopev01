// PATH: src/app/de/co2-bescheinigung/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "CO2-Bescheinigung Unternehmen: einfaches, prüfbares CO₂e-Dokument | Certif-Scope",
  description:
    "CO2-Bescheinigung für Unternehmen: indikatives CO₂e-Dokument für Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen. Klar, standardisiert, prüfbar und ohne umfassende Treibhausgasinventur.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bescheinigung/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-bescheinigung/",
    },
  },
  openGraph: {
    title:
      "CO2-Bescheinigung Unternehmen: einfaches, prüfbares CO₂e-Dokument",
    description:
      "Schnell auf eine CO₂e-Anfrage reagieren: indikative CO₂e-Bescheinigung, klar, datiert, prüfbar und für KMU-Dossiers nutzbar.",
    url: "https://www.certif-scope.com/de/co2-bescheinigung/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

export default function CO2BescheinigungPageDE() {
  const pageUrl = "https://www.certif-scope.com/de/co2-bescheinigung/";

  const faq = [
    {
      q: "Was ist eine CO2-Bescheinigung?",
      a: "Eine CO2-Bescheinigung ist ein CO₂e-Dokument, das ein Emissionsergebnis, eine Methode, ein Bezugsjahr und klare Grenzen ausweist. Sie wird häufig genutzt, um auf Kunden-, Lieferanten- oder Ausschreibungsanfragen zu reagieren.",
    },
    {
      q: "Ersetzt eine CO2-Bescheinigung eine umfassende Treibhausgasinventur?",
      a: "Nein. Eine CO2-Bescheinigung beantwortet einen dokumentarischen Screening-Bedarf. Sie ersetzt keine umfassende Inventur und keine regulatorische Prüfung.",
    },
    {
      q: "Wann reicht eine CO2-Bescheinigung aus?",
      a: "In vielen KMU-Fällen: Lieferantenaufnahme, Ausschreibung ohne detaillierten technischen Standard, Anfrage eines Kunden, einer Bank oder eines Versicherers.",
    },
    {
      q: "Was enthält eine CO2-Bescheinigung?",
      a: "Ein aggregiertes CO₂e-Ergebnis, ein Bezugsjahr, eine erklärte Methode, klare Grenzen, eine eindeutige Kennung und einen Prüfmechanismus.",
    },
    {
      q: "Ist die CO2-Bescheinigung prüfbar?",
      a: "Ja. Sie enthält eine eindeutige Kennung und kann unabhängig kontrolliert werden, um die Integrität des Dokuments nachzuvollziehen.",
    },
    {
      q: "Ist eine CO2-Bescheinigung für eine Ausschreibung nutzbar?",
      a: "Häufig ja, wenn die Anfrage ein Screening-Dokument verlangt. Wenn die Ausschreibung einen bestimmten Standard, einen detaillierten Umfang oder eine externe Prüfung verlangt, muss dieser Rahmen eingehalten werden.",
    },
    {
      q: "Warum wählen KMU eine CO2-Bescheinigung statt einer umfassenden Inventur?",
      a: "Weil eine CO2-Bescheinigung oft schneller ein klares, archivierbares und wiederverwendbares Dokument liefert, wenn der tatsächliche Bedarf des Dossiers dokumentarisch ist.",
    },
    {
      q: "Welche Daten werden für eine indikative CO2-Bescheinigung benötigt?",
      a: "Jährliche Ausgaben nach Kategorien reichen für ein spend-based Modell aus. Detaillierte physische Aktivitätsdaten sind für dieses Dokument nicht erforderlich.",
    },
  ];

  const relatedPages = [
    {
      title: "CO2-Bescheinigung für KMU",
      text: "Einordnung für kleinere und mittlere Unternehmen: wann ein indikatives CO₂e-Dokument ausreicht und wo die Grenzen liegen.",
      href: "/de/co2-bescheinigung-kmu/",
      cta: "KMU-Kontext ansehen",
    },
    {
      title: "CO2-Bilanz vs. CO2-Bescheinigung",
      text: "Die wichtige Abgrenzung zwischen einem einfachen CO₂e-Dokument und einer deutlich umfassenderen Treibhausgasinventur.",
      href: "/de/co2-bilanz-vs-co2-bescheinigung/",
      cta: "Unterschied verstehen",
    },
    {
      title: "CO2-Bescheinigung für Lieferanten",
      text: "Wie ein Unternehmen auf eine Einkaufs- oder Lieferantenanfrage mit einem Dokument auf angemessenem Detailniveau reagieren kann.",
      href: "/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/",
      cta: "Lieferantenfall ansehen",
    },
    {
      title: "Methodik",
      text: "Die spend-based Logik, die verwendete Formel, die Faktorversionen und die Grenzen der Berechnung nachvollziehen.",
      href: "/de/methodik/",
      cta: "Methodik ansehen",
    },
  ];

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/assets/logo.png",
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
        name: "CO2-Bescheinigung",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bescheinigung Unternehmen",
    url: pageUrl,
    description:
      "CO2-Bescheinigung für Unternehmen: einfaches, prüfbares CO₂e-Dokument für Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "de-DE",
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indikative CO₂e-Bescheinigung für Unternehmen",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    areaServed: "DE",
    serviceType: "Indikatives CO₂e-Dokument für Screening-Anfragen",
    description:
      "Service zur Erstellung einer indikativen spend-based CO₂e-Bescheinigung für Lieferanten-, Ausschreibungs-, Bank-, Versicherungs- und ESG-Screening-Workflows.",
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
      id="co2-bescheinigung"
      data-section="co2-bescheinigung"
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
        {/* HERO / HEADER */}
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
            CO2-Bescheinigung • KMU • Lieferanten • Ausschreibungen
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            CO2-Bescheinigung für Unternehmen:
            <br />
            <span className="relative inline-block">
              einfaches CO₂e-Dokument
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            prüfbar und nutzbar
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Schnelle Antwort auf eine Anfrage von Kunden, Lieferanten, Bank,
            Versicherung oder Ausschreibung.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Eine CO2-Bescheinigung hilft, auf eine dokumentarische
                CO₂e-Anfrage schnell zu reagieren
              </strong>{" "}
              mit einem klaren, datierten, archivierbaren und prüfbaren
              CO₂e-Dokument, ohne automatisch eine umfassende Prüfung zu
              starten.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              In vielen KMU-Fällen wird nicht sofort ein detailliertes
              Treibhausgasinventar erwartet, sondern ein Screening-Dokument auf
              dem richtigen Detailniveau. Diese Seite erklärt, wann eine
              CO2-Bescheinigung ausreichen kann, was sie enthalten sollte und
              wie sie sich von einer{" "}
              <Link
                href="/de/co2-bilanz-vs-co2-bescheinigung/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                umfassenderen CO2-Bilanz
              </Link>{" "}
              oder einem tieferen Analyseprojekt unterscheidet.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Was es ist
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Ein indikatives CO₂e-Dokument mit Ergebnis, Jahr, Methode,
                klaren Grenzen und Prüfmechanismus.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Wann es hilft
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Lieferantenaufnahme, Ausschreibung, Kundenanfrage, Bank,
                Versicherung oder ESG-Screening.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Was es nicht ist
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Keine regulatorische Prüfung, keine umfassende Inventur und
                keine CSRD- oder ESRS-Berichterstattung.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/de/erstellen/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
            >
              CO₂e-Bescheinigung erstellen →
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

        {/* QUICK USE CASE BLOCK */}
        <section className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0B3A63]">
              In der Praxis wird eine CO2-Bescheinigung oft hier angefragt
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                ein Kunde benötigt ein CO₂e-Dokument für seine Unterlagen;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                eine Lieferantenaufnahme stockt, weil ein CO₂e-Beleg fehlt;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                eine Ausschreibung erwähnt ein Umwelt- oder ESG-Kriterium;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                eine Bank oder ein Versicherer fragt ein lesbares ESG-Dokument
                an.
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              In diesen Fällen lautet die eigentliche Frage nicht immer{" "}
              <strong className="text-[#0B3A63]">
                „brauchen wir eine umfassende Inventur?“
              </strong>{" "}
              sondern oft{" "}
              <strong className="text-[#0B3A63]">
                „welches Dokument müssen wir jetzt senden?“
              </strong>
            </p>
          </div>
        </section>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* MAIN */}
          <div className="space-y-14 lg:col-span-8">
            {/* MOBILE TOC */}
            <section className="lg:hidden">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Übersicht
                </p>
                <nav aria-label="Mobile Übersicht CO2-Bescheinigung" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Was ist eine CO2-Bescheinigung?" />
                    <TocItem href="#when-sufficient" label="Wann eine Bescheinigung ausreicht" />
                    <TocItem href="#content" label="Was das Dokument enthalten sollte" />
                    <TocItem href="#difference" label="Bescheinigung vs. umfassende Inventur" />
                    <TocItem href="#use-cases" label="Kunden-, Lieferanten- und Ausschreibungsfälle" />
                    <TocItem href="#verification" label="Prüfung" />
                    <TocItem href="#related-guides" label="Verwandte Leitfäden" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            {/* 1 */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Was ist eine CO2-Bescheinigung?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine CO2-Bescheinigung ist ein{" "}
                <strong className="text-[#0B3A63]">CO₂e-Dokument</strong>, das
                ein Ergebnis, ein Bezugsjahr, eine erklärte Methode und klare
                Grenzen darstellt. Ihre Hauptfunktion ist eine verständliche,
                lesbare und archivierbare Antwort auf eine dokumentarische
                Anfrage.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Für KMU dient sie häufig dazu, schnell auf externe Anfragen zu
                reagieren, wenn eine umfassende Inventur zu lang, zu aufwendig
                oder schlicht nicht verlangt ist. Die Seite{" "}
                <Link
                  href="/de/co2-bilanz-vs-co2-bescheinigung/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  CO2-Bilanz vs. CO2-Bescheinigung
                </Link>{" "}
                ordnet diese Abgrenzung zusätzlich ein.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Was Dritte in einer guten Bescheinigung sofort verstehen
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>das kommunizierte CO₂e-Ergebnis;</li>
                  <li>den abgedeckten Zeitraum;</li>
                  <li>die verwendete Methode;</li>
                  <li>die Grenzen des Dokuments;</li>
                  <li>die Dokumentenidentität und die Prüfungsmöglichkeit.</li>
                </ul>
              </div>
            </section>

            {/* 2 */}
            <section id="when-sufficient" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Wann eine CO2-Bescheinigung ausreichen kann
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine CO2-Bescheinigung reicht häufig aus, wenn es um{" "}
                <strong className="text-[#0B3A63]">
                  dokumentarisches Screening
                </strong>{" "}
                geht. Erwartet wird dann ein archivierbares und vergleichbares
                Dokument, nicht ein technisch umfassendes Fachgutachten.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Häufig ausreichend
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>Lieferantenaufnahme;</li>
                    <li>Ausschreibung ohne vorgegebenen Standard;</li>
                    <li>allgemeine Kundenanfrage;</li>
                    <li>Bank oder Versicherung mit ESG-Screening;</li>
                    <li>schnell übermittelbares PDF-Dokument.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Allein häufig nicht ausreichend
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>ein bestimmter Standard ist ausdrücklich verlangt;</li>
                    <li>ein detaillierter Umfang wird gefordert;</li>
                    <li>technische Nachweise werden verlangt;</li>
                    <li>eine externe Prüfung wird vorgegeben;</li>
                    <li>eine umfassende Inventur wird eindeutig erwartet.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
                Wenn die zentrale Frage lautet, ob ein bestimmter regulatorischer
                Rahmen betroffen ist, hilft die Seite{" "}
                <Link
                  href="/de/grenzen-und-compliance/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  Grenzen und Compliance
                </Link>{" "}
                dabei, formale Anforderungen von einer einfachen
                Dokumentenanforderung zu unterscheiden.
              </p>
            </section>

            {/* 3 */}
            <section id="content" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Was eine CO2-Bescheinigung enthalten sollte
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine gute CO2-Bescheinigung muss nicht lang sein. Sie muss aber
                eindeutig, stabil und ohne Unklarheit über ihren Umfang sein.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Checkliste für das Dokument
                </h3>

                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>aggregiertes CO₂e-Ergebnis;</li>
                  <li>Bezugsjahr und Ausstellungsdatum;</li>
                  <li>erklärte Methode;</li>
                  <li>ausdrückliche Grenzen;</li>
                  <li>standardisiertes PDF;</li>
                  <li>eindeutige Kennung;</li>
                  <li>Prüflogik.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">
                      Wichtiger Punkt:
                    </strong>{" "}
                    Das Dokument muss klar ausweisen, dass es sich um eine
                    indikative Bescheinigung für Screening-Zwecke handelt und
                    nicht um eine externe Prüfung oder eine umfassende Inventur.
                  </p>
                </div>
              </div>
            </section>

            {/* 4 */}
            <section id="difference" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) CO2-Bescheinigung oder umfassende CO2-Bilanz?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine CO2-Bescheinigung und eine umfassendere CO2-Bilanz erfüllen
                nicht denselben Zweck. Die richtige Wahl hängt davon ab, welches
                Detailniveau im Dossier tatsächlich erwartet wird.
              </p>

              <div className="mt-6 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Typ
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Nutzung
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Daten
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Komplexität
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">CO2-Bescheinigung</td>
                      <td className="p-4 text-[#475569]">Screening / Dossier</td>
                      <td className="p-4 text-[#475569]">Jährliche Ausgaben</td>
                      <td className="p-4 text-[#475569]">Niedrig bis moderat</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">
                        Umfassendere CO2-Bilanz
                      </td>
                      <td className="p-4 text-[#475569]">
                        Tiefenanalyse / Inventur
                      </td>
                      <td className="p-4 text-[#475569]">
                        Aktivitätsdaten, Umfang, Annahmen
                      </td>
                      <td className="p-4 text-[#475569]">Hoch</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
                Zur Einordnung von Kosten und Angebot siehe auch die Seite{" "}
                <Link
                  href="/de/preise/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  CO2-Bescheinigung Preis
                </Link>
                . Einen beispielhaften Prüfablauf zeigt die{" "}
                <Link
                  href="/de/pruefen/demo/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  Demo der Dokumentenprüfung
                </Link>
                .
              </p>
            </section>

            {/* 5 */}
            <section id="use-cases" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Kunden-, Lieferanten-, Bank- und Ausschreibungsfälle
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Der Begriff „CO2-Bescheinigung“ erscheint häufig in sehr
                konkreten Situationen. Der Nutzen des Dokuments hängt davon ab,
                in welchem Kontext es angefragt wird.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Kundenanfrage
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Der Kunde benötigt ein einfaches Dokument für sein
                    Lieferantendossier oder seine ESG-Einschätzung.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Lieferantenaufnahme
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Das Dokument hilft, einen administrativen Engpass zu lösen
                    und einen indikativen CO₂e-Beleg auf passendem Niveau zu
                    liefern.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Bank oder Versicherung
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Die Bescheinigung ermöglicht eine schnelle Lesart eines
                    Umweltindikators innerhalb eines Screening-Prozesses.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Ausschreibung
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Das Dokument kann genügen, wenn die Unterlagen keinen
                    detaillierten Referenzrahmen und keine externe Prüfung
                    verlangen.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Lieferantenfall ansehen →
                </Link>
                <Link
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                >
                  Ausschreibungsfall ansehen →
                </Link>
              </div>
            </section>

            {/* 6 */}
            <section id="verification" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Prüfung: warum sie wichtig ist
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Eine nützliche CO2-Bescheinigung sollte nicht nur lesbar sein.
                Sie sollte auch identifizierbar und kontrollierbar bleiben. Das
                macht sie in einem Dossier nachvollziehbarer.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Was die Prüfung leistet
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>klare Dokumentenreferenz;</li>
                  <li>einfachere Kontrolle durch Dritte;</li>
                  <li>weniger Zweifel an der Integrität des Dokuments;</li>
                  <li>bessere Archivierung im Dossier.</li>
                </ul>

                <div className="mt-6">
                  <Link
                    href="/de/pruefen/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                  >
                    Dokument prüfen
                  </Link>
                </div>
              </div>
            </section>

            {/* RELATED GUIDES */}
            <section id="related-guides" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                7) Verwandte Leitfäden
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Die CO2-Bescheinigung ist ein sehr konkreter Einstieg. Die
                folgenden Seiten vertiefen den jeweils passenden Kontext.
              </p>

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
                        {page.cta} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Schnelle Antwort
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Eine klare, standardisierte und prüfbare CO2-Bescheinigung erstellen
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Certif-Scope erstellt ein indikatives CO₂e-Dokument für
                  Kunden-, Lieferanten-, Ausschreibungs-, Bank- und
                  Versicherungs-Workflows, mit erklärter Methode und sichtbaren
                  Grenzen.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/de/erstellen/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    CO₂e-Bescheinigung erstellen
                  </Link>

                  <Link
                    href="/de/preise/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Preis ansehen
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                FAQ — CO2-Bescheinigung
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

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Übersicht
                </p>

                <nav aria-label="Übersicht CO2-Bescheinigung" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Was ist eine CO2-Bescheinigung?" />
                    <TocItem href="#when-sufficient" label="Wann eine Bescheinigung ausreicht" />
                    <TocItem href="#content" label="Was das Dokument enthalten sollte" />
                    <TocItem href="#difference" label="Bescheinigung vs. umfassende Inventur" />
                    <TocItem href="#use-cases" label="Kunden-, Lieferanten- und Ausschreibungsfälle" />
                    <TocItem href="#verification" label="Prüfung" />
                    <TocItem href="#related-guides" label="Verwandte Leitfäden" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Umfang der Seite
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Diese Seite behandelt die CO2-Bescheinigung als indikatives
                  CO₂e-Dokument für Screening-Zwecke. Sie ersetzt keine
                  regulatorische Prüfung, keine umfassende Inventur und keine
                  CSRD- oder ESRS-Berichterstattung.
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
                      href="/de/co2-bescheinigung-kmu/"
                    >
                      CO2-Bescheinigung KMU
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/grenzen-und-compliance/"
                    >
                      Grenzen und Compliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/preise/"
                    >
                      CO2-Bescheinigung Preis
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/"
                    >
                      CO2-Bescheinigung Ausschreibung
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/"
                    >
                      CO2-Bescheinigung Lieferanten
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
