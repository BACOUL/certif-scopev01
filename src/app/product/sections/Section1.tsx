"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >

      {/* HEADER — PREMIUM INSTITUTIONAL DESIGN */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">

        {/* Accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 to-[#0B3A63]/10 pointer-events-none"></div>

        {/* Title — Must follow exact naming convention */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          1. Product Overview
        </h2>

        {/* Institutional introduction */}
        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides an instant, standardized, and independently verifiable
          CO₂ attestation designed for European procurement, financial institutions,
          insurance underwriting, grant applications, and due diligence workflows.
          The output follows strict institutional structures aligned with EU expectations
          and includes a cryptographically verifiable identifier compatible with offline validation.
        </p>

        {/* Regulatory references (short contextual form) */}
        <div className="mt-6 text-sm text-gray-600 bg-white/60 p-4 rounded-lg border border-gray-200 max-w-3xl relative z-10">
          <p className="mb-1 font-semibold text-[#0B3A63]">Relevant regulatory frameworks:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>CSRD Directive 2022/2464 — institutional transparency obligations</li>
            <li>ESRS E1 — climate-related disclosure alignment</li>
            <li>GHG Protocol Corporate Standard — spend-based CO₂ estimation principles</li>
            <li>ISO 14064-1 — organizational GHG quantification requirements (high-level)</li>
          </ul>
        </div>
      </div>

      {/* VALUE GRID — DISTINCT SECTION DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Institution-Ready Format</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Structured to match procurement, banking and audit requirements:
            company identifiers, activity categorisation, summary indicators,
            and verification metadata designed for cross-border acceptance.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/40 hover:shadow-xl transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Delivered in Under 30 Seconds</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Input annual spend once → receive a fully formatted, multilingual
            and verification-ready PDF instantly. No consultant involvement and
            no iterative validation cycles.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Independent Verification</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation includes a cryptographic integrity hash and a unique
            verification identifier allowing third parties — banks, auditors,
            insurers — to authenticate the file offline without relying on
            Certif-Scope servers.
          </p>
        </div>
      </div>

      {/* EXPLANATION STRIP — UNIQUE DESIGN FOR SECTION 1 */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold mb-3 relative z-10">Institutional Context</h4>
        <p className="text-white/90 max-w-4xl leading-relaxed relative z-10">
          European procurement and financial scoring increasingly require verifiable environmental
          indicators. Without standardized CO₂ documentation, SMEs face onboarding delays,
          rejected applications, and additional compliance burdens. Certif-Scope eliminates
          the bottleneck by delivering a structured, multilingual and verification-ready document
          that aligns with cross-European institutional expectations.
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
