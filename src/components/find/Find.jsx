import React from "react"
import styles from './Find.module.css'
import Card from './Card'

import { Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
          <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
          </div>
      </div>
        <div className={styles.slider_container}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            breakpoints={{

              340: {
                width: 200,
                slidesPerView: 1,
              },

              768: {
                width: 768,
                slidesPerView: 4,
              },

              1040: {
                width: 1040,
                slidesPerView: 4,
              },

            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >

              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' make='Audi'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2115&q=80' make='BMW'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' make='Mersedes'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1588899428678-f9ea565d91fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' make='Jeep'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' make='Chevrolet'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' make='Mustang'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1618782530124-fa5ddd7358df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' make='Nissan'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1625037669075-e5472e080265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80' make='Kia'/>
              </SwiperSlide>
              <SwiperSlide>
                <Card image='https://images.unsplash.com/photo-1615106806531-183c31fccfdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' make='Lexus'/>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>

  )
}

export default Find
