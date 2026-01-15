"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* FIX ABSOLU — padding-top forcé */}
      <main className="!pt-[100px] relative z-0">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
