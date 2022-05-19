import React from 'react'
import { icons } from 'react-icons/lib'
import './Card.css'
const Card = ({titleIcon, heading, detail, icons}) => {
 
  return (
    <div className="card">
        {/* <img src={emoji} alt="" /> */}
        <div className='card_icon'>{titleIcon}</div>
        <span >{heading}</span>
        <div className="card_icons">{icons}</div>
        <div className='cardText'>{detail}</div>
        {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  )
}

export default Card