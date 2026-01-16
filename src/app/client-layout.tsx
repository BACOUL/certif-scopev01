"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname]);

  return (
    <>
      <Header />

      <main className="pt-[110px]">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
