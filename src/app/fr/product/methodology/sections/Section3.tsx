"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">
          3. Modèle mathématique
        </h2>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl mt-6 leading-relaxed">
          Cette section décrit la structure mathématique exacte utilisée par le moteur
          de calcul spend-based de Certif-Scope. Elle formalise les règles de calcul,
          les définitions des variables et les contraintes de traitement garantissant
          des résultats déterministes, reproductibles et auditables par des institutions.
        </p>
      </div>

      {/* MODEL FORMULA BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Formule de base
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope utilise un modèle linéaire strict dans lequel les émissions sont
          proportionnelles aux dépenses au sein d’une catégorie donnée. Pour chaque
          catégorie :
        </p>

        <div className="mt-4 p-4 bg-[#F8FAFC] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <code className="text-sm text-[#0B3A63]">
            Eᵢ = Sᵢ × Fᵢ
          </code>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm leading-relaxed">
          Où :
        </p>

        <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
          <li>• <strong>Eᵢ</strong> = émissions de la catégorie i (kg CO₂e)</li>
          <li>• <strong>Sᵢ</strong> = dépenses de la catégorie i (EUR)</li>
          <li>• <strong>Fᵢ</strong> = facteur d’émission de la catégorie i (kg CO₂e / EUR)</li>
        </ul>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Les émissions totales sont calculées par sommation de toutes les catégories :
        </p>

        <div className="mt-4 p-4 bg-[#F8FAFC] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <code className="text-sm text-[#0B3A63]">
            Eₜₒₜₐₗ = Σ (Sᵢ × Fᵢ)
          </code>
        </div>
      </div>

      {/* DETERMINISTIC CHARACTERISTICS */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Propriétés déterministes
        </h3>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm max-w-4xl leading-relaxed">
          <li>• Des entrées identiques produisent toujours des résultats identiques.</li>
          <li>• Aucune hypothèse probabiliste ou prédictive.</li>
          <li>• Aucun modèle de régression, aucune courbe d’ajustement.</li>
          <li>• Aucune variable cachée ni coefficient correctif.</li>
          <li>• Aucune normalisation par fournisseur ou par région.</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed max-w-4xl">
          Ces propriétés garantissent la reproductibilité institutionnelle et la
          traçabilité des calculs.
        </p>
      </div>

      {/* CATEGORY PROCESSING RULES */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Règles de traitement par catégorie
        </h3>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed mb-4">
          Chaque catégorie est traitée indépendamment selon des règles strictes :
        </p>

        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed max-w-4xl">
          <li>• Aucune réallocation entre catégories.</li>
          <li>• Aucune pondération selon le type de fournisseur.</li>
          <li>• Aucune substitution sectorielle.</li>
          <li>• Aucun ajustement inter-catégories.</li>
          <li>• Aucune agrégation intermédiaire avant la somme finale.</li>
        </ul>
      </div>

      {/* ZERO-EXTRAPOLATION RULE */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Politique de non-extrapolation
        </h3>

        <p className="text-white/90 max-w-4xl leading-relaxed">
          Certif-Scope n’extrapole jamais des données manquantes. Lorsqu’une catégorie
          de dépense n’est pas renseignée, sa contribution est considérée comme nulle.
          Aucune estimation n’est produite à partir d’informations partielles.
          Cette règle garantit la transparence et évite toute inflation artificielle
          des résultats.
        </p>
      </div>

      {/* ANTI-DUPLICATION CHECKS */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Logique anti-double comptage
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          Le modèle empêche tout double comptage en imposant l’exclusivité des
          catégories. Une même dépense ne peut être affectée qu’à une seule catégorie.
        </p>

        <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Chaque euro est comptabilisé une seule fois.</li>
          <li>• Aucun chevauchement de catégories autorisé.</li>
          <li>• Aucun découpage multi-facteurs.</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
          }
