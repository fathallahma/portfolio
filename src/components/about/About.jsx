import React from 'react'
import './about.css'
import ME from '../../assets/portfolio11.jpg'
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
                        <h5>Professional Experience</h5> 
                        <small>3 years at Wiiisdom as Java Backend Engineer</small>
                        </article>
                        <article className='about__card'>
                        <FiAward className='about__icon'/>
                        <h5>Academic Journey</h5> 
                        <small>Master's in Software Engineering and Information System at EPSI Lille</small>
                        </article>
                        <article className='about__card'>
                        <BsCodeSquare className='about__icon'/>
                        <h5>Personal Projects</h5> 
                        <small>+20 side projects using different technoligies</small>
                        </article>

                    </div>
                    <p>
                    I'm a final-year engineering student at <strong>EPSI Lille</strong> 🎓, specializing in Computer Science and Information Systems. For the past 3 years, I've been working at <strong>Wiiisdom</strong> as a <strong>Software Engineer</strong> 💻, gaining real-world experience in <strong>Java backend development</strong> and mastering key concepts in software engineering.  
                    <br/><br/>
                    Outside of my work-study, I fuel my passion by building <strong>personal projects</strong> with <strong>Spring Boot</strong> and <strong>React</strong> 🛠️. These projects allow me to express my creativity, improve my skills, and explore how tech can make life easier and more efficient.  
                    <br/><br/>
                    I'm deeply passionate about <strong>coding</strong> 💡 — not just as a job, but as a mindset. I love the process of thinking, building, failing, fixing, and finally creating something meaningful. While Java is my strongest skill, I enjoy learning new languages and frameworks and I’m always ready to adapt 🔄. I see myself not just as a developer, but as an <strong>engineer</strong> who thinks, solves, and delivers.  
                    <br/><br/>
                    I'm also curious about the world of <strong>e-commerce</strong> 🛒, the power of <strong>web applications</strong> 🌐, and I draw a lot of inspiration from my love of <strong>sports</strong> ⚽. These passions often guide the features and ideas behind the tools I build.  
                    <br/><br/>
                    In short, I code with <strong>purpose</strong>, <strong>passion</strong>, and <strong>drive</strong> ❤️ — always aiming to grow, innovate, and make an impact.
                    </p>




                    <a href = "#contact" className='btn btn-primary'>Les't Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About 