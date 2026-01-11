"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="bg-primary/80 hover:shadow-signUp flex h-10 w-10 items-center justify-center rounded-md text-white shadow-md cursor-pointer transition"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
        </button>
      )}
    </div>
  );
}
