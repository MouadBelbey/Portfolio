import React from 'react'
import CV from '../../assets/Mouad_Belbey_curriculum_Vitae.pdf'
import Certificat from '../../assets/Certificat.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        <a href={Certificat} download className='btn'>Certificat</a>
    </div>
  )
}

export default CTA