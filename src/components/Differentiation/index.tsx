export default function Differentiation() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE — H2 unique */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          Why SMEs Choose Certif-Scope
        </h2>

        {/* INTRO — unique, non répétitif */}
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope provides a unified way for SMEs to supply CO₂e information when required
          by buyers, banks or insurers. One standardized document, generated instantly from
          transparent financial inputs — without surveys, consultants or technical reporting.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* GRID — clarity & uniqueness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* BLOCK 1 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg 
              className="h-12 w-12 text-[#1FB6C1] mb-4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              viewBox="0 0 24 24"
              role="img"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Uniform structure</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Every supplier presents CO₂e information in the same format, simplifying evaluation
              and eliminating layout inconsistencies that slow down institutional workflows.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg 
              className="h-12 w-12 text-[#1FB6C1] mb-4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              viewBox="0 0 24 24"
              role="img"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Minimal workload</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              One spending input per year is enough. No operational data and no repeated requests
              from buyers or compliance teams, reducing delays and administrative burden.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg 
              className="h-12 w-12 text-[#1FB6C1] mb-4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              viewBox="0 0 24 24"
              role="img"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Optimised for review</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Information is formatted specifically for procurement, banking and ESG screening,
              making evaluation straightforward and reducing follow-up questions.
            </p>
          </div>

        </div>

        {/* FOOTER STATEMENT — unique, non dupliqué */}
        <p className="mt-16 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Certif-Scope standardises CO₂e information exchange across suppliers, improving clarity
          for reviewers and reducing friction for small businesses.
        </p>

      </div>
    </section>
  );
      }
