"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="s1"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s1.title"
        >
          Product Overview
        </h2>

        <p
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
          data-i18n="s1.paragraph1"
        >
          Certif-Scope provides SMEs with a fast, structured and verifiable way to deliver CO₂e
          information when clients, buyers or banks request it. Instead of complex reporting or
          audits, Certif-Scope generates a standardized CO₂e Attestation using only annual
          spending (€). This spend-based approach is a practical alternative for organisations
          that do not track physical activity data and need an immediate, verification-ready
          document.
        </p>

        <p
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
          data-i18n="s1.paragraph2"
        >
          The document is formatted for procurement workflows, supplier portals, onboarding
          documentation and banking assessments. It includes key indicators, a category
          breakdown and a deterministic verification ID based on a cryptographic hash, allowing
          partners to confirm authenticity offline without requiring stored data or database
          lookups.
        </p>
      </div>

      {/* 3-COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="s1.card1.block"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s1.card1.title">
            Clear, Standardized Output
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" data-i18n="s1.card1.text">
            Each Attestation follows a consistent format aligned with institutional expectations:
            CO₂e indicators, spending category segmentation and a summary designed for quick
            evaluation.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
          data-i18n="s1.card2.block"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s1.card2.title">
            Instant Calculation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" data-i18n="s1.card2.text">
            Based on a simplified spend-based approach inspired by GHG Protocol Scope 3 Category 1—
            not a full regulatory inventory. It converts annual expenses into indicative CO₂e values
            in seconds, without operational data or specialist staff.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="s1.card3.block"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s1.card3.title">
            Verifiable Authenticity
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" data-i18n="s1.card3.text">
            Each Attestation embeds a deterministic integrity hash and a verification ID. Partners
            can recompute the hash independently to confirm authenticity offline — no login,
            no backend database and no stored data required.
          </p>
        </div>
      </div>

      {/* LIMITATION BOX */}
      <div
        className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="s1.limitation.block"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3" data-i18n="s1.limitation.title">
          Important Clarification
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s1.limitation.text">
          Certif-Scope does not generate CSRD/ESRS regulatory disclosures, audited greenhouse gas
          inventories or lifecycle assessments. It produces an indicative, spend-based CO₂e document
          suitable for screening, procurement and institutional pre-assessment workflows where a clear,
          standardized indicator is required.
        </p>
      </div>

      {/* HIGHLIGHT BOX */}
      <div
        className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
        data-i18n="s1.highlight.block"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"
          aria-hidden="true"
        />

        <h4 className="text-2xl font-bold relative z-10" data-i18n="s1.highlight.title">
          Why This Matters
        </h4>

        <p
          className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10"
          data-i18n="s1.highlight.text"
        >
          Across Europe, SMEs are increasingly required to provide CO₂e information during
          onboarding, procurement, insurance or financing procedures. Certif-Scope enables them
          to answer these requests immediately with a reliable, standardized and verification-ready
          document.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
          data-i18n="s1.return"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
        }
