// PATH: src/app/fr/product/methodology/sections/Section1.tsx

"use client";

export default function Section1FR() {
  return (
    <section id="s1" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">
          1. Périmètre & finalité de la méthodologie
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mt-6">
          Cette section définit le périmètre exact, les limites et la finalité
          institutionnelle de la méthodologie utilisée par Certif-Scope. Elle
          vise à garantir une interprétation correcte, à prévenir les usages
          inappropriés et à assurer une reproductibilité complète. Le modèle
          s’appuie sur des cadres reconnus (GHG Protocol, ISO 14064-1) tout en
          restant strictement limité à une conversion spend-based de dépenses
          financières en indicateurs CO₂e indicatifs.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mt-4">
          Certif-Scope fonctionne sans abonnement, sans stockage des données et
          délivre un livrable vérifiable par calcul, à prix fixe (paiement
          unique). La méthodologie produit un résultat portable et audit-able
          qui embarque des informations de version et ne dépend d’aucune
          dépendance externe pour une vérification à long terme.
        </p>
      </div>

      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Périmètre défini
        </h3>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• Conversion de dépenses annuelles en estimations CO₂e.</li>
          <li>• Utilisation de facteurs d’émission par catégorie, exprimés en kg CO₂e / €.</li>
          <li>• Alignement avec l’approche spend-based du GHG Protocol Corporate Standard.</li>
          <li>• Sorties déterministes et reproductibles via des facteurs d’émission versionnés.</li>
          <li>• Cas d’usage institutionnels nécessitant un screening rapide et des indicateurs non engageants.</li>
        </ul>

        <div className="mt-8 p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Chaîne de calcul
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Entrées financières (EUR) → Mapping catégories → Sélection des facteurs
            d’émission → Calcul déterministe → Sortie CO₂e avec métadonnées de
            version embarquées.
          </p>
        </div>
      </div>

      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Hors périmètre
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mb-4">
          Les éléments suivants sont explicitement exclus de cette méthodologie
          et ne doivent pas être présumés ni déduits :
        </p>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• Aucune donnée physique d’activité (kWh, km, tonnes transportées, masses de matières).</li>
          <li>• Aucune analyse de cycle de vie (ACV) ou évaluation cradle-to-grave.</li>
          <li>• Aucune émission fournisseur spécifique ni validation de données primaires.</li>
          <li>• Aucun calcul des émissions opérationnelles Scope 1 ou Scope 2.</li>
          <li>• Aucune équivalence à un reporting obligatoire CSRD ou ESRS.</li>
        </ul>
      </div>

      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">
          Alignement réglementaire & standards
        </h3>

        <p className="text-white/90 max-w-4xl leading-relaxed">
          La méthodologie s’appuie sur des référentiels reconnus sans s’y
          substituer. Certif-Scope applique l’approche spend-based notamment
          définie par :
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm">
          <li>• GHG Protocol Corporate Standard – émissions indirectes (Scope 3 spend-based).</li>
          <li>• ISO 14064-1 – principes de pertinence, exactitude, cohérence et transparence.</li>
          <li>• Logique de modélisation EEIO (Environmental Extended Input–Output).</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm max-w-4xl leading-relaxed">
          Ces références renforcent la crédibilité méthodologique sans impliquer
          une conformité complète à des cadres obligatoires tels que la CSRD ou
          les ESRS.
        </p>
      </div>

      <div className="mt-16 p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Validation des entrées & versioning
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          Toutes les entrées doivent être numériques, non négatives et exprimées
          en euros. Les valeurs manquantes sont traitées comme zéro et aucune
          estimation ou extrapolation n’est effectuée. Chaque calcul embarque sa
          version sémantique du jeu de facteurs d’émission (MAJOR.MINOR.PATCH),
          garantissant la reproductibilité et la vérification hors ligne dans le
          temps.
        </p>
      </div>

      <div className="mt-16 p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Finalité institutionnelle
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          La méthodologie est conçue pour des environnements institutionnels
          nécessitant des indicateurs rapides, standardisés et auditables, dans
          des contextes où les données physiques d’activité ne sont pas
          disponibles. Applications typiques :
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>• Screening achats et onboarding fournisseurs.</li>
          <li>• Estimations de risque ESG bancaires (indicateurs non engageants).</li>
          <li>• Contrôles d’éligibilité à des subventions (CO₂e indicatif).</li>
          <li>• Analyses de portefeuilles à grande échelle sous contrainte “données financières בלבד”.</li>
        </ul>
      </div>

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
