import React, {useState} from 'react';
import { Color } from 'three'
import { Canvas } from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import NikeAirJordan from './Model';

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
      <Canvas>
        <ambientLight />
        <spotLight intensity={1} angle={1} penumbra={1} position={[10, 15, 10]} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <NikeAirJordan
          currentSelection={currentSelection}
          updateCurrentSelection={updateCurrentSelection}
          modifiedColors={modifiedColors}
        />
      </Canvas>

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