import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EuFlowShell from "@/components/international/EuFlowShell";
import EuVerify from "@/components/international/EuVerify";
import { getEuFlowCopy, isEuNonCoreLocale } from "@/lib/eu-flow";

type Params = Promise<{ locale: string }>;
type Search = Promise<{ v?: string }>;

type VerificationData = {
  certificateId?: string;
  issuer?: string;
  issuedAt?: string;
  validUntil?: string;
  methodVersion?: string;
  factorVersion?: string;
  algorithm?: string;
  hash?: string;
  signature?: string;
};

function decodeToken(token: string | undefined): VerificationData | null {
  if (!token) return null;
  try {
    const parsed = JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isEuNonCoreLocale(locale)) return {};
  return {
    title: `${getEuFlowCopy(locale).verify.title} | Certif-Scope`,
    robots: { index: false, follow: false },
  };
}

export default async function VerifyPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: Search;
}) {
  const { locale } = await params;
  if (!isEuNonCoreLocale(locale)) notFound();
  const query = await searchParams;
  const token = typeof query.v === "string" ? query.v : undefined;
  const data = decodeToken(token);
  return (
    <EuFlowShell locale={locale}>
      <EuVerify locale={locale} data={data} invalid={Boolean(token && !data)} />
    </EuFlowShell>
  );
}
