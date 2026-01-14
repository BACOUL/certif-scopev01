export default function Pricing() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          Simple Pricing — One Document, One Fixed Cost
        </h2>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A single payment for a complete, standardized CO₂e Attestation.  
          No subscriptions. No ongoing fees. No consultants.  
          Instant generation from your annual spending (€).
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        <div className="max-w-md mx-auto bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-10">

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
            CO₂e Attestation — Instant Generation
          </h3>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-2">
            49€
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            One-time purchase.  
            Immediate download.  
            Indicative spend-based estimation — not a regulatory emissions report.
          </p>

          <a
            href="/assessment"
            className="w-full block bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold py-4 rounded-xl transition shadow-md"
          >
            Generate CO₂e Attestation
          </a>

          <ul className="mt-10 space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">
            <li>• Standardized professional PDF</li>
            <li>• CO₂e indicators + category breakdown</li>
            <li>• Transparent spend-based calculation</li>
            <li>• Version-controlled emission factors</li>
            <li>• Timestamp + unique verification ID</li>
            <li>• Integrity hash for offline validation</li>
            <li>• No data storage — privacy by design</li>
          </ul>
        </div>

        <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          Indicative CO₂e estimation based solely on spending (€).  
          Not a CSRD/ESRS report or audited emissions inventory.
        </p>

      </div>
    </section>
  );
}
