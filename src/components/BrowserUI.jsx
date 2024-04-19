import React from 'react'
import { BsRocketTakeoffFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
const BrowserUI = ({ setCamera }) => {

  const handleFullScreen = () => {
    window.open("https://landing.elikov.dev", "_self") 
  }

  const handleClose = () => {
    setCamera(false)
  }

  return (
    <div className={`bg-slate-900 flex justify-between items-center text-white w-[1975px] h-[42px] px-2`}>
      <div className='w-full h-full  flex items-center gap-2 tabs tabs-lifted'>
        <BsRocketTakeoffFill />
        <a role="tab" className="tab tab-active text-primary">Portfolio</a>
      </div>
      <div className={`flex justify-around items-center gap-2`}>
        <button onClick={handleFullScreen}>
          <BsArrowsFullscreen className='w-3 h-3' />
        </button>
        <button onClick={handleClose}>
          <BsXLg className='text-red-500'/>
        </button>
      </div>
    </div>
  )
}

export default BrowserUI