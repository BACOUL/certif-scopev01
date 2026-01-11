import Breadcrumb from "@/components/Common/Breadcrumb";

export default function LegalPage() {
  return (
    <>
      <Breadcrumb
        pageName="Legal Notice"
        description="Official legal information regarding the Certif-Scope service and its operator."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B3A63] mb-8">Legal Information</h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            This website is published by the operator identified below. All information listed on this page is legally required for commercial online services under EU regulations.
          </p>

          {/* Operator */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-3">Operator</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Company:</strong> TimeProofs (Entrepreneur Individuel)<br />
              <strong>Owner:</strong> Jeason Alexandre Bacoul<br />
              <strong>SIREN:</strong> 999356439<br />
              <strong>Address:</strong> 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France<br />
              <strong>Email:</strong> contact@timeproofs.io<br />
              <strong>VAT regime:</strong> Franchise en base (no VAT applicable)
            </p>
          </div>

          {/* Hosting */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-3">Hosting</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This service is hosted by Vercel Inc.<br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
              <strong>Website:</strong> https://vercel.com
            </p>
          </div>

          {/* Liability */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-3">Liability & Scope</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Certif-Scope provides automated CO₂ estimation and attestation generation.  
              The service does not constitute a regulated certification body, environmental audit service, or legally binding verification authority.  
              Attestations are informational and based on user-provided inputs and standardized estimation methods.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-3">Intellectual Property</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All content, design elements, and technical components of this website are protected by applicable copyright and intellectual property laws.  
              Any reproduction or redistribution without written permission is prohibited.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-700 dark:text-gray-300">
              For any legal inquiry or request, please contact:<br />
              <strong>Email:</strong> contact@timeproofs.io
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
