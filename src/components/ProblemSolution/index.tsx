export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      data-section="problem-solution"
      className="pt-24 pb-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER — CANONICAL HOME */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <p
            className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
            data-i18n="problem.label"
          >
            CO₂e Disclosure Challenge
          </p>

          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-4"
            data-i18n="problem.title"
          >
            SMEs are increasingly asked to provide CO₂e information — without having the means to respond.
          </h2>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            data-i18n="problem.description"
          >
            Buyers, banks and insurers routinely request CO₂e figures during onboarding,
            procurement and risk screening processes. Producing a full carbon inventory
            requires detailed activity data, consultants and audits — resources most SMEs
            cannot mobilize on demand.
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* SOLUTION */}
        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-20"
          data-i18n="problem.solution"
        >
          Certif-Scope provides an instant, indicative spend-based CO₂e attestation generated
          directly from annual expenses. A standardized format reviewers can interpret immediately —
          verifiable independently and usable across institutional workflows.
        </p>

        {/* 3 BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

          {/* BENEFIT 1 */}
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
            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point1.title"
            >
              Aligned with institutional workflows
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point1.text"
            >
              Designed for procurement, banking and insurance screening processes
              that require fast, indicative CO₂e values.
            </p>
          </div>

          {/* BENEFIT 2 */}
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
            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point2.title"
            >
              Transparent spend-based method
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point2.text"
            >
              Uses annual spending (€) and stable emission factor sources.
              No audits, surveys or operational data required.
            </p>
          </div>

          {/* BENEFIT 3 */}
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
            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point3.title"
            >
              Consistent across suppliers
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point3.text"
            >
              Identical structure enables fast comparison between vendors,
              reducing ambiguity and review time.
            </p>
          </div>

        </div>

        {/* LINK */}
        <a
          href="#how-it-works"
          className="block mt-20 text-xs text-center text-[#0B3A63] hover:text-[#1FB6C1] underline"
          data-i18n="problem.link.how"
        >
          How the attestation is generated →
        </a>

      </div>
    </section>
  );
              }
