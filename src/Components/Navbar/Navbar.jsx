import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';
import {AiOutlineMenu}  from 'react-icons/ai';


function Navbar() {
  return (
     <div className="n-wrapper">
         <div className="n-left">
            <div className="n-name">Zakaria</div>
            <Toggle/>
         </div>
         <div className="n-right">
             <div className="n-list">
                 <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li className='n-li'>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                        <li className='n-li'>Services</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                        <li className='n-li'>Portfolio</li>
                    </Link>
                    
                 </ul>
                 
             </div>
             <Link spy={true} to='Contact' smooth={true} >
             <button className="button n-button">Contact</button>
             </Link>
             {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><AiOutlineMenu/></span>
                    </button> */}

         </div>
         
     </div>
  )
}

export default Navbar