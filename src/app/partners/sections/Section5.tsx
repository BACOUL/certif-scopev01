"use client";

export default function Section5() {
  return (
    <section
      id="key-recovery-and-security"
      data-section="key-recovery-and-security"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 via-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">5.</span>
          Key Recovery & Security
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope partner keys are designed to be simple to use and safe by default.
          In case a key is lost, recovery is handled through a secure email-based process,
          without accounts, dashboards or sensitive identifiers.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PILLAR 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Email-Based Recovery
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Recovery requests are initiated using the email address provided during the
            original purchase. No login or account creation is required.
          </p>
        </div>

        {/* PILLAR 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Dual-Token Validation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            For security reasons, recovery uses a two-step validation:
            a confirmation email followed by a one-time recovery token sent separately.
          </p>
        </div>

        {/* PILLAR 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            No Sensitive Data Exposure
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            No payment identifiers, invoices or personal data are requested during recovery.
            The process relies solely on cryptographic tokens and email verification.
          </p>
        </div>
      </div>

      {/* SECURITY NOTE */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          Security & Institutional Guarantees
        </h4>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
          This recovery mechanism is designed to meet institutional expectations for
          supplier access control: no shared accounts, no long-lived credentials,
          and no dependency on third-party identity systems.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
