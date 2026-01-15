"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <div className="pt-20 md:pt-24 lg:pt-28">
        {children}
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
