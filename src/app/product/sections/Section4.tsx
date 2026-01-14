"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          4. Solution Provided
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides a deterministic, spend-based CO₂e estimation workflow designed
          specifically for SME procurement and onboarding requests. The process focuses on 
          reproducibility, clarity and verifiable integrity, without claiming full CSRD/ESRS 
          reporting or audited emissions accounting.
        </p>

        <div className="mt-6 text-sm text-gray-600 underline space-y-1 relative z-10">
          <a href="https://ghgprotocol.org/standards" target="_blank" rel="noopener noreferrer">
            GHG Protocol – Spend-Based Pathway
          </a><br />
          <a href="https://www.bilans-ges.ademe.fr" target="_blank" rel="noopener noreferrer">
            ADEME Base Carbone – Emission Factors
          </a><br />
          <a href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" target="_blank" rel="noopener noreferrer">
            DEFRA – UK Conversion Factors
          </a><br />
          <a href="https://www.ipcc.ch/report/ar6/" target="_blank" rel="noopener noreferrer">
            IPCC AR6 – Global Warming Potentials
          </a>
        </div>
      </div>

      {/* 3 LAYERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* LAYER 1 */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Layer 1 — Input Normalization
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            User-provided spending (€) is classified into predefined categories. The process is 
            deterministic and ensures format consistency. No physical activity data (kWh, km, 
            litres) is required or used.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Predefined expenditure categories</li>
            <li>• Deterministic mapping rules</li>
            <li>• Automatic sanity checks</li>
            <li>• No storage — stateless processing</li>
          </ul>
        </div>

        {/* LAYER 2 */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-30"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">
            Layer 2 — Spend-Based Calculation Engine
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            Calculations apply official emission factors (ADEME, DEFRA, IPCC). No machine learning, 
            no prediction and no adjustment beyond multiplying spending by the selected factor.
          </p>

          <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
            <li>• Base: € × emission factor</li>
            <li>• Factors from official datasets</li>
            <li>• Deterministic, version-controlled logic</li>
            <li>• No inference or estimation models</li>
          </ul>
        </div>

        {/* LAYER 3 */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Layer 3 — Verifiable Output
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            The final PDF includes indicators, category breakdown, dataset version and an 
            integrity hash (SHA-256). Anyone can recompute the checksum to confirm authenticity 
            without contacting Certif-Scope servers.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Standardized PDF output</li>
            <li>• Versioned dataset references</li>
            <li>• Embedded SHA-256 checksum</li>
            <li>• Offline verification workflow</li>
          </ul>
        </div>
      </div>

      {/* PROCESS SCHEMA */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
          End-to-End Process Flow
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">1. Data</p>
            <p className="text-xs text-gray-600 mt-2">User spending (€)</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">2. Normalization</p>
            <p className="text-xs text-gray-600 mt-2">Category validation</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">3. Mapping</p>
            <p className="text-xs text-gray-600 mt-2">Deterministic matching</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">4. Calculation</p>
            <p className="text-xs text-gray-600 mt-2">€ × emission factor</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]">5. PDF Output</p>
            <p className="text-xs text-gray-600 mt-2">Verifiable & structured</p>
          </div>
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
