"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* HEADER FIXE */}
      <Header />

      {/* OFFSET UNIFORME POUR TOUTES LES PAGES */}
      <main className="pt-[60px] md:pt-[70px] lg:pt-[80px]">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BOUTON SCROLL */}
      <ScrollToTop />
    </>
  );
}
