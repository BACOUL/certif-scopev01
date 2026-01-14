export default function Features() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          What You Get with Certif-Scope
        </h2>

        {/* INTRO */}
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
          Everything required to respond to CO₂e information requests professionally and consistently —
          with no consultants, no reporting complexity and no physical activity data.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* GRID */}
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
                A polished and standardized CO₂e Attestation formatted for procurement portals,
                onboarding workflows and banking requests.  
                Clear structure. Immediate readability.
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
                Instant generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Enter annual spending (€) and receive your CO₂e Attestation immediately.
                No manual calculations. No waiting times. No expert intervention.
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
                Simple spend-based methodology
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                No kWh, no km, no litres. No Scope 1 or Scope 2.  
                A clear spend-based calculation suitable for screening — not a regulatory emission report.
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
                Verification ID + integrity hash
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Each PDF includes a unique verification ID and a deterministic hash of the input data.
                Partners can confirm authenticity in seconds without accounts or logins.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
