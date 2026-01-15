"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s5"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s5.title"
        >
          Partner Pricing Models
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s5.intro"
        >
          Partners purchase prepaid attestation units in bulk. Volume pricing reduces the cost per
          attestation, enabling large organisations to equip thousands of suppliers at minimal cost.
          Units never expire and remain valid across methodology updates.
        </p>
      </div>

      {/* PRICING GRID */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* PACK 1 */}
        <div
          className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="partners.s5.pack1"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            500-Unit Pack
          </h3>
          <div className="text-4xl font-extrabold text-[#15B097] mb-4">1.50 €</div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Suitable for regional entities or small procurement networks. One unit = one attestation.
          </p>
        </div>

        {/* PACK 2 */}
        <div
          className="p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition"
          data-i18n="partners.s5.pack2"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            2,000-Unit Pack
          </h3>
          <div className="text-4xl font-extrabold text-[#15B097] mb-4">1.20 €</div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Optimised for nationwide procurement operations and multi-site supply chains.
          </p>
        </div>

        {/* PACK 3 */}
        <div
          className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="partners.s5.pack3"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            10,000-Unit Pack
          </h3>
          <div className="text-4xl font-extrabold text-[#15B097] mb-4">0.90 €</div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Designed for large industrial groups and organisations managing multinational suppliers.
          </p>
        </div>
      </div>

      {/* ROI BLOCK */}
      <div
        className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden"
        data-i18n="partners.s5.roi"
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#15B097]/40 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h3 className="text-2xl font-bold relative z-10">Return on Investment (ROI)</h3>

        <ul className="mt-6 space-y-3 text-white/90 text-sm leading-relaxed relative z-10">
          <li>Reduced administrative load: suppliers self-generate documents.</li>
          <li>No need for consultants, onboarding portals or training.</li>
          <li>Instant compliance for thousands of suppliers with minimum cost.</li>
          <li>Predictable budgeting through prepaid units with no expiration.</li>
          <li>Standardised documents improve comparison across supplier base.</li>
          <li>Strong ESG compliance signal with minimal operational burden.</li>
        </ul>
      </div>

      {/* COMPARISON BLOCK */}
      <div
        className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s5.comparison"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          Comparison with Traditional Supplier Assessment Costs
        </h4>

        <table className="w-full text-sm border-collapse mt-4">
          <thead>
            <tr className="bg-[#F8FAFC] border border-gray-200">
              <th className="p-3 text-left border border-gray-300">Method</th>
              <th className="p-3 text-left border border-gray-300">Avg. Cost / Supplier</th>
              <th className="p-3 text-left border border-gray-300">Time Required</th>
              <th className="p-3 text-left border border-gray-300">Scalability</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-200">
              <td className="p-3 border border-gray-300">Consultant / Manual Audit</td>
              <td className="p-3 border border-gray-300">800–4,000 €</td>
              <td className="p-3 border border-gray-300">2–8 weeks</td>
              <td className="p-3 border border-gray-300">Very low</td>
            </tr>
            <tr className="border border-gray-200">
              <td className="p-3 border border-gray-300">Online Carbon Tools</td>
              <td className="p-3 border border-gray-300">100–300 €</td>
              <td className="p-3 border border-gray-300">1–3 days</td>
              <td className="p-3 border border-gray-300">Medium</td>
            </tr>
            <tr className="border border-gray-200 bg-[#F8FAFC] font-semibold">
              <td className="p-3 border border-gray-300">Certif-Scope Partner Units</td>
              <td className="p-3 border border-gray-300">0.90–1.50 €</td>
              <td className="p-3 border border-gray-300">Instant</td>
              <td className="p-3 border border-gray-300">High (10k+)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
          data-i18n="partners.s5.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
