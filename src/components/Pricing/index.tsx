export default function Pricing() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
          Pricing
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Fixed, one-time fee. No subscription, no hidden charges.
        </p>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Standard Attestation</h3>

          <p className="text-5xl font-bold text-primary mb-3">49€</p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Instant CO₂ attestation • Unique ID • QR code • Verification link
          </p>
        </div>

      </div>
    </section>
  );
}
