"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function createPrng(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function NeuralHalo() {
  const points = useMemo(() => {
    const positions: number[] = [];
    const count = 1200;
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2 + Math.sin(i * 0.6) * 0.18;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle * 1.6) * 0.6;
      const z = Math.sin(angle) * radius;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  const material = useMemo(() => {
    const mat = new THREE.PointsMaterial({
      color: new THREE.Color("#86b7ff"),
      size: 0.035,
      transparent: true,
      opacity: 0.9,
    });
    mat.depthWrite = false;
    mat.blending = THREE.AdditiveBlending;
    return mat;
  }, []);

  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(points, 3),
    );
    return geo;
  }, [points]);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.6;
    ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.12) * 0.3;
  });

  return <points ref={ref} material={material} geometry={geometry} />;
}

function PlasmaCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.25;
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color="#7F5CFF"
        emissive="#7790ff"
        emissiveIntensity={1.6}
        roughness={0.2}
        metalness={0.65}
      />
    </mesh>
  );
}

function QuantumRings() {
  const group = useRef<THREE.Group>(null);
  const rings = useMemo(() => {
    return new Array(3).fill(null).map((_, idx) => ({
      scale: 1.4 + idx * 0.4,
      speed: 0.25 + idx * 0.08,
      color: idx === 0 ? "#5D7BFF" : idx === 1 ? "#7F5CFF" : "#3ED7FF",
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.x = Math.sin(t * 0.18) * 0.25;
    group.current.rotation.y = Math.cos(t * 0.22) * 0.35;
  });

  return (
    <group ref={group}>
      {rings.map((ring, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, 0]}
          scale={ring.scale}
        >
          <torusGeometry args={[1.2, 0.012 + index * 0.006, 32, 260]} />
          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={0.55 - index * 0.08}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField() {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const prng = createPrng(2024);
    const count = 240;
    const data = [] as { position: THREE.Vector3; factor: number }[];
    for (let i = 0; i < count; i += 1) {
      const radius = 2.6 + prng() * 1.8;
      const theta = prng() * Math.PI * 2;
      const phi = Math.acos(2 * prng() - 1);
      const position = new THREE.Vector3()
        .setFromSphericalCoords(radius, phi, theta);
      data.push({ position, factor: 0.4 + prng() * 0.6 });
    }
    return data;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.children.forEach((child, index) => {
      const mesh = child as THREE.Mesh;
      const { position, factor } = particles[index];
      const noise = Math.sin(t * factor + index) * 0.18;
      mesh.position.copy(position.clone().multiplyScalar(1 + noise * 0.1));
      mesh.rotation.x += 0.002 * factor;
      mesh.rotation.y += 0.003 * factor;
    });
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position.toArray()}>
          <icosahedronGeometry args={[0.05, 0]} />
          <meshBasicMaterial
            color={index % 5 === 0 ? "#7F5CFF" : "#00D7FF"}
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function LightRig() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={2.2}
        angle={0.45}
        penumbra={0.6}
        position={[6, 6, 6]}
        color="#8ea5ff"
      />
      <spotLight
        intensity={1.8}
        angle={0.5}
        penumbra={0.7}
        position={[-5, -4, 6]}
        color="#3ed7ff"
      />
    </>
  );
}

export function HeroCanvas() {
  return (
    <div className="relative h-[520px] w-full rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0e1428]/80 via-[#0b1020]/70 to-[#090b12]/90 p-[1px] shadow-[0_60px_180px_-80px_rgba(92,129,250,0.8)]">
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_20%_20%,rgba(127,92,255,0.28),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(0,215,255,0.24),transparent_55%)] opacity-90" />
      <Canvas className="rounded-[32px]" shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
          <LightRig />
          <Float
            speed={1.5}
            rotationIntensity={0.45}
            floatIntensity={0.8}
          >
            <PlasmaCore />
            <QuantumRings />
          </Float>
          <NeuralHalo />
          <ParticleField />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(127,92,255,0.3),transparent_60%)]" />
    </div>
  );
}
