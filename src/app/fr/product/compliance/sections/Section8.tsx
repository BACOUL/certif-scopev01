"use client";

export default function Section8() {
  return (
    <section
      id="disclaimers-liability-legal-safeguards"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Institutional */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">8.</span>
          Avertissements, responsabilité &amp; garanties juridiques
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          Cette section définit les avertissements juridiques et les limites de responsabilité
          applicables aux résultats Certif-Scope. Elle garantit que les utilisateurs, auditeurs
          et institutions comprennent pleinement la nature indicative des estimations et les
          périmètres de responsabilité, afin d’éviter toute mauvaise interprétation ou usage
          réglementaire inadapté.
        </p>
      </div>

      {/* BLOCK — Nature du résultat */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Nature du résultat (indicateur non contraignant)
        </h3>

        <ul className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
          <li>• Les résultats sont des estimations indicatives, pas des émissions vérifiées.</li>
          <li>• Les valeurs sont générées à partir d’intensités économiques spend-based.</li>
          <li>• Les résultats ne sont pas équivalents à des émissions CO₂ mesurées.</li>
          <li>• Aucune garantie d’exactitude par rapport à l’activité opérationnelle réelle.</li>
          <li>• Aucune adéquation pour des dépôts réglementaires ou des allégations environnementales.</li>
        </ul>
      </div>

      {/* BLOCK — Responsabilité de l’utilisateur */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-xl border border-[#15B097]/30 dark:border-gray-700 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Responsabilité de l’utilisateur
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Les utilisateurs conservent l’entière responsabilité de l’exactitude, de l’exhaustivité
          et de la pertinence des données de dépenses transmises. Certif-Scope ne vérifie pas les
          écritures financières et ne valide pas les justificatifs comptables sous-jacents.
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Les utilisateurs doivent assurer une catégorisation correcte des dépenses.</li>
          <li>• Les utilisateurs doivent valider l’exactitude financière avant soumission.</li>
          <li>• Certif-Scope ne peut pas détecter des valeurs manquantes ou mal déclarées.</li>
          <li>• La responsabilité d’interprétation reste exclusivement à la charge de l’utilisateur.</li>
        </ul>
      </div>

      {/* BLOCK — Limites de responsabilité de la plateforme */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Limites de responsabilité de la plateforme
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          Certif-Scope est fourni « en l’état », sans garantie, avec des limitations strictes
          de responsabilité. La plateforme n’est pas responsable des conséquences en aval ni des
          décisions financières basées sur des valeurs indicatives.
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Aucune responsabilité concernant des décisions institutionnelles fondées sur ces indicateurs.</li>
          <li>• Aucune responsabilité concernant un scoring ESG ou une modélisation de risque basée sur les résultats.</li>
          <li>• Aucune responsabilité pour des litiges commerciaux impliquant des valeurs indicatives.</li>
          <li>• Aucune responsabilité pour des sanctions réglementaires résultant d’une mauvaise interprétation.</li>
        </ul>
      </div>

      {/* BLOCK — Garanties juridiques */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Garanties juridiques appliquées à tous les résultats
        </h3>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed max-w-5xl relative z-10">
          <li>• Chaque résultat intègre la version du dataset et les contraintes méthodologiques.</li>
          <li>• Chaque document inclut des avertissements explicites sur sa nature indicative.</li>
          <li>• Les résultats ne sont ni comparables, ni audités, ni certifiés.</li>
          <li>• L’attestation ne peut pas être interprétée comme une preuve réglementaire.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-5xl relative z-10">
          Ces garanties évitent les confusions réglementaires, protègent les utilisateurs contre
          les risques de mauvaise interprétation et maintiennent l’intégrité de conformité dans
          l’ensemble des cas d’usage.
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
