"use client";

import { useEffect, useState } from "react";
import { founderProfile } from "@/config/founder";
import { cn } from "@/lib/cn";
import { IntroSequence } from "@/components/experience/intro-sequence";
import { HeroVideo } from "@/components/experience/hero-video";

export function FounderExperience({ onExplore }: { onExplore?: () => void }) {
  const [videoReady, setVideoReady] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intro") === "skip") {
      setVideoReady(true);
      setIntroComplete(true);
    }
  }, []);

  const status = videoReady ? "World online" : "Loading cinematic environment";

  return (
    <section
      className="relative isolate min-h-dvh bg-transparent text-white"
      aria-label="Cinematic WeDrip ecosystem introduction"
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroVideo onReady={() => setVideoReady(true)} />
      </div>

      {introComplete ? null : (
        <IntroSequence
          isReady={videoReady}
          status={status}
          onComplete={() => setIntroComplete(true)}
        />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48dvh] bg-gradient-to-t from-black via-black/58 to-transparent"
      />

      <div
        className={cn(
          "pointer-events-none relative z-20 flex min-h-dvh flex-col items-center justify-center px-5 pt-20 md:pt-28 pb-16 md:pb-24 text-center transition-all duration-[2000ms] ease-out sm:px-8 lg:px-12",
          introComplete ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
        )}
      >
        <div className="mx-auto w-full max-w-site flex flex-col items-center justify-center mt-0 md:mt-16">
          <div className="relative mx-auto max-w-5xl flex flex-col items-center justify-center">
            <style>{`
              @keyframes cinematic-shimmer {
                0%, 100% { filter: brightness(1) drop-shadow(0 0 10px rgba(255,183,197,0.15)); }
                50% { filter: brightness(1.2) drop-shadow(0 0 25px rgba(255,183,197,0.55)); }
              }
              .title-shimmer { animation: cinematic-shimmer 12s ease-in-out infinite; }
              .text-edge-pink { -webkit-text-stroke: 1px rgba(255,183,197,0.15); }
            `}</style>

            {/* The primary text layer: warm white base with elegant light reflections and pink edge */}
            <h1 className="relative z-10 w-full font-display text-[clamp(2.2rem,9vw,8.5rem)] sm:text-[clamp(2.5rem,9vw,8.5rem)] md:text-[clamp(3rem,9vw,8.5rem)] font-medium uppercase leading-[1] tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#fff5f7] to-[#ffcadd]/80 drop-shadow-2xl mix-blend-plus-lighter title-shimmer text-edge-pink break-words px-2">
              {founderProfile.name}
            </h1>
            {/* The environment-reactive layer: strongly picks up background colors like lanterns and blossoms */}
            <h1 className="absolute top-0 z-20 w-full font-display text-[clamp(2.2rem,9vw,8.5rem)] sm:text-[clamp(2.5rem,9vw,8.5rem)] md:text-[clamp(3rem,9vw,8.5rem)] font-medium uppercase leading-[1] tracking-[0.18em] text-[#ffe4e9]/50 mix-blend-overlay pointer-events-none break-words px-2">
              {founderProfile.name}
            </h1>
            {/* Additional baby pink core highlight to ensure visibility across varied video backgrounds */}
            <h1 className="absolute top-0 z-0 w-full font-display text-[clamp(2.2rem,9vw,8.5rem)] sm:text-[clamp(2.5rem,9vw,8.5rem)] md:text-[clamp(3rem,9vw,8.5rem)] font-medium uppercase leading-[1] tracking-[0.18em] text-[#ffcadd]/30 blur-[8px] mix-blend-screen pointer-events-none break-words px-2">
              {founderProfile.name}
            </h1>
            {/* The ambient glow layer: soft cherry blossom pink bloom that reacts to underlying brightness */}
            <h1 className="absolute top-0 z-0 w-full font-display text-[clamp(2.2rem,9vw,8.5rem)] sm:text-[clamp(2.5rem,9vw,8.5rem)] md:text-[clamp(3rem,9vw,8.5rem)] font-medium uppercase leading-[1] tracking-[0.18em] text-[#ff9ebd]/60 blur-[24px] mix-blend-color-dodge transition-all duration-1000 pointer-events-none break-words px-2">
              {founderProfile.name}
            </h1>

            <p className="relative z-10 mt-6 sm:mt-8 md:mt-12 max-w-xl text-[9px] sm:text-[10px] md:text-sm font-light uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#fff0f3]/80 drop-shadow-lg leading-relaxed mix-blend-screen transition-opacity duration-1000 delay-500 px-4">
              Building the future from Northeast India.
            </p>

            <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 pointer-events-auto">
              <button 
                onClick={() => {
                  onExplore?.();
                  setTimeout(() => {
                    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#ffcadd]/40 bg-[#ffcadd]/5 px-8 py-3.5 sm:px-10 sm:py-4 text-[10px] sm:text-xs font-medium tracking-[0.25em] text-[#fff0f3] backdrop-blur-md transition-all duration-700 shadow-[0_0_20px_rgba(255,202,221,0.15)] hover:border-[#ffcadd]/80 hover:bg-[#ffcadd]/20 hover:shadow-[0_0_40px_rgba(255,202,221,0.4)] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#ffcadd]/50 active:scale-[0.98]">
                <span className="uppercase relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-sm">Explore</span>
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                  <div className="h-full w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-[#ffcadd]/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
