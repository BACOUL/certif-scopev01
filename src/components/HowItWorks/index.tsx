export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
          How Certif-Scope Works
        </h2>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A simple, auditable and compliant process designed for instant carbon attestation.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-16">

          {/* STEP 1 */}
          <div className="text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-bold">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Input your data
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Provide spend-based or activity-based information required for emissions estimation.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-bold">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Automated calculation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Certif-Scope generates a standardized carbon estimation aligned with GHG Protocol.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-bold">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Instant certified attestation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Download the standardized PDF including indicators and verification ID.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
