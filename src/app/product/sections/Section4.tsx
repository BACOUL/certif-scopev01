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
          Certif-Scope delivers a deterministic, reproducible and verifiable CO₂ indicator
          based strictly on recognized methodological frameworks and validated public
          emission-factor databases. Data processing follows a transparent pipeline that
          ensures institutional acceptance and full offline verifiability.
        </p>

        {/* REFERENCES — standards reconnus */}
        <div className="mt-6 text-sm text-gray-600 underline space-y-1 relative z-10">
          <a href="https://ghgprotocol.org/standards" target="_blank" rel="noopener noreferrer">
            GHG Protocol — Corporate & Scope 3 Standards
          </a><br />
          <a href="https://www.iso.org/standard/66453.html" target="_blank" rel="noopener noreferrer">
            ISO 14064-1 — Principles of transparency, accuracy, consistency
          </a><br />
          <a href="https://www.ipcc.ch/report/ar6/" target="_blank" rel="noopener noreferrer">
            IPCC AR6 — Emission conversion parameters
          </a><br />
          <a href="https://www.bilans-ges.ademe.fr" target="_blank" rel="noopener noreferrer">
            ADEME Base Carbone — Official emission factors
          </a>
        </div>
      </div>


      {/* 3-STEP PROCESS — clarified and tightened */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* STEP 1 — INPUT */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Step 1 — Input Structuring
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Annual expenditures are classified into standardized categories aligned with
            the spend-based pathway defined by the GHG Protocol. Input validation prevents
            inconsistent structures to ensure full determinism.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>• Annual spend per operational category</li>
            <li>• Optional sector modifiers</li>
            <li>• Automatic input validation</li>
            <li>• No data stored (GDPR minimal processing)</li>
          </ul>
        </div>

        {/* STEP 2 — ENGINE */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-30"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">
            Step 2 — Calculation Engine
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            The engine applies official emission factors and deterministic multipliers.
            No AI inference, no statistical modelling, no estimation beyond validated factors.
          </p>

          <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
            <li>• ADEME Base Carbone (official France)</li>
            <li>• DEFRA UK factors (international reference)</li>
            <li>• IPCC AR5/AR6 CO₂e conversion rules</li>
            <li>• Deterministic computation chain</li>
          </ul>
        </div>

        {/* STEP 3 — OUTPUT */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Step 3 — Standardized Output
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            The final PDF includes standardized indicator formatting, dataset references,
            boundary definitions and a full cryptographic signature for independent verification.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>• Predefined institutional layout</li>
            <li>• Boundary definitions aligned with ISO 14064-1</li>
            <li>• References to all emission-factor datasets</li>
            <li>• Embedded cryptographic integrity seal</li>
          </ul>
        </div>
      </div>


      {/* CRYPTOGRAPHIC PROOF BLOCK — expanded + clean */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Cryptographic Verification & Integrity
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Each generated document includes a SHA-256 integrity hash calculated over the full
          structured output JSON before PDF formatting. This allows offline verification by
          any third party without relying on Certif-Scope servers.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
          <li>• Hash algorithm: SHA-256 (FIPS 180-4)</li>
          <li>• Hash scope: full structured dataset before rendering</li>
          <li>• Verification: offline, stateless, reproducible</li>
          <li>• Identifier: embedded checksum + public verification instructions</li>
        </ul>
      </div>


      {/* RETURN BUTTON — Identical across ALL sections */}
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
