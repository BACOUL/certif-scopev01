export default function Features() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          What You Get with Certif-Scope
        </h2>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
          A simple, fast and professional way to answer CO₂e requests from clients, banks or partners.
          No jargon. No extra work. Just enter your spending — download your document.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* FEATURE 1 */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Professional PDF (ready to send)</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                A clean and clear document your clients understand immediately.
                No need to prepare explanations or additional files.
              </p>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Created in under 60 seconds</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Enter your annual spending (€) → download your CO₂e document instantly.
                No technical skills, no consultants, no waiting.
              </p>
            </div>
          </div>

          {/* FEATURE 3 */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Simple spending-based method</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                No physical activity data (kWh, km, litres). No complex reporting.
                Just your annual expenses, category by category.
              </p>
            </div>
          </div>

          {/* FEATURE 4 */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Unique Verification ID</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Each PDF includes a verification code your clients can check in seconds.
                Helps prove authenticity and avoid document tampering.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
                }
