import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";

function CameraPositionLogger({event} = {}) {
  const { camera } = useThree();
  const cameraPosition = useRef(camera);

    useEffect(() => {
        const logCameraPosition = () => {
            const { x, y, z } = cameraPosition.current.position;

            // console.log(`Camera position: x: ${x}, y: ${y}, z: ${z}`, cameraPosition.current);
        };
        cameraPosition.current = camera;
        window.addEventListener(event, logCameraPosition);

        return () => {
            window.removeEventListener(event, logCameraPosition);
        };

    },[]);

  return null;
}

export default CameraPositionLogger;