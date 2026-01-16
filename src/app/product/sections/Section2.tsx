"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      data-section="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — même style que Section 1 */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s2.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          Key Benefits Summary
        </h2>

        <p
          data-i18n="s2.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope provides a standardized, deterministic and multilingual CO₂e Attestation
          ready for procurement, banking and insurance workflows across the EU.
        </p>
      </div>

      {/* BENEFITS GRID — sobre et régulier, comme Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* BENEFIT 1 */}
        <div
          data-i18n="s2.benefit1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="s2.benefit1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Instant Generation
          </h3>
          <p
            data-i18n="s2.benefit1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Fully deterministic output based only on annual spending (€). No operational data required.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div
          data-i18n="s2.benefit2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="s2.benefit2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Procurement-Ready Format
          </h3>
          <p
            data-i18n="s2.benefit2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Structured and compliant with supplier onboarding, ESG questionnaires and RFP workflows.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div
          data-i18n="s2.benefit3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="s2.benefit3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Verifiable Integrity
          </h3>
          <p
            data-i18n="s2.benefit3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Cryptographic hash + verification ID allow offline validation without relying on a database.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div
          data-i18n="s2.benefit4.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">04</div>
          <h3
            data-i18n="s2.benefit4.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Deterministic Calculation
          </h3>
          <p
            data-i18n="s2.benefit4.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Version-controlled emission factors ensure transparent and reproducible results.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div
          data-i18n="s2.benefit5.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">05</div>
          <h3
            data-i18n="s2.benefit5.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            No ESG Expertise Required
          </h3>
          <p
            data-i18n="s2.benefit5.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Designed specifically for SMEs without sustainability teams or complex tools.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div
          data-i18n="s2.benefit6.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">06</div>
          <h3
            data-i18n="s2.benefit6.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Multilingual & EU Ready
          </h3>
          <p
            data-i18n="s2.benefit6.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Supports EN, FR, DE, ES, IT for cross-border procurement and institutional workflows.
          </p>
        </div>

      </div>

      {/* CLARIFICATION BOX — sobre, comme Section 1 */}
      <div
        data-i18n="s2.clarification.block"
        className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="s2.clarification.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Important Clarification
        </h3>

        <p
          data-i18n="s2.clarification.text"
          className="text-gray-700 max-w-4xl leading-relaxed"
        >
          Certif-Scope is not a CSRD/ESRS report or an audited GHG inventory. It provides a
          consistent and verifiable spend-based CO₂e indicator for screening and documentation.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s2.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
            }
