import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
        containerClass="swiper-container"
        onInit={swiper => {
          swiper.slideTo(1, 0); // Initially slide to #slide2
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={service.image} alt={service.title} />
              <h1 className="service-title">{service.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}