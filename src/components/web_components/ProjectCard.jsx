import React from 'react'
import previewDef from '../../assets/preview_default.jpg'

const ProjectCard = ({ title, tags, preview,link}) => {
    const handleClick = () => {
    // Redirect to the external page
    window.location.href = link;
    };

  return (
      <div id="projects" className='flex flex-col justify-center items-center cursor-pointer transform hover:scale-110 transition-transform duration-300' onClick={() => {handleClick(link)}}>
        <img src={preview ? preview : previewDef} alt="" className='w-full'/>
        <h3 className='uppercase font-bold'>{title}</h3>
        <span>{tags}</span>
    </div>
  )
}

export default ProjectCard