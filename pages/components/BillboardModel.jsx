// components/BillboardModel.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function BillboardModel() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });

  return (
    <group ref={ref}>
      {/* Billboard Frame */}
      <mesh>
        <boxGeometry args={[3, 1.5, 0.1]} />
        <meshStandardMaterial color="#8B5E3C" />
      </mesh>

      {/* Billboard Screen */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2.8, 1.3]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Stand */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}
