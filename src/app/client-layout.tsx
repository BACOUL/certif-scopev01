// PATH: src/app/client-layout.tsx

"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderFR from "@/components/fr/Header";
import FooterFR from "@/components/fr/Footer";
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

  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname]);

  return (
    <>
      {/* HEADER — EN/FR */}
      {isFR ? <HeaderFR /> : <Header />}

      {/* CONTENT */}
      <main className="pt-[110px]">{children}</main>

      {/* FOOTER — EN/FR */}
      {isFR ? <FooterFR /> : <Footer />}

      <ScrollToTop />
    </>
  );
}
