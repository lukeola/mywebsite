import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/the3kshop.PNG'
import IMG2 from '../../assets/teleconnect.PNG'
import IMG3 from '../../assets/opssurge.PNG'
import IMG4 from '../../assets/yourrider.PNG'
import IMG5 from '../../assets/abujareal.PNG'
import IMG6 from '../../assets/nasa.PNG'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The 3K Shop',
    github: 'https://github.com/lukeola/the3kshop',
    demo:'https://the3kshop.com'
  },

  {
    id: 1,
    image: IMG2,
    title: 'Teleconnect Outsource',
    github: 'https://github.com/lukeola/teleconnect',
    demo:'https://teleconnectoutsource.com'
  },

  {
    id: 2,
    image: IMG3,
    title: 'OPS Surge',
    github: 'https://github.com/lukeola/opssurge',
    demo:'https://opssurge.org'
  },

  {
    id: 3,
    image: IMG4,
    title: 'Your Rider',
    github: 'https://github.com/lukeola/yourrider',
    demo:'https://yourrider.com' 
  },

  {
    id: 1,
    image: IMG5,
    title: 'Abuja Realtors',
    github: 'https://github.com/lukeola/abujarealtors',
    demo:'https://abujarealtors.com'
  },

  {
    id: 1,
    image: IMG6,
    title: 'Nasacrown',
    github: 'https://github.com/lukeola/nasacrown',
    demo:'https://nasacrown.com.ng'
  },
]


const Portfolio = () => {
  return (
    <div className='portfolio__div'>
  <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} target='blank' className='btn'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
    </div>
  )
}


export default Portfolio