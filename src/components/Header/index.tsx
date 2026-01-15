"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setDropdown(false);
  };

  return (
    <header
      itemScope
      itemType="https://schema.org/WPHeader"
      className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 h-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} aria-label="Home">
          <Image
            src="/logo.png"
            alt="Certif-Scope — CO₂e Attestation Platform"
            width={200}
            height={60}
            priority
            className="w-40 md:w-48 h-auto"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-controls="main-nav"
          aria-expanded={open}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center transition-transform duration-300"
        >
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded my-1 transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

        {/* NAVIGATION */}
        <nav
          id="main-nav"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          role="navigation"
          aria-label="Main navigation"
          className={`
            fixed lg:static top-20 right-4 w-[260px] lg:w-auto
            bg-white dark:bg-gray-900 rounded-xl shadow-lg lg:shadow-none
            border border-gray-200 dark:border-gray-700 p-5 lg:p-0
            transition-all duration-200
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}
            lg:opacity-100 lg:visible
          `}
        >
          <ul role="menubar" className="flex flex-col lg:flex-row gap-4 lg:gap-8">

            {/* HOME */}
            <li role="none">
              <Link
                role="menuitem"
                href="/"
                onClick={closeAll}
                className={`font-medium ${pathname === "/" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}
              >
                Home
              </Link>
            </li>

            {/* DROPDOWN */}
            <li role="none" className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                className="flex items-center gap-1 font-medium text-gray-800 dark:text-gray-200"
              >
                CO₂e Attestation
                <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>▼</span>
              </button>

              <div
                className={`
                  ${dropdown ? "block" : "hidden"}
                  absolute lg:static left-0 mt-2 lg:mt-0 w-56
                  bg-white dark:bg-gray-900 rounded-lg shadow-lg
                  border border-gray-200 dark:border-gray-700 p-3
                `}
              >
                <Link
                  href="/product"
                  onClick={closeAll}
                  className="block py-2 text-sm hover:text-[#1FB6C1]"
                >
                  Overview — What You Receive
                </Link>

                <Link
                  href="/product/methodology"
                  onClick={closeAll}
                  className="block py-2 text-sm hover:text-[#1FB6C1]"
                >
                  Methodology — How It’s Generated
                </Link>

                <Link
                  href="/product/methodology/compliance"
                  onClick={closeAll}
                  className="block py-2 text-sm hover:text-[#1FB6C1]"
                >
                  Compliance — Legal Limits
                </Link>
              </div>
            </li>

            {/* PRICING */}
            <li role="none">
              <Link
                href="/pricing"
                onClick={closeAll}
                className={`font-medium ${pathname === "/pricing" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}
              >
                Pricing
              </Link>
            </li>

            {/* PARTNERS */}
            <li role="none">
              <Link
                href="/partners"
                onClick={closeAll}
                className={`font-medium ${pathname === "/partners" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}
              >
                Partnerships
              </Link>
            </li>

            {/* VERIFY */}
            <li role="none">
              <Link
                href="/verify"
                onClick={closeAll}
                className={`font-medium ${pathname === "/verify" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}
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
