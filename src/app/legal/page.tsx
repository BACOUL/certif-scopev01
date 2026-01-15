export const metadata = {
  title: "Legal Notice — Certif-Scope",
  description: "Official legal information regarding Certif-Scope.",
};

export default function LegalPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER UNIFORME */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Legal Notice
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          This page provides all mandatory legal information regarding the operator,
          publication responsibility, hosting and regulatory disclaimers for Certif-Scope.
        </p>
      </div>

      {/* CONTENT BLOCKS */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* OPERATOR */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Operator Information</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This website is operated by the individual entrepreneur:
          </p>

          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Name:</strong> Jeason Alexandre Bacoul</li>
            <li><strong>Company:</strong> TimeProofs</li>
            <li><strong>SIREN:</strong> 999356439</li>
            <li><strong>Address:</strong> 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France</li>
            <li><strong>Legal Status:</strong> Entrepreneur individuel</li>
            <li><strong>VAT Regime:</strong> Franchise en base (no VAT applicable)</li>
            <li><strong>Contact Email:</strong> contact@certif-scope.com</li>
          </ul>
        </section>

        {/* PUBLICATION */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Publication Responsible</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The publication manager and legal representative is Jeason Alexandre Bacoul.
          </p>
        </section>

        {/* HOSTING */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Hosting Provider</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The site is hosted by:
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
            Vercel Inc.  
            440 N Barranca Ave #4133  
            Covina, CA 91723  
            USA
          </p>
        </section>

        {/* INTELLECTUAL PROPERTY */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Intellectual Property</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All content on this website (text, visuals, design, layout, code structure)
            is protected by intellectual property laws. Any reproduction, modification
            or redistribution without written authorization is prohibited.
          </p>
        </section>

        {/* LIABILITY */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Liability</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope provides informational and digital verification services using
            deterministic computations based on user-entered spending data.
            The operator cannot be held responsible for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>incorrect or incomplete data submitted by the user</li>
            <li>misinterpretation of attestations by third parties</li>
            <li>use outside the intended procurement/compliance scope</li>
            <li>decisions made by institutions based on the document</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Certif-Scope attestations are indicative estimates.
            They are not CSRD/ESRS filings, not a GHG audit and not a regulatory emissions inventory.
          </p>
        </section>

        {/* ABUSE REPORT */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Abuse & Technical Reports</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For any report of illegal content, data misuse or technical incident,
            please contact:<br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

      </div>
    </div>
  );
}
