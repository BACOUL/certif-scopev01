export default function Differentiation() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          Why SMEs choose Certif-Scope
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A fast and easy way to provide CO₂e information when clients, banks or partners request it. 
          No complex data. No consultants. Just enter your spending, download the document, and send it.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Bloc 1 */}
          <div className="max-w-xs mx-auto flex flex-col items-center">
            <svg className="h-12 w-12 text-[#1FB6C1] mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Clear and ready to send
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              You get a clean PDF your clients and partners understand immediately.
              <span className="block mt-2 text-xs text-gray-500">
                Saves time and avoids back-and-forth questions.
              </span>
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="max-w-xs mx-auto flex flex-col items-center">
            <svg className="h-12 w-12 text-[#1FB6C1] mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Made in 60 seconds
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Enter your annual spending (€) → download your CO₂e document instantly.
              <span className="block mt-2 text-xs text-gray-500">
                No technical skills required.
              </span>
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="max-w-xs mx-auto flex flex-col items-center">
            <svg className="h-12 w-12 text-[#1FB6C1] mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Trusted by clients and banks
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Each document has a unique verification ID for authenticity checks.
              <span className="block mt-2 text-xs text-gray-500">
                Easy to share in supplier portals or RFPs.
              </span>
            </p>
          </div>

        </div>

        <p className="mt-16 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Certif-Scope helps SMEs respond quickly and professionally to CO₂e information requests.
        </p>

      </div>
    </section>
  );
}
