"use client";

export default function Section9() {
  return (
    <section
      id="s9"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          9. Auditability & Independent Verification Boundaries
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          This section establishes the exact conditions under which Certif-Scope outputs
          may be independently verified by third parties. It defines verification scope,
          boundaries, reproducibility requirements, and limitations. It ensures accuracy
          of interpretation while preventing improper use as regulatory audit evidence.
        </p>
      </div>



      {/* BLOCK — Verification Scope */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Scope of Independent Verification
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Third-party reviewers may verify the internal consistency of an attestation using
          only the embedded metadata and the emission factor version referenced in the output.
          This verification is limited to structural and mathematical reproducibility:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Correct application of category-specific emission factors.</li>
          <li>• Correct multiplication of spending by emission factors.</li>
          <li>• Correct aggregation of category-level results into totals.</li>
          <li>• Correct dataset version alignment with embedded metadata.</li>
        </ul>
      </div>



      {/* BLOCK — Verification Boundaries */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-xl border border-[#15B097]/30 dark:border-gray-700 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Boundaries of Verification
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Verification is strictly limited to mathematical consistency. Reviewers cannot:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Validate the accuracy of user-submitted financial inputs.</li>
          <li>• Confirm whether spending amounts are exhaustive or correct.</li>
          <li>• Assess supplier-specific carbon intensity or real emissions.</li>
          <li>• Use the attestations as a proxy for CSRD/ESRS reporting.</li>
        </ul>
      </div>



      {/* BLOCK — Reproducibility Requirements */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Requirements for Successful Reproduction
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          For an attestation to be reproducible independently, the following conditions
          must be met without exception:
        </p>

        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
          <li>• Input values must be identical to those submitted originally.</li>
          <li>• Category mapping must follow the published definitions.</li>
          <li>• The same emission factor dataset version must be used.</li>
          <li>• No post-processing, scaling or reinterpretation is allowed.</li>
        </ul>
      </div>



      {/* BLOCK — Explicit Verification Limits */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Explicit Verification Limits
        </h3>

        <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-5xl relative z-10">
          Verification cannot extend beyond the deterministic scope of the model. 
          Certif-Scope does not store financial inputs, therefore independent reviewers 
          cannot re-access or revalidate user data. No metadata exists beyond what is 
          embedded in the final attestation file.
        </p>
      </div>



      {/* BLOCK — Forbidden Verification Interpretations */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-xl border border-[#15B097]/30 dark:border-gray-700 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Forbidden Interpretations of the Verification Process
        </h3>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Treating indicative values as audited or certified emissions.</li>
          <li>• Using the attestation as regulatory reporting evidence.</li>
          <li>• Assuming data quality validation of user inputs.</li>
          <li>• Comparing outputs across years as if operationally consistent.</li>
          <li>• Using results as a substitute for primary LCA or Scope 1/2/3 reporting.</li>
        </ul>
      </div>



      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
