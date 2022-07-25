import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some Of My</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>To-Do List</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://fathallah.web.app/" className='btn btn-primary' target='_blank'>Link to project</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>StarShip game project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://fathallah.web.app/" className='btn btn-primary' target='_blank'>Link to project</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Movies website project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://fathallah.web.app/" className='btn btn-primary' target='_blank'>Link to project</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Sportif competition java project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Clash Royale game java project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>n-trees prgramming in python</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
          </div>
          
        </article>

      </div> 

      <h2>...</h2>
    </section>
  )
}

export default Portfolio