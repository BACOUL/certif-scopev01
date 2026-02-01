"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeAll = () => {
    setDropdown(false);
    setOpen(false);
  };

  useEffect(() => {
    const handler = () => closeAll();
    window.addEventListener("close-mobile-menu", handler);
    return () => window.removeEventListener("close-mobile-menu", handler);
  }, []);

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

  useEffect(() => {
    if (!dropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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
      {/* MOBILE HEIGHT = AI-DECLARED */}
      <div className="w-full px-5 py-1 md:py-4 flex items-center justify-between">

        {/* LOGO — SAME MOBILE SIZE AS AI-DECLARED */}
        <Link href="/" onClick={closeAll} aria-label="Home">
          <Image
            src="/logo.png"
            alt="Certif-Scope Logo"
            width={120}
            height={36}
            priority
            className="h-auto w-[110px] sm:w-[130px] md:w-[180px]"
          />
        </Link>

        {/* BURGER */}
        <button
          ref={burgerRef}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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
              open ? "opacity-0" : "opacity-100"
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
          aria-label="Main navigation"
          className={`
            absolute lg:static top-[48px] right-4
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-lg lg:shadow-none
            p-5 lg:p-0
            w-60 lg:w-auto
            transition-all duration-200
            ${open ? "block opacity-100" : "hidden opacity-0 lg:block lg:opacity-100"}
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">

            <li>
              <Link href="/" onClick={closeAll} className="font-medium">
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                ref={dropdownButtonRef}
                onClick={() => setDropdown(!dropdown)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                className="font-medium flex items-center gap-1"
              >
                CO₂e Attestation
                <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {dropdown && (
                <div
                  ref={dropdownRef}
                  className="
                    absolute left-0 top-[44px] w-56 z-50
                    bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-700
                    rounded-lg shadow-lg p-3
                  "
                >
                  <Link href="/product" onClick={closeAll} className="block py-2 text-sm">
                    Overview
                  </Link>
                  <Link href="/product/methodology" onClick={closeAll} className="block py-2 text-sm">
                    Methodology
                  </Link>
                  <Link
                    href="/product/methodology/compliance"
                    onClick={closeAll}
                    className="block py-2 text-sm"
                  >
                    Compliance
                  </Link>
                </div>
              )}
            </li>

            <li><Link href="/verify" onClick={closeAll}>Verify</Link></li>
            <li><Link href="/pricing" onClick={closeAll}>Pricing</Link></li>
            <li><Link href="/partners" onClick={closeAll}>Partnerships</Link></li>
            <li><Link href="/generate" onClick={closeAll}>Generate</Link></li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
