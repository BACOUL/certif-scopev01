// PATH: src/components/fr/FAQFR.tsx
"use client";

import { useId, useState } from "react";
import { FR_HOME_COPY, type HomeContent } from "@/lib/home-content-fr";

export default function FAQFR({ copy = FR_HOME_COPY }: { copy?: HomeContent }) {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) =>
    setOpen((current) => (current === i ? null : i));

  const items = copy.faq;

  return (
    <section
      id="faq"
      data-section="faq"
      className="relative w-full bg-white py-12 md:py-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F3FBFC]" />

      <div className="mx-auto max-w-4xl px-6">
        <p className="mx-auto mb-5 inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm md:text-xs">
          {copy.faqEyebrow}
        </p>

        <h2 className="mb-5 text-center text-3xl font-extrabold tracking-tight text-[#0B3A63] md:text-4xl">
          {copy.faqTitle}
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg leading-relaxed text-[#475569]">
          {copy.faqIntro}
        </p>

        <div className="space-y-4" role="list">
          {items.map((item, i) => {
            const btnId = `faq-fr-${uid}-btn-${i}`;
            const panelId = `faq-fr-${uid}-panel-${i}`;

            return (
              <div
                key={`faq-fr-${i}-${item.q}`}
                role="listitem"
                className="overflow-hidden rounded-[20px] border border-[#0B3A63]/10 bg-white shadow-sm"
              >
                <button
                  id={btnId}
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={panelId}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FB6C1]"
                >
                  <span className="font-semibold leading-relaxed text-[#0B3A63]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-xl font-semibold text-[#1FB6C1]"
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-6 pb-6 text-sm leading-relaxed text-[#475569] md:text-[15px]"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={copy.links.guide}
            className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B3A63] shadow-sm transition-colors hover:border-[#1FB6C1]/30 hover:text-[#1FB6C1]"
            aria-label={copy.guideLink}
          >
            {copy.guideLink}
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[20px] border border-[#0B3A63]/10 bg-white/90 p-5 shadow-sm md:p-6">
          <p className="text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            {copy.faqLimits}
          </p>
        </div>
      </div>
    </section>
  );
}
