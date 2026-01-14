export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          SMEs are increasingly asked for CO₂e evidence — without a simple or consistent way to provide it.
        </h2>

        {/* PROBLEM */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Traditional CO₂e reporting requires physical activity data, technical modelling, 
          consultants and long questionnaires. Small businesses rarely have the time, tools or 
          expertise to produce these documents when banks, insurers or buyers request them.
        </p>

        {/* SOLUTION */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope provides a practical alternative: a single, structured CO₂e Attestation 
          generated from annual spending (€). A consistent document that fits procurement checks, 
          risk assessments and onboarding workflows — without engaging auditors or consultants.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-16"></div>

        {/* THREE INSTITUTIONAL POINTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Designed for real workflows</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              The document format matches what procurement teams, banks and insurers request during 
              supplier onboarding and ESG screening.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Clear methodology</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Based on a spend-based model aligned with widely-used estimation practices and 
              transparent emission factor sources.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Consistent & comparable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Every Attestation follows the same structure, ensuring comparability across suppliers 
              and easier evaluation for institutional reviewers.
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

      </div>
    </section>
  );
}
