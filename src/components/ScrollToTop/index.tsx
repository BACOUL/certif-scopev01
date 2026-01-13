"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setVisible(prev => (prev !== shouldShow ? shouldShow : prev));
    };

    // Use RAF for smoother updates
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className={`bg-[#1FB6C1] hover:bg-[#18a8ad] text-white flex h-11 w-11 
          items-center justify-center rounded-full shadow-lg transition
          transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <span className="block h-3 w-3 rotate-45 border-t-2 border-l-2 border-white"></span>
      </button>
    </div>
  );
}
