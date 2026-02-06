"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function HeaderFR() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeAll = () => {
    setDropdown(false);
    setOpen(false);
  };

  // Fermeture automatique lors d’un changement de page
  useEffect(() => {
    const handler = () => closeAll();
    window.addEventListener("close-mobile-menu", handler);
    return () => window.removeEventListener("close-mobile-menu", handler);
  }, []);

  // Click extérieur
  useEffect(() => {
    if (!open && !dropdown) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target)
      ) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open, dropdown]);

  // Escape
  useEffect(() => {
    if (!dropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(false);
        dropdownButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dropdown]);

  return (
    <header
      id="site-header"
      role="banner"
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/95 dark:bg-gray-900/90
        backdrop-blur-md
        border-b border-gray-200 dark:border-gray-700
      "
    >
      <div className="w-full px-5 py-2 md:py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/fr" onClick={closeAll} aria-label="Accueil">
          <Image
            src="/logo.png"
            alt="Certif-Scope"
            width={180}
            height={50}
            priority
            className="h-auto w-[140px] sm:w-[150px] md:w-[180px]"
          />
        </Link>

        {/* BURGER */}
        <button
          ref={burgerRef}
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="main-navigation"
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center"
        >
          <span
            className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${
              open ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded my-1 transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${
              open ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>

        {/* NAV */}
        <nav
          ref={navRef}
          id="main-navigation"
          aria-label="Navigation principale"
          className={`
            absolute lg:static top-[60px] right-4
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-lg lg:shadow-none
            p-5 lg:p-0
            w-64 lg:w-auto
            transition-all
            ${open ? "block" : "hidden lg:block"}
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <li>
              <Link
                href="/fr"
                onClick={closeAll}
                className={`font-medium ${
                  pathname === "/fr"
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Accueil
              </Link>
            </li>

            {/* DROPDOWN */}
            <li className="relative">
              <button
                ref={dropdownButtonRef}
                onClick={() => setDropdown(!dropdown)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1"
              >
                Attestation CO₂e
                <span
                  className={`transition-transform ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdown && (
                <div
                  role="menu"
                  className="
                    absolute left-0 top-[55px] w-64 z-50
                    bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-700
                    rounded-lg shadow-lg p-3
                  "
                >
                  <Link
                    href="/fr/product"
                    onClick={closeAll}
                    className="block py-2 text-sm hover:text-primary"
                  >
                    Présentation
                  </Link>
                  <Link
                    href="/fr/product/methodology"
                    onClick={closeAll}
                    className="block py-2 text-sm hover:text-primary"
                  >
                    Méthodologie
                  </Link>

                  {/* FIX: Compliance FR route */}
                  <Link
                    href="/fr/product/compliance"
                    onClick={closeAll}
                    className="block py-2 text-sm hover:text-primary"
                  >
                    Cadre &amp; conformité
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/fr/verify" onClick={closeAll}>
                Vérifier une attestation
              </Link>
            </li>
            <li>
              <Link href="/fr/pricing" onClick={closeAll}>
                Tarification
              </Link>
            </li>
            <li>
              <Link href="/fr/partners" onClick={closeAll}>
                Partenariats
              </Link>
            </li>
            <li>
              <Link href="/fr/generate" onClick={closeAll}>
                Générer une attestation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
```0
