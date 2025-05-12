import React from 'react'
import './services.css'
import { BsCheck } from 'react-icons/bs'
import EPSI from '../../assets/portfolio10.png'

const Services = () => {
  return (
    <section id="education">
      <h5>Education & Certifications</h5>
      <h2> My Education</h2>

      <div className="container about__container2">
        
        {/* TEXTE EN PREMIER */}
        <div className="about__content">
          <p>
            <h3 className="animated-title">Expert in Computer Science and Information Systems (EISI)</h3>
            <br /><br />
            I am currently pursuing a Master's-level degree at <strong>EPSI Lille</strong> 🎓, in the <strong>Expert in Computer Science and Information Systems (EISI)</strong> program, a specialized engineering curriculum designed to train high-level IT professionals. This training is part of a work-study program (alternance) that combines academic learning with professional experience.
            <br /><br />
            During this program, I have developed a wide range of skills including:
            <p>
              <ul className="list-disc list-inside">
                <li>🧠 Software engineering and information system architecture</li>
                <li>💻 Full-stack web and mobile development</li>
                <li>⚙️ DevOps practices: CI/CD, automation, containerization</li>
                <li>🔐 Cybersecurity principles and secure coding</li>
                <li>🗃️ Database modeling, administration (SQL & NoSQL)</li>
                <li>📈 Agile project management and IT governance</li>
                <li>☁️ Cloud computing and infrastructure deployment</li>
                <li>🧪 Big Data processing and distributed systems</li>
                <li>📊 Data analysis, cleaning, and visualization</li>
                <li>🤖 Fundamentals of Machine Learning and applications</li>
                <li>🤝 Real-world collaborative projects and teamwork</li>
              </ul>
            </p>
          </p>
        </div>

        {/* IMAGE EN DEUXIEME */}
        <div className="about__me2">
          <div className="about__me-image">
            <img src={EPSI} alt="About Image" />
          </div>
        </div>

      </div>


      
    </section>
    
  )
}

export default Services
