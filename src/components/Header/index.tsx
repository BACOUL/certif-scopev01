"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const closeAll = () => {
    setDropdown(false);
    setOpen(false);
  };

  // Close menu when navigation event dispatched by ClientLayout
  useEffect(() => {
    const handler = () => {
      setOpen(false);
      setDropdown(false);
    };
    window.addEventListener("close-mobile-menu", handler);
    return () => window.removeEventListener("close-mobile-menu", handler);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
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
  }, [open]);

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
        <Link href="/" onClick={closeAll} aria-label="Home" data-i18n="nav.home">
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

            {/* HOME */}
            <li>
              <Link
                href="/"
                onClick={closeAll}
                data-i18n="nav.home"
                className={`font-medium ${
                  pathname === "/" ? "text-primary" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Home
              </Link>
            </li>

            {/* ATTESTATION DROPDOWN */}
            <li className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                aria-controls="dropdown-attestation"
                data-i18n="nav.attestation"
                className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1"
              >
                CO₂e Attestation
                <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>▼</span>
              </button>

              {dropdown && (
                <div
                  id="dropdown-attestation"
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
                    data-i18n="nav.overview"
                    className="block py-2 text-sm hover:text-primary"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/product/methodology"
                    onClick={closeAll}
                    data-i18n="nav.methodology"
                    className="block py-2 text-sm hover:text-primary"
                  >
                    Methodology
                  </Link>
                  <Link
                    href="/product/methodology/compliance"
                    onClick={closeAll}
                    data-i18n="nav.compliance"
                    className="block py-2 text-sm hover:text-primary"
                  >
                    Compliance
                  </Link>
                </div>
              )}
            </li>

            {/* PRICING */}
            <li>
              <Link
                href="/pricing"
                onClick={closeAll}
                data-i18n="nav.pricing"
                className={`font-medium ${
                  pathname === "/pricing" ? "text-primary" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Pricing
              </Link>
            </li>

            {/* PARTNERS */}
            <li>
              <Link
                href="/partners"
                onClick={closeAll}
                data-i18n="nav.partners"
                className={`font-medium ${
                  pathname === "/partners" ? "text-primary" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Partnerships
              </Link>
            </li>

            {/* VERIFY */}
            <li>
              <Link
                href="/verify"
                onClick={closeAll}
                data-i18n="nav.verify"
                className={`font-medium ${
                  pathname === "/verify" ? "text-primary" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Verify Attestation
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
            }
