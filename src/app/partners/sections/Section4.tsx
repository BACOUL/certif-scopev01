"use client";

export default function Section4() {
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
          Key Validity & Usage Limits
        </h2>

        <p
          data-i18n="partners.s4.intro"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Partner access is governed by strict validity and usage rules.
          This section defines how long a Partner Key remains active and
          how attestation generation is limited over time.
        </p>
      </div>

      {/* VALIDITY */}
      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md max-w-4xl">
        <h3
          data-i18n="partners.s4.validity.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Key validity period
        </h3>

        <p
          data-i18n="partners.s4.validity.text1"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          Each Partner Key is valid for a fixed period of <strong>twelve (12) months</strong>
          starting from its issuance date.
        </p>

        <p
          data-i18n="partners.s4.validity.text2"
          className="text-gray-700 text-sm leading-relaxed"
        >
          After this period, the key is automatically deactivated and can no longer
          be used to generate new CO₂e attestations.
        </p>
      </div>

      {/* USAGE LIMITS */}
      <div className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm max-w-4xl">
        <h3
          data-i18n="partners.s4.usage.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Usage limits and credit consumption
        </h3>

        <p
          data-i18n="partners.s4.usage.text1"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          Partner access operates on a prepaid credit basis.
          Each attestation generation consumes exactly one credit.
        </p>

        <p
          data-i18n="partners.s4.usage.text2"
          className="text-gray-700 text-sm leading-relaxed"
        >
          Once all credits are consumed, attestation generation is blocked,
          even if the Partner Key is still within its validity period.
        </p>
      </div>

      {/* EFFECTS & GUARANTEES */}
      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md max-w-4xl">
        <h3
          data-i18n="partners.s4.effects.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Effects of expiration or exhaustion
        </h3>

        <p
          data-i18n="partners.s4.effects.text1"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          Expiration of a Partner Key or exhaustion of credits only affects
          the ability to generate new attestations.
        </p>

        <p
          data-i18n="partners.s4.effects.text2"
          className="text-gray-700 text-sm leading-relaxed"
        >
          All previously generated attestations remain valid and verifiable
          without limitation, independently of key status.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s4.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
