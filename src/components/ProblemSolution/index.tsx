export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          SMEs are asked for CO₂e figures — but lack a simple, verifiable way to deliver them.
        </h2>

        {/* PROBLEM */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Buyers, banks and insurers increasingly request CO₂e information during onboarding and 
          risk assessments. Traditional reporting requires detailed activity data, audits and 
          specialist expertise. Most SMEs cannot provide this on demand, causing delays, friction 
          and repetitive back-and-forth with reviewers. Not a regulatory report and not audited.
        </p>

        {/* SOLUTION */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope provides a clear alternative: a standardized, spend-based CO₂e Attestation 
          generated directly from annual expenses. Fully structured, comparable across suppliers, 
          and verifiable instantly — without consultants, surveys or technical reporting workflows.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-16"></div>

        {/* THREE INSTITUTIONAL POINTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* POINT 1 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Aligned with real workflows</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Designed around procurement, credit risk and insurance screening processes that 
              routinely request quick, indicative CO₂e values from SMEs.
            </p>
          </div>

          {/* POINT 2 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Transparent spend-based method</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Uses only annual spending (€) with stable emission factor sources. No operational 
              data, no modelling and no complexity — easy for SMEs to complete.
            </p>
          </div>

          {/* POINT 3 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Consistent across suppliers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Same structure, same layout, same calculation basis. Enables fast comparison across 
              multiple vendors — reducing review time and eliminating ambiguity.
            </p>
          </div>

        </div>

        {/* LINK */}
        <a
          href="/sample-pdf"
          className="mt-14 inline-block text-sm font-medium text-[#1FB6C1] hover:underline"
        >
          View sample document →
        </a>

        <a
          href="#how-it-works"
          className="block mt-4 text-xs text-[#0B3A63] hover:text-[#1FB6C1] underline"
        >
          See how it’s generated →
        </a>

      </div>
    </section>
  );
        }
