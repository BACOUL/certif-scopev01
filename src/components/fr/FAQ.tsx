// PATH: src/components/fr/FAQFR.tsx
"use client";

import { useId, useState } from "react";

export default function FAQFR() {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  const items = [
    {
      q: "Le bilan carbone est-il obligatoire pour une PME ?",
      a: "Dans la majorité des cas, non. La plupart des PME ne sont pas soumises à une obligation réglementaire générale de bilan carbone. En pratique, cette information est surtout demandée par des clients, dans les appels d’offres, lors d’un référencement fournisseur, ou par des banques et assureurs dans le cadre d’une revue ESG ou d’une analyse de risque.",
    },
    {
      q: "Pourquoi un client ou un acheteur demande-t-il un bilan carbone à une PME ?",
      a: "Parce que les grandes entreprises intègrent de plus en plus des critères ESG dans leurs processus achats. Dans ce contexte, un bilan carbone PME ou un indicateur CO₂e sert souvent à comparer les fournisseurs, documenter un dossier ou répondre à une exigence de conformité fournisseur.",
    },
    {
      q: "Puis-je obtenir un document carbone rapidement pour un appel d’offres ou une demande fournisseur ?",
      a: "Oui. Certif-Scope permet de générer un document CO₂e standardisé en quelques minutes à partir des dépenses annuelles. L’objectif est de répondre rapidement à une demande externe sans devoir lancer un audit carbone complet.",
    },
    {
      q: "Quelle est la différence entre Certif-Scope et un bilan carbone complet ?",
      a: "Certif-Scope fournit une estimation CO₂e indicative basée sur les dépenses annuelles. Ce n’est pas un inventaire complet des émissions, ni un audit réglementaire, ni un reporting CSRD/ESRS. C’est une solution simple et pragmatique pour répondre à une demande de tiers quand un indicateur carbone est requis rapidement.",
    },
    {
      q: "Ai-je besoin de factures d’énergie, de kilomètres ou de données d’activité ?",
      a: "Non. Certif-Scope utilise une approche spend-based. Seules les dépenses annuelles par catégories sont nécessaires. Il n’est pas demandé de données physiques comme les kWh, les litres de carburant, les kilomètres parcourus ou des relevés techniques détaillés.",
    },
    {
      q: "Comment faire un bilan carbone PME rapidement avec Certif-Scope ?",
      a: "Le processus est simple : vous renseignez vos dépenses annuelles, le calcul CO₂e est effectué automatiquement selon une logique spend-based, puis vous obtenez un PDF standardisé avec un résultat carbone agrégé et des éléments de vérification documentaire.",
    },
    {
      q: "Combien de temps faut-il pour générer le document ?",
      a: "La génération se fait en quelques minutes selon les informations saisies. Il n’y a ni mission de conseil, ni collecte longue de données opérationnelles, ni délai d’audit.",
    },
    {
      q: "Que contient exactement le document généré ?",
      a: "Le document inclut un résultat CO₂e agrégé, les métadonnées essentielles, la version de la méthodologie utilisée, des informations de vérification documentaire et un format standardisé conçu pour être lu rapidement par un client, une équipe achats, une banque ou un assureur.",
    },
    {
      q: "Cette estimation carbone peut-elle être utilisée dans un dossier bancaire ou d’assurance ?",
      a: "Oui, lorsqu’un indicateur carbone simplifié est demandé dans le cadre d’une revue ESG, d’une analyse de risque ou d’un dossier de financement. Le document ne remplace pas une documentation réglementaire complète, mais il répond à de nombreux besoins de screening et de revue préliminaire.",
    },
    {
      q: "Les clients ou équipes achats acceptent-ils ce type de document ?",
      a: "Oui, lorsqu’ils recherchent un format standardisé, rapide à lire et comparable entre fournisseurs. Certif-Scope n’est pas présenté comme un audit certifié, mais comme un document indicatif structuré pour les cas où un indicateur CO₂e est demandé rapidement.",
    },
    {
      q: "Quelle méthodologie est utilisée ?",
      a: "Certif-Scope applique une méthode spend-based fondée sur la formule dépenses € × facteur d’émission. Cette approche s’appuie sur des référentiels reconnus et des bases de facteurs d’émission versionnées. Elle permet de produire une estimation cohérente à partir des dépenses déclarées, sans collecte de données physiques détaillées.",
    },
    {
      q: "Comment fonctionne la vérification ?",
      a: "Le document intègre des éléments de vérification documentaire : identifiant, QR code ou référence permettant de contrôler l’authenticité et l’intégrité de l’attestation. Cette vérification concerne le document et ne constitue pas un audit ni une validation externe du résultat carbone.",
    },
    {
      q: "Les données financières sont-elles stockées ?",
      a: "Non. Les calculs sont conçus selon une logique privacy by design. Les données détaillées nécessaires au calcul ne sont pas conservées comme base de données métier persistante. Le service vise à limiter au maximum la conservation d’informations sensibles.",
    },
    {
      q: "Quelles sont les limites de cette attestation carbone PME ?",
      a: "Il s’agit d’une estimation indicative basée sur les dépenses. Elle n’est pas auditée, ne couvre pas un inventaire complet des scopes 1, 2 et 3, n’est pas un rapport CSRD/ESRS, et ne remplace pas une mission carbone complète lorsqu’un cadre réglementaire ou contractuel détaillé l’exige.",
    },
  ];

  return (
    <section
      id="faq"
      data-section="faq"
      className="relative w-full py-24 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F3FBFC] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <p className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm mx-auto mb-5">
          FAQ • Bilan carbone PME • Appels d’offres • Banques
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] text-center mb-5 tracking-tight">
          Questions fréquentes sur le bilan carbone PME
        </h2>

        <p className="text-center text-[#475569] max-w-3xl mx-auto text-lg leading-relaxed mb-14">
          Cette FAQ répond aux principales questions sur le{" "}
          <strong className="text-[#0B3A63] font-semibold">
            bilan carbone PME
          </strong>
          , son caractère obligatoire ou non, son usage dans les appels d’offres,
          les demandes clients, les dossiers bancaires et la différence entre une
          estimation CO₂e simplifiée et un audit carbone complet.
        </p>

        <div className="space-y-4" role="list">
          {items.map((item, i) => {
            const btnId = `faq-fr-${uid}-btn-${i}`;
            const panelId = `faq-fr-${uid}-panel-${i}`;

            return (
              <div
                key={`faq-fr-${i}-${item.q}`}
                role="listitem"
                className="overflow-hidden rounded-[20px] border border-[#0B3A63]/10 bg-white shadow-sm"
              >
                <button
                  id={btnId}
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={panelId}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1FB6C1] focus-visible:outline-offset-2"
                >
                  <span className="font-semibold text-[#0B3A63] leading-relaxed">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-xl font-semibold text-[#1FB6C1]"
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-6 pb-6 text-[#475569] text-sm md:text-[15px] leading-relaxed"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/fr/bilan-carbone-pme/"
            className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B3A63] shadow-sm transition-colors hover:text-[#1FB6C1] hover:border-[#1FB6C1]/30"
            aria-label="Lire le guide complet sur le bilan carbone PME"
          >
            Lire le guide complet sur le bilan carbone PME →
          </a>
        </div>

        <div className="mt-10 max-w-3xl mx-auto rounded-[20px] border border-[#0B3A63]/10 bg-white/90 p-5 md:p-6 shadow-sm">
          <p className="text-center text-xs md:text-sm text-[#64748B] leading-relaxed">
            Estimation indicative basée sur les dépenses. Non auditée, non conforme
            CSRD/ESRS, sans couverture complète des scopes 1, 2 et 3, et ne remplace
            pas un inventaire complet des émissions. Les résultats dépendent des
            informations fournies par l’utilisateur.
          </p>
        </div>
      </div>
    </section>
  );
}
