import React, { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

import {themeContext} from "./../../Context";
import {useContext} from "react";
import {SiGithub, SiInstagram, SiLinkedin, SiFacebook, SiTwitter} from 'react-icons/si';


const Contact = () => {
    // dark mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    // email
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_94rxj5m', 'template_k381b8t', form.current, 'rJAG3FtW_ngt50gkM')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="c-text">
                <span>GET IN TOUCH</span>
                <span>I'd love to chat about any of my projects,<br /> working together, learning opportunities <br /> or just a general natter about all things code!. <br />
                You can reach me via any of the following:
                </span>
                <span className='contact_icons'>
                    <a href="https://github.com/zennaji"><SiGithub/></a>
                    <a href="https://www.instagram.com/zakaria_ennaji_/"><SiInstagram/></a>
                    <a href="https://www.linkedin.com/in/zakariaennaji/"><SiLinkedin/></a>
                    <a href="https://www.facebook.com/zakaria.ennaji2"><SiFacebook/></a>
                    <a href="https://twitter.com/Zakaria_ennaji"><SiTwitter/></a>
                  
                </span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>
        {/* right side */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder='Name' />
                <input type="email" name="user_email" className="user" placeholder='Email' />
                <textarea name="message" className="user" placeholder='Message'></textarea>
                <input type="submit" value="Send" name=""className="button" />
                <span style={{color: darkMode ? "#fff" : "",}}>{done && "Bedankt voor het contacteren!"}</span>
                {/* <div className="blur c-blur1" style={{background: "var(--purple)" }}></div> */}

            </form>
        </div>
    </div>
  )
}

export default Contact