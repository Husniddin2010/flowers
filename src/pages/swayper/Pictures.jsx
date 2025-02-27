import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Pictures.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Husniddin() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="../public/Rectangle 1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="../public/Rectangle 2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../public/Rectangle 3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../public/Rectangle 4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../public/Rectangle 5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../public/Rectangle 6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./product1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./product1.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
