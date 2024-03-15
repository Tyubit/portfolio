import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './webPage/Navbar.jsx'
import Hero from './webPage/Hero.jsx'
import About from './webPage/About.jsx'
import Tech from './webPage/Tech.jsx'
import Footer from './webPage/Footer.jsx'
import Contact from './webPage/Contact.jsx'
export const Landing = () => {
    return (
    <BrowserRouter >
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Contact />
        <Footer />
    </BrowserRouter>
    )
}
