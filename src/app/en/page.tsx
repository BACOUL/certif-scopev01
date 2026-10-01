import { Home } from "@/components/international/Pages";
import { internationalCopy } from "@/lib/international-copy";
import { pageMetadata } from "@/lib/site-locales";
const c = internationalCopy.en;
export const metadata = pageMetadata("en", "home", c.heroSecond, c.description);
export default function Page() {
  return <Home locale="en" />;
}
