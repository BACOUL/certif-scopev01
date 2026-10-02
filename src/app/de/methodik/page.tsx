import { Methodology } from "@/components/international/Pages";
import { internationalCopy } from "@/lib/international-copy";
import { pageMetadata } from "@/lib/site-locales";
const c = internationalCopy.de;
export const metadata = pageMetadata("de", "methodology", c.methodTitle, c.description);
export default function Page() { return <Methodology locale="de"/>; }
