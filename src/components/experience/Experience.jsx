import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Beginning</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Json</h4>
              <small className='text-light'>Beginning</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__softwareprogramming">
        <h3>Software Programming</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Haskell</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>AMPL</h4>
              <small className='text-light'>Beginning</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>R</h4>
              <small className='text-light'>Beginning</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__database">
        <h3>Data Base</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Postgresql</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Beginning</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__touls">
        <h3>touls</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Eclipse</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>VS Code</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Git</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Maven</h4>
              <small className='text-light'>Beginning</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>FireBase</h4>
              <small className='text-light'>Beginning</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__operationsystem">
        <h3>Operation Systems</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Linux Ubuntu</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Windows</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience