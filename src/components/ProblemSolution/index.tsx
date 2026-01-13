export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          Businesses now request CO₂e information — but SMEs lack the data, tools and time.
        </h2>

        {/* Problem statement */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Most SMEs are asked for CO₂e figures without being given a method.  
          Traditional reporting requires physical activity data, consultants, long questionnaires
          and technical expertise that small businesses simply do not have.  
          <br /><br />
          Certif-Scope removes this barrier completely: enter your annual spending (€) and receive
          a clean, structured and verification-ready CO₂e Attestation instantly.  
          A practical, spend-based document for onboarding, procurement and banking workflows —
          without claiming regulatory or audited reporting.
        </p>

        {/* Key numbers */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">Instant</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Document generated immediately</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">No data gaps</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Spending-based only</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">Verification</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Unique integrity ID</p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-16"></div>

        {/* 3 points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* POINT 1 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Instant generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Your CO₂e Attestation is created immediately from your spending — practical,
              consistent and ready to send.
            </p>
          </div>

          {/* POINT 2 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Structured & easy to use</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Standardized layout compatible with procurement systems, onboarding workflows
              and supplier questionnaires.
            </p>
          </div>

          {/* POINT 3 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Verifiable authenticity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Every Attestation includes a unique verification ID and integrity hash that clients
              can validate instantly.
            </p>
          </div>

        </div>

        {/* Link */}
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
