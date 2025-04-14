'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Stars({ count = 5000 }) {
  const { viewport } = useThree();
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Create a sphere of stars with varying distances
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const distance = 50 + Math.random() * 150;

      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);

      // Vary the star sizes slightly
      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, sizes };
  }, [count]);

  const starsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      // Very subtle rotation to create parallax effect
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      starsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.01;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={positions.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        sizeAttenuation={true}
        color="white"
        transparent
        opacity={0.8}
        fog={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ clock }) => {
    if (cameraRef.current) {
      // Very subtle camera movement to enhance the floating feeling
      cameraRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.5;
      cameraRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.5;
    }
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} fov={60} near={0.1} far={1000} />
      <Stars />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.1}
        autoRotate={true}
        autoRotateSpeed={0.1}
      />
      <EffectComposer>
        <Bloom intensity={0.2} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
      </EffectComposer>
    </>
  );
}

export default function SpaceHero() {
  return (
    <div className="absolute inset-0 h-[calc(100%-5rem)] w-full">
      <Canvas className="!bg-none">
        <Scene />
      </Canvas>
      <div className="absolute inset-0">{/* maybe use later */}</div>
    </div>
  );
}
