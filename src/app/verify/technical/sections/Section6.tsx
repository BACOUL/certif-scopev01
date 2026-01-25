export default function Section6() {
  return (
    <section
      id="verification-workflows"
      data-section="verification-workflows"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          6. Verification Workflows
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section describes the practical verification workflows used by
          different audiences. All workflows rely on the same cryptographic
          guarantees, but differ in tooling and level of technical depth.
        </p>
      </header>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* OVERVIEW */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Overview of verification paths
        </h3>

        <p>
          Certif-Scope intentionally supports multiple verification workflows to
          ensure broad adoption across non-technical users, institutions, and
          developers.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Standard PDF verification</strong> (procurement, banks,
            insurers)
          </li>
          <li>
            <strong>Manual cryptographic verification</strong> (auditors,
            security teams)
          </li>
          <li>
            <strong>Automated / scripted verification</strong> (developers,
            compliance systems)
          </li>
        </ul>

        {/* WORKFLOW 1 */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Workflow A — Standard PDF signature validation
        </h3>

        <p>
          This is the primary workflow for most recipients of an attestation.
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the PDF file in a standard PDF reader</li>
          <li>Locate the digital signature panel</li>
          <li>Validate the signature</li>
          <li>Confirm that the document is marked as “signed and unmodified”</li>
        </ol>

        <p>
          The PDF viewer performs all cryptographic checks internally using the
          embedded signature and public key information.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            This workflow is sufficient to confirm authenticity and integrity
            for procurement, banking, insurance and diligence use cases.
          </p>
        </div>

        {/* WORKFLOW 2 */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Workflow B — Manual cryptographic verification
        </h3>

        <p>
          This workflow is intended for advanced reviewers who require explicit
          control over the verification process.
        </p>

        <p>
          Typical steps include:
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Extract the signed payload from the PDF</li>
          <li>Extract the digital signature</li>
          <li>Recompute the canonical payload hash</li>
          <li>Verify the Ed25519 signature using the public key</li>
        </ol>

        <p>
          This process is fully offline and reproducible across platforms.
        </p>

        {/* WORKFLOW 3 */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Workflow C — Automated and scripted verification
        </h3>

        <p>
          For organizations processing large numbers of attestations,
          verification can be automated using scripts or internal tooling.
        </p>

        <p>
          Common characteristics:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>No dependency on Certif-Scope servers</li>
          <li>Batch verification support</li>
          <li>Deterministic results</li>
          <li>Suitable for CI, compliance pipelines and audits</li>
        </ul>

        <p>
          Implementation examples using Python, Node.js and CLI tools are
          provided in the next section.
        </p>

        {/* DESIGN PRINCIPLES */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Why multiple workflows are supported
        </h3>

        <p>
          Supporting multiple verification workflows ensures that:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Non-technical users can verify attestations easily</li>
          <li>Institutions retain control over verification</li>
          <li>Developers can integrate verification without vendor lock-in</li>
          <li>Verification remains valid even if Certif-Scope is unavailable</li>
        </ul>

        <p>
          All workflows converge on the same cryptographic truth, differing only
          in tooling and presentation.
        </p>
      </div>
    </section>
  );
}
