import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EuropeanLanding from "@/components/international/EuropeanLanding";
import {
  EU_HOME_COPY,
  EU_HOME_LOCALES,
  EU_OG_LOCALES,
  HOME_LANGUAGE_ALTERNATES,
  isEuHomeLocale,
  type EuHomeLocale,
} from "@/lib/eu-home-locales";

const FULL_PRODUCT_LOCALES = new Set<EuHomeLocale>(["fr", "en", "de"]);

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return EU_HOME_LOCALES.filter((locale) => !FULL_PRODUCT_LOCALES.has(locale)).map(
    (locale) => ({ locale }),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isEuHomeLocale(locale) || FULL_PRODUCT_LOCALES.has(locale)) return {};

  const copy = EU_HOME_COPY[locale as keyof typeof EU_HOME_COPY];
  const canonical = `https://www.certif-scope.com/${locale}/`;

  return {
    title: `${copy.title} | Certif-Scope`,
    description: copy.description,
    alternates: {
      canonical,
      languages: HOME_LANGUAGE_ALTERNATES,
    },
    openGraph: {
      type: "website",
      title: `${copy.title} | Certif-Scope`,
      description: copy.description,
      url: canonical,
      siteName: "Certif-Scope",
      locale: EU_OG_LOCALES[locale],
      images: [
        {
          url: "https://www.certif-scope.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Certif-Scope CO₂e attestation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${copy.title} | Certif-Scope`,
      description: copy.description,
      images: ["https://www.certif-scope.com/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleHome({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isEuHomeLocale(locale) || FULL_PRODUCT_LOCALES.has(locale)) notFound();

  return (
    <EuropeanLanding
      locale={locale as Exclude<EuHomeLocale, "fr" | "en" | "de">}
    />
  );
}
