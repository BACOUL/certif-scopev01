import Link from "next/link";
import { FR_HOME_COPY, type HomeContent } from "@/lib/home-content-fr";

export const INCLUDED_ITEMS = FR_HOME_COPY.included;

export default function OfferDetails({
  copy = FR_HOME_COPY,
}: {
  copy?: HomeContent;
}) {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-[#0B3A63]">{copy.includedTitle}</h3>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#475569]">
        {copy.included.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-sm leading-relaxed text-[#475569]">{copy.reuse}</p>
      <p className="text-sm leading-relaxed text-[#475569]">{copy.support}</p>
      <p className="text-sm leading-relaxed text-[#475569]">
        {copy.notIncluded}
      </p>
      <Link
        href={copy.links.contact}
        className="inline-block font-semibold text-[#0B3A63] underline"
      >
        {copy.contactLink}
      </Link>
    </div>
  );
}
