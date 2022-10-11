import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../src/components/Css/Home.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
const Slider = () => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="parant-slider">
            <div className="slider-container">
            <h4>App With Awasome Features</h4>
                <h3>CryptoCurrency App</h3>
                <div className="brand-img">
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c1.png" alt="Girl in a jacket" />
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c2.png" />
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c3.png" alt="Girl in a jacket" />
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c4.png" alt="Girl in a jacket" />
                </div>
                <p>Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus<br></br> lacus vel orci
malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus.</p>
            </div>
            <div className="image-container">
            <img src="  https://cryptapp.wpengine.com/wp-content/uploads/2018/03/hand.png" alt="Girl in a jacket" />
          
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="parant-slider">
            <div className="slider-container">
            <h4>App With Awasome Features</h4>
                <h3>CryptoCurrency App</h3>
                <div className="brand-img">
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c1.png" alt="Girl in a jacket" />
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c2.png" />
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c3.png" alt="Girl in a jacket" />
                <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/c4.png" alt="Girl in a jacket" />
                </div>
                <p>Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus<br></br> lacus vel orci
malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus.</p>
            </div>
            <div className="image-container">
            <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/03/horizontal-screen.png" alt="Girl in a jacket" />
          
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;