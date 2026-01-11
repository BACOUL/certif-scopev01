"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(window.scrollY > 300);
      }, 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="bg-[#1FB6C1] hover:bg-[#18a8ad] text-white flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition"
        >
          <span className="block h-3 w-3 rotate-45 border-t-2 border-l-2 border-white"></span>
        </button>
      )}
    </div>
  );
}
