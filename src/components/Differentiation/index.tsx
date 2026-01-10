export default function Differentiation() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* TITRE PRINCIPAL */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] leading-snug">
          What makes Certif-Scope different
        </h2>

        {/* INTRODUCTION (UNE LIGNE) */}
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A standardized, instantly verifiable CO₂ attestation designed for procurement, banking and compliance workflows.
        </p>

        {/* SÉPARATEUR PREMIUM */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12"></div>

        {/* 3 BLOCS DIFFÉRENCIATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Bloc 1 */}
          <div className="max-w-xs mx-auto">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-white">
              Standardized by design
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Attestation structure aligned with GHG Protocol, ensuring consistent format across all SMEs.
              <span className="block mt-2 text-xs text-gray-500 dark:text-gray-500">
                Enables comparison and audit readiness.
              </span>
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="max-w-xs mx-auto">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-white">
              Instant & automated
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Output generated in seconds. No consultant involvement required.
              <span className="block mt-2 text-xs text-gray-500 dark:text-gray-500">
                Adapted to high-volume due diligence workflows.
              </span>
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="max-w-xs mx-auto">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-white">
              Verifiable & accepted
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              PDF + verification ID accepted by procurement and financial teams.
              <span className="block mt-2 text-xs text-gray-500 dark:text-gray-500">
                Supports third-party verification and audit trails.
              </span>
            </p>
          </div>

        </div>

        {/* LIGNE DE RÉASSURANCE */}
        <p className="mt-14 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
          Trusted across Europe for banking, insurance, procurement and compliance processes.
        </p>

      </div>
    </section>
  );
}
