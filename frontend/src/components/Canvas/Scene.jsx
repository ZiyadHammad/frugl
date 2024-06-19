import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import Model from "./Model";

function Loader() {
  const { progress, active } = useProgress();

  return <Html>{progress.toFixed(1)} % loaded</Html>;
}

const Scene = () => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
