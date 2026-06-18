"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { Color, InstancedMesh, Object3D, Quaternion, Vector3 } from "three";
import { seededRandom } from "@/lib/experience";

type CherryForestProps = {
  count: number;
  mobile: boolean;
};

const tempObject = new Object3D();
const tempDirection = new Vector3();
const tempQuaternion = new Quaternion();
const yAxis = new Vector3(0, 1, 0);
const blossomPalette = [
  new Color("#ff9fbd"),
  new Color("#ff6f9f"),
  new Color("#d94880"),
  new Color("#b83a77"),
  new Color("#f4b3cf")
];

export function CherryForest({ count, mobile }: CherryForestProps) {
  const trunkRef = useRef<InstancedMesh>(null);
  const branchRef = useRef<InstancedMesh>(null);
  const blossomRef = useRef<InstancedMesh>(null);
  const glowRef = useRef<InstancedMesh>(null);
  const branchCount = count * 6;
  const clusterTotal = mobile ? 32 : 54;
  const blossomCount = count * clusterTotal;

  const trees = useMemo(() => {
    const random = seededRandom(9087);

    return Array.from({ length: count }, (_, index) => {
      const lane = index % 2 === 0 ? -1 : 1;
      const depth = -4 - index * (mobile ? 1.08 : 0.88);
      const spread = mobile ? 3.8 : 7.2;
      const x = lane * (2.15 + random() * spread) + (random() - 0.5) * 1.1;
      const height = 2.9 + random() * 2.9;
      const scale = 0.74 + random() * 1.18;
      const lean = lane * (0.1 + random() * 0.18);

      return {
        x,
        z: depth + (random() - 0.5) * 1.1,
        height,
        scale,
        lane,
        lean,
        twist: random() * Math.PI
      };
    });
  }, [count, mobile]);

  useLayoutEffect(() => {
    let branchIndex = 0;
    let blossomIndex = 0;

    trees.forEach((tree, index) => {
      tempObject.position.set(tree.x, tree.height * 0.5 - 0.25, tree.z);
      tempObject.rotation.set(tree.lean, tree.twist, 0.06 * Math.cos(tree.twist));
      tempObject.scale.set(0.12 * tree.scale, tree.height, 0.12 * tree.scale);
      tempObject.updateMatrix();
      trunkRef.current?.setMatrixAt(index, tempObject.matrix);

      for (let branch = 0; branch < 6; branch += 1) {
        const side = branch % 2 === 0 ? -tree.lane : tree.lane;
        const startY = tree.height * (0.48 + branch * 0.085);
        const reach = (1.2 + branch * 0.22) * tree.scale;
        const rise = (0.38 + branch * 0.12) * tree.scale;
        const start = new Vector3(tree.x + tree.lean * startY * 0.15, startY, tree.z);
        const end = new Vector3(
          tree.x + side * reach + Math.sin(tree.twist + branch) * 0.34,
          startY + rise,
          tree.z - 0.35 - branch * 0.24
        );
        tempDirection.subVectors(end, start);
        tempQuaternion.setFromUnitVectors(yAxis, tempDirection.clone().normalize());
        tempObject.position.copy(start).add(end).multiplyScalar(0.5);
        tempObject.quaternion.copy(tempQuaternion);
        tempObject.scale.set(0.045 * tree.scale, tempDirection.length(), 0.045 * tree.scale);
        tempObject.updateMatrix();
        branchRef.current?.setMatrixAt(branchIndex, tempObject.matrix);
        branchIndex += 1;
      }

      for (let cluster = 0; cluster < clusterTotal; cluster += 1) {
        const arc = (cluster / clusterTotal) * Math.PI * 2 + tree.twist;
        const radius = (0.72 + (cluster % 9) * 0.11) * tree.scale;
        const sideBias = cluster % 2 === 0 ? -tree.lane : tree.lane;
        const tier = cluster % 3;
        tempObject.position.set(
          tree.x + Math.cos(arc) * radius + sideBias * 0.32 * tree.scale + Math.sin(cluster * 2.1) * 0.24,
          tree.height - 0.12 + tier * 0.23 + Math.sin(arc * 1.45) * 0.48 * tree.scale + Math.cos(cluster * 1.7) * 0.12,
          tree.z - 0.42 + Math.sin(arc) * 0.82 + Math.cos(cluster * 1.4) * 0.22
        );
        tempObject.rotation.set(arc * 0.22, tree.twist + cluster * 0.5, arc * 0.14);
        tempObject.scale.set(
          (0.056 + (cluster % 5) * 0.014) * tree.scale,
          (0.038 + (cluster % 4) * 0.011) * tree.scale,
          (0.05 + (cluster % 6) * 0.012) * tree.scale
        );
        tempObject.updateMatrix();
        blossomRef.current?.setMatrixAt(blossomIndex, tempObject.matrix);
        blossomRef.current?.setColorAt(blossomIndex, blossomPalette[(index + cluster) % blossomPalette.length]);
        blossomIndex += 1;
      }

      tempObject.position.set(tree.x, tree.height + 0.42, tree.z - 0.4);
      tempObject.rotation.set(0, tree.twist, 0);
      tempObject.scale.set(0.82 + tree.scale * 0.42, 0.28 + tree.scale * 0.16, 0.72 + tree.scale * 0.32);
      tempObject.updateMatrix();
      glowRef.current?.setMatrixAt(index, tempObject.matrix);
    });

    if (trunkRef.current) {
      trunkRef.current.instanceMatrix.needsUpdate = true;
    }

    if (branchRef.current) {
      branchRef.current.instanceMatrix.needsUpdate = true;
    }

    if (blossomRef.current) {
      blossomRef.current.instanceMatrix.needsUpdate = true;
      if (blossomRef.current.instanceColor) {
        blossomRef.current.instanceColor.needsUpdate = true;
      }
    }

    if (glowRef.current) {
      glowRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [clusterTotal, mobile, trees]);

  if (count === 0) {
    return null;
  }

  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.08, -21]}>
        <planeGeometry args={[46, 92, 1, 1]} />
        <meshStandardMaterial color="#070508" roughness={0.94} metalness={0.03} />
      </mesh>

      <mesh rotation-x={-Math.PI / 2} position={[0, -0.055, -18]}>
        <planeGeometry args={[4.8, 82, 1, 1]} />
        <meshStandardMaterial
          color="#171017"
          emissive="#2d0a13"
          emissiveIntensity={0.28}
          roughness={0.82}
          metalness={0.08}
        />
      </mesh>

      {Array.from({ length: mobile ? 11 : 18 }, (_, index) => (
        <mesh
          key={index}
          position={[
            index % 2 === 0 ? -1.15 : 1.15,
            0.015,
            -4 - index * 2.45
          ]}
          rotation={[-Math.PI / 2, 0, (index % 2 === 0 ? -0.08 : 0.08)]}
          scale={[1.0 + index * 0.035, 0.22, 1]}
        >
          <boxGeometry args={[1, 1, 0.08]} />
          <meshStandardMaterial
            color="#2a2024"
            emissive="#341018"
            emissiveIntensity={0.32}
            roughness={0.8}
            metalness={0.16}
          />
        </mesh>
      ))}

      <group position={[-5.6, 3.8, -6]} rotation={[0, 0, -0.62]}>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0.55]} scale={[0.18, 4.8, 0.18]}>
          <cylinderGeometry args={[1, 1.25, 1, 8]} />
          <meshStandardMaterial color="#100508" roughness={0.76} />
        </mesh>
        {[-1.8, -1.05, -0.2, 0.7, 1.45].map((x, index) => (
          <mesh
            key={x}
            position={[x, 0.9 + index * 0.22, -0.05 * index]}
            rotation={[0, 0, -0.25 + index * 0.12]}
            scale={[0.06, 2.6 - index * 0.18, 0.06]}
          >
            <cylinderGeometry args={[1, 1, 1, 7]} />
            <meshStandardMaterial color="#120407" roughness={0.8} />
          </mesh>
        ))}
      </group>

      <instancedMesh ref={trunkRef} args={[undefined, undefined, count]} frustumCulled>
        <cylinderGeometry args={[0.72, 1, 1, 7]} />
        <meshStandardMaterial color="#150609" roughness={0.82} metalness={0.04} />
      </instancedMesh>

      <instancedMesh ref={branchRef} args={[undefined, undefined, branchCount]} frustumCulled>
        <cylinderGeometry args={[0.78, 1, 1, 7]} />
        <meshStandardMaterial color="#120407" roughness={0.78} metalness={0.04} />
      </instancedMesh>

      <instancedMesh ref={blossomRef} args={[undefined, undefined, blossomCount]} frustumCulled>
        <sphereGeometry args={[1, 7, 5]} />
        <meshStandardMaterial
          color="#ff8eb4"
          emissive="#d72a69"
          emissiveIntensity={0.62}
          roughness={0.72}
          vertexColors
        />
      </instancedMesh>

      <instancedMesh ref={glowRef} args={[undefined, undefined, count]} frustumCulled>
        <sphereGeometry args={[0.7, 14, 10]} />
        <meshBasicMaterial color="#ff6f9f" transparent opacity={0.005} depthWrite={false} />
      </instancedMesh>
    </group>
  );
}
