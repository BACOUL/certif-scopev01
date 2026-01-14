"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      data-section="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent"
          aria-hidden="true"
        ></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s4.title"
        >
          Solution Provided
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s4.intro"
        >
          Certif-Scope provides a deterministic, spend-based CO₂e estimation workflow designed
          specifically for SME procurement and onboarding requests. The process focuses on 
          reproducibility, clarity and verifiable integrity, without claiming full CSRD/ESRS 
          reporting or audited emissions accounting.
        </p>

        <div className="mt-6 text-sm text-gray-600 underline space-y-1 relative z-10">
          <a
            href="https://ghgprotocol.org/standards"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GHG Protocol official standards website"
            data-i18n="s4.link.ghg"
          >
            GHG Protocol – Spend-Based Pathway
          </a><br />

          <a
            href="https://www.bilans-ges.ademe.fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ADEME Base Carbone official dataset"
            data-i18n="s4.link.ademe"
          >
            ADEME Base Carbone – Emission Factors
          </a><br />

          <a
            href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DEFRA UK Conversion Factors official documentation"
            data-i18n="s4.link.defra"
          >
            DEFRA – UK Conversion Factors
          </a><br />

          <a
            href="https://www.ipcc.ch/report/ar6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IPCC AR6 official report"
            data-i18n="s4.link.ipcc"
          >
            IPCC AR6 – Global Warming Potentials
          </a>
        </div>
      </div>

      {/* 3 LAYERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* LAYER 1 */}
        <div
          className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="s4.layer1.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3" data-i18n="s4.layer1.title">
            Layer 1 — Input Normalization
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.layer1.text">
            User-provided spending (€) is classified into predefined categories. The process is 
            deterministic and ensures format consistency. No physical activity data (kWh, km, 
            litres) is required or used.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li data-i18n="s4.layer1.point1">• Predefined expenditure categories</li>
            <li data-i18n="s4.layer1.point2">• Deterministic mapping rules</li>
            <li data-i18n="s4.layer1.point3">• Automatic sanity checks</li>
            <li data-i18n="s4.layer1.point4">• No storage — stateless processing</li>
          </ul>
        </div>

        {/* LAYER 2 */}
        <div
          className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden"
          data-i18n="s4.layer2.block"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-30"
            aria-hidden="true"
          ></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10" data-i18n="s4.layer2.title">
            Layer 2 — Spend-Based Calculation Engine
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10" data-i18n="s4.layer2.text">
            Calculations apply official emission factors (ADEME, DEFRA, IPCC). No machine learning, 
            no prediction and no adjustment beyond multiplying spending by the selected factor.
          </p>

          <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
            <li data-i18n="s4.layer2.point1">• Base: € × emission factor</li>
            <li data-i18n="s4.layer2.point2">• Factors from official datasets</li>
            <li data-i18n="s4.layer2.point3">• Deterministic, version-controlled logic</li>
            <li data-i18n="s4.layer2.point4">• No inference or estimation models</li>
          </ul>
        </div>

        {/* LAYER 3 */}
        <div
          className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="s4.layer3.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3" data-i18n="s4.layer3.title">
            Layer 3 — Verifiable Output
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.layer3.text">
            The final PDF includes indicators, category breakdown, dataset version and an 
            integrity hash (SHA-256). Anyone can recompute the checksum to confirm authenticity 
            without contacting Certif-Scope servers.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li data-i18n="s4.layer3.point1">• Standardized PDF output</li>
            <li data-i18n="s4.layer3.point2">• Versioned dataset references</li>
            <li data-i18n="s4.layer3.point3">• Embedded SHA-256 checksum</li>
            <li data-i18n="s4.layer3.point4">• Offline verification workflow</li>
          </ul>
        </div>
      </div>

      {/* PROCESS SCHEMA */}
      <div
        className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm"
        data-i18n="s4.process.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6" data-i18n="s4.process.title">
          End-to-End Process Flow
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]" data-i18n="s4.process.step1.title">1. Data</p>
            <p className="text-xs text-gray-600 mt-2" data-i18n="s4.process.step1.text">User spending (€)</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]" data-i18n="s4.process.step2.title">2. Normalization</p>
            <p className="text-xs text-gray-600 mt-2" data-i18n="s4.process.step2.text">Category validation</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]" data-i18n="s4.process.step3.title">3. Mapping</p>
            <p className="text-xs text-gray-600 mt-2" data-i18n="s4.process.step3.text">Deterministic matching</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]" data-i18n="s4.process.step4.title">4. Calculation</p>
            <p className="text-xs text-gray-600 mt-2" data-i18n="s4.process.step4.text">€ × emission factor</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="font-semibold text-[#0B3A63]" data-i18n="s4.process.step5.title">5. PDF Output</p>
            <p className="text-xs text-gray-600 mt-2" data-i18n="s4.process.step5.text">Verifiable & structured</p>
          </div>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s4.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
