export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITRE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63]">
          How it works
        </h2>

        {/* SOUS-TITRE */}
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A standardized CO₂ attestation generated in three simple steps.
        </p>

        {/* SÉPARATEUR PREMIUM */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12"></div>

        {/* 3 ÉTAPES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Étape 1 */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="text-4xl font-extrabold text-[#1FB6C1]">1</div>
            <h3 className="mt-4 text-lg font-semibold text-[#0B3A63] dark:text-white">
              Provide business data
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Company name, country, sector, and annual spend/turnover.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="text-4xl font-extrabold text-[#1FB6C1]">2</div>
            <h3 className="mt-4 text-lg font-semibold text-[#0B3A63] dark:text-white">
              Automated CO₂ estimation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Engine calculates Scope 1, 2 and 3 indicators aligned with GHG Protocol.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="text-4xl font-extrabold text-[#1FB6C1]">3</div>
            <h3 className="mt-4 text-lg font-semibold text-[#0B3A63] dark:text-white}>
              Instant certified attestation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Download the standardized PDF including indicators and verification ID.
            </p>
          </div>

        </div>

        {/* RÉASSURANCE */}
        <p className="mt-14 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Compatible with procurement, banking, due diligence and compliance processes.
        </p>

      </div>
    </section>
  );
}
