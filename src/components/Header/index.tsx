"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setNavbarOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3 md:py-4">

          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Certif-Scope"
              width={150}
              height={54}
              priority
              className="w-[135px] md:w-[150px]"
            />
          </Link>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Menu"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition"
          >
            <span
              className={`h-[3px] w-8 rounded bg-black dark:bg-white transition-all ${
                navbarOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-[3px] w-8 my-1 rounded bg-black dark:bg-white transition-all ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[3px] w-8 rounded bg-black dark:bg-white transition-all ${
                navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

          {/* Menu */}
          <nav
            className={`absolute right-6 top-full mt-3 w-[240px] rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700 shadow-xl p-5 transition-all duration-200 lg:static lg:mt-0 lg:w-auto lg:p-0 lg:bg-transparent lg:shadow-none lg:border-none lg:block ${
              navbarOpen ? "opacity-100 visible" : "opacity-0 invisible lg:visible lg:opacity-100"
            }`}
          >
            <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">

              {menuData.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={closeMenu}
                    className={`text-base font-medium transition ${
                      pathname === item.path
                        ? "text-[#1FB6C1]"
                        : "text-gray-800 dark:text-gray-200 hover:text-[#1FB6C1]"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* CTA desktop */}
              <Link
                href="/assessment"
                onClick={closeMenu}
                className="hidden lg:block bg-[#1FB6C1] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#18a8ad] transition"
              >
                Generate Attestation
              </Link>
            </ul>
          </nav>

          {/* Right zone */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggler />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
