"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  onReady: () => void;
};

export function HeroVideo({ onReady }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // If the video is already ready (e.g. cached), trigger onReady immediately
    if (videoRef.current && videoRef.current.readyState >= 3) {
      onReady();
    }
  }, [onReady]);

  return (
    <div className="fixed inset-0 h-full w-full bg-ink-950 z-[-1]">
      {hasError ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(225,25,61,0.28),transparent_34%),linear-gradient(180deg,#030305_0%,#09090d_44%,#030305_100%)]" />
      ) : (
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          poster="/og/karan-malakar-founder-portfolio.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-center opacity-80 mix-blend-screen"
          onCanPlay={onReady}
          onError={() => {
            console.error("Failed to load hero video. Using fallback.");
            setHasError(true);
            onReady(); // Trigger ready anyway so we don't block the intro
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent mix-blend-multiply" />
    </div>
  );
}
