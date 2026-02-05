"use client";

export default function Section7() {
  return (
    <section id="s7" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — Unique institutional block */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          7. Logique d’attribution des facteurs d’émission
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section définit le mécanisme déterministe utilisé pour associer chaque catégorie
          financière à un facteur d’émission unique, issu d’un jeu de données versionné.
          Aucune inférence, estimation ou substitution contextuelle n’intervient. Le processus
          d’attribution suit des règles internes strictes afin de garantir la reproductibilité.
        </p>
      </div>

      {/* BLOCK — Mapping Principles */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Principes d’affectation
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>• Chaque catégorie économique correspond à une entrée unique de classification interne.</li>
          <li>• Chaque entrée de classification interne correspond à une valeur unique de facteur d’émission.</li>
          <li>• Chaque valeur de facteur d’émission est rattachée à une version de jeu de données (référence immuable).</li>
          <li>• Aucun remappage dynamique, catégorie de secours ou redistribution automatique n’est autorisé.</li>
        </ul>
      </div>

      {/* BLOCK — Mapping Process */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Processus d’attribution (linéaire et déterministe)
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>1. Identification de la catégorie :</strong> la catégorie d’entrée est associée
            à une ligne fixe de la table de classification interne.
          </li>
          <li>
            <strong>2. Récupération de la référence de version :</strong> le système identifie
            quelle version de jeu de données est active pour cette catégorie.
          </li>
          <li>
            <strong>3. Extraction du facteur d’émission :</strong> le FE est récupéré depuis un
            enregistrement statique, verrouillé par version.
          </li>
          <li>
            <strong>4. Validation :</strong> le FE est contrôlé (existence et validité numérique) ;
            aucune entrée manquante n’est déduite ni remplacée.
          </li>
          <li>
            <strong>5. Liaison :</strong> le FE est attaché à la catégorie comme référence immuable
            pour l’étape de calcul.
          </li>
        </ul>
      </div>

      {/* BLOCK — Version Locking Rules */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Règles de verrouillage de version
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Le verrouillage de version garantit qu’une attestation donnée peut être reproduite
          indéfiniment, même si de nouvelles mises à jour de facteurs d’émission sont publiées.
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• La version des FE est figée au moment du calcul.</li>
          <li>• Les mises à jour des jeux de données ne modifient jamais les attestations passées.</li>
          <li>• Les nouvelles versions de FE déclenchent de nouveaux identifiants de version, sans effet rétroactif.</li>
          <li>• Les versions historiques restent valides et référencables.</li>
        </ul>
      </div>

      {/* BLOCK — Forbidden Assignment Behaviors */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Comportements explicitement interdits
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Aucune estimation basée sur l’identité d’un fournisseur</li>
          <li>• Aucune moyenne pondérée ni FE “mixte”</li>
          <li>• Aucun ajustement proportionnel</li>
          <li>• Aucune estimation prédictive ni modélisation</li>
          <li>• Aucune substitution lorsque la catégorie est incomplète</li>
          <li>• Aucune fusion de catégories adjacentes</li>
          <li>• Aucune inférence inter-catégories</li>
        </ul>
      </div>

      {/* BLOCK — Reason for Strict Assignment */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20" />

        <h3 className="text-2xl font-semibold relative z-10">
          Justification de cette logique d’attribution
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Un mappage strict “un pour un” entre catégories et facteurs d’émission réduit
          l’ambiguïté lors d’une vérification et empêche toute dérive analytique dans le temps.
          Les institutions peuvent reproduire les résultats de façon cohérente, avec une clarté
          utile en audit, sans dépendre d’un accès à des systèmes internes.
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
