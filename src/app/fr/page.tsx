// PATH: src/app/fr/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import ScrollUp from "@/components/Common/ScrollUp";

// FR — composants définitifs
import HeroFR from "@/components/fr/Hero";
import UseCaseDecisionTable from "@/components/fr/UseCaseDecisionTable";
import ProblemSolutionFR from "@/components/fr/ProblemSolution";
import DifferentiationFR from "@/components/fr/Differentiation";
import FeaturesFR from "@/components/fr/Features";
import RecipientView from "@/components/fr/RecipientView";
import OfficialReferencesFR from "@/components/fr/OfficialReferences";
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
    "Bilan carbone entreprise / PME : obtenez un indicateur CO₂e indicatif (spend-based : dépenses × facteurs d’émission) avec une attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Méthode inspirée du GHG Protocol Scope 3 et références officielles VSME/EFRAG. Ce document n’est ni un bilan carbone complet, ni un audit, ni un reporting CSRD/ESRS.",
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
    "VSME PME",
    "GHG Protocol spend-based",
    "références carbone PME",
    "méthode spend-based carbone",
    "attestation carbone PME",
  ],
  alternates: {
    canonical: "https://www.certif-scope.com/fr/",
    languages: {
      fr: "https://www.certif-scope.com/fr/",
      de: "https://www.certif-scope.com/de/",
    },
  },
  openGraph: {
    type: "website",
    title:
      "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Références officielles VSME/EFRAG et GHG Protocol Scope 3.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation vérifiable pour appels d’offres, fournisseurs, banques et screening ESG. Méthode inspirée du GHG Protocol Scope 3.",
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
    inLanguage: "fr-FR",
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    url: pageUrl,
    description:
      "Accueil France : indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable, pour screening appels d’offres, fournisseurs, banque et assurance. Méthode inspirée du GHG Protocol Scope 3, avec références officielles VSME/EFRAG. Non audit, non bilan GES réglementaire, non reporting CSRD/ESRS.",
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

        {/* 2) Est-ce adapté à votre demande */}
        <UseCaseDecisionTable />

        {/* 3) Problème / besoin réel */}
        <ProblemSolutionFR />

        {/* 4) Différenciation / pourquoi cette réponse */}
        <DifferentiationFR />

        {/* 5) Produit / document concret */}
        <FeaturesFR />

        {/* 6) Ce que le destinataire verra */}
        <RecipientView />

        {/* 7) Références officielles / légitimation de la méthode */}
        <OfficialReferencesFR />

        {/* 8) Comment ça marche */}
        <HowItWorksFR />

        {/* 9) Cas d’usage terrain */}
        <TestimonialsFR />

        {/* 10) Pricing */}
        <PricingFR />

        {/* 11) FAQ */}
        <FAQFR />

        {/* 12) CTA final */}
        <section
          id="final-cta"
          data-section="final-cta"
          className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
          aria-label="Appel à l’action final"
        >
          <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
          <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
          <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70 md:text-sm">
                    Réponse rapide — format standardisé
                  </p>

                  <h2 className="text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                    Produire une attestation CO₂e indicative, claire et
                    vérifiable
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#0B3A63]/80">
                    Si votre demande relève du screening fournisseur, d’un appel
                    d’offres ou d’une revue banque/assurance, l’objectif est un
                    document lisible, archivable et cohérent : résultat CO₂e
                    agrégé, année, méthode déclarée, limites explicites et
                    vérification.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/fr/generate"
                      className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63]"
                    >
                      Générer mon attestation →
                    </Link>

                    <Link
                      href="/fr/pricing"
                      className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                    >
                      Voir le prix
                    </Link>

                    <Link
                      href="/fr/bilan-carbone-pme"
                      className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/20 px-4 py-3 text-sm font-medium text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8FAFC]"
                    >
                      Lire le guide PME →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
                    <h3 className="mb-3 text-lg font-semibold text-[#0B3A63]">
                      Rappel de périmètre
                    </h3>

                    <ul className="ml-6 list-disc space-y-2 text-sm text-[#0B3A63]/80">
                      <li>estimation indicative en spend-based</li>
                      <li>résultat agrégé en tCO₂e</li>
                      <li>document standardisé et vérifiable</li>
                      <li>non audit, non inventaire complet</li>
                      <li>non reporting CSRD/ESRS</li>
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="/fr/verify"
                        className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-white"
                      >
                        Vérifier →
                      </Link>

                      <Link
                        href="/fr/privacy/"
                        className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-white"
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
                  className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-[#F8FAFC]"
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
