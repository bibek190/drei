import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import { useRef } from "react";
import { MeshNormalMaterial } from "three";
import * as THREE from "three";

export default function Experience() {
  // Create a ref
  const cubeRef = useRef();
  const sphereRef = useRef();
  return (
    <>
      <OrbitControls makeDefault />
      {/* Lights */}
      <directionalLight position={[1, 2, 3]} intensity={2.5} />
      <ambientLight intensity={1.5} />
      {/* Pivot Controls */}
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae583"]}
        scale={1}
      >
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />

          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphereRef, cubeRef]}
          >
            That's a sphere 👍
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={2}
          mirror={0.5}
          color="lightgreen"
        />
      </mesh>
      <Float speed={2.5} floatIntensity={2}>
        <Text
          position-y={2}
          font="./bangers-v20-latin-regular.woff"
          color="salmon"
          fontSize={1}
          maxWidth={4}
          textAlign="center"
        >
          BibekTech in Action
          <meshNormalMaterial side={THREE.DoubleSide} />
        </Text>
      </Float>
    </>
  );
}
