// PATH: src/app/de/co2-bilanz-kmu/pdf-vorlage/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CLUSTER DE
   Ziel: "CO2-Bilanz PDF Vorlage" / "CO2-Dokument KMU PDF"
====================================================== */

export const metadata: Metadata = {
  title:
    "PDF-Vorlage: Carbon-Dokument für KMU-Unterlagen | Certif-Scope",
  description:
    "PDF-Vorlage für ein Carbon-Dokument für KMU: Wie ein nutzbares Format für Kunden, Lieferanten, Banken, Versicherer oder Ausschreibungen aussehen kann, ohne es mit einer externen Prüfung zu verwechseln.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/co2-bilanz-kmu/pdf-vorlage/",
    languages: {
      de: "https://www.certif-scope.com/de/co2-bilanz-kmu/pdf-vorlage/",
    },
  },
  openGraph: {
    title: "PDF-Vorlage: Carbon-Dokument für KMU-Unterlagen",
    description:
      "Das erwartete Format eines Carbon-Dokuments als PDF verstehen: Inhalt, Grenzen und Einsatzfälle für einfache dokumentarische Anfragen.",
    url: "https://www.certif-scope.com/de/co2-bilanz-kmu/pdf-vorlage/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function CO2BilanzKMUPDFVorlagePageDE() {
  const pageUrl =
    "https://www.certif-scope.com/de/co2-bilanz-kmu/pdf-vorlage/";

  const faq = [
    {
      q: "Wie sieht eine PDF-Vorlage für ein Carbon-Dokument für KMU aus?",
      a: "Eine PDF-Vorlage für ein Carbon-Dokument für KMU sollte einfach, lesbar und in Unterlagen nutzbar sein. Sie enthält typischerweise ein aggregiertes CO₂e-Ergebnis, das abgedeckte Jahr, die deklarierte Methode, klare Grenzen und ein stabiles Format, das geteilt oder archiviert werden kann.",
    },
    {
      q: "Ersetzt diese PDF-Vorlage eine externe Prüfung oder eine umfassende Inventur?",
      a: "Nein. Eine Screening-PDF ersetzt keine externe Prüfung, keine umfassende Emissionsinventur und keine regulatorische Berichterstattung. Sie hilft bei einer dokumentarischen Anfrage, wenn das erwartete Nachweisniveau allgemein bleibt.",
    },
    {
      q: "Warum sollte ein KMU vor der Antwort auf eine Anfrage eine PDF-Vorlage ansehen?",
      a: "Viele KMU möchten das erwartete Format prüfen, bevor sie Aufwand auslösen. Eine PDF-Vorlage hilft zu verstehen, ob der tatsächliche Bedarf ein klares und archivierbares Dokument ist oder eine deutlich aufwendigere Vorgehensweise.",
    },
    {
      q: "Was sollte ein gutes PDF-Carbon-Dokument für KMU enthalten?",
      a: "Es sollte einen klaren Titel, das abgedeckte Jahr, eine minimale Unternehmensidentifikation, ein aggregiertes CO₂e-Ergebnis, die Methode, die Grenzen des Dokuments und idealerweise eine Kennung oder Prüfmöglichkeit enthalten.",
    },
    {
      q: "In welchen Fällen kann ein solches PDF ausreichen?",
      a: "Häufig in Screening-Fällen: Kunde, Lieferantenregistrierung, Bank, Versicherung, Ausschreibung ohne detaillierte Methodenvorgabe oder Bedarf an einem schnellen Dokument für Unterlagen.",
    },
    {
      q: "Was sollte in einer PDF-Vorlage vermieden werden?",
      a: "Vermieden werden sollte jede Unklarheit über die Reichweite: Das Dokument darf nicht wie eine externe Prüfung wirken, Grenzen dürfen nicht verschwinden und ein indikatives Ergebnis darf nicht als umfassende regulatorische Inventur erscheinen.",
    },
    {
      q: "Warum ist das PDF-Format so wichtig?",
      a: "Ein PDF lässt sich leicht weitergeben, archivieren und in Unterlagen wiederverwenden. In vielen B2B-Anfragen wird vor allem ein stabiles, lesbares und teilbares Dokument erwartet.",
    },
    {
      q: "Folgt das Certif-Scope-Dokument dieser PDF-Logik?",
      a: "Ja. Certif-Scope zielt auf ein indikatives, standardisiertes, prüfbares und wiederverwendbares CO₂e-Dokument für Screening-Situationen, ohne sich als externe Prüfung oder umfassende Inventur darzustellen.",
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
        name: "PDF-Vorlage",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PDF-Vorlage: Carbon-Dokument für KMU",
    url: pageUrl,
    description:
      "PDF-Vorlage für ein Carbon-Dokument für KMU: erwartetes Format, nützlicher Inhalt und Abgrenzung zu einer externen Prüfung.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "de-DE",
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie man eine PDF-Vorlage für ein KMU-Carbon-Dokument liest",
    description:
      "Einfache Vorgehensweise, um zu prüfen, ob eine PDF-Vorlage zu einer dokumentarischen Screening-Anfrage passt oder ob ein höheres Nachweisniveau nötig ist.",
    totalTime: "PT10M",
    inLanguage: "de-DE",
    step: [
      {
        "@type": "HowToStep",
        name: "Erwartetes Format prüfen",
        text: "Prüfen Sie, ob wirklich ein lesbares, stabiles und archivierbares PDF-Dokument für Unterlagen erwartet wird.",
      },
      {
        "@type": "HowToStep",
        name: "Wesentliche Elemente kontrollieren",
        text: "Achten Sie auf CO₂e-Ergebnis, abgedecktes Jahr, Methode, Grenzen und minimale Identifikation.",
      },
      {
        "@type": "HowToStep",
        name: "Mit dem tatsächlichen Dossier vergleichen",
        text: "Wenn das Dossier keine detaillierte Norm und keine externe Verifizierung verlangt, kann eine Screening-PDF häufig passen.",
      },
    ],
  };

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a
        href={href}
        className="text-[#0B3A63] hover:underline underline-offset-4"
      >
        {label}
      </a>
    </li>
  );

  const FAQAnswer = ({ text }: { text: string }) => {
    const idx = text.indexOf(". ");
    const first = idx > 0 ? text.slice(0, idx + 1) : text;
    const rest = idx > 0 ? text.slice(idx + 2) : "";
    return (
      <p className="text-gray-700 leading-relaxed">
        <strong>{first}</strong>
        {rest ? ` ${rest}` : ""}
      </p>
    );
  };

  return (
    <section
      id="co2-bilanz-kmu-pdf-vorlage"
      data-section="co2-bilanz-kmu-pdf-vorlage"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Cluster DE — CO2-Bilanz KMU: PDF-Vorlage
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-4 leading-tight tracking-tight">
          PDF-Vorlage: Carbon-Dokument für KMU-Unterlagen
        </h1>

        <div className="max-w-4xl space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>
              In vielen KMU-Fällen ist der tatsächliche Bedarf keine externe
              Carbon-Prüfung, sondern ein klares, stabiles und archivierbares PDF.
            </strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Ein solches Dokument wird häufig von einem <strong>Kunden</strong>,
            einem <strong>Einkäufer</strong>, einer <strong>Bank</strong>, einem{" "}
            <strong>Versicherer</strong> oder in einer{" "}
            <strong>Ausschreibung</strong> angefragt, wenn es um dokumentarisches
            Screening geht.
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            Diese Seite zeigt, wie eine gute PDF-Vorlage für ein KMU-Carbon-
            Dokument aussehen kann, was sie enthalten sollte und was sie nicht
            behaupten darf.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Schnelle Antwort
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>stabiles und teilbares PDF-Format;</li>
            <li>aggregiertes CO₂e-Ergebnis;</li>
            <li>abgedecktes Jahr und Ausstellungsdatum;</li>
            <li>deklarierte Methode;</li>
            <li>sichtbare Grenzen;</li>
            <li>lesbares und archivierbares Dokument.</li>
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/de/erstellen/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
          >
            Carbon-Dokument erstellen →
          </Link>

          <Link
            href="/de/preise/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Preis ansehen
          </Link>

          <Link
            href="/de/co2-bilanz-kmu/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Zur Pillar-Seite
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Was diese Seite beantwortet
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wie ein Carbon-PDF für KMU-Unterlagen bei Kunden, Lieferanten,
              Banken oder Ausschreibungen aussehen kann.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Kernpunkt
            </p>
            <p className="text-gray-700 leading-relaxed">
              Eine gute PDF-Vorlage ist nicht möglichst komplex, sondern klar,
              konsistent und leicht zu archivieren.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Häufiger Fehler
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ein zu technisches Format suchen, obwohl das Dossier nur ein
              einfaches, stabiles und wiederverwendbares Dokument erwartet.
            </p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-14">
          <section className="lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Inhalt
              </p>
              <nav aria-label="Inhalt PDF-Vorlage CO2-Bilanz KMU (mobil)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#what-it-is" label="Was diese PDF-Vorlage ist" />
                  <TocItem href="#what-it-contains" label="Was sie enthalten sollte" />
                  <TocItem href="#what-it-is-not" label="Was sie nicht ist" />
                  <TocItem href="#sample-layout" label="Typische PDF-Struktur" />
                  <TocItem href="#case-example" label="Konkretes Beispiel" />
                  <TocItem href="#mistakes" label="Häufige Fehler" />
                  <TocItem href="#links" label="Nützliche Seiten" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          <section id="what-it-is" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Was eine PDF-Vorlage für ein KMU-Carbon-Dokument ist
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Eine PDF-Vorlage für ein KMU-Carbon-Dokument ist ein{" "}
              <strong>Darstellungsformat</strong>, um ein CO₂e-Ergebnis klar,
              datiert und wiederverwendbar zu übermitteln. Im KMU-Kontext folgt
              sie häufig einer Logik des <strong>dokumentarischen Screenings</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Diese PDF-Vorlage soll nicht die gesamte Komplexität einer
              umfassenden Inventur abbilden. Sie soll vor allem ein Dokument
              zeigen, das:
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>schnell weitergegeben werden kann;</li>
                <li>in Unterlagen archiviert werden kann;</li>
                <li>ohne Mehrdeutigkeit verstanden wird;</li>
                <li>einem Jahr zugeordnet ist;</li>
                <li>von einem nicht spezialisierten Dritten gelesen werden kann.</li>
              </ul>
            </div>
          </section>

          <section id="what-it-contains" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Was eine gute PDF-Vorlage enthalten sollte
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ein gutes PDF sollte die Informationen enthalten, die der Leser
              tatsächlich sucht. Es darf weder wesentliche Angaben auslassen noch
              unnötig technisch werden.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Wesentliche Elemente
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>klarer Dokumenttitel;</li>
                  <li>abgedecktes Jahr;</li>
                  <li>minimale Identifikation des Unternehmens;</li>
                  <li>aggregiertes CO₂e-Ergebnis;</li>
                  <li>Ausstellungsdatum;</li>
                  <li>deklarierte Methode.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Mindesttransparenz
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Grenzen des Dokuments;</li>
                  <li>keine externe Prüfung;</li>
                  <li>keine umfassende Inventur;</li>
                  <li>keine CSRD-/ESRS-Berichterstattung;</li>
                  <li>Referenz oder Kennung;</li>
                  <li>Prüfmöglichkeit, wenn verfügbar.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="what-it-is-not" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Was diese PDF-Vorlage nicht ist
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dieser Punkt ist zentral. Viele Missverständnisse entstehen, wenn
              von einem einfachen PDF erwartet wird, was eigentlich zu einer
              externen Prüfung oder einer detaillierten Inventur gehört.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Nicht verwechseln
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>PDF-Vorlage für Screening;</li>
                <li>externe Carbon-Prüfung;</li>
                <li>umfassende Emissionsinventur;</li>
                <li>regulatorische Berichterstattung;</li>
                <li>technisches Detaildokument mit erweiterten Nachweisen.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed">
                In vielen KMU-Situationen geht es um ein{" "}
                <strong>klares und teilbares Dokument</strong>, nicht um eine
                lückenlose technische Herleitung.
              </p>
            </div>
          </section>

          <section id="sample-layout" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Typische Struktur einer nutzbaren PDF-Vorlage
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Eine gute PDF-Vorlage folgt einer einfachen, lesbaren und stabilen
              Struktur.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ol className="list-decimal ml-6 text-gray-700 space-y-3">
                <li>
                  <strong>Dokumenttitel</strong> — indikatives CO₂e-Dokument,
                  Carbon-Ergebnis oder Bescheinigung.
                </li>
                <li>
                  <strong>Referenz der Einheit</strong> — minimale Identifikation
                  für das Dossier.
                </li>
                <li>
                  <strong>Abgedecktes Jahr</strong> — zur Vermeidung zeitlicher
                  Unklarheit.
                </li>
                <li>
                  <strong>CO₂e-Ergebnis</strong> — lesbarer aggregierter Wert.
                </li>
                <li>
                  <strong>Deklarierte Methode</strong> — spend-based oder eine
                  andere angegebene Methode.
                </li>
                <li>
                  <strong>Grenzen des Dokuments</strong> — keine externe Prüfung,
                  keine umfassende Inventur, keine CSRD-/ESRS-Berichterstattung.
                </li>
                <li>
                  <strong>Prüfung / Kennung</strong> — wenn ein Kontrollweg oder
                  eine Referenz verfügbar ist.
                </li>
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Prinzip der Lesbarkeit
              </h3>
              <p className="text-white/90 leading-relaxed">
                Ein gutes PDF überzeugt durch Klarheit, Konsistenz und die
                Möglichkeit, es ohne zusätzliche Erklärung zu archivieren.
              </p>
            </div>
          </section>

          <section id="case-example" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Konkretes Beispiel
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Ein KMU erhält eine Lieferantenanfrage: Ein Carbon-Dokument soll
                den Unterlagen beigefügt werden.
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
                <li>das KMU sucht zuerst eine PDF-Vorlage, um das erwartete Format zu verstehen;</li>
                <li>es erkennt, dass vor allem ein lesbares und datiertes Dokument gefragt ist;</li>
                <li>das Dossier verlangt keine detaillierte Norm und keine externe Prüfung;</li>
                <li>ein indikatives, klar strukturiertes PDF mit methodischer Einordnung kann passen;</li>
                <li>das KMU vermeidet dadurch eine zu schwere Antwort auf einen einfachen Bedarf.</li>
              </ul>
            </div>
          </section>

          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) Häufige Fehler
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Fehler Nr. 1
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Eine zu komplexe PDF-Vorlage suchen, obwohl das Dossier ein
                  einfaches und lesbares Format erwartet.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Fehler Nr. 2
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Grenzen des Dokuments weglassen oder es wie eine externe
                  Prüfung wirken lassen.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Fehler Nr. 3
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ein PDF ohne abgedecktes Jahr, ohne Methode oder ohne klare
                  Struktur erstellen.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Fehler Nr. 4
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Das PDF unterschätzen, obwohl es häufig das tatsächlich
                  gelesene und archivierte Dokument ist.
                </p>
              </div>
            </div>
          </section>

          <section id="links" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              7) Nützliche Seiten für den nächsten Schritt
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/de/co2-bilanz-kmu/"
                  >
                    CO2-Bilanz KMU: Pillar-Seite →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/de/co2-bilanz-kmu/pflicht/"
                  >
                    CO2-Bilanz KMU Pflicht →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/de/co2-bilanz-kmu/kosten/"
                  >
                    Was kostet eine CO2-Bilanz für KMU? →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/de/co2-bilanz-kmu/beispiel/"
                  >
                    Beispiel für eine CO2-Bilanz für KMU →
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Die passende PDF-Vorlage ist die, die zum Dossier passt
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope ermöglicht ein indikatives, standardisiertes,
                lesbares, prüfbares und wiederverwendbares CO₂e-Dokument für
                Kunden-, Lieferanten-, Bank-, Versicherungs- oder
                Ausschreibungsunterlagen.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/erstellen/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Carbon-Dokument erstellen
                </Link>
                <Link
                  href="/de/preise/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Preis ansehen
                </Link>
                <Link
                  href="/de/pruefen/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Dokument prüfen
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/de/co2-bilanz-kmu/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Zur Pillar-Seite zurück
              </Link>
              <a
                href="#top"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Seitenanfang
              </a>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              FAQ — PDF-Vorlage: Carbon-Dokument für KMU
            </h2>

            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div
                  key={`${idx}-${item.q}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-[#0B3A63] mb-2">
                    {item.q}
                  </h3>
                  <FAQAnswer text={item.a} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Inhalt
              </p>
              <nav aria-label="Inhalt PDF-Vorlage CO2-Bilanz KMU">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#what-it-is" label="Was diese PDF-Vorlage ist" />
                  <TocItem href="#what-it-contains" label="Was sie enthalten sollte" />
                  <TocItem href="#what-it-is-not" label="Was sie nicht ist" />
                  <TocItem href="#sample-layout" label="Typische PDF-Struktur" />
                  <TocItem href="#case-example" label="Konkretes Beispiel" />
                  <TocItem href="#mistakes" label="Häufige Fehler" />
                  <TocItem href="#links" label="Nützliche Seiten" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Wichtige Einordnung
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diese Seite betrachtet das PDF-Format eines KMU-Carbon-Dokuments
                praktisch: Es geht um Klarheit, Struktur und Transparenz für ein
                Screening-Dokument.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/de/erstellen/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Erstellen
                </Link>
                <Link
                  href="/de/preise/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Preise
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Cluster DE
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="underline" href="/de/co2-bilanz-kmu/">
                    CO2-Bilanz KMU
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/de/co2-bilanz-kmu/pflicht/"
                  >
                    CO2-Bilanz KMU Pflicht
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/de/co2-bilanz-kmu/kosten/"
                  >
                    Was kostet eine CO2-Bilanz für KMU?
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/de/co2-bilanz-kmu/beispiel/"
                  >
                    Beispiel für eine CO2-Bilanz für KMU
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Schnellzugriff
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/de/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Startseite DE
                </Link>
                <a
                  href="#top"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Seitenanfang
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
