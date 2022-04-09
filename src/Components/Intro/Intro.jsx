import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import E from '../../img/E.png';
import Z from '../../img/Z.png';
import boy from '../../img/boy1.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import {themeContext} from "./../../Context";
import {useContext} from "react";

import { motion } from 'framer-motion';

const Intro = () => {

    const transition ={duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? "#fff" : "",}}>Hi! I am </span>
                <span>Zakaria Ennaji </span>
                <span>
                    Frontend developer with high passion for web development, producting the Quality work.
                    I love to create beautiful and functional web applications.
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/zennaji"> <img src={Github} alt="" /></a>
                <a href="https://www.instagram.com/zakaria_ennaji_/"> <img src={Instagram} alt="" /></a>
                <a href="https://www.linkedin.com/in/zakariaennaji/"> <img src={LinkedIn} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
            <motion.img
           
             src={E} alt="" /> 
            <img src={Z} alt="" /> 
            <img src={boy} alt="" /> 
            <motion.div
             initial={{left: '-50px'}}
             whileInView={{left: '-10%' }}
             transition={transition}
        
            style={{top: '10%', left:'50%'}}>
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
            </motion.div>
            <motion.div
             initial={{left: '-5px'}}
             whileInView={{left: '65%' }}
             transition={transition}

            style={{top: '18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1="FrontEnd" txt2="Developer" />
            </motion.div>
            {/* blur divs */}
            {/* <div className="blur" style={{background: "rgb(238 210 255)"}}></div> */}
            <div className="blur" style={{background: "#C1F5FF", top:"17rem", width:"21rem", height:"11rem", left:"-9rem"}}></div>
        </div>
    </div>
  )
}

export default Intro