"use client";

export default function Section2() {
  return (
    <section
      id="regulatory-alignment-non-equivalence"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Legal and Regulatory Framing */}
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">2.</span>
          Alignement réglementaire &amp; déclaration de non-équivalence
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          Cette section précise comment Certif-Scope s’aligne sur des cadres reconnus de
          comptabilité environnementale tout en affirmant explicitement que le résultat
          ne constitue pas un substitut aux obligations de reporting réglementaire.
          L’alignement vise la cohérence méthodologique sans impliquer une équivalence de
          conformité légale.
        </p>
      </div>

      {/* BLOCK — Standards Used as Reference Only */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Référentiels utilisés à titre de référence (non substitutifs)
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm max-w-5xl leading-relaxed mb-4">
          Certif-Scope s’appuie sur des références méthodologiques établies pour la
          structure et la cohérence. Ces cadres guident la logique spend-based mais ne
          sont ni reproduits intégralement, ni implémentés comme un dispositif complet.
        </p>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• GHG Protocol — méthodologie Scope 3 spend-based.</li>
          <li>• ISO 14064-1 — principes de pertinence, cohérence et transparence.</li>
          <li>• ISO 14083 — logique de périmètre transport (référence non obligatoire).</li>
          <li>• Modélisation EEIO — base macroéconomique des facteurs d’émission.</li>
          <li>• ADEME / DEFRA — intensités publiées utilisées comme bases accessibles.</li>
        </ul>
      </div>

      {/* BLOCK — Explicit Non-Equivalence with Regulations */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Non-équivalence avec les cadres réglementaires obligatoires
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl mb-4">
          Le résultat indicatif produit par Certif-Scope ne doit pas être confondu avec, ni
          utilisé comme remplacement de livrables réglementaires obligatoires. Le système
          ne génère pas de disclosures conformes aux cadres suivants :
        </p>

        <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm leading-relaxed max-w-5xl">
          <li>• CSRD et normes ESRS (déclaration de durabilité).</li>
          <li>• Éligibilité / alignement Taxonomie européenne.</li>
          <li>• Inventaire corporate complet GHG Protocol (données primaires requises).</li>
          <li>• Schémas nationaux de reporting d’émissions ou taxes carbone.</li>
          <li>• Déclarations ISO 14064 vérifiées par un tiers (assurance / vérification).</li>
        </ul>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm max-w-5xl leading-relaxed">
          La sortie Certif-Scope est une estimation indicative et non contraignante basée sur
          des dépenses financières. Elle ne peut pas être utilisée dans des dépôts
          réglementaires sans revue indépendante et adaptation méthodologique par des
          professionnels qualifiés.
        </p>
      </div>

      {/* BLOCK — Purpose of Alignment */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Finalité de l’alignement réglementaire
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          L’alignement renforce la confiance institutionnelle en s’appuyant sur des principes
          internationalement reconnus, sans présenter Certif-Scope comme une solution de
          reporting réglementaire complète.
        </p>

        <ul className="mt-4 text-white/90 space-y-2 text-sm max-w-5xl leading-relaxed relative z-10">
          <li>• Assure la transparence méthodologique.</li>
          <li>• Favorise la compatibilité avec les workflows de screening et d’évaluation des risques.</li>
          <li>• Facilite l’auditabilité via le versioning fixe et des résultats déterministes.</li>
          <li>• Réduit l’ambiguïté réglementaire en distinguant clairement l’indicatif du contraignant.</li>
        </ul>
      </div>

      {/* BLOCK — Legal Interpretation Restrictions */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Restrictions d’interprétation juridique
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm max-w-5xl leading-relaxed">
          Les résultats Certif-Scope ne doivent pas être interprétés comme des disclosures
          environnementales auditées, des inventaires GES validés, ou une preuve
          financière-réglementaire. La responsabilité juridique de tout usage réglementaire
          relève de l’institution utilisatrice.
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• Aucune assurance réglementaire n’est fournie.</li>
          <li>• Aucune équivalence revendiquée avec les structures CSRD/ESRS.</li>
          <li>• Aucune aptitude aux dépôts de conformité sans validation experte.</li>
          <li>• Aucune inférence d’émissions opérationnelles ou d’exactitude fournisseur.</li>
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
