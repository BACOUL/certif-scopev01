"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  return (
    <header
      className={`top-0 left-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "fixed bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm"
          : "absolute bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3 md:py-4">

          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Certif-Scope"
              width={130}
              height={48}
              className="w-[120px] md:w-[130px]"
              priority
            />
          </Link>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Menu"
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-lg active:scale-95 transition"
          >
            <span
              className={`h-[3px] w-8 rounded bg-black dark:bg-white transition-all ${
                navbarOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-[3px] w-8 my-[7px] rounded bg-black dark:bg-white transition-all ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[3px] w-8 rounded bg-black dark:bg-white transition-all ${
                navbarOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <nav
            className={`absolute right-6 top-full mt-3 w-[260px] rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700 shadow-xl p-6 transition-all duration-300 lg:static lg:bg-transparent lg:shadow-none lg:border-none lg:p-0 lg:w-auto lg:flex lg:items-center ${
              navbarOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"
            }`}
          >
            <ul className="flex flex-col gap-5 lg:flex-row lg:gap-10">
              {menuData.map((item, index) => (
                <li key={index} className="relative">
                  {item.path ? (
                    <Link
                      href={item.path}
                      className={`text-base font-medium transition ${
                        pathname === item.path
                          ? "text-[#1FB6C1]"
                          : "text-gray-800 dark:text-gray-200 hover:text-[#1FB6C1]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <p
                        onClick={() => handleSubmenu(index)}
                        className="flex items-center justify-between cursor-pointer text-base font-medium text-gray-800 dark:text-gray-200 hover:text-[#1FB6C1]"
                      >
                        {item.title}
                        <svg width="22" height="22" fill="currentColor">
                          <path d="M6.3 8.8c.4-.4 1-.4 1.4 0L12 13.1l4.3-4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5-5-5c-.4-.4-.4-1 0-1.4z" />
                        </svg>
                      </p>

                      <div
                        className={`transition-all duration-300 ${
                          openIndex === index
                            ? "block"
                            : "hidden lg:block lg:opacity-0 lg:group-hover:opacity-100"
                        } lg:absolute lg:left-0 lg:mt-3 lg:w-[220px] lg:rounded-xl lg:shadow-xl lg:bg-white lg:dark:bg-gray-900 lg:p-4`}
                      >
                        {item.submenu &&
                          item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#1FB6C1]"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                      </div>
                    </>
                  )}
                </li>
              ))}

              <Link
                href="/assessment"
                className="hidden lg:inline-block bg-[#1FB6C1] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#18a8ad] transition"
              >
                Generate Attestation
              </Link>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggler />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
