import React, { useEffect } from 'react'
import Title from './Title'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TechCard from './TechCard'
import {tech} from '../../assets/assets.js'

const Tech = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])
  return (
    <div id='tech' className='overflow-x-hidden md:px-[100px]'>
      <Title title="Tech Stack" />
        <ul className='flex flex-wrap justify-center items-center gap-y-4 list-disc w-[90%] mx-auto'>
        {Object.keys(tech).map((key,index) => (
          <li key={index} className='w-full'><TechCard name={key} skill_level={tech[key]}/></li>
        ))}
        </ul>
    </div>
  )
}

export default Tech