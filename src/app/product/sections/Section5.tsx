"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-white shadow-lg border border-[#0B3A63]/25">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          5. Use Cases
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope is designed specifically for operational workflows where SMEs must provide 
          indicative, structured and verifiable CO₂ information. The output is not a full emissions 
          report, but an institutional-ready document aligned with how buyers, banks and insurers 
          request high-level climate indicators.
        </p>
      </div>


      {/* GRID OF 6 USE CASES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* USE CASE 1 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            1. Procurement & Vendor Onboarding
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Many European tenders request simple CO₂ indicators from suppliers. These requests often 
            follow internal or sector-based criteria rather than full CSRD reporting obligations.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope provides a structured, consistent PDF that fits procurement workflows requiring 
            indicative climate information without detailed activity data.
          </p>
        </div>

        {/* USE CASE 2 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            2. Banking & Risk Pre-Assessment
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Banks increasingly request climate exposure indicators for SME borrowers as part of ESG 
            risk screening. In many cases, high-level CO₂ figures are requested before full due diligence.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope offers a reproducible, verifiable document that provides the baseline indicators 
            needed for preliminary risk scoring. It does not replace audited reporting.
          </p>
        </div>

        {/* USE CASE 3 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            3. Insurance Underwriting
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Insurers may request high-level CO₂ indicators for sectors with climate exposure. These 
            indicators are often used for initial assessment rather than detailed inventories.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope provides a clear and consistent attestation that insurers can review quickly 
            during screening processes.
          </p>
        </div>

        {/* USE CASE 4 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            4. ESG Due Diligence (Investors)
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Investors often request indicative CO₂ figures early in the evaluation process to assess 
            general climate exposure before any detailed analysis.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope provides consistent, comparable indicators that help investors perform a first 
            screening without requiring SMEs to produce full sustainability reports.
          </p>
        </div>

        {/* USE CASE 5 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            5. Public Grants & Subsidy Applications
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Many grant programs request a high-level CO₂ baseline as part of eligibility checks. These 
            programs do not require full lifecycle analysis, but a structured indicator.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope produces a standardized document that can be submitted during preliminary 
            application stages.
          </p>
        </div>

        {/* USE CASE 6 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            6. Supply Chain Requests from Large Companies
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Large enterprises increasingly request basic CO₂ indicators from SME suppliers to comply 
            with internal screening processes. These requests do not require audited emissions data.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope allows SMEs to respond in under 30 seconds with a consistent, verifiable and 
            easy-to-read document.
          </p>
        </div>

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
