import React, { useEffect } from 'react'
import helmet1 from '../../assets/helmet.png'
import helmet2 from '../../assets/helmet2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className='relative md:h-[800px] h-[400px]' data-aos="fade-up ">
      <div className= 'mt-[10em] flex flex-col justify-center items-center'>
        <img src={helmet2} alt="helmet" className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] animate-spin'/>
        <div className='flex flex-col justify-center items-center uppercase font-bold primary md:text-4xl text-shadow'>
          <h1 >Elisha Kovalev</h1>
          <h2 >FullStack Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero