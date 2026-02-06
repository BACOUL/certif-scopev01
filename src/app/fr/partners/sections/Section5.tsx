// PATH: src/app/fr/partners/sections/Section5.tsx
"use client";

export default function Section5FR() {
  return (
    <section
      id="recovery-and-security-model"
      data-section="recovery-and-security-model"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 via-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s5.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">5.</span>
          Modèle de récupération &amp; sécurité
        </h2>

        <p
          data-i18n="partners.s5.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          La sécurité de l’accès partenaire est conçue pour être explicite,
          minimale et auditable. Certif-Scope évite volontairement les comptes,
          mots de passe et systèmes d’identité. Le contrôle d’accès repose sur
          des jetons cryptographiques, une séparation stricte des rôles et des
          règles de révocation déterministes.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* PILLAR 1 — SECURITY BY DESIGN */}
        <div
          data-i18n="partners.s5.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s5.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Sécurité dès la conception
          </h3>
          <p
            data-i18n="partners.s5.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Il n’y a ni comptes utilisateurs, ni mots de passe, ni sessions
            persistantes. La surface d’attaque est volontairement réduite à une
            clé partenaire à usage unique, avec un périmètre et une durée de vie
            limités.
          </p>
        </div>

        {/* PILLAR 2 — KEY / RECOVERY SEPARATION */}
        <div
          data-i18n="partners.s5.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s5.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Séparation clé &amp; jeton de récupération
          </h3>
          <p
            data-i18n="partners.s5.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            La clé partenaire (droit de génération) et le jeton de récupération
            (droit de régénération) sont strictement séparés. Ils sont envoyés
            dans deux emails distincts et ne peuvent pas être utilisés l’un à la
            place de l’autre.
          </p>
        </div>

        {/* PILLAR 3 — CONTROLLED RECOVERY */}
        <div
          data-i18n="partners.s5.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s5.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Récupération contrôlée de la clé
          </h3>
          <p
            data-i18n="partners.s5.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            En cas de perte de la clé partenaire, une nouvelle clé peut être
            délivrée uniquement sur présentation du jeton de récupération et de
            l’adresse email d’origine. L’ancienne clé est automatiquement
            révoquée.
          </p>
        </div>
      </div>

      {/* SECURITY & GUARANTEES */}
      <div
        data-i18n="partners.s5.guarantees.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s5.guarantees.title"
          className="text-xl font-bold text-[#0B3A63] mb-4"
        >
          Garanties de sécurité institutionnelles
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="partners.s5.guarantees.item1">
            • Aucun accès aux données financières après la génération de
            l’attestation.
          </li>
          <li data-i18n="partners.s5.guarantees.item2">
            • La révocation n’affecte pas les attestations déjà émises.
          </li>
          <li data-i18n="partners.s5.guarantees.item3">
            • La vérification reste possible même après remplacement de la clé.
          </li>
          <li data-i18n="partners.s5.guarantees.item4">
            • Aucune dépendance à des systèmes d’identité ou
            d’authentification tiers.
          </li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s5.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
        }
