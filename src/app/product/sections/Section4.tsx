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
          Certif-Scope delivers a standardized, verifiable and institution-ready CO₂ attestation
          designed to address procurement, banking, insurance and investment compliance
          expectations across Europe. It transforms basic financial activity data into a
          consistent, audit-compatible output aligned with CSRD/ESRS context while remaining
          simple enough for SMEs. Verification is cryptographically secured and compatible with
          offline validation by third-parties.
        </p>
      </div>


      {/* 3-STEP VALUE FRAMEWORK — DISTINCT DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Step 1 — Structured Input Layer
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Users provide annual expenditure categories and optional sector adjustments.
            Inputs follow classifications compatible with GHG Protocol spend-based logic,
            ensuring data can be interpreted uniformly by institutions.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Annual spend per relevant operational category</li>
            <li>• Optional industry modifiers (transport, retail, services, etc.)</li>
            <li>• Automatic data validation and error detection</li>
            <li>• GDPR-compliant, no permanent storage</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-30"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">
            Step 2 — Automated Calculation Engine
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            The system applies recognised European emission factor sources and spend-based
            conversion logic validated against GHG Protocol references. The entire calculation
            chain is deterministic and reproducible, ensuring institutional trust.
          </p>

          <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
            <li>• Validated emission factors from ADEME / DEFRA / IPCC</li>
            <li>• Reproducible spend-to-CO₂ methodology</li>
            <li>• Instant computation without human intervention</li>
            <li>• No unverifiable or modelled assumptions</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Step 3 — Standardized Output for Institutions
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            The system generates a structured PDF attestation with clear indicators, emission
            factors summary, methodology framing, and a verifiable cryptographic seal. This
            makes the document compatible with ESG due diligence workflows.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Professional, consistent formatting</li>
            <li>• Unique verification identifier</li>
            <li>• Cryptographic integrity hash</li>
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
          The Certif-Scope output mirrors the structure and expectations described in
          European regulatory and technical references, without claiming to replace full
          CSRD/ESRS reporting. It provides the minimum reliable information needed by
          procurement and finance teams to classify supplier climate exposure.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>
            • Consistency aligns with <a href="https://www.efrag.org" target="_blank" className="text-[#0B3A63] underline">ESRS E1 data requirements</a>,
            especially for value-chain GHG screening.
          </li>
          <li>
            • Emission factors sourced from verifiable datasets (ADEME Base Carbone, DEFRA,
            IPCC AR5/AR6).
          </li>
          <li>
            • Clear boundary explanation avoids misleading claims (not a full Scope 3 audit).
          </li>
          <li>
            • Verification hash enables offline integrity checks for audit trails.
          </li>
        </ul>
      </div>


      {/* RETURN BUTTON — STRICTLY IDENTICAL ACROSS ALL SECTIONS */}
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
