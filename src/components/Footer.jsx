import {  } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/img/icon.png';
import style from './Footer.module.css';
import { MdEmail as EmailIcon } from "react-icons/md";
import { AiFillInstagram as InstagramIcon, AiFillFacebook as FacebookIcon, AiFillLinkedin as LinkedinIcon } from "react-icons/ai";

function Footer() {

  return (
    <>
      <footer>

        <div className={style.footerContentContainer}>

          <div className={style.footerRestaurant}>
            <img src={logo} alt="Logo do restaurante" className={style.footerLogo}/>
            
            <div className={style.footerMenu}>
              <h2>Sakura Sushi Bar</h2>
              <nav className={style.menuLinksContainer}>
                <ul>
                  <li><Link to="/" ><span className={style.linksText}>Home</span></Link></li>
                  <li><Link to="/produtos" ><span className={style.linksText}>Produtos</span></Link></li>
                  <li><Link to="/sobre" ><span className={style.linksText}>Sobre</span></Link></li>
                  <li><Link to="/login" ><span className={style.linksText}>Pedido</span></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        
          <nav>
            <ul className={style.socialMediaContainer}>
              <li><a href="#"><FacebookIcon size={36}/></a></li>
              <li><a href="#"><InstagramIcon size={36}/></a></li>
              <li><a href="#"><LinkedinIcon size={36}/></a></li>
              <li><a href="#"><EmailIcon size={36}/></a></li>
            </ul>
          </nav>
        </div>
      
        <div className={style.horizontalLine}>
          <p>&copy; 2023  Sakura Sushi Bar</p>
        </div>
      
      </footer>
    </>
  )
}

export default Footer
