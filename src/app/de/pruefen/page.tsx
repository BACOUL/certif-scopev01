import { Verify } from "@/components/international/Pages";
import { pageMetadata } from "@/lib/site-locales";
import { internationalCopy } from "@/lib/international-copy";
export const metadata = pageMetadata("de", "verify", internationalCopy.de.verifyTitle, internationalCopy.de.verifyIntro);
export default async function Page({searchParams}: {searchParams: Promise<{v?: string}>}) { const params = await searchParams; return <Verify locale="de" token={typeof params.v === "string" ? params.v : undefined}/>; }
