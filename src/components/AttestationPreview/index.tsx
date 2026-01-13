"use client";
import Image from "next/image";

export default function AttestationPreview() {
  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Spend-based CO₂e estimation
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-8"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
          Preview of the Indicative CO₂e Attestation
        </h2>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          A clear, standardized and reproducible spend-based document including estimated CO₂e indicators,
          category breakdown, dataset version, verification hash and unique ID. 
          Suitable for supplier onboarding, procurement documentation and ESG pre-assessment.
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <Image
              src="/preview.webp"
              alt="Certif-Scope Attestation Preview"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 600px"
              className="rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/sample-attestation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#0B3A63] text-white font-semibold text-sm md:text-base hover:bg-[#09405D] transition shadow-md"
          >
            Download sample PDF
          </a>
        </div>

      </div>
    </section>
  );
}
