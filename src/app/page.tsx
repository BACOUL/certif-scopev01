import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Certif-Scope — version française prioritaire",
  description:
    "La version française de Certif-Scope est la version prioritaire du site.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/",
  },
  openGraph: {
    type: "website",
    title: "Certif-Scope — version française prioritaire",
    description:
      "La version française de Certif-Scope est la version prioritaire du site.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Home() {
  redirect("/fr");
}
