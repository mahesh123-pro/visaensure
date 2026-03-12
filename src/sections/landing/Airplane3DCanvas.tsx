"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import * as THREE from "three";

function AirplaneModels() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Use a simpler approach for texture loading to avoid potential SSR/version issues with multi-load
  const texture1 = useLoader(THREE.TextureLoader, "/images/airplane1.png");
  const texture2 = useLoader(THREE.TextureLoader, "/images/airplane2.png");

  useFrame((state) => {
    if (groupRef.current) {
       const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
       // Animation based on scroll
       groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -scrollY * 0.005 + 5, 0.1);
       groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, scrollY * 0.0002, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3.5, 2, 0]} rotation={[0, 0.3, 0]}>
          <planeGeometry args={[6, 4]} />
          <meshStandardMaterial 
            map={texture2} 
            transparent 
            roughness={0.2} 
            metalness={0.5} 
            side={THREE.DoubleSide} 
            alphaTest={0.05}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[4, -1, -3]} rotation={[0, -0.4, 0]}>
          <planeGeometry args={[7, 4.5]} />
          <meshStandardMaterial 
            map={texture1} 
            transparent 
            roughness={0.4} 
            metalness={0.3} 
            side={THREE.DoubleSide} 
            alphaTest={0.05}
          />
        </mesh>
      </Float>

      {/* Dark background plane for depth */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#0c0c0e" />
      </mesh>
    </group>
  );
}

export default function Airplane3DCanvas() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 12], fov: 45 }} 
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#EE2720" />
      <pointLight position={[-10, -10, 5]} intensity={1} color="#A78BFA" />
      <spotLight position={[0, 20, 10]} angle={0.15} penumbra={1} intensity={2} />
      
      <Suspense fallback={null}>
        <AirplaneModels />
        <Environment preset="night" />
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
}
