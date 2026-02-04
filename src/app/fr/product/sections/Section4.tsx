// PATH: src/app/fr/product/sections/Section4.tsx

"use client";

export default function Section4FR() {
  return (
    <section
      id="attestation-pdf-contents"
      data-section="attestation-pdf-contents"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Soft Blue + subtle gradient */}
      <div className="relative p-12 rounded-2xl bg-[#F0F4F8] border border-[#0B3A63]/15 shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">4.</span>
          Contenu du PDF de l’attestation CO₂e
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          L’attestation CO₂e est délivrée sous forme d’un document PDF
          standardisé, prêt pour un usage institutionnel. Chaque élément est
          structuré pour faciliter la revue achats, l’évaluation de risque
          financier et l’onboarding fournisseurs.
        </p>

        {/* SCOPE BOUNDARY */}
        <p className="mt-4 text-gray-600 text-sm max-w-4xl leading-relaxed relative z-10">
          Cette section décrit la structure et le contenu du document livré. La
          méthodologie de calcul est décrite séparément.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            1. Résumé du résultat CO₂e
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            Une valeur CO₂e agrégée unique exprimée en tonnes équivalent CO₂,
            présentée dans un format clair et non ambigu pour une revue
            institutionnelle.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            2. Vue d’ensemble du périmètre déclaré
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            Une vue à haut niveau des catégories déclarées, apportant un contexte
            utile sans divulguer de données financières détaillées ni de données
            opérationnelles.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            3. Références normatives
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            Des références à des cadres européens et internationaux reconnus,
            incluant{" "}
            <a
              href="https://eur-lex.europa.eu/eli/dir/2022/2464/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              la CSRD
            </a>
            ,{" "}
            <a
              href="https://www.efrag.org/en/projects/esrs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              les ESRS (EFRAG)
            </a>
            , ainsi que des éléments alignés sur le{" "}
            <a
              href="https://ghgprotocol.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              GHG Protocol
            </a>
            . Ces références permettent aux reviewers de comprendre le contexte
            institutionnel de l’indicateur, sans entrer dans un détail technique.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            4. Référence de vérification & QR code
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            Un identifiant d’attestation unique et un QR code permettant à des
            tiers de vérifier l’authenticité et l’intégrité du document via la
            page publique de vérification.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            5. Métadonnées institutionnelles
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            Date d’émission, période de validité, année de référence déclarée et
            identifiants organisationnels de base nécessaires aux pistes d’audit
            et aux processus internes de conformité.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            6. Déclaration de limites d’usage
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            Une déclaration claire définissant la nature indicative du document
            et son usage prévu, afin d’éviter toute interprétation comme un
            reporting réglementaire, un audit ou une certification.
          </p>
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-20 p-8 rounded-xl bg-[#F0FDFC] border border-[#1FB6C1]/30 shadow-sm">
        <h4 className="text-xl font-semibold text-[#0B3A63] mb-2">
          Note d’usage institutionnel
        </h4>

        <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
          Cette attestation est conçue pour l’évaluation fournisseurs, le
          screening achats et la revue de risque financier. Elle ne remplace ni
          un reporting sustainability réglementaire, ni un inventaire GES audité.
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
