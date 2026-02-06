"use client";

export default function Section5() {
  return (
    <section
      id="data-boundaries-prohibited-interpretations"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER */}
      <div className="p-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">5.</span>
          Limites des données &amp; interprétations interdites
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          Cette section précise ce que représente le résultat produit par Certif-Scope
          et, plus important encore, ce qu’il ne représente pas. Ces limites empêchent
          toute interprétation incorrecte des valeurs indicatives de CO₂e et garantissent
          que les institutions utilisent les résultats dans un cadre juridique et
          méthodologique approprié.
        </p>
      </div>

      {/* BLOCK — Ce que représentent les données */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Ce que représentent les données
        </h3>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Des valeurs indicatives de CO₂e dérivées exclusivement de dépenses financières.</li>
          <li>• Des estimations par catégorie basées sur des intensités carbone économiques moyennes.</li>
          <li>• Une modélisation spend-based alignée avec les recommandations du GHG Protocol.</li>
          <li>• Un résultat reproductible, associé à une version de calcul définie.</li>
          <li>• Un indicateur non contraignant destiné à un pré-screening institutionnel.</li>
        </ul>
      </div>

      {/* BLOCK — Ce que les données ne représentent PAS */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Ce que les données ne représentent PAS
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Le résultat ne doit pas être interprété comme une mesure précise, une
          vérification ou un rapport d’émissions physiques. Il ne représente notamment pas :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Les émissions opérationnelles réelles d’une entreprise.</li>
          <li>• Des données d’émissions primaires spécifiques aux fournisseurs.</li>
          <li>• Des mesures basées sur l’activité ou des relevés physiques (kWh, km, carburant, chaleur, etc.).</li>
          <li>• Une analyse de cycle de vie ou une évaluation cradle-to-gate.</li>
          <li>• Des données acceptées dans le cadre CSRD/ESRS ou d’un audit ISO certifié.</li>
          <li>• Une preuve utilisable dans des déclarations réglementaires ou environnementales.</li>
        </ul>
      </div>

      {/* BLOCK — Interprétations interdites */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Interprétations interdites
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Afin de préserver l’intégrité juridique et d’éviter tout risque institutionnel,
          les interprétations suivantes sont explicitement interdites :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Présenter la valeur comme des émissions certifiées, auditées ou validées.</li>
          <li>• Utiliser la valeur comme preuve de conformité d’un fournisseur.</li>
          <li>• Déduire une performance environnementale ou un gain d’efficacité.</li>
          <li>• Supposer une équivalence avec des déclarations réglementaires obligatoires.</li>
          <li>• Utiliser le résultat dans des allégations marketing ou ESG.</li>
          <li>• Interpréter l’estimation comme une mesure Scope 1 ou Scope 2.</li>
        </ul>
      </div>

      {/* BLOCK — Pourquoi ces limites sont nécessaires */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Pourquoi ces limites sont nécessaires
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          Les modèles spend-based reposent sur des moyennes économiques et ne peuvent
          pas refléter avec précision des émissions physiques réelles. Les cadres
          réglementaires exigent des données mesurables, vérifiables et basées sur
          l’activité. Sans ces limites explicites, un risque d’interprétation erronée
          pourrait compromettre la conformité réglementaire et exposer les organisations
          à des risques juridiques.
        </p>
      </div>

      {/* BLOCK — Avertissement contre la mauvaise représentation */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Avertissement contre la mauvaise représentation
        </h3>

        <p className="mt-4 text-white/90 leading-relaxed max-w-5xl relative z-10">
          Toute présentation des valeurs indicatives de Certif-Scope comme des émissions
          vérifiées, comme une déclaration conforme à une réglementation ou comme une
          preuve de performance environnementale constitue une mauvaise représentation.
          Les institutions demeurent juridiquement responsables de toute interprétation
          ou communication incorrecte des résultats.
        </p>
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
