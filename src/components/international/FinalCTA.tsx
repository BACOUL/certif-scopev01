import Link from "next/link";
import type { HomeContent } from "@/lib/home-content-fr";

export default function FinalCTA({ copy }: { copy: HomeContent }) {
  return (
    <section
      id="final-cta"
      data-section="final-cta"
      className="relative overflow-hidden bg-[#F8FAFC] py-12 md:py-16"
      aria-label={copy.finalTitle}
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="bg-[#1FB6C1]/6 absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full blur-3xl" />
      <div className="bg-[#0B3A63]/6 absolute bottom-10 right-[-6%] -z-10 h-80 w-80 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70 md:text-sm">
                {copy.finalEyebrow}
              </p>

              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                {copy.finalTitle}
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#0B3A63]/80">
                {copy.finalIntro}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={copy.links.generate}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0B3A63] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63]"
                >
                  {copy.finalGenerate}
                </Link>

                <Link
                  href={copy.links.pricing}
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  {copy.pricingLink}
                </Link>

                <Link
                  href={copy.links.guide}
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/20 px-4 py-3 text-sm font-medium text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8FAFC]"
                >
                  {copy.finalGuide}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#0B3A63]">
                  {copy.scopeTitle}
                </h3>

                <ul className="ml-6 list-disc space-y-2 text-sm text-[#0B3A63]/80">
                  {copy.scopeItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={copy.links.verify}
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-white"
                  >
                    {copy.verifyLink}
                  </Link>

                  <Link
                    href={copy.links.privacy}
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-white"
                  >
                    {copy.privacyLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#main-content"
              className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-[#F8FAFC]"
            >
              {copy.backTop}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
