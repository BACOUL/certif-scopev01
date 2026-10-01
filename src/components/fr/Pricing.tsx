import Link from "next/link";
import { FR_HOME_COPY, type HomeContent } from "@/lib/home-content-fr";
import OfferDetails from "@/components/fr/OfferDetails";

export default function PricingFR({
  copy = FR_HOME_COPY,
}: {
  copy?: HomeContent;
}) {
  return (
    <section id="pricing" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-center text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          {copy.priceTitle}
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 rounded-[30px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:grid-cols-[1fr_2fr] md:p-8">
          <div>
            <p className="text-5xl font-extrabold text-[#0B3A63]">89 €</p>
            <p className="mt-3 text-sm text-[#475569]">{copy.priceDetail}</p>
            <Link
              href={copy.links.generate}
              className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#0B3A63] px-6 py-3 font-semibold text-white transition hover:bg-[#082C4B]"
            >
              {copy.prepareDocument.replace(/89\s*€/g, "89\u00a0€")}
            </Link>
            <Link
              href={copy.links.packs}
              className="mt-4 inline-block font-semibold text-[#0B3A63] underline"
            >
              {copy.packsLink}
            </Link>
          </div>
          <OfferDetails copy={copy} />
        </div>
      </div>
    </section>
  );
}
