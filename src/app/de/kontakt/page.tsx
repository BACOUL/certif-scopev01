import { Contact } from "@/components/international/Pages";
import { internationalCopy } from "@/lib/international-copy";
import { pageMetadata } from "@/lib/site-locales";
const c = internationalCopy.de;
export const metadata = pageMetadata("de", "contact", c.contactTitle, c.description);
export default function Page() { return <Contact locale="de"/>; }
