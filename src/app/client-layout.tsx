"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* ⚠️ IMPORTANT : padding-top pour compenser le header fixe */}
      <main className="pt-[80px]">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
