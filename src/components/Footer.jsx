import {  } from 'react';
import logo from '../assets/img/icon.png';
import footerStyle from './components.module.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {

  return (
    <>
      <footer>

        <img src={logo} alt="Logo do restaurante" className={footerStyle.footerLogo}/>

        <div>
          {/* links das paginas do site*/}
        </div>
        
        <div className='social-media-container'>
          <nav>
            <ul>
              <li><a href="#" ><FaFacebookSquare className='social-media-color' /></a></li>
              <li><a href="#" ><FaInstagramSquare className='social-media-color' /></a></li>
              <li><a href="#" ><FaLinkedin className='social-media-color' /></a></li>
              <li><a href="#" ><HiOutlineMail className='social-media-color' /></a></li>
            </ul>
          </nav>
        </div>
      
        <div>
          <p>&copy; 2023  Sakura Sushi Bar</p>
        </div>
      
      </footer>
    </>
  )
}

export default Footer
