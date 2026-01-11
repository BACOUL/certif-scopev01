"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/40 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Certif-Scope"
            width={140}
            height={50}
            className="h-auto w-[135px]"
          />
        </Link>

        {/* MENU MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center"
        >
          <span className={`h-[3px] w-7 bg-current transition ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-[3px] w-7 bg-current transition my-1 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[3px] w-7 bg-current transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

        {/* NAVIGATION */}
        <nav
          className={`absolute lg:static top-full right-6 lg:right-auto mt-3 lg:mt-0 w-[230px] lg:w-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg lg:shadow-none border dark:border-none p-5 lg:p-0 transition ${
            open ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">

            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === "/" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/assessment"
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === "/assessment" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Assessment
              </Link>
            </li>

            <li>
              <Link
                href="/verify"
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === "/verify" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Verify
              </Link>
            </li>

            {/* CTA DESKTOP */}
            <li className="hidden lg:block">
              <Link
                href="/assessment"
                className="bg-[#1FB6C1] text-white font-semibold px-6 py-3 rounded-lg"
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
