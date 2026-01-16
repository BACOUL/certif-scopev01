export const metadata = {
  title: "Legal Notice — Certif-Scope",
  description: "Official legal information regarding Certif-Scope.",
};

export default function LegalPage() {
  return (
    <section
      id="legal"
      data-section="legal"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* MICRO LABEL */}
      <p
        data-i18n="legal.label"
        className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
      >
        Legal Information
      </p>

      {/* HEADING */}
      <h1
        data-i18n="legal.title"
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63] mb-6"
      >
        Legal Notice
      </h1>

      <p
        data-i18n="legal.description"
        className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
      >
        Mandatory legal information regarding the operator, hosting provider, publication manager,
        intellectual property and liability limitations for Certif-Scope.
      </p>

      {/* SEPARATOR */}
      <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12" />

      {/* OPERATOR */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2
          data-i18n="legal.operator.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Operator Information
        </h2>

        <p
          data-i18n="legal.operator.intro"
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
        >
          This website is operated by the individual entrepreneur:
        </p>

        <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
          <li><strong>Name:</strong> Jeason Alexandre Bacoul</li>
          <li><strong>Company:</strong> TimeProofs</li>
          <li><strong>SIREN:</strong> 999356439</li>
          <li><strong>Address:</strong> 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France</li>
          <li><strong>Legal Status:</strong> Entrepreneur individuel</li>
          <li><strong>VAT Regime:</strong> Franchise en base (no VAT applicable)</li>
          <li><strong>Contact Email:</strong> contact@certif-scope.com</li>
        </ul>
      </section>

      {/* PUBLICATION RESPONSIBLE */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2
          data-i18n="legal.publication.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Publication Responsible
        </h2>

        <p
          data-i18n="legal.publication.text"
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          The publication manager and legal representative is Jeason Alexandre Bacoul.  
          Contact: <strong>contact@certif-scope.com</strong>
        </p>
      </section>

      {/* HOSTING PROVIDER */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2
          data-i18n="legal.hosting.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Hosting Provider
        </h2>

        <p
          data-i18n="legal.hosting.intro"
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          The website is hosted by:
        </p>

        <p
          data-i18n="legal.hosting.details"
          className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2"
        >
          Vercel Inc.<br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723<br />
          USA
        </p>
      </section>

      {/* INTELLECTUAL PROPERTY */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2
          data-i18n="legal.ip.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Intellectual Property
        </h2>

        <p
          data-i18n="legal.ip.text"
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          All content on this website (text, layout, design and code structure) is protected by
          intellectual property law. Reproduction, modification or redistribution without written
          authorization is strictly prohibited.
        </p>
      </section>

      {/* LIABILITY */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2
          data-i18n="legal.liability.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Liability
        </h2>

        <p
          data-i18n="legal.liability.intro"
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
        >
          Certif-Scope provides deterministic calculations based on user-entered financial
          spending. The operator cannot be held responsible for:
        </p>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
          <li data-i18n="legal.liability.point1">incorrect or incomplete data submitted by users</li>
          <li data-i18n="legal.liability.point2">misinterpretation of attestations by third parties</li>
          <li data-i18n="legal.liability.point3">use outside procurement/compliance workflows</li>
          <li data-i18n="legal.liability.point4">decisions taken by institutions based on the attestation</li>
        </ul>

        <p
          data-i18n="legal.liability.note"
          className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
        >
          Certif-Scope attestations are spend-based indicative estimates. They are not CSRD/ESRS
          filings, not a GHG audit and not a regulatory inventory.
        </p>
      </section>

      {/* DATA STORAGE STATEMENT */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2
          data-i18n="legal.storage.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Data Storage
        </h2>

        <p
          data-i18n="legal.storage.text"
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          No user-entered spending data is stored. All inputs are processed temporarily during PDF
          generation and immediately discarded. Verification does not rely on stored databases.
        </p>
      </section>

      {/* ABUSE REPORT */}
      <section className="max-w-4xl mx-auto">
        <h2
          data-i18n="legal.abuse.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Abuse & Technical Reporting
        </h2>

        <p
          data-i18n="legal.abuse.text"
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          To report illegal content, misuse or any technical issue, please contact:  
          <br />
          <strong>contact@certif-scope.com</strong>
        </p>
      </section>
    </section>
  );
        }
