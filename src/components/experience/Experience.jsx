import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        {/* ==================FRONT END EXPERIENCE BEGINS =====================*/}
        <div className='experience_frontend'>
          <h3>Fronted Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TAILWIND CSS</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NEXT JS</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>REACT NATIVE</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* =================END OF FRONT END EXPERIENCE =============================*/}

        {/* ===================BACKEND EXPERIENCE BEGINS=========================== */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>POSTGRESQL</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>EXPRESS JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PYTHON</h4>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ==========================END OF BACKEND EXPERIENCE =====================*/}
      </div>
    </section>
  );
};

export default experience;
