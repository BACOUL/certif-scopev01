"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      data-section="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-white shadow-lg border border-[#0B3A63]/25">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"
          aria-hidden="true"
        ></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s5.title"
        >
          Use Cases
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s5.intro"
        >
          Certif-Scope is designed for operational workflows where SMEs must deliver clear,
          structured and verifiable CO₂e indicators. It provides an institutional-ready document
          used for procurement, banking, insurance and due-diligence screening — not a regulatory
          CSRD/ESRS report or audited emissions inventory.
        </p>
      </div>

      {/* GRID OF 6 USE CASES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* USE CASE 1 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition"
          data-i18n="s5.usecase1.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s5.usecase1.title">
            Procurement & Vendor Onboarding
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase1.text1">
            European procurement workflows often require suppliers to provide basic CO₂e indicators,
            even when full regulatory reporting is not required.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase1.text2">
            Certif-Scope produces a standardized document that fits onboarding and tender
            documentation without activity-based data.
          </p>
        </div>

        {/* USE CASE 2 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="s5.usecase2.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s5.usecase2.title">
            Banking & Risk Pre-Assessment
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase2.text1">
            Banks increasingly collect simplified climate indicators for SME clients as part of ESG
            risk screening aligned with regulatory expectations.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase2.text2">
            Certif-Scope provides a reproducible and verifiable CO₂e indicator suitable for
            preliminary assessment stages.
          </p>
        </div>

        {/* USE CASE 3 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition"
          data-i18n="s5.usecase3.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s5.usecase3.title">
            Insurance Underwriting
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase3.text1">
            Insurers may request a high-level CO₂e indicator for sectors exposed to climate-related
            risks regardless of regulatory thresholds.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase3.text2">
            Certif-Scope delivers a clear and consistent attestation that supports early-stage
            underwriting decisions.
          </p>
        </div>

        {/* USE CASE 4 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="s5.usecase4.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s5.usecase4.title">
            ESG Due Diligence (Investors)
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase4.text1">
            Investors frequently require preliminary CO₂e figures to evaluate exposure before
            commissioning detailed ESG analysis.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase4.text2">
            Certif-Scope provides comparable and standardized indicators for first-pass screening.
          </p>
        </div>

        {/* USE CASE 5 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition"
          data-i18n="s5.usecase5.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s5.usecase5.title">
            Public Grants & Subsidy Applications
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase5.text1">
            Many public programs require SMEs to submit a high-level CO₂e baseline as part of the
            eligibility screening process.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase5.text2">
            Certif-Scope generates a compliant and structured indicator suitable for early
            application phases.
          </p>
        </div>

        {/* USE CASE 6 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="s5.usecase6.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s5.usecase6.title">
            Supply Chain Requests from Large Companies
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase6.text1">
            Large companies request simplified CO₂e information from suppliers to satisfy internal
            ESG screening processes, even when SMEs have no legal reporting obligation.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed" data-i18n="s5.usecase6.text2">
            Certif-Scope enables SMEs to respond instantly with a unified, verification-ready
            document.
          </p>
        </div>

      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s5.return"
          aria-label="Back to section summary"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
