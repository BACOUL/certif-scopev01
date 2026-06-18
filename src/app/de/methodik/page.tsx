// PATH: src/app/de/methodik/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodik CO₂e-Bescheinigung KMU | Certif-Scope",
  description:
    "Verstehen Sie die Certif-Scope Methodik: indikative CO₂e-Bescheinigung auf Ausgabenbasis, Formel, Grenzen, Faktoren, Verifizierung und Einsatzbereich für KMU. Kein Audit, kein CSRD-/ESRS-Bericht.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/methodik/",
    languages: {
      de: "https://www.certif-scope.com/de/methodik/",
      fr: "https://www.certif-scope.com/fr/methodologie/",
    },
  },
  openGraph: {
    title: "Methodik CO₂e-Bescheinigung KMU | Certif-Scope",
    description:
      "Ausgabenbasierte Methodik, klare Grenzen und dokumentarische Verifizierung einer indikativen CO₂e-Bescheinigung für KMU.",
    url: "https://www.certif-scope.com/de/methodik/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/de/methodik/";

const principles = [
  {
    title: "Indikativ statt auditierend",
    text: "Die Methode liefert eine dokumentarische CO₂e-Schätzung. Sie ist nicht als externe Prüfung, Zertifizierung oder vollständiges Treibhausgasinventar zu verwenden.",
  },
  {
    title: "Ausgabenbasiert",
    text: "Die Berechnung nutzt Jahresausgaben nach Kategorien und ordnet ihnen Emissionsfaktoren zu. Sie benötigt keine physischen Verbrauchsdaten.",
  },
  {
    title: "Dokumentarisch nutzbar",
    text: "Das Ergebnis wird als PDF mit Jahr, Methode, Grenzen und Verifizierungsreferenz bereitgestellt, damit es in Dossiers übermittelt werden kann.",
  },
];

const formulaRows = [
  { label: "Eingabe", value: "Jährliche externe Ausgaben nach Kategorie" },
  { label: "Faktor", value: "Emissionsfaktor je Ausgabenkategorie" },
  { label: "Berechnung", value: "Ausgaben × Emissionsfaktor = geschätzte kgCO₂e" },
  { label: "Ausgabe", value: "Aggregiertes Ergebnis in tCO₂e" },
];

const factorCategories = [
  "IT- und digitale Dienstleistungen",
  "Professionelle Dienstleistungen",
  "Waren und Einkäufe",
  "Logistik und Transport",
  "Geschäftsreisen",
  "Unterkunft und Veranstaltungen",
  "Andere externe Ausgaben",
];

const limits = [
  "Keine vollständige CO₂-Bilanz nach aktivitätsbasiertem Modell.",
  "Keine detaillierte Scope-1/2/3-Erhebung.",
  "Keine externe Prüfung der vom Nutzer gelieferten Daten.",
  "Keine Garantie, dass ein Auftraggeber eine indikative Bescheinigung akzeptiert.",
  "Keine Rechtsberatung und kein regulatorischer CSRD-/ESRS-Bericht.",
  "Keine physische Datenerhebung zu kWh, Litern, Kilometern oder Anlagen.",
];

const workflow = [
  {
    title: "1. Angaben erfassen",
    text: "Das KMU gibt Unternehmenskontext, Jahr, Tätigkeitsbereich und externe Ausgaben nach Kategorien ein.",
  },
  {
    title: "2. Schätzung berechnen",
    text: "Certif-Scope wendet eine deterministische spend-based Logik an und berechnet ein aggregiertes CO₂e-Ergebnis.",
  },
  {
    title: "3. Bescheinigung erstellen",
    text: "Das Ergebnis wird in einem PDF mit Methode, Grenzen, Datum, Gültigkeit und Referenz dokumentiert.",
  },
  {
    title: "4. Dokument verifizieren",
    text: "Ein Dritter kann die Bescheinigung über QR-Code, Verifizierungsseite und technische Prüfelemente nachvollziehen.",
  },
];

const useCases = [
  {
    title: "Kunden- und Lieferantenanfragen",
    text: "Geeignet, wenn ein Kunde eine einfache CO₂e-Information verlangt, aber keine bestimmte Norm oder externe Prüfung vorgibt.",
  },
  {
    title: "Ausschreibungen",
    text: "Geeignet, wenn Vergabeunterlagen eine allgemeine CO₂- oder ESG-Anlage akzeptieren. Nicht ausreichend, wenn ein Audit oder eine spezifische Norm verlangt wird.",
  },
  {
    title: "Banken und Versicherungen",
    text: "Geeignet als erstes Umwelt- oder CO₂-Dokument in einem Dossier, wenn keine vollständige Klimabilanz verlangt wird.",
  },
];

const faq = [
  {
    q: "Welche Methode verwendet Certif-Scope?",
    a: "Certif-Scope verwendet eine ausgabenbasierte CO₂e-Schätzung. Die vereinfachte Formel lautet: Ausgaben × Emissionsfaktor = geschätzte CO₂e-Emissionen.",
  },
  {
    q: "Ist die Methode eine vollständige CO₂-Bilanz?",
    a: "Nein. Die Methode ist indikativ und dokumentarisch. Sie ersetzt keine vollständige CO₂-Bilanz, kein Audit, keine externe Prüfung und kein regulatorisches Reporting.",
  },
  {
    q: "Warum nutzt Certif-Scope Ausgaben statt physischer Daten?",
    a: "Der Zweck ist eine schnelle, einfache und begrenzte Bescheinigung für dokumentarische Anfragen. Physische Datenerhebung wäre genauer, aber deutlich schwerer und gehört zu einer vollständigen CO₂-Bilanz.",
  },
  {
    q: "Kann ein Kunde diese Bescheinigung ablehnen?",
    a: "Ja. Wenn ein Kunde eine Norm, ein Audit, eine externe Prüfung oder ein bestimmtes Format verlangt, muss diese Vorgabe eingehalten werden. Certif-Scope ist für einfache Anfragen gedacht.",
  },
  {
    q: "Wer trägt die Verantwortung für die eingegebenen Daten?",
    a: "Der Nutzer bleibt verantwortlich für die Angaben, die er in das Formular eingibt. Certif-Scope dokumentiert die Schätzung, prüft aber nicht extern die wirtschaftliche Richtigkeit der Eingabedaten.",
  },
  {
    q: "Was wird verifiziert?",
    a: "Die Verifizierung betrifft die dokumentarischen Kontrollelemente der Bescheinigung. Sie bestätigt nicht die fachliche Richtigkeit der ursprünglichen Unternehmensdaten.",
  },
];

export default function MethodikPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Methodik der Certif-Scope CO₂e-Bescheinigung",
    url: pageUrl,
    description:
      "Deutsche Methodikseite zur indikativen CO₂e-Bescheinigung für KMU auf Ausgabenbasis.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
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

  return (
    <main id="main-content" role="main" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <section id="methodik" data-section="methodik" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Methodik · CO₂e-Bescheinigung · KMU · Spend-based
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Methodik der indikativen CO₂e-Bescheinigung
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Certif-Scope nutzt eine ausgabenbasierte Methode, um eine schnelle, begrenzte und dokumentarische CO₂e-Schätzung für KMU zu erstellen.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Die Bescheinigung ist für einfache professionelle Anfragen gedacht. Sie ersetzt keine vollständige CO₂-Bilanz, kein Audit und keinen CSRD-/ESRS-Bericht.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]">
                Bescheinigung erstellen
              </Link>
              <Link href="/de/co2e-bescheinigung-kmu/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
                CO₂e-Bescheinigung verstehen
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">Schnelle Antwort für Google und KI-Assistenten</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">Wie berechnet Certif-Scope das CO₂e-Ergebnis?</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope verwendet eine spend-based Methode: jährliche Ausgaben nach Kategorie werden mit Emissionsfaktoren multipliziert. Das Ergebnis ist eine aggregierte, indikative CO₂e-Schätzung in Tonnen CO₂e.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {principles.map((item) => (
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Berechnungslogik</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Die Formel bleibt bewusst einfach</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Die Methode ist für ein schnelles, verständliches und übertragbares Dokument optimiert. Sie soll nicht die Genauigkeit einer vollständigen aktivitätsbasierten Bilanz ersetzen.
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#0B3A63]/10">
                  {formulaRows.map((row) => (
                    <tr key={row.label}>
                      <td className="w-1/3 p-5 font-semibold text-[#0B3A63]">{row.label}</td>
                      <td className="p-5 leading-relaxed text-[#475569]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Kategorien</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Welche Ausgaben werden berücksichtigt?</h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Die Bescheinigung nutzt große Ausgabenkategorien, damit KMU ohne komplexe Datenerhebung eine erste dokumentarische Antwort liefern können.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {factorCategories.map((item) => (
              <li key={item} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#475569]">
                <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Grenzen der Methode</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Was die Methode nicht leisten soll</h2>
              <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
                Eine starke deutsche Version muss besonders klar sein: Certif-Scope ist ein pragmatisches Dokument, kein regulatorisches oder auditierendes System.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {limits.map((item) => (
                <li key={item} className="rounded-2xl border border-white/12 bg-white/8 p-4 text-sm leading-relaxed text-white/82">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Workflow</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Vom Formular zur verifizierbaren Bescheinigung</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <article key={item.title} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Anwendungsbereich</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Wann die Methodik passend ist</h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Die Methode ist passend, wenn die Anfrage dokumentarisch ist und keine spezifische Norm, kein Audit und keine externe Prüfung verlangt.
              </p>
            </div>
            <div className="grid gap-5">
              {useCases.map((item) => (
                <article key={item.title} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">Häufige Fragen zur Methodik</h2>
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
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Methode verstanden</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Erstellen Sie eine indikative CO₂e-Bescheinigung mit klaren Grenzen</h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Nutzen Sie Certif-Scope, wenn Sie eine einfache dokumentarische CO₂e-Antwort benötigen und kein vollständiges Audit verlangt wird.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/de/generate/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                  Bescheinigung erstellen
                </Link>
                <Link href="/de/verify/" className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Verifizierung ansehen
                </Link>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope erstellt eine indikative CO₂e-Bescheinigung auf Basis von Ausgaben. Das Dokument ist kein Audit, keine zertifizierte CO₂-Bilanz, keine externe Prüfung, kein vollständiges Scope-1/2/3-Inventar und kein CSRD-/ESRS-Bericht.
          </p>
        </div>
      </section>
    </main>
  );
}
