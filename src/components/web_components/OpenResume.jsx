import React from 'react'
import resume from '../../assets/resume.pdf'

const OpenResume = () => {
    return (
      <div className='flex flex-col justify-center items-center text-primary p-4'>
        <span>Looking for my resume? <a href={resume} className='text-info'>Click here</a></span>
      </div>
  )
}

export default OpenResume