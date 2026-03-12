import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingBox = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} transparent opacity={0.6} wireframe />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <MeshDistortMaterial color={color} transparent opacity={0.4} distort={0.3} speed={2} />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.5, 0.15, 16, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.5} wireframe />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#7c5cfc" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#38bdf8" />

        <FloatingBox position={[2.5, 1.5, 0]} color="#7c5cfc" speed={0.8} />
        <FloatingBox position={[-2.8, -1, 0.5]} color="#38bdf8" speed={1.2} />
        <FloatingSphere position={[3, -1.5, -1]} color="#a855f7" />
        <FloatingSphere position={[-2, 2, -0.5]} color="#7c5cfc" />
        <FloatingTorus position={[0, 2.5, -1]} color="#38bdf8" />
        <FloatingTorus position={[-3, 0, 0]} color="#a855f7" />
        <FloatingBox position={[1, -2.5, 0.5]} color="#a855f7" speed={0.6} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
