/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
   MeshReflectorMaterial,
   OrbitControls,
   PresentationControls,
   Stage,
} from "@react-three/drei";
import { useParams } from "react-router-dom";
//import * as THREE from 'three'

const MyModel = ({ gltfURL }) => {
   const gltf = useLoader(GLTFLoader, gltfURL);
   return <primitive object={gltf.scene} />;
};

const Ground = () => {
    return (
        <mesh position={[0,-0.1,0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial           
                  blur={[300, 100]}
                  resolution={1024}
                  mixBlur={1}
                  mixStrength={40}
                  roughness={1}
                  depthScale={1.2}
                  minDepthThreshold={0.4}
                  maxDepthThreshold={1.4}
                  color="#101010"
                  metalness={0.5}
                  reflectorOffset={0.2}
               />
      </mesh>
    )
}

const ModelTest = () => {
   const { currentModel } = useParams();
   const urlka = `https://storage.yandexcloud.net/3ddesk/models/${currentModel}.gltf`;
   return (
      <Canvas>
         <color attach="background" args={["#101010"]} />
         <ambientLight />
         <OrbitControls />
         <PresentationControls
            speed={1.5}
            global={false}
            zoom={0.2}
            polar={[-0.1, Math.PI / 4]}
         >
            <Stage
               environment={"city"}
               intensity={0.3}
               castShadow={false}
               shadows='accumulative'
            >
               <mesh>
                  <MyModel gltfURL={urlka} />
                  <meshNormalMaterial/>
               </mesh>
               
            </Stage>
            {/* <Ground/> */}
         </PresentationControls>
         <pointLight position={[10, 10, 10]} />
      </Canvas>
   );
};

export default ModelTest;
