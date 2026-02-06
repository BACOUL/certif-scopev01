// PATH: src/app/fr/partners/sections/Section3.tsx
"use client";

export default function Section3FR() {
  return (
    <section
      id="partner-key-issuance"
      data-section="partner-key-issuance"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s3.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">3.</span>
          Délivrance de la clé partenaire
        </h2>

        <p
          data-i18n="partners.s3.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Une clé partenaire est délivrée une fois qu’un pack d’attestations
          prépayé a été acheté avec succès. Cette clé donne le droit de générer
          un nombre défini d’attestations CO₂e, sous la responsabilité d’un
          partenaire unique clairement identifié.
        </p>

        <p
          data-i18n="partners.s3.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          La délivrance de la clé est une opération contrôlée, effectuée une
          seule fois. Elle ne crée pas de comptes utilisateurs, ni de tableau de
          bord, ni de session persistante, et ne nécessite aucune intégration
          technique.
        </p>
      </div>

      {/* ISSUANCE PRINCIPLES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* PRINCIPLE 1 */}
        <div
          data-i18n="partners.s3.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s3.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Délivrée après confirmation du paiement
          </h3>
          <p
            data-i18n="partners.s3.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            La clé partenaire est générée uniquement après validation d’un
            paiement réussi pour un pack prépayé. Aucune clé n’existe avant
            l’achat.
          </p>
        </div>

        {/* PRINCIPLE 2 */}
        <div
          data-i18n="partners.s3.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg hover:border-[#15B097]/50 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s3.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Transmise par email
          </h3>
          <p
            data-i18n="partners.s3.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            La clé partenaire est transmise par email à l’adresse fournie lors
            de l’achat. Cet email désigne la partie responsable de l’usage de la
            clé.
          </p>
        </div>

        {/* PRINCIPLE 3 */}
        <div
          data-i18n="partners.s3.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s3.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Une clé, une entité responsable
          </h3>
          <p
            data-i18n="partners.s3.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Une clé partenaire est liée à une seule organisation et à un email
            de contact. Elle ne peut pas être fractionnée en sous-comptes ni
            déléguée implicitement.
          </p>
        </div>
      </div>

      {/* SCOPE NOTE */}
      <div
        data-i18n="partners.s3.note.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <p
          data-i18n="partners.s3.note.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          La clé partenaire définit uniquement les droits d’autorisation et
          d’émission. Les workflows de génération, la consommation de crédits et
          les mécanismes de récupération sont décrits dans les sections
          suivantes.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s3.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
