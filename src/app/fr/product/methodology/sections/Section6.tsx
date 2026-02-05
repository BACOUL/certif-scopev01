"use client";

export default function Section6() {
  return (
    <section id="s6" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — Unique institutional layout */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          6. Chaîne de transformation
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section décrit la séquence de traitement déterministe et linéaire appliquée aux
          entrées validées. Aucune inférence, modélisation statistique ou redistribution
          automatisée n’intervient. La chaîne garantit que chaque étape est transparente,
          reproductible et strictement alignée avec les exigences de la méthode spend-based.
        </p>
      </div>

      {/* SCHEMA BLOCK — Input → Validation → Mapping → EF Assignment → Output */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Flux de traitement (linéaire, déterministe)
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>1. Collecte des entrées :</strong> les montants financiers sont saisis pour
            chaque catégorie.
          </li>
          <li>
            <strong>2. Validation structurelle :</strong> contrôles de format, de précision et de
            conformité des catégories.
          </li>
          <li>
            <strong>3. Affectation aux catégories :</strong> les valeurs validées sont associées à
            une table de classification interne fixe.
          </li>
          <li>
            <strong>4. Attribution des facteurs d’émission :</strong> chaque catégorie est liée à
            une version unique de facteur d’émission.
          </li>
          <li>
            <strong>5. Conversion :</strong> la dépense par catégorie est multipliée par son facteur
            d’émission.
          </li>
          <li>
            <strong>6. Agrégation :</strong> les résultats sont additionnés en équivalents CO₂ totaux.
          </li>
          <li>
            <strong>7. Mise en forme de sortie :</strong> les valeurs sont insérées dans un PDF
            stable et structuré, avec métadonnées.
          </li>
        </ul>
      </div>

      {/* BLOCK — EXPLANATION OF EACH STEP IN DETAIL */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Description des étapes
        </h3>

        <ul className="space-y-5 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>Collecte des entrées :</strong> les données sont acceptées uniquement si elles
            respectent des règles structurelles prédéfinies. Aucun regroupement automatique ni
            catégorisation implicite n’est réalisé.
          </li>
          <li>
            <strong>Validation structurelle :</strong> garantit l’intégrité numérique (non-négatif,
            format décimal conforme, absence d’ambiguïté sur les catégories).
          </li>
          <li>
            <strong>Affectation aux catégories :</strong> les valeurs sont reliées à des catégories
            internes fixes. Aucun enrichissement ni croisement de catégories n’est effectué.
          </li>
          <li>
            <strong>Attribution des facteurs d’émission :</strong> chaque catégorie interne utilise
            un facteur d’émission unique, issu d’un jeu de données versionné et documenté.
          </li>
          <li>
            <strong>Conversion :</strong> multiplication déterministe :{" "}
            <code>émissions = dépenses × FE</code>.
          </li>
          <li>
            <strong>Agrégation :</strong> addition transparente des résultats par catégorie, sans
            pondération ni redistribution.
          </li>
          <li>
            <strong>Mise en forme de sortie :</strong> insertion dans des zones prédéterminées, sans
            variation de mise en page dynamique.
          </li>
        </ul>
      </div>

      {/* BLOCK — NON-PERMITTED TRANSFORMATIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Transformations explicitement interdites
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Ces garde-fous empêchent toute étape d’interprétation qui réduirait la
          reproductibilité ou serait incompatible avec les attentes institutionnelles :
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Aucune modélisation prédictive ni prévision</li>
          <li>• Aucune interpolation des données manquantes</li>
          <li>• Aucune estimation d’émissions basée sur les fournisseurs</li>
          <li>• Aucune conversion de devise</li>
          <li>• Aucune mise à l’échelle multi-années</li>
          <li>• Aucun ajustement par apprentissage automatique</li>
          <li>• Aucune reclassification ni redistribution automatique</li>
        </ul>
      </div>

      {/* BLOCK — RATIONALE */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20" />

        <h3 className="text-2xl font-semibold relative z-10">
          Justification de la chaîne de transformation
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Une chaîne déterministe et linéaire garantit que chaque attestation peut être
          reproduite étape par étape en utilisant uniquement les entrées, les définitions de
          catégories et les versions de facteurs d’émission. Cette approche est cohérente avec
          les contraintes de la méthode spend-based et réduit l’ambiguïté lors d’un examen
          institutionnel ou d’une reproduction en audit.
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
