import React from 'react'
import CV from '../../assets/MOUAD_BELBEY_CV.pdf'
import Certificat from '../../assets/Certificat.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>CV</a>
        <a href="#contact" className='btn btn-primary'>Me joindre</a>
        <a href={Certificat} download className='btn'>Certificat</a>
    </div>
  )
}

export default CTA