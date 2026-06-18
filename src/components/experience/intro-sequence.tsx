"use client";

import { useEffect, useState } from "react";
import { founderProfile } from "@/config/founder";
import { cn } from "@/lib/cn";

type IntroSequenceProps = {
  isReady: boolean;
  status: string; // We can still receive this but maybe ignore it in favor of custom phrases
  onComplete: () => void;
};

const LOADING_PHRASES = [
  "Building Vision",
  "Creating Impact",
  "Connecting Ideas",
  "Designing The Future",
  "Welcome To The Journey"
];

export function IntroSequence({ isReady, onComplete }: IntroSequenceProps) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const target = isReady ? 100 : 88;
    const tick = window.setInterval(() => {
      setProgress((current) => {
        if (current >= target) {
          return current;
        }

        const step = isReady ? 5 : Math.max(1, Math.round((target - current) * 0.08));
        return Math.min(target, current + step);
      });
    }, 90);

    return () => window.clearInterval(tick);
  }, [isReady]);

  useEffect(() => {
    if (!isReady || progress < 100) {
      return;
    }

    // Extended transition times for a seamless cinematic fade
    const leaveTimer = window.setTimeout(() => setLeaving(true), 800);
    const completeTimer = window.setTimeout(onComplete, 2400);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [isReady, onComplete, progress]);

  // Determine current phrase based on progress
  const phraseIndex = Math.min(
    Math.floor((progress / 100) * (LOADING_PHRASES.length - 1)),
    LOADING_PHRASES.length - 1
  );
  
  // Force "Welcome To The Journey" at 100%
  const currentPhrase = progress === 100 ? LOADING_PHRASES[LOADING_PHRASES.length - 1] : LOADING_PHRASES[phraseIndex];

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-40 grid place-items-center bg-[#0a0608] transition-all duration-[2000ms] ease-in-out",
        leaving ? "opacity-0 blur-md scale-105" : "opacity-100"
      )}
      aria-hidden={leaving}
    >
      {/* Cherry blossom cinematic background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,183,197,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(230,200,255,0.05),transparent_40%),linear-gradient(180deg,transparent_0%,rgba(10,5,8,0.9)_100%)] transition-opacity duration-1000" />
      <div className="film-grain absolute -inset-[10%] opacity-[0.04] mix-blend-screen" />
      
      {/* Soft atmospheric particles/petals */}
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none transition-all duration-[2000ms]", leaving ? "opacity-0 translate-x-20 scale-110" : "opacity-60")}>
        <style>{`
          @keyframes drift {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
            20% { opacity: 0.6; }
            80% { opacity: 0.6; }
            100% { transform: translateY(-15vh) translateX(10vw) rotate(180deg); opacity: 0; }
          }
          .petal { animation: drift 15s infinite linear; position: absolute; border-radius: 50%; filter: blur(3px); }
          .p-1 { width: 8px; height: 8px; background: rgba(255,183,197,0.3); top: 70%; left: 20%; animation-duration: 12s; }
          .p-2 { width: 12px; height: 12px; background: rgba(255,200,220,0.2); top: 80%; left: 60%; animation-duration: 18s; animation-delay: -5s; }
          .p-3 { width: 6px; height: 6px; background: rgba(230,200,255,0.4); top: 60%; left: 80%; animation-duration: 14s; animation-delay: -2s; filter: blur(2px); }
          .p-4 { width: 10px; height: 10px; background: rgba(255,220,230,0.25); top: 90%; left: 40%; animation-duration: 20s; animation-delay: -8s; }
        `}</style>
        <div className="petal p-1"></div>
        <div className="petal p-2"></div>
        <div className="petal p-3"></div>
        <div className="petal p-4"></div>
      </div>

      <div className="relative w-[min(88vw,600px)] text-center flex flex-col items-center justify-center">
        {/* Main Title */}
        <h2 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[1.1] uppercase tracking-[0.1em] text-white/90 drop-shadow-md">
          Entering the world of {founderProfile.name.split(" ")[0]}
        </h2>
        {/* Subtext */}
        <p className="mt-4 text-[10px] sm:text-xs font-light uppercase tracking-[0.4em] text-pink-200/80">
          &quot;Every ecosystem begins with a story.&quot;
        </p>

        {/* Animated dynamic text replacing static text */}
        <div className="mt-12 h-12 flex items-center justify-center overflow-hidden mb-6">
          <p 
            key={currentPhrase}
            className="text-[11px] sm:text-xs font-light uppercase tracking-[0.4em] text-white/80 mix-blend-plus-lighter animate-in fade-in slide-in-from-bottom-2 duration-700"
          >
            {currentPhrase}
          </p>
        </div>

        {/* Elegant cinematic progress line */}
        <div className="relative w-full max-w-[240px] h-[1px] bg-white/10 overflow-hidden">
          {/* Ambient glow behind the line */}
          <div className="absolute inset-0 bg-pink-300/20 blur-sm" />
          
          {/* The actual progress indicator */}
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-pink-200/80 to-white transition-all duration-[400ms] ease-out shadow-[0_0_10px_rgba(255,183,197,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
