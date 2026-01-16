"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
      data-section="s7"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-md">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"
          data-i18n="s7.title"
        >
          Limitations & Fit
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed"
          data-i18n="s7.intro"
        >
          The CO₂e Attestation is intentionally designed as a simplified and verifiable 
          document based on financial spending only. This section clarifies the scope, 
          limits and appropriate use cases to avoid misinterpretations.
        </p>
      </div>

      {/* WHAT IT IS */}
      <div
        className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-sm"
        data-i18n="s7.what.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s7.what.title">
          What the Attestation Is
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="s7.what.point1">
            • A simplified CO₂e indicator based on annual spending (€)
          </li>
          <li data-i18n="s7.what.point2">
            • Deterministic and reproducible using a fixed spend-based formula
          </li>
          <li data-i18n="s7.what.point3">
            • A standardized, readable format for procurement and onboarding teams
          </li>
          <li data-i18n="s7.what.point4">
            • A document with a built-in cryptographic integrity check
          </li>
          <li data-i18n="s7.what.point5">
            • Suitable for preliminary screening and institutional checks
          </li>
        </ul>
      </div>

      {/* WHAT IT IS NOT */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden"
        data-i18n="s7.not.block"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h3 className="text-2xl font-semibold mb-4 relative z-10" data-i18n="s7.not.title">
          What the Attestation Is Not
        </h3>

        <ul className="space-y-3 text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
          <li data-i18n="s7.not.point1">
            • Not a CSRD/ESRS climate disclosure
          </li>
          <li data-i18n="s7.not.point2">
            • Not a greenhouse gas inventory (GHG Protocol Scopes 1, 2 and 3)
          </li>
          <li data-i18n="s7.not.point3">
            • Not an audited carbon footprint or lifecycle assessment
          </li>
          <li data-i18n="s7.not.point4">
            • Not suitable for regulatory filings or investor-grade reporting
          </li>
          <li data-i18n="s7.not.point5">
            • Not based on operational/physical data such as energy or fuel consumption
          </li>
        </ul>
      </div>

      {/* WHEN IT FITS */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm"
        data-i18n="s7.fit.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s7.fit.title">
          When It Fits Perfectly
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="s7.fit.point1">
            • Supplier onboarding where a basic CO₂e indicator is requested
          </li>
          <li data-i18n="s7.fit.point2">
            • Banking or insurance applications needing a simplified climate metric
          </li>
          <li data-i18n="s7.fit.point3">
            • Public tenders requiring an environmental indicator without full audit
          </li>
          <li data-i18n="s7.fit.point4">
            • SMEs without ESG teams needing a verifiable document quickly
          </li>
          <li data-i18n="s7.fit.point5">
            • International workflows requiring multilingual clarity and verification
          </li>
        </ul>
      </div>

      {/* WHEN NOT TO USE */}
      <div
        className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-sm"
        data-i18n="s7.notuse.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s7.notuse.title">
          When It Should NOT Be Used
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="s7.notuse.point1">
            • Regulatory reporting under CSRD or ESRS
          </li>
          <li data-i18n="s7.notuse.point2">
            • Formal GHG inventories required for certifications
          </li>
          <li data-i18n="s7.notuse.point3">
            • Carbon accounting requiring physical activity data
          </li>
          <li data-i18n="s7.notuse.point4">
            • Scientific or highly detailed emissions modelling
          </li>
          <li data-i18n="s7.notuse.point5">
            • Marketing claims requiring validated LCA data
          </li>
        </ul>
      </div>

      {/* CLOSING CLARIFICATION */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"
        data-i18n="s7.closing.block"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h3 className="text-2xl font-semibold mb-4 relative z-10" data-i18n="s7.closing.title">
          Final Clarification
        </h3>

        <p
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
          data-i18n="s7.closing.text"
        >
          The Attestation is a simplified tool for preliminary ESG workflows. When a fully 
          certified or audited emissions inventory is required, the organisation should 
          use specialized carbon accounting solutions and physical activity data.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Back to summary"
          data-i18n="s7.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
            }
