export default function Section12() {
  return (
    <section
      id="s12"
      className="scroll-mt-24 py-32 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Data Privacy & GDPR Compliance
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope implements a strict privacy-by-design approach: minimal data collection,
          no storage of sensitive information, encrypted processing, and full compliance with the
          General Data Protection Regulation (GDPR). The system ensures that companies retain full
          control over their financial data while still being able to generate verifiable carbon
          indicators instantly.
        </p>
      </div>

      {/* LAYOUT: 3 COLUMNS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
            1. Minimal Data Processing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Certif-Scope does not collect more information than necessary. Only high-level
            financial inputs are processed for emission estimation. No transactional, personal
            or document-level data is captured or retained.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
            2. No Long-Term Storage
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Input data is processed temporarily and discarded after generating the attestation.
            Certif-Scope does not store, synchronize, or reuse user-submitted information.
            The user retains full control of the output file.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
            3. Encrypted Transmission
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            All communications between the client and the platform are encrypted using TLS 1.3.
            No unencrypted data is transmitted at any time, ensuring compliance with GDPR
            Article 32 on secure processing.
          </p>
        </div>

      </div>

      {/* 2ND ROW */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* LEFT BLOCK */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Data Ownership & User Rights
          </h3>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              Users retain full ownership of all submitted and generated data.
            </li>

            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              No profile creation or account storage is required.
            </li>

            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              No data is used for analytics, tracking, or behavioral profiling.
            </li>

            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              Users may request deletion of any residual logs under GDPR Art. 17.
            </li>
          </ul>
        </div>

        {/* RIGHT BLOCK */}
        <div className="bg-[#0B3A63] text-white rounded-2xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">GDPR Compliance Framework</h3>

          <p className="text-sm leading-relaxed text-white/90 mb-6">
            Certif-Scope aligns its processes with key GDPR requirements, including data minimization,
            purpose limitation, user consent, and transparency obligations.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              GDPR Art. 5 — Data minimization & purpose limitation.
            </li>
            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              GDPR Art. 6 — Lawful basis for processing (consent).
            </li>
            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              GDPR Art. 12 — Transparency of processing.
            </li>
            <li className="flex gap-3">
              <span className="w-3 h-3 bg-[#47B39C] rounded-full mt-1"></span>
              GDPR Art. 32 — Secure processing & encryption.
            </li>
          </ul>

          <p className="text-xs text-white/80 mt-6">
            Certif-Scope does not sell, share, or exchange any user information for commercial purposes.
          </p>
        </div>

      </div>

      {/* FOOTER — BACK TO SUMMARY */}
      <div className="text-center mt-24">
        <a
          href="#top"
          className="inline-block text-sm text-gray-500 hover:text-[#0B3A63] border border-gray-300 px-4 py-2 rounded-lg transition"
        >
          Back to summary ↑
        </a>
      </div>
    </section>
  );
                }
