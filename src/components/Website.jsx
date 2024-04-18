
import Navbar from './web_components/Navbar'
import Hero from './web_components/Hero'
import About from './web_components/About'
import Tech from './web_components/Tech'
import Projects from './web_components/Projects'
import Contact from './web_components/Contact'
import Footer from './web_components/Footer'
const Website = () => {
  return (
  <div className='w-[1990px] h-[1110px] overflow-y-auto'>
    <Navbar/>
    <Hero />
      <div className='px-4'>
        <About/>
        <Tech />
        <Projects/>
        <Contact />
      </div>
      
    <Footer />
    </div>
  )
}

export default Website
