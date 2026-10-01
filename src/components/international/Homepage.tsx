import Link from "next/link";
import Hero from "@/components/fr/Hero";
import UseCaseDecisionTable from "@/components/fr/UseCaseDecisionTable";
import Features from "@/components/fr/Features";
import HowItWorks from "@/components/fr/HowItWorks";
import Pricing from "@/components/fr/Pricing";
import FAQ from "@/components/fr/FAQ";
import FinalCTA from "./FinalCTA";
import { getHomeContent } from "@/lib/home-content";
import type { EuHomeLocale } from "@/lib/eu-home-locales";

export default function Homepage({ locale }: { locale: EuHomeLocale }) {
  const copy = getHomeContent(locale);
  return (
    <>
      <Hero copy={copy} />
      <UseCaseDecisionTable copy={copy} />
      <Features copy={copy} />
      <HowItWorks copy={copy} />
      <section id="before-payment" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-bold text-[#0B3A63]">{copy.doubt}</h2>
        <p className="mt-3 max-w-3xl text-gray-700">{copy.doubtText}</p>
        <div className="mt-5 flex flex-wrap gap-5">
          <Link
            className="font-semibold text-[#0B3A63] underline"
            href={copy.links.contact}
          >
            {copy.contact}
          </Link>
          <Link
            className="font-semibold text-[#0B3A63] underline"
            href={copy.links.methodology}
          >
            {copy.calculation}
          </Link>
        </div>
      </section>
      <Pricing copy={copy} />
      <FAQ copy={copy} />
      <FinalCTA copy={copy} />
    </>
  );
}
