import React, { useRef, useState } from "react";
import Hero1 from "../../assets/Hero1.png";
import Hero2 from "../../assets/Hero2.png";
import Hero3 from "../../assets/Hero3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper lg:px-16 px-0"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={Hero1}
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={Hero2}
              className="w-full h-full object-cover"
              alt="Slide 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={Hero3}
              className="w-full h-full object-cover"
              alt="Slide 3"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
