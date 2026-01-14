export default function Pricing() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          Simple Pricing. One Document. One Price.
        </h2>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A single, transparent price for a complete CO₂e Attestation.  
          No subscriptions, no hidden fees, no consultants.  
          Pay once — generate instantly.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        {/* CARD */}
        <div className="max-w-md mx-auto bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-10">

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
            CO₂e Attestation — Instant Generation
          </h3>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-2">
            49€
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            One-time payment.  
            Immediate download.  
            Indicative spend-based CO₂e estimation — not a regulatory emissions report.
          </p>

          <a
            href="/assessment"
            className="w-full block bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold py-4 rounded-xl transition shadow-md"
          >
            Generate CO₂e Attestation
          </a>

          <ul className="mt-10 space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">
            <li>• Professional PDF, ready to send</li>
            <li>• CO₂e indicators + category breakdown</li>
            <li>• Version-controlled dataset information</li>
            <li>• Timestamp + unique verification ID</li>
            <li>• Integrity hash for offline validation</li>
            <li>• No data storage — privacy by design</li>
          </ul>
        </div>

        {/* LEGAL LINE */}
        <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          Indicative spend-based CO₂e estimation. Not a CSRD/ESRS report.  
          Results depend on the data you provide.
        </p>

      </div>
    </section>
  );
}
