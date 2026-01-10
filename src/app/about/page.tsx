import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Certif-Scope",
  description: "About Certif-Scope",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        pageName="About Certif-Scope"
        description="Certif-Scope provides standardized, instantly verifiable CO₂ attestations used in procurement, banking and compliance workflows."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Certif-Scope simplifies carbon compliance by delivering instantly
            verifiable attestation documents aligned with institutional
            expectations. Our objective is to make CO₂ reporting accessible to
            SMEs while ensuring strong compatibility with procurement and banking
            workflows.
          </p>
        </div>
      </section>
    </>
  );
}
