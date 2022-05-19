import React from 'react'
import './Services.css'
import Glasses from "../../img/glasses.png"
import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from "./Resume.pdf"
import {FaLaptopCode} from 'react-icons/fa'
import {FaWrench} from 'react-icons/fa'
import {FaServer} from 'react-icons/fa'
// import icons
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiSass} from 'react-icons/si'
import {SiDart} from 'react-icons/si'
import {SiFlutter} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiSymfony} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiNpm} from 'react-icons/si'
import {SiGit} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiVisualstudiocode} from 'react-icons/si'
import {SiStackoverflow} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobexd} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiAdobepremierepro} from 'react-icons/si'
import {FaCheck} from 'react-icons/fa'

 
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
            <span style={{color: darkMode ? "#fff" : "",}}>SKILLS & </span>
            <span>KNOWLEDGE </span>
            <span>
            Turning coffee into code since 2019! I'm a highly driven, <br />
            great web and app developer with a thirst for self-improvement <br />
            and learning new tech. Here's some of what I can do:
            </span>
            <a href={Resume} download>

            <button className="button s-button">Download CV</button>
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
                    titleIcon = {<FaLaptopCode/>}
                    icons = {[<SiHtml5/>, <SiCss3/>, <SiJavascript/>, <SiSass/>,<SiDart/>, <SiFlutter/>, <SiReact/>, <SiTypescript/>]}
                    heading = {'Front-End'}
                    detail = {[<FaCheck className='check'/>," Fully responsive websites and apps that look good on any device or screen.", <br/>,
                    <FaCheck className='check'/>, " Intuitive UX/UI design using a variety of libraries and the latest HTML5 & CSS3 standards.", <br/>,
                    <FaCheck className='check'/>, " Intuitive UX/UI design using a variety of libraries and the latest HTML5 & CSS3 standards."

                    ]}
                  />
              </motion.div>
              {/* second card */}
               <motion.div 
              // initial={{ top: "-5rem",  }}
              whileInView={{top: "0rem" }}
              transition={transition}
              
              style={{left:"25rem", top: "-10rem"}}>
                  <Card
                    titleIcon = {<FaServer/>}
                    icons = {[<SiPhp/>, <SiMysql/>, <SiSymfony/>, <SiNodedotjs/>, <SiExpress/>, <SiMongodb/>]}
                    heading = {'Back-End'}
                    detail = {[
                    <FaCheck className='check'/>, " User authentication; multi-layered middleware; complex route-handling and more.", <br/>,
                    <FaCheck className='check'/>, " Persistant and secure data storage solutions using SQL, MongoDB or Firebase.", <br/>,
                    <FaCheck className='check'/>, " Custom-built RESTful APIs and servers powered by Javascript", <br/>,
                  ]}
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
                    titleIcon = {<FaWrench/>}
                    icons = {[<SiNpm/>, <SiGit/>, <SiGithub/>, <SiVisualstudiocode/>, <SiStackoverflow/>, <SiAdobephotoshop/>, <SiAdobexd/>, <SiAdobeillustrator/>,]}
                    heading = {'Tools'}
                    detail = {[
                      <FaCheck className='check'/>, " Git / Github for version control, collaborative working and ensuring updates are smooth.", <br/>,
                      <FaCheck className='check'/>, " Integrating reusable code for speed and efficiency using libraries and other published packages.", <br/>,
                      <FaCheck className='check'/>, " Web-app deployment including testing, hosting, DNS configuration and more.", <br/>,
                    ]}
                  />
              </motion.div>
              <div className="blur s-blur2" style={{background: "#ABF1FF94"}}></div>

          </div>
    </div>
  )
}

export default Services