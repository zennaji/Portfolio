import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import HealthOne from '../../img/HealthOne.jpg'
import 'swiper/css'

import {themeContext} from "./../../Context";
import {useContext} from "react";

const Portfolio = () => {
    const projects = [
        {
        id: "1",
        name: "HealthOne",
        img: "HealthOne",
        description: "Ik heb HTML, CSS, JS en Bootstrap gebruikt om de frontend van deze website te ontwikkelen, in de backend gebruikte ik PHP MVC-ontwerppatroon en MySQL, het is een fitnesswebsite waarmee je alle apparaten kunt zien die we hebben. Het stelt je ook in staat om een account aan te maken en een lidmaatschap te kiezen",
        link: "https://github.com/"

        },
        {
        id: "2",
        name: "HealthOne",
        img: "HealthOne",
        description: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        link: "https://github.com/"

        },
        {
        id: "3",
        name: "HealthOne",
        img: "HealthOne",
        description: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        link: "https://github.com/"

        },
        {
        id: "4",
        name: "HealthOne",
        img: "HealthOne",
        description: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        link: "https://github.com/"

        },
        {
        id: "5",
        name: "HealthOne",
        img: "HealthOne",
        description: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        link: "https://github.com/"

        },
        
    ]


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/* Heading */}
        <span style={{color: darkMode ? "#fff" : "",}}>RECENTE <span>PROJECTEN</span></span>
        <span>hier zijn een paar projecten waar <br /> ik onlangs aan heb gewerkt </span>
        {/* Slider */}
        <Swiper
        spaceBetween={1}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
        >

            {projects.map((project, index) => {
                return(
                     <SwiperSlide key={index}>
                        <a href={project.link}><img src={HealthOne} alt="" /></a>
                        <h3>{project.name}</h3>
                        <p className='p-description'>{project.description}</p>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default Portfolio