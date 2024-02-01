import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";

function Home() {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <div className='pop_services'>
        <span className='title1'>Popular Services</span>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      </div>
    </div>
  )
}

export default Home