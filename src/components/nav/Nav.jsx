import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineExperiment} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineExperiment /></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav