import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const ParticleField = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const amber = new THREE.Color("hsl(42, 90%, 52%)");
    const dim = new THREE.Color("hsl(220, 8%, 30%)");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const c = Math.random() > 0.85 ? amber : dim;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.elapsedTime * 0.02;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
};

const FloatingRing = ({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.elapsedTime * speed;
    ref.current.rotation.x = tilt;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color="hsl(42, 90%, 52%)" transparent opacity={0.15} />
    </mesh>
  );
};

const GlowingSphere = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(clock.elapsedTime * 0.5) * 0.1;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial color="hsl(42, 90%, 52%)" transparent opacity={0.03} />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ParticleField />
        <FloatingRing radius={3} speed={0.08} tilt={0.5} />
        <FloatingRing radius={2.2} speed={-0.05} tilt={-0.3} />
        <FloatingRing radius={4} speed={0.03} tilt={0.8} />
        <GlowingSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;
