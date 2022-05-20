import {useRef} from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';
import {FaBars, FaTimes}  from 'react-icons/fa';
import mylogo from '../../img/mylogo.png';


function Navbar() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
      
     <div className="n-wrapper">
         <div className="n-left">
            <div className="n-name"><img src={mylogo} alt="" /></div>
         </div>
         <div ref={navRef} className="n-right">
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
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
                <Toggle/>

              
         </div>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars/>
                </button>
     </div>
  )
}

export default Navbar