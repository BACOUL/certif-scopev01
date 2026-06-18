// PATH: src/app/de/product/page.tsx

import type { Metadata } from "next";

import Section1DE from "./sections/Section1";
import Section2DE from "./sections/Section2";
import Section3DE from "./sections/Section3";
import Section4DE from "./sections/Section4";
import Section5DE from "./sections/Section5";
import Section6DE from "./sections/Section6";
import Section7DE from "./sections/Section7";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung KMU: Produkt, PDF und Grenzen | Certif-Scope",
  description:
    "Entdecken Sie die Certif-Scope CO₂e-Bescheinigung: ein indikatives CO₂e-Dokument für 89 €, spend-based, mit verifizierbarer ID, für Kunden, Banken, Versicherungen und Ausschreibungen. Kein Audit, kein CSRD-/ESRS-Reporting.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/product/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/",
      de: "https://www.certif-scope.com/de/product/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung KMU: Produkt, PDF und Grenzen | Certif-Scope",
    description:
      "Indikative CO₂e-Bescheinigung auf Ausgabenbasis: standardisiertes Dokument, verifizierbare ID, Nutzung für Kunde, Bank, Versicherung oder Ausschreibung. Nicht regulatorisch.",
    url: "https://www.certif-scope.com/de/product/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function ProductPageDE() {
  return (
    <section id="product" data-section="product" className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Certif-Scope CO₂e-Bescheinigung",
            description:
              "Indikative und standardisierte CO₂e-Bescheinigung auf Ausgabenbasis, entwickelt, um ein einfaches CO₂e-Dokument mit verifizierbarer ID für Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungsdossiers bereitzustellen.",
            provider: {
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "89",
              url: "https://www.certif-scope.com/de/pricing/",
            },
          }),
        }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">CO₂e-Bescheinigung — Produkt</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">Produktübersicht</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">Eine strukturierte Präsentation der CO₂e-Bescheinigung: Nutzen, Anwendungsfälle, Inhalt des PDF-Dokuments, dokumentarische Integritätsprüfung und ausdrückliche Grenzen.</p>
        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <nav aria-label="Produktabschnitte" className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li><a href="#product-overview" className="hover:text-[#1FB6C1] transition">1. Produktvorstellung</a></li>
          <li><a href="#key-benefits" className="hover:text-[#1FB6C1] transition">2. Zentrale Vorteile</a></li>
          <li><a href="#why-the-product-exists" className="hover:text-[#1FB6C1] transition">3. Warum dieses Produkt existiert</a></li>
          <li><a href="#attestation-pdf-contents" className="hover:text-[#1FB6C1] transition">4. Inhalt des PDF</a></li>
          <li><a href="#verification-and-integrity" className="hover:text-[#1FB6C1] transition">5. Verifizierung & Integrität</a></li>
          <li><a href="#usage-scenarios" className="hover:text-[#1FB6C1] transition">6. Anwendungsszenarien</a></li>
          <li><a href="#limitations-and-fit" className="hover:text-[#1FB6C1] transition">7. Grenzen & Eignung</a></li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto space-y-24">
        <Section1DE />
        <Section2DE />
        <Section3DE />
        <Section4DE />
        <Section5DE />
        <Section6DE />
        <Section7DE />
      </div>
    </section>
  );
}
