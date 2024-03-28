import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceMarketing from '../../assets/images/service-marketing.png';
import ServiceHr from '../../assets/images/service-hr.png';
import ServiceGraphicDesign from '../../assets/images/service-graphic-design.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function ServiceCardCarousel({ services }) {
  useEffect(() => {
    const slide2 = document.getElementById('slide2');
  }, []);

  return (
    <div className="mb-5">
      <style>
        {`  
        .swiper-slide {
          margin-right: 10px;
          margin-left: 10px;
        }
        .swiper-slide > div {
          border-radius: 10px;
        }
        `}
      </style>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
        containerClass="swiper-container"
        onInit={(swiper) => {
          swiper.slideTo(1, 0); // Boshlang'ich ravishda #slide2 ga o'tish
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide>
            <div>
              <img src={service.image} />
              <h1 className='service-title'>{service.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
