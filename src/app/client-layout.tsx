"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* Correct spacing for fixed header */}
      <div className="pt-[80px]">{children}</div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
