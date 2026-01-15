export const metadata = {
  title: "Pricing — Certif-Scope",
  description: "Simple pricing for instant CO₂e attestations. No subscription. Transparent and predictable.",
};

export default function PricingPage() {
  return (
    <div id="pricing-page" className="max-w-7xl mx-auto px-6 pt-8 pb-24">
      
      {/* HEADER */}
      <div className="w-full mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Pricing
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Fixed pricing per attestation. No subscription, no hidden fees, no commitment.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* SOLO OFFER */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-10 text-center">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Single Attestation</h3>

          <div className="mb-6">
            <p className="text-sm line-through text-gray-400">149€</p>
            <p className="text-5xl font-extrabold text-primary">89€</p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            Instant PDF • Verification QR • Permanent access • Cryptographic hash
          </p>

          <ul className="text-left mx-auto max-w-xs space-y-3 text-gray-700 dark:text-gray-300 text-sm mb-8">
            <li>• Instant CO₂ computation</li>
            <li>• Standardized PDF format</li>
            <li>• Unique attestation ID</li>
            <li>• Hash-based integrity check</li>
            <li>• QR verification link</li>
            <li>• Permanent read-only access</li>
          </ul>

          <a
            href="#assessment"
            className="bg-primary hover:bg-[#17a2a8] text-white font-semibold px-10 py-3 rounded-xl shadow-md text-center transition"
          >
            Generate Attestation
          </a>
        </div>

        {/* PACK 5 */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-10 text-center">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Pack of 5</h3>

          <p className="text-4xl font-bold text-primary mb-1">349€</p>
          <p className="text-sm text-gray-500 mb-6">(69€ per attestation)</p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            Ideal for accountants, consultants or small groups managing multiple suppliers.
          </p>

          <a
            href="#assessment"
            className="bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-10 py-3 rounded-xl shadow-md text-center transition"
          >
            Use Credits
          </a>
        </div>

        {/* PACK 10 */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-10 text-center">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Pack of 10</h3>

          <p className="text-4xl font-bold text-primary mb-1">590€</p>
          <p className="text-sm text-gray-500 mb-6">(59€ per attestation)</p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            Best value for recurring compliance demands and multi-client workflows.
          </p>

          <a
            href="#assessment"
            className="bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-10 py-3 rounded-xl shadow-md text-center transition"
          >
            Use Credits
          </a>
        </div>

        {/* PACK 50 */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-10 text-center col-span-full lg:col-span-1 mx-auto">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Pack of 50</h3>

          <p className="text-4xl font-bold text-primary mb-1">2,450€</p>
          <p className="text-sm text-gray-500 mb-6">(49€ per attestation)</p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            Designed for organisations managing a large supplier base or annual compliance cycles.
          </p>

          <a
            href="#assessment"
            className="bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-10 py-3 rounded-xl shadow-md text-center transition"
          >
            Use Credits
          </a>
        </div>

        {/* ENTERPRISE PACK COMING SOON */}
        <div className="bg-gray-100 dark:bg-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 text-center col-span-full">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Enterprise & API</h3>

          <p className="text-4xl font-extrabold text-gray-400 mb-3">Coming Soon</p>

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            High-volume issuance, automated onboarding, service-level guarantees,
            and secure token-based integration for large groups and platforms.
          </p>

          <button
            disabled
            className="px-10 py-3 rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed"
          >
            Available Q2 2026
          </button>
        </div>

      </div>

      {/* FOOTER TEXT */}
      <p className="text-gray-600 dark:text-gray-300 mt-10 text-center text-sm">
        No subscription. Pay only when you generate an attestation.
      </p>

    </div>
  );
}
