export default function Section7() {
  return (
    <section id="s7" className="scroll-mt-24">

      {/* SECTION TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-10">
        Value Proposition
      </h2>

      {/* INTRO PARAGRAPH */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mb-14 leading-relaxed">
        Certif-Scope delivers a unique combination of instant availability, institutional
        compliance, transparent methodology, and independently verifiable authenticity.
        It eliminates the traditional friction of carbon reporting—weeks of data collection,
        costly consultancy cycles, and inconsistent document formats—by offering a structured,
        verifiable, and repeatable attestation suitable for procurement teams, banks,
        insurers, marketplaces, regulators, and ESG auditors across Europe.
      </p>

      {/* VALUE BLOCKS — 3 PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 not-prose">

        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Clarity & Standardization</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The attestation follows an institutional structure: identification block, methodology
            summary, applied emission factors, computation model, final CO₂ estimate,
            verification ID, cryptographic hash, timestamp and QR verification. This predictable
            structure increases acceptance by procurement and compliance teams.
          </p>
        </div>

        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Instant, Repeatable & Scalable</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            No consultant, no appointment, no manual validation required. SMEs generate the
            attestation instantly using basic expense categories. The result can be reproduced
            unlimited times for procurement, lenders, or tenders—ensuring consistency across
            all institutional processes.
          </p>
        </div>

        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Independent Verification</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Every attestation includes a verification ID + a SHA-256 cryptographic hash
            allowing external validation without contacting Certif-Scope. Institutions
            can verify authenticity offline by comparing document integrity with the hash
            embedded in the PDF. No reliance on a live API.
          </p>
        </div>

      </div>

      {/* DEEP EXPLANATION BLOCK */}
      <div className="max-w-4xl mb-20">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Why this value matters</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Most SMEs struggle with carbon reporting because they lack internal ESG expertise
          and cannot afford consultant-led audits. Meanwhile, institutions increasingly require
          carbon indicators before approving financing, onboarding suppliers, or granting
          compliance status. Certif-Scope bridges this gap with a document that is:
        </p>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
          <li>• simple enough for SMEs to generate without assistance</li>
          <li>• structured enough for institutions to recognize and trust</li>
          <li>• transparent enough for auditors to verify methodology</li>
          <li>• cryptographically sealed for integrity and authentication</li>
        </ul>
      </div>

      {/* COMPARISON TABLE */}
      <div className="overflow-x-auto mb-20 not-prose">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-[#0B3A63] text-white font-semibold text-sm rounded-tl-xl">
                Feature
              </th>
              <th className="py-4 px-6 bg-[#0B3A63] text-white font-semibold text-sm">
                Traditional ESG Consultants
              </th>
              <th className="py-4 px-6 bg-[#0B3A63] text-white font-semibold text-sm rounded-tr-xl">
                Certif-Scope
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300 text-sm">

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-6 font-medium">Time to Deliver</td>
              <td className="py-4 px-6">2–8 weeks</td>
              <td className="py-4 px-6 text-[#0B3A63] font-semibold">30 seconds</td>
            </tr>

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-6 font-medium">Cost</td>
              <td className="py-4 px-6">€1,000 – €4,000</td>
              <td className="py-4 px-6 text-[#0B3A63] font-semibold">€49 fixed</td>
            </tr>

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-6 font-medium">Document Format</td>
              <td className="py-4 px-6">Variable / consultant-specific</td>
              <td className="py-4 px-6 text-[#0B3A63] font-semibold">Standardized & institutional</td>
            </tr>

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-6 font-medium">Verification</td>
              <td className="py-4 px-6">Manual emails / confirmations</td>
              <td className="py-4 px-6 text-[#0B3A63] font-semibold">Automatic + cryptographic</td>
            </tr>

            <tr>
              <td className="py-4 px-6 font-medium">Scalability</td>
              <td className="py-4 px-6">Low (human bottleneck)</td>
              <td className="py-4 px-6 text-[#0B3A63] font-semibold">High (fully automated)</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* STRATEGIC IMPACT SECTION */}
      <div className="max-w-4xl mb-20">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Strategic Impact for SMEs and Institutions
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Certif-Scope ensures that any business—regardless of size or industry—can instantly 
          meet carbon disclosure expectations. Its direct impact includes:
        </p>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
          <li>• Faster onboarding in procurement and supply chain processes</li>
          <li>• Reduced risk of tender rejection due to missing ESG data</li>
          <li>• Increased credibility in banking and investment evaluations</li>
          <li>• Lower compliance costs for SMEs</li>
          <li>• Seamless integration in institutional workflows</li>
        </ul>
      </div>

      {/* FINAL VALUE STATEMENT */}
      <div className="p-8 bg-[#0B3A63]/10 dark:bg-[#0B3A63]/20 rounded-2xl border border-[#0B3A63]/20 shadow-inner">
        <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold leading-relaxed">
          Certif-Scope is not just a simplified CO₂ calculator—it is a standardized compliance
          asset designed for real-world institutional transactions where clarity, verification,
          and procedural compatibility matter more than theoretical accuracy.
        </p>
      </div>

    </section>
  );
      }
