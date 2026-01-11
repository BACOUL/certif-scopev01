"use client";

export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24">

      {/* TITLE */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          Présentation du produit
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl">
          Certif-Scope permet aux petites et moyennes entreprises d’obtenir immédiatement une attestation
          CO₂ standardisée, claire, structurée et adaptée aux exigences des banques, des services achats,
          des départements conformité et des audits institutionnels en Europe.
        </p>
      </div>

      {/* INTRO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

        {/* CARD 1 */}
        <div className="p-7 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Conçu pour les workflows institutionnels
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            La structure du PDF reprend les formats exigés par les banques, les acheteurs publics,
            les services conformité et les organismes de financement : identité vérifiable, facteurs
            d’émission appliqués, résumé méthodologique, ID de vérification et empreinte chiffrée.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-7 rounded-2xl bg-[#F8FAFC] dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Génération en 30 secondes
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Aucun expert, aucune analyse manuelle. Une simple saisie des dépenses annuelles déclenche un
            calcul immédiat basé sur des facteurs reconnus, suivi de la génération automatique du PDF certifié.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-7 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Vérifiable de manière indépendante
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Chaque attestation possède un identifiant unique et une empreinte cryptographique permettant
            toute vérification externe (banque, acheteur, contrôleur interne) sans dépendre de Certif-Scope.
          </p>
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="mt-20 max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-5">
          Pourquoi ce produit existe-t-il ?
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Les banques, acheteurs et organismes publics exigent désormais des indicateurs CO₂ pour valider
          un fournisseur, octroyer un financement ou répondre à des obligations réglementaires. La majorité
          des PME n’a ni le temps ni le budget pour un audit carbone complet ou un cabinet spécialisé.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Certif-Scope résout ce problème en fournissant une attestation immédiatement exploitable, lisible
          par les institutions et vérifiable automatiquement. L’entreprise gagne du temps, réduit ses coûts
          et améliore son taux de validation fournisseur.
        </p>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• Exigences CO₂ dans la majorité des procédures d’achat B2B</li>
          <li>• Besoin de métriques pour les demandes de financement ou subventions</li>
          <li>• Forte pression réglementaire sur les chaînes d’approvisionnement</li>
          <li>• ESG simplifié : un document standardisé remplace un audit coûteux</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-16">
        <a
          href="#top"
          className="inline-block px-6 py-3 rounded-lg text-white font-semibold bg-[#0B3A63] hover:bg-[#062945] transition"
        >
          Retour au sommaire
        </a>
      </div>

    </section>
  );
}
