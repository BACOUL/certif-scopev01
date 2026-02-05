"use client";

export default function Section8() {
  return (
    <section id="s8" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — Bloc institutionnel */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          8. Flux de calcul & structure des formules
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section décrit le flux interne complet utilisé pour convertir des
          dépenses financières en estimations de CO₂ au moyen d’opérations
          linéaires déterministes. Elle couvre la validation des entrées,
          l’isolation des catégories, l’association des facteurs, l’application
          des formules et l’agrégation finale. Aucune étape probabiliste n’intervient
          et le calcul produit toujours des résultats reproductibles.
        </p>
      </div>

      {/* BLOCK — Vue d’ensemble du flux linéaire */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Séquence de traitement linéaire (sans branchement)
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>• Les catégories d’entrée sont validées selon une structure autorisée et un type numérique.</li>
          <li>• Chaque valeur de catégorie est isolée et traitée indépendamment.</li>
          <li>• Le facteur d’émission de chaque catégorie est récupéré depuis un jeu de données verrouillé par version.</li>
          <li>• Le facteur est multiplié directement par la valeur de dépense.</li>
          <li>• Les résultats unitaires sont additionnés pour former l’estimation totale.</li>
        </ul>
      </div>

      {/* BLOCK — Formule centrale */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Formule centrale (conversion spend-based)
        </h3>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          L’opération fondamentale appliquée à chaque catégorie est une multiplication directe :
        </p>

        <pre className="bg-white border border-gray-200 text-gray-900 p-4 rounded-lg text-sm">
Émissions(catégorie) = Dépense(catégorie) × FE(catégorie)
        </pre>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          Aucun ajustement, facteur de pondération, hypothèse d’élasticité ou
          modificateur spécifique à un fournisseur n’est appliqué. Le résultat
          reflète l’intensité carbone moyenne du segment économique associé à la catégorie de dépense.
        </p>
      </div>

      {/* BLOCK — Règles de validation des entrées */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Règles de validation des entrées
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Les valeurs doivent être numériques et non négatives.</li>
          <li>• Les catégories non prises en charge sont rejetées, non remappées.</li>
          <li>• Les valeurs nulles sont traitées normalement et contribuent à zéro émission.</li>
          <li>• Aucune inférence à partir de champs partiels ou manquants.</li>
          <li>• Aucune redistribution automatique entre catégories.</li>
        </ul>
      </div>

      {/* BLOCK — Logique d’agrégation */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Logique d’agrégation
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Une fois les émissions calculées par catégorie, le total est obtenu par
          une unique opération arithmétique :
        </p>

        <pre className="bg-white border border-gray-200 text-gray-900 p-4 rounded-lg text-sm">
Émissions totales = Σ [ Dépense(i) × FE(i) ]
        </pre>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          Aucune normalisation, mise à l’échelle, amortissement ou analyse de tendance n’est effectuée.
        </p>
      </div>

      {/* BLOCK — Comportements de calcul interdits */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Comportements de calcul interdits
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Aucune modélisation prédictive</li>
          <li>• Aucune reconstruction de séries temporelles</li>
          <li>• Aucune moyenne pondérée ou mélange de facteurs</li>
          <li>• Aucun ajustement spécifique à un fournisseur</li>
          <li>• Aucun coefficient d’élasticité ou de tendance sectorielle</li>
          <li>• Aucun enrichissement ou inférence à partir de jeux de données externes</li>
        </ul>
      </div>

      {/* BLOCK — Justification */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20" />

        <h3 className="text-2xl font-semibold relative z-10">
          Pourquoi ce modèle de calcul est requis
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Un calcul strictement linéaire et déterministe garantit que les attestations
          peuvent être reproduites à tout moment en utilisant uniquement les catégories
          d’entrée et la version du jeu de données de facteurs d’émission. Cela assure
          la continuité en audit et évite toute divergence liée à des ajustements
          dynamiques ou à des hypothèses évolutives.
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
