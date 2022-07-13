import React from 'react'
import './about.css'
import ME from '../../assets/Mouad__Belbey1.jpg'

function About() {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className='about__content'>
          <p>
          Mon objectif est de mettre à profit mes
          compétences en participant à la création de
          solutions performantes, efficaces et adaptées
          aux besoins de l’entreprise. Je suis passioné
          par les nouvelles technologies et je ne cesse
          d’en apprendre davantage à tous les jours.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About