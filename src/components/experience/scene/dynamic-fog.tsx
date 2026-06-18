"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";

type DynamicFogProps = {
  mobile: boolean;
};

export function DynamicFog({ mobile }: DynamicFogProps) {
  const groupRef = useRef<Group>(null);

  const bands = useMemo(
    () =>
      Array.from({ length: mobile ? 5 : 8 }, (_, index) => ({
        y: 0.28 + index * 0.38,
        z: -5 - index * 6.2,
        scale: 1.25 + index * 0.5,
        phase: index * 0.74
      })),
    [mobile]
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.children.forEach((child, index) => {
      const band = bands[index];
      child.position.x = Math.sin(clock.elapsedTime * 0.16 + band.phase) * 1.2;
      child.position.y = band.y + Math.sin(clock.elapsedTime * 0.11 + band.phase) * 0.08;
    });
  });

  return (
    <group ref={groupRef}>
      {bands.map((band) => (
        <mesh
          key={band.z}
          position={[0, band.y, band.z]}
          rotation={[0, 0, 0]}
          scale={[10 * band.scale, 1.1 * band.scale, 1]}
        >
          <planeGeometry args={[1, 1, 1, 1]} />
          <meshBasicMaterial
            color={band.z < -28 ? "#8ea0ff" : "#ff9fbd"}
            transparent
            opacity={band.z < -28 ? 0.052 : 0.04}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
