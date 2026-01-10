export default function Trust() {
  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Surtitre */}
        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Used in regulated workflows
        </p>

        {/* Trait */}
        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-10"></div>

        {/* Titre principal */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
          Trusted for compliance, reporting and procurement
        </h2>

        {/* Sous-texte */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Certif-Scope provides independently verifiable CO₂ attestations, accepted
          across enterprise, procurement, banking, audit and compliance processes.
        </p>

        {/* 3 Piliers institutionnels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Bloc 1 */}
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-gray-700 dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Independent Verification</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Attestations include a tamper-proof verification ID allowing offline validation without relying on Certif-Scope.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-gray-700 dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Enterprise Acceptance</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Standardized CO₂ indicators designed to match procurement, vendor onboarding and ESG reporting requirements.
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-gray-700 dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Audit-Ready Structure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Consistent, repeatable calculation and documentation format aligned with verification and due-diligence workflows.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
