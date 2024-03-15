import React, { useEffect } from 'react'
import Title from './Title'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])
  return (
    <div data-aos="fade-up">
      <Title title="Contact" />
      <form action="" className="flex flex-col justify-center items-center">
        <label className="form-control w-full max-w-xs mb-4">
        <span className="label-text">Name</span>
        <input type="text" placeholder="Cool Company" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs mb-4">
        <span className="label-text">Email</span>
        <input type="text" placeholder="example@email.com" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs mb-6">
        <span className="label-text">Subject</span>
        <input type="text" placeholder="Invitation to Interview" className="input input-bordered w-full max-w-xs" />
        </label>
        <textarea className="textarea textarea-bordered w-full max-w-xs mb-6" placeholder="Message"></textarea>
        <button className="btn btn-accent w-full max-w-xs mb-4">Submit</button>
      </form>
    </div>
  )
}

export default Contact
