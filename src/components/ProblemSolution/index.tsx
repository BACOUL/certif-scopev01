export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          SMEs are asked for CO₂e data — but traditional reporting is unrealistic for them.
        </h2>

        {/* Problem statement */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Most SMEs receive CO₂e requests without guidance or a defined method.  
          Conventional reporting requires physical activity data, specialist consultants, long questionnaires 
          and technical analysis — resources small businesses do not have.  
        </p>

        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope solves this with a practical and compliant alternative:  
          enter annual spending (€) and instantly receive a standardized, spend-based and verification-ready 
          CO₂e Attestation.  
          Not a CSRD/ESRS report. Not an audited inventory. A fast and consistent document fit for procurement, 
          onboarding and banking workflows.
        </p>

        {/* Key numbers */}
        <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">Instant</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Generated immediately</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">No activity data</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Spending-only method</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">Verification ID</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Integrity check included</p>
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
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Immediate generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              A complete CO₂e Attestation produced instantly from your spending.  
              No consultants, no forms, no delays.
            </p>
          </div>

          {/* POINT 2 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Standardized & usable immediately</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              A clean, structured format accepted in procurement, onboarding and ESG screening workflows.
            </p>
          </div>

          {/* POINT 3 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Verifiable authenticity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Each Attestation includes a verification ID and integrity hash that clients can validate instantly.
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
