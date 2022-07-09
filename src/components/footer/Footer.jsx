import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">MOUAD</a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook className='footer__socials-icon'/></a>
        <a href="https://instagram.com"><BsInstagram className='footer__socials-icon'/></a>
        <a href="https://linkedin.com"><BsLinkedin className='footer__socials-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mouad Belbey 2022</small>
      </div>

    </footer>
  )
}

export default Footer