import { useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, ContactShadows, Stars } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// Super Premium Cinematic Jet
function SuperJet({ color = "#ffffff", scale = 1, ...props }: any) {
  const groupRef = useRef<THREE.Group>(null);
  
  // High-end Materials
  const bodyMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: color,
    metalness: 1,
    roughness: 0.1,
    envMapIntensity: 2,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    reflectivity: 1
  }), [color]);

  const engineMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#222",
    metalness: 0.9,
    roughness: 0.3
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#111",
    metalness: 1,
    roughness: 0,
    transparent: true,
    opacity: 0.4,
    transmission: 0.9,
    thickness: 0.5
  }), []);

  return (
    <group ref={groupRef} scale={scale} {...props}>
      {/* Main Fuselage */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.6, 0.4, 7, 64]} />
        <primitive object={bodyMaterial} attach="material" />
      </mesh>

      {/* Sleek Nose */}
      <mesh position={[3.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.6, 1.5, 64]} />
        <primitive object={bodyMaterial} attach="material" />
      </mesh>

      {/* Designer Wings - Swept Back with Winglets */}
      <group position={[0.5, 0, 0]}>
        {/* Left Wing */}
        <mesh position={[0, 0, 5]} rotation={[0.4, -0.2, 0]}>
          <boxGeometry args={[1.5, 0.08, 10]} />
          <primitive object={bodyMaterial} attach="material" />
        </mesh>
        {/* Right Wing */}
        <mesh position={[0, 0, -5]} rotation={[-0.4, -0.2, 0]}>
          <boxGeometry args={[1.5, 0.08, 10]} />
          <primitive object={bodyMaterial} attach="material" />
        </mesh>
        
        {/* Navigation Lights */}
        <mesh position={[-0.2, 0.1, 9.8]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#00ff00" />
        </mesh>
        <mesh position={[-0.2, 0.1, -9.8]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#ff0000" />
        </mesh>
      </group>

      {/* Tail Assembly */}
      <group position={[-3, 0, 0]}>
        {/* Vertical Fin */}
        <mesh position={[0, 1.2, 0]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[1.5, 2.5, 0.1]} />
          <primitive object={bodyMaterial} attach="material" />
        </mesh>
        {/* Horizontal Fins */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1.2, 0.06, 3.5]} />
          <primitive object={bodyMaterial} attach="material" />
        </mesh>
      </group>

      {/* High-Performance Engines */}
      <group position={[-1, -0.5, 2.5]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />
          <primitive object={engineMaterial} attach="material" />
        </mesh>
        <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.35, 0.05, 16, 32]} />
          <meshStandardMaterial color="#444" metalness={1} />
        </mesh>
        {/* Engine Glow */}
        <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <circleGeometry args={[0.3, 32]} />
          <meshBasicMaterial color="#4488ff" />
        </mesh>
      </group>
      <group position={[-1, -0.5, -2.5]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />
          <primitive object={engineMaterial} attach="material" />
        </mesh>
        <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.35, 0.05, 16, 32]} />
          <meshStandardMaterial color="#444" metalness={1} />
        </mesh>
        {/* Engine Glow */}
        <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <circleGeometry args={[0.3, 32]} />
          <meshBasicMaterial color="#4488ff" />
        </mesh>
      </group>

      {/* Cockpit Canopy */}
      <mesh position={[2.8, 0.3, 0]} rotation={[0, 0, -0.2]}>
        <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <primitive object={glassMaterial} attach="material" />
      </mesh>
    </group>
  );
}

function ParallaxPlane({ 
  position, 
  color, 
  scale, 
  rotation, 
  scrollSpeed, 
  floatSpeed,
  scrollProgress 
}: { 
  position: [number, number, number];
  color: string;
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
      <SuperJet 
        position={position} 
        color={color} 
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
        color="#FFFFFF" 
        scale={3} 
        scrollSpeed={0.8}
        floatSpeed={0.5}
        scrollProgress={scrollProgress}
      />

      {/* Formation of Parallax Planes - Different depths and speeds */}
      <ParallaxPlane 
        position={[-15, 8, -12]} 
        color="#fecaca" 
        scale={1.2} 
        rotation={[0.4, 0.5, 0.2]}
        scrollSpeed={1.2}
        floatSpeed={0.8}
        scrollProgress={scrollProgress}
      />
      
      <ParallaxPlane 
        position={[20, -10, -18]} 
        color="#FFFFFF" 
        scale={0.8} 
        rotation={[-0.2, -0.6, -0.3]}
        scrollSpeed={-0.6}
        floatSpeed={0.6}
        scrollProgress={scrollProgress}
      />

      {/* Additional Parallax Planes for Enhanced Effect */}
      <ParallaxPlane 
        position={[-25, 15, 5]} 
        color="#bfdbfe" 
        scale={1.5} 
        rotation={[0.3, -0.4, 0.1]}
        scrollSpeed={1.5}
        floatSpeed={0.7}
        scrollProgress={scrollProgress}
      />

      <ParallaxPlane 
        position={[30, 5, -8]} 
        color="#e0e7ff" 
        scale={1.0} 
        rotation={[-0.5, 0.3, -0.2]}
        scrollSpeed={-1.0}
        floatSpeed={0.9}
        scrollProgress={scrollProgress}
      />

      <ParallaxPlane 
        position={[-8, 20, -25]} 
        color="#fce7f3" 
        scale={0.6} 
        rotation={[0.6, 0.2, 0.3]}
        scrollSpeed={2.0}
        floatSpeed={1.2}
        scrollProgress={scrollProgress}
      />

      <ParallaxPlane 
        position={[15, -15, 15]} 
        color="#ddd6fe" 
        scale={1.3} 
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
        exposure: 1.5
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
