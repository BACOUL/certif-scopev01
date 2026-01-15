"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* OFFSET EXACT POUR LE HEADER FIXE (80px) */}
      <main className="pt-[80px]">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
