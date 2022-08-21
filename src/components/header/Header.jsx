import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mee.png'
import HeaderSocials  from './HeaderSocials'
import AnimatedText from './AnimatedText'
import AnimatedText2 from './AnimatedText2'
import AnimatedText3 from './AnimatedText3'

const Header = () => {
  return (
    <header>
      <div className="container header_container" id='header'>
        <h5> <AnimatedText/></h5>

        <h1> <AnimatedText2/></h1>
        <h5 className="text-light"><AnimatedText3/></h5>
        
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header