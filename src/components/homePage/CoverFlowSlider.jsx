import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import '../../assets/css/homePage/coverFlowSlider.css'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import img1 from '../../assets/img/slider-img/slider1.png'
import img2 from '../../assets/img/slider-img/slider2.png'
import img3 from '../../assets/img/slider-img/slider3.png'
import img4 from '../../assets/img/slider-img/slider4.png'
import img5 from '../../assets/img/slider-img/slider5.png'
import img6 from '../../assets/img/slider-img/slider6.png'
import img7 from '../../assets/img/slider-img/slider7.png'
import img8 from '../../assets/img/slider-img/slider8.png'
import img9 from '../../assets/img/slider-img/slider9.png'

export default () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
          delay: 1500,
          disableOnInteraction: false,
      }}
      coverflowEffect={{
          rotate: 20,
          stretch: 50,
          depth: 500,
          modifier: 1,
          slideShadows: true,
          scale: 1,
      }}
      loop={'true'}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img1} alt="slider 1" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img2} alt="slider 2" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img3} alt="slider 3" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img4} alt="slider 4" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img5} alt="slider 5" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img6} alt="slider 6" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img7} alt="slider 7" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img8} alt="slider 8" /></SwiperSlide>
        <SwiperSlide className="w-auto h-auto"><img className="img-slider" src={img9} alt="slider 9" /></SwiperSlide>
    </Swiper>
  );
};


