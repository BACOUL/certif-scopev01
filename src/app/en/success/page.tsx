import Success from "@/components/international/Success";
import { pageMetadata } from "@/lib/site-locales";
import { internationalCopy } from "@/lib/international-copy";
export const metadata = pageMetadata(
  "en",
  "success",
  internationalCopy.en.nav.success,
  internationalCopy.en.description,
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  return (
    <Success
      locale="en"
      sessionId={
        typeof params.session_id === "string" ? params.session_id : null
      }
    />
  );
}
