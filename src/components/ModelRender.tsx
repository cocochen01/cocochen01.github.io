import React, { Suspense, useEffect, useRef } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Group } from 'three';
import { Canvas } from '@react-three/fiber';

const Model = () => {
  const group = useRef<Group>(null);
  const gltf = useGLTF("/assets/3d/model1.glb");
  const { actions } = useAnimations(gltf.animations, group);

  useEffect(() => {
    if (actions) {
      const firstAction = Object.values(actions)[0];
      firstAction?.play();
    }
  }, [actions]);

  return <primitive ref={group} object={gltf.scene} scale={1.5} />;
};

const ModelRender: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 1.8, 2.8] }}>
        <directionalLight position={[1, 1, 1]} intensity={1} />
        <ambientLight intensity={0.5} />
        <hemisphereLight
          color={0xffc6a6}
          groundColor={0x000000}
          intensity={1}
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.3}
          maxPolarAngle={Math.PI / 2.3}
          target={[0, 1.8, 0]}
        />
      </Canvas>
    </div>
  );
};

export default ModelRender;
