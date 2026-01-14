"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 to-[#15B097]/15 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          7. Value Proposition
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides a standardized and verifiable CO₂ indicator that matches the structure 
          typically requested in procurement documentation, ESG preliminary screening, insurance risk 
          assessment, investor due-diligence and public funding applications. It eliminates inconsistent, 
          non-verifiable formats and reduces dependency on slow consultant-based estimations.
        </p>

        <div className="mt-6 text-sm text-gray-600 underline space-y-1 relative z-10">
          <a href="https://eur-lex.europa.eu/eli/reg/2022/2464" target="_blank">CSRD – EU 2022/2464</a><br />
          <a href="https://efrag.org/lab3" target="_blank">ESRS E1 – Climate Standard</a><br />
          <a href="https://www.eba.europa.eu" target="_blank">EBA ESG Risk Guidelines</a><br />
          <a href="https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy_en" target="_blank">EU Taxonomy</a><br />
          <a href="https://eur-lex.europa.eu/eli/reg/2019/2088" target="_blank">SFDR – EU 2019/2088</a>
        </div>
      </div>


      {/* GRID 4 VALUES */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Compatibility with EU Public Procurement
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Provides a structured CO₂ indicator compatible with formats commonly requested in 
            Green Public Procurement (GPP) documentation across infrastructure, logistics and IT.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Supports Banking ESG Risk Reviews
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Output can be used as an input for preliminary ESG risk scoring workflows used in 
            financing and refinancing assessments under EBA guidance.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Usable for SFDR & Taxonomy Screening
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Provides an indicative climate figure that investment firms can use as supporting data 
            in SFDR Article 8/9 screening and Taxonomy-related preliminary assessments.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Verifiable for Insurers & Auditors
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The embedded SHA-256 checksum enables offline integrity validation consistent with 
            transparency principles described in ISO 14064-1.
          </p>
        </div>

      </div>


      {/* COMPARISON TABLE */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">

        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Comparative Framework: Certif-Scope vs Traditional Methods
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b">
                <th className="p-4 text-left font-semibold">Criterion</th>
                <th className="p-4 text-left font-semibold">Certif-Scope</th>
                <th className="p-4 text-left font-semibold">Consultant-Based Review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Delivery Time</td>
                <td className="p-4">&lt; 30 sec</td>
                <td className="p-4">2–8 weeks depending on scope</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Cost</td>
                <td className="p-4">49 €</td>
                <td className="p-4">1 500–12 000 €</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Format</td>
                <td className="p-4">Standardized & machine-readable</td>
                <td className="p-4">Varies between firms and methodologies</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Verification</td>
                <td className="p-4">SHA-256 integrity hash</td>
                <td className="p-4">No cryptographic verification</td>
              </tr>

              <tr>
                <td className="p-4">Institutional Usability</td>
                <td className="p-4">Compatible with common EU screening formats</td>
                <td className="p-4">Depends on consultant practices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* SCORECARD */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Scorecard Compatibility
        </h3>

        <ul className="text-gray-700 text-sm space-y-3 leading-relaxed">
          <li>• <strong>Procurement:</strong> compatible with common EU GPP request formats.</li>
          <li>• <strong>Banking:</strong> usable as an input for ESG risk evaluation.</li>
          <li>• <strong>Insurance:</strong> integrity validation for underwriting files.</li>
          <li>• <strong>Investors:</strong> usable as preliminary climate evidence.</li>
          <li>• <strong>Public funding:</strong> structured for EU subsidy applications.</li>
        </ul>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
