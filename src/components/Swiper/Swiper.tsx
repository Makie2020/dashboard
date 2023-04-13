/* eslint-disable prettier/prettier */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import React from 'react';

const SwiperBooking = ({data}) =>{
  console.log(data.image)
  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
    >
      <SwiperSlide className="slider-container">
        <img
          src={data.imageTwo}
          alt="Hotel Room"
        />
      </SwiperSlide>
      <SwiperSlide className="slider-container">
        <img
           src={data.imageThree}
          alt="Hotel Room"
        />
      </SwiperSlide>
      <SwiperSlide className="slider-container">
        <img
          src={data.imageThree}
          alt="Hotel Room"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperBooking;