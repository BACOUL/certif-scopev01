"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
      className="
        fixed top-0 left-0 w-full z-50 
        bg-white/95 dark:bg-gray-900/90 
        backdrop-blur-md 
        border-b border-gray-200 dark:border-gray-700
      "
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} aria-label="Home">
          <Image
            src="/logo.png"
            alt="Certif-Scope Logo"
            width={150}
            height={45}
            priority
            className="h-auto w-[150px] md:w-[180px]"
          />
        </Link>

        {/* BURGER MENU */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center"
        >
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded my-1 transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

        {/* NAVIGATION */}
        <nav
          className={`
            absolute lg:static top-[72px] right-4 
            bg-white dark:bg-gray-900 
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-lg lg:shadow-none
            p-5 lg:p-0 
            w-60 lg:w-auto
            transition-all duration-200
            ${open ? "visible opacity-100" : "invisible opacity-0 lg:visible lg:opacity-100"}
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">

            {/* HOME */}
            <li>
              <Link
                href="/"
                onClick={closeAll}
                className={`font-medium ${pathname === "/" ? "text-primary" : "text-gray-800 dark:text-gray-200"}`}
              >
                Home
              </Link>
            </li>

            {/* DROPDOWN */}
            <li className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1"
              >
                CO₂e Attestation
                <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>▼</span>
              </button>

              {dropdown && (
                <div className="
                  absolute left-0 top-8 w-56 z-50 
                  bg-white dark:bg-gray-900
                  border border-gray-200 dark:border-gray-700
                  rounded-lg shadow-lg p-3
                ">
                  <Link href="/product" onClick={closeAll} className="block py-2 text-sm hover:text-primary">
                    Overview
                  </Link>
                  <Link href="/product/methodology" onClick={closeAll} className="block py-2 text-sm hover:text-primary">
                    Methodology
                  </Link>
                  <Link href="/product/methodology/compliance" onClick={closeAll} className="block py-2 text-sm hover:text-primary">
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
                className={`font-medium ${pathname === "/pricing" ? "text-primary" : "text-gray-800 dark:text-gray-200"}`}
              >
                Pricing
              </Link>
            </li>

            {/* PARTNERS */}
            <li>
              <Link
                href="/partnerships"
                onClick={closeAll}
                className={`font-medium ${pathname === "/partnerships" ? "text-primary" : "text-gray-800 dark:text-gray-200"}`}
              >
                Partnerships
              </Link>
            </li>

            {/* VERIFY */}
            <li>
              <Link
                href="/verify"
                onClick={closeAll}
                className={`font-medium ${pathname === "/verify" ? "text-primary" : "text-gray-800 dark:text-gray-200"}`}
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
