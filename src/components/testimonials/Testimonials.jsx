import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/sally.PNG'
import AVTR2 from '../../assets/victor.PNG'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Sally Umar',
    review: 'I would highly recommend Luke for his great job. He is great to work with. The traffic to my website has increased thanks to his SEO optimization.'

  },

  {
    avatar: AVTR2,
    name: 'Victor Daniyan',
    review: 'We at Precision Info Tech were very impressed with the all aspects of our new website. We would highly reccomend Luke to anyone looking to build a new website.'

  }

]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials