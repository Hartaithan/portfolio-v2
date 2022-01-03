import React from "react";
import "../styles/threejs.scss";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

const ThreeJS: React.FC = React.memo(() => {
  function getRandNum(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  const Figure = () => {
    const font = useLoader(THREE.FontLoader, "/fonts/roboto.json");
    const mesh = React.useRef<THREE.Mesh>(null!);
    const options = React.useMemo(
      () => ({
        font: font,
        size: 2,
        height: 0.3,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 0,
        bevelSize: 0.001,
        bevelOffset: 0,
        bevelSegments: 1,
      }),
      [font]
    );
    const material = new THREE.MeshStandardMaterial({
      color: "white",
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const figures = [
      {
        id: 1,
        name: "CUBE",
        geometry: new THREE.BoxGeometry(1, 1, 1),
        scale: 2,
        rotation: 0.01,
      },
      {
        id: 2,
        name: "POLYGONAL SPHERE",
        geometry: new THREE.IcosahedronGeometry(1, 1),
        scale: 1.5,
        rotation: 0.006,
      },
      {
        id: 3,
        name: "RHOMBUS",
        geometry: new THREE.OctahedronGeometry(1, 0),
        scale: 1.5,
        rotation: 0.01,
      },
      {
        id: 4,
        name: "TORUS KNOT",
        geometry: new THREE.TorusKnotGeometry(1, 0.1, 160, 10, 3, 5),
        scale: 1,
        rotation: 0.01,
      },
      {
        id: 5,
        name: "SPHERE",
        geometry: new THREE.SphereGeometry(1, 24, 16),
        scale: 1.5,
        rotation: 0.006,
      },
      {
        id: 6,
        name: "TETRAHEDRON",
        geometry: new THREE.TetrahedronGeometry(1, 0),
        scale: 1.8,
        rotation: 0.01,
      },
      {
        id: 7,
        name: "POLYGONAL TORUS",
        geometry: new THREE.TorusGeometry(25, 10, 4, 4),
        scale: 0.05,
        rotation: 0.01,
      },
      {
        id: 8,
        name: ":D",
        geometry: new THREE.TextGeometry(":D", options).center(),
        scale: 1.2,
        rotation: 0.01,
      },
      {
        id: 9,
        name: "(•_•)",
        geometry: new THREE.TextGeometry("(•_•)", options).center(),
        scale: 0.7,
        rotation: 0.01,
      },
      {
        id: 10,
        name: "D:",
        geometry: new THREE.TextGeometry("D:", options).center(),
        scale: 1.2,
        rotation: 0.01,
      },
      {
        id: 11,
        name: "H",
        geometry: new THREE.TextGeometry("H", options).center(),
        scale: 1.5,
        rotation: 0.01,
      },
    ];

    let geometry;
    let scale = 1;
    let rotation = 0.01;

    const index = getRandNum(figures.length);
    const randomFigure = figures.find((x) => x.id === index);
    if (randomFigure) {
      geometry = randomFigure.geometry;
      scale = randomFigure.scale;
      rotation = randomFigure.rotation;
    }

    useFrame(() => {
      mesh.current.rotation.y += rotation;
    });

    return (
      <mesh
        position={[0, 0, 0]}
        ref={mesh}
        geometry={geometry}
        material={material}
        scale={scale}
      />
    );
  };

  return (
    <React.Suspense fallback={null}>
      <Canvas className="threejs" dpr={window.devicePixelRatio}>
        <ambientLight />
        <Figure />
      </Canvas>
    </React.Suspense>
  );
});

export default ThreeJS;
