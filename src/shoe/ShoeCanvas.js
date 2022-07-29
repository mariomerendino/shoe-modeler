import React, {Suspense, useState} from 'react';
import { Color } from 'three'
import { Canvas } from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import NikeAirJordan from './NikeAirJordan/Model';
import Loader from '../components/Loader';

const ShoeCanvas = () => {
  const [currentSelection, updateCurrentSelection] = useState(null)
  const [modifiedColors, updateModifiedColors] = useState({});

  const updateColor = (color) => {
    const newColor = {}
    newColor[currentSelection] = new Color(color);

    updateModifiedColors({...modifiedColors, ...newColor})
  }

  return(
    <div className={'mainCanvasArea'}>
      <Suspense fallback={<Loader />}>
        <Canvas>
          <ambientLight intensity={.25}/>
          <spotLight intensity={1} angle={1} penumbra={1} position={[0, 0, 180]} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <NikeAirJordan
            currentSelection={currentSelection}
            updateCurrentSelection={updateCurrentSelection}
            modifiedColors={modifiedColors}
          />
          <spotLight intensity={1} angle={10} penumbra={1} position={[180, 180, 180]} />
        </Canvas>
      </Suspense>


      {currentSelection && 
        <div>
          {currentSelection}
          <input type="color" onChange={e => updateColor(e.target.value)} />
        </div>
      }
    </div>
  );

};

export default ShoeCanvas;