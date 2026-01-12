
"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium layout distinct from other sections */}
      <div className="relative p-12 rounded-2xl bg-white shadow-lg border border-[#0B3A63]/25">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          5. Use Cases
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope is built for real institutional workflows, not theoretical ESG reporting.
          Each use case directly corresponds to documented requirements in European procurement,
          banking, insurance, public funding and due diligence procedures. The standardized CO₂
          attestation provides an immediate compliance signal for stakeholders who need verifiable,
          consistent and interpretable information.
        </p>

        <p className="mt-4 text-sm text-gray-600 relative z-10">
          Classification reference for CO₂ indicators follows the structure defined by the 
          <a 
            href="https://ghgprotocol.org/scope-1-2-3"
            target="_blank"
            className="underline text-[#0B3A63]"
          >
            GHG Protocol Scope 1 / 2 / 3 framework
          </a>.
        </p>
      </div>


      {/* GRID OF 6 USE CASES — Unique design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* USE CASE 1 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            1. Procurement & Vendor Onboarding
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Many European purchasing departments require environmental indicators for supplier
            onboarding, particularly in sectors such as logistics, construction, IT services
            and manufacturing. Certif-Scope provides a verifiable document aligned with
            procurement checklists used across EU enterprises.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://single-market-economy.ec.europa.eu" target="_blank" className="underline text-[#0B3A63]">EU Green Public Procurement Criteria</a>
          </p>
        </div>

        {/* USE CASE 2 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            2. Banking & Risk Scoring
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Financial institutions collect CO₂ indicators as part of risk scoring and credit
            exposure assessments. Certif-Scope provides a standardized attestation that supports
            SME loan applications, refinancing and ESG-aligned financing eligibility.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://www.eba.europa.eu" target="_blank" className="underline text-[#0B3A63]">EBA Guidelines on ESG Risk Management</a>
          </p>
        </div>

        {/* USE CASE 3 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            3. Insurance Underwriting
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Insurers increasingly require environmental exposure data during underwriting,
            especially for transport, logistics, industrial and property-related policies.
            Certif-Scope provides a lightweight but credible document for initial screening.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://ec.europa.eu/clima" target="_blank" className="underline text-[#0B3A63]">EU Climate Adaptation Strategy</a>
          </p>
        </div>

        {/* USE CASE 4 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            4. ESG Due Diligence for Investors
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Investment funds routinely request CO₂ indicators during due diligence. Certif-Scope
            provides a consistent institutional document for investor screening—especially for
            supply-chain-intensive startups and SMEs.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://www.esma.europa.eu" target="_blank" className="underline text-[#0B3A63]">ESMA Sustainable Finance Disclosure</a>
          </p>
        </div>

        {/* USE CASE 5 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            5. Public Grants & Subsidy Applications
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Many EU and national funding programmes require CO₂ documentation as a baseline
            eligibility condition. Certif-Scope provides a standardized document that can be
            submitted directly to administrative portals.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://cinea.ec.europa.eu" target="_blank" className="underline text-[#0B3A63]">EU CINEA Funding Guidelines</a>
          </p>
        </div>

        {/* USE CASE 6 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            6. Supply Chain Reporting by Large Enterprises
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Large companies subject to CSRD/ESRS must collect climate indicators from
            upstream and downstream partners. Certif-Scope offers those partners a simple
            way to provide consistent screening data.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://www.efrag.org" target="_blank" className="underline text-[#0B3A63]">ESRS E1 Value Chain Screening</a>
          </p>
        </div>

      </div>


      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
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
