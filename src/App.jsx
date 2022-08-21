import React, { useEffect } from 'react'
import Aos from 'aos'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from  './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, []);
  return (
    <>
    <Header/> 
    <Nav/>

    <div data-aos = "fade-up">
    < About />
    </div>

    <div  data-aos = "fade-left">
    <Experience/>
    </div>

    <div  data-aos = "fade-right">
    <Services/>
    </div>

    <div  data-aos = "fade-up">
    <Portfolio/>
    </div>

    <div  data-aos = "flip-left">
    <Testimonial/>
    </div>

    <div  data-aos = "fade-up">
    <Contact/>
    </div>

    <Footer/>
    </>
  )
}

export default App