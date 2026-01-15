"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s6"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s6.title"
        >
          Integration Options
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s6.intro"
        >
          Certif-Scope provides several integration models depending on the partner’s internal
          workflows and supplier onboarding structure. Each option maintains the same integrity
          model: no stored input data, deterministic verification ID, and offline authentication.
        </p>
      </div>


      {/* 3 INTEGRATION BLOCKS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* API MODE */}
        <div
          className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="partners.s6.api"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">1. API Integration</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Designed for large organisations with automated supplier onboarding. Partners embed the
            Certif-Scope generation endpoint inside their procurement or compliance tools. The API
            requires a prepaid code. No personal or financial data is transmitted.
          </p>
          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li>• Programmatic generation</li>
            <li>• Bulk automation possible</li>
            <li>• Deterministic output</li>
            <li>• Zero data retention</li>
          </ul>
        </div>

        {/* PORTAL MODE */}
        <div
          className="p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition"
          data-i18n="partners.s6.portal"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">2. Hosted Partner Portal</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Partners receive a secure URL where suppliers generate their own attestation by entering
            annual spending only. Each submission consumes one prepaid unit. No login or account is
            required, ensuring frictionless access for thousands of suppliers.
          </p>
          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li>• Zero maintenance for the partner</li>
            <li>• Supplier autonomy</li>
            <li>• Secure token validation</li>
            <li>• No credentials required</li>
          </ul>
        </div>

        {/* WHITE LABEL */}
        <div
          className="p-10 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
          data-i18n="partners.s6.whitelabel"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">3. White-Label Version</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Large groups can deploy Certif-Scope under their own corporate branding. Only the
            deterministic verification signature identifies Certif-Scope as the underlying engine.
            All security, hashing and verification processes remain unchanged.
          </p>
          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li>• Custom logo and theme</li>
            <li>• Unified supplier experience</li>
            <li>• Offline verification still possible</li>
            <li>• Fully client-side model preserved</li>
          </ul>
        </div>
      </div>


      {/* COMPARISON TABLE */}
      <div
        className="mt-20 p-10 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s6.table"
      >
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">Comparison</h3>

        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border border-gray-200">
              <th className="p-3 border border-gray-300">Integration Type</th>
              <th className="p-3 border border-gray-300">Effort</th>
              <th className="p-3 border border-gray-300">Supplier Experience</th>
              <th className="p-3 border border-gray-300">Scalability</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-200">
              <td className="p-3 border border-gray-300">API Integration</td>
              <td className="p-3 border border-gray-300">Medium (IT team required)</td>
              <td className="p-3 border border-gray-300">Invisible (fully embedded)</td>
              <td className="p-3 border border-gray-300">Very high</td>
            </tr>
            <tr className="border border-gray-200">
              <td className="p-3 border border-gray-300">Hosted Partner Portal</td>
              <td className="p-3 border border-gray-300">None</td>
              <td className="p-3 border border-gray-300">Supplier self-service</td>
              <td className="p-3 border border-gray-300">High</td>
            </tr>
            <tr className="border border-gray-200 bg-[#F8FAFC] font-semibold">
              <td className="p-3 border border-gray-300">White-Label</td>
              <td className="p-3 border border-gray-300">Low–Medium</td>
              <td className="p-3 border border-gray-300">Fully branded</td>
              <td className="p-3 border border-gray-300">High</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* LEGAL CAUTION */}
      <div
        className="mt-16 p-8 bg-[#0B3A63] text-white rounded-xl shadow-md"
        data-i18n="partners.s6.legal"
      >
        <h4 className="text-xl font-bold mb-3">Legal & Compliance Notes</h4>
        <p className="text-white/90 text-sm leading-relaxed">
          Integrations do not modify methodologies, emission factors, assumptions, or scope
          boundaries. Partners cannot override or alter calculations. All outputs remain strictly
          deterministic to maintain institutional consistency and auditability.
        </p>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s6.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
            }
