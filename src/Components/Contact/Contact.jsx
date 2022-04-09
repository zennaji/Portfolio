import React, { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

import {themeContext} from "./../../Context";
import {useContext} from "react";

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
                <span>Contact Me</span>
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