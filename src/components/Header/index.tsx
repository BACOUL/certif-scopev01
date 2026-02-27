// PATH: src/components/Header/index.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const isFR = useMemo(() => {
    if (!pathname) return false;
    return pathname === "/fr" || pathname.startsWith("/fr/");
  }, [pathname]);

  const href = useMemo(() => {
    const base = isFR ? "/fr" : "";
    return {
      home: `${base}/`,
      product: `${base}/product`,
      methodology: `${base}/product/methodology`,
      compliance: `${base}/product/compliance`,
      verify: `${base}/verify`,
      pricing: `${base}/pricing`,
      partners: `${base}/partners`,
      generate: `${base}/generate`,
    };
  }, [isFR]);

  const isActive = (target: string) => {
    if (!pathname) return false;
    // Normalize trailing slash issues
    const p = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    const t = target.endsWith("/") && target.length > 1 ? target.slice(0, -1) : target;
    return p === t;
  };

  const closeAll = () => {
    setDropdown(false);
    setOpen(false);
  };

  // Close menu when navigation event dispatched by ClientLayout
  useEffect(() => {
    const handler = () => closeAll();
    window.addEventListener("close-mobile-menu", handler);
    return () => window.removeEventListener("close-mobile-menu", handler);
  }, []);

  // Close menu when clicking outside
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

  // Close dropdown on Escape key
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
      <div className="w-full px-5 py-2 md:py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href={href.home}
          onClick={closeAll}
          aria-label="Home"
          data-i18n="nav.home"
        >
          <Image
            src="/logo.png"
            alt="Certif-Scope Logo"
            width={150}
            height={45}
            priority
            className="h-auto w-[140px] sm:w-[150px] md:w-[180px]"
          />
        </Link>

        {/* BURGER BUTTON */}
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

        {/* NAVIGATION */}
        <nav
          ref={navRef}
          id="main-navigation"
          aria-label="Main navigation"
          className={`
            absolute lg:static top-[60px] right-4
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
              <Link
                href={href.home}
                onClick={closeAll}
                data-i18n="nav.home"
                className={`font-medium ${
                  isActive(href.home)
                    ? "text-[#15B097]"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Home
              </Link>
            </li>

            {/* ATTESTATION DROPDOWN */}
            <li className="relative">
              <button
                ref={dropdownButtonRef}
                onClick={() => setDropdown(!dropdown)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                aria-controls="dropdown-attestation"
                data-i18n="nav.attestation"
                className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B097]"
              >
                CO₂e Attestation
                <span
                  aria-hidden="true"
                  className={`transition-transform ${dropdown ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {dropdown && (
                <div
                  ref={dropdownRef}
                  id="dropdown-attestation"
                  role="menu"
                  className="
                    absolute left-0 top-[55px] w-56 z-50
                    bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-700
                    rounded-lg shadow-lg p-3
                  "
                >
                  <Link
                    href={href.product}
                    onClick={closeAll}
                    role="menuitem"
                    data-i18n="nav.overview"
                    className="block py-2 text-sm hover:text-[#15B097] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B097]"
                  >
                    Overview
                  </Link>
                  <Link
                    href={href.methodology}
                    onClick={closeAll}
                    role="menuitem"
                    data-i18n="nav.methodology"
                    className="block py-2 text-sm hover:text-[#15B097] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B097]"
                  >
                    Methodology
                  </Link>
                  <Link
                    href={href.compliance}
                    onClick={closeAll}
                    role="menuitem"
                    data-i18n="nav.compliance"
                    className="block py-2 text-sm hover:text-[#15B097] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15B097]"
                  >
                    Compliance
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href={href.verify}
                onClick={closeAll}
                data-i18n="nav.verify"
                className={`font-medium ${
                  isActive(href.verify)
                    ? "text-[#15B097]"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Verify Attestation
              </Link>
            </li>

            <li>
              <Link
                href={href.pricing}
                onClick={closeAll}
                data-i18n="nav.pricing"
                className={`font-medium ${
                  isActive(href.pricing)
                    ? "text-[#15B097]"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href={href.partners}
                onClick={closeAll}
                data-i18n="nav.partners"
                className={`font-medium ${
                  isActive(href.partners)
                    ? "text-[#15B097]"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Partnerships
              </Link>
            </li>

            <li>
              <Link
                href={href.generate}
                onClick={closeAll}
                data-i18n="nav.generate"
                className={`font-medium ${
                  isActive(href.generate)
                    ? "text-[#15B097]"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Generate Attestation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
        }
