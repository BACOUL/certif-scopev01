// PATH: src/app/fr/partners/sections/Section6.tsx
"use client";

export default function Section6FR() {
  return (
    <section
      id="api-and-high-volume-access"
      data-section="api-and-high-volume-access"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — muted institutional accent */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#64748B]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s6.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">6.</span>
          API &amp; accès grand volume (bientôt disponible)
        </h2>

        <p
          data-i18n="partners.s6.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope est conçu pour aller au-delà d’un usage individuel ou à
          faible volume. Un modèle V2 dédié est prévu pour les organisations
          ayant besoin d’une émission et d’une vérification automatisées, à haut
          volume, d’attestations CO₂e.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* BLOCK 1 — TARGET USERS */}
        <div
          data-i18n="partners.s6.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s6.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Usage institutionnel &amp; à grande échelle
          </h3>
          <p
            data-i18n="partners.s6.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Conçu pour les banques, assureurs, grands groupes et plateformes
            procurement gérant des centaines ou des milliers d’attestations
            fournisseurs ou clients via des workflows automatisés.
          </p>
        </div>

        {/* BLOCK 2 — TECHNICAL MODEL (V2 ONLY) */}
        <div
          data-i18n="partners.s6.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#64748B]/30 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s6.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Modèle cryptographique &amp; API (V2)
          </h3>
          <p
            data-i18n="partners.s6.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            La V2 introduira un modèle API avec une clé privée dédiée à l’émission
            et une clé publique de vérification. Les attestations s’appuieront sur
            un mécanisme d’intégrité interne (SHA-256) garantissant l’immutabilité
            et une vérification indépendante à grande échelle.
          </p>
        </div>

        {/* BLOCK 3 — CLEAR V1 / V2 SEPARATION */}
        <div
          data-i18n="partners.s6.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s6.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Non requis pour la V1
          </h3>
          <p
            data-i18n="partners.s6.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Ces mécanismes ne sont pas actifs en V1 et ne sont pas nécessaires
            pour les usages standards ou les PME. Le modèle V1 reste basé sur un
            identifiant, lisible par un humain, et volontairement non technique.
          </p>
        </div>
      </div>

      {/* ROADMAP & BOUNDARIES */}
      <div
        data-i18n="partners.s6.roadmap.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s6.roadmap.title"
          className="text-xl font-bold text-[#0B3A63] mb-4"
        >
          Transparence roadmap &amp; périmètre
        </h3>

        <p
          data-i18n="partners.s6.roadmap.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          L’accès API, les clés de vérification et les workflows batch automatisés
          sont prévus pour une future V2. Aucun calendrier ni garantie n’est
          implicite. Cette section existe uniquement pour documenter l’évolution
          envisagée pour des partenaires institutionnels et éviter toute ambiguïté
          sur le périmètre actuel de la V1.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s6.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
