"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { founderProfile } from "@/config/founder";
import { cn } from "@/lib/cn";
import {
  type ExperienceCapabilities,
  getExperienceCapabilities
} from "@/lib/experience";
import { IntroSequence } from "@/components/experience/intro-sequence";
import { StaticExperienceFallback } from "@/components/experience/static-experience-fallback";

const SceneCanvas = dynamic(
  () => import("@/components/experience/scene/scene-canvas").then((mod) => mod.SceneCanvas),
  {
    ssr: false,
    loading: () => null
  }
);

export function FounderExperience() {
  const [capabilities, setCapabilities] = useState<ExperienceCapabilities | null>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    setCapabilities(getExperienceCapabilities());
    const params = new URLSearchParams(window.location.search);
    if (params.get("intro") === "skip") {
      setSceneReady(true);
      setIntroComplete(true);
    }
  }, []);

  const shouldUseCanvas = Boolean(
    capabilities?.hasWebGL && capabilities.tier !== "reduced"
  );

  const status = useMemo(() => {
    if (!capabilities) {
      return "Reading device signal";
    }

    if (!shouldUseCanvas) {
      return "Entering low-motion world";
    }

    return sceneReady ? "World online" : "Building cherry forest";
  }, [capabilities, sceneReady, shouldUseCanvas]);

  return (
    <section
      className="relative isolate min-h-dvh overflow-hidden bg-ink-950 text-white"
      aria-label="Cinematic WeDrip ecosystem introduction"
    >
      <div className="absolute inset-0 z-0">
        {shouldUseCanvas && capabilities ? (
          <SceneCanvas capabilities={capabilities} onReady={() => setSceneReady(true)} />
        ) : (
          <StaticExperienceFallback />
        )}
      </div>

      {introComplete ? null : (
        <IntroSequence
          isReady={sceneReady || !shouldUseCanvas}
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
          "pointer-events-none relative z-20 grid min-h-dvh content-end px-5 pb-8 pt-28 text-center transition duration-1000 sm:px-8 sm:pb-10 lg:px-12",
          introComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}
      >
        <div className="mx-auto w-full max-w-site">
          <div className="mx-auto max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.42em] text-blossom-300/86 sm:text-[11px]">
              {founderProfile.location}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.65rem,6vw,5.8rem)] uppercase leading-[0.9] tracking-[0.12em] text-balance">
              {founderProfile.name}
            </h1>
            <div className="mx-auto mt-5 grid max-w-3xl gap-3 text-sm leading-7 text-white/70 sm:grid-cols-[1.05fr_0.95fr] sm:text-base">
              <p>
                {founderProfile.title}. {founderProfile.role}. Building the WeDrip ecosystem from
                Northeast India at {founderProfile.age}.
              </p>
              <p className="text-white/56">
                {founderProfile.education}. Ventures: {founderProfile.ventures.slice(0, 5).join(", ")}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
