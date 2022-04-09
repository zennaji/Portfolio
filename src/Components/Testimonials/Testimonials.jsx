import React from 'react'
import "./Testimonials.css"
import {Swiper, SwiperSlide } from 'swiper/react';
import profilePic from "../../img/profile.png"
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
        img: profilePic,
        review: "1lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        },
        {
        img: profilePic,
        review: "2lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        },
        {
        img: profilePic,
        review: "3lorem ipsum laudantium corrupti dolor, dolores minus sit veniam?dolores minus sit veniam?dolores minus sit veniam?",
        },
    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span> Exceptional work </span>
            <span>From me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/* Slider */}
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            grabCursor={true}
            pagination={{ clickable: true }}
        >
            {clients.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                       <div className="testimonial">
                            <img src= {client.img} alt="" />
                            <span>{client.review}</span>
                       </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </div>
  )
}

export default Testimonials