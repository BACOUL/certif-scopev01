"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* OFFSET AUTOMATIQUE POUR LE HEADER FIXE */}
      <main className="pt-16 md:pt-20 lg:pt-24">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
