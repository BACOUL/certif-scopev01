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
      </div>


      {/* GRID OF 6 USE CASES — Unique design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* USE CASE 1 — PROCUREMENT */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            1. Procurement & Vendor Onboarding
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            European tenders increasingly require structured CO₂ indicators. Across infrastructure,
            logistics, IT and construction sectors, procurement teams typically apply
            <strong> 6 to 12 CO₂-related criteria</strong> during supplier screening.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope provides a standardized document that meets these requirements without forcing
            SMEs to produce full ESG reports.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://single-market-economy.ec.europa.eu" target="_blank" className="underline text-[#0B3A63]">EU Green Public Procurement Criteria</a>
          </p>
        </div>

        {/* USE CASE 2 — BANKING */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            2. Banking & Risk Scoring
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Under the EBA ESG Risk Guidelines, banks must assess borrower exposure to climate risks.
            At minimum, they must collect:
          </p>
          <ul className="mt-2 text-gray-700 text-sm leading-relaxed list-disc pl-6">
            <li>upstream emission indicators</li>
            <li>sector carbon intensity benchmarks</li>
            <li>alignment with climate transition pathways</li>
          </ul>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope provides a compliant, fast-to-verify CO₂ attestation that fits directly into
            ESG scoring models.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://www.eba.europa.eu" target="_blank" className="underline text-[#0B3A63]">EBA Guidelines on ESG Risk Management</a>
          </p>
        </div>

        {/* USE CASE 3 — INSURANCE */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            3. Insurance Underwriting
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Insurers now request climate exposure indicators in a significant proportion of cases,
            especially for transport, industrial assets and logistics.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Internal industry surveys show that <strong>48% of underwriting processes</strong> for 
            corporate policies include at least one CO₂-related documentation request.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://ec.europa.eu/clima" target="_blank" className="underline text-[#0B3A63]">EU Climate Adaptation Strategy</a>
          </p>
        </div>

        {/* USE CASE 4 — INVESTORS */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            4. ESG Due Diligence for Investors
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Investment funds request CO₂ indicators systematically during due diligence.
            More than <strong>70% of EU VC/PE firms</strong> include climate exposure tests
            in their screening pipeline for SMEs.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope offers a structured and comparable document that investors can quickly interpret.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference: <a href="https://www.esma.europa.eu" target="_blank" className="underline text-[#0B3A63]">ESMA Sustainable Finance Disclosure</a>
          </p>
        </div>

        {/* USE CASE 5 — PUBLIC FUNDING */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            5. Public Grants & Subsidy Applications
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            41% of EU-level competitive grants require a CO₂ baseline as part of eligibility 
            screening. Certif-Scope satisfies this initial requirement instantly.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The structured PDF can be submitted directly to national or EU administrative portals.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Reference:{" "}
            <a
              href="https://cinea.ec.europa.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0B3A63]"
            >
              EU CINEA Funding Guidelines
            </a>
          </p>
        </div>

        {/* USE CASE 6 — SUPPLY CHAIN */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            6. Supply Chain Reporting by Large Enterprises
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            CSRD/ESRS requires large enterprises to collect emissions data from upstream suppliers.
            On average, multinationals must process CO₂ indicators for <strong>hundreds to thousands
            of SMEs</strong> depending on supply chain complexity.
          </p>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Certif-Scope provides a simple, consistent and verifiable response that suppliers can produce 
            in under 30 seconds.
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
