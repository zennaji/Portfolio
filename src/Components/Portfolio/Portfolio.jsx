import React, {useState, useEffect, Component, useRef } from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react';

import HealthOne from '../../img/HealthOne.jpg'
import AppleMiniStore from '../../img/Apple-Mini-Store.jpg'
import AdidasMiniStore from '../../img/Adidas-Mini-Store.jpg'
import SpS from '../../img/SPS.jpg'
import GiveAway from '../../img/GiveAway.jpg'
import CardGame from '../../img/CardGame.jpg'
import TicTacToe from '../../img/TicTacToe.jpg'
import Delicious from '../../img/Delicious.jpg'

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
        description: "I used HTML, CSS, JS and Bootstrap to develop the frontend of this website, it's completely responsive, in the backend I used PHP MVC design pattern and MySQL, it's a fitness website you can see all the devices we have. It also allows you to create an account and choose a membership, post a review, etc.",
        link: "https://github.com/zennaji/healthone_project.git"

        },
        {
        id: "2",
        name: "Apple-Mini-Store-",
        img: AppleMiniStore,
        description: "This is a nice landing page of a mini Apple online store",
        link: "https://zennaji.github.io/Apple/"

        },
        {
        id: "3",
        name: "Adidas-Mini-Store",
        img: AdidasMiniStore,
        description: "This is a nice landing page of a mini Adidas store",
        link: "https://github.com/"

        },
        {
            id: "4",
            name: "Deleciouss",	
            img: Delicious,
            description: "I built this website with React.js, And i used a food API. it's a website that allows you to see the recipes of a defferent food categories",
            link: "https://github.com/"
    
            },
        {
        id: "5",
        name: "Steen-Papier-Schaar",
        img: SpS,
        description: "I built this game with HTML CSS and vanilla JS, This is a digital version of Rock-Paper-Scissors",
        link: "https://github.com/zennaji/spsGame.git"

        },
        {
        id: "6",
        name: "GiveAway Website",	
        img: GiveAway,
        description: "To build the client side of this project I used HTML, SCSS, Bootstrap and JavaScript,for the server side I used PHP and MySQL,it is a website that generates a random winner from the database after registering",
        link: "https://github.com/zennaji/win.git"

        },
        {
        id: "7",
        name: "Card Game",	
        img: CardGame,
        description: "This is the first game I built, I used HTML, CSS and JS to program the logic and the rules",
        link: "https://github.com/"

        },
        {
        id: "8",
        name: "Tic Tac Toe Game",	
        img: TicTacToe,
        description: "This is a tic-tac-toe game created with Vanilla JS",
        link: "https://github.com/"

        },
 
        
    ]


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    const submitHandeler = (e) => {
       alert("yaaay!!")
     };


  return (
    <div className="portfolio" id='Portfolio'>
        {/* Heading */}
        <span style={{color: darkMode ? "#fff" : "",}}>RECENT <span>PROJECTS</span></span>
        <span>Here are a few projects I've worked on recently.</span>
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
                        <h3 onClick={submitHandeler} >{project.name}</h3>
                        {/* <button className="c-button">LEARN MORE</button> */}

                        <p className='p-description  '>{project.description}</p>
 
                     </SwiperSlide>
                )
            })}


        </Swiper>
    </div>
  )
}

export default Portfolio