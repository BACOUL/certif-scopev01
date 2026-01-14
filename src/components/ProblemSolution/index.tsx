export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="py-24 bg-white dark:bg-gray-900"
      data-section="problem-solution"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE — unique message & SEO-optimised */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug"
          data-i18n="problem.title"
        >
          SMEs are asked for CO₂e figures — but lack a simple, verifiable way to respond.
        </h2>

        {/* PROBLEM — concise, non-repetitive */}
        <p
          className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          data-i18n="problem.description"
        >
          Buyers, banks and insurers increasingly request CO₂e information during onboarding,
          procurement and risk assessments. Traditional reporting requires detailed activity data,
          consultants, audits and specialised expertise — which most SMEs cannot produce instantly.
        </p>

        {/* SOLUTION — clear unique value */}
        <p
          className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          data-i18n="problem.solution"
        >
          Certif-Scope provides a standardized, spend-based CO₂e Attestation generated directly
          from annual expenses. A consistent format that reviewers understand immediately —
          verifiable offline and usable across all institutional workflows.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-16" />

        {/* THREE INSTITUTIONAL BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* POINT 1 */}
          <div className="flex flex-col items-center gap-4" data-i18n="problem.point1.block">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white" data-i18n="problem.point1.title">
              Aligned with institutional workflows
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs" data-i18n="problem.point1.text">
              Matches procurement, banking and insurance screening expectations for quick,
              indicative CO₂e values — without supplying technical reports.
            </p>
          </div>

          {/* POINT 2 */}
          <div className="flex flex-col items-center gap-4" data-i18n="problem.point2.block">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white" data-i18n="problem.point2.title">
              Transparent spend-based method
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs" data-i18n="problem.point2.text">
              Uses predefined annual spending (€) and stable emission factor sources. No modelling,
              no surveys and no operational data required.
            </p>
          </div>

          {/* POINT 3 */}
          <div className="flex flex-col items-center gap-4" data-i18n="problem.point3.block">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white" data-i18n="problem.point3.title">
              Consistent across suppliers
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs" data-i18n="problem.point3.text">
              Identical structure and indicators enable fast comparison across multiple vendors —
              eliminating ambiguity and reducing review time.
            </p>
          </div>

        </div>

        {/* LINKS — must link correctly for IA navigation */}
        <a
          href="/sample-pdf"
          className="mt-14 inline-block text-sm font-medium text-[#1FB6C1] hover:underline"
          data-i18n="problem.link.sample"
        >
          View sample document →
        </a>

        <a
          href="#how-it-works"
          className="block mt-4 text-xs text-[#0B3A63] hover:text-[#1FB6C1] underline"
          data-i18n="problem.link.how"
        >
          How the Attestation is generated →
        </a>

      </div>
    </section>
  );
      }
