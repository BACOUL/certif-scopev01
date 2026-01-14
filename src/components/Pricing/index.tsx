export default function Pricing() {
  return (
    <section
      id="pricing"
      data-section="pricing"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE — Single H2 */}
        <h2
          data-i18n="pricing.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]"
        >
          Simple Pricing — One Document, One Fixed Cost
        </h2>

        {/* INTRO — Non repetitive */}
        <p
          data-i18n="pricing.intro"
          className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          A single payment for a standardized, spend-based CO₂e Attestation used in procurement,
          banking and ESG screening. No subscription, no renewal fees and no additional services
          required. Instant generation from annual expenses (€).
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        {/* PRICING CARD */}
        <div className="max-w-md mx-auto bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-10">

          <h3
            data-i18n="pricing.card_title"
            className="text-xl font-semibold text-[#0B3A63] mb-4"
          >
            CO₂e Attestation — Instant Generation
          </h3>

          <p
            data-i18n="pricing.price"
            className="text-5xl font-extrabold text-[#1FB6C1] mb-2"
          >
            49€
          </p>

          {/* SUBTEXT */}
          <p
            data-i18n="pricing.subtext"
            className="text-sm text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
          >
            One-time purchase. Immediate download. Spend-based indicative CO₂e estimation — not a CSRD/ESRS emissions report and not audited.
          </p>

          {/* CTA — Correct hierarchy */}
          <a
            href="/assessment"
            data-i18n="pricing.cta_generate"
            className="w-full block bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold py-4 rounded-xl transition shadow-md"
          >
            Generate CO₂e Attestation
          </a>

          {/* FEATURES LIST */}
          <ul className="mt-10 space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">
            <li data-i18n="pricing.f1">• Standardized professional PDF</li>
            <li data-i18n="pricing.f2">• CO₂e indicators + category breakdown</li>
            <li data-i18n="pricing.f3">• Transparent spend-based calculation</li>
            <li data-i18n="pricing.f4">• Version-controlled emission factors</li>
            <li data-i18n="pricing.f5">• Timestamp + unique verification ID</li>
            <li data-i18n="pricing.f6">• Deterministic integrity hash for offline validation</li>
            <li data-i18n="pricing.f7">• No data storage — privacy by design</li>
          </ul>
        </div>

        {/* LINK TO SAMPLE */}
        <a
          href="/sample-pdf"
          data-i18n="pricing.link_sample"
          className="text-sm text-[#0B3A63] hover:text-[#1FB6C1] underline mt-8 inline-block"
        >
          View sample document →
        </a>

        {/* DISCLAIMER — regulatory clarity */}
        <p
          data-i18n="pricing.disclaimer"
          className="mt-10 text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Spend-based CO₂e estimation based solely on annual expenses. Not a CSRD/ESRS report, not an audited inventory and not suitable for regulatory disclosure.
        </p>

      </div>
    </section>
  );
              }
