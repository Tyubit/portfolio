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
            window.open("https://portfolio-inner-6kpn.vercel.app/", "_self");
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
        <Html className={`fixed w-full flex flex-col justify-center items-center ${width <= 535 ? "left-10" : ""} `}>
            <button className={`bg-yellow-300 hover:bg-purple-700 text-black btn btn-block px-14 ${width <= 1450 ? " text-2xl h-[60px] w-[200px]" : "h-[50px] w-[150px]" }`} onClick={handleClick}>
            Start
            </button>
            <p className='w-[365px] text-white'>*For better experience use fullscreen on pc browser</p>
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