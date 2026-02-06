"use client";

export default function Section7() {
  return (
    <section
      id="prohibited-claims-misuse-prevention"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">7.</span>
          Allégations interdites &amp; prévention des usages abusifs
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          Cette section fixe des interdictions strictes afin d’éviter toute mauvaise
          interprétation, tout décalage réglementaire ou toute communication illicite des
          résultats. Les valeurs Certif-Scope sont uniquement indicatives et ne peuvent
          pas être utilisées à des fins publicitaires, de dépôts de conformité, de
          déclarations ESG publiques, ni de comparaison de performance.
        </p>
      </div>

      {/* BLOCK — Usages interdits en communication externe */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Usage interdit dans les communications externes
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Au regard du droit européen de la consommation et des règles encadrant le
          marketing environnemental, les valeurs générées par Certif-Scope ne doivent
          pas être présentées d’une manière suggérant des émissions vérifiées,
          certifiées ou approuvées :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Aucune allégation marketing ESG ou promesse promotionnelle.</li>
          <li>• Aucune mention « neutre en carbone », « bas carbone » ou équivalent.</li>
          <li>• Aucune comparaison publique avec des concurrents ou des moyennes sectorielles.</li>
          <li>• Aucune utilisation pour un étiquetage environnemental produit ou une conformité éco-conception.</li>
          <li>• Aucune publication comme donnée auditée ou approuvée par un régulateur.</li>
        </ul>
      </div>

      {/* BLOCK — Interdictions d’usage réglementaire */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-xl border border-[#15B097]/30 dark:border-gray-700 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Usages réglementaires interdits
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-5xl">
          Le résultat Certif-Scope ne doit pas être déposé, cité ou sous-entendu dans un
          document juridique, contractuel ou réglementaire nécessitant une comptabilité
          d’émissions validée :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Non acceptable pour des dépôts CSRD ou ESRS.</li>
          <li>• Non acceptable pour une vérification ISO 14064-1.</li>
          <li>• Non acceptable pour une classification au titre de la Taxonomie UE.</li>
          <li>• Non acceptable pour une conformité « Green Claims » (cadres et exigences associés).</li>
          <li>• Non acceptable pour des registres réglementaires nationaux d’émissions.</li>
        </ul>
      </div>

      {/* BLOCK — Prévention des risques juridiques */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Prévention des risques juridiques
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Les institutions doivent s’assurer que les valeurs indicatives ne sont pas
          réinterprétées comme des émissions factuelles. Une présentation trompeuse peut
          entraîner des responsabilités au titre de :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• La directive européenne sur les pratiques commerciales déloyales (allégations trompeuses).</li>
          <li>• Les lois nationales relatives à la protection des consommateurs et à la publicité.</li>
          <li>• Les risques de mauvaise déclaration dans les processus bancaires et d’achats (due diligence).</li>
          <li>• La responsabilité contractuelle liée à des disclosures ESG inexactes.</li>
        </ul>
      </div>

      {/* BLOCK — Pourquoi ces interdictions */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Pourquoi ces interdictions sont nécessaires
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Sans restrictions explicites, des valeurs indicatives pourraient être
          présentées comme des données de niveau réglementaire, exposant les
          institutions à des manquements de conformité, des sanctions ou un risque
          réputationnel. Ces interdictions assurent la clarté juridique, protègent
          les utilisateurs et préservent l’intégrité méthodologique des estimations
          spend-based.
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
