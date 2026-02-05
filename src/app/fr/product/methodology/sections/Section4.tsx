"use client";

export default function Section4() {
  return (
    <section id="s4" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — institutionnel, objectif unique */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          4. Définitions des catégories & limites
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section définit les catégories économiques utilisées par le modèle fondé sur
          les dépenses. Chaque catégorie a un périmètre déterministe, une règle d’affectation
          fixe et un protocole d’attribution de facteur d’émission. Aucune réinterprétation,
          redistribution ou recatégorisation automatique n’est effectuée. Ces limites évitent
          les chevauchements et garantissent la reproductibilité lors d’un examen ou audit.
        </p>
      </div>

      {/* GRID — 8 CATÉGORIES EXACTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1 — ENERGY */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Énergie & services publics
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut l’électricité, le chauffage, le refroidissement, l’eau et les contrats de
            services associés. Exclut les carburants utilisés directement par les véhicules de
            l’entreprise (affectés à la catégorie transport).
          </p>
        </div>

        {/* 2 — OFFICE OPS */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Fonctionnement des bureaux
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut les fournitures de bureau, le mobilier, le petit équipement et les
            consommables. Exclut le matériel et les services IT (catégorie distincte).
          </p>
        </div>

        {/* 3 — IT & DIGITAL */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Équipements IT & services numériques
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut le matériel, les licences logicielles, les services cloud et les abonnements
            numériques. Exclut les contrats télécom (affectés aux services de communication).
          </p>
        </div>

        {/* 4 — TRANSPORT */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Transport & logistique
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut le fret, les livraisons, les services de messagerie et les transports liés aux
            déplacements professionnels. Exclut les trajets domicile-travail (hors périmètre du
            modèle spend-based).
          </p>
        </div>

        {/* 5 — PROFESSIONAL SERVICES */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Services professionnels
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut le conseil, les services juridiques, la comptabilité, la formation et
            l’externalisation. Exclut la fabrication sous-traitée (couverte par achats de biens /
            services).
          </p>
        </div>

        {/* 6 — MARKETING */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Marketing & achats médias
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut la publicité, l’achat d’espaces, les sponsorings et les supports imprimés.
            Exclut la logistique d’événements (affectée au transport ou aux opérations).
          </p>
        </div>

        {/* 7 — CONSTRUCTION */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Travaux / maintenance
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut la rénovation, les réparations, les matériaux de bâtiment et les contrats de
            maintenance. Exclut l’énergie consommée par les bâtiments (couverte par énergie &
            services publics).
          </p>
        </div>

        {/* 8 — PURCHASED GOODS */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Autres biens & services achetés
          </h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Inclut les achats de produits et services non classés ailleurs. Exclut les éléments
            explicitement couverts par une autre catégorie afin de préserver l’exclusivité.
          </p>
        </div>
      </div>

      {/* NON-PERMITTED OPERATIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Opérations explicitement non incluses
        </h3>

        <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <li>
            • Aucune émission directe de Scope 1 (combustion de carburant, flotte interne,
            procédés sur site)
          </li>
          <li>• Aucun calcul d’électricité Scope 2 en approche market-based</li>
          <li>• Aucune allocation des trajets domicile-travail</li>
          <li>• Aucun ajustement d’émissions spécifique à un fournisseur</li>
          <li>• Aucune extension des frontières type ACV (pas de substitution “cradle-to-gate”)</li>
        </ul>
      </div>

      {/* RULES OF CATEGORY ASSIGNMENT */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent opacity-20" />

        <h3 className="text-2xl font-semibold relative z-10">
          Règles déterministes d’affectation des catégories
        </h3>

        <ul className="mt-4 text-white/90 text-sm space-y-2 leading-relaxed relative z-10">
          <li>• Une dépense ne peut appartenir qu’à une seule catégorie</li>
          <li>• Aucune redistribution entre catégories</li>
          <li>• Aucun “split proportionnel” pour les dépenses multi-usages</li>
          <li>• L’affectation suit la fonction économique, pas le type de fournisseur</li>
          <li>• Un tiers peut reproduire la catégorisation à partir des mêmes entrées</li>
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
