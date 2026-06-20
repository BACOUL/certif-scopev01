import type { Metadata } from "next";
import { GermanPublicPage } from "./_components/GermanPublicPage";
import { homePage } from "./_content/publicPages";

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description,
  alternates: {
    canonical: "/de/",
    languages: {
      "de-DE": "/de/",
    },
  },
  openGraph: {
    title: homePage.title,
    description: homePage.description,
    url: "/de/",
    locale: "de_DE",
    siteName: "Certif-Scope",
    type: "website",
  },
};

export default function GermanHomePage() {
  return <GermanPublicPage page={homePage} />;
}
