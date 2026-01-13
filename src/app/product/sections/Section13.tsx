"use client";

export default function Section13() {
  return (
    <section
      id="s13"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium institutional design */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          13. Integrations
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides a standardized, institution-ready PDF output compatible with
          procurement portals, banking ESG reviews, insurance underwriting workflows and 
          investment due-diligence systems across the EU. Each integration pathway relies on 
          deterministic formatting, predictable metadata zones and a verifiable integrity seal, 
          ensuring immediate ingestion by automated or semi-automated review processes.
        </p>

        <p className="mt-4 text-sm text-gray-600 relative z-10">
          Compatibility is aligned with European institutional documentation practices referenced 
          in EU Green Public Procurement (GPP), EBA ESG Risk Management Guidelines, ESMA Sustainable 
          Finance Disclosure processes, and CINEA funding submission workflows.
        </p>
      </div>

      {/* GRID — 4 integration families */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

        {/* BLOCK 1 — Procurement Portals */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Procurement Platforms
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Designed for compatibility with European procurement systems where suppliers must
            upload standardized CO₂ indicators as part of vendor onboarding or tender submission.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Compatible PDF structure and metadata</li>
            <li>• Easy ingestion by eProc platforms</li>
            <li>• GPP-aligned formatting for screening</li>
          </ul>
        </div>

        {/* BLOCK 2 — Banking ESG Reviews */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Banking & ESG Risk Systems
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Banks can incorporate the attestation into ESG scoring workflows used for credit 
            risk assessments, refinancing reviews or sustainable finance qualification.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Fixed layout for automated extraction</li>
            <li>• Clear CO₂ indicator field zoning</li>
            <li>• Conforms to EBA ESG review structures</li>
          </ul>
        </div>

        {/* BLOCK 3 — Insurance Underwriting */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Insurance Underwriting
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Insurers can integrate the standard PDF format in pre-underwriting documentation 
            for transport, industrial, logistics and infrastructure exposures.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Consistent formatting for risk files</li>
            <li>• Integrity seal for authenticity checks</li>
            <li>• Compatible with environmental screening</li>
          </ul>
        </div>

        {/* BLOCK 4 — Public Funding & Grants */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Public Funding Submissions
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Many European funding and subsidy schemes require environmental indicators as 
            part of eligibility checks. Certif-Scope provides ready-to-deposit PDF output.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Acceptable by CINEA and EU subsidy portals</li>
            <li>• Fixed classification zones for validation</li>
            <li>• No proprietary format dependencies</li>
          </ul>
        </div>

      </div>

      {/* EXPLANATION STRIP — institutional clarity */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Why These Integrations Work Automatically
        </h3>

        <p className="mt-3 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Certif-Scope uses a predictable structure that institutional systems can process 
          without manual interpretation. The PDF follows fixed zoning for identification 
          fields, CO₂ indicators, classification data and verification elements.  
          Automated portals can parse, extract or validate these fields consistently, reducing 
          friction during procurement screening, ESG risk analysis or public-grant evaluation.
        </p>
      </div>

      {/* RETURN BUTTON — Identical across sections */}
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
