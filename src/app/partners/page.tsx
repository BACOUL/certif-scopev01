import Breadcrumb from "@/components/Common/Breadcrumb";

export default function PartnersPage() {
  return (
    <>
      <Breadcrumb
        pageName="Partnerships"
        description="Enterprise integration program for large corporations, procurement platforms, banks, insurers, and industrial networks."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6 text-center">
            Enterprise Partnership Program
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-center">
            The Certif-Scope partnership program enables large organizations to securely trigger and verify 
            CO₂e attestations for their SME suppliers. Fully automated, verifiable, deterministic, 
            and compliant with procurement and ESG workflows.
          </p>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700 space-y-6">

            <h3 className="text-2xl font-semibold">Why Partner With Certif-Scope?</h3>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>Instant CO₂e attestations for all SME suppliers</li>
              <li>Standardized format accepted in procurement and banking workflows</li>
              <li>Verification URL + cryptographic hash integrity</li>
              <li>API tokens or bulk generation for enterprise systems</li>
              <li>Compliance support for CSRD / ESG vendor screening</li>
            </ul>

            <h3 className="text-2xl font-semibold pt-6">Enterprise Integration Options</h3>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>Direct portal access for supplier onboarding</li>
              <li>Automated API-based attestation requests</li>
              <li>Bulk generation via corporate procurement system</li>
              <li>Unique token codes allocated per supplier</li>
            </ul>

            <h3 className="text-2xl font-semibold pt-6">Volume Packs & Pricing</h3>

            <p className="text-gray-700 dark:text-gray-300">
              Enterprise pricing is based on the number of attestations per year. Contact us for tiered volume
              discounts based on supplier portfolio size.
            </p>

            <div className="text-center pt-6">
              <a
                href="/contact"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
              >
                Contact Enterprise Sales
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
