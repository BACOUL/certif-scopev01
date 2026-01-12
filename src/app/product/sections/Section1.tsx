"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >

      {/* HEADER — Premium institutional */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">

        {/* Gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          1. Product Overview — Institutional-Grade CO₂ Attestation
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope generates a standardized, verifiable, and compliance-ready CO₂ attestation
          for SMEs across Europe.  
          It aligns with EU procurement frameworks (Directive 2014/24/EU), satisfies climate-related
          disclosure expectations under the CSRD and ESRS E1 thematic requirements, and follows
          internationally recognized calculation guidelines (GHG Protocol – spend-based,
          ISO 14064-1, ISO 14083).  
          The attestation includes a SHA-256 cryptographic integrity seal, an offline-verifiable
          identifier, and a multilingual structure suitable for cross-European submission (EN, FR, DE,
          ES, IT).
        </p>
      </div>

      {/* 3-COLUMN GRID — distinct design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 transition hover:shadow-lg">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Built on Recognized Standards
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Aligned with GHG Protocol (spend-based approach), ISO 14064-1 (organizational
            quantification), ISO 14083 (transport), and draws emission factors from ADEME Base
            Carbone®, DEFRA UK, and IPCC 2021 Guidelines.  
            Ensures international methodological consistency.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30 transition hover:shadow-lg">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Delivered in Under 30 Seconds
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Automated computation pipeline using validated emission factors + deterministic
            calculation rules.  
            Produces an institution-grade PDF instantly, including activity categories, totals,
            methodology summary, and verification metadata.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 transition hover:shadow-lg">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independent Verification Capability
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation embeds a SHA-256 hash and a structured integrity block enabling
            offline validation by procurement teams, banks, insurers or auditors — without
            dependence on Certif-Scope servers.  
            This satisfies non-repudiation and audit-trail expectations.
          </p>
        </div>

      </div>

      {/* COMPLIANCE STRIP — regulatory depth */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold relative z-10">Regulatory Relevance</h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Certif-Scope addresses concrete institutional requirements:
          <br /><br />
          • **CSRD – Corporate Sustainability Reporting Directive**: SMEs interacting with CSRD-regulated
          entities must provide climate indicators to customers and partners.  
          <br />
          • **ESRS E1 Climate Standard**: Requires Scope-related information at supplier and contractor level.  
          <br />
          • **EU Public Procurement (Directive 2014/24/EU)**: Allows environmental criteria and CO₂ scoring
          as part of award decisions.  
          <br />
          • **EBA Guidelines for Banks**: Environmental risk metrics are part of creditworthiness
          assessment processes.  
          <br /><br />
          Certif-Scope gives SMEs a fast, standardized and verifiable way to meet these rapidly expanding
          obligations.
        </p>

      </div>

      {/* RETURN BUTTON — universal identity */}
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
