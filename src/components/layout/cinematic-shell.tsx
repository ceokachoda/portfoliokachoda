"use client";

import { useState, useEffect } from "react";
import { SiteChrome } from "@/components/layout/site-chrome";
import { FounderExperience } from "@/components/experience/founder-experience";
import { AboutSection } from "@/components/ecosystem/about-section";
import { Phase4Ecosystem } from "@/components/ecosystem/phase4-ecosystem";
import { EcosystemContent } from "@/components/ecosystem/ecosystem-content";

export function CinematicShell() {
  const [isExplored, setIsExplored] = useState(false);

  useEffect(() => {
    if (!isExplored) {
      document.body.style.overflow = "hidden";
      // Prevent touch scroll on mobile while locked
      const preventTouch = (e: TouchEvent) => {
        if (e.cancelable) e.preventDefault();
      };
      document.addEventListener("touchmove", preventTouch, { passive: false });
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("touchmove", preventTouch);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isExplored]);

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-ink-950 text-white selection:bg-pink-500/30 scroll-smooth">
      <SiteChrome isExplored={isExplored} />
      <FounderExperience onExplore={() => setIsExplored(true)} />
      
      <div className={`transition-all duration-[1500ms] ease-out ${isExplored ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 pointer-events-none'}`}>
        {/* Restored Who Is Karan Malakar Section */}
        <div className="relative z-10 mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 pt-24 pb-12">
          <AboutSection />
        </div>

        <Phase4Ecosystem />
        <EcosystemContent />
      </div>
    </main>
  );
}
