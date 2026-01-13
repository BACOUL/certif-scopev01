"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 to-[#15B097]/15 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          7. Value Proposition
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope delivers a standardized, verifiable CO₂ indicator aligned with European
          procurement norms, ESG risk scoring models, insurer underwriting frameworks, investor
          due-diligence practices, and public funding requirements. It eliminates non-verifiable
          PDF files, inconsistent formats and consultant-dependent variability.
        </p>

        <div className="mt-6 text-sm text-gray-600 underline space-y-1 relative z-10">
          <a href="https://eur-lex.europa.eu/eli/reg/2022/2464" target="_blank">CSRD – EU 2022/2464</a><br />
          <a href="https://efrag.org/lab3" target="_blank">ESRS E1 – Climate Standard</a><br />
          <a href="https://www.eba.europa.eu" target="_blank">EBA ESG Risk Guidelines</a><br />
          <a href="https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy_en" target="_blank">EU Taxonomy</a><br />
          <a href="https://eur-lex.europa.eu/eli/reg/2019/2088" target="_blank">SFDR – EU 2019/2088</a>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Alignment with EU Public Procurement
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fully aligned with EU Green Public Procurement (GPP) formatting requirements used in
            construction, logistics, facility management and IT tenders.
          </p>
          <p className="mt-2 text-xs text-gray-500 underline">
            <a href="https://environment.ec.europa.eu/topics/sustainable-development/green-public-procurement_en" target="_blank">
              EU GPP Framework
            </a>
          </p>
        </div>


        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Banking ESG Risk Compatibility
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Outputs can be directly consumed by EBA ESG risk scoring workflows for loan approval,
            refinancing and sustainability-linked financing.
          </p>
          <p className="mt-2 text-xs text-gray-500 underline">
            <a href="https://www.eba.europa.eu" target="_blank">
              EBA ESG Risk Guidelines
            </a>
          </p>
        </div>


        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Support for SFDR & EU Taxonomy
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Provides climate indicators usable in SFDR Article 8/9 disclosures and Taxonomy-aligned
            ESG screening for investment firms.
          </p>
          <p className="mt-2 text-xs text-gray-500 underline">
            <a href="https://eur-lex.europa.eu/eli/reg/2019/2088" target="_blank">
              SFDR Regulation
            </a>
          </p>
        </div>


        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Verifiability for Insurers & Auditors
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Embedded SHA-256 checksum enables offline validation and audit traceability consistent
            with ISO 14064-1 verification principles.
          </p>
          <p className="mt-2 text-xs text-gray-500 underline">
            <a href="https://www.iso.org/standard/66453.html" target="_blank">
              ISO 14064-1:2018
            </a>
          </p>
        </div>

      </div>


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
                <th className="p-4 text-left font-semibold">Consultant ESG Report</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Delivery Time</td>
                <td className="p-4">&lt; 30 sec</td>
                <td className="p-4">2–8 weeks</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Cost</td>
                <td className="p-4">49 €</td>
                <td className="p-4">1 500–12 000 €</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Format</td>
                <td className="p-4">Fully standardized, machine-readable</td>
                <td className="p-4">Inconsistent, depends on consultant</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Verification</td>
                <td className="p-4">Embedded SHA-256 hash</td>
                <td className="p-4">No cryptographic integrity</td>
              </tr>

              <tr>
                <td className="p-4">Institutional Alignment</td>
                <td className="p-4">EU GPP, CSRD, ESRS, EBA, SFDR</td>
                <td className="p-4">No standard alignment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Scorecard Alignment
        </h3>

        <ul className="text-gray-700 text-sm space-y-3 leading-relaxed">
          <li>• <strong>Procurement:</strong> format aligned with EU GPP technical sheets.</li>
          <li>• <strong>Banking:</strong> supports EBA ESG risk scoring templates.</li>
          <li>• <strong>Insurance:</strong> risk exposure compatible with underwriting matrices.</li>
          <li>• <strong>Investors:</strong> coherent with SFDR Article 8/9 climate indicators.</li>
          <li>• <strong>Public funding:</strong> structured for CINEA and EU subsidy platforms.</li>
        </ul>
      </div>


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
