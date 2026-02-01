"use client";

export default function TestimonialsFR() {
  const items = [
    {
      initials: "PME",
      text: "Un client nous a demandé des informations CO₂e lors de l’onboarding. Certif-Scope nous a permis de fournir en quelques minutes un document clair, standardisé et prêt à être vérifié, parfaitement aligné avec les attentes des équipes achats.",
      role: "Construction — Royaume-Uni",
    },
    {
      initials: "PME",
      text: "Le format standardisé s’intègre naturellement dans les processus de sélection des fournisseurs. Les analystes comprennent immédiatement l’indicateur et les éléments de vérification, sans explications supplémentaires.",
      role: "E-commerce — Portugal",
    },
    {
      initials: "PME",
      text: "Nous recevons régulièrement des demandes CO₂e sans méthodologie imposée. Certif-Scope fournit instantanément une valeur indicative basée sur les dépenses, sans consultants ni processus de reporting complexe.",
      role: "Services professionnels — Italie",
    },
  ];

  return (
    <section
      id="testimonials"
      data-section="testimonials"
      className="w-full bg-[#F8FAFC] dark:bg-gray-900 py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center mb-14">

        {/* MICRO LABEL */}
        <p
          data-i18n="testimonials.label"
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wide mb-3"
        >
          Attestation CO₂e — Retours terrain
        </p>

        {/* TITLE */}
        <h2
          data-i18n="testimonials.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3"
        >
          Cas d’usage fréquemment rencontrés par les entreprises
        </h2>

        {/* INTRO */}
        <p
          data-i18n="testimonials.intro"
          className="text-[#475569] dark:text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Exemples illustratifs reflétant la manière dont les PME européennes utilisent
          Certif-Scope pour répondre aux demandes CO₂e des acheteurs, banques et équipes ESG
          à l’aide d’une attestation standardisée.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 flex flex-col h-full"
          >
            {/* INITIALS */}
            <div
              aria-hidden="true"
              className="w-14 h-14 rounded-full bg-[#1FB6C1] flex items-center justify-center text-sm font-semibold text-white mb-5 shadow-md"
            >
              {item.initials}
            </div>

            {/* TEXT */}
            <p
              data-i18n={`testimonials.item.${idx}.text`}
              className="text-[#1E293B] dark:text-gray-200 text-base leading-relaxed mb-5"
            >
              {item.text}
            </p>

            {/* META */}
            <p
              data-i18n={`testimonials.item.${idx}.role`}
              className="mt-auto text-[#64748B] dark:text-gray-400 text-sm"
            >
              {item.role}
            </p>
          </div>
        ))}
      </div>

      {/* DISCLAIMER */}
      <p
        data-i18n="testimonials.disclaimer"
        className="mt-12 text-center text-xs text-[#64748B] dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
      >
        Exemples illustratifs uniquement. Estimation indicative basée sur les dépenses.
        Non auditée, non conforme CSRD/ESRS et ne constituant pas un inventaire
        d’émissions de gaz à effet de serre.
      </p>

      {/* CTA */}
      <div className="mt-4 text-center">
        <a
          href="#attestation-preview"
          data-i18n="testimonials.cta"
          className="text-[#0B3A63] dark:text-[#1FB6C1] underline text-base hover:text-[#1FB6C1] transition"
        >
          Voir le format de l’attestation →
        </a>
      </div>
    </section>
  );
}
