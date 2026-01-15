"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {/* Fix global du décalage pages — padding sous header fixe */}
      <main className="pt-24">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
