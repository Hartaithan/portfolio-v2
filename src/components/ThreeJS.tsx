import React from "react";
import "../styles/threejs.scss";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function getFigure(min: number, max: number) {
	const randNum = Math.floor(Math.random() * (max - min + 1) + min);
	switch (true) {
		case randNum >= 0 && randNum <= 10:
			return <boxGeometry args={[1, 1, 1]} />; // КУБ
		case randNum >= 11 && randNum <= 20:
			return <icosahedronGeometry args={[0.7, 1]} />; // ПОЛГОНАЛЬНАЯ СФЕРА
		case randNum >= 21 && randNum <= 30:
			return <octahedronGeometry args={[0.7, 0]} />; // РОМБ
		case randNum >= 31 && randNum <= 40:
			return <torusKnotGeometry args={[0.5, 0.08, 160, 10, 3, 5]} />; // ТОР-УЗЕЛ
		case randNum >= 41 && randNum <= 50:
			return <sphereGeometry args={[0.7, 32, 16]} />; // СФЕРА
		default:
			return <boxGeometry args={[1, 1, 1]} />;
	}
}

const randFigure = getFigure(0, 50);

function Box(props: JSX.IntrinsicElements["mesh"]) {
	const mesh = React.useRef<THREE.Mesh>(null!);
	useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

	return (
		<mesh {...props} ref={mesh} scale={2}>
			{randFigure}
			<meshStandardMaterial color="white" wireframe={true} transparent={true} opacity={0.3} />
		</mesh>
	);
}

const ThreeJS: React.FC = () => {
	return (
		<Canvas className="threejs" dpr={window.devicePixelRatio}>
			<ambientLight />
			<Box position={[0, 0, 0]} />
		</Canvas>
	);
};

export default ThreeJS;
