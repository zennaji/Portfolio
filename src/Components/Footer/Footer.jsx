import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
  var today = new Date();
  var yyyy = today.getFullYear();
  return (
    
    <div className="footer-container">
       <ScrollToTop smooth  />
    <div className="footer">
        
        <div className="f-content">
            <span>Coded and designed with React and ❤️ - Zakaria &#169; {yyyy}</span>
        </div>
    </div>
    </div>

  )
}

export default Footer