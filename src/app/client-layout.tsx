"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* Ajustement dynamique pour mobile + desktop */}
      <main className="pt-[180px] md:pt-[100px]">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
