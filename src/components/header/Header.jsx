import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id='#'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mouad Belbey</h1>
        <h5 className="text-light">a Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header