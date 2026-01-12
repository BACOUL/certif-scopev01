"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="mb-12 text-left">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Solution Provided
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope delivers a fast, standardized, and independently verifiable CO₂
          attestation built specifically for institutional acceptance. The system transforms
          raw financial data into a clean, audit-ready document that matches the expectations
          of procurement teams, banks, insurers and compliance departments across Europe.
        </p>
      </div>

      {/* MAIN GRID LAYOUT — 3 COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

        {/* COLUMN 1 — DATA INPUT */}
        <div className="p-8 rounded-xl shadow-lg bg-white border border-[#0B3A63]/15">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            1. Structured Data Input
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The user enters simplified financial activity and operational expenses. No
            technical expertise is required, and no ESG consultant is needed.
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Annual spend by category</li>
            <li>• Optional sector-specific adjustments</li>
            <li>• Automatic error validation</li>
            <li>• GDPR-compliant data handling</li>
          </ul>
        </div>

        {/* COLUMN 2 — AUTOMATED ENGINE */}
        <div className="p-8 rounded-xl shadow-lg bg-[#0B3A63] text-white relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-25"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">
            2. Automated Calculation Engine
          </h3>
          <p className="text-white/90 leading-relaxed mb-4 relative z-10">
            The system applies recognized European emission factors and a transparent
            spend-based methodology. Calculations are deterministic, standardized and
            reproducible.
          </p>

          <ul className="text-white/85 text-sm space-y-2 relative z-10">
            <li>• Verified emission factors database</li>
            <li>• Spend-based GHG Protocol alignment</li>
            <li>• Automatic category assignment</li>
            <li>• Real-time generation (< 30 seconds)</li>
          </ul>
        </div>

        {/* COLUMN 3 — VERIFIED OUTPUT */}
        <div className="p-8 rounded-xl shadow-lg bg-[#F8FAFC] border border-[#15B097]">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            3. Instant Verified Output
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The final attestation is produced as a standardized PDF including a cryptographic
            hash and verification ID that any third-party can authenticate independently.
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Audit-ready formatted PDF</li>
            <li>• Unique verification identifier</li>
            <li>• Cryptographic integrity seal</li>
            <li>• Accepted by procurement & financial institutions</li>
          </ul>
        </div>
      </div>

      {/* FEATURE LIST BLOCK */}
      <div className="mt-20 bg-white p-10 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Key Capabilities of the Certif-Scope System
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

          <div className="p-6 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Transparent Methodology</h4>
            <p className="text-gray-700 text-sm mt-2">
              Every calculation step is documented and included in the attestation.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Standardized Output Format</h4>
            <p className="text-gray-700 text-sm mt-2">
              Institutions receive data in a familiar structure with no ambiguity.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Verified for Third Parties</h4>
            <p className="text-gray-700 text-sm mt-2">
              Banks and insurers can authenticate the document independently.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Scalable for Repeat Use</h4>
            <p className="text-gray-700 text-sm mt-2">
              The process can be repeated monthly or yearly without additional cost or consultancy.
            </p>
          </div>

        </div>
      </div>

      {/* CTA BLOCK */}
      <div className="mt-20 px-8 py-10 rounded-xl bg-[#0B3A63] text-white shadow-lg">
        <h4 className="text-2xl font-semibold mb-3">
          Designed for European compliance and institutional acceptance
        </h4>
        <p className="text-white/90 max-w-3xl">
          Certif-Scope reduces friction, accelerates onboarding and replaces expensive 
          sustainability audits with a fast, verifiable and standardized solution compatible 
          with EU procurement requirements.
        </p>
      </div>

      {/* RETURN BUTTON */}
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
