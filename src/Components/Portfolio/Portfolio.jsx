import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import HealthOne from '../../img/HealthOne.jpg'
import 'swiper/css'

import {themeContext} from "./../../Context";
import {useContext} from "react";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/* Heading */}
        <span style={{color: darkMode ? "#fff" : "",}}>RECENTE PROJECTEN</span>
        <span>hier zijn een paar projecten waar <br /> ik onlangs aan heb gewerkt </span>
        {/* Slider */}
        <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >
            <SwiperSlide >
                <img src={HealthOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HealthOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HealthOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HealthOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HealthOne} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio