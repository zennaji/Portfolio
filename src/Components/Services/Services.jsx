import React from 'react'
import './Services.css'
import Glasses from "../../img/glasses.png"
import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from "./Resume.pdf"

import {themeContext} from "./../../Context";
import {useContext} from "react";

import { motion } from 'framer-motion';
// import Radium, { StyleRoot } from 'radium';


const Services = () => {
  const transition ={duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="s-text">
            <span style={{color: darkMode ? "#fff" : "",}}>KENNIS & </span>
            <span>VAARDIGHEDEN </span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                omnis, laudantium corrupti dolor, dolores minus sit veniam?
            </span>
            <a href={Resume} download>

            <button className="button s-button">CV downloaden</button>
            </a>
            {/* <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div> */}
        </div>
          {/* Right side */}
          <div className="cards">
              <motion.div 
              initial={{left:"-15rem"}}
              whileInView={{left: '8rem' }}
              transition={transition}
              
              style={{left:"2rem", top:"12rem"}}>
                  <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Adobe XD, PS, , InVision, Pr, figma, Sketch"}
                  />
              </motion.div>
              {/* second card */}
               <motion.div 
              // initial={{ top: "-5rem",  }}
              whileInView={{top: "0rem" }}
              transition={transition}
              
              style={{left:"25rem", top: "-10rem"}}>
                  <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"HTML, CSS, JS, Flutter, php, React, Symfony"}
                  />
              </motion.div>
               {/* 3rde card */}
              <motion.div 
              initial={{ left: "55rem" }}
              whileInView={{left: "35rem"  }}
              transition={transition}

              
              style={{left:"20rem",  top:"20rem" }}
              >
                  <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"I'am a great ui/ux designer, I can design for you"}
                  />
              </motion.div>
              <div className="blur s-blur2" style={{background: "#ABF1FF94"}}></div>

          </div>
    </div>
  )
}

export default Services