"use client";

export default function Section4() {
  return (
    <section id="s4" className="scroll-mt-24">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          La solution proposée par Certif-Scope
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
          Certif-Scope transforme un processus long, coûteux et complexe en une opération 
          automatisée simple, rapide et vérifiable. Chaque attestation est générée en 
          quelques secondes, prête pour les banques, les services achats, les auditeurs 
          et les plateformes institutionnelles.
        </p>
      </div>

      {/* MAIN SOLUTION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT COLUMN – HOW WE SOLVE THE PROBLEM */}
        <div className="bg-[#F8FAFC] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Comment Certif-Scope résout le problème
          </h3>

          <ul className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
            <li>
              <strong className="text-[#0B3A63]">1. Standardisation complète :</strong>  
              Le document utilise une structure fixe, interprétable automatiquement, validée 
              pour l’acceptation institutionnelle.
            </li>
            <li>
              <strong className="text-[#0B3A63]">2. Méthodologie transparente :</strong>  
              Chaque facteur d’émission, hypothèse et calcul est documenté directement dans l’attestation.
            </li>
            <li>
              <strong className="text-[#0B3A63]">3. Vérification indépendante :</strong>  
              Grâce à un identifiant unique et un hash cryptographique, toute organisation 
              peut vérifier l’intégrité du PDF sans contacter Certif-Scope.
            </li>
            <li>
              <strong className="text-[#0B3A63]">4. Production instantanée :</strong>  
              Aucun consultant, aucun rendez-vous, aucune analyse manuelle.
            </li>
            <li>
              <strong className="text-[#0B3A63]">5. Acceptation élargie :</strong>  
              Compatible avec les politiques de validation de banques, assurances, achats et marketplaces.
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN – VISUAL BLOCK */}
        <div className="relative p-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl">
          
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Une interface simple et rapide
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            L’interface Certif-Scope est conçue pour être utilisée en autonomie. Elle ne 
            nécessite aucune expertise environnementale, comptable ou technique.
          </p>

          {/* VISUAL CHECKLIST */}
          <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-start gap-3">
              <span className="text-[#0B3A63] font-bold">•</span>
              Sélection des catégories de dépenses
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#0B3A63] font-bold">•</span>
              Saisie des montants annuels
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#0B3A63] font-bold">•</span>
              Calcul automatique basé sur les facteurs d’émission
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#0B3A63] font-bold">•</span>
              Génération du PDF avec méthodologie intégrée
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#0B3A63] font-bold">•</span>
              Export, partage ou intégration immédiate
            </p>
          </div>

          {/* BOTTOM ILLUSTRATION */}
          <div className="mt-10 text-center">
            <div className="w-full h-40 bg-[#0B3A63]/5 dark:bg-[#0B3A63]/20 rounded-xl border border-[#0B3A63]/20 flex items-center justify-center text-[#0B3A63] dark:text-white">
              Aperçu interface (placeholder)
            </div>
          </div>
        </div>
      </div>

      {/* CTA – RETURN TO SUMMARY */}
      <div className="mt-16 text-center">
        <a
          href="#top"
          className="inline-block px-8 py-3 rounded-lg text-white font-semibold bg-[#0B3A63] hover:bg-[#062945] transition"
        >
          Retour au sommaire
        </a>
      </div>

    </section>
  );
}
