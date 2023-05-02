import React from 'react'
import CV from '../../assets/Mouad_Belbey_Curriculum_Vitae_2023.pdf'
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