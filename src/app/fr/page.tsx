// PATH: src/app/fr/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import ScrollUp from "@/components/Common/ScrollUp";

// FR — composants définitifs
import HeroFR from "@/components/fr/Hero";
import ProblemSolutionFR from "@/components/fr/ProblemSolution";
import DifferentiationFR from "@/components/fr/Differentiation";
import HowItWorksFR from "@/components/fr/HowItWorks";
import FeaturesFR from "@/components/fr/Features";
import TrustFR from "@/components/fr/Trust";
import AttestationPreviewFR from "@/components/fr/AttestationPreview";
import TestimonialsFR from "@/components/fr/Testimonials";
import FAQFR from "@/components/fr/FAQ";

/* ======================================================
   SEO / IA — META FR (HOME)
   Objectif : capter “bilan carbone entreprise / PME” sans mentir.
   Positionnement : indicateur CO₂e indicatif (spend-based) + attestation vérifiable.
====================================================== */

export const metadata: Metadata = {
  title: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
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
    title: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Non audit, non CSRD/ESRS.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
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
    isPartOf: { "@type": "WebSite", name: "Certif-Scope", url: "https://www.certif-scope.com" },
    inLanguage: "fr-FR",
  };

  return (
    <>
      <ScrollUp />

      <main id="main-content" role="main">
        {/* JSON-LD (Home FR) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />

        {/* 1) Hero */}
        <HeroFR />

        {/* 2) Problème → Solution */}
        <ProblemSolutionFR />

        {/* 3) Valeur ajoutée / Différenciation */}
        <DifferentiationFR />

        {/* 4) How It Works */}
        <HowItWorksFR />

        {/* 5) Features */}
        <FeaturesFR />

        {/* 6) Trust/Brands */}
        <TrustFR />

        {/* 7) Mockup attestation */}
        <AttestationPreviewFR />

        {/* 8) Pricing (obligatoire Home checklist) */}
        <section
          id="pricing"
          data-section="pricing"
          className="py-24 bg-white"
          aria-label="Prix"
        >
          <div className="max-w-6xl mx-auto px-6">
            <p className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3">
              Prix fixe — sans abonnement
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
              Un prix simple, un document dossier-ready
            </h2>

            <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Pour une PME, l’enjeu est souvent de fournir rapidement un document clair (screening),
              sans lancer une démarche longue. Certif-Scope propose un prix fixe, avec une attestation
              standardisée, vérifiable et réutilisable.
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Card 1 */}
              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-7">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Pour commencer</p>
                <h3 className="text-xl font-extrabold text-[#0B3A63] mb-3">Attestation unique</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>résultat CO₂e agrégé (tCO₂e)</li>
                  <li>année couverte + date d’émission</li>
                  <li>méthode déclarée + limites visibles</li>
                  <li>format standardisé (PDF)</li>
                  <li>vérification publique du document</li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/fr/pricing"
                    className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
                  >
                    Voir le prix
                  </Link>
                  <Link
                    href="/fr/generate"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Générer maintenant →
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Usage le plus fréquent</p>
                <h3 className="text-xl font-extrabold text-[#0B3A63] mb-3">Dossier fournisseur / AO</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un document archivable, lisible et cohérent, pour éviter les allers-retours
                  et répondre au bon niveau quand la demande est générique.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <Link
                    href="/fr/bilan-carbone-pme"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Lire : bilan carbone PME →
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-appel-offres"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Lire : appel d’offres →
                  </Link>
                  <Link
                    href="/fr/verify"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Vérifier un document →
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-7 text-white">
                <p className="text-xs uppercase tracking-wider text-white/70 mb-2">Important</p>
                <h3 className="text-xl font-extrabold mb-3">Ce que vous évitez</h3>
                <ul className="list-disc ml-6 text-white/90 space-y-2">
                  <li>sur-promettre un audit ou une conformité</li>
                  <li>présenter une estimation comme un inventaire complet</li>
                  <li>exposer des données financières détaillées</li>
                  <li>perdre du temps sur un format non archivable</li>
                </ul>

                <div className="mt-6">
                  <Link
                    href="/fr/product/compliance"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                  >
                    Conformité & périmètre →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-600">
                Besoin d’un inventaire complet (standard imposé, périmètre détaillé, preuves, vérification externe) ?
                Dans ce cas, il faut suivre le cahier des charges. Certif-Scope est conçu pour le screening dossier-ready.
              </p>
            </div>
          </div>
        </section>

        {/* 9) Testimonials */}
        <TestimonialsFR />

        {/* 10) FAQ */}
        <FAQFR />

        {/* 11) CTA final (obligatoire Home checklist) */}
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
                    Si votre demande est du screening (fournisseur, appel d’offres, banque/assurance),
                    l’objectif est un document lisible, archivable et cohérent : résultat CO₂e agrégé,
                    année, méthode déclarée, limites explicites et vérification.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/fr/generate"
                      className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
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
