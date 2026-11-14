// src/app/fr/generate/page.tsx
import type { Metadata } from "next";

import AssessmentForm from "./AssessmentForm";
import SupplierPreviewForm from "@/components/fr/SupplierPreviewForm";

export const metadata: Metadata = {
  title: "Simulation carbone fournisseur et ancienne attestation | Certif-Scope",
  description:
    "Simulez une fiche de données carbone énergie et scopes 1/2 avec facteurs historiques. Nouvelle fiche non vendue ; le formulaire de l’ancienne attestation demeure disponible aux clients historiques.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/generate/",
    languages: {
      fr: "https://www.certif-scope.com/fr/generate/",
      en: "https://www.certif-scope.com/en/generate/",
      de: "https://www.certif-scope.com/de/erstellen/",
      "x-default": "https://www.certif-scope.com/fr/generate/",
    },
  },
  openGraph: {
    title: "Simulation fournisseur et attestation historique | Certif-Scope",
    description:
      "Calcul indicatif énergie, scopes 1 et 2 sur le site existant ; ancienne attestation basée sur les dépenses préservée pour les clients historiques.",
    url: "https://www.certif-scope.com/fr/generate/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function GenerateFRPage() {
  return (
    <section id="generate" className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-8 md:pt-12">
      <header className="mb-9 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B3A63]/70">
          Certif-Scope · nouvelle fiche en préparation
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          Votre simulation de données carbone fournisseur
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#475569]">
          Nous modernisons le formulaire du Certif-Scope existant pour préparer la
          future fiche énergie et scopes 1 et 2. Le calcul ci-dessous est
          indicatif : les facteurs et la méthodologie restent à valider avant
          toute commercialisation.
        </p>
      </header>

      <div className="max-w-5xl">
        <SupplierPreviewForm />
      </div>

      <section className="mt-12 max-w-5xl rounded-[26px] border border-[#0B3A63]/15 bg-[#F8FAFC] p-6 md:p-8">
        <h2 className="text-2xl font-extrabold text-[#0B3A63]">
          Ancienne attestation CO₂e — clients historiques
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#475569]">
          L’ancien formulaire fondé sur sept catégories de dépenses est conservé
          intact pour protéger les anciens parcours et droits. Il ne produit
          pas la nouvelle fiche scopes 1 et 2. Dans cette Preview, les accès
          aux API, les crédits et les paiements sont désactivés.
        </p>
        <details className="mt-5 rounded-xl border border-[#0B3A63]/15 bg-white p-5">
          <summary className="cursor-pointer font-semibold text-[#0B3A63]">
            Consulter le formulaire historique (sans paiement dans la Preview)
          </summary>
          <div className="mt-7">
            <AssessmentForm />
          </div>
        </details>
      </section>
    </section>
  );
}
