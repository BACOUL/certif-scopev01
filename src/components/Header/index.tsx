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
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/40 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} aria-label="Certif-Scope Home">
          <Image
            src="/logo.png"
            alt="Certif-Scope Logo"
            width={140}
            height={50}
            priority
            className="h-auto w-[135px]"
          />
        </Link>

        {/* MOBILE MENU */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center"
        >
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-100 rounded transition-transform duration-300 ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-100 rounded my-1 transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-100 rounded transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

        {/* MENU */}
        <nav
          id="main-navigation"
          role="navigation"
          className={`absolute lg:static top-full right-6 lg:right-auto mt-3 lg:mt-0 w-[260px] lg:w-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg lg:shadow-none border dark:border-none p-5 lg:p-0 transition-all duration-200 ${
            open
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none lg:opacity-100 lg:visible lg:pointer-events-auto"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">

            {/* HOME */}
            <li>
              <Link
                href="/"
                onClick={closeAll}
                className={`text-base font-medium hover:text-[#1FB6C1] transition ${
                  pathname === "/" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Home
              </Link>
            </li>

            {/* ATTESTATION MENU */}
            <li className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                className="flex items-center gap-1 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-[#1FB6C1] transition"
              >
                CO₂e Document
                <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>▼</span>
              </button>

              <div
                role="menu"
                className={`${dropdown ? "block" : "hidden"} absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-3 z-50`}
              >
                <Link
                  href="/product"
                  onClick={closeAll}
                  role="menuitem"
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                >
                  What You Receive
                </Link>

                <Link
                  href="/product/methodology"
                  onClick={closeAll}
                  role="menuitem"
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                >
                  How It’s Generated
                </Link>

                <Link
                  href="/product/regulations"
                  onClick={closeAll}
                  role="menuitem"
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                >
                  Compliance & Limitations
                </Link>
              </div>
            </li>

            {/* PRICING */}
            <li>
              <Link
                href="/pricing"
                onClick={closeAll}
                className={`text-base font-medium hover:text-[#1FB6C1] transition ${
                  pathname === "/pricing" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Pricing
              </Link>
            </li>

            {/* VERIFY */}
            <li>
              <Link
                href="/verify"
                onClick={closeAll}
                className={`text-base font-medium hover:text-[#1FB6C1] transition ${
                  pathname === "/verify" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Verify a Document
              </Link>
            </li>

            {/* CTA */}
            <li className="hidden lg:block">
              <Link
                href="/assessment"
                className="bg-[#1FB6C1] text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
              >
                Generate My CO₂e Document
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
                }
