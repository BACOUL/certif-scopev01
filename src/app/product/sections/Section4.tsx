"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Unique institutional layout */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          4. Solution Provided
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope structures, computes and formats CO₂ indicators in a reproducible way
          based on verifiable public datasets and recognized methodological principles.
          The entire process is deterministic, transparent, and compatible with institutional
          due-diligence workflows. Output integrity is guaranteed through a SHA-256 hash
          allowing offline verification without relying on platform availability.
        </p>
      </div>


      {/* 3-STEP FRAMEWORK — CLEAR INPUT → ENGINE → OUTPUT PROCESS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* STEP 1 — INPUT */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Step 1 — Structured Input Layer
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Users provide annual expenditures per category. Inputs follow classifications
            compatible with the spend-based method described by the 
            <a href="https://ghgprotocol.org" target="_blank" className="text-[#0B3A63] underline"> GHG Protocol</a>.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Annual spend per operational category</li>
            <li>• Optional industry modifiers (transport, retail, services, etc.)</li>
            <li>• Automatic input structure validation</li>
            <li>• GDPR-compliant (no permanent storage)</li>
          </ul>
        </div>

        {/* STEP 2 — ENGINE */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-30"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">
            Step 2 — Automated Calculation Engine
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            The calculation engine applies emission factors from verified public databases
            and performs deterministic conversions based on spend → CO₂ logic. No hidden
            modelling or inferential estimation is used.
          </p>

          <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
            <li>• ADEME Base Carbone (official French database)</li>
            <li>• DEFRA UK emission factors</li>
            <li>• IPCC AR5 / AR6 conversion parameters</li>
            <li>• Deterministic, reproducible computation chain</li>
          </ul>
        </div>

        {/* STEP 3 — OUTPUT */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Step 3 — Standardized Output for Institutions
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            The generated PDF includes clear indicators, reference datasets, boundary
            definitions, and a cryptographic verification seal. This makes the document
            suitable for procurement screening, banking risk assessment and compliance workflows.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Structured indicator presentation (consistent layout)</li>
            <li>• SHA-256 integrity hash for offline verification</li>
            <li>• Unique verification identifier embedded in PDF</li>
            <li>• Multilingual acceptance (EN/FR/DE/ES/IT)</li>
          </ul>
        </div>
      </div>


      {/* INSTITUTIONAL JUSTIFICATION BLOCK */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why This Solution Is Accepted by Institutions
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Certif-Scope follows verified methodologies and integrates structural elements
          aligned with institutional expectations without replacing CSRD/ESRS reporting.
          It offers the minimum reliable dataset required for supplier classification.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>
            • Compatibility with 
            <a href="https://www.efrag.org" target="_blank" className="text-[#0B3A63] underline">
              ESRS E1 requirements
            </a> for upstream GHG screening.
          </li>
          <li>
            • Emission factors from 
            <a href="https://www.bilans-ges.ademe.fr" target="_blank" className="text-[#0B3A63] underline">
              ADEME Base Carbone
            </a>,  
            <a href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" target="_blank" className="text-[#0B3A63] underline">
              DEFRA UK
            </a>,  
            <a href="https://www.ipcc.ch/report/ar6/wg3/" target="_blank" className="text-[#0B3A63] underline">
              IPCC AR6
            </a>.
          </li>
          <li>
            • Boundary clarification consistent with ISO 14064-1 transparency principles.
          </li>
          <li>
            • SHA-256 cryptographic hash enabling offline verification integrity.
          </li>
        </ul>
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
