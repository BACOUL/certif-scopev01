import Breadcrumb from "@/components/Common/Breadcrumb";

export default function LegalPage() {
  return (
    <>
      <Breadcrumb
        pageName="Legal Notice"
        description="Official legal information regarding Certif-Scope."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Legal Information
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            This website is operated by the individual entrepreneur:
          </p>

          <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li><strong>Name:</strong> Jeason Alexandre Bacoul</li>
            <li><strong>Company:</strong> TimeProofs</li>
            <li><strong>SIREN:</strong> 999356439</li>
            <li><strong>Address:</strong> 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France</li>
            <li><strong>Legal Form:</strong> Entrepreneur individuel</li>
            <li><strong>VAT Regime:</strong> Franchise en base (no VAT applicable)</li>
            <li><strong>Official Contact Email:</strong> contact@certif-scope.com</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Hosting</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>

          <h3 className="text-xl font-semibold mb-4">Intellectual Property</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            All content on this website is protected by intellectual property laws. Reproduction 
            or distribution without prior written permission is prohibited.
          </p>

          <h3 className="text-xl font-semibold mb-4">Liability</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope provides informational and digital verification services. 
            The operator cannot be held responsible for improper use of generated documents 
            by third parties.
          </p>
        </div>
      </section>
    </>
  );
}
