import { useRef } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface TSky {
  isRotating: boolean;
}

export function Sky({ isRotating }: TSky) {
  const options = ["stars.glb", "sky.glb"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const sky = useGLTF(options[randomIndex]);
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
