"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional, structured */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          4. Solution Provided
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope implements a deterministic and verifiable CO₂ indicator generation process 
          based on recognized methodologies. It relies on three independent functional layers:
          input normalization, standardized calculation engine, and cryptographically verifiable output.
        </p>

        {/* REFERENCES — Official standards */}
        <div className="mt-6 text-sm text-gray-600 underline space-y-1 relative z-10">
          <a href="https://ghgprotocol.org/standards" target="_blank" rel="noopener noreferrer">
            GHG Protocol – Corporate & Scope 3 Standards
          </a><br />
          <a href="https://www.iso.org/standard/66453.html" target="_blank" rel="noopener noreferrer">
            ISO 14064-1 – Transparency, accuracy, consistency
          </a><br />
          <a href="https://www.ipcc.ch/report/ar6/" target="_blank" rel="noopener noreferrer">
            IPCC AR6 – Climate conversion parameters
          </a><br />
          <a href="https://www.bilans-ges.ademe.fr" target="_blank" rel="noopener noreferrer">
            ADEME Base Carbone – Official emission factor repository
          </a>
        </div>
      </div>


      {/* 3-BRICK STRUCTURE — Explicit and non-ambiguous */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BRIQUE 1 */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Layer 1 — Input Normalization
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            User-provided expenditure data is validated and mapped into standardized categories 
            compatible with GHG Protocol spend-based pathways. All inputs are checked for structure, 
            format consistency and completeness prior to processing.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Classification of expenditures</li>
            <li>• Deterministic mapping table</li>
            <li>• Automatic input validation</li>
            <li>• No data persistence (stateless)</li>
          </ul>
        </div>

        {/* BRIQUE 2 */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-30"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">
            Layer 2 — Standardized Calculation Engine
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            The engine applies emission factors from validated sources and deterministic multipliers. 
            Calculations follow established spend-based formulas with no AI inference, no machine 
            learning and no approximations beyond official datasets.
          </p>

          <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
            <li>• ADEME Base Carbone</li>
            <li>• DEFRA UK GHG Conversion Factors</li>
            <li>• IPCC AR6 warming potentials</li>
            <li>• Formula: expenditure × emission factor</li>
          </ul>
        </div>

        {/* BRIQUE 3 */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Layer 3 — Cryptographically Verifiable Output
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Output consists of a standardized PDF including all calculation details, references, 
            boundaries and a cryptographic integrity seal. Verification is entirely offline and 
            does not require any Certif-Scope service availability.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Standardized institutional layout</li>
            <li>• Dataset references and boundaries</li>
            <li>• Embedded SHA-256 integrity seal</li>
            <li>• Independent offline verification</li>
          </ul>
        </div>
      </div>


      {/* SCHEMA — DATA → NORMALIZATION → MAPPING → CALCULATION → PDF */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
          End-to-End Processing Schema
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">1. Data</p>
            <p className="text-xs text-gray-600 mt-2">Expenditures entered by user</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">2. Normalization</p>
            <p className="text-xs text-gray-600 mt-2">Structural validation</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">3. Mapping</p>
            <p className="text-xs text-gray-600 mt-2">Deterministic category matching</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">4. Calculation</p>
            <p className="text-xs text-gray-600 mt-2">Emission factor × expenditure</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">5. PDF Output</p>
            <p className="text-xs text-gray-600 mt-2">Deterministic & verifiable</p>
          </div>

        </div>
      </div>


      {/* EXAMPLES OF REAL MAPPING — Added */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Real Examples of Category Mapping
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed mb-6">
          Certif-Scope relies on deterministic, pre-validated mapping rules. Below are 
          concrete examples showing how raw expenditure inputs are transformed into 
          standardized emission categories.
        </p>

        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#0B3A63] text-white">
              <th className="p-3 border border-gray-300">User Input</th>
              <th className="p-3 border border-gray-300">Detected Category</th>
              <th className="p-3 border border-gray-300">Emission Factor Source</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-[#F8FAFC]">
              <td className="p-3 border border-gray-300">Transport services – 4 500 €</td>
              <td className="p-3 border border-gray-300">Logistics / Freight</td>
              <td className="p-3 border border-gray-300">Base Carbone 2024.2</td>
            </tr>

            <tr>
              <td className="p-3 border border-gray-300">IT equipment – 12 000 €</td>
              <td className="p-3 border border-gray-300">Purchased Goods – Electronics</td>
              <td className="p-3 border border-gray-300">DEFRA 2024</td>
            </tr>

            <tr className="bg-[#F8FAFC]">
              <td className="p-3 border border-gray-300">Marketing agency – 9 800 €</td>
              <td className="p-3 border border-gray-300">Professional Services</td>
              <td className="p-3 border border-gray-300">Base Carbone 2024.2</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* CRYPTOGRAPHIC BLOCK */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/25 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Cryptographic Verification & Integrity
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Certif-Scope embeds a SHA-256 integrity hash computed from the complete structured 
          dataset before rendering. This ensures reproducibility and allows auditors, banks, 
          procurement authorities or insurers to verify authenticity without contacting any server.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
          <li>• Algorithm: SHA-256 (FIPS 180-4)</li>
          <li>• Scope: Full dataset prior to PDF generation</li>
          <li>• Verification: Offline recomputation</li>
          <li>• Trust model: No server dependency</li>
        </ul>
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
