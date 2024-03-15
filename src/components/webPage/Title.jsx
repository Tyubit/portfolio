import React from 'react'

function Title({title}) {
  return (
      <>
        <h1 className='uppercase font-bold text-purple-400 text-2xl tracking-wide mt-6 mb-6'>{title}</h1>
      </>
  )
}

export default Title