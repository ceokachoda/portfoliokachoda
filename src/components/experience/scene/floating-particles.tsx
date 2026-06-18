"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, BufferAttribute, Color, Points, ShaderMaterial } from "three";
import { seededRandom } from "@/lib/experience";

type FloatingParticlesProps = {
  count: number;
};

export function FloatingParticles({ count }: FloatingParticlesProps) {
  const pointsRef = useRef<Points>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  const positions = useMemo(() => {
    const random = seededRandom(6042);
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (random() - 0.5) * 22;
      values[index * 3 + 1] = random() * 8.5;
      values[index * 3 + 2] = -random() * 58 + 4;
    }

    return values;
  }, [count]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(elapsed * 0.06) * 0.08;
    }

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsed;
    }
  });

  if (count === 0) {
    return null;
  }

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new Color("#ffcad8") }
        }}
        vertexShader={`
          uniform float uTime;
          varying float vAlpha;

          void main() {
            vec3 transformed = position;
            transformed.y += sin(uTime * 0.52 + position.x * 1.7 + position.z * 0.2) * 0.22;
            vAlpha = 0.42 + sin(uTime + position.x) * 0.16;
            vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
            gl_PointSize = 3.2 * (1.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 uColor;
          varying float vAlpha;

          void main() {
            float glow = smoothstep(0.5, 0.02, length(gl_PointCoord - vec2(0.5)));
            gl_FragColor = vec4(uColor, glow * vAlpha);
          }
        `}
      />
    </points>
  );
}
