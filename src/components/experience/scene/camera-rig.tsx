"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const targetPosition = new Vector3();

type CameraRigProps = {
  enabled: boolean;
};

export function CameraRig({ enabled }: CameraRigProps) {
  const { camera, pointer } = useThree();

  useFrame(({ clock }, delta) => {
    if (!enabled) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    targetPosition.set(
      pointer.x * 0.62 + Math.sin(elapsed * 0.18) * 0.24,
      2.25 + pointer.y * 0.28 + Math.sin(elapsed * 0.24) * 0.07,
      10.4 + Math.cos(elapsed * 0.16) * 0.24
    );

    camera.position.lerp(targetPosition, Math.min(1, delta * 1.35));
    camera.lookAt(pointer.x * 0.36, 1.42 + pointer.y * 0.18, -14);
  });

  return null;
}
