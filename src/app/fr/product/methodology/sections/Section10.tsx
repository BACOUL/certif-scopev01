"use client";

export default function Section10() {
  return (
    <section id="s10" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — institutionnel premium */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          10. Versionnement des facteurs d’émission & modèle de mise à jour
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section explique comment les facteurs d’émission sont versionnés,
          mis à jour, stabilisés et validés. Certif-Scope garantit un comportement
          strictement déterministe : toute évolution des facteurs n’affecte jamais
          les attestations déjà émises et n’est jamais appliquée de manière silencieuse.
        </p>
      </div>

      {/* BLOCK — Structure de version */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Structure de version
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Le versionnement suit une hiérarchie fixe : MAJOR.MINOR.PATCH.</li>
          <li>• Les versions MAJOR évoluent uniquement en cas de changement de périmètre méthodologique.</li>
          <li>• Les versions MINOR reflètent des mises à jour des jeux de facteurs d’émission.</li>
          <li>• Les versions PATCH couvrent des corrections mineures ou des clarifications.</li>
        </ul>
      </div>

      {/* BLOCK — Déclencheurs de mise à jour */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Déclencheurs de mise à jour
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Les mises à jour sont introduites uniquement dans des conditions contrôlées
          et transparentes :
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Publication de nouvelles valeurs moyennes ADEME ou DEFRA.</li>
          <li>• Révision des jeux de données économiques de type EEIO.</li>
          <li>• Exigences d’alignement réglementaire (ESRS, GHG Protocol).</li>
          <li>• Correction d’incohérences documentées.</li>
        </ul>
      </div>

      {/* BLOCK — Garantie de compatibilité ascendante */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Garantie de compatibilité ascendante
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Les attestations déjà générées restent valides sans limite de durée.</li>
          <li>• Aucun recalcul rétroactif n’est appliqué.</li>
          <li>• Les anciennes versions restent vérifiables via leurs métadonnées archivées.</li>
          <li>• Chaque attestation intègre explicitement la version des facteurs utilisée.</li>
        </ul>
      </div>

      {/* BLOCK — Contrôles d’intégrité */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20" />

        <h3 className="text-2xl font-semibold relative z-10">
          Contrôles d’intégrité appliqués aux mises à jour
        </h3>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed relative z-10">
          <li>• Validation de cohérence sur l’ensemble des catégories.</li>
          <li>• Rejet des valeurs aberrantes hors seuils acceptables.</li>
          <li>• Empreinte cryptographique (hash) garantissant l’intégrité des jeux de données.</li>
          <li>• Comparaison obligatoire avec la version précédente.</li>
        </ul>
      </div>

      {/* BLOCK — Pas de temps réel / pas de substitution dynamique */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Absence de temps réel et de substitution dynamique
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed">
          Les mises à jour ne sont jamais chargées dynamiquement, jamais récupérées
          en temps réel et jamais substituées silencieusement. Les facteurs sont
          toujours locaux, statiques et verrouillés par version avant chaque calcul.
        </p>
      </div>

      {/* BLOCK — Comportements interdits */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Comportements explicitement interdits
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Ingestion automatique de jeux de données externes.</li>
          <li>• Mises à jour en direct sans incrément explicite de version.</li>
          <li>• Re-mappage de catégories ou extrapolation à partir de données manquantes.</li>
          <li>• Inflation ou déflation dynamique des facteurs selon des tendances macro-économiques.</li>
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
