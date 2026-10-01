import { Pricing } from "@/components/international/Pages";
import { internationalCopy } from "@/lib/international-copy";
import { pageMetadata } from "@/lib/site-locales";
const c = internationalCopy.de;
export const metadata = pageMetadata("de", "pricing", c.pricingTitle, c.description);
export default function Page() { return <Pricing locale="de"/>; }
