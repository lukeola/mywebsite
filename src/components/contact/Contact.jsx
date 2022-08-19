import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qzd3rmh', 'template_f0xts93', form.current, 'GHfIrW5yV4Lrlnm_5')

    e.target.reset()
     
  };

  return (
    <section id='contact'>
      <h5>GEt In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@lukeshub.site</h5>
            <a href="mailto:contact@lukeshub.site" target='blank'>Send Mail</a>
          </article>
          

          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Luke Olawale</h5>
            <a href="https://linkedin.com/in/luke-olawale/" target='blank'>Send a DM</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348093597883</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348093597883" target='blank'>Send a Message</a>
          </article>
        </div>
          {/* END OF CONTACT OPTIONS */}

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact