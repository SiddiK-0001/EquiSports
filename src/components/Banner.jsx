import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Banner() {
    const slides = [
        {
          id: 1,
          image: "https://i.pinimg.com/736x/07/96/b1/0796b180915a3a039211d4fc6dc50b39.jpg",
          title: "Experience the Thrill of Victory",
          subtitle: "Step into a world where passion meets performance, and every athlete, fan, and enthusiast finds their place. EquiSports is your gateway to unparalleled insights, training resources, and community engagement—empowering you to achieve greatness in every sport you love.",
        },
        {
          id: 2,
          image: "https://i.pinimg.com/236x/ae/9a/70/ae9a707bc78d9c6f777998fb4651b5e5.jpg",
          title: "Join the Global Sports Community",
          subtitle: "Never miss a moment of the action with real-time updates on live scores from all your favorite games and tournaments. Dive deeper with exclusive news, behind-the-scenes stories, and in-depth analysis from the world of sports.",
        },
        {
          id: 3,
          image: "https://i.pinimg.com/736x/b9/5e/34/b95e3402e0301cf3f3ab308147d81bcf.jpg",
          title: "Celebrate Athletic Achievement",
          subtitle: "Uncover the heart and soul of sports with powerful stories that inspire and motivate. From tales of perseverance and triumph to groundbreaking achievements, EquiSports brings you closer to the athletes and moments that redefine greatness.",
        },
      ];
  return (
    <>
      <Swiper
       
        navigation={true} 
        rewind={true}   
        keyboard={true}
        modules={[Navigation]}
        className="mySwiper"
      >
           {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex  ">
                <div className='flex flex-col justify-center items-start text-left text-white px-20 w-3/4'>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-sm md:text-xl">{slide.subtitle}</p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
