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
  const [isLoaded, setLoaded] = React.useState(false);
  window.addEventListener("mousemove", (event: MouseEvent) => {
    if (window.innerWidth > 768) {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    }
  });

  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      (event: DeviceOrientationEvent) => {
        if (window.innerWidth < 768 && event.gamma && event.beta) {
          cursor.x = event.gamma * 0.03;
          cursor.y = event.beta * 0.01;
        }
      },
      true
    );
  }

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
