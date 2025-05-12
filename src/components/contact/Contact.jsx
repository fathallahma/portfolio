import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
//import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_jm4rarl', 'template_orv75pq', form.current, 'VcxuNbLuexVmGXZCw')
    e.target.reset()
      
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h6>fathallah.mohamed.a@gmail.com</h6>
                        <a href="mailto:fathallah.mohamed.a@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <AiOutlineLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <h6>Med Amine FATHALLAH</h6>
                        <a href="https://www.linkedin.com/in/med-amine-fathallah-b18a40220/" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='email' placeholder='Your Email' required />
                    <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact 