"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* HEADER */}
      <div className="mb-12 text-left bg-[#F8FAFC] p-10 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Solution Provided
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope delivers a fast, standardized, and independently verifiable CO₂ attestation 
          designed for institutional acceptance across Europe. The system transforms raw financial 
          data into a structured, audit-ready document using transparent and repeatable methodology.
        </p>
      </div>

      {/* 3-COLUMN SYSTEM FLOW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

        {/* DATA INPUT */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">1. Structured Data Input</h3>
          <p className="text-gray-700 mb-4">
            The user enters simplified financial activity and expense categories. No technical 
            knowledge or ESG expertise is required.
          </p>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Annual spend per category</li>
            <li>• Optional sector-specific adjustments</li>
            <li>• Automatic validation & error checks</li>
            <li>• GDPR-compliant processing</li>
          </ul>
        </div>

        {/* AUTOMATED ENGINE */}
        <div className="relative p-8 rounded-xl shadow-lg bg-[#0B3A63] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">
            2. Automated Calculation Engine
          </h3>

          <p className="text-white/90 mb-4 relative z-10">
            The system applies standardized European emission factors and a transparent spend-based 
            methodology validated across multiple industries.
          </p>

          <ul className="text-white/85 text-sm space-y-2 relative z-10">
            <li>• Verified emission factor database</li>
            <li>• Spend-based GHG Protocol alignment</li>
            <li>• Automated category mapping</li>
            <li>• Real-time generation under 30 seconds</li>
          </ul>
        </div>

        {/* VERIFIED OUTPUT */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-lg border border-[#15B097]">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">3. Instant Verified Output</h3>
          <p className="text-gray-700 mb-4">
            The final attestation is delivered as a standardized PDF containing all required details 
            for institutional audits and compliance workflows.
          </p>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Audit-ready structured PDF</li>
            <li>• Unique verification identifier</li>
            <li>• Cryptographic hash integrity seal</li>
            <li>• Accepted across procurement & financial institutions</li>
          </ul>
        </div>

      </div>

      {/* FEATURE GRID */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-[#0B3A63]">Transparent Methodology</h4>
          <p className="text-gray-700 text-sm mt-2">
            Each calculation step is documented and included in the attestation for complete visibility.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-[#0B3A63]">Standardized Output Format</h4>
          <p className="text-gray-700 text-sm mt-2">
            Institutions receive data in formats they already use in risk, ESG, and compliance review.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-[#0B3A63]">Independent Verification</h4>
          <p className="text-gray-700 text-sm mt-2">
            Any European bank, insurer or buyer can validate authenticity without contacting Certif-Scope.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h4 className="text-xl font-semibold text-[#0B3A63]">Scalable & Repeatable</h4>
          <p className="text-gray-700 text-sm mt-2">
            Perfect for yearly reporting cycles or repeated supplier onboarding.
          </p>
        </div>

      </div>

      {/* CTA STRIP */}
      <div className="mt-20 bg-[#0B3A63] p-10 rounded-xl shadow-sm text-white">
        <h4 className="text-2xl font-bold mb-3">
          Built for real compliance, not marketing claims
        </h4>
        <p className="text-white/90 max-w-3xl">
          Certif-Scope provides measurable, verifiable indicators that reduce friction during 
          procurement, lending, insurance underwriting and ESG evaluations.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL TO SECTION 1 */}
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
