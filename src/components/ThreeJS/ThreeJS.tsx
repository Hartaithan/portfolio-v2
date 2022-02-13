import React from "react";
import "./threejs.scss";
import { Canvas } from "@react-three/fiber";
import Figure from "../Figure/Figure";
import { ICursor, ISizes } from "../../models/FigureModel";

const sizes: ISizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const cursor: ICursor = {
  x: 0,
  y: 0,
};

const ThreeJS: React.FC = React.memo(() => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [isLoaded, setLoaded] = React.useState(false);

  const handleMouseMove = React.useCallback((event: MouseEvent) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  }, []);

  const handleOrientation = React.useCallback(
    (event: DeviceOrientationEvent) => {
      if (event.gamma && event.beta) {
        cursor.x = event.gamma * 0.03;
        cursor.y = event.beta * 0.01;
      }
    },
    []
  );

  React.useEffect(() => {
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    if (isMobile) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [handleMouseMove, handleOrientation]); // eslint-disable-line

  return (
    <React.Suspense fallback={null}>
      <Canvas
        className="threejs"
        dpr={window.devicePixelRatio}
        style={{ opacity: isLoaded ? "1" : "0" }}
      >
        <ambientLight />
        <Figure sizes={sizes} cursor={cursor} setLoaded={setLoaded} />
      </Canvas>
    </React.Suspense>
  );
});

export default ThreeJS;
