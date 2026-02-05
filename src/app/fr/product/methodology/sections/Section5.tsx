"use client";

export default function Section5() {
  return (
    <section id="s5" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          5. Règles de normalisation des entrées
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section formalise les contraintes appliquées aux dépenses déclarées avant le
          calcul CO₂e. Le moteur fondé sur les dépenses exige des valeurs strictement
          structurées et numériques afin de garantir des résultats déterministes, une
          reproductibilité en audit et une comparabilité institutionnelle. Aucune inférence,
          correction, conversion de devise ou estimation n’est jamais effectuée.
        </p>
      </div>

      {/* REQUIRED INPUT FORMAT */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Structure d’entrée requise
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Dépense annuelle par catégorie</li>
          <li>• Valeurs numériques uniquement (entier ou décimal)</li>
          <li>• Devise strictement en euros (EUR)</li>
          <li>• Une valeur = une catégorie, sans multi-affectation</li>
          <li>• Catégories non renseignées = zéro (aucune extrapolation)</li>
        </ul>
      </div>

      {/* HARD VALIDATION RULES */}
      <div className="mt-16 p-10 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Règles de validation strictes (non négociables)
        </h3>

        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Valeurs négatives rejetées</li>
          <li>• Caractères non numériques rejetés</li>
          <li>• Chaînes vides traitées comme zéro</li>
          <li>• Infinity / NaN arrêtent le calcul</li>
          <li>• Formats de devises mixtes rejetés</li>
          <li>• Séparateurs de milliers ignorés, non interprétés</li>
        </ul>

        <p className="mt-4 text-gray-700 text-sm leading-relaxed max-w-4xl">
          Ces règles garantissent qu’un tiers peut reproduire exactement les mêmes contrôles
          d’entrée sans ambiguïté ni hypothèse implicite.
        </p>
      </div>

      {/* NO-INFERENCE POLICY */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Politique sans inférence, sans estimation
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Certif-Scope ne tente jamais de deviner, interpréter ou inférer des valeurs manquantes.
          Aucun mécanisme d’IA, d’apprentissage automatique, de lissage, de remplissage prédictif
          ou d’estimation statistique n’est utilisé à aucun stade. Si une donnée n’est pas fournie,
          sa contribution est nulle.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>• Aucune hypothèse basée sur les fournisseurs</li>
          <li>• Aucune “moyenne sectorielle” appliquée aux valeurs manquantes</li>
          <li>• Aucune interpolation ni ajustement de courbe</li>
          <li>• Aucune extrapolation historique</li>
        </ul>
      </div>

      {/* AUDIT REPRODUCIBILITY */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Reproductibilité en audit</h3>

        <ul className="text-sm text-white/90 space-y-2 leading-relaxed">
          <li>• La validation des entrées peut être reproduite exactement par un auditeur</li>
          <li>• Aucune transformation ni correction cachée</li>
          <li>• Aucun changement d’unité ou conversion implicite</li>
          <li>• Comportement déterministe garanti entre versions</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm max-w-4xl leading-relaxed">
          Ces contraintes sont cohérentes avec les principes spend-based du GHG Protocol et
          avec les exigences de vérifiabilité attendues en contexte institutionnel.
        </p>
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
