"use client";

// PATH: src/components/fr/Differentiation.tsx

import Link from "next/link";

export default function DifferentiationFR() {
  return (
    <section
      id="differentiation"
      className="py-24 bg-white"
      data-section="differentiation"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITLE — H2 unique */}
        <p className="uppercase text-xs tracking-wider text-[#0B3A63]/60 mb-3">
          Pourquoi Certif-Scope est différent
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          Un document CO₂e lisible en 30 secondes par un tiers.
        </h2>

        {/* INTRO — recentrée : lecture institutionnelle (sans répétitions) */}
        <p className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope génère un <strong>indicateur CO₂e indicatif</strong> (spend-based : dépenses × facteurs d’émission)
          et une <strong>attestation PDF standardisée</strong> conçue pour une lecture immédiate.
          Le format est pensé pour les workflows concrets : achats, onboarding fournisseur, banque et assurance.
        </p>

        <div className="w-20 h-[2px] bg-[#0B3A63]/20 mx-auto my-14" />

        {/* FRONTIERE CLAIRE — ce qu’on est / ce qu’on n’est pas (diff visuelle) */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* WHAT IT IS */}
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7">
              <p className="text-sm font-semibold text-[#0B3A63] mb-2">
                Conçu pour la lecture et l’usage opérationnel
              </p>
              <ul className="text-sm text-slate-700 leading-relaxed space-y-2">
                <li>• Indicateur CO₂e lisible et comparable</li>
                <li>• PDF archivable, stable, facile à transmettre</li>
                <li>• Interprétation rapide par achats / banque / assurance</li>
              </ul>
            </div>

            {/* WHAT IT IS NOT */}
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-7">
              <p className="text-sm font-semibold text-[#0B3A63] mb-2">
                Pas un audit ni un inventaire GES complet
              </p>
              <ul className="text-sm text-slate-700 leading-relaxed space-y-2">
                <li>• Pas de Scopes 1–2 détaillés</li>
                <li>• Pas de collecte exhaustive de données d’activité</li>
                <li>• Pas de niveau d’assurance “audit”</li>
              </ul>
            </div>
          </div>

          {/* Credibility line — sans jargon crypto */}
          <div className="mt-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left">
              <p className="text-sm font-semibold text-[#0B3A63] mb-2">
                Pourquoi un tiers peut l’utiliser rapidement
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Structure stable, méthode déclarée, limites explicites : un acheteur ou un analyste “risque”
                peut comprendre le niveau d’assurance attendu, sans interprétation ambiguë.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-5 text-center leading-relaxed max-w-4xl mx-auto">
            Si un tiers exige un inventaire complet ou une validation de type audit (périmètre détaillé, justificatifs, contrôle formel),
            Certif-Scope n’est pas l’outil adapté.
          </p>
        </div>

        {/* GRID — 3 DIFFERENCIATEURS (cards premium) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* BLOCK 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3A63]/5">
              <svg
                className="h-6 w-6 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Standardisé
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed mx-auto max-w-xs">
              Même structure d’une entreprise à l’autre : lecture plus rapide et comparaison plus simple.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3A63]/5">
              <svg
                className="h-6 w-6 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Minimal côté PME
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed mx-auto max-w-xs">
              Saisie des dépenses annuelles : pas de données physiques, pas d’enquête interne lourde.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3A63]/5">
              <svg
                className="h-6 w-6 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Vérifiable
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed mx-auto max-w-xs">
              Identifiant + page de vérification : un tiers peut confirmer l’authenticité du document.
            </p>
          </div>
        </div>

        {/* FOOTER — institutionnel (sans répétitions) */}
        <p className="mt-16 text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Objectif : un document CO₂e compréhensible, transmissible et cohérent avec les attentes des workflows institutionnels.
        </p>

        {/* CTA LINKS — libellé optimisé sans changer l’URL */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/fr/generate/"
            className="inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white font-semibold hover:opacity-95 transition"
            aria-label="Calculer un indicateur CO₂e indicatif"
          >
            Calculer l’indicateur CO₂e
          </Link>

          <Link
            href="/fr/why-companies-ask/preuve-carbone-entreprise/"
            className="inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            aria-label="Pourquoi on vous demande un bilan carbone et quoi fournir"
          >
            Pourquoi on vous le demande
          </Link>
        </div>
      </div>
    </section>
  );
}
