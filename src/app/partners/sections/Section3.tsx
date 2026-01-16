"use client";

export default function Section3() {
  return (
    <section
      id="partner-key-issuance"
      data-section="partner-key-issuance"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s3.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">3.</span>
          Partner Key Issuance
        </h2>

        <p
          data-i18n="partners.s3.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          A Partner Key is issued once a prepaid attestation pack has been successfully
          purchased. The key grants the right to generate a defined number of CO₂e
          Attestations, under the responsibility of a single identified partner.
        </p>

        <p
          data-i18n="partners.s3.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Key issuance is a controlled, one-time operation. It does not create user
          accounts, dashboards or persistent sessions, and does not require any technical
          integration.
        </p>
      </div>

      {/* ISSUANCE PRINCIPLES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PRINCIPLE 1 */}
        <div
          data-i18n="partners.s3.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s3.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Issued After Payment Confirmation
          </h3>
          <p
            data-i18n="partners.s3.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            The Partner Key is generated only after successful payment validation
            of a prepaid attestation pack. No key exists before purchase.
          </p>
        </div>

        {/* PRINCIPLE 2 */}
        <div
          data-i18n="partners.s3.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg hover:border-[#15B097]/50 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s3.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Delivered by Email
          </h3>
          <p
            data-i18n="partners.s3.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            The Partner Key is delivered by email to the address provided at purchase.
            This email defines the responsible party for key usage.
          </p>
        </div>

        {/* PRINCIPLE 3 */}
        <div
          data-i18n="partners.s3.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s3.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            One Key, One Responsible Entity
          </h3>
          <p
            data-i18n="partners.s3.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            A Partner Key is linked to a single organization and contact email.
            It cannot be split into sub-accounts or delegated implicitly.
          </p>
        </div>

      </div>

      {/* SCOPE NOTE */}
      <div
        data-i18n="partners.s3.note.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <p
          data-i18n="partners.s3.note.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          The Partner Key only defines issuance and authorization rights.
          Generation workflows, credit consumption and recovery mechanisms
          are described in subsequent sections.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s3.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
          }
