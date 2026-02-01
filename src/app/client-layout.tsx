"use client";

import { useEffect } from "react";
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

  const isFR = pathname.startsWith("/fr");

  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname]);

  return (
    <>
      {/* HEADER */}
      {isFR ? <HeaderFR /> : <Header />}

      {/* CONTENT */}
      <main className="pt-[110px]">
        {children}
      </main>

      {/* FOOTER */}
      {isFR ? <FooterFR /> : <Footer />}

      <ScrollToTop />
    </>
  );
}
