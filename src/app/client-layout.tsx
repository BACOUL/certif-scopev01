"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* OFFSET FIX: prevents content jumping under header */}
      <main className="pt-[110px]">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
