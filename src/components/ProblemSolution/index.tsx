export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          Clients and banks now ask for CO₂e information — but most SMEs don’t know where to start.
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Collecting CO₂e data is usually slow, expensive and confusing. Consultants can take weeks,
          spreadsheets take hours, and most SMEs don’t have the physical activity data needed for
          complex calculations.  
          <br /><br />
          Certif-Scope solves this instantly: enter your annual spending (€) and download a clear,
          standardized CO₂e document in less than a minute. Fully spend-based, easy to understand,
          and ready to send to clients, banks or suppliers.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">60 sec</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">From spending to document</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">100% Simple</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">No expertise needed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">Verification Code</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Clients can check instantly</p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* POINT 1 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Instant result</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Enter your spending and receive your CO₂e document immediately — no waiting, no
              consultants, no complicated forms.
            </p>
          </div>

          {/* POINT 2 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Clear and standardized</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              A simple PDF your clients understand immediately — spend-based, structured and easy to
              add to onboarding portals or tender submissions.
            </p>
          </div>

          {/* POINT 3 */}
          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Verification code included</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Every document includes a secure verification ID that clients can check in seconds —
              ensuring authenticity and preventing tampering.
            </p>
          </div>

        </div>

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
