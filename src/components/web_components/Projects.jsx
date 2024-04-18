import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Title from './Title'
import ProjectCard from './ProjectCard.jsx'
import OpenResume from './OpenResume.jsx'
import {projects} from '../../assets/assets.js'

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])
  return (
    <div id='projects' className='md:px-[100px]'>
      <Title title="Projects" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} tags={project.tags} preview={project.preview} link={project.link} />
        ))}
      </div>
      <OpenResume />
    </div>
  )
}

export default Projects