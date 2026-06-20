import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GermanPublicPage } from "../_components/GermanPublicPage";
import { germanStaticSlugs, getGermanPage } from "../_content/publicPages";

type GermanSlugPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return germanStaticSlugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: GermanSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGermanPage(slug);

  if (!page) {
    return {
      title: "Certif-Scope Deutschland",
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
      languages: {
        "de-DE": page.path,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      locale: "de_DE",
      siteName: "Certif-Scope",
      type: "website",
    },
  };
}

export default async function GermanSlugPage({ params }: GermanSlugPageProps) {
  const { slug } = await params;
  const page = getGermanPage(slug);

  if (!page) {
    notFound();
  }

  return <GermanPublicPage page={page} />;
}
