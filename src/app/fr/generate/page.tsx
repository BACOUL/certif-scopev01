// src/app/fr/generate/page.tsx
import type { Metadata } from "next";

import AssessmentForm from "./AssessmentForm";

export const metadata: Metadata = {
  title: "Générer une attestation CO₂e PME | Certif-Scope",
  description:
    "Générez une attestation CO₂e indicative pour PME, basée sur les dépenses, sans audit complet ni stockage des données financières détaillées.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/generate/",
  },
  openGraph: {
    title: "Générer une attestation CO₂e PME | Certif-Scope",
    description:
      "Formulaire simple pour générer une attestation CO₂e indicative, vérifiable et adaptée aux demandes fournisseurs, banques, assurances ou appels d’offres.",
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
          Attestation CO₂e indicative — Génération PME
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Générer une attestation CO₂e indicative pour votre PME
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Remplissez un formulaire simple pour produire une attestation CO₂e
          indicative basée sur les dépenses. Le document est conçu pour répondre
          à une demande fournisseur, bancaire, assurantielle ou d’appel d’offres,
          sans lancer un audit carbone complet.
        </p>

        <div className="mt-6 grid gap-3 text-sm text-[#475569] md:grid-cols-3">
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
            <strong className="block text-[#0B3A63]">Sans audit complet</strong>
            <span>Document indicatif de screening, non CSRD/ESRS.</span>
          </div>
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
            <strong className="block text-[#0B3A63]">Données limitées</strong>
            <span>Aucune donnée financière détaillée n’est conservée.</span>
          </div>
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
            <strong className="block text-[#0B3A63]">PDF vérifiable</strong>
            <span>Attestation standardisée, datée et vérifiable.</span>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="max-w-4xl">
        <AssessmentForm />
      </div>
    </section>
  );
}
