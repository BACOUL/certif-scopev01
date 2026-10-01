import Homepage from "./Homepage";
import Shell from "./Shell";
import type { EuHomeLocale } from "@/lib/eu-home-locales";

type LandingLocale = Exclude<EuHomeLocale, "fr" | "en" | "de">;

export default function EuropeanLanding({ locale }: { locale: LandingLocale }) {
  return (
    <Shell locale={locale}>
      <Homepage locale={locale} />
    </Shell>
  );
}
