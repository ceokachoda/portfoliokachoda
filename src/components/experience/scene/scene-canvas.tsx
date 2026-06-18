"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { type ExperienceCapabilities, sceneSettings } from "@/lib/experience";
import { CherryBlossomWorld } from "@/components/experience/scene/world";

type SceneCanvasProps = {
  capabilities: ExperienceCapabilities;
  onReady: () => void;
};

export function SceneCanvas({ capabilities, onReady }: SceneCanvasProps) {
  const settings = sceneSettings[capabilities.tier];

  useEffect(() => {
    const timer = window.setTimeout(onReady, capabilities.tier === "mobile" ? 900 : 1200);
    return () => window.clearTimeout(timer);
  }, [capabilities.tier, onReady]);

  return (
    <Canvas
      camera={{ position: [0, 2.25, 10.4], fov: capabilities.isMobile ? 61 : 52, near: 0.1, far: 92 }}
      dpr={settings.dpr}
      gl={{
        antialias: !capabilities.isMobile,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: true
      }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = SRGBColorSpace;
        gl.toneMapping = ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={null}>
        <CherryBlossomWorld capabilities={capabilities} />
      </Suspense>
    </Canvas>
  );
}
