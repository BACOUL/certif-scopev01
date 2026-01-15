"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {/* HEADER FIXE */}
      <Header />

      {/* OFFSET ADAPTÉ */}
      <main
        className={
          isHome
            ? "pt-[40px] md:pt-[50px] lg:pt-[60px]"
            : "pt-[90px] md:pt-[100px] lg:pt-[110px]"
        }
      >
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BOUTON SCROLL */}
      <ScrollToTop />
    </>
  );
}
