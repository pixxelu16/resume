import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

import Collage2 from '../../Assets/Images/gallery-images/gallery-2.png';
import Collage3 from '../../Assets/Images/gallery-images/gallery-3.png';
import Collage4 from '../../Assets/Images/gallery-images/gallery-4.png';
import Collage7 from '../../Assets/Images/gallery-images/gallery-7.png';
import Collage9 from '../../Assets/Images/gallery-images/gallery-9.png';
import GalleryImage from '../../Assets/Images/gallery-img.png';

const BlankSlider = () => {
  const [swiperReady, setSwiperReady] = useState(false);
  const images = [Collage2, Collage3, Collage4, Collage7, Collage9];

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className='blank-slider'>
      <h3 className='text-center font-52 mt-60'>
        When I’m not working, I like to explore new mediums.
      </h3>
      <div className="custom-container">
        <div className="blank-slider-wrapper">
          <div className="blank-slider-container">
            {swiperReady && (
              <>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={40}
                  slidesPerView={3}
                  loop
                  pagination={{
                    el: '.custom-swiper-pagination',
                    clickable: true,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {images.map((imageSrc, index) => (
                    <SwiperSlide key={index}>
                      <div className={`blank-card ${index === 0 ? 'left-shadow' : index === images.length - 1 ? 'right-shadow' : ''}`}>
                        <img
                          src={imageSrc}
                          alt={`Slide ${index + 1}`}
                          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* External pagination dots */}
                <div className="custom-swiper-pagination" />
              </>
            )}
          </div>
        </div>

        <div className='d-flex justify-content-center align-items-center mb-60 flex-direction'>
          <h4 className='font-52'>See my work in the</h4>
          <img src={GalleryImage} alt="" className='gallery-img' />
        </div>
      </div>
    </div>
  );
};

export default BlankSlider;
