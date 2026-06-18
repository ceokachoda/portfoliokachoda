"use client";

import { useEffect, useState } from "react";
import { founderProfile } from "@/config/founder";
import { cn } from "@/lib/cn";

type IntroSequenceProps = {
  isReady: boolean;
  status: string;
  onComplete: () => void;
};

export function IntroSequence({ isReady, status, onComplete }: IntroSequenceProps) {
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

    const leaveTimer = window.setTimeout(() => setLeaving(true), 420);
    const completeTimer = window.setTimeout(onComplete, 1180);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [isReady, onComplete, progress]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-40 grid place-items-center bg-ink-950 transition duration-1000",
        leaving ? "opacity-0 blur-sm" : "opacity-100"
      )}
      aria-hidden={leaving}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(225,25,61,0.28),transparent_34%),linear-gradient(180deg,#030305_0%,#09090d_44%,#030305_100%)]" />
      <div className="film-grain absolute -inset-[10%] opacity-[0.07]" />
      <div className="relative w-[min(88vw,720px)] text-center">
        <p className="text-[10px] uppercase tracking-[0.52em] text-blossom-300/78">
          WeDrip Ecosystem
        </p>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.75rem)] leading-[0.88]">
          Entering the world of {founderProfile.name.split(" ")[0]}
        </h2>
        <div className="mx-auto mt-10 h-px w-full overflow-hidden bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-crimson-700 via-blossom-300 to-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.34em] text-white/42">
          <span>{status}</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
