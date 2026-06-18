"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";
import { seededRandom } from "@/lib/experience";

type FloatingLanternsProps = {
  count: number;
  mobile: boolean;
};

export function FloatingLanterns({ count, mobile }: FloatingLanternsProps) {
  const groupRef = useRef<Group>(null);

  const lanterns = useMemo(() => {
    const random = seededRandom(7331);

    return Array.from({ length: count }, (_, index) => ({
      x: (random() - 0.5) * (mobile ? 8.5 : 16),
      y: 1.7 + random() * 5.5,
      z: -3 - random() * (mobile ? 24 : 42),
      scale: 0.36 + random() * 0.42,
      phase: random() * Math.PI * 2,
      warm: index % 3 === 0
    }));
  }, [count, mobile]);

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.children.forEach((child, index) => {
      const lantern = lanterns[index];
      child.position.y = lantern.y + Math.sin(clock.elapsedTime * 0.55 + lantern.phase) * 0.18;
      child.rotation.y = Math.sin(clock.elapsedTime * 0.22 + lantern.phase) * 0.2;
    });
  });

  if (count === 0) {
    return null;
  }

  return (
    <group ref={groupRef}>
      {lanterns.map((lantern) => (
        <group
          key={`${lantern.x}-${lantern.z}`}
          position={[lantern.x, lantern.y, lantern.z]}
          scale={lantern.scale}
        >
          <mesh position={[0, 0, 0]} scale={[0.58, 0.86, 0.58]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial
              color={lantern.warm ? "#ffd0a6" : "#ff9fbd"}
              transparent
              opacity={0.72}
            />
          </mesh>
          <mesh position={[0, 0.55, 0]} scale={[0.78, 0.08, 0.78]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#13080a" roughness={0.72} />
          </mesh>
          <mesh position={[0, -0.55, 0]} scale={[0.72, 0.08, 0.72]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#13080a" roughness={0.72} />
          </mesh>
          <mesh position={[0, 0, 0]} scale={[1.45, 1.85, 1.45]}>
            <sphereGeometry args={[0.34, 14, 10]} />
            <meshBasicMaterial
              color={lantern.warm ? "#ff7a3d" : "#ff4f86"}
              transparent
              opacity={0.08}
              depthWrite={false}
            />
          </mesh>
          <mesh position={[0, 0.82, 0]} scale={[0.08, 0.62, 0.08]}>
            <cylinderGeometry args={[1, 1, 1, 6]} />
            <meshStandardMaterial color="#0b0608" roughness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
