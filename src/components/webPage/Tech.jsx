import React, { useEffect } from 'react'
import Title from './Title'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TbBrandJavascript } from "react-icons/tb";
import TechCard from './TechCard'

const Tech = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className='overflow-x-hidden' data-aos="fade-up">
      <Title title="Tech Stack" />
        <ul className='flex flex-wrap justify-center items-center gap-y-4 list-disc'>
          <li><TechCard name={'JS.js'} skill_level={70} /></li>
          <li><TechCard name={'React.js'} skill_level={60} /></li>
          <li><TechCard name={'R3F.js'} skill_level={20} /></li>
          <li><TechCard name={'Node.js'} skill_level={50} /></li>
          <li><TechCard name={'Express.js'} skill_level={50} /></li>
          <li><TechCard name={'MongoDB'} skill_level={30} /></li>
          <li><TechCard name={'PostgreSQL'} skill_level={30} /></li>
          <li><TechCard name={'sass'} skill_level={10} /></li>
          <li><TechCard name={'tailwind'} skill_level={10} /></li>
          <li><TechCard name={'Git'} skill_level={80} /></li>
          <li><TechCard name={'Vite'} skill_level={80} /></li>
        </ul>
    </div>
  )
}

export default Tech