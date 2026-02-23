"use client";

import Link from "next/link";

export default function HowItWorksFR() {
  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* MICRO LABEL (SEO-safe) */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
        >
          Bilan carbone PME — processus simplifié (indicatif)
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          Comment ça fonctionne
        </h2>

        {/* INTRO (intent + honesty) */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Un processus en 3 étapes pour produire un <strong>indicateur CO₂e indicatif</strong>{" "}
          (bilan carbone entreprise simplifié) à partir des dépenses annuelles (€), puis générer
          un <strong>document PDF standardisé</strong> utilisable en appels d’offres, banque,
          assurance et screening ESG.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* 3 STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-14">
          {/* STEP 1 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Saisissez les dépenses annuelles
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Renseignez les dépenses annuelles par catégorie. Aucune donnée d’activité, aucune
              donnée physique, aucun justificatif. Ce format vise un <strong>screening</strong>{" "}
              (indicateur CO₂e indicatif), pas un audit.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Calcul spend-based (dépenses × facteurs)
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Le calcul applique une méthode spend-based : <strong>dépenses (€) × facteurs d’émission</strong>.
              Les facteurs proviennent de référentiels reconnus. Le résultat est un{" "}
              <strong>CO₂e agrégé</strong>, cohérent et comparable.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Téléchargez le document CO₂e
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Vous obtenez un PDF standardisé : résultat CO₂e, année couverte, méthode déclarée,
              métadonnées et éléments de vérification. Prêt à transmettre dans un dossier
              institutionnel.
            </p>
          </div>
        </div>

        {/* PRIVACY BY DESIGN — KEY STATEMENT */}
        <p className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Les calculs sont effectués localement dans votre navigateur.
          <br />
          Seul le résultat CO₂e final est transmis pour l’émission du document.
        </p>

        {/* SECONDARY CTA — DISCREET (FIX FR LINK) */}
        <div className="mt-10 text-center">
          <Link
            href="/fr/generate"
            className="inline-block text-sm font-medium text-[#0B3A63] underline hover:text-[#1FB6C1] transition"
          >
            Calculer mon bilan carbone PME (indicatif) →
          </Link>
        </div>

        {/* FOOTER LINE */}
        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          L’ensemble du processus prend moins d’une minute.
        </p>
      </div>
    </section>
  );
}
