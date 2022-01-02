import React from "react";
import "../styles/threejs.scss";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

const ThreeJS: React.FC = React.memo(() => {
  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const Figure = () => {
    const font = useLoader(THREE.FontLoader, "/fonts/roboto.json");
    const randNum = randomNumber(0, 110);
    const mesh = React.useRef<THREE.Mesh>(null!);
    const fontOptions = React.useMemo(
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

    let geometry;
    let scale: number = 2;
    let rotation: number;

    switch (true) {
      case randNum >= 0 && randNum <= 10:
        geometry = new THREE.BoxGeometry(1, 1, 1); // КУБ
        scale = 2;
        rotation = 0.01;
        break;
      case randNum >= 11 && randNum <= 20:
        geometry = new THREE.IcosahedronGeometry(1, 1); // ПОЛГОНАЛЬНАЯ СФЕРА
        scale = 1.5;
        rotation = 0.006;
        break;
      case randNum >= 21 && randNum <= 30:
        geometry = new THREE.OctahedronGeometry(1, 0); // РОМБ
        scale = 1.5;
        rotation = 0.01;
        break;
      case randNum >= 31 && randNum <= 40:
        geometry = new THREE.TorusKnotGeometry(1, 0.1, 160, 10, 3, 5); // ТОР-УЗЕЛ
        scale = 1;
        rotation = 0.01;
        break;
      case randNum >= 41 && randNum <= 50:
        geometry = new THREE.SphereGeometry(1, 24, 16); // СФЕРА
        scale = 1.5;
        rotation = 0.006;
        break;
      case randNum >= 51 && randNum <= 60:
        geometry = new THREE.TetrahedronGeometry(1, 0); // ТЕТРАЭДР
        scale = 1.8;
        rotation = 0.01;
        break;
      case randNum >= 61 && randNum <= 70:
        geometry = new THREE.TorusGeometry(25, 10, 4, 4); // УГЛОВАТЫЙ ТОР
        scale = 0.05;
        rotation = 0.01;
        break;
      case randNum >= 71 && randNum <= 80:
        geometry = new THREE.TextGeometry(":D", fontOptions).center();
        scale = 1.2;
        rotation = 0.01;
        break;
      case randNum >= 81 && randNum <= 90:
        geometry = new THREE.TextGeometry("(•_•)", fontOptions).center();
        scale = 0.7;
        rotation = 0.01;
        break;
      case randNum >= 91 && randNum <= 100:
        geometry = new THREE.TextGeometry("D:", fontOptions).center();
        scale = 1.2;
        rotation = 0.01;
        break;
      case randNum >= 101 && randNum <= 110:
        geometry = new THREE.TextGeometry("H", fontOptions).center();
        scale = 1.5;
        rotation = 0.01;
        break;
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
