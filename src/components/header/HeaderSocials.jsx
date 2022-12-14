import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials= () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/lukeola/" target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href="https://linkedin.com/in/luke-olawale/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://facebook.com/luke.olawale/" target="_blank" rel='noreferrer'><BsFacebook/></a>
        
    </div>
  )
}

export default HeaderSocials
