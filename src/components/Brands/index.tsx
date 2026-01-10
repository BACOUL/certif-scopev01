export default function Brands() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* SURTITRE PREMIUM */}
        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Used by teams across Europe
        </p>

        {/* TRAIT FIN PREMIUM */}
        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-10"></div>

        {/* TITRE PRINCIPAL */}
        <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 tracking-wide mb-12">
          Trusted across procurement, banking and compliance workflows
        </p>

        {/* ICONES */}
        <div className="flex flex-wrap justify-center items-center gap-12">

          {/* Compliance */}
          <div className="flex flex-col items-center gap-3 w-24">
            <svg
              className="h-10 w-10 min-w-10 flex-shrink-0 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              Compliance
            </span>
          </div>

          {/* Banking */}
          <div className="flex flex-col items-center gap-3 w-24">
            <svg
              className="h-10 w-10 min-w-10 flex-shrink-0 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 4H3l9-4zm0 4v12M5 7v12m14-12v12M3 19h18" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              Banking
            </span>
          </div>

          {/* Audit */}
          <div className="flex flex-col items-center gap-3 w-24">
            <svg
              className="h-10 w-10 min-w-10 flex-shrink-0 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 11V3m4 10v-6m4 10V9m-12 6v-2m-4 4h18" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              Audit
            </span>
          </div>

          {/* Logistics */}
          <div className="flex flex-col items-center gap-3 w-24">
            <svg
              className="h-10 w-10 min-w-10 flex-shrink-0 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h12v8H3V7zm12 0h4l2 3v5h-6V7zm-9 11a2 2 0 11-.001-3.999A2 2 0 016 18zm10 0a2 2 0 11-.001-3.999A2 2 0 0116 18z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              Logistics
            </span>
          </div>

        </div>

        {/* SOUS-TEXTE */}
        <p className="mt-12 text-xs md:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Standardized CO₂ attestation format aligned with GHG Protocol.
        </p>

      </div>
    </section>
  );
}
