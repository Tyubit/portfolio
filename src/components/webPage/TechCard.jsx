import React from 'react'
const TechCard = ({name,skill_level}) => {
  return (
    <div className='flex justify-center items-center gap-x-2 w-[30em]' >
        <label>{name}</label>
        <input type="range" min={0} max="100" value={skill_level} className="range range-xs lock" readOnly />
    </div>
  )
}

export default TechCard