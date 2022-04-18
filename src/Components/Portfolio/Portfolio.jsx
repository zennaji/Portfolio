import React, {useState, useEffect, Component } from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import HealthOne from '../../img/HealthOne.jpg'
import AppleMiniStore from '../../img/Apple-Mini-Store.jpg'
import 'swiper/css'

import {themeContext} from "./../../Context";
import {useContext} from "react";
// backend
import axios from 'axios'

const Portfolio = () => {
        const [projectList, setprojectList] = useState([]);
        // ComponentDidmount()
        useEffect(() => {
            axios.get('http://localhost:3001/api/get')
            .then(res => {
                setprojectList(res.data)
                console.log(res.data)
                
            })
            // .catch(err => console.log(err))
        }, [])





        // const getProjects = () => {
        //     axios.get('http://localhost:3001/projects',)
        //     .then((res) => res.data)
        //     .then((res => setprojectList(res)));
        // }


    const projectList2 = [
        {
        id: "1",
        name: "HealthOne",
        img: HealthOne,
        description: "Ik heb HTML, CSS, JS en Bootstrap gebruikt om de frontend van deze website te ontwikkelen, in de backend gebruikte ik PHP MVC-ontwerppatroon en MySQL, het is een fitnesswebsite waarmee je alle apparaten kunt zien die we hebben. Het stelt je ook in staat om een account aan te maken en een lidmaatschap te kiezen",
        link: "https://github.com/"

        },
        {
        id: "2",
        name: "Apple-Mini-Store-",
        img: AppleMiniStore,
        description: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        link: "https://github.com/"

        },
        {
        id: "3",
        name: "HealthOne",
        img: HealthOne,
        description: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        link: "https://github.com/"

        },
        {
        id: "4",
        name: "HealthOne",
        img: HealthOne,
        description: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        link: "https://github.com/"

        },
        {
        id: "5",
        name: "HealthOne",
        img: HealthOne,
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
       

        spaceBetween={60}
        slidesPerView={4}
        grabCursor={true}

        breakpoints={{
            // when window width is <= 480px
            360: {
              width: 360,
              slidesPerView: 1,
            },
           
          }}

        className="portfolio-slider"
        >
            {/* FETCHING FROM DATABASE  */}
            {/* {projectList.map((project, index) => {
                return(
                     <SwiperSlide key={index}>
                        <a href={project.link}><img src={HealthOne} alt="" /></a>
                        <h3>{project.name}</h3>
                        <p className='p-description'>{project.discription}</p>
                    </SwiperSlide>
                )
            })} */}
                {/* Fetching from array above */}
            {projectList2.map((project, index) => {
                return(
                     <SwiperSlide key={index}>
                        <a href={project.link}><img src={project.img} alt="" /></a>
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