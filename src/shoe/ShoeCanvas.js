import React from 'react';
import { Canvas } from "@react-three/fiber";
import {OrbitControls, useGLTF} from '@react-three/drei'
import NikeAirJordan from './Model';

const ShoeCanvas = () => {
  return <Canvas>
    <ambientLight />
    <spotLight intensity={1} angle={1} penumbra={1} position={[10, 15, 10]} />
    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    <NikeAirJordan />
  </Canvas>;
};

export default ShoeCanvas;