"use client";

export default function Section10() {
  return (
    <section
      id="s10"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — Unique institutional layout */}
      <div className="rounded-2xl p-12 bg-white border border-gray-200 shadow-lg relative overflow-hidden">

        {/* Gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/5 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          10. Data Sources (High-Level Overview)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope relies on stable, recognized and long-term emission factor references 
          that are widely used in European procurement and institutional documentation.  
          This section provides a high-level overview of the categories of data sources 
          used for the attestation, without entering into methodological or regulatory detail.
        </p>
      </div>

      {/* GRID — 4 key source categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* 1 — European Public Institutions */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            European Public Institutions
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Includes publicly available datasets published by major EU bodies.  
            These sources ensure stability, transparency and cross-border recognition.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• EU environmental reporting repositories</li>
            <li>• Public emissions registers</li>
            <li>• Structured categories by sector</li>
          </ul>
        </div>

        {/* 2 — National Environmental Agencies */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            National Environmental Agencies
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Multiple European national agencies publish validated emission factor libraries 
            used in procurement documentation and ESG declarations.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Sector-aligned factor families</li>
            <li>• Publicly accessible documentation</li>
            <li>• Annual or multi-annual updates</li>
          </ul>
        </div>

        {/* 3 — International Reference Datasets */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            International Reference Datasets
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Stable, internationally recognized repositories widely used in audit, risk scoring 
            and sustainability benchmarking contexts.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Standardized classifications</li>
            <li>• Cross-year comparability</li>
            <li>• Long-term institutional acceptance</li>
          </ul>
        </div>

        {/* 4 — Financial & Sectoral Concordances */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Financial & Sectoral Concordances
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Mapping tables linking financial expenditure categories to representative 
            activity-based emission factors, prepared for institutional assessment workflows.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Transparent classification logic</li>
            <li>• Consistent with institutional review norms</li>
            <li>• Deterministic category assignment</li>
          </ul>
        </div>

      </div>

      {/* EXPLANATION STRIP — High-trust institutional language */}
      <div className="mt-20 p-12 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Why This Matters for Institutions
        </h3>

        <p className="text-white/90 max-w-5xl mt-4 leading-relaxed relative z-10">
          Institutional reviewers require that environmental indicators originate from stable, 
          recognized and reproducible data sources.  
          Certif-Scope only uses public or internationally recognized references to ensure 
          compatibility with procurement screening, banking due-diligence and insurance eligibility 
          checks across multiple European jurisdictions.  
          The stability and independence of source datasets ensures long-term acceptability even in 
          environments where institutional validation criteria may evolve.
        </p>
      </div>

      {/* RETURN BUTTON — identical across all sections */}
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
