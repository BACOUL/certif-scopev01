// PATH: src/app/client-layout.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import HeaderFR from "@/components/fr/Header";
import FooterFR from "@/components/fr/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGermanRoute = pathname === "/de" || pathname.startsWith("/de/");
  const isEnglishRoute = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    document.documentElement.lang = isGermanRoute ? "de" : isEnglishRoute ? "en" : "fr";
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname, isGermanRoute, isEnglishRoute]);

  if (isGermanRoute || isEnglishRoute) {
    return (
      <>
        {children}
        <ScrollToTop />
      </>
    );
  }

  return (
    <>
      <HeaderFR />
      <main className="pt-[88px] lg:pt-[110px]">{children}</main>
      <FooterFR />
      <ScrollToTop />
    </>
  );
}
