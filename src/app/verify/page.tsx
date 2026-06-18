import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function VerifyRedirectPage() {
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language")?.toLowerCase() || "";

  for (const language of acceptLanguage.split(",")) {
    const tag = language.trim().split(";")[0];

    if (tag === "de" || tag.startsWith("de-")) {
      redirect("/de/verify");
    }

    if (tag === "fr" || tag.startsWith("fr-")) {
      redirect("/fr/verify");
    }
  }

  redirect("/fr/verify");
}
