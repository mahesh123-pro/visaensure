"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// A truly 3D stylized airplane built with Three.js primitives
function StylizedAirplane({ color = "#ffffff", scale = 1, ...props }: any) {
  const groupRef = useRef<THREE.Group>(null);
  
  return (
    <group ref={groupRef} scale={scale} {...props}>
      {/* Fuselage (Body) */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.4, 6, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Nose (Front) */}
      <mesh position={[3, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Tail Fin (Vertical) */}
      <mesh position={[-2.5, 0.8, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[1, 1.5, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Tail Wings (Horizontal) */}
      <mesh position={[-2.5, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.1, 2.5]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Main Wings */}
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[1.5, 0.15, 8]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Engines */}
      <mesh position={[0.5, -0.4, 2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 1, 16]} />
        <meshStandardMaterial color="#333" roughness={0.5} metalness={0.8} />
      </mesh>
      <mesh position={[0.5, -0.4, -2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 1, 16]} />
        <meshStandardMaterial color="#333" roughness={0.5} metalness={0.8} />
      </mesh>

      {/* Cockpit Window */}
      <mesh position={[2.5, 0.25, 0]}>
        <boxGeometry args={[0.5, 0.2, 0.6]} />
        <meshStandardMaterial color="#111" roughness={0.1} metalness={1} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

function AirplaneScene({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sceneRef.current) {
      const time = state.clock.getElapsedTime();
      const progress = scrollProgress ? scrollProgress.get() : 0;
      
      // Constant movement (floating)
      sceneRef.current.position.y = Math.sin(time * 0.5) * 0.5;
      
      // Controlled 3D rotation based on progress
      const targetRotationY = Math.PI / 4 + progress * Math.PI;
      const targetRotationX = progress * 0.5;
      
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, targetRotationY, 0.05);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, targetRotationX, 0.05);
      sceneRef.current.rotation.z = THREE.MathUtils.lerp(sceneRef.current.rotation.z, Math.sin(time * 0.3) * 0.1, 0.05);
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Primary Plane */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <StylizedAirplane position={[0, 0, 0]} color="#ffffff" scale={0.8} />
      </Float>

      {/* Distance Plane - Private Jet Style */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <StylizedAirplane position={[12, 5, -15]} color="#fecaca" scale={0.4} rotation={[0, Math.PI / 6, 0.2]} />
      </Float>

      {/* Another distant plane */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <StylizedAirplane position={[-15, -6, -20]} color="#ffffff" scale={0.3} rotation={[0, -Math.PI / 4, -0.1]} />
      </Float>
    </group>
  );
}

export default function Airplane3DCanvas({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  useEffect(() => {
    console.log("3D Stylized Airplane Canvas Mounted");
  }, []);

  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={35} />
      
      {/* Lighting for 3D depth */}
      <ambientLight intensity={1.5} />
      <pointLight position={[20, 20, 20]} intensity={500} color="#EE2720" />
      <pointLight position={[-20, -20, -10]} intensity={300} color="#A78BFA" />
      <spotLight 
        position={[0, 40, 20]} 
        angle={0.4} 
        penumbra={1} 
        intensity={500} 
        castShadow 
      />
      
      <AirplaneScene scrollProgress={scrollProgress} />
      
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
