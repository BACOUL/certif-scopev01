"use client";

export default function Section6() {
  return (
    <section
      id="api-coming-soon"
      data-section="api-coming-soon"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — same structure as Section 1, subtle variation */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/10 via-[#0B3A63]/5 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s6.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">6.</span>
          API & High-Volume Integrations
          <span className="ml-3 text-sm font-semibold text-[#1FB6C1] align-middle">
            (Coming soon)
          </span>
        </h2>

        <p
          data-i18n="partners.s6.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope V1 is intentionally designed for controlled, manual generation of
          CO₂e Attestations using partner keys. Programmatic access and large-scale
          integrations are deliberately deferred to a future version.
        </p>
      </div>

      {/* WHAT IS NOT AVAILABLE IN V1 */}
      <div
        data-i18n="partners.s6.notavailable.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s6.notavailable.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Not Available in Version 1
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="partners.s6.notavailable.item1">
            • No public or private API access
          </li>
          <li data-i18n="partners.s6.notavailable.item2">
            • No automated or unattended generation
          </li>
          <li data-i18n="partners.s6.notavailable.item3">
            • No bulk or batch issuance
          </li>
          <li data-i18n="partners.s6.notavailable.item4">
            • No system-to-system integration
          </li>
        </ul>
      </div>

      {/* WHY THIS DESIGN */}
      <div
        data-i18n="partners.s6.why.block"
        className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm"
      >
        <h3
          data-i18n="partners.s6.why.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Why This Design Choice
        </h3>

        <p
          data-i18n="partners.s6.why.text"
          className="text-sm text-gray-700 leading-relaxed max-w-4xl"
        >
          Version 1 prioritizes compliance clarity, accountability and controlled issuance.
          Manual generation ensures that each attestation remains attributable, verifiable
          and aligned with institutional expectations, without uncontrolled mass production.
        </p>
      </div>

      {/* WHAT WILL COME NEXT */}
      <div
        data-i18n="partners.s6.future.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s6.future.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Planned for a Future Version
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="partners.s6.future.item1">
            • API access for high-volume partners
          </li>
          <li data-i18n="partners.s6.future.item2">
            • Automated issuance with strict controls
          </li>
          <li data-i18n="partners.s6.future.item3">
            • Usage quotas and reporting mechanisms
          </li>
          <li data-i18n="partners.s6.future.item4">
            • Dedicated onboarding for large organizations
          </li>
        </ul>

        <p
          data-i18n="partners.s6.future.note"
          className="mt-6 text-sm text-gray-600 leading-relaxed max-w-4xl"
        >
          These elements are indicative and subject to future definition. No timeline or
          specifications are committed at this stage.
        </p>
      </div>

      {/* SOFT CONTACT */}
      <div
        data-i18n="partners.s6.contact.block"
        className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent opacity-25" />

        <h3
          data-i18n="partners.s6.contact.title"
          className="text-2xl font-semibold mb-4 relative z-10"
        >
          Large-Scale Needs
        </h3>

        <p
          data-i18n="partners.s6.contact.text"
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
        >
          Organizations with large-volume or automated requirements may contact Certif-Scope
          to discuss future integration options aligned with upcoming versions.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s6.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] 
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
