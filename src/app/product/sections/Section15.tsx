"use client";

export default function Section15() {
  return (
    <section
      id="s15"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — premium white layout */}
      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          15. Maintenance & Update Policy
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope ensures long-term operational stability through a structured update
          policy covering document formatting, database integrity, platform security and
          change-control documentation. Updates are incremental, versioned, and communicated
          transparently to maintain strict institutional consistency and prevent disruption
          in procurement, banking or compliance workflows.
        </p>
      </div>

      {/* THREE-COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Controlled Versioning
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            A strict versioning system ensures that institutions always understand which
            version of the document structure or data logic is being used.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>• Semantic versioning applied</li>
            <li>• Change-log maintained</li>
            <li>• Backward compatibility preserved</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Continuous Integrity Checks
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Data consistency and platform stability are monitored systematically to prevent
            structural variations that could cause institutional rejections.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>• Automated consistency scans</li>
            <li>• Internal validation rules maintained</li>
            <li>• Document layout checked before release</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Institutional Stability
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Formatting and field placement remain stable across versions to avoid disruptions
            in automated procurement platforms or document ingestion systems.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>• Minimal-impact update strategy</li>
            <li>• Predictable field placement</li>
            <li>• No structural experimentation</li>
          </ul>
        </div>
      </div>

      {/* DEEP TECHNICAL EXPLANATION */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Update Lifecycle & Change Control
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Updates follow a documented lifecycle including internal validation, controlled rollout,
          version tagging and impact assessment. Stability takes priority over new features. 
          Every adjustment is evaluated to ensure uninterrupted compatibility with administrative 
          systems and institutional review processes.
        </p>

        <ul className="mt-6 text-white/85 text-sm space-y-2 relative z-10">
          <li>• Internal validation before deployment</li>
          <li>• Document formatting locked except for mandatory improvements</li>
          <li>• Impact assessment against procurement & financial workflows</li>
        </ul>
      </div>

      {/* RETURN BUTTON — strictly identical to all sections */}
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
