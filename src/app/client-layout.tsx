// PATH: src/app/client-layout.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import HeaderFR from "@/components/fr/Header";
import FooterFR from "@/components/fr/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Close menu on navigation (mobile)
  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname]);

  // The commercial site is currently French-first. Keep client language coherent.
  useEffect(() => {
    document.documentElement.lang = "fr";

    try {
      localStorage.setItem("lang", "fr");
      localStorage.setItem("locale", "fr");
      localStorage.setItem("i18n.lang", "fr");
      localStorage.setItem("i18n.locale", "fr");
    } catch {
      // ignore private mode / blocked storage
    }
  }, []);

  return (
    <>
      <HeaderFR />

      <main className="pt-[110px]">{children}</main>

      <FooterFR />

      <ScrollToTop />
    </>
  );
}
