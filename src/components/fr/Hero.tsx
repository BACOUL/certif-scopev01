"use client";

import Image from "next/image";
import Link from "next/link";
import { FR_HOME_COPY, type HomeContent } from "@/lib/home-content-fr";
import MethodologyBadge from "@/components/MethodologyBadge";

function HeroVisual({ copy }: { copy: HomeContent }) {
  return (
    <div className="relative mx-auto max-w-[780px]">
      <Image
        itemProp="primaryImageOfPage"
        src={copy.image}
        alt={copy.sampleAlt}
        width={778}
        height={1100}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}

export default function Hero({ copy = FR_HOME_COPY }: { copy?: HomeContent }) {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative overflow-hidden bg-[#F8FAFC]"
    >
      <span className="sr-only" itemProp="alternativeHeadline">
        {copy.alternativeHeadline}
      </span>

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-8 md:pb-20 md:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <MethodologyBadge locale={copy.locale} />

            <h1
              itemProp="headline"
              className="hero-reveal mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-[#0B3A63] [animation-delay:120ms] md:text-5xl lg:mx-0 lg:text-5xl"
            >
              {copy.hero}
              <br />
              {copy.heroSecond}
            </h1>

            <p
              itemProp="description"
              className="hero-reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#0B3A63]/80 [animation-delay:220ms] md:text-lg lg:mx-0"
            >
              {copy.description}
            </p>

            <div className="hero-reveal mt-8 flex flex-col items-center justify-center gap-3 [animation-delay:320ms] sm:flex-row lg:justify-start">
              <Link
                href={copy.links.generate}
                aria-label={copy.generate.replace(/89\s*€/g, "89\u00a0€")}
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-lg bg-[#0B3A63] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:shadow-[0_18px_36px_rgba(11,58,99,0.18)] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2 sm:w-auto md:px-10"
              >
                {copy.generate.replace(/89\s*€/g, "89\u00a0€")}
              </Link>

              <a
                href={copy.links.sample}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.sample}
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-lg border border-[#0B3A63]/20 bg-white px-8 py-4 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2 sm:w-auto"
              >
                {copy.sample}
              </a>
            </div>

            <div className="hero-scale mt-8 lg:hidden">
              <HeroVisual copy={copy} />
            </div>

            <div className="hero-reveal mt-7 flex flex-wrap items-center justify-center gap-3 [animation-delay:420ms] lg:justify-start">
              {copy.badges.map((item) => (
                <span
                  key={item}
                  className="border-[#0B3A63]/12 rounded-lg border bg-white px-4 py-2 text-xs font-semibold text-[#0B3A63] shadow-sm md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-scale relative hidden lg:block lg:pl-4">
            <HeroVisual copy={copy} />
          </div>
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

        @keyframes revealScale {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .hero-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-scale {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.18s
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-scale {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
