import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

export default function MockupBook() {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Book />
      <OrbitControls />
    </Canvas>
  );
}

function Book() {
  return (
    <group>
      {/* Cover */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[3, 0.2, 4]} />
        <meshStandardMaterial />
      </mesh>
      {/* Pages */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[2.9, 0.1, 3.9]} />
        <meshStandardMaterial />
      </mesh>
      {/* Spine */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.2, 0.2, 4]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}
