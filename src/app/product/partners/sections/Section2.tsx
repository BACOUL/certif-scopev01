"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s2"
    >

      {/* HEADER BLOCK — Institutional */}
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">

        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/5 to-[#15B097]/10 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s2.title"
        >
          Value for Large Organisations
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s2.intro"
        >
          Partnering with Certif-Scope provides an automated, scalable and verification-ready method
          to collect CO₂e information from thousands of suppliers. It eliminates manual follow-ups,
          reduces compliance risk, improves procurement workflows and ensures a consistent level of
          documentation across diverse supply chains.
        </p>
      </div>

      {/* VALUE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          data-i18n="partners.s2.card1"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Scalable Supplier Coverage
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Instead of requesting ESG documents individually, organisations distribute prepaid access
            codes globally. Every supplier delivers a compliant Attestation without onboarding or
            training.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s2.card2"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Operational Efficiency
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Procurement, ESG and compliance teams avoid manual data collection, follow-up reminders
            and document validation tasks. A single unified format replaces multiple inconsistent
            files from suppliers.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
          data-i18n="partners.s2.card3"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Instant Verification
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each Attestation includes a deterministic hash that can be recomputed offline. This
            removes the need for databases, portals or authentication systems while ensuring
            document authenticity.
          </p>
        </div>

      </div>

      {/* COMPLIANCE BLOCK — Why partners adopt it */}
      <div
        className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden"
        data-i18n="partners.s2.compliance"
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#15B097]/30 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h4 className="text-2xl font-bold relative z-10">
          Compliance and Procurement Advantages
        </h4>

        <ul
          className="mt-5 space-y-3 text-white/90 text-sm leading-relaxed relative z-10"
        >
          <li>
            Strengthens ESG documentation required by banks, insurers and clients.
          </li>
          <li>
            Supports CSRD / ESRS obligations related to supply-chain environmental assessment.
          </li>
          <li>
            Ensures suppliers of all sizes can provide usable, consistent information.
          </li>
          <li>
            Eliminates GDPR exposure by avoiding storage of financial data.
          </li>
          <li>
            Reduces delays during procurement, onboarding and annual evaluations.
          </li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
          data-i18n="partners.s2.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
