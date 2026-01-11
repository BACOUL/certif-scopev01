export default function Section13() {
  return (
    <section
      id="s13"
      className="scroll-mt-24 py-32 bg-[#F8FAFC] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Integrations & Compatibility
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope has been designed for seamless integration into procurement pipelines,
          risk evaluation workflows, accounting tools, and enterprise dashboards. The generated
          attestation is universally compatible with systems used across banks, insurers, and
          corporate compliance departments, ensuring immediate adoption without technical friction.
        </p>
      </div>

      {/* GRID ROW */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BOX 1 */}
        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Direct File Compatibility
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            The attestation PDF can be uploaded to any procurement platform, banking portal,
            insurance onboarding system, or ESG evaluation interface without requiring a specific
            plugin or account.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Standard PDF/A-1b format</li>
            <li>• Machine-readable metadata</li>
            <li>• Embedded verification QR code</li>
          </ul>
        </div>

        {/* BOX 2 */}
        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Compatible with Major Platforms
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Accepted by systems used in finance, compliance, procurement and marketplace validation.
            Designed to remove friction and accelerate onboarding decisions.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• SAP Ariba</li>
            <li>• Oracle Procurement Cloud</li>
            <li>• Coupa Supplier Portal</li>
            <li>• Banking review channels</li>
            <li>• ESG & compliance scoring tools</li>
          </ul>
        </div>

        {/* BOX 3 */}
        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            API Export & Automation
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Certif-Scope can be integrated into automated workflows using simple file-output logic.
            Export the PDF directly into internal systems or attach it automatically during supplier
            onboarding.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Automated generation</li>
            <li>• Automated upload to portals</li>
            <li>• Integration with ERP & dashboards</li>
          </ul>
        </div>
      </div>

      {/* SECOND ROW — HIGHLIGHTS */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT BLOCK */}
        <div className="bg-[#0B3A63] text-white rounded-2xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">
            File-Level Verification Integration
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            Verification does not depend on server availability. The cryptographic hash embedded
            inside the PDF allows auditors, banks, and partners to confirm document integrity offline.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Standalone verification workflow
            </li>

            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              No API key or account required
            </li>

            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              QR code points to verification endpoint
            </li>
          </ul>
        </div>

        {/* RIGHT BLOCK */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Technical Integration Options
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
            Certif-Scope supports flexible integration models depending on system requirements
            and internal IT constraints.
          </p>

          <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• Direct PDF export automation</li>
            <li>• SCIM / SSO optional compatibility for enterprise</li>
            <li>• Automated emailing of attestations</li>
            <li>• ERP dashboard embedding (iframe / pdf viewer)</li>
            <li>• Local verification using downloadable public keys</li>
          </ul>
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
