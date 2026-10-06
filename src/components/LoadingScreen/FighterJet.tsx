'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface FighterJetProps {
  onProgress?: (progress: number) => void;
}

export const FighterJet: React.FC<FighterJetProps> = () => {
  const groupRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Load the GLB model
  const { scene } = useGLTF('/models/saab35draken.glb');

  // Clone, center and normalize model scale
  const { model } = useMemo(() => {
    const cloned = scene.clone(true);

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Center geometry so pivot is at center of gravity
    cloned.position.set(center.x, center.y, center.z);

    // Create wrapper
    const wrapper = new THREE.Group();
    wrapper.add(cloned);

    // Determine normalize scale: target approx 2.8 units in length
    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = 2.8 / (maxDim || 1);
    wrapper.scale.setScalar(scaleFactor);

    // Enhance materials for aerospace defence aesthetics
    cloned.traverse((child: any) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
          mat.roughness = 0.35;
          mat.metalness = 0.75;
          mat.envMapIntensity = 1.4;
          mesh.material = mat;
        }
      }
    });

    return { model: wrapper };
  }, [scene]);

  // Dynamic span based on current viewport width so it starts and ends completely offscreen
  // We add generous margins (buffer 5 units on each side)
  const isMobile = viewport.width < 8;
  const buffer = isMobile ? 3.5 : 5.0;
  const startX = -viewport.width / 2 - buffer;
  const endX = viewport.width / 2 + buffer;
  const totalDistance = endX - startX;

  // Animation progress state (0 to 1) running continuously at steady flight speed
  const flightProgress = useRef(0);
  const flightSpeed = 0.24; // Crosses screen in ~4.1 seconds

  useFrame((state: any, delta: number) => {
    if (!groupRef.current) return;

    // Advance flight progress independently of data loading progress
    flightProgress.current += delta * flightSpeed;
    if (flightProgress.current > 1) {
      flightProgress.current = 0; // Seamless reset offscreen
    }

    const t = flightProgress.current;
    const currentX = startX + t * totalDistance;

    // Natural aerodynamic flight dynamics:
    // Subtle altitude sinusoidal wave
    const currentY = Math.sin(t * Math.PI * 2) * (isMobile ? 0.35 : 0.55);

    // Gentle depth (Z) drift giving cinematic 3D perspective
    const currentZ = Math.cos(t * Math.PI * 2) * (isMobile ? 0.5 : 0.8);

    groupRef.current.position.set(currentX, currentY, currentZ);

    // Natural banking (roll around X/Z axis) as it adjusts altitude
    const bankAngle = Math.sin(t * Math.PI * 2) * 0.18;

    // Natural pitch (nose adjusts slightly with vertical climb/dive)
    const pitchAngle = Math.cos(t * Math.PI * 2) * 0.08;

    // Yaw: Nose is pointed right (+X), with a gentle 15 degree angle towards the camera
    const baseHeading = Math.PI / 2 + 0.22;
    const yawVariation = Math.sin(t * Math.PI * 2) * 0.05;

    // High frequency micro turbulence
    const microTurbulence = Math.sin(state.clock.elapsedTime * 18) * 0.008;

    groupRef.current.rotation.set(
      pitchAngle + microTurbulence,
      baseHeading + yawVariation,
      bankAngle
    );

    // Pulse afterburner engine glow
    if (flameRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 30) * 0.15;
      flameRef.current.scale.set(pulse, pulse, 1.2 + Math.random() * 0.2);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Model */}
      <primitive object={model} />

      {/* Supersonic Afterburner Flame & Thruster Glow */}
      <group position={[1.4, 0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
        {/* Inner intense flame core */}
        <mesh ref={flameRef} position={[0, 0, 0]}>
          <coneGeometry args={[0.09, 0.8, 16]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.85} />
        </mesh>

        {/* Outer supersonic shockwave flame plume */}
        <mesh position={[0, 0.2, 0]}>
          <coneGeometry args={[0.15, 1.4, 16]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.65} />
        </mesh>

        {/* Thruster point light casting subtle glow */}
        <pointLight color="#f97316" intensity={3.0} distance={4} />
      </group>
    </group>
  );
};

// Preload GLB model to prevent hiccups
useGLTF.preload('/models/saab35draken.glb');

export default FighterJet;
