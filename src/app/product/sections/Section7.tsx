"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      data-section="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 to-[#15B097]/15 pointer-events-none"
          aria-hidden="true"
        ></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s7.title"
        >
          Value Proposition
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s7.intro"
        >
          Certif-Scope provides a standardized and verifiable CO₂ indicator aligned with procurement,
          ESG preliminary screening, insurance risk assessment, investor due-diligence and public
          funding applications. It eliminates inconsistent formats and replaces them with a unified,
          verification-ready structure that can be reviewed quickly and independently.
        </p>

        <div
          className="mt-6 text-sm text-gray-600 underline space-y-1 relative z-10"
          data-i18n="s7.references"
        >
          <a href="https://eur-lex.europa.eu/eli/reg/2022/2464" target="_blank" rel="noopener noreferrer">CSRD – EU 2022/2464</a><br />
          <a href="https://efrag.org/lab3" target="_blank" rel="noopener noreferrer">ESRS E1 – Climate Standard</a><br />
          <a href="https://www.eba.europa.eu" target="_blank" rel="noopener noreferrer">EBA ESG Risk Guidelines</a><br />
          <a href="https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy_en" target="_blank" rel="noopener noreferrer">EU Taxonomy</a><br />
          <a href="https://eur-lex.europa.eu/eli/reg/2019/2088" target="_blank" rel="noopener noreferrer">SFDR – EU 2019/2088</a>
        </div>
      </div>


      {/* GRID 4 VALUES */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="s7.value1.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s7.value1.title">
            Compatibility with EU Public Procurement
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" data-i18n="s7.value1.text">
            Provides a standardized CO₂ indicator suitable for Green Public Procurement formats in
            infrastructure, services, logistics and IT.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30"
          data-i18n="s7.value2.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s7.value2.title">
            Supports Banking ESG Risk Reviews
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" data-i18n="s7.value2.text">
            The indicator can be used as an input for preliminary ESG risk scoring workflows under
            European banking guidelines.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="s7.value3.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s7.value3.title">
            Usable for SFDR & Taxonomy Screening
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" data-i18n="s7.value3.text">
            Provides indicative climate data that investment firms can use for Article 8/9 SFDR
            screening and early-stage Taxonomy assessment.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30"
          data-i18n="s7.value4.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s7.value4.title">
            Verifiable for Insurers & Auditors
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" data-i18n="s7.value4.text">
            The embedded SHA-256 checksum enables offline integrity validation, aligned with
            transparency principles in ISO 14064-1.
          </p>
        </div>

      </div>


      {/* COMPARISON TABLE */}
      <div
        className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"
        data-i18n="s7.table.block"
      >

        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6" data-i18n="s7.table.title">
          Comparative Framework: Certif-Scope vs Traditional Methods
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b">
                <th className="p-4 text-left font-semibold" data-i18n="s7.table.col1">Criterion</th>
                <th className="p-4 text-left font-semibold" data-i18n="s7.table.col2">Certif-Scope</th>
                <th className="p-4 text-left font-semibold" data-i18n="s7.table.col3">Consultant-Based Review</th>
              </tr>
            </thead>
            <tbody>

              <tr className="border-b">
                <td className="p-4" data-i18n="s7.table.row1.col1">Delivery Time</td>
                <td className="p-4" data-i18n="s7.table.row1.col2">&lt; 30 sec</td>
                <td className="p-4" data-i18n="s7.table.row1.col3">2–8 weeks</td>
              </tr>

              <tr className="border-b">
                <td className="p-4" data-i18n="s7.table.row2.col1">Cost</td>
                <td className="p-4" data-i18n="s7.table.row2.col2">49 €</td>
                <td className="p-4" data-i18n="s7.table.row2.col3">1 500–12 000 €</td>
              </tr>

              <tr className="border-b">
                <td className="p-4" data-i18n="s7.table.row3.col1">Format</td>
                <td className="p-4" data-i18n="s7.table.row3.col2">Standardized & machine-readable</td>
                <td className="p-4" data-i18n="s7.table.row3.col3">Varies by consultant</td>
              </tr>

              <tr className="border-b">
                <td className="p-4" data-i18n="s7.table.row4.col1">Verification</td>
                <td className="p-4" data-i18n="s7.table.row4.col2">SHA-256 integrity hash</td>
                <td className="p-4" data-i18n="s7.table.row4.col3">No cryptographic checks</td>
              </tr>

              <tr>
                <td className="p-4" data-i18n="s7.table.row5.col1">Institutional Usability</td>
                <td className="p-4" data-i18n="s7.table.row5.col2">Compatible with EU screening</td>
                <td className="p-4" data-i18n="s7.table.row5.col3">Depends on firm method</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>


      {/* SCORECARD */}
      <div
        className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm"
        data-i18n="s7.scorecard.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s7.scorecard.title">
          Institutional Scorecard Compatibility
        </h3>

        <ul className="text-gray-700 text-sm space-y-3 leading-relaxed">
          <li data-i18n="s7.scorecard.item1">• <strong>Procurement:</strong> aligned with EU GPP request formats.</li>
          <li data-i18n="s7.scorecard.item2">• <strong>Banking:</strong> usable for ESG risk evaluation.</li>
          <li data-i18n="s7.scorecard.item3">• <strong>Insurance:</strong> integrity validation for underwriting.</li>
          <li data-i18n="s7.scorecard.item4">• <strong>Investors:</strong> preliminary climate indicator.</li>
          <li data-i18n="s7.scorecard.item5">• <strong>Public funding:</strong> structured for grant submissions.</li>
          <li data-i18n="s7.scorecard.item6">• <strong>Legal boundaries:</strong> not a CSRD/ESRS report.</li>
          <li data-i18n="s7.scorecard.item7">• <strong>Methodology limitations:</strong> see Section 11.</li>
        </ul>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s7.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
                  }
