import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import '../../src/components/Css/Com.css'
const SlidePerView = () => {
    return (
     <div className="view-parant">
        <div className="view-text">
            <h3>Cryptap Live <span>Screenshots</span></h3>
            <p>CRYPTAP WORKS FOR YOUR SUCCESS</p>
        </div>
           <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="Swiper2"
      >
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/6.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/5.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/9.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/10.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/11.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/4.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/6.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/5.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/9.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/10.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/11.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/4.jpg" alt="Girl in a jacket" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
     </div>
    );
};

export default SlidePerView;