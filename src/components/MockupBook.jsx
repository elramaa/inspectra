import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function MockupBook() {
  return (
    <Canvas>
      <hemisphereLight args={[0xffffff, 0xffffff, 2]} />
      <Book />
      <OrbitControls />
    </Canvas>
  );
}

function Book() {
  const [textureFront, textureBack, textureSpine] = useTexture([
    "img/book/book_front.png",
    "img/book/book_back.png",
    "img/book/book_spine.png",
  ]);
  return (
    <group rotation={[0, Math.PI / 4, 0]}>
      <mesh>
        <planeGeometry args={[3, 4]} />
        <meshLambertMaterial map={textureFront} side={DoubleSide} />
      </mesh>
      <mesh position={[-1.5, 0, -0.125]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[0.25, 4]} />
        <meshLambertMaterial map={textureSpine} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -0.25]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3, 4]} />
        <meshLambertMaterial map={textureBack} side={DoubleSide} />
      </mesh>
      <mesh position={[1.5, 0, -0.125]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.25, 4]} />
        <meshLambertMaterial color={0xffffff} side={DoubleSide} />
      </mesh>
      <mesh position={[0, -2, -0.125]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 0.25]} />
        <meshLambertMaterial color={0xffffff} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 2, -0.125]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 0.25]} />
        <meshLambertMaterial color={0xffffff} side={DoubleSide} />
      </mesh>
    </group>
  );
}
