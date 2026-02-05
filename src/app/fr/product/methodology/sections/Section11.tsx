"use client";

export default function Section11() {
  return (
    <section id="s11" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — institutionnel */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          11. Cycle de mise à jour des jeux de données & validation institutionnelle
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section définit la manière dont les jeux de données sont planifiés,
          validés et publiés. Elle garantit la traçabilité, la reproductibilité et la
          compatibilité avec les processus d’audit institutionnels. Aucune mise à jour
          n’est appliquée sans vérification structurée ni étiquetage explicite de version.
        </p>
      </div>

      {/* BLOCK — Fréquence de mise à jour */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Fréquence de mise à jour
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Intégration annuelle des jeux de données publics ADEME / DEFRA.</li>
          <li>• Rafraîchissement intermédiaire uniquement en cas de correction officielle.</li>
          <li>• Aucune ingestion automatique de sources temps réel ou évolutives.</li>
          <li>• Calendrier de publication documenté et accessible aux institutions.</li>
        </ul>
      </div>

      {/* BLOCK — Chaîne de validation */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Chaîne de validation
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Chaque révision de jeu de données suit un processus de validation multi-étapes
          conçu pour garantir un résultat déterministe et une fiabilité institutionnelle :
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Revue de cohérence sur l’ensemble des catégories d’émission.</li>
          <li>• Comparaison avec la version précédente afin de détecter les anomalies.</li>
          <li>• Rejet automatique des valeurs aberrantes hors seuils définis.</li>
          <li>• Calcul d’une empreinte d’intégrité (hash) du jeu de données final.</li>
        </ul>
      </div>

      {/* BLOCK — Exigences de compatibilité institutionnelle */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Exigences de compatibilité institutionnelle
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Stabilité compatible avec les workflows d’ingestion achats et bancaires.</li>
          <li>• Aucun changement de format sans incrément de version MINOR ou MAJOR.</li>
          <li>• Archivage systématique et récupération possible pour audits rétrospectifs.</li>
          <li>• Vérification indépendante de l’intégrité des jeux de données via empreinte.</li>
        </ul>
      </div>

      {/* BLOCK — Politique de publication */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20" />

        <h3 className="text-2xl font-semibold relative z-10">
          Politique de publication
        </h3>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed relative z-10">
          <li>• Chaque nouveau jeu de données est publié avec une version sémantique.</li>
          <li>• Les changements sont documentés dans un journal public (changelog).</li>
          <li>• Les versions précédentes restent accessibles de manière permanente.</li>
          <li>• Aucune suppression ni écrasement des jeux de données antérieurs.</li>
        </ul>
      </div>

      {/* BLOCK — Scénarios de mise à jour interdits */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Scénarios de mise à jour explicitement interdits
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Mises à jour silencieuses sans incrément public de version.</li>
          <li>• Remplacement rétroactif des valeurs historiques.</li>
          <li>• Fusion de jeux de données sans gouvernance formelle.</li>
          <li>• Flux temps réel de données volatiles (strictement prohibé).</li>
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
