"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      data-section="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >

      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          Product Overview
        </h2>

        <p
          data-i18n="s1.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope provides a fast, structured and verifiable way for SMEs to deliver
          CO₂e information when requested by clients, procurement teams, lenders or insurers.
          Instead of complex reporting frameworks or audits, the system generates a standardized
          institutional-grade Attestation using a deterministic spend-based computation.
        </p>

        <p
          data-i18n="s1.context"
          className="text-md text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          The output is formatted specifically for procurement workflows, supplier platforms,
          onboarding documentation and banking assessments. It includes key indicators,
          a category breakdown and a verification ID based on a cryptographic integrity hash.
        </p>
      </div>

      {/* 3 KEY POINTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div
          data-i18n="s1.card1"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Clear and Standardized Output
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            A consistent document format aligned with institutional expectations: CO₂e indicators,
            category segmentation and a procurement-ready summary.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          data-i18n="s1.card2"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Instant Deterministic Calculation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The spend-based model converts annual expenses (€) into indicative CO₂e values in seconds,
            without physical activity data, consultants or ESG expertise.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          data-i18n="s1.card3"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Verifiable Authenticity
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each Attestation embeds a deterministic verification ID and hash. Any partner can validate
            authenticity offline without depending on stored data or an account system.
          </p>
        </div>
      </div>

      {/* LIMITATION BOX */}
      <div
        data-i18n="s1.limitation"
        className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          Important Clarification
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Certif-Scope does not generate CSRD/ESRS disclosures, audited GHG inventories or full
          lifecycle assessments. It provides an indicative spend-based CO₂e value designed for
          procurement screening and institutional onboarding workflows.
        </p>
      </div>

      {/* HIGHLIGHT BOX */}
      <div
        data-i18n="s1.highlight"
        className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"
          aria-hidden="true"
        />

        <h4 className="text-2xl font-bold relative z-10">
          Why This Matters
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Across Europe, SMEs must increasingly supply CO₂e information during procurement,
          onboarding, insurance and financing procedures. Certif-Scope enables them to respond
          instantly with a reliable, standardized and verifiable document.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s1.return"
          aria-label="Back to section summary"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
