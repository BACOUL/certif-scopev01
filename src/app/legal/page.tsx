export const metadata = {
  title: "Legal Notice — Certif-Scope",
  description:
    "Official legal information regarding the operator, hosting provider, liability limitations and legal framework of Certif-Scope.",
};

export default function LegalPage() {
  return (
    <section
      id="legal"
      data-section="legal"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* CANONICAL PAGE HEADER — IDENTICAL TO ALL SECONDARY PAGES */}
      <header className="mb-14">
        <p
          data-i18n="legal.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Legal Information
        </p>

        <h1
          data-i18n="legal.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Legal Notice
        </h1>

        <p
          data-i18n="legal.description"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Mandatory legal information regarding the operator, hosting provider,
          intellectual property, liability limitations and data handling
          principles applicable to Certif-Scope.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT — CANONICAL WIDTH */}
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 1. OPERATOR */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Operator Information
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            This website is operated by the following individual entrepreneur:
          </p>

          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li><strong>Name:</strong> Jeason Alexandre Bacoul</li>
            <li><strong>Business name:</strong> TimeProofs</li>
            <li><strong>Legal status:</strong> Entrepreneur individuel (France)</li>
            <li><strong>SIREN:</strong> 999356439</li>
            <li>
              <strong>Registered address:</strong> 3 rue de l’Église de Louppy,
              55000 Les Hauts-de-Chée, France
            </li>
            <li><strong>VAT regime:</strong> Franchise en base (VAT not applicable)</li>
            <li><strong>Contact email:</strong> contact@certif-scope.com</li>
          </ul>
        </section>

        {/* 2. PUBLICATION */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Publication Responsibility
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The publication manager and legal representative of this website is
            Jeason Alexandre Bacoul.
            <br />
            Contact: <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        {/* 3. HOSTING */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Hosting Provider
          </h2>

          <p className="text-gray-700 leading-relaxed mb-2">
            This website is hosted by:
          </p>

          <p className="text-gray-700 leading-relaxed">
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            United States
          </p>
        </section>

        {/* 4. IP */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Intellectual Property
          </h2>

          <p className="text-gray-700 leading-relaxed">
            All content published on this website, including text, layout,
            design, branding and code structure, is protected by applicable
            intellectual property laws. Any reproduction, modification or
            redistribution without prior written authorization is strictly
            prohibited.
          </p>
        </section>

        {/* 5. LIABILITY */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Liability Limitations
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope provides deterministic, spend-based CO₂e calculations
            derived from user-declared financial inputs. The operator cannot be
            held liable for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 text-sm">
            <li>incorrect, incomplete or misleading information provided by users</li>
            <li>interpretation or use of attestations by third parties</li>
            <li>decisions taken by procurement, financial or regulatory entities</li>
            <li>use of attestations outside their indicative and non-regulatory scope</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            Certif-Scope attestations are indicative spend-based estimates. They
            are not CSRD or ESRS reports, not a greenhouse gas audit and not a
            regulatory emissions inventory.
          </p>
        </section>

        {/* 6. DATA */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Data Storage and Processing
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Certif-Scope follows a privacy-by-design and stateless processing
            model. User-entered financial data is processed temporarily in
            memory for calculation purposes and is never stored in persistent
            databases. Verification mechanisms do not rely on stored documents
            or user accounts.
          </p>
        </section>

        {/* 7. ABUSE */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Abuse, Misuse and Technical Reporting
          </h2>

          <p className="text-gray-700 leading-relaxed">
            To report illegal content, misuse of the service or any technical
            issue, please contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
          }
