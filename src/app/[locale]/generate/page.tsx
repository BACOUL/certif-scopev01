import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EuFlowShell from "@/components/international/EuFlowShell";
import EuAssessmentForm from "@/components/international/EuAssessmentForm";
import { EU_HOME_COPY } from "@/lib/eu-home-locales";
import { isEuNonCoreLocale, EU_COUNTRY_CODES, localizedCountryName } from "@/lib/eu-flow";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isEuNonCoreLocale(locale)) return {};
  const copy = EU_HOME_COPY[locale];
  return {
    title: `${copy.cta} | Certif-Scope`,
    description: copy.description,
    alternates: { canonical: `https://www.certif-scope.com/${locale}/generate/` },
    robots: { index: false, follow: true },
  };
}

export default async function GeneratePage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isEuNonCoreLocale(locale)) notFound();
  return (
    <EuFlowShell locale={locale}>
      <EuAssessmentForm locale={locale} countryOptions={EU_COUNTRY_CODES.map(code => ({
        code, label: localizedCountryName(locale, code),
      })).sort((a, b) => a.label.localeCompare(b.label, locale))} />
    </EuFlowShell>
  );
}
