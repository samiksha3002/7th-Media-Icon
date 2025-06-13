// components/BillboardCanvas.jsx
"use client";

import { Suspense } from "react";
import { BillboardModel } from "./BillboardModel"; // we'll create this next

export default function BillboardCanvas() {
  return (
    <Canvas className="w-full h-full" camera={{ position: [2, 2, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.8}>
          <BillboardModel />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
