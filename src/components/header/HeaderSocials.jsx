import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaGitlab} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href='https://www.linkedin.com/in/mohamed-amine-fathallah-b18a40220/' target="_blank"><BsLinkedin/></a>
       <a href='https://github.com' target="_blank"><FaGithub/></a>
       <a href='https://gitlab.com' target="_blank"><FaGitlab/></a>
    </div>
  )
}

export default HeaderSocials