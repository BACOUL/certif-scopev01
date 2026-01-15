"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* HEADER FIXE */}
      <Header />

      {/* OFFSET AUTOMATIQUE POUR TOUS LES ÉCRANS */}
      <main className="pt-[90px] md:pt-[100px] lg:pt-[110px]">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BOUTON SCROLL */}
      <ScrollToTop />
    </>
  );
}
