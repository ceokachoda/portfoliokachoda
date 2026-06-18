"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, BufferAttribute, Color, ShaderMaterial } from "three";
import { seededRandom } from "@/lib/experience";

type PetalFieldProps = {
  count: number;
  mobile: boolean;
};

export function PetalField({ count, mobile }: PetalFieldProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  const { positions, scales, phases } = useMemo(() => {
    const random = seededRandom(2026);
    const positionArray = new Float32Array(count * 3);
    const scaleArray = new Float32Array(count);
    const phaseArray = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positionArray[index * 3] = (random() - 0.5) * (mobile ? 12 : 20);
      positionArray[index * 3 + 1] = random() * 8.4 - 0.2;
      positionArray[index * 3 + 2] = -random() * (mobile ? 36 : 54) + 3;
      scaleArray[index] = 0.32 + random() * 1.4;
      phaseArray[index] = random() * Math.PI * 2;
    }

    return { positions: positionArray, scales: scaleArray, phases: phaseArray };
  }, [count, mobile]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  if (count === 0) {
    return null;
  }

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uColorA: { value: new Color("#ff9fbd") },
          uColorB: { value: new Color("#e1193d") }
        }}
        vertexShader={`
          attribute float aScale;
          attribute float aPhase;
          uniform float uTime;
          varying float vMix;

          void main() {
            vec3 transformed = position;
            float fall = mod(uTime * (0.32 + aScale * 0.06) + aPhase, 8.8);
            transformed.y = position.y - fall;
            transformed.x += sin(uTime * 0.52 + aPhase + position.z * 0.16) * 0.9;
            transformed.z += cos(uTime * 0.28 + aPhase) * 0.42;
            vMix = sin(aPhase + uTime) * 0.5 + 0.5;

            vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
            gl_PointSize = (9.0 * aScale) * (1.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying float vMix;

          void main() {
            vec2 uv = gl_PointCoord - vec2(0.5);
            float petal = smoothstep(0.48, 0.04, length(vec2(uv.x * 0.72, uv.y * 1.42)));
            float notch = smoothstep(0.08, 0.18, abs(uv.y + 0.18));
            float alpha = petal * notch;
            gl_FragColor = vec4(mix(uColorA, uColorB, vMix), alpha * 0.78);
          }
        `}
      />
    </points>
  );
}
