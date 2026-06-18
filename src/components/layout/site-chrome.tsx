"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";

export function SiteChrome() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out when scrolled past 10% of viewport height
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`pointer-events-none fixed inset-x-0 top-0 z-30 pt-4 md:pt-6 transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container className="flex h-14 items-center justify-between">
        <div className={`transition-all duration-700 delay-100 ${isVisible ? "pointer-events-auto transform translate-y-0" : "pointer-events-none transform -translate-y-4"}`}>
          <p className="font-display text-[11px] sm:text-[13px] md:text-[15px] font-medium tracking-[0.2em] text-white/90 mix-blend-screen drop-shadow-md">KARAN MALAKAR</p>
          <p className="mt-1 text-[7px] sm:text-[8px] md:text-[9px] font-medium uppercase tracking-[0.3em] text-white/50 mix-blend-screen">WeDrip Ecosystem</p>
        </div>
        <div className={`flex items-center gap-3 sm:gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? "pointer-events-auto transform translate-y-0" : "pointer-events-none transform -translate-y-4"}`}>
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-white/50 mix-blend-screen md:block">
            Shillong — Guwahati
          </p>
          <a href="/resume" target="_blank" className="text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/90 border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm bg-black/20 whitespace-nowrap">
            Download Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
