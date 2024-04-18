import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Title from './Title'
import RequiredStar from './RequiredStar'
import OpenResume from './OpenResume';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  })
  const [error, setError] = useState({})
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const serviceID = 'service_sao1a1a';
  const templateID = 'template_vccj6yp';
  const publicKey = 'Tww245cx-EDWQKr-E';
  const site_key = '6LdQd54pAAAAALWaxDWSobanLqCpYJDgDNm8V-eV';

  
  const templateParams = {
    to_name: 'Elisha Kovalev',
    to_email: 'elikoo.dev@gmail.com',
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
    'g-recaptcha-response': form.captcha
  }

  const handleCaptcha = (value) => {
    setForm({
      ...form,
      captcha: value
    })
  }

  const validateForm = () => {
    const errors = {}
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    if (!form.message.trim()) errors.message = 'Message is required';
    if (!form.captcha) errors.captcha = 'Captcha is required';
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("start")
    setIsLoading(true)
    setError(validateForm())
    
    console.log(error)
    if (Object.keys(error).length > 0) { 
      setIsLoading(false)
      return
    }
    //send email(emailjs)
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((res) => {
      console.log(res)
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        setError({})
        setIsSent(true)
        setIsLoading(false)
      })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })

  }, [])
  return (
    <div id='contact' className='md:px-[100px]'>
      <Title title="Contact" />
      <form action="" className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs mb-4">
        <span className="label-text">Name <RequiredStar /></span>
        {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
        <input name="name" type="text" placeholder="Cool Company" className="input input-bordered w-full max-w-xs" onChange={handleChange}/>
        </label>

        <label className="form-control w-full max-w-xs mb-4">
        <span className="label-text">Email <RequiredStar /></span>
        {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
        <input name="email" type="email" placeholder="example@email.com" className="input input-bordered w-full max-w-xs" onChange={handleChange}/>
        </label>

        <label className="form-control w-full max-w-xs mb-6">
          <span className="label-text">Subject </span>
        <input name="subject" type="text" placeholder="Invitation to Interview" className="input input-bordered w-full max-w-xs" onChange={handleChange}/>
        </label>
        <span className='w-[300px]'><RequiredStar /> {error.message && <span style={{ color: 'red' }}>{error.message}</span>}</span>
        <textarea name="message" className="textarea textarea-bordered w-full max-w-xs mb-6" placeholder="Message" onChange={handleChange} value={form.message}></textarea>
        <span className='w-[300px]'><RequiredStar /> {error.captcha && <span style={{ color: 'red' }}>{error.captcha}</span>}</span>
        
        <ReCAPTCHA
          name="captcha"
          sitekey= {site_key}
          onChange={handleCaptcha}
          onExpired={() => setForm({
            ...form,
            captcha: ''
          })}
          value={form.captcha}
        />
        <button className={`btn btn-accent ${isSent ? "btn-success" : ''} w-full max-w-xs my-6`}>{ isSent ? "Sent. I'll contact you as soon as possible" : "Submit"}</button>
        {isLoading && <span className="loading loading-spinner loading-xs mb-6"></span>}
      </form>

      <OpenResume />
    </div>
  )
}

export default Contact
