"use client";

export default function Section4() {
  return (
    <section
      id="regulatory-non-equivalence-misuse-prevention"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Cadre de non-équivalence réglementaire */}
      <div className="p-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">4.</span>
          Non-équivalence réglementaire &amp; prévention des usages abusifs
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-5xl leading-relaxed">
          Cette section établit formellement que les résultats produits par Certif-Scope ne
          peuvent en aucun cas être considérés comme équivalents à des déclarations
          réglementaires, à des rapports environnementaux obligatoires ou à des calculs
          certifiés. Elle définit également les restrictions destinées à prévenir toute
          utilisation incorrecte ou trompeuse par des institutions, fournisseurs ou auditeurs.
        </p>
      </div>

      {/* BLOCK — Non-équivalence avec les cadres réglementaires */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Non-équivalence avec les cadres réglementaires
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Certif-Scope fournit uniquement des estimations indicatives. Elles ne doivent pas
          être utilisées comme documentation réglementaire obligatoire dans le cadre des
          référentiels suivants :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• CSRD (Corporate Sustainability Reporting Directive)</li>
          <li>• ESRS (European Sustainability Reporting Standards)</li>
          <li>• Déclarations obligatoires liées à la Taxonomie européenne</li>
          <li>• Inventaires certifiés conformes à ISO 14064-1</li>
          <li>• Comptabilité logistique ISO 14083</li>
          <li>• Déclarations carbone spécifiques aux fournisseurs</li>
        </ul>
      </div>

      {/* BLOCK — Règles de prévention des usages abusifs */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Règles de prévention des usages abusifs
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Afin d’éviter toute interprétation incorrecte ou communication trompeuse, les
          restrictions suivantes s’appliquent sans exception :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• Les résultats ne peuvent être qualifiés d’« audités » ou « certifiés ».</li>
          <li>• Les résultats ne peuvent être présentés comme des émissions Scope 1 ou Scope 2.</li>
          <li>• Aucune équivalence avec un dépôt réglementaire ne peut être revendiquée.</li>
          <li>• Aucune utilisation dans des allégations environnementales ou marketing.</li>
          <li>• Aucun mélange avec des données primaires spécifiques aux fournisseurs.</li>
        </ul>
      </div>

      {/* BLOCK — Clarification des responsabilités */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white border border-[#0B3A63] rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Clarification des responsabilités
        </h3>

        <p className="text-white/90 max-w-5xl leading-relaxed mb-4">
          Certif-Scope ne valide pas, n’audite pas et ne corrige pas les données financières
          fournies par l’utilisateur. La responsabilité de l’exactitude des données d’entrée
          incombe exclusivement à l’utilisateur ou à l’institution qui les soumet.
        </p>

        <ul className="space-y-2 text-sm text-white/90 max-w-5xl leading-relaxed">
          <li>• Aucune responsabilité en cas de données inexactes, incomplètes ou trompeuses.</li>
          <li>• Aucune responsabilité concernant l’interprétation par des tiers.</li>
          <li>• Aucune obligation d’alignement automatique avec les évolutions réglementaires futures.</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
