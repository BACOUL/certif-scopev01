// PATH: src/app/fr/product/sections/Section3.tsx

"use client";

export default function Section3FR() {
  return (
    <section
      id="why-the-product-exists"
      data-section="why-the-product-exists"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">3.</span>
          Pourquoi ce produit existe
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          En Europe, les obligations de transparence climatique concernent les
          grandes entreprises, les institutions financières et le secteur public.
          Ces exigences se propagent de plus en plus vers les chaînes
          d’approvisionnement, y compris vers des PME qui ne sont pas directement
          soumises aux obligations de reporting réglementaire.
        </p>
      </div>

      {/* REGULATORY CASCADE */}
      <div className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          La cascade réglementaire
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
          Les organisations soumises aux cadres européens de durabilité et de
          gestion des risques doivent évaluer l’exposition climatique sur leurs
          chaînes de valeur. Cela génère des demandes d’information standardisées
          adressées aux fournisseurs, indépendamment de leur statut réglementaire
          individuel.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>
            • Les grandes entreprises soumises à la{" "}
            <a
              href="https://eur-lex.europa.eu/eli/dir/2022/2464/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              CSRD
            </a>{" "}
            doivent documenter les risques climatiques et les impacts de chaîne de
            valeur.
          </li>

          <li>
            • Les disclosures alignées sur les{" "}
            <a
              href="https://www.efrag.org/en/projects/esrs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              ESRS (EFRAG)
            </a>{" "}
            requièrent des informations fournisseurs lorsque le sujet est matériel.
          </li>

          <li>
            • Les institutions financières suivant les{" "}
            <a
              href="https://www.eba.europa.eu/regulation-and-policy/sustainable-finance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              lignes directrices ESG de l’EBA
            </a>{" "}
            sont incitées à collecter des indicateurs CO₂e auprès des clients et
            contreparties.
          </li>

          <li>
            • Les achats publics intègrent de plus en plus des indicateurs
            environnementaux via les cadres{" "}
            <a
              href="https://environment.ec.europa.eu/topics/sustainable-production-and-consumption/green-public-procurement_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              EU Green Public Procurement
            </a>
            .
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4">
          En pratique, cela conduit les PME à devoir fournir des indicateurs CO₂e
          alors même qu’elles ne sont pas tenues de produire des rapports
          réglementaires complets.
        </p>
      </div>

      {/* MARKET GAP */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Le “trou” de marché pour les PME
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mb-6">
          La plupart des outils sustainability et des approches de conseil sont
          conçus pour de grandes organisations. Ils reposent sur des données
          opérationnelles détaillées, une expertise spécialisée et des ressources
          significatives, souvent indisponibles pour les PME.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <li>• Expertise ESG interne limitée</li>
            <li>• Contraintes de temps, de budget et de ressources</li>
          </ul>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <li>• Absence de document simple et standardisé accepté par des tiers</li>
            <li>Difficulté à prouver la cohérence et la crédibilité des chiffres</li>
          </ul>
        </div>

        <p className="mt-8 text-[#0B3A63] text-sm leading-relaxed font-medium">
          Certif-Scope a été créé pour combler cet écart en fournissant une
          attestation CO₂e standardisée, accessible et alignée avec les attentes
          institutionnelles, tout en restant réaliste et utilisable pour les PME.
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
```0
