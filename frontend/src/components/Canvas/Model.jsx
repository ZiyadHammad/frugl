import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
useGLTF.preload("/robot.glb");

const Model = () => {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF("/robot.glb");
  const { actions, clips } = useAnimations(animations, scene);

  useEffect(() => {
    actions["Experiment"].play();
  }, []);

  useFrame((state, delta) => {
    actions["Experiment"].time += delta;
    if (actions["Experiment"].time > actions["Experiment"].getClip().duration) {
      actions["Experiment"].time = 0;
    }
  });

  return (
    <group ref={group} scale={[2, 2, 2]} position={[0, -2, 0]} >
      <primitive object={scene} />
    </group>
  );
};

export default Model;
