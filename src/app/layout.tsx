"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* FIXED HEADER */}
      <Header />

      {/* MAIN CONTENT WITH SAFE TOP PADDING */}
      <main className="pt-24 md:pt-28 min-h-screen overflow-x-hidden">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING SCROLL-TO-TOP BUTTON */}
      <ScrollToTop />
    </>
  );
}
