"use client";

export default function Section3() {
  return (
    <section id="s3" className="scroll-mt-24">

      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          Pourquoi ce produit existe
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mt-4">
          Les entreprises européennes, même les plus petites, font désormais face à des exigences
          institutionnelles strictes : appels d’offres publics, services achats, banques,
          assureurs et plateformes imposent un indicateur CO₂ clair, vérifiable et facilement
          interprétable. Jusqu’à présent, obtenir un tel document était long, coûteux et réservé
          aux grandes entreprises disposant d’un budget RSE.
        </p>
      </div>

      {/* MAIN INFO BOX */}
      <div className="bg-[#F8FAFC] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-lg">

        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Un besoin réel et urgent
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Les acheteurs, bailleurs de fonds et auditeurs ne se contentent plus de déclarations
          générales. Ils demandent des preuves chiffrées, normalisées, et surtout vérifiables.
          Les entreprises doivent démontrer leur engagement environnemental par des documents
          structurés, fiables et facilement contrôlables par une tierce partie.
        </p>

        {/* BULLET LIST */}
        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• Les banques demandent des indicateurs CO₂ pour les dossiers de financement.</li>
          <li>• Les services achats exigent des preuves environnementales pour qualifier un fournisseur.</li>
          <li>• Les plateformes (marketplaces, SaaS, mobilité) imposent des indicateurs CO₂ aux vendeurs.</li>
          <li>• Les assureurs et auditeurs renforcent la documentation exigée.</li>
          <li>• Les ONG et grandes entreprises demandent plus de transparence dans la chaîne d'approvisionnement.</li>
        </ul>
      </div>

      {/* PROBLEM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        {/* CARD A */}
        <div className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Les solutions traditionnelles sont trop lentes
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Un audit carbone conventionnel peut prendre plusieurs semaines, nécessite
            de nombreux échanges de documents, et coûte généralement plusieurs milliers d’euros.
          </p>
        </div>

        {/* CARD B */}
        <div className="p-8 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Les PME n’ont pas les ressources
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Elles manquent de budget, de temps et d’expertise pour produire elles-mêmes
            un rapport carbone fiable, compréhensible et conforme aux attentes institutionnelles.
          </p>
        </div>

        {/* CARD C */}
        <div className="p-8 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Manque de standardisation
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Chaque organisme demande un format différent. Les entreprises perdent du temps
            à restructurer leur information pour tenter d’anticiper ce qui sera accepté.
          </p>
        </div>

        {/* CARD D */}
        <div className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Rejets fréquents des documents “maison”
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Les PDF créés en interne sont rarement acceptés. Les institutions demandent une
            source reconnue, un format normalisé, et une méthode clairement vérifiable.
          </p>
        </div>
      </div>

      {/* CTA */}
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
