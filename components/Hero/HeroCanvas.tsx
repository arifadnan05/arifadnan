"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useMouseNormalized } from "@/hooks/useMouse";
import * as THREE from "three";

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosition = useMouseNormalized();

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    meshRef.current.rotation.x = time * 0.2 + mousePosition.y * 0.5;
    meshRef.current.rotation.y = time * 0.3 + mousePosition.x * 0.5;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#00f0ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const mousePosition = useMouseNormalized();

  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.05 + mousePosition.x * 0.1;
    particlesRef.current.rotation.x = mousePosition.y * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f0ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#b84fff"
        />

        <FloatingGeometry />
        <ParticleField />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
