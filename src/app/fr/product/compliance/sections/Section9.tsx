"use client";

export default function Section9() {
  return (
    <section
      id="auditability-independent-verification-boundaries"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Institutional */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">9.</span>
          Auditabilité &amp; limites de vérification indépendante
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          Cette section établit les conditions exactes dans lesquelles les résultats Certif-Scope
          peuvent être vérifiés de manière indépendante par des tiers. Elle définit le périmètre
          de vérification, les limites, les exigences de reproductibilité et les restrictions.
          Elle garantit une interprétation correcte tout en empêchant tout usage comme preuve
          d’audit réglementaire.
        </p>
      </div>

      {/* BLOCK — Verification Scope */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Périmètre de la vérification indépendante
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Des examinateurs tiers peuvent vérifier la cohérence interne d’une attestation en
          utilisant uniquement les métadonnées intégrées et la version du dataset de facteurs
          d’émission référencée dans le document. Cette vérification est limitée à la
          reproductibilité structurelle et mathématique :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Application correcte des facteurs d’émission par catégorie.</li>
          <li>• Multiplication correcte des dépenses par les facteurs d’émission.</li>
          <li>• Agrégation correcte des résultats par catégorie vers le total.</li>
          <li>• Alignement correct de la version du dataset avec les métadonnées intégrées.</li>
        </ul>
      </div>

      {/* BLOCK — Verification Boundaries */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-xl border border-[#15B097]/30 dark:border-gray-700 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Limites de la vérification
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          La vérification est strictement limitée à la cohérence mathématique. Les examinateurs ne peuvent pas :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Valider l’exactitude des données financières fournies par l’utilisateur.</li>
          <li>• Confirmer si les montants de dépenses sont exhaustifs ou corrects.</li>
          <li>• Évaluer l’intensité carbone réelle d’un fournisseur ou les émissions réelles.</li>
          <li>• Utiliser l’attestation comme substitut à un reporting CSRD/ESRS.</li>
        </ul>
      </div>

      {/* BLOCK — Reproducibility Requirements */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Conditions nécessaires à une reproduction réussie
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Pour qu’une attestation soit reproductible de manière indépendante, les conditions suivantes
          doivent être respectées sans exception :
        </p>

        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
          <li>• Les valeurs d’entrée doivent être identiques à celles soumises initialement.</li>
          <li>• Le mapping des catégories doit suivre les définitions publiées.</li>
          <li>• La même version du dataset de facteurs d’émission doit être utilisée.</li>
          <li>• Aucun post-traitement, mise à l’échelle ou réinterprétation n’est autorisé.</li>
        </ul>
      </div>

      {/* BLOCK — Explicit Verification Limits */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Limites explicites de la vérification
        </h3>

        <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-5xl relative z-10">
          La vérification ne peut pas dépasser le périmètre déterministe du modèle.
          Certif-Scope ne stocke pas les données financières : les examinateurs indépendants ne peuvent
          donc pas ré-accéder aux entrées ni re-valider les données utilisateur. Aucune métadonnée
          supplémentaire n’existe au-delà de ce qui est intégré dans le fichier final.
        </p>
      </div>

      {/* BLOCK — Forbidden Verification Interpretations */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-xl border border-[#15B097]/30 dark:border-gray-700 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Interprétations interdites du processus de vérification
        </h3>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Considérer les valeurs indicatives comme des émissions auditées ou certifiées.</li>
          <li>• Utiliser l’attestation comme preuve pour un reporting réglementaire.</li>
          <li>• Supposer une validation de la qualité des données d’entrée utilisateur.</li>
          <li>• Comparer des résultats d’une année sur l’autre comme si l’activité était mesurée et constante.</li>
          <li>• Utiliser les résultats comme substitut à un reporting Scope 1/2/3 ou à une ACV basée sur des données primaires.</li>
        </ul>
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
```0
