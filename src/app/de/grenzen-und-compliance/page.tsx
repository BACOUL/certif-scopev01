import { Compliance } from "@/components/international/Pages";
import { internationalCopy } from "@/lib/international-copy";
import { pageMetadata } from "@/lib/site-locales";
const c = internationalCopy.de;
export const metadata = pageMetadata("de", "compliance", c.complianceTitle, c.description);
export default function Page() { return <Compliance locale="de"/>; }
