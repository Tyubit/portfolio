import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Title from './Title'
import OpenResume from './OpenResume'

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <div id="about" className='overflow-x-hidden md:px-[100px]'>
      <Title title="About me"/>
      <div className="md:block flex flex-col justify-center items-center">
        <iframe src="https://giphy.com/embed/3ndAvMC5LFPNMCzq7m"className="w-[200px] h-[250px] mr-3 float-left border border-solid border-yellow-400 border-[8px]"></iframe>
        <p className=' '>
  I am full-stack developer with a passion for creating innovative and impactful web applications. I take pride in my work and strive for excellence in everything I do.<br/>
  My approach to development is characterized by meticulous attention to detail and a commitment to delivering high-quality, user-centric solutions. I am  value collaboration, always eager to learn from others and contribute to the success of the team.
  I enjoy sharing knowledge, networking with peers, and staying up-to-date with the latest trends and technologies in web development.<br/>
  I love the exhilarating rush of catching waves while surfing and the freedom of cruising down the streets on a skateboard.  In my previous role, I honed my 3D skills by creating engaging visual content and assets. Additionally, my experience as a cameraman allowed me to capture scenes effectively, ensuring high-quality footage for various projects.<br/>
  In summary, I am a hardworking and conscientious developer who is dedicated to continuous improvement and making a positive impact in the tech community.
        </p>
      </div>
      <OpenResume />
    </div>
  )
}

export default About
