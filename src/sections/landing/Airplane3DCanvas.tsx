import { useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, ContactShadows, Stars, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// Preload the realistic model
useGLTF.preload("/models/airplane.glb");

// Realistic Airplane Model Component
function RealisticPlane({ scale = 1, ...props }: any) {
  const { scene } = useGLTF("/models/airplane.glb");
  const clone = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Enhance materials for premium look if they exist
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat.name.toLowerCase().includes("glass")) {
            mat.transparent = true;
            mat.opacity = 0.5;
            mat.metalness = 1;
          }
        }
      }
    });
  }, [clone]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Dynamic banking animation
      groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
      groupRef.current.rotation.x = Math.cos(time * 0.3) * 0.05;
      
      // Slight vertical oscillation
      groupRef.current.position.y += Math.sin(time * 0.7) * 0.002;

      // Animate propellers if they exist
      groupRef.current.traverse((child) => {
        if (child.name.toLowerCase().includes("propeller") || child.name.toLowerCase().includes("blade")) {
          child.rotation.y += 0.4;
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

function ParallaxPlane({ 
  position, 
  scale, 
  rotation, 
  scrollSpeed, 
  floatSpeed,
  scrollProgress 
}: { 
  position: [number, number, number];
  scale: number;
  rotation?: [number, number, number];
  scrollSpeed: number;
  floatSpeed: number;
  scrollProgress?: MotionValue<number>;
}) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current && scrollProgress) {
      const time = state.clock.getElapsedTime();
      const progress = scrollProgress.get();
      
      // Parallax movement based on scroll
      meshRef.current.position.y = position[1] + (progress * scrollSpeed * 10);
      meshRef.current.position.x = position[0] + Math.sin(time * floatSpeed) * 2;
      meshRef.current.position.z = position[2];
      
      // Dynamic rotation with scroll
      meshRef.current.rotation.x = (rotation?.[0] || 0) + (progress * 0.5);
      meshRef.current.rotation.y = (rotation?.[1] || 0) + (progress * 0.3);
      meshRef.current.rotation.z = (rotation?.[2] || 0) + Math.sin(time * 0.3) * 0.1;
    } else if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time * floatSpeed) * 1.5;
    }
  });

  return (
    <Float speed={floatSpeed * 2} rotationIntensity={0.3} floatIntensity={0.8}>
      <RealisticPlane 
        position={position} 
        scale={scale} 
        rotation={rotation}
      />
    </Float>
  );
}

function AirplaneScene({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sceneRef.current) {
      const time = state.clock.getElapsedTime();
      const progress = scrollProgress ? scrollProgress.get() : 0;
      
      // Floating motion
      sceneRef.current.position.y = Math.sin(time * 0.5) * 1.2;
      sceneRef.current.position.x = Math.cos(time * 0.3) * 2;
      
      // Dramatic rotation tied to scroll
      const targetRotationY = Math.PI / 2.5 + progress * Math.PI * 2;
      const targetRotationX = progress * 1.2 - 0.4;
      const targetRotationZ = Math.sin(time * 0.2) * 0.2;
      
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, targetRotationY, 0.03);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, targetRotationX, 0.03);
      sceneRef.current.rotation.z = THREE.MathUtils.lerp(sceneRef.current.rotation.z, targetRotationZ, 0.03);
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Main Hero Jet - Massive and Foregrounded */}
      <ParallaxPlane 
        position={[8, -2, 10]} 
        scale={0.5} 
        scrollSpeed={0.8}
        floatSpeed={0.5}
        scrollProgress={scrollProgress}
      />

      {/* Formation of Parallax Planes - Different depths and speeds */}
      <ParallaxPlane 
        position={[-15, 8, -12]} 
        scale={0.2} 
        rotation={[0.4, 0.5, 0.2]}
        scrollSpeed={1.2}
        floatSpeed={0.8}
        scrollProgress={scrollProgress}
      />
      
      <ParallaxPlane 
        position={[20, -10, -18]} 
        scale={0.15} 
        rotation={[-0.2, -0.6, -0.3]}
        scrollSpeed={-0.6}
        floatSpeed={0.6}
        scrollProgress={scrollProgress}
      />

      {/* Additional Parallax Planes for Enhanced Effect */}
      <ParallaxPlane 
        position={[-25, 15, 5]} 
        scale={0.25} 
        rotation={[0.3, -0.4, 0.1]}
        scrollSpeed={1.5}
        floatSpeed={0.7}
        scrollProgress={scrollProgress}
      />

      <ParallaxPlane 
        position={[30, 5, -8]} 
        scale={0.2} 
        rotation={[-0.5, 0.3, -0.2]}
        scrollSpeed={-1.0}
        floatSpeed={0.9}
        scrollProgress={scrollProgress}
      />

      <ParallaxPlane 
        position={[-8, 20, -25]} 
        scale={0.1} 
        rotation={[0.6, 0.2, 0.3]}
        scrollSpeed={2.0}
        floatSpeed={1.2}
        scrollProgress={scrollProgress}
      />

      <ParallaxPlane 
        position={[15, -15, 15]} 
        scale={0.22} 
        rotation={[-0.3, -0.5, 0.4]}
        scrollSpeed={0.4}
        floatSpeed={0.4}
        scrollProgress={scrollProgress}
      />
    </group>
  );
}

export default function Airplane3DCanvas({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  useEffect(() => {
    console.log("Super Jet 3D Space Ready");
  }, []);

  return (
    <Canvas 
      shadows 
      dpr={[1, 2]} 
      gl={{ 
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 28]} fov={42} />
      
      {/* High-End Lighting */}
      <ambientLight intensity={1} />
      <directionalLight 
        position={[30, 40, 20]} 
        intensity={3} 
        color="#FFFFFF" 
        castShadow 
      />
      <pointLight position={[-20, -20, -10]} intensity={2} color="#EE2720" />
      <pointLight position={[15, 15, 30]} intensity={1.5} color="#4488ff" />
      <spotLight 
        position={[0, 60, 30]} 
        angle={0.6} 
        penumbra={1} 
        intensity={4} 
        color="#FFFFFF"
      />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <AirplaneScene scrollProgress={scrollProgress} />
      
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -12, 0]} 
          opacity={0.5} 
          scale={50} 
          blur={3} 
          far={25} 
        />
      </Suspense>
    </Canvas>
  );
}
