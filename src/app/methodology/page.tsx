import Breadcrumb from "@/components/Common/Breadcrumb";

export default function MethodologyPage() {
  return (
    <>
      <Breadcrumb
        pageName="Methodology"
        description="Understanding how Certif-Scope calculates CO₂ estimates using the spend-based approach aligned with the GHG Protocol."
      />

      {/* SECTION — Intro */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            Methodological foundation
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Certif-Scope uses a standardized spend-based methodology derived from the
            Greenhouse Gas Protocol (Corporate Standard). This approach estimates
            emissions by multiplying financial expenditure by category-specific
            emission factors.
          </p>
        </div>
      </section>

      {/* SECTION — How spend-based works */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            How the spend-based model works
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            The spend-based model estimates emissions by associating each euro spent
            with an average CO₂ emission factor for that economic category. This makes
            the method accessible, fast and compatible with companies that do not yet
            track physical activity data.
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>• User enters annual spending per category</li>
            <li>• Each category has an associated emission factor (kg CO₂e / €)</li>
            <li>• Emissions = Spending × Emission Factor</li>
            <li>• Totals are aggregated to produce a footprint estimate</li>
          </ul>
        </div>
      </section>

      {/* SECTION — Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            Categories covered
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope uses commonly accepted economic categories that align with
            GHG Protocol scope guidance and widely referenced input-output models.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <li>• Energy and utilities</li>
            <li>• Office operations</li>
            <li>• IT equipment and services</li>
            <li>• Transportation & logistics</li>
            <li>• Professional services</li>
            <li>• Marketing & media</li>
            <li>• Construction / maintenance</li>
            <li>• Other purchased goods and services</li>
          </ul>
        </div>
      </section>

      {/* SECTION — Emission factors */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            Emission factors
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Emission factors are sourced from recognized models combining national
            environmental accounts and economic input-output databases. These provide
            average CO₂ intensities per euro of expenditure for each sector.
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>• Based on environmental extended input-output (EEIO) frameworks</li>
            <li>• Aggregated per economic sector</li>
            <li>• Updated regularly according to latest published averages</li>
            <li>• Converted to kg CO₂e / € for spend-based calculation</li>
          </ul>
        </div>
      </section>

      {/* SECTION — Limitations */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            Methodological limitations
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Like all spend-based calculations, this approach has inherent
            limitations. It prioritizes accessibility and consistency over precision.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>• Estimates do not reflect supplier-specific carbon performance</li>
            <li>• Emission factors are averages, not direct measurements</li>
            <li>• No verification of accounting records by Certif-Scope</li>
            <li>• Not suitable for regulated carbon reporting requiring audits</li>
            <li>• Best used as an indicative footprint or screening indicator</li>
          </ul>
        </div>
      </section>
    </>
  );
}
