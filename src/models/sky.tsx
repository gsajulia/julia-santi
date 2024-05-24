import { useRef } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface TSky {
  isRotating: boolean;
  cenarioOption: string;
}

export function Sky({ isRotating, cenarioOption }: TSky) {
  const sky = useGLTF(cenarioOption);
  const skyRef = useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    if (isRotating && skyRef?.current) {
      skyRef.current.rotation.y += 0.1 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef} position={[0, 0, -2]}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
