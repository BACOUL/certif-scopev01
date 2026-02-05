"use client";

export default function Section9() {
  return (
    <section id="s9" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — institutionnel, non redondant */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          9. Contrôles internes & garde-fous de calcul
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section décrit les mécanismes internes garantissant que le processus
          de calcul reste déterministe, valide et structurellement cohérent.
          Des contrôles s’appliquent avant, pendant et après le calcul afin
          d’empêcher tout comportement divergent, toute incohérence structurelle
          ou toute propagation numérique non vérifiée.
        </p>
      </div>

      {/* BLOCK — Contrôles au niveau des entrées */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Contrôles au niveau des entrées
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Les valeurs non numériques sont rejetées avant tout traitement.</li>
          <li>• Les valeurs négatives ne sont pas autorisées et déclenchent une erreur de validation.</li>
          <li>• Les catégories non listées ne sont ni mappées ni approximées.</li>
          <li>• Les champs vides ne déclenchent aucune inférence ni substitution.</li>
          <li>• Toutes les entrées sont validées par rapport à des identifiants de catégories prédéfinis.</li>
        </ul>
      </div>

      {/* BLOCK — Garde-fous pendant le calcul */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Garde-fous en cours de calcul
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Les garde-fous appliqués pendant le calcul assurent la stabilité
          structurelle et maintiennent une exécution strictement déterministe :
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Chaque catégorie est traitée de manière isolée, sans propagation croisée.</li>
          <li>• La version des facteurs d’émission est verrouillée avant le début du calcul.</li>
          <li>• Aucun recalcul itératif ni optimisation n’est effectué.</li>
          <li>• Aucun ré-étalonnage ni pondération dynamique.</li>
          <li>• Les résultats intermédiaires ne sont pas arrondis avant la sortie finale.</li>
        </ul>
      </div>

      {/* BLOCK — Validation post-traitement */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Validation post-traitement
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Les émissions totales sont recalculées une fois pour vérifier la cohérence.</li>
          <li>• La somme des résultats par catégorie doit être égale au total final.</li>
          <li>• Toute incohérence entraîne l’annulation du calcul avant export.</li>
          <li>• Les identifiants de version (facteurs et logique) sont intégrés au document.</li>
        </ul>
      </div>

      {/* BLOCK — Logique de reproductibilité */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20" />

        <h3 className="text-2xl font-semibold relative z-10">
          Garanties de reproductibilité
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Le calcul ne fait appel à aucun service externe, aucune requête en temps réel
          et aucun ajustement dynamique. Les mêmes entrées et la même version de facteurs
          produisent donc exactement le même résultat, indépendamment de l’état de la
          plateforme ou de sa disponibilité. Toutes les métadonnées nécessaires sont
          intégrées directement dans l’attestation.
        </p>
      </div>

      {/* BLOCK — Comportements interdits */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Comportements explicitement interdits
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Afin de garantir la stabilité institutionnelle et d’éviter toute divergence
          silencieuse, certains comportements sont strictement prohibés :
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Mise à jour automatique des facteurs d’émission pendant le calcul</li>
          <li>• Algorithmes d’estimation, de prévision ou d’extrapolation</li>
          <li>• Substitution de catégories ou mappage extrapolé</li>
          <li>• Modèles probabilistes ou d’optimisation</li>
          <li>• Enrichissement des données via des sources externes ou temps réel</li>
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
