"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TITLE — Standardized across all sections */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-10">
        5 — Use Cases
      </h2>

      {/* INTRO STRIP — distinct design for Section 5 */}
      <div className="bg-[#F8FAFC] p-12 rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope supports a wide range of operational, financial and compliance workflows.
          Each use case reflects real institutional requirements where a standardized CO₂
          attestation is necessary for onboarding, validation, documentation or risk evaluation.
        </p>
      </div>

      {/* 4-PILLAR GRID — completely new layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        {/* Procurement */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Procurement
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Suppliers must provide CO₂ indicators during onboarding. Certif-Scope
            ensures transparent and standardized data aligned with purchasing workflows.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>• Supplier onboarding files</li>
            <li>• Vendor documentation packages</li>
            <li>• Tenders & RFP submissions</li>
          </ul>
        </div>

        {/* Banking */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/40">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Banking
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Environmental indicators increasingly influence risk scoring and
            lending decisions. Certif-Scope provides verifiable documentation.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>• Loan applications</li>
            <li>• Risk assessment files</li>
            <li>• Regulatory review documentation</li>
          </ul>
        </div>

        {/* Insurance */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Insurance
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Insurers require sustainability indicators for eligibility and risk-based pricing.
            Certif-Scope provides consistent and independently verifiable data.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>• Eligibility checks</li>
            <li>• Policy renewals</li>
            <li>• Risk scoring validation</li>
          </ul>
        </div>

        {/* Public Funding */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/40">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Public Funding
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Many grant programs require environmental documentation as a baseline.
            Certif-Scope produces standardized CO₂ indicators suitable for submission.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>• Grants & subsidies</li>
            <li>• Innovation funding files</li>
            <li>• Regional support programs</li>
          </ul>
        </div>

      </div>

      {/* SECOND GRID — Additional institutional-specific scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Corporate Due Diligence
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Investors and buyers require environmental indicators during acquisition
            and partnership screening. Certif-Scope delivers a structured, verifiable file.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/40">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            ESG Reporting Support
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            While not a full ESG report, Certif-Scope provides key CO₂ indicators that
            organizations can integrate into their broader reporting processes.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Supplier Risk Management
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Companies relying on subcontractors must track environmental indicators across
            supply chains; Certif-Scope gives them a standard, verifiable baseline.
          </p>
        </div>

      </div>

      {/* FINAL STRIP — High-authority institutional style */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-30"></div>

        <h3 className="text-2xl font-bold relative z-10">
          Built for Real Operational Scenarios
        </h3>

        <p className="text-white/90 max-w-4xl mt-3 relative z-10">
          Certif-Scope ensures SMEs can meet procurement, banking, insurance and governmental
          expectations with a single, standardized, verifiable attestation — reducing delays,
          simplifying submissions, and ensuring institutional compatibility across Europe.
        </p>
      </div>

      {/* UNIVERSAL RETURN BUTTON — identical across all sections */}
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
