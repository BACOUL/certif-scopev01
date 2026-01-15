export const metadata = {
  title: "Pricing — Certif-Scope",
  description: "Simple one-time pricing for CO₂e attestations. No subscription and no hidden fees.",
};

export default function PricingPage() {
  return (
    <div
      id="pricing-page"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Pricing
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Fixed, transparent, one-time pricing. No subscription. No hidden fees.
        </p>
      </div>

      {/* MAIN INTRO */}
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6">
          CO₂e Attestation Pricing
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Certif-Scope generates standardized, verifiable CO₂e attestations suitable for
          procurement validation, banking checks, insurance risk assessments and compliance workflows.
          Pay only when you generate an attestation.
        </p>

        {/* GRID OF PRICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* SINGLE ATTESTATION */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Single Attestation</h3>

            <p className="text-5xl font-bold text-[#1FB6C1] mb-3">89€</p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              One certified CO₂e attestation • Instant PDF • QR verification • Permanent access
            </p>

            <ul className="text-left mx-auto max-w-md space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Institutional attestation format</li>
              <li>• Unique attestation ID</li>
              <li>• Cryptographic hash integrity</li>
              <li>• QR code verification link</li>
              <li>• Instant generation</li>
            </ul>

            <a
              href="#assessment"
              className="mt-10 inline-block px-8 py-3 bg-[#1FB6C1] text-white rounded-lg hover:opacity-90 transition"
            >
              Generate Attestation
            </a>
          </div>

          {/* PACK 5 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Pack of 5</h3>

            <p className="text-5xl font-bold text-[#1FB6C1] mb-3">395€</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">(79€ per attestation)</p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              For businesses that need multiple attestations over the year.
            </p>

            <ul className="text-left mx-auto max-w-md space-y-3 text-gray-700 dark:text-gray-300">
              <li>• 5 attestations included</li>
              <li>• Instant generation</li>
              <li>• Unique IDs & verification QR</li>
              <li>• Full access for 12 months</li>
            </ul>

            <a
              href="/contact"
              className="mt-10 inline-block px-8 py-3 bg-[#1FB6C1] text-white rounded-lg hover:opacity-90 transition"
            >
              Request Pack Activation
            </a>
          </div>

          {/* PACK 20 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Pack of 20</h3>

            <p className="text-5xl font-bold text-[#1FB6C1] mb-3">1180€</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">(59€ per attestation)</p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ideal for accounting firms, consultants and companies producing multiple attestations.
            </p>

            <ul className="text-left mx-auto max-w-md space-y-3 text-gray-700 dark:text-gray-300">
              <li>• 20 attestations included</li>
              <li>• Priority support</li>
              <li>• Instant generation</li>
              <li>• QR + cryptographic verification</li>
            </ul>

            <a
              href="/contact"
              className="mt-10 inline-block px-8 py-3 bg-[#1FB6C1] text-white rounded-lg hover:opacity-90 transition"
            >
              Request Pack Activation
            </a>
          </div>
        </div>

        {/* FUTURE SECTION */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#0B3A63] mb-4">
            Enterprise & Partner Integration
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            API-based issuance and large-volume partner packs will be available in a future release.
            Banks, insurers, procurement platforms and enterprise buyers can pre-register for
            early access and integration documentation.
          </p>

          <a
            href="/partners"
            className="mt-6 inline-block px-8 py-3 bg-[#0B3A63] text-white rounded-lg hover:opacity-90 transition"
          >
            Partner Early Access
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mt-12 text-sm">
          No subscription. Pay only when you generate an attestation.
        </p>
      </div>
    </div>
  );
}
