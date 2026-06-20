import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../styles/index.css";
import { GermanFooter, GermanHeader } from "./_components/GermanPublicPage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    default: "Certif-Scope Deutschland",
    template: "%s | Certif-Scope Deutschland",
  },
  description:
    "Indikative CO2e-Bescheinigungen fuer deutsche KMU, Lieferanten und B2B-Anfragen.",
  metadataBase: new URL("https://www.certif-scope.com"),
};

export default function DELayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de-DE" suppressHydrationWarning>
      <body className="bg-white text-slate-950 antialiased">
        <GermanHeader />
        {children}
        <GermanFooter />
      </body>
    </html>
  );
}
