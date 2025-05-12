import React from 'react';
import './skills.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import wiiisdomLogo from '../../assets/me-about.jpg'; // Assurez-vous d'ajouter le logo dans le dossier assets.
import WIIISDOM from '../../assets/portfolio7.jpg'
import TEACHING from '../../assets/portfolio8.jpg'

import javaLogo from '../../assets/logos/java.png';
import springLogo from '../../assets/logos/spring-boot.png';
import reactLogo from '../../assets/logos/react.png';
import pythonLogo from '../../assets/logos/python.png';
import sqlLogo from '../../assets/logos/sql.png';


// Logos fictifs à remplacer par les vrais si disponibles
import awsLogo from '../../assets/logos/aws.png';
import gcpLogo from '../../assets/logos/gcp.png';
import renderLogo from '../../assets/logos/render.png';
import jiraLogo from '../../assets/logos/jira.png';
import draftLogo from '../../assets/logos/draft.png';
import pokerLogo from '../../assets/logos/poker.png';

import {FiAward} from 'react-icons/fi'
import {BsCodeSquare} from'react-icons/bs'

const technicalSkills = [
    {
      name: 'Java',
      level: 85,
      logo: javaLogo,
    },
    {
      name: 'Spring Boot',
      level: 75,
      logo: springLogo,
    },
    {
      name: 'React',
      level: 70,
      logo: reactLogo,
    },
    {
      name: 'Python',
      level: 87,
      logo: pythonLogo,
    },
    {
      name: 'SQL',
      level: 78,
      logo: sqlLogo,
    },
  ];

  const technicalSkillsCloud = [
    {
      name: 'EC2 AWS',
      level: 80,
      logo: awsLogo,
    },
    {
      name: 'Big Query',
      level: 70,
      logo: gcpLogo,
    },
    {
      name: 'Render',
      level: 70,
      logo: renderLogo,
    }
  ];

  const technicalSkillsAgility = [
    {
      name: 'Jira',
      level: 85,
      logo: jiraLogo,
    },
    {
      name: 'Draft',
      level: 90,
      logo: draftLogo,
    },
    {
      name: 'SprintPoker',
      level: 90,
      logo: pokerLogo,
    }
    
  ];
  



const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills Gained Through Experience</h5>
      <h2>My Skills</h2>

      <div className="container about__container3">
            
            <div className="about__content">
                <p>
                  <h3 className="animated-title">🧠 Technical Skills</h3>
                  <br/><br/>    
                <p>
                    {/* 🎯 Technical Skills Section */}
                    <div className="technical__skills">
                        {technicalSkills.map((skill) => (
                            <div key={skill.name} className="skill__item">
                            <div className="skill__bar__wrapper">
                                <span className="skill__name">{skill.name}</span>
                                <div className="skill__bar__container">
                                <div className="skill__bar" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <img src={skill.logo} alt={skill.name} className="skill__logo" />
                            </div>
                            </div>
                        ))}
                    </div>
                 </p>
                </p>
            </div>

            <div className="about__content">
                <p>
                  <h3 className="animated-title">☁️ Cloud & DevOps Tools</h3>
                  <br/><br/>    
                <p>
                    {/* 🎯 Technical Skills Section */}
                    <div className="technical__skills">
                        {technicalSkillsCloud.map((skill) => (
                            <div key={skill.name} className="skill__item">
                            <div className="skill__bar__wrapper">
                                <span className="skill__name">{skill.name}</span>
                                <div className="skill__bar__container">
                                <div className="skill__bar" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <img src={skill.logo} alt={skill.name} className="skill__logo" />
                            </div>
                            </div>
                        ))}
                    </div>
                 </p>
                </p>
            </div>

            <div className="about__content">
                <p>
                  <h3 className="animated-title">📋 Project Management & Agile Tools</h3>
                  <br/><br/>    
                <p>
                    {/* 🎯 Technical Skills Section */}
                    <div className="technical__skills">
                        {technicalSkillsAgility.map((skill) => (
                            <div key={skill.name} className="skill__item">
                            <div className="skill__bar__wrapper">
                                <span className="skill__name">{skill.name}</span>
                                <div className="skill__bar__container">
                                <div className="skill__bar" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <img src={skill.logo} alt={skill.name} className="skill__logo" />
                            </div>
                            </div>
                        ))}
                    </div>
                 </p>
                </p>
            </div>
        </div>

    </section>
  );
};

export default Skills;
