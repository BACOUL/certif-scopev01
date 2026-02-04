// PATH: src/app/fr/product/page.tsx

import type { Metadata } from "next";

import Section1FR from "./sections/Section1";
import Section2FR from "./sections/Section2";
import Section3FR from "./sections/Section3";
import Section4FR from "./sections/Section4";
import Section5FR from "./sections/Section5";
import Section6FR from "./sections/Section6";
import Section7FR from "./sections/Section7";

/* ======================================================
   SEO METADATA — PAGE PRODUIT FR (CANONICAL + HREFLANG)
====================================================== */

export const metadata: Metadata = {
  title: "Attestation CO₂e — Produit | Certif-Scope",
  description:
    "Découvrez l’attestation CO₂e Certif-Scope : une estimation carbone spend-based standardisée, conçue pour les appels d’offres, les banques et les workflows de vérification. Document indicatif, non CSRD/ESRS, non audit.",
  alternates: {
    canonical: "https://certif-scope.com/fr/product",
    languages: {
      en: "https://certif-scope.com/product",
      fr: "https://certif-scope.com/fr/product",
    },
  },
  openGraph: {
    title: "Attestation CO₂e — Produit | Certif-Scope",
    description:
      "Attestation CO₂e indicative basée sur les dépenses : format standardisé, vérifiable, adapté aux usages institutionnels et procurement. Non réglementaire.",
    url: "https://certif-scope.com/fr/product",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function ProductPageFR() {
  return (
    <section
      id="product"
      data-section="product"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — PRODUCT (FR, CANONICAL) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Attestation CO₂e Certif-Scope",
            description:
              "Attestation CO₂e indicative et standardisée, basée sur les dépenses (spend-based), conçue pour la vérification dans les workflows procurement, bancaires et assurantiels.",
            brand: {
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://certif-scope.com",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "89",
              availability: "https://schema.org/InStock",
              url: "https://certif-scope.com/fr/pricing",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* EN-TÊTE PAGE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Produit
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Vue d’ensemble du produit
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Une présentation structurée, standardisée et prête à être vérifiée de
          l’attestation CO₂e : bénéfices, cas d’usage, mécanismes d’intégrité et
          limites explicites.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* SOMMAIRE */}
      <nav
        aria-label="Sections produit"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="#product-overview" className="hover:text-[#15B097] transition">
              1. Présentation du produit
            </a>
          </li>
          <li>
            <a href="#key-benefits" className="hover:text-[#15B097] transition">
              2. Bénéfices clés
            </a>
          </li>
          <li>
            <a
              href="#why-the-product-exists"
              className="hover:text-[#15B097] transition"
            >
              3. Pourquoi ce produit existe
            </a>
          </li>
          <li>
            <a
              href="#attestation-pdf-contents"
              className="hover:text-[#15B097] transition"
            >
              4. Contenu du PDF
            </a>
          </li>
          <li>
            <a
              href="#verification-and-integrity"
              className="hover:text-[#15B097] transition"
            >
              5. Vérification & intégrité
            </a>
          </li>
          <li>
            <a
              href="#usage-scenarios"
              className="hover:text-[#15B097] transition"
            >
              6. Scénarios d’usage
            </a>
          </li>
          <li>
            <a
              href="#limitations-and-fit"
              className="hover:text-[#15B097] transition"
            >
              7. Limites & adéquation
            </a>
          </li>
        </ul>
      </nav>

      {/* CONTENU */}
      <div className="max-w-4xl mx-auto space-y-24">
        <Section1FR />
        <Section2FR />
        <Section3FR />
        <Section4FR />
        <Section5FR />
        <Section6FR />
        <Section7FR />
      </div>
    </section>
  );
}
```0
