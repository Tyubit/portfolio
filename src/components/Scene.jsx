import { useState, useEffect } from 'react';
import { PresentationControls, Html,PerspectiveCamera } from '@react-three/drei';
import Model from '../Model.jsx'
import CameraPositionLogger from '../utils/CameraPositionLogger.jsx';


const Scene = () => {
    const [clicked, setClicked] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const scaleModel = width <= 768 ? [0.7, 0.7, 0.7] : [1, 1, 1];
    const phoneCamera = width <= 768 ? 3 : 2.5;
    const handleClick = () => {
        if(width <= 768){    
            window.open("https://landing.elikov.dev/", "_self");
            return;
        } 

        setClicked(!clicked);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    }, []);
return (
    <>
        <Html>
            <div className='w-[20px] flex flex-col justify-center items-center'>
                <button className='bg-yellow-500 text-black px-[30px] py-[10px]' onClick={handleClick}>
                Start
                </button>
                <p className='w-[365px] text-white'>*For better experience use fullscreen on pc browser</p>
            </div>
        </Html>
        <PerspectiveCamera makeDefault={true} dpr={[1, 2]}  position= {[-1.6, 0.8, 1.6]} fov= {45} far= {6}rotation= {[-0.3, -0.8, -0.2]} />
        <PresentationControls  speed={1} zoom={0.5} global = {true} polar={[0, 0]} azimuth={[-Math.PI / phoneCamera, Math.PI /2.5]} cursor={false}>
            <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
                <Model getClicked={clicked} setClicked={setClicked} scale={scaleModel} width={width} />
            </group>
        </PresentationControls>
        <CameraPositionLogger default event="mousedown" />
    </>
)
}
export default Scene