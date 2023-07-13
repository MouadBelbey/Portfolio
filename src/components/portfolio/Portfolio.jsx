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
import IMG11 from '../../assets/portfolio11.jpg'
import IMG12 from '../../assets/portfolio12.jpg'

const data = [
  {
    id: 2,
    image: IMG2,
    title: 'Poker Shuffle',
    github: 'https://github.com/MouadBelbey/PokerShuffle.git',
    website: 'https://mouadbelbey.github.io/PokerShuffle/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Dice Game',
    github: 'https://github.com/MouadBelbey/DiceGame.git',
    website: 'https://mouadbelbey.github.io/DiceGame/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Drum Kit',
    github: 'https://github.com/MouadBelbey/DrumKit.git',
    website: 'https://mouadbelbey.github.io/DrumKit/'
  },
  // {
  //   id: 7,
  //   image: IMG7,
  //   title: 'Daily Journal',
  //   github: 'https://github.com/MouadBelbey/DailyJournal.git',
  //   website: ''
  // },
  // {
  //   id: 8,
  //   image: IMG8,
  //   title: 'Secrets',
  //   github: 'https://github.com/MouadBelbey/Secrets.git',
  //   website: ''
  // },
  {
    id: 9,
    image: IMG9,
    title: 'Simon Game',
    github: 'https://github.com/MouadBelbey/SimonGame.git',
    website: 'https://mouadbelbey.github.io/SimonGame/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'TinDog',
    github: 'https://github.com/MouadBelbey/TinDog.git',
    website: 'https://mouadbelbey.github.io/TinDog/'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Dar Beya',
    github: 'https://github.com/MouadBelbey/maisonBeya.git',
    website: 'https://darbeya.azurewebsites.net/'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Pizza Mama',
    github: 'https://github.com/MouadBelbey/pizza_mama.git',
    website: 'https://pizzapapa.azurewebsites.net/'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, website}) => {
            return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn btn-primary' target='_blank'>Github</a>
            <a href={website} className='btn' target='_blank'>Website</a>
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