import Breadcrumb from "@/components/Common/Breadcrumb";

export default function PricingPage() {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Simple and transparent fixed pricing. No subscription, no hidden fees."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            One-time attestation pricing
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Certif-Scope provides instant, verifiable CO₂ attestations suitable for
            procurement, banking and compliance workflows. Pricing is fixed per document.
          </p>

          {/* Pricing card */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Standard Attestation</h3>

            <p className="text-5xl font-bold text-primary mb-3">49€</p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              One certified CO₂ attestation • Instant PDF generation • Verification URL + QR code • Hash-secured integrity
            </p>

            <ul className="text-left mx-auto max-w-md space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Instant CO₂ estimation</li>
              <li>• Institutional PDF format</li>
              <li>• Unique attestation ID</li>
              <li>• Cryptographic hash for authenticity</li>
              <li>• QR code verification link</li>
              <li>• Permanent read-only access</li>
            </ul>

            <button className="mt-10 px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition">
              Generate Attestation
            </button>
          </div>

          {/* Additional info */}
          <p className="text-gray-600 dark:text-gray-300 mt-10 text-sm">
            No subscription. Pay only when you generate an attestation.
          </p>
        </div>
      </section>
    </>
  );
}
