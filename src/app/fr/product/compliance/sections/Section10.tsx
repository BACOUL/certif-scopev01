"use client";

export default function Section10() {
  return (
    <section
      id="liability-framework-legal-responsibilities"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Institutional */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">10.</span>
          Cadre de responsabilité &amp; obligations juridiques
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          Cette section définit les limites de responsabilité juridique associées aux sorties
          Certif-Scope et clarifie les obligations des parties impliquées. L’attestation est
          un résultat CO₂e indicatif, dérivé de données de dépenses fournies par l’utilisateur,
          et ne doit pas être interprétée comme des émissions auditées, une certification
          environnementale, ni comme un substitut à un reporting réglementaire. La responsabilité
          est strictement limitée au calcul déterministe réalisé à partir des entrées fournies
          par l’utilisateur.
        </p>
      </div>

      {/* BLOCK — Legal Nature of the Attestation */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Nature juridique de l’attestation
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          L’attestation CO₂e générée par Certif-Scope n’est ni un certificat environnemental,
          ni un rapport de conformité, ni une mesure auditée. Il s’agit d’un calcul déterministe
          fondé exclusivement sur :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• les données de dépenses soumises par l’utilisateur,</li>
          <li>• des définitions de catégories publiées,</li>
          <li>• une version fixe du dataset de facteurs d’émission.</li>
        </ul>
      </div>

      {/* BLOCK — Responsibility Allocation */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-[#15B097]/30 dark:border-gray-700 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Répartition des responsabilités entre les parties
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-5xl">
          Les responsabilités sont clairement séparées afin d’éviter toute mauvaise interprétation :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• L’utilisateur est responsable de l’exactitude et de l’exhaustivité des données financières saisies.</li>
          <li>• Certif-Scope est responsable du traitement déterministe des valeurs validées.</li>
          <li>• Les tiers examinateurs sont responsables de la vérification indépendante du calcul.</li>
          <li>• Aucune partie ne peut étendre le sens de l’attestation au-delà de son périmètre défini.</li>
        </ul>
      </div>

      {/* BLOCK — Liability Exclusions */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Exclusions explicites de responsabilité
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Certif-Scope n’assume aucune responsabilité pour les interprétations ou usages en dehors
          de la méthodologie strictement définie. Les exclusions explicites incluent notamment :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Aucune garantie concernant l’exactitude des données fournies par l’utilisateur.</li>
          <li>• Aucune validation de performance carbone spécifique à un fournisseur.</li>
          <li>• Aucune garantie de conformité CSRD, ESRS, Taxonomie UE ou audits ISO.</li>
          <li>• Aucune pertinence pour atténuer des sanctions réglementaires ou une défense juridique.</li>
          <li>• Aucune vérification d’émissions opérationnelles (Scopes 1/2/3 basés sur des données d’activité).</li>
        </ul>
      </div>

      {/* BLOCK — Prohibited Legal Interpretations */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-[#15B097]/30 dark:border-gray-700 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Interprétations juridiques interdites
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-5xl">
          L’attestation CO₂e ne doit pas être interprétée comme :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• une preuve d’émissions réelles,</li>
          <li>• une certification environnementale ou une approbation de conformité,</li>
          <li>• une confirmation de performance ESG d’un fournisseur,</li>
          <li>• une garantie d’exhaustivité ou d’exactitude des données,</li>
          <li>• un substitut à des obligations de publication réglementaire au titre du droit de l’UE.</li>
        </ul>
      </div>

      {/* BLOCK — Institutional Safeguards */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Garde-fous institutionnels
        </h3>

        <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-5xl relative z-10">
          Afin d’éviter tout usage détourné par des institutions ou des tiers, l’attestation intègre
          une clause de non-responsabilité juridique et des métadonnées de version. Elle indique
          explicitement que les résultats sont indicatifs, non contraignants, et non validés au regard
          d’opérations physiques ou d’émissions réelles.
        </p>
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
