import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>LUKE OLAWALE</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#porfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
     

      <div className="footer__socials">
        <a href="https://instagram.com/wale_luke"><FaInstagramSquare/></a>
        <a href="https://linkedin.com/in/luke-olawale"><AiFillLinkedin/></a>
        <a href="https://github.com/lukeola"><AiFillGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Luke Olawale. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer