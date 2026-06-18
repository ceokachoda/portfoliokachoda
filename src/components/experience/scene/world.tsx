"use client";

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { type ExperienceCapabilities, sceneSettings } from "@/lib/experience";
import { CameraRig } from "@/components/experience/scene/camera-rig";
import { CherryForest } from "@/components/experience/scene/cherry-forest";
import { DynamicFog } from "@/components/experience/scene/dynamic-fog";
import { EnvironmentLandmarks } from "@/components/experience/scene/environment-landmarks";
import { FloatingLanterns } from "@/components/experience/scene/floating-lanterns";
import { FloatingParticles } from "@/components/experience/scene/floating-particles";
import { PetalField } from "@/components/experience/scene/petal-field";

type CherryBlossomWorldProps = {
  capabilities: ExperienceCapabilities;
};

export function CherryBlossomWorld({ capabilities }: CherryBlossomWorldProps) {
  const settings = sceneSettings[capabilities.tier];

  return (
    <>
      <color attach="background" args={["#08050d"]} />
      <fog attach="fog" args={["#1b1021", 9, capabilities.isMobile ? 38 : 56]} />
      <CameraRig enabled={!capabilities.reducedMotion} />

      <ambientLight intensity={0.28} color="#a9b6ff" />
      <directionalLight position={[4, 8, -12]} intensity={1.18} color="#ffd3e2" />
      <pointLight position={[0, 1.4, -8]} intensity={3.2} color="#ff8a52" distance={18} />
      <pointLight position={[-4.8, 2.6, -9]} intensity={2.7} color="#ff6f9f" distance={20} />
      <pointLight position={[4.4, 2.8, -15]} intensity={2.1} color="#b7a6ff" distance={22} />
      <spotLight
        position={[2.8, 7.4, -16]}
        angle={0.34}
        penumbra={0.84}
        intensity={2.4}
        color="#ffc5d5"
        distance={38}
      />

      <CherryForest count={settings.trees} mobile={capabilities.isMobile} />
      <EnvironmentLandmarks mobile={capabilities.isMobile} />
      <PetalField count={settings.petals} mobile={capabilities.isMobile} />
      <FloatingParticles count={settings.particles} />
      <FloatingLanterns count={settings.lanterns} mobile={capabilities.isMobile} />
      <DynamicFog mobile={capabilities.isMobile} />

      {settings.bloom ? (
        <EffectComposer multisampling={0} enableNormalPass={false}>
          <Bloom
            intensity={0.44}
            luminanceThreshold={0.42}
            luminanceSmoothing={0.72}
            mipmapBlur
            kernelSize={KernelSize.MEDIUM}
          />
          <Vignette
            offset={0.22}
            darkness={0.72}
            eskil={false}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      ) : null}
    </>
  );
}
