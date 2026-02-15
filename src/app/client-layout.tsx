// PATH: src/app/client-layout.tsx
"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeaderFR from "@/components/fr/Header";
import FooterFR from "@/components/fr/Footer";

import HeaderDE from "@/components/de/Header";
import FooterDE from "@/components/de/Footer";

import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const lang = useMemo<"en" | "fr" | "de">(() => {
    if (!pathname) return "en";
    if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
    if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
    return "en";
  }, [pathname]);

  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname]);

  return (
    <>
      {/* HEADER */}
      {lang === "fr" ? <HeaderFR /> : lang === "de" ? <HeaderDE /> : <Header />}

      {/* CONTENT */}
      <main className="pt-[110px]">{children}</main>

      {/* FOOTER */}
      {lang === "fr" ? <FooterFR /> : lang === "de" ? <FooterDE /> : <Footer />}

      <ScrollToTop />
    </>
  );
}
