"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK */}
      <div className="bg-[#0B3A63] text-white p-12 rounded-2xl shadow-md">
        <h2 className="text-4xl font-extrabold mb-4">
          Section 3 — Why the Product Exists
        </h2>
        <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
          European institutions increasingly require standardized CO₂ indicators from suppliers,
          applicants, subcontractors and service providers. SMEs face a structural barrier:
          traditional carbon assessments are slow, expensive, and designed for large organizations.
          Certif-Scope exists to close this gap with an instant, standardized, and institution-ready
          attestation.
        </p>
      </div>

      {/* 4-COLUMN GRID — redesigned for clarity & mobile */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
          <h4 className="text-lg font-semibold text-[#0B3A63] mb-2">Procurement</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Buyers now request CO₂ indicators before approving suppliers.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
          <h4 className="text-lg font-semibold text-[#0B3A63] mb-2">Banking</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Environmental scoring directly impacts risk rating and financing.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
          <h4 className="text-lg font-semibold text-[#0B3A63] mb-2">Insurance</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Sustainability indicators influence eligibility and premium levels.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
          <h4 className="text-lg font-semibold text-[#0B3A63] mb-2">Public Funding</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Grants increasingly require fast, standardized CO₂ disclosure.
          </p>
        </div>
      </div>

      {/* PAIN POINTS SECTION */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Slow Processes</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            SMEs typically wait weeks for consultants, while institutions require delivery
            within 24–72 hours. Certif-Scope eliminates this delay.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">High Costs</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Traditional carbon audits are expensive and inaccessible. Certif-Scope makes
            compliance affordable for all SMEs.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">No Standardization</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions reject inconsistent reports. Certif-Scope delivers a single,
            predictable and accepted structure.
          </p>
        </div>
      </div>

      {/* CONTEXT SECTION */}
      <div className="mt-20 p-10 bg-[#15B097]/10 border border-[#15B097]/40 rounded-xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why a Standard Was Needed
        </h3>
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Europe lacks a unified, fast and affordable way for SMEs to provide credible CO₂
          information. Certif-Scope fills this operational gap with a standardized document
          format and cryptographic verification that institutions can trust.
        </p>
      </div>

      {/* RETURN BUTTON (universal style) */}
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
