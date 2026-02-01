"use client";

import { useState } from "react";

export default function FAQFR() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  const items = [
    // 🔴 HAUTE INTENTION — APPELS D’OFFRES / URGENCE
    {
      q: "Puis-je obtenir une attestation carbone immédiatement pour un appel d’offres ou une demande fournisseur ?",
      a: "Oui. Certif-Scope permet de générer une attestation CO₂e standardisée en moins de 60 secondes, uniquement à partir des dépenses annuelles. Le PDF peut être utilisé immédiatement dans un dossier d’appel d’offres ou de conformité fournisseur."
    },
    {
      q: "Ai-je besoin de factures d’énergie ou de données d’activité physique ?",
      a: "Non. Certif-Scope repose sur une approche spend-based. Seules les dépenses financières annuelles (€) sont requises. Aucun relevé de compteur, donnée carburant ou mesure opérationnelle n’est nécessaire."
    },
    {
      q: "Cette attestation peut-elle être utilisée pour une demande bancaire ou financière ?",
      a: "Oui, dans le cadre du screening ESG et de l’évaluation des risques. L’attestation fournit un indicateur CO₂e standardisé et vérifiable, adapté aux processus de revue bancaire et assurantielle, sans remplacer un rapport réglementaire complet."
    },
    {
      q: "Quelle est la différence avec un bilan carbone réglementaire ?",
      a: "Cette attestation fournit une estimation CO₂e indicative basée sur les dépenses. Elle n’est ni un inventaire certifié ISO ni un rapport CSRD, mais une solution rapide et pragmatique pour répondre aux demandes ESG de tiers."
    },

    // 🟦 PRODUIT / CONFORMITÉ
    {
      q: "Les clients ou équipes achats acceptent-ils cette attestation CO₂e ?",
      a: "Oui. Elle est utilisée dans les processus d’onboarding, de vérification fournisseur et de screening ESG lorsqu’un indicateur CO₂e indicatif est requis. Ce n’est pas un rapport audité, mais un format standardisé facilement comparable."
    },
    {
      q: "Combien de temps faut-il pour générer le document ?",
      a: "Moins d’une minute après saisie des dépenses annuelles (€). Aucun consultant, aucune collecte de données opérationnelles et aucun délai."
    },
    {
      q: "Que reçoit-on exactement ?",
      a: "Un PDF structuré incluant le CO₂e total, la répartition par catégorie, la version de la méthodologie et la période de validité de l’attestation."
    },
    {
      q: "Comment fonctionne la vérification ?",
      a: "L’attestation peut être vérifiée de manière indépendante par des tiers à partir des informations intégrées au document, sans dépendre des serveurs Certif-Scope ni de comptes utilisateurs."
    },
    {
      q: "Quelle méthodologie est utilisée ?",
      a: "Un calcul déterministe spend-based aligné sur le Scope 3 catégorie 1. Il repose sur les dépenses déclarées (€) et des facteurs d’émission versionnés (ADEME, DEFRA, IPCC). Aucun Scope 1–2 et aucune donnée d’activité physique."
    },
    {
      q: "Les données sont-elles conservées ?",
      a: "Non. Les données financières sont utilisées uniquement lors de la génération et ne sont pas stockées. Certif-Scope ne conserve aucune donnée financière détaillée."
    },
    {
      q: "Quelles sont les limites ?",
      a: "Il s’agit d’une estimation indicative basée sur les dépenses. Non auditée, non conforme CSRD/ESRS, sans données physiques, et ne remplace pas un inventaire complet des émissions."
    }
  ];

  return (
    <section
      id="faq"
      data-section="faq"
      className="w-full bg-white dark:bg-gray-900 py-24"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* LABEL */}
        <p className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-2">
          Attestation CO₂e — FAQ
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] text-center mb-12">
          Questions fréquentes
        </h2>

        {/* FAQ ITEMS */}
        <div className="space-y-4" role="list">
          {items.map((item, i) => (
            <div
              key={i}
              role="listitem"
              className="border border-gray-200 rounded-lg"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-item-fr-${i}`}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus-visible:outline focus-visible:outline-[#1FB6C1] focus-visible:outline-2"
              >
                <span className="font-medium text-[#0B3A63]">
                  {item.q}
                </span>
                <span aria-hidden="true" className="text-xl text-[#1FB6C1]">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-item-fr-${i}`}
                  className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                >
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <p className="mt-10 text-center text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
          Estimation indicative basée sur les dépenses. Non auditée, non conforme CSRD/ESRS,
          sans couverture des Scopes 1–2, et ne remplace pas un inventaire complet des émissions.
          Les résultats dépendent exclusivement des données financières fournies par l’utilisateur.
        </p>

      </div>
    </section>
  );
}
