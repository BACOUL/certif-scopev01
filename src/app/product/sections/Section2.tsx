"use client";

export default function Section2() {
  return (
    <section id="s2" className="scroll-mt-24">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          Résumé des bénéfices clés
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          Les entreprises ont besoin d’une preuve carbone fiable, immédiate et institutionnellement reconnue. 
          Certif-Scope regroupe en un seul document les exigences des banques, des services achats, des assureurs 
          et des auditeurs pour fluidifier les validations et réduire les rejets.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="bg-[#F8FAFC] dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Attestation immédiate
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Obtenez un document officiel en moins de 30 secondes. Aucun délai, aucune intervention humaine,
            aucun rendez-vous. Idéal pour répondre rapidement à un appel d’offres ou à une demande client urgente.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Format institutionnel
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Le document reprend la structure attendue par les banques, acheteurs et organismes publics : 
            identité complète, méthodologie, facteurs d’émission utilisés, résultat global et sections de vérification.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#F8FAFC] dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Vérification indépendante
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Chaque attestation inclut un identifiant unique et une empreinte cryptographique permettant 
            une authentification indépendante, même hors ligne. Aucun contact avec Certif-Scope n’est requis.
          </p>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

        {/* CARD 4 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Coût maîtrisé et scalable
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Une attestation unique et réutilisable, générée automatiquement. Pas de frais cachés, pas 
            d’abonnement obligatoire, aucun cabinet externe nécessaire. Adapté PME, TPE, startups et indépendants.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="bg-[#F8FAFC] dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Acceptée dans toute l’Europe
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Le format respecte rigoureusement les attentes des institutions européennes, réduisant drastiquement 
            les refus ou les demandes de documents complémentaires.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Méthodologie transparente
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Basée sur des facteurs d’émission reconnus et une approche "spend-based" claire. Chaque étape 
            du calcul est décrite directement dans l’attestation afin d’assurer une lecture facile et un contrôle simple.
          </p>
        </div>
      </div>

      {/* RETURN BUTTON */}
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
