import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaGitlab} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href='https://www.linkedin.com/in/med-amine-fathallah-b18a40220/' target="_blank"><BsLinkedin/></a>
       <a href='https://github.com/fathallahma' target="_blank"><FaGithub/></a>
       
    </div>
  )
}

export default HeaderSocials