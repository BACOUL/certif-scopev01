"use client";

/* ======================================================
   CERTIF-SCOPE — CONTACT & SUPPORT (PRODUCTION V1)
   NO FORM · NO DATA COLLECTION · EMAIL ONLY
====================================================== */

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="container max-w-3xl mx-auto px-6">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm px-8 py-12">

          {/* TITLE */}
          <h1 className="mb-4 text-2xl font-bold text-[#0B3A63] sm:text-3xl">
            Contact & support
          </h1>

          {/* INTRO */}
          <p className="mb-8 text-base text-gray-600 leading-relaxed">
            For any question regarding Certif-Scope, attestation issuance,
            verification, or institutional usage, you can contact us by email.
          </p>

          {/* EMAIL BLOCK */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700">
                General contact
              </p>
              <a
                href="mailto:contact@certif-scope.io"
                className="text-[#0B3A63] font-semibold underline"
              >
                contact@certif-scope.io
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">
                Technical support
              </p>
              <a
                href="mailto:support@certif-scope.io"
                className="text-[#0B3A63] font-semibold underline"
              >
                support@certif-scope.io
              </a>
            </div>
          </div>

          {/* POLICY / CLARIFICATIONS */}
          <div className="mt-10 space-y-3 text-sm text-gray-500 leading-relaxed">
            <p>
              Certif-Scope does not operate a ticketing system.
              Requests are handled manually by email.
            </p>

            <p>
              Attestations generated using an access key are <strong>not sent by email</strong>.
              In this case, the document must be downloaded and saved immediately after generation.
            </p>

            <p>
              Certif-Scope does not store issued PDF documents and cannot retrieve
              a lost attestation.
            </p>

            <p>
              Please do not send sensitive or confidential data by email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
