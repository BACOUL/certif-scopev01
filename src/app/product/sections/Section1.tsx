"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* HEADER – premium institutional style */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          1. Product Overview
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope generates a standardized CO₂ attestation aligned with the core
          disclosure structure referenced in the EU Corporate Sustainability Reporting
          Directive (CSRD – Regulation EU 2022/2464), the ESRS E1 climate framework,
          and the GHG Protocol “spend-based” calculation pathway. These three pillars
          shape how European institutions expect environmental indicators to be presented
          during procurement, banking risk assessment, insurance eligibility, and
          investment onboarding processes.
        </p>

        {/* Verified external references */}
        <div className="mt-6 text-sm text-gray-600 underline space-y-1">
          <a href="https://eur-lex.europa.eu/eli/reg/2022/2464" target="_blank" rel="noopener noreferrer">
            CSRD – EU Regulation 2022/2464 (EUR-Lex)
          </a><br />
          <a href="https://efrag.org/lab3" target="_blank" rel="noopener noreferrer">
            ESRS E1 – Climate Standard (EFRAG)
          </a><br />
          <a href="https://ghgprotocol.org/standards/scope-3-standard" target="_blank" rel="noopener noreferrer">
            GHG Protocol – Scope 3 / Spend-Based Method
          </a>
        </div>
      </div>

      {/* 3-Column Grid – Unique design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Institution-Ready Formatting
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The attestation follows a structure coherent with ESRS E1 (data categories,
            activity segmentation, results summary, and scope alignment). While Certif-Scope
            is not a CSRD-reporting tool, its structure mirrors institutional expectations
            derived from these frameworks, allowing immediate operational acceptance.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Delivered in Under 30 Seconds
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Calculation relies on the officially recognized spend-based pathway defined by
            the GHG Protocol, suitable for SMEs lacking detailed activity data. This method
            is endorsed in official guidance as a practical, good-faith estimate when more
            granular data is unavailable.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Independent Verification
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The attestation incorporates a cryptographic integrity hash consistent with
            transparency principles described in ISO 14064-1:2018 (quantification and
            reporting) and integrity practices recommended in ISO 14083:2023. This enables
            third-party verification without requiring Certif-Scope servers.
          </p>
        </div>
      </div>

      {/* Explanation Strip */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold relative z-10">Why This Matters</h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Procurement teams, insurers, banks and public agencies increasingly require
          CO₂ indicators in line with EU sustainability principles. Certif-Scope allows
          SMEs to provide fast, structured and verifiable documentation aligned with the
          reference frameworks shaping institutional expectations across the EU.
        </p>
      </div>

      {/* RETURN BUTTON – identical across ALL sections */}
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
