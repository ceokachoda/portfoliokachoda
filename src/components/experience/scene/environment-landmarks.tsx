"use client";

import { useMemo } from "react";
import { seededRandom } from "@/lib/experience";

type EnvironmentLandmarksProps = {
  mobile: boolean;
};

function ToriiGate({ z, scale = 1 }: { z: number; scale?: number }) {
  return (
    <group position={[0, 0, z]} scale={scale}>
      <mesh position={[-1.55, 1.45, 0]} scale={[0.16, 2.9, 0.16]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3a0711" emissive="#21040a" emissiveIntensity={0.42} roughness={0.66} />
      </mesh>
      <mesh position={[1.55, 1.45, 0]} scale={[0.16, 2.9, 0.16]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3a0711" emissive="#21040a" emissiveIntensity={0.42} roughness={0.66} />
      </mesh>
      <mesh position={[0, 2.72, 0]} scale={[3.9, 0.18, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#6b0d1f" emissive="#4b0718" emissiveIntensity={0.72} roughness={0.58} />
      </mesh>
      <mesh position={[0, 3.02, 0]} scale={[4.45, 0.16, 0.18]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#22070d" emissive="#5a1325" emissiveIntensity={0.46} roughness={0.72} />
      </mesh>
      <mesh position={[0, 2.34, 0]} scale={[2.25, 0.13, 0.16]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#24060d" emissive="#27050d" emissiveIntensity={0.36} roughness={0.7} />
      </mesh>
    </group>
  );
}

function StoneLantern({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, 0, z]} scale={scale}>
      <mesh position={[0, 0.18, 0]} scale={[0.46, 0.16, 0.46]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1e1719" roughness={0.84} />
      </mesh>
      <mesh position={[0, 0.55, 0]} scale={[0.18, 0.56, 0.18]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#171114" roughness={0.86} />
      </mesh>
      <mesh position={[0, 0.92, 0]} scale={[0.5, 0.34, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#ffb46f" transparent opacity={0.78} />
      </mesh>
      <mesh position={[0, 1.2, 0]} scale={[0.64, 0.12, 0.64]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#110d10" roughness={0.82} />
      </mesh>
      <mesh position={[0, 0.92, 0]} scale={[1.25, 0.72, 1.25]}>
        <sphereGeometry args={[0.5, 12, 8]} />
        <meshBasicMaterial color="#ff763d" transparent opacity={0.075} depthWrite={false} />
      </mesh>
    </group>
  );
}

export function EnvironmentLandmarks({ mobile }: EnvironmentLandmarksProps) {
  const distantLights = useMemo(() => {
    const random = seededRandom(3988);
    return Array.from({ length: mobile ? 5 : 9 }, (_, index) => ({
      x: (random() - 0.5) * 8,
      y: 0.48 + random() * 0.42,
      z: -18 - index * 3.8,
      scale: 0.12 + random() * 0.1
    }));
  }, [mobile]);

  return (
    <group>
      <mesh position={[0, 1.45, -48]} scale={[46, 13, 1]}>
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial color="#4d315f" transparent opacity={0.82} depthWrite={false} fog={false} />
      </mesh>
      <mesh position={[0, 1.05, -46]} scale={[38, 8.6, 1]}>
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial color="#be4775" transparent opacity={0.42} depthWrite={false} fog={false} />
      </mesh>
      <mesh position={[-4.8, 0.62, -44]} scale={[20, 5.8, 1]}>
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial color="#2f567f" transparent opacity={0.28} depthWrite={false} fog={false} />
      </mesh>

      <mesh position={[3.35, 3.18, -22]} scale={[1.08, 1.08, 1.08]}>
        <sphereGeometry args={[0.72, 28, 18]} />
        <meshBasicMaterial color="#ffd1c0" transparent opacity={0.92} fog={false} />
      </mesh>
      <mesh position={[3.35, 3.18, -22]} scale={[2.4, 2.4, 2.4]}>
        <sphereGeometry args={[0.72, 28, 18]} />
        <meshBasicMaterial color="#ff7aa7" transparent opacity={0.055} depthWrite={false} fog={false} />
      </mesh>

      <ToriiGate z={-16.2} scale={1.34} />
      <ToriiGate z={-36} scale={0.62} />

      <group position={[0, 0, -47]} scale={[0.78, 0.78, 0.78]}>
        <mesh position={[0, 1.1, 0]} scale={[2.4, 1.8, 1.2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#110b12" emissive="#170812" emissiveIntensity={0.28} roughness={0.8} />
        </mesh>
        <mesh position={[0, 2.25, 0]} scale={[2.9, 0.22, 1.5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#09070a" emissive="#2e0b18" emissiveIntensity={0.22} roughness={0.82} />
        </mesh>
      </group>

      {[-1, 1].map((side) =>
        [0, 1, 2, 3].map((index) => (
          <StoneLantern
            key={`${side}-${index}`}
            x={side * (2.4 + index * 0.28)}
            z={-7 - index * 7.4}
            scale={1 - index * 0.12}
          />
        ))
      )}

      {distantLights.map((light) => (
        <mesh key={`${light.x}-${light.z}`} position={[light.x, light.y, light.z]} scale={light.scale}>
          <sphereGeometry args={[1, 10, 8]} />
          <meshBasicMaterial color="#ff9a55" transparent opacity={0.8} />
        </mesh>
      ))}

      <mesh position={[-2.8, 3.6, -18]} rotation={[0.18, 0.08, -0.28]} scale={[0.58, 8.5, 1]}>
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial color="#ff9fbd" transparent opacity={0.06} depthWrite={false} />
      </mesh>
      <mesh position={[2.6, 3.2, -25]} rotation={[0.14, -0.12, 0.32]} scale={[0.52, 7.2, 1]}>
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial color="#f9b7ff" transparent opacity={0.045} depthWrite={false} />
      </mesh>
    </group>
  );
}
