import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

    <div className="container services__container">
          
{/* ===============BEGINING OF WEB DESIGN =========================*/}
          <article className="service">
            <div className="service__head">
              <h3>Web Design</h3>
            </div>
              <ul className='service__list'>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Responsive Design</p>
                </li>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Optimized for Speed</p>
                </li>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Clean and Modern Design</p>
                </li>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Search Engine Optimized</p>
                </li>
              </ul>
            </article>
{/* ================END OF WEB DESIGN</section> ==============*/}


{/*========= BEGINING OF SOFTWARE DEVELOPMENT=============*/}
            <article className="service">
              <div className='service__head'>
                <h3>Software Development</h3>
              </div>
              <ul className='service__list'>
                  <li>
                    <BsCheck className='service__container-icon'/>
                    <p>Design & update software database</p>
                  </li>
                  <li>
                    <BsCheck className='service__container-icon'/>
                    <p>Design algorithms and flowcharts</p>
                  </li>
                 
                  <li>
                    <BsCheck className='service__container-icon'/>
                    <p>Software Integration</p>
                  </li>
                  <li>
                    <BsCheck className='service__container-icon'/>
                    <p>QA And Testing</p>
                  </li>
                </ul>
              </article>
{/*========= END OF SEARCH ENGINE OPTIMIZATION =============*/}


{/*========= BEGINING OF MARKETING====================*/}
          <article className="service">
            <div className="service__head">
              <h3>Digital Marketing</h3>
            </div>
              <ul className='service__list'>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Email Marketing</p>
                </li>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Content Marketing</p>
                </li>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Social Media Marketing</p>
                </li>
                <li>
                  <BsCheck className='service__container-icon'/>
                  <p>Advertising</p>
                </li>
              </ul>
             </article>
{/*========= END OF WEB DEVELOPMENT =================*/}
        
       

     
    </div>  
  </section>
  )
}

export default Services