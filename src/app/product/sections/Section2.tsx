"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TITLE & INTRO BLOCK — distinct design */}
      <div className="p-12 rounded-2xl bg-white shadow-lg border border-[#0B3A63]/15">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
          Key Benefits Summary
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Certif-Scope provides immediate, standardized, and verification-ready CO₂
          attestations built to satisfy institutional decision-makers. This section outlines
          the essential advantages for procurement, banking, insurance, investment onboarding,
          and compliance teams across Europe.
        </p>
      </div>

      {/* BENEFITS GRID — New design with color blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Immediate Availability
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Generate a CO₂ attestation in less than 30 seconds. Ideal for urgent requests
            from public procurement offices, banks, or insurers. No ESG expertise required.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-25"></div>
          <h3 className="text-xl font-semibold mb-3 relative z-10">
            Review-Ready Formatting
          </h3>
          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            The attestation includes clear identification fields, category breakdown,
            concise results, verification ID, and an institutional presentation aligned
            with EU expectations.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl border border-[#15B097] shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Third-Party Verification
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each file contains a cryptographic hash and unique verification code.
            External auditors, banks, and risk evaluators can validate authenticity offline
            without contacting Certif-Scope.
          </p>
        </div>

      </div>

      {/* SECOND GRID — Different layout for variety */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        {/* BENEFIT 4 */}
        <div className="p-10 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Cost-Effective Solution
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            No consulting fees, no subscription, no multi-week ESG audit. A simple,
            repeatable, low-cost solution designed for SMEs, startups, contractors,
            retail, logistics and service providers.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Accepted Across Europe
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Built to match expectations from European institutions: streamlined layout,
            consistent terminology, and verifiable data structure trusted by procurement,
            banks, and insurers.
          </p>
        </div>

      </div>

      {/* HIGHLIGHT STRIP WITH ICONIC EMPHASIS */}
      <div className="mt-20 p-10 bg-[#15B097]/10 rounded-xl border border-[#15B097]/40 shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          A Professional, Trustworthy Document
        </h4>
        <p className="text-gray-700 max-w-4xl">
          Certif-Scope improves supplier credibility, accelerates onboarding,
          and provides a clear and standardized environmental footprint reference
          without the burden of complex reporting frameworks.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS (Rule #27) */}
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
