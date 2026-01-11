"use client";

export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24 space-y-10">

      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
        Product Overview
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
        Certif-Scope enables small and medium enterprises to instantly generate a standardized,
        institution-ready CO₂ attestation, aligned with GHG Protocol principles and accepted by
        procurement, banking, compliance and due diligence teams across Europe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Designed for institutional workflows
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Structured exactly like required by procurement, compliance and financial reviews.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            30-second generation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            No consultant. No delay. Enter expenses → instant verified PDF.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Independent verification
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Each attestation includes a unique verification code + cryptographic hash.
          </p>
        </div>

      </div>

    </section>
  );
}
