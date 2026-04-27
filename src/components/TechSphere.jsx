import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import colors from "../themes/colors";
import { getImageUrl } from "../utils/imageImporter";

const TechItem = ({ tech, position }) => {
  const labelRef = useRef();

  return (
    <Html position={position} center distanceFactor={15}>
      <div
        className="flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-125 group cursor-pointer"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: `1px solid ${colors.primary}20`,
          backdropFilter: "blur(4px)",
          width: "100px",
          height: "100px",
        }}
      >
        <img
          src={getImageUrl(tech.image)}
          alt={tech.name}
          className="w-12 h-12 object-contain mb-2 filter drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]"
        />
        <span
          className="text-[10px] font-bold text-center uppercase tracking-wider"
          style={{ color: colors.primary }}
        >
          {tech.name}
        </span>
      </div>
    </Html>
  );
};

const SphereContent = ({ technologies }) => {
  const groupRef = useRef();

  // Distribute items on a sphere using Fibonacci Spiral
  const items = useMemo(() => {
    const techItems = [];
    const count = technologies.length;
    const radius = 8;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      techItems.push({
        tech: technologies[i],
        position: [x, y, z],
      });
    }
    return techItems;
  }, [technologies]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <TechItem key={index} tech={item.tech} position={item.position} />
      ))}

      {/* Central Glow */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color={colors.primary}
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
};

const TechSphere = ({ technologies }) => {
  return (
    <div className="w-full h-[450px] relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <SphereContent technologies={technologies} />
      </Canvas>
    </div>
  );
};

export default TechSphere;
