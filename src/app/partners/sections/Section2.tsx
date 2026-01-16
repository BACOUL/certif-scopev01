"use client";

export default function Section2() {
  return (
    <section
      id="packs-and-credits"
      data-section="packs-and-credits"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F0FDFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 via-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s2.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">2.</span>
          Packs & Credits
        </h2>

        <p
          data-i18n="s2.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Partner access to Certif-Scope is based on a prepaid credit model.
          Partners purchase attestation packs in advance and consume credits
          only when an attestation is generated.
        </p>

        <p
          data-i18n="s2.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          This approach provides predictable costs, full usage control and
          compatibility with procurement, finance and compliance processes.
          There are no subscriptions, no recurring fees and no automatic billing.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PILLAR 1 */}
        <div
          data-i18n="s2.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="s2.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Prepaid Credit Packs
          </h3>
          <p
            data-i18n="s2.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Partners purchase packs of credits in advance. One credit corresponds
            to one generated CO₂e Attestation, with no hidden fees or variable pricing.
          </p>
        </div>

        {/* PILLAR 2 */}
        <div
          data-i18n="s2.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg hover:border-[#15B097]/50 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="s2.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Controlled Consumption
          </h3>
          <p
            data-i18n="s2.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Credits are consumed only at the moment of attestation generation.
            Verification, consultation and document sharing never consume credits.
          </p>
        </div>

        {/* PILLAR 3 */}
        <div
          data-i18n="s2.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="s2.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Procurement-Friendly Model
          </h3>
          <p
            data-i18n="s2.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            The prepaid credit model aligns with enterprise purchasing processes,
            budget validation and internal approval workflows, without long-term
            contractual commitments.
          </p>
        </div>

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
