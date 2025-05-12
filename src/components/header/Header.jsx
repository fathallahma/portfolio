import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photo3.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import CV from '../../assets/CV.pdf'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h5>Hello, I'm</h5>
          <h2>FATHALLAH Mohamed-Amine</h2>
          <h5 className="text-light">Fullstack Developer</h5>

          <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>

          <div className="header__socials">
            <a href="https://www.linkedin.com/in/mohamed-amine-fathallah-b18a40220/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/fathallahma" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>

        <div className="header__right">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
