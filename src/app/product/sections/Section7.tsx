"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium institutional layout */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 to-[#15B097]/15 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          7. Value Proposition
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope delivers immediate, standardized and verifiable CO₂ indicators aligned with
          the operational expectations of European institutions — including banks, insurers, 
          procurement authorities, public grant evaluators and investment committees. The output 
          follows structures compatible with EU Green Public Procurement criteria, EBA ESG risk 
          assessment guidelines, ESRS value-chain screening logic and SFDR-driven investor queries.
        </p>
      </div>


      {/* VALUE GRID — 4 pillars, structured and explicit */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        {/* PILLAR 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Standardization for Public Procurement
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The attestation aligns with EU GPP (Green Public Procurement) expectations requiring
            comparable and consistent environmental indicators across suppliers. This reduces 
            rejection risk in public tenders, especially in construction, logistics and IT services.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: EU GPP Criteria (European Commission)
          </p>
        </div>

        {/* PILLAR 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Alignment With Banking Risk Models
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Certif-Scope outputs match information fields used in EBA guidelines on ESG risk 
            management. Banks increasingly require environmental exposure data to classify SME 
            borrowers and determine sustainability-linked financing conditions.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: EBA Guidelines on ESG Risk (EBA/2022/01)
          </p>
        </div>

        {/* PILLAR 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Supports Investor & SFDR Requirements
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Investment funds subject to SFDR require climate indicators from portfolio companies 
            and suppliers. Certif-Scope provides a structured indicator that integrates cleanly 
            into due diligence frameworks without expert interpretation.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: SFDR EU 2019/2088
          </p>
        </div>

        {/* PILLAR 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Verifiable Integrity for Insurers & Auditors
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The embedded SHA-256 integrity seal allows insurers, auditors and public authorities 
            to verify authenticity without relying on Certif-Scope’s server, supporting ISO 14064-1 
            transparency principles and audit traceability.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: ISO 14064-1:2018 (Transparency & Verification)
          </p>
        </div>

      </div>


      {/* DIFFERENTIATION BLOCK — explicit, structured, non-abstract */}
      <div className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-bold relative z-10">
          How Certif-Scope Differs from Traditional ESG Approaches
        </h3>

        <ul className="mt-6 space-y-4 text-white/90 relative z-10 text-sm list-disc list-inside">
          <li>
            <strong>Consultant-generated carbon reports:</strong> long delays (4–12 weeks), high cost (€3,000–€12,000), 
            inconsistent formatting, and often no verification mechanism.
          </li>
          <li>
            <strong>ESG platforms:</strong> focus on large corporations, require expert input, complex dashboards, 
            and are not adapted to SME procurement deadlines.
          </li>
          <li>
            <strong>Internal spreadsheets/PDFs:</strong> frequently rejected due to missing data fields, lack of 
            comparability, and absence of cryptographic integrity.
          </li>
          <li>
            <strong>Certif-Scope:</strong> instant, standardized, deterministic and verifiable — directly aligned with 
            EU procurement, banking and investor expectations.
          </li>
        </ul>
      </div>


      {/* RETURN BUTTON — identical and compliant with rules */}
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
