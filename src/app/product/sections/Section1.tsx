"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* TITLE — UNIFORM RULE ACROSS ALL SECTIONS */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-8">
        1 — Product Overview
      </h2>

      {/* PREMIUM INTRO BLOCK */}
      <div className="bg-[#F8FAFC] p-12 rounded-2xl shadow-md border border-gray-100">
        <h3 className="text-3xl font-bold text-[#0B3A63] mb-6">
          Instant, Standardized and Verifiable CO₂ Attestation
        </h3>

        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Certif-Scope provides a fast, standardized CO₂ attestation designed for
          procurement, banking, insurance, compliance evaluations and onboarding
          workflows across Europe. The output is institution-ready, formatted consistently,
          and supported by independent cryptographic verification.
        </p>
      </div>

      {/* THREE VALUE PILLARS — DISTINCTIVE DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* Pillar 1 */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-[#0B3A63]/20">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Institution-Ready Formatting
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            The attestation follows a structured, consistent layout adapted for
            procurement reviews, compliance checks and third-party validation.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-lg border border-[#15B097]/30">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Generated in Less Than 30 Seconds
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            A streamlined input process allows any SME to produce a validated CO₂
            attestation instantly — without consultants or complex reporting tools.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-[#0B3A63]/20">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Verifiable by Any Institution
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each document includes an integrity seal and verification reference,
            enabling secure offline authentication by third parties.
          </p>
        </div>

      </div>

      {/* INFORMATION STRIP — UNIQUE TO THIS SECTION */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold mb-4 relative z-10">
          Built for Institutional Acceptance Across Europe
        </h4>
        <p className="text-white/90 max-w-4xl leading-relaxed relative z-10">
          Certif-Scope removes friction in procurement and onboarding processes by
          delivering a standardized document that is easy to evaluate, compare and
          authenticate. It solves a practical need: provide SMEs with the ability to
          submit compliant, professional CO₂ information without costly ESG audits.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL IN ALL SECTIONS */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
