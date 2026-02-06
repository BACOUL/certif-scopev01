// PATH: src/app/fr/partners/sections/Section4.tsx
"use client";

export default function Section4FR() {
  return (
    <section
      id="key-validity-and-usage-limits"
      data-section="key-validity-and-usage-limits"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — subtle variation */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s4.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">4.</span>
          Validité de la clé &amp; limites d’usage
        </h2>

        <p
          data-i18n="partners.s4.intro"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          L’accès partenaire est régi par des règles strictes de validité et
          d’usage. Cette section définit la durée d’activation d’une clé
          partenaire et les limites qui encadrent la génération d’attestations
          dans le temps.
        </p>
      </div>

      {/* VALIDITY */}
      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md max-w-4xl">
        <h3
          data-i18n="partners.s4.validity.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Durée de validité de la clé
        </h3>

        <p
          data-i18n="partners.s4.validity.text1"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          Chaque clé partenaire est valable pour une durée fixe de{" "}
          <strong>douze (12) mois</strong> à compter de sa date de délivrance.
        </p>

        <p
          data-i18n="partners.s4.validity.text2"
          className="text-gray-700 text-sm leading-relaxed"
        >
          À l’issue de cette période, la clé est automatiquement désactivée et
          ne peut plus être utilisée pour générer de nouvelles attestations
          CO₂e.
        </p>
      </div>

      {/* USAGE LIMITS */}
      <div className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm max-w-4xl">
        <h3
          data-i18n="partners.s4.usage.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Limites d’usage et consommation des crédits
        </h3>

        <p
          data-i18n="partners.s4.usage.text1"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          L’accès partenaire fonctionne sur la base de crédits prépayés. Chaque
          génération d’attestation consomme exactement{" "}
          <strong>un crédit</strong>.
        </p>

        <p
          data-i18n="partners.s4.usage.text2"
          className="text-gray-700 text-sm leading-relaxed"
        >
          Une fois tous les crédits consommés, la génération d’attestations est
          bloquée, même si la clé partenaire est encore dans sa période de
          validité.
        </p>
      </div>

      {/* EFFECTS & GUARANTEES */}
      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md max-w-4xl">
        <h3
          data-i18n="partners.s4.effects.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Effets de l’expiration ou de l’épuisement
        </h3>

        <p
          data-i18n="partners.s4.effects.text1"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          L’expiration d’une clé partenaire ou l’épuisement des crédits affecte
          uniquement la capacité à générer de nouvelles attestations.
        </p>

        <p
          data-i18n="partners.s4.effects.text2"
          className="text-gray-700 text-sm leading-relaxed"
        >
          Toutes les attestations déjà générées restent valables et vérifiables
          sans limitation, indépendamment du statut de la clé.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s4.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
