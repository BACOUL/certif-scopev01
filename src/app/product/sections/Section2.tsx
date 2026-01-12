"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — unique design block */}
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-md overflow-hidden">

        {/* Accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#15B097]/10 to-[#0B3A63]/5"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          2. Key Benefits Summary — Why Institutions Accept It
        </h2>

        <p className="text-lg text-gray-700 mt-6 max-w-4xl leading-relaxed relative z-10">
          Certif-Scope is engineered for fast, credible, and standardized climate-related reporting 
          aligned with mandatory European regulatory expectations.  
          Benefits directly support procurement evaluation (Directive 2014/24/EU), banking risk frameworks (EBA Guidelines), 
          and sustainability disclosure obligations (CSRD, ESRS E1).  
          Each output follows a reproducible modeling approach derived from the GHG Protocol (spend-based method), 
          ISO 14064-1 principles, and widely recognized emission factor sources (ADEME, DEFRA, IPCC).
        </p>
      </div>

      {/* 6 BENEFITS GRID — premium layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Standardized Across Europe
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Structured using regulatory terminology aligned with CSRD / ESRS E1 taxonomy, 
            ensuring compatibility with cross-border procurement and ESG evaluation procedures.  
            Institutions recognize the format immediately, reducing the chance of rejection.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Fast Delivery (Under 30 Seconds)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Fully automated calculation pipeline.  
            Uses deterministic models and validated emission factors to produce an attestation instantly —  
            essential for tenders with tight deadlines or banking onboarding procedures.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Independent Verification (Offline)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The document includes a SHA-256 integrity hash and verifiable metadata.  
            Third parties can authenticate authenticity without external servers, 
            satisfying audit-trail and non-repudiation requirements.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            4. Recognized Emission Factor Sources
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Based on official datasets including ADEME Base Carbone® (France), 
            DEFRA (United Kingdom), and IPCC 2021 world averages.  
            Ensures methodological transparency and international credibility.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            5. Built for Procurement & Banking Workflows
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Includes fields expected in institutional reviews: entity identifiers, activity classification, 
            Scope indicators, methodology summary, verification block, and timestamp.  
            Saves weeks of back-and-forth validation during due diligence.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            6. Multilingual Compatibility
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Designed with simple, clear English structure easily translatable into French, German, Spanish and Italian.  
            Essential for EU tenders and international procurement chains.
          </p>
        </div>
      </div>

      {/* INFO STRIP — credibility block */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold relative z-10">
          Why Institutions Trust Certif-Scope
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          The attestation complies with formal expectations from EU regulators and sectoral authorities.  
          It simplifies climate-related documentation for SMEs and enables banks, insurers, public buyers, 
          and large corporations to integrate environmental indicators into structured evaluation workflows.
        </p>
      </div>

      {/* RETURN BUTTON — identical across sections */}
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
