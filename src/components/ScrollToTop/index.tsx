"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <button
        onClick={scrollToTop}
        title="Scroll to top"
        aria-label="Scroll to top"
        role="button"
        className={`
          bg-[#1FB6C1] hover:bg-[#18A8AD] text-white 
          flex h-12 w-12 items-center justify-center
          rounded-full shadow-lg shadow-[#1FB6C1]/30
          transition-opacity duration-300 ease-out
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-[#1FB6C1]
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <span className="sr-only">Return to top of page</span>

        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="stroke-white"
          fill="none"
          strokeWidth="2"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
