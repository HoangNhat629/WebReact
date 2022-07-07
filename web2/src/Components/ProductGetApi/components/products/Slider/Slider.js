import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "./../../../../../assets/images/1.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
