import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import './index.css';

import LeftArrowImage from '../../Assets/Images/LeftArrowImage.png';
import RightArrowImage from '../../Assets/Images/RightArrowImage.png';
import GalleryImage from '../../Assets/Images/gallery-img.png'

const BlankSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Trigger re-render once refs are attached
    setSwiperReady(true);
  }, []);

  return (
    < div className='blank-slider' >
      <h3 className='text-center font-52 mt-60'>When I’m not working, I like to expore new mediums.</h3>
      <div className="custom-container">
      <div className="blank-slider-wrapper">
        <img
          src={LeftArrowImage}
          alt="Previous"
          className="custom-arrow left-arrow"
          ref={prevRef}
        />

        <div className="blank-slider-container">
          {swiperReady && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={3}
              loop
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
               breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {[...Array(6)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`blank-card ${index === 0 ? 'left-shadow' : index === 2 ? 'right-shadow' : ''
                      }`}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <img
          src={RightArrowImage}
          alt="Next"
          className="custom-arrow right-arrow"
          ref={nextRef}
        />
      </div>
      <div className='d-flex justify-content-center align-items-center mb-60 flex-direction'>
        <h4 className='font-52'>See my work in the  </h4>
        <img src={GalleryImage} alt="" className='gallery-img' />
      </div>
      </div>
    </div>
  );
};

export default BlankSlider;
