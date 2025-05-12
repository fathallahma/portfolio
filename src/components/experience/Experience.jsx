import React from 'react';
import './experience.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import wiiisdomLogo from '../../assets/me-about.jpg'; // Assurez-vous d'ajouter le logo dans le dossier assets.
import WIIISDOM from '../../assets/portfolio7.jpg'
import TEACHING from '../../assets/portfolio8.jpg'

import {FiAward} from 'react-icons/fi'
import {BsCodeSquare} from'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills Gained Through Experience</h5>
      <h2> My Experience</h2>

      <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={WIIISDOM} alt="About Image" />
                </div>
            </div>
            <div className="about__content">
                <p>
                  <h3 className="animated-title">My Experience at Wiiisdom</h3>
                  <br/><br/>
                  🧠 <strong>Wiiisdom</strong> is a French software company that provides Analytics Governance solutions, helping its clients secure their BI platforms and move towards a truly data-driven culture.<br /><br />
                  💻 As a software engineering apprentice for 3 years, I worked on the product <strong>360Eyes</strong>, an ETL designed for data governance within <strong>SAP BusinessObjects</strong> environments. This product enables companies to centralize, audit, document, and optimize their BI infrastructure.
                  <br /><br />
                  🚀 During my experience, I was involved in various technical and functional aspects of the product, including :
                  <p>
                    <ul>
                      <li>🔐 Managing Continuous Integration (CI) processes and secure CI IDs</li>
                      <li>🛠️ Maintaining and improving the product installer across different environments</li>
                      <li>✨ Designing, developing, and enhancing new features in the product</li>
                      <li>🧪 Improving the automated testing infrastructure to ensure software quality</li>
                      <li>🐞 Fixing bugs and optimizing product performance</li>
                      <li>📞 Handling customer support and troubleshooting</li>
                      <li>📋 Actively participating in Agile sprints by managing technical and functional tickets</li>
                      <li>♻️ Refactoring and optimizing the existing codebase for better maintainability and readability</li>
                    </ul>
                  </p>
                </p>

              </div>
          </div>

          <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={TEACHING} alt="About Image" />
                </div>
            </div>
            <div className="about__content">
            <p>
              <h3 className="animated-title">Freelance Tutor – Python & Java Programming</h3>
              <br/><br/>
              💼 Prior to joining Wiiisdom, I worked as a <strong>freelance programming tutor</strong> for first- and second-year university students.
              <br /><br />
              My mission was to teach <strong>Python</strong> and <strong>Java</strong>, focusing on helping students understand the fundamental principles of software development using two key paradigms:
              <ul>
                <li>🔹 <strong>Object-Oriented Programming (OOP)</strong>: including encapsulation, inheritance, polymorphism, abstraction, and class design.</li>
                <li>🔹 <strong>Functional Programming</strong>: covering immutability, pure functions, lambda expressions, higher-order functions, and recursion.</li>
              </ul>
              <br />
              This freelance experience was highly beneficial to me as a developer:
              <p>
                <ul>
                  <li>✅ It deepened my understanding of both Python and Java by challenging me to explain complex concepts clearly and concisely.</li>
                  <li>✅ It reinforced my knowledge of both functional and object-oriented design patterns.</li>
                  <li>✅ It improved my communication skills by adapting technical explanations to students with diverse learning backgrounds.</li>
                  <li>✅ It allowed me to explore the academic side of software engineering while solidifying my own technical foundations.</li>
                </ul>
              </p>
            </p>
        </div>
     </div>

    </section>
  );
};

export default Experience;
