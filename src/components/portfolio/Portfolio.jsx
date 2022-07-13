import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'

import {  Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// DO NOT USE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Labyrinthe',
    github: 'https://github.com/MouadBelbey/Labyrinthe.git'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Poker Shuffle',
    github: 'https://github.com/MouadBelbey/PokerShuffle.git'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Répertoire électronique',
    github: 'https://github.com/MouadBelbey/repertoireElectronique-.git'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Engin de recherche',
    github: 'https://github.com/MouadBelbey/MoteurDeRecherche.git'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Dice Game',
    github: 'https://github.com/MouadBelbey/DiceGame.git'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Drum Kit',
    github: 'https://github.com/MouadBelbey/DrumKit.git'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Daily Journal',
    github: 'https://github.com/MouadBelbey/DailyJournal.git'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Secrets',
    github: 'https://github.com/MouadBelbey/Secrets.git'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Simon Game',
    github: 'https://github.com/MouadBelbey/SimonGame.git'
  },
  {
    id: 10,
    image: IMG10,
    title: 'TinDog',
    github: 'https://github.com/MouadBelbey/TinDog.git'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn btn-primary' target='_blank'>Github</a>
          </div>
          </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio