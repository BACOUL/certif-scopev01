// src/app/fr/generate/page.tsx
import type { Metadata } from "next";

import AssessmentForm from "./AssessmentForm";

export const metadata: Metadata = {
  title: "Générer une attestation — Certif-Scope",
  description:
    "Générez une attestation CO₂e indicative basée sur les dépenses, en quelques minutes, sans audit ni compte.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/generate/",
  },
  openGraph: {
    title: "Générer une attestation — Certif-Scope",
    description:
      "Générez une attestation CO₂e indicative basée sur les dépenses, en quelques minutes, sans audit ni compte.",
    url: "https://www.certif-scope.com/fr/generate/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function GenerateFRPage() {
  return (
    <section
      id="generate"
      data-section="generate"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Génération
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Générer une attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Remplissez le formulaire ci-dessous pour générer une attestation CO₂e
          indicative basée sur les dépenses. Aucune donnée financière détaillée
          n’est conservée.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="max-w-4xl">
        <AssessmentForm />
      </div>
    </section>
  );
}
