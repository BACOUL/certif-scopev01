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
          Certif-Scope provides a structured, standardized and verifiable CO₂ indicator aligned 
          with European procurement norms, ESG risk criteria used by banks, insurer underwriting 
          practices, investor due-diligence expectations and public funding requirements. 
          It eliminates format inconsistencies, lack of comparability and unverifiable PDF files 
          typically submitted by SMEs.
        </p>
      </div>



      {/* VALUE GRID — 4 institutional pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        {/* Pillar 1 — EU GPP */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Alignment with EU Public Procurement
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Certif-Scope formats CO₂ indicators according to the structure expected in EU Green 
            Public Procurement procedures. This supports supplier validation in construction, 
            logistics, facility management and IT service tenders.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: EU GPP Criteria (European Commission)
          </p>
        </div>

        {/* Pillar 2 — Banking */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Integration into Banking ESG Risk Models
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Banks use environmental indicators in sustainability risk scoring models. 
            Certif-Scope delivers a standardized screening metric aligned with EBA ESG Guidelines 
            to support loan applications and refinancing.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: EBA Guidelines on ESG Risk (EBA/2022/01)
          </p>
        </div>

        {/* Pillar 3 — Investment */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Compliance with SFDR & EU Taxonomy Screening
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Investors governed by SFDR and EU Taxonomy require climate indicators from 
            suppliers and portfolio companies. Certif-Scope produces the structured data 
            needed for pre-investment ESG screening.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: SFDR (EU 2019/2088) & EU Taxonomy Regulation
          </p>
        </div>

        {/* Pillar 4 — Insurers */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Structural Verifiability for Insurers & Auditors
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Insurers and auditors require verifiable indicators. The embedded SHA-256 hash 
            enables offline authenticity validation consistent with ISO 14064-1 transparency 
            principles.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reference: ISO 14064-1:2018 Verification Principles
          </p>
        </div>

      </div>



      {/* COMPARISON TABLE — clear, institutional, non-marketing */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">

        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Comparative Framework: Certif-Scope vs Traditional Methods
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b">
                <th className="p-4 text-left font-semibold">Criterion</th>
                <th className="p-4 text-left font-semibold">Certif-Scope</th>
                <th className="p-4 text-left font-semibold">Consultant ESG Report</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Delivery Time</td>
                <td className="p-4">Instant (< 30 sec)</td>
                <td className="p-4">2–8 weeks</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Cost</td>
                <td className="p-4">49 €</td>
                <td className="p-4">1 500–12 000 €</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Standardization</td>
                <td className="p-4">Fully standardized</td>
                <td className="p-4">Variable and non-comparable</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Verification</td>
                <td className="p-4">SHA-256 cryptographic integrity</td>
                <td className="p-4">No cryptographic verification</td>
              </tr>
              <tr>
                <td className="p-4">Institutional Acceptance</td>
                <td className="p-4">Aligned with EU GPP, EBA, SFDR</td>
                <td className="p-4">Depends on provider, not standardized</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



      {/* USE CASES — concrete examples */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Concrete Institutional Use Cases
        </h3>

        <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
          <li>
            • <strong>Bank loan application:</strong> banks request CO₂ indicators for sustainability risk scoring.
          </li>
          <li>
            • <strong>Public tender submission:</strong> EU GPP requires structured environmental evaluation fields.
          </li>
          <li>
            • <strong>Investor onboarding:</strong> VC/PE funds ask for climate metrics under SFDR Article 8/9.
          </li>
          <li>
            • <strong>Supplier validation:</strong> Procurement teams classify environmental exposure per supplier.
          </li>
          <li>
            • <strong>Insurance underwriting:</strong> insurers analyze environmental exposure for risk pricing.
          </li>
        </ul>
      </div>



      {/* RETURN BUTTON — identical */}
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
