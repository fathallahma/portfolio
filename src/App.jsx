import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Git from './components/git/Git'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Portfolio />
        <Git />
        <Contact />
        <Footer />



    </>
  )
}

export default App 