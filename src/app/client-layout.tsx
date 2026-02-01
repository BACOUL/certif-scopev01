"use client";

import { useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, []);

  return (
    <>
      {/* HEADER — EN ONLY */}
      <Header />

      {/* CONTENT */}
      <main className="pt-[110px]">
        {children}
      </main>

      {/* FOOTER — EN ONLY */}
      <Footer />

      <ScrollToTop />
    </>
  );
}
