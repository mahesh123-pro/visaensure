"use client";

import { useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame, GroupProps } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/airplane.glb");

function BackgroundRealisticPlane({ scale = 1, ...props }: GroupProps) {
  const { scene } = useGLTF("/models/airplane.glb");
  const clone = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        
        // Ensure materials look premium and blend with the background
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat.name.toLowerCase().includes("glass")) {
            mat.transparent = true;
            mat.opacity = 0.3;
            mat.metalness = 0.9;
            mat.roughness = 0.1;
          }
        }
      }
    });
  }, [clone]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Dynamic banking animation - purely rotational
      groupRef.current.rotation.z = Math.sin(time * 0.4) * 0.15;
      groupRef.current.rotation.x = Math.cos(time * 0.2) * 0.1;
      
      // Animate propellers if they exist
      groupRef.current.traverse((child) => {
        if (child.name.toLowerCase().includes("propeller") || child.name.toLowerCase().includes("blade")) {
          child.rotation.y += 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef} scale={scale} {...props}>
      <primitive object={clone} />
    </group>
  );
}

function StraightFlyingPlane({ 
  startPos, 
  rotation, 
  scale, 
  speed,
  maxDist = 100
}: { 
  startPos: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  maxDist?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const startVector = useMemo(() => new THREE.Vector3(...startPos), [startPos]);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Fly perfectly straight in the direction it is facing
      // Assuming the model's forward direction is +Z
      groupRef.current.translateZ(speed * delta);
      
      // Loop the plane back to the start once it flies too far out of bounds
      if (groupRef.current.position.distanceTo(startVector) > maxDist) {
        groupRef.current.position.copy(startVector);
      }
    }
  });

  return (
    <group ref={groupRef} position={startPos} rotation={rotation}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.5}>
        <BackgroundRealisticPlane scale={scale} />
      </Float>
    </group>
  );
}

function AmbientPlanesScene() {
  return (
    <group>
      {/* Plane 1: Flying generally left-to-right */}
      <StraightFlyingPlane 
        startPos={[-40, 8, -25]} 
        rotation={[-0.1, Math.PI / 2 + 0.1, 0]} 
        scale={1.5} 
        speed={6} 
        maxDist={100} 
      />

      {/* Plane 2: Distant lower plane flying right-to-left */}
      <StraightFlyingPlane 
        startPos={[45, -10, -35]} 
        rotation={[0.1, -Math.PI / 2 - 0.2, 0]} 
        scale={1.1} 
        speed={4.5} 
        maxDist={110} 
      />

      {/* Plane 3: Very distant trailing plane flying diagonally right */}
      <StraightFlyingPlane 
        startPos={[-50, 15, -45]} 
        rotation={[-0.1, Math.PI / 2 - 0.2, 0.1]} 
        scale={0.8} 
        speed={3.5} 
        maxDist={120} 
      />
    </group>
  );
}

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none opacity-40 dark:opacity-30 overflow-hidden mix-blend-screen dark:mix-blend-plus-lighter">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        camera={{ position: [0, 0, 10], fov: 45 }}
      >
        <AmbientPlanesScene />
        
        {/* Soft, ethereal lighting to blend with the background */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 20, 10]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#A78BFA" />
        <pointLight position={[15, 0, 15]} intensity={3} color="#EE2720" />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
