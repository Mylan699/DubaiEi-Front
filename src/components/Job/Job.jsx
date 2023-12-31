import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Job.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'


const Residencies = () => {
  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='orangeText'>Meilleurs choix</span>
                <span className='primaryText'>Créateur Populaires</span>
            </div>

            <Swiper {...sliderSettings}>
                    <SliderButtons/>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className='flexColStart r-card'>
                                <img src={card.image} alt='home' />  
                                
                                <span className='secondaryText r-price'>
                                    <span>{card.price}</span>
                                    <span style={{color: 'orange'}}>€</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-button'>
            <button onClick={()=> swiper.slidePrev() }>&lt;</button>
            <button onClick={()=> swiper.slideNext() }>&gt;</button>
        </div>
    )
}
