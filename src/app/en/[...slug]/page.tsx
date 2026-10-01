import { notFound } from "next/navigation";
import {
  Product,
  Pricing,
  Methodology,
  Compliance,
  Contact,
  Verify,
} from "@/components/international/Pages";
import AssessmentForm from "@/components/international/AssessmentForm";
import Policy, {
  policyTitle,
  type PolicyKey,
} from "@/components/international/Policies";
import { internationalCopy } from "@/lib/international-copy";
import { formCopy } from "@/lib/form-copy";
import { pageMetadata, type PageKey } from "@/lib/site-locales";
const routeKeys: Record<string, PageKey> = {
  generate: "generate",
  product: "product",
  pricing: "pricing",
  "product/methodology": "methodology",
  "product/compliance": "compliance",
  verify: "verify",
  "verify/demo": "verify",
  contact: "contact",
  legal: "legal",
  privacy: "privacy",
  terms: "terms",
  cookies: "cookies",
  "data-processing": "data",
};
const c = internationalCopy.en;
type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ v?: string }>;
};
export async function generateMetadata({ params }: Props) {
  const key = routeKeys[(await params).slug.join("/")];
  if (!key) notFound();
  const titles: Partial<Record<PageKey, string>> = {
    product: c.productTitle,
    pricing: c.pricingTitle,
    methodology: c.methodTitle,
    compliance: c.complianceTitle,
    contact: c.contactTitle,
    verify: c.verifyTitle,
    generate: formCopy.en.title,
  };
  return pageMetadata(
    "en",
    key,
    titles[key] || policyTitle(key as PolicyKey),
    c.description,
  );
}
export default async function Page({ params, searchParams }: Props) {
  const route = (await params).slug.join("/");
  const key = routeKeys[route];
  if (!key) notFound();
  if (key === "generate") return <AssessmentForm locale="en" />;
  if (key === "product") return <Product locale="en" />;
  if (key === "pricing") return <Pricing locale="en" />;
  if (key === "methodology") return <Methodology locale="en" />;
  if (key === "compliance") return <Compliance locale="en" />;
  if (key === "contact") return <Contact locale="en" />;
  if (key === "verify") {
    const query = await searchParams;
    return (
      <Verify
        locale="en"
        token={
          route.endsWith("/demo")
            ? undefined
            : typeof query.v === "string"
              ? query.v
              : undefined
        }
      />
    );
  }
  return <Policy page={key as PolicyKey} />;
}
