import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {BsCodeSquare} from'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>

                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FiAward className='about__icon'/>
                            <h5>Experience</h5> 
                            <small>tutoring lessons in Python</small>
                        </article>
                        <article className='about__card'>
                            <FiAward className='about__icon'/>
                            <h5>Experience</h5> 
                            <small>tutoring lessons in Python</small>
                        </article>
                        <article className='about__card'>
                            <BsCodeSquare className='about__icon'/>
                            <h5>Projects</h5> 
                            <small> +20 Project</small>
                        </article>
                    </div>
                    <p>
                        Parasite est présenté en compétition officielle au Festival de Cannes 2019, où il remporte la Palme d'or 
                        à l'unanimité du jury. Il est le premier film sud-coréen à obtenir cette récompense. Il sort ensuite en Corée 
                        e pour un budget de 15,5 millions de dollars.
                    </p>

                    <a href = "#contact" className='btn btn-primary'>Les't Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About 