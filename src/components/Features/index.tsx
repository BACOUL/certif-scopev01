export default function Features() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          What You Get with Certif-Scope
        </h2>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
          Everything you need to answer CO₂e requests quickly and professionally —
          without consultants, spreadsheets or technical knowledge. 
          Enter your spending, download your document, send it. Done.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* FEATURE 1 — PDF */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Professional PDF (ready to send)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                A clear and polished CO₂e document your clients, banks or partners understand instantly.
                No need for explanations or extra files — it’s ready to send as is.
              </p>
            </div>
          </div>

          {/* FEATURE 2 — SPEED */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Created in under 60 seconds
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Enter your annual spending (€) → download your CO₂e document. 
                No technical knowledge, no consultants, no delays.
              </p>
            </div>
          </div>

          {/* FEATURE 3 — METHOD */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Simple spending-based method
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                No complex metrics (kWh, km, litres). 
                No Scope 1 or Scope 2. 
                Just a simple spend-based approach you can complete in minutes.
              </p>
            </div>
          </div>

          {/* FEATURE 4 — VERIFICATION */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Unique Verification ID
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Every PDF includes a verification code your clients can check instantly online.
                Adds credibility and prevents document tampering.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
                }
