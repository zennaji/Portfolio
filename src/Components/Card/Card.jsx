import React from 'react'
import { icons } from 'react-icons/lib'
import './Card.css'

import {themeContext} from "./../../Context";
import {useContext} from "react";

const Card = ({titleIcon, heading, detail, icons}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className="card">
        {/* <img src={emoji} alt="" /> */}
        <div className='card_icon'>{titleIcon}</div>
        <span >{heading}</span>
        <div className="card_icons" style={{color: darkMode ? "#fff" : "",}}>{icons}</div>
        <div className='cardText' style={{color: darkMode ? "#fff" : "",}}>{detail}</div>
        {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  )
}

export default Card