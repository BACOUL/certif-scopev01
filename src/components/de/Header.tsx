"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function HeaderDE() {
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

  // Active state helper (kept simple)
  const isActive = (href: string) => pathname === href;

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
        <Link href="/de" onClick={closeAll} aria-label="Startseite">
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
          aria-label="Menü umschalten"
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
          aria-label="Hauptnavigation"
          className={`
            absolute lg:static top-[60px] right-4
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-lg lg:shadow-none
            p-5 lg:p-0
            w-60 lg:w-auto
            transition-all duration-200
            ${
              open
                ? "block opacity-100"
                : "hidden opacity-0 lg:block lg:opacity-100"
            }
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <li>
              <Link
                href="/de"
                onClick={closeAll}
                className={`font-medium ${
                  isActive("/de")
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Startseite
              </Link>
            </li>

            {/* WHY (DE exists) */}
            <li>
              <Link
                href="/de/why-companies-ask"
                onClick={closeAll}
                className={`font-medium ${
                  isActive("/de/why-companies-ask")
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Warum wird es verlangt?
              </Link>
            </li>

            {/* ATTESTATION DROPDOWN (EN fallback: /product/* not translated in DE) */}
            <li className="relative">
              <button
                ref={dropdownButtonRef}
                onClick={() => setDropdown(!dropdown)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                aria-controls="dropdown-attestation"
                className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FB6C1]"
              >
                CO₂e-Nachweis
                <span
                  aria-hidden="true"
                  className={`transition-transform ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdown && (
                <div
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
                    href="/product"
                    onClick={closeAll}
                    role="menuitem"
                    className="block py-2 text-sm hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FB6C1]"
                  >
                    Überblick (EN)
                  </Link>
                  <Link
                    href="/product/methodology"
                    onClick={closeAll}
                    role="menuitem"
                    className="block py-2 text-sm hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FB6C1]"
                  >
                    Methodik (EN)
                  </Link>
                  <Link
                    href="/product/compliance"
                    onClick={closeAll}
                    role="menuitem"
                    className="block py-2 text-sm hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FB6C1]"
                  >
                    Compliance & Umfang (EN)
                  </Link>
                </div>
              )}
            </li>

            {/* VERIFY (EN fallback) */}
            <li>
              <Link
                href="/verify"
                onClick={closeAll}
                className={`font-medium ${
                  isActive("/verify")
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Nachweis prüfen
              </Link>
            </li>

            {/* PRICING (DE exists) */}
            <li>
              <Link
                href="/de/pricing"
                onClick={closeAll}
                className={`font-medium ${
                  isActive("/de/pricing")
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Preise
              </Link>
            </li>

            {/* PARTNERS (EN fallback) */}
            <li>
              <Link
                href="/partners"
                onClick={closeAll}
                className={`font-medium ${
                  isActive("/partners")
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Partnerschaften
              </Link>
            </li>

            {/* GENERATE (EN fallback) */}
            <li>
              <Link
                href="/generate"
                onClick={closeAll}
                className={`font-medium ${
                  isActive("/generate")
                    ? "text-primary"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Nachweis erstellen
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
        }
