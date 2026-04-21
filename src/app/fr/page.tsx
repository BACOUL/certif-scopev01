// PATH: src/app/fr/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import ScrollUp from "@/components/Common/ScrollUp";

// FR — composants définitifs
import HeroFR from "@/components/fr/Hero";
import ProblemSolutionFR from "@/components/fr/ProblemSolution";
import DifferentiationFR from "@/components/fr/Differentiation";
import FeaturesFR from "@/components/fr/Features";
import HowItWorksFR from "@/components/fr/HowItWorks";
import TestimonialsFR from "@/components/fr/Testimonials";
import PricingFR from "@/components/fr/Pricing";
import FAQFR from "@/components/fr/FAQ";

/* ======================================================
   SEO / IA — META FR (HOME)
   Objectif : capter “bilan carbone entreprise / PME” sans mentir.
   Positionnement : indicateur CO₂e indicatif (spend-based) + attestation vérifiable.
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
  description:
    "Bilan carbone entreprise / PME : obtenez un indicateur CO₂e indicatif (spend-based : dépenses × facteurs d’émission) avec une attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Ce document n’est ni un bilan carbone complet, ni un audit, ni un reporting CSRD/ESRS.",
  keywords: [
    "bilan carbone entreprise",
    "bilan carbone PME",
    "bilan carbone fournisseur",
    "bilan carbone appel d’offres",
    "preuve carbone entreprise",
    "attestation CO2",
    "attestation CO2e",
    "indicateur CO2e",
    "screening ESG fournisseur",
  ],
  alternates: {
    canonical: "https://www.certif-scope.com/fr/",
    languages: {
      en: "https://www.certif-scope.com/",
      fr: "https://www.certif-scope.com/fr/",
      de: "https://www.certif-scope.com/de/",
    },
  },
  openGraph: {
    type: "website",
    title:
      "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Non audit, non CSRD/ESRS.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation vérifiable pour appels d’offres, fournisseurs, banques et screening ESG. Non audit, non CSRD/ESRS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeFR() {
  const pageUrl = "https://www.certif-scope.com/fr/";

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/assets/logo.png",
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    inLanguage: ["fr-FR", "en", "de"],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    url: pageUrl,
    description:
      "Accueil France : indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable, pour screening (appels d’offres, fournisseurs, banque/assurance). Non audit, non CSRD/ESRS.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "fr-FR",
  };

  return (
    <>
      <ScrollUp />

      <main id="main-content" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebPage),
          }}
        />

        {/* 1) Hero */}
        <HeroFR />

        {/* 2) Problème / besoin réel */}
        <ProblemSolutionFR />

        {/* 3) Différenciation / pourquoi cette réponse */}
        <DifferentiationFR />

        {/* 4) Produit / document concret */}
        <FeaturesFR />

        {/* 5) Comment ça marche */}
        <HowItWorksFR />

        {/* 6) Cas d’usage terrain */}
        <TestimonialsFR />

        {/* 7) Pricing */}
        <PricingFR />

        {/* 8) FAQ */}
        <FAQFR />

        {/* 9) CTA final */}
        <section
          id="final-cta"
          data-section="final-cta"
          className="py-24 bg-[#F8FAFC]"
          aria-label="Appel à l’action final"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-10 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <p className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider mb-3">
                    Réponse rapide — format standardisé
                  </p>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-tight">
                    Produire une attestation CO₂e indicative, claire et vérifiable
                  </h2>

                  <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-2xl">
                    Si votre demande relève du screening fournisseur, d’un appel
                    d’offres ou d’une revue banque/assurance, l’objectif est un
                    document lisible, archivable et cohérent : résultat CO₂e
                    agrégé, année, méthode déclarée, limites explicites et
                    vérification.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/fr/generate"
                      className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#1FB6C1] text-white hover:bg-[#19AAB4] transition-colors font-semibold"
                    >
                      Générer mon attestation →
                    </Link>
                    <Link
                      href="/fr/pricing"
                      className="inline-block text-sm px-5 py-2.5 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors font-semibold"
                    >
                      Voir le prix
                    </Link>
                    <Link
                      href="/fr/bilan-carbone-pme"
                      className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Lire le guide PME →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                    <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                      Rappel de périmètre
                    </h3>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
                      <li>estimation indicative (spend-based)</li>
                      <li>résultat agrégé (tCO₂e)</li>
                      <li>non audit, non inventaire complet</li>
                      <li>non CSRD/ESRS</li>
                      <li>vérification publique du document</li>
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="/fr/verify"
                        className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Vérifier →
                      </Link>
                      <Link
                        href="/fr/product/privacy"
                        className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Confidentialité →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#main-content"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Haut de page
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
