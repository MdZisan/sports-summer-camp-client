import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
      <>
        <Swiper 
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper text-center"
        >
          <SwiperSlide ><img className='mx-auto rounded-xl w-[80%]' src="https://img.freepik.com/premium-vector/summer-camp-schoolchildren-happy-children-running-jumping-background-open-field-with-coniferous-forest-sky-flat-vector-illustration_65580-481.jpg?w=740" /></SwiperSlide>
          <SwiperSlide><img className='mx-auto rounded-xl w-[80%]' src="https://images.unsplash.com/photo-1505748641491-f7ee2fd6fb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80" /></SwiperSlide>
          <SwiperSlide> <img className='mx-auto rounded-xl w-[80%]' src="https://images.unsplash.com/photo-1472745942893-4b9f730c7668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" />
                   </SwiperSlide>
          <SwiperSlide>  <img className='mx-auto rounded-xl w-[80%]' src="https://plus.unsplash.com/premium_photo-1670002216960-23193b9ebf96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" /></SwiperSlide>
        
          <div className="autoplay-progress w-[10px] hidden" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
          
        </Swiper>
      </>
    );
};

export default Banner;
           