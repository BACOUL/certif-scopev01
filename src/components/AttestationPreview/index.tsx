"use client";
import Image from "next/image";

export default function AttestationPreview() {
  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Example CO₂e Document (Instant • Spend-Based)
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-8"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
          The Document You Can Send Immediately to Clients
        </h2>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          This is the exact format your clients and partners receive: clean, professional and 
          instantly understandable. It summarizes your spend-based CO₂e indicators, 
          shows the breakdown by category and includes a verification code for quick validation.  
          No jargon. No technical knowledge needed. Just a simple document that answers the request.
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <Image
              src="/preview.webp"
              alt="Certif-Scope CO₂e document preview"
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
