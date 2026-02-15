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

  const isFR = useMemo(() => {
    if (!pathname) return false;
    return pathname === "/fr" || pathname.startsWith("/fr/");
  }, [pathname]);

  const isDE = useMemo(() => {
    if (!pathname) return false;
    return pathname === "/de" || pathname.startsWith("/de/");
  }, [pathname]);

  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname]);

  const HeaderComponent = isDE ? HeaderDE : isFR ? HeaderFR : Header;
  const FooterComponent = isDE ? FooterDE : isFR ? FooterFR : Footer;

  return (
    <>
      {/* HEADER — EN/FR/DE */}
      <HeaderComponent />

      {/* CONTENT */}
      <main className="pt-[110px]">{children}</main>

      {/* FOOTER — EN/FR/DE */}
      <FooterComponent />

      <ScrollToTop />
    </>
  );
}
