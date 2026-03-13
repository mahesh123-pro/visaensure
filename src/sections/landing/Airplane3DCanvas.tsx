import { useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame, GroupProps } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, ContactShadows, Stars, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// Preload the realistic model
useGLTF.preload("/models/airplane.glb");

// Realistic Airplane Model Component
function RealisticPlane({ scale = 1, ...props }: GroupProps) {
  const { scene } = useGLTF("/models/airplane.glb");
  const clone = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef<THREE.Group | null>(null);

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
      
      // Dynamic banking animation - purely rotational
      groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
      groupRef.current.rotation.x = Math.cos(time * 0.3) * 0.05;
      
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
  rotation = [0, 0, 0], 
  scrollSpeed, 
  floatSpeed,
  flightSpeed = 10,
  scrollProgress 
}: { 
  position: [number, number, number];
  scale: number;
  rotation?: [number, number, number];
  scrollSpeed: number;
  floatSpeed: number;
  flightSpeed?: number;
  scrollProgress?: MotionValue<number>;
}) {
  const outerGroup = useRef<THREE.Group>(null);
  const innerGroup = useRef<THREE.Group>(null);
  const startVector = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state, delta) => {
    if (outerGroup.current) {
      // Fly perfectly straight forward in its local Z direction
      outerGroup.current.translateZ(flightSpeed * delta);
      
      // Loop the plane back once it travels far enough
      if (outerGroup.current.position.distanceTo(startVector) > 150) {
        outerGroup.current.position.copy(startVector);
      }
    }

    if (innerGroup.current) {
      const progress = scrollProgress ? scrollProgress.get() : 0;
      const time = state.clock.getElapsedTime();
      
      // Parallax elevation and subtle shift
      innerGroup.current.position.y = (progress * scrollSpeed * 20) + Math.sin(time * floatSpeed) * 1.5;
      
      // Dynamic cinematic banking based on scroll, so it looks like it glides gracefully
      innerGroup.current.rotation.z = THREE.MathUtils.lerp(
        innerGroup.current.rotation.z, 
        -(progress * scrollSpeed * 0.8) + Math.sin(time * 0.3) * 0.05, 
        0.05
      );
      // Nice pitch up on scroll
      innerGroup.current.rotation.x = THREE.MathUtils.lerp(
        innerGroup.current.rotation.x, 
        -(progress * 0.5), 
        0.05
      );
    }
  });

  return (
    <group ref={outerGroup} position={position} rotation={rotation}>
      <group ref={innerGroup}>
        <Float speed={floatSpeed * 2} rotationIntensity={0.1} floatIntensity={0.5}>
          <RealisticPlane scale={scale} />
        </Float>
      </group>
    </group>
  );
}

function AirplaneScene({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  const sceneRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (sceneRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Gentle overall scene breathing to keep it alive
      sceneRef.current.position.y = Math.sin(time * 0.2) * 1.5;
      sceneRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Main Hero Jet - Massive and Foregrounded, flying across */}
      <ParallaxPlane 
        position={[25, -5, -40]} 
        rotation={[-0.1, -Math.PI / 4, 0]}
        scale={0.8} 
        scrollSpeed={0.8}
        floatSpeed={0.5}
        flightSpeed={18}
        scrollProgress={scrollProgress}
      />

      {/* Formation of Secondary Planes */}
      <ParallaxPlane 
        position={[-30, 15, -60]} 
        scale={0.4} 
        rotation={[0.1, Math.PI / 6, 0.1]}
        scrollSpeed={1.2}
        floatSpeed={0.8}
        flightSpeed={14}
        scrollProgress={scrollProgress}
      />
      
      <ParallaxPlane 
        position={[40, -15, -80]} 
        scale={0.3} 
        rotation={[-0.1, -Math.PI / 5, -0.1]}
        scrollSpeed={-0.6}
        floatSpeed={0.6}
        flightSpeed={10}
        scrollProgress={scrollProgress}
      />

      {/* Additional Distant Planes */}
      <ParallaxPlane 
        position={[-50, 20, -100]} 
        scale={0.35} 
        rotation={[0, Math.PI / 8, 0]}
        scrollSpeed={1.5}
        floatSpeed={0.7}
        flightSpeed={12}
        scrollProgress={scrollProgress}
      />

      <ParallaxPlane 
        position={[50, 10, -90]} 
        scale={0.25} 
        rotation={[-0.2, -Math.PI / 3, 0]}
        scrollSpeed={-1.0}
        floatSpeed={0.9}
        flightSpeed={15}
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
