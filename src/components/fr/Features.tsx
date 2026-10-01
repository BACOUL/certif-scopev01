"use client";

import Link from "next/link";
import { FR_HOME_COPY, type HomeContent } from "@/lib/home-content-fr";

export default function FeaturesFR({
  copy = FR_HOME_COPY,
}: {
  copy?: HomeContent;
}) {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#F8FAFC] py-12 md:py-16"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="bg-[#1FB6C1]/6 absolute left-[-8%] top-20 -z-10 h-60 w-60 rounded-full blur-3xl" />
      <div className="bg-[#0B3A63]/6 absolute bottom-10 right-[-6%] -z-10 h-80 w-80 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="features-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            {copy.featuresEyebrow}
          </p>

          <h2 className="features-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] [animation-delay:100ms] md:text-4xl">
            {copy.contents}
          </h2>

          <p className="features-reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#475569] [animation-delay:200ms] md:text-lg">
            {copy.featuresIntro}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="space-y-5">
            {copy.features.map((item, index) => (
              <div
                key={item.id}
                className="features-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
                style={{ animationDelay: `${340 + index * 100}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.45),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-[#1FB6C1]/10 blur-md" />
                    <div className="border-[#1FB6C1]/12 relative flex h-12 w-12 items-center justify-center rounded-2xl border bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                      {item.id}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[#0B3A63]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="features-reveal border-[#1FB6C1]/16 rounded-[26px] border bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-6 [animation-delay:760ms] md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                {copy.clarification}
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#475569] md:text-lg">
                {copy.limits}
              </p>
            </div>
          </div>
        </div>

        <div className="features-reveal mt-14 flex flex-col items-center justify-center gap-4 text-center [animation-delay:860ms]">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            {copy.ready}
          </p>

          <Link
            href={copy.links.methodology}
            className="border-[#0B3A63]/14 inline-flex min-h-[52px] items-center justify-center rounded-xl border bg-white px-7 py-3 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
          >
            {copy.methodologyLink}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .features-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .features-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .features-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 58, 99, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .features-reveal,
          .features-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
