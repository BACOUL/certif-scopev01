"use client";

export default function Section11() {
  return (
    <section
      id="s11"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — institutional SME positioning */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          11. SME Advantages (Practical, Immediate, Low Overhead)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope provides small and medium enterprises with a standardized and 
          institution-ready carbon attestation without requiring specialist knowledge, 
          internal reporting tools or complex software. The format is compatible with 
          CSRD-aligned documentation requests from procurement, banks and insurers. 
          The attestation does not replace detailed CSRD reports or ISO 14064 audits 
          and does not attempt to model operational emissions.
        </p>
      </div>


      {/* GRID — 4 benefits for SMEs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* 1 — No infrastructure required */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            No Technical Infrastructure
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            SMEs can generate a compliant attestation without setting up internal systems 
            or managing integrations. No persistent data storage or operational tracking 
            is required.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• No IT deployment</li>
            <li>• No compliance tooling needed</li>
            <li>• No internal data retention</li>
          </ul>
        </div>

        {/* 2 — Immediate institutional compatibility */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Ready for Institutional Requests
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The output follows European review practices for due diligence, procurement 
            and banking. Compatibility refers strictly to structure and verification 
            metadata. Institutions may request additional documents depending on context.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Standardized terminology</li>
            <li>• Consistent formatting</li>
            <li>• Embedded verification metadata</li>
          </ul>
        </div>

        {/* 3 — Minimal input effort */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Minimal Required Inputs
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Only essential financial and categorical data is required. No granular 
            operational data, supplier surveys or site-level measurements are demanded.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Financial amount</li>
            <li>• Category selection</li>
            <li>• Reporting period</li>
          </ul>
        </div>

        {/* 4 — Predictable and reproducible */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Predictable Outputs
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Values can be reproduced by external reviewers using identical dataset versions. 
            Results are based on sector-average emission factors using the spend-based 
            method, not operational measurements. Outputs represent standardized estimates, 
            not audited carbon footprints.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Stable emission-factor versions</li>
            <li>• Offline verification</li>
            <li>• Deterministic calculation</li>
          </ul>
        </div>

      </div>


      {/* INFO STRIP — SME institutional context */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">Why SMEs Benefit Immediately</h3>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          European institutions increasingly request standardized environmental 
          information from suppliers, even when those suppliers are not directly 
          subject to CSRD. Certif-Scope enables SMEs to respond with a structured, 
          reproducible document aligned with recognized datasets and transparent 
          methodology while clearly indicating the scope and inherent limitations 
          of a spend-based estimation approach.
        </p>
      </div>


      {/* RETURN BUTTON — consistent across all sections */}
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
