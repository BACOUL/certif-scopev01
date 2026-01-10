export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* TITRE PROBLÈME */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] leading-snug">
          SMEs are asked for CO₂ indicators — but assessments are slow, expensive and inconsistent.
        </h2>

        {/* SOUS-TITRE SOLUTION */}
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope delivers a standardized, instantly verifiable CO₂ attestation aligned with GHG Protocol.
        </p>

        {/* TRAIT INSTITUTIONNEL */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12"></div>

        {/* 3 PILIERS INSTITUTIONNELS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Pillier 1 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-12 w-12 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-white">Instant output</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Attestation generated in seconds. No consultant required.
            </p>
          </div>

          {/* Pillier 2 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-12 w-12 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-white">Standardized format</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Fully aligned with GHG Protocol. Consistent, comparable, audit-ready.
            </p>
          </div>

          {/* Pillier 3 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-12 w-12 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-white">Verifiable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              PDF + verification code accepted by procurement and financial teams.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
