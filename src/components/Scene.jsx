import { useState,useRef, useEffect } from 'react';
import { PresentationControls, Html,PerspectiveCamera } from '@react-three/drei';
import Model from '../Model.jsx'
import CameraPositionLogger from '../utils/CameraPositionLogger.jsx';


const Scene = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        console.log(clicked);
    }
return (
    <>
        <Html className='fixed bottom-0 left-5 w-full flex justify-center'>
            <button className='bg-yellow-300 hover:bg-purple-700 text-black btn btn-block px-14' onClick={handleClick}>
            Start
            </button>
          </Html>
        <PerspectiveCamera makeDefault={true} dpr={[1, 2]}  position= {[-1.6, 0.8, 1.6]} fov= {45} far= {6}rotation= {[-0.3, -0.8, -0.2]} />
        <PresentationControls  speed={1} zoom={0.5} global = {true} polar={[0, 0]} azimuth={[-Math.PI / 2.5, Math.PI /2.5]} cursor={false} position>
            <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
                <Model getClicked={clicked}/>
            </group>
        </PresentationControls>
        <CameraPositionLogger default event="mousedown" />
    </>
)
}
// next to pc
// position={[0.2, 0.55, -0.5]}
//overview
// position={[-1.6, 0.8, 1.6]}
//
export default Scene