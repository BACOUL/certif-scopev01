import Breadcrumb from "@/components/Common/Breadcrumb";

export default function PricingPage() {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Simple and transparent fixed pricing. No subscription and no hidden fees."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            Indicative CO₂e Estimation Pricing
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Certif-Scope provides instant, standardized, spend-based CO₂e estimations 
            suitable for supplier screening, procurement documentation and ESG pre-assessment. 
            Results are indicative only and depend entirely on user-provided spending data. 
            Not a CSRD/ESRS report and not an audited Scope 1/2/3 inventory.
          </p>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Standard CO₂e Estimation</h3>

            <p className="text-5xl font-bold text-primary mb-3">49€</p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Spend-based estimation • Instant PDF • Versioned emission dataset • 
              Unique verification ID • Cryptographic hash integrity
            </p>

            <ul className="text-left mx-auto max-w-md space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Instant indicative CO₂e estimation</li>
              <li>• Standardized institutional PDF output</li>
              <li>• Unique verification ID</li>
              <li>• Cryptographic hash for integrity check</li>
              <li>• QR code + verification link</li>
              <li>• Deterministic calculation (version-controlled dataset)</li>
              <li>• Based exclusively on spending (€)</li>
              <li>• No physical activity data (kWh, litres, km)</li>
              <li>• No consultants, no questionnaires</li>
            </ul>

            <button className="mt-10 px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition">
              Generate Indicative CO₂e Estimation
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mt-10 text-sm max-w-xl mx-auto leading-relaxed">
            Fixed price per generated estimation. No subscription.  
            Not suitable for CSRD/ESRS filings or audited emission inventories.  
            Designed for screening, onboarding and financial ESG pre-assessment only.
          </p>

        </div>
      </section>
    </>
  );
}
