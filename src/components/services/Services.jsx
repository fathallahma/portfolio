import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>FrontEnd Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>REactJS programming</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Javascript programming</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>HTML and CSS programming</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>PHP programming</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>NodeJs programming</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Java programming</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Python programming</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services