// PATH: src/app/de/generate/page.tsx

import type { Metadata } from "next";

import AssessmentForm from "./AssessmentForm";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung erstellen für KMU | Certif-Scope",
  description:
    "Erstellen Sie eine indikative CO₂e-Bescheinigung für KMU auf Ausgabenbasis. PDF für Kundenanfragen, Lieferantenportale, Banken, Versicherungen und Ausschreibungen. Kein Audit, kein CSRD-/ESRS-Bericht.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/generate/",
    languages: {
      de: "https://www.certif-scope.com/de/generate/",
      fr: "https://www.certif-scope.com/fr/generate/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung erstellen für KMU | Certif-Scope",
    description:
      "Einfaches Formular zur Erstellung einer indikativen, verifizierbaren CO₂e-Bescheinigung für Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen.",
    url: "https://www.certif-scope.com/de/generate/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function GenerateDEPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂e-Bescheinigung erstellen für KMU",
    url: "https://www.certif-scope.com/de/generate/",
    description:
      "Formular zur Erstellung einer indikativen CO₂e-Bescheinigung auf Ausgabenbasis für einfache dokumentarische CO₂-Anfragen.",
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
    name: "Indikative CO₂e-Bescheinigung erstellen",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    areaServed: "DE",
    serviceType: "Indikative CO₂e-Bescheinigung auf Ausgabenbasis",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/de/generate/",
    },
  };

  return (
    <main id="main-content" role="main" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />

      <section id="generate" data-section="generate" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto mb-12 max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Indikative CO₂e-Bescheinigung · Erstellung · KMU
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Erstellen Sie eine indikative CO₂e-Bescheinigung für Ihr Unternehmen
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Füllen Sie ein einfaches Formular aus, um eine CO₂e-Schätzung auf Ausgabenbasis zu erstellen. Das Dokument ist für einfache Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen gedacht.
            </p>
            <div className="mx-auto mt-8 grid max-w-5xl gap-3 text-left text-sm text-[#475569] md:grid-cols-3">
              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                <strong className="block text-[#0B3A63]">Kein vollständiges Audit</strong>
                <span>Indikatives Screening-Dokument, kein CSRD-/ESRS-Bericht.</span>
              </div>
              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                <strong className="block text-[#0B3A63]">Begrenzte Dateneingabe</strong>
                <span>Keine detaillierten Finanzdaten werden als Kundendatenbank gespeichert.</span>
              </div>
              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                <strong className="block text-[#0B3A63]">Verifizierbares PDF</strong>
                <span>Standardisierte, datierte und dokumentarisch verifizierbare Bescheinigung.</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-4xl">
            <AssessmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
