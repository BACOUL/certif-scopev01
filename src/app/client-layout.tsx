// PATH: src/app/client-layout.tsx
"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeaderFR from "@/components/fr/Header";
import FooterFR from "@/components/fr/Footer";

import HeaderDE from "@/components/de/Header";
import FooterDE from "@/components/de/Footer";

import ScrollToTop from "@/components/ScrollToTop";

function detectLang(pathname: string | null): "en" | "fr" | "de" {
  if (!pathname) return "en";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  return "en";
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const lang = useMemo<"en" | "fr" | "de">(
    () => detectLang(pathname),
    [pathname]
  );

  // Close menu on navigation (mobile)
  useEffect(() => {
    const closeEvent = new Event("close-mobile-menu");
    window.dispatchEvent(closeEvent);
  }, [pathname]);

  // Hard-lock language on the client to prevent any i18n script
  // from re-applying a persisted FR locale when user is on /de.
  useEffect(() => {
    if (!pathname) return;

    // Ensure <html lang="..."> is coherent client-side too
    document.documentElement.lang = lang;

    // If any translation layer reads these keys, force them to current route lang
    try {
      localStorage.setItem("lang", lang);
      localStorage.setItem("locale", lang);
      localStorage.setItem("i18n.lang", lang);
      localStorage.setItem("i18n.locale", lang);
    } catch {
      // ignore (private mode / storage blocked)
    }
  }, [lang, pathname]);

  return (
    <>
      {/* HEADER */}
      {lang === "fr" ? <HeaderFR /> : lang === "de" ? <HeaderDE /> : <Header />}

      {/* CONTENT */}
      <main className="pt-[110px]">{children}</main>

      {/* FOOTER */}
      {lang === "fr" ? <FooterFR /> : lang === "de" ? <FooterDE /> : <Footer />}

      <ScrollToTop />
    </>
  );
}
