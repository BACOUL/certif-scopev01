import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EuFlowShell from "@/components/international/EuFlowShell";
import EuSuccess from "@/components/international/EuSuccess";
import { getEuFlowCopy, isEuNonCoreLocale } from "@/lib/eu-flow";

type Params = Promise<{ locale: string }>;
type Search = Promise<{ session_id?: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isEuNonCoreLocale(locale)) return {};
  return {
    title: `${getEuFlowCopy(locale).success.title} | Certif-Scope`,
    robots: { index: false, follow: false },
  };
}

export default async function SuccessPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: Search;
}) {
  const { locale } = await params;
  if (!isEuNonCoreLocale(locale)) notFound();
  const query = await searchParams;
  return (
    <EuFlowShell locale={locale}>
      <EuSuccess locale={locale} sessionId={typeof query.session_id === "string" ? query.session_id : null} />
    </EuFlowShell>
  );
}
