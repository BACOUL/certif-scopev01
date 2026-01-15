import Breadcrumb from "@/components/Common/Breadcrumb";

export default function PartnersPage() {
  return (
    <>
      <Breadcrumb
        pageName="Partnerships"
        description="Enterprise integration program for large corporations, procurement networks and institutional platforms."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
            Partnership Program
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Certif-Scope offers a standardized integration framework for banks, insurers,
            procurement networks and enterprise groups to issue, verify and distribute CO₂e
            attestations across their entire supplier ecosystem.
          </p>
        </div>
      </section>
    </>
  );
}
