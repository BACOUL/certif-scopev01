import { Product } from "@/components/international/Pages";
import { internationalCopy } from "@/lib/international-copy";
import { pageMetadata } from "@/lib/site-locales";
const c = internationalCopy.de;
export const metadata = pageMetadata("de", "product", c.productTitle, c.description);
export default function Page() { return <Product locale="de"/>; }
