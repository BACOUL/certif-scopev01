"use client";

// PATH: src/components/fr/Differentiation.tsx

import Link from "next/link";

export default function DifferentiationFR() {
  return (
    <section
      id="differentiation"
      className="py-24 bg-white dark:bg-gray-900"
      data-section="differentiation"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITLE — H2 unique */}
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Pourquoi Certif-Scope est différent
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          Un format CO₂e “screening” clair, standardisé et vérifiable.
        </h2>

        {/* INTRO — courte, non répétitive */}
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope produit un <strong>indicateur CO₂e indicatif</strong> (spend-based : dépenses × facteurs d’émission)
          et une <strong>attestation PDF standardisée</strong> conçue pour être lue rapidement par un tiers.
          L’objectif est un <strong>document de preuve minimale</strong> : transmissible, archivable, et vérifiable.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* FRONTIERE CLAIRE — ce qu’on est / ce qu’on n’est pas */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] dark:bg-gray-900 p-7">
              <p className="text-sm font-semibold text-[#0B3A63] dark:text-white mb-2">
                Conçu pour le screening et la documentation
              </p>
              <ul className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed space-y-2">
                <li>• Répondre vite avec un indicateur CO₂e lisible</li>
                <li>• Fournir un PDF archivable, stable, facile à transmettre</li>
                <li>• Permettre une lecture rapide par achats / banque / assurance</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white dark:bg-gray-900 p-7">
              <p className="text-sm font-semibold text-[#0B3A63] dark:text-white mb-2">
                Pas un audit ni un inventaire GES complet
              </p>
              <ul className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed space-y-2">
                <li>• Pas de Scopes 1–2 détaillés</li>
                <li>• Pas de collecte exhaustive de données d’activité</li>
                <li>• Pas de niveau d’assurance “audit”</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-gray-400 mt-4 text-center leading-relaxed max-w-4xl mx-auto">
            Le bon niveau quand on attend un document CO₂e clair et transmissible. Si un tiers exige un inventaire complet
            ou une vérification de type audit, Certif-Scope n’est pas l’outil adapté.
          </p>

          <p className="text-xs text-slate-500 dark:text-gray-400 mt-3 text-center leading-relaxed max-w-4xl mx-auto">
            En pratique, une exigence “audit” se reconnaît vite : périmètre détaillé, justificatifs demandés et validation formelle.
          </p>
        </div>

        {/* GRID — 3 DIFFERENCIATEURS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* BLOCK 1 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#15B097] mb-4"
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

            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Standardisé et immédiatement lisible
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Même structure d’une entreprise à l’autre : lecture rapide, comparaison facilitée, intégration simple dans un dossier.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#15B097] mb-4"
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

            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Charge minimale côté PME
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Saisie des dépenses annuelles : pas de données physiques, pas d’enquête interne lourde, pas de collecte au cas par cas.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#15B097] mb-4"
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

            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Vérifiable par un tiers
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Identifiant unique + page de vérification : un tiers peut vérifier qu’il s’agit bien du document émis et non modifié.
            </p>
          </div>
        </div>

        {/* FOOTER — institutionnel */}
        <p className="mt-16 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Positionnement : <strong>preuve minimale</strong> pour le screening et la documentation. Méthode déclarée, limites explicites,
          et format stable conçu pour des workflows institutionnels.
        </p>

        {/* CTA LINKS — trailingSlash cohérent */}
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
            aria-label="Comprendre ce que les tiers attendent réellement"
          >
            Ce que les tiers attendent vraiment
          </Link>
        </div>
      </div>
    </section>
  );
}
