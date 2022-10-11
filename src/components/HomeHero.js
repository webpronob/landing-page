import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import '../../src/components/Css/Home.css'
import Feature from './Feature';
const HomeHero = () => {
    return (
        <div className='hero-parant'>
            <Navbar></Navbar>
            <Slider></Slider>

            {/* <div class="donutchart-text" style="position:absolute;top:0;left:0;line-height:140px;text-align:center;width:140px;font-weight:bold;font-size:14px;font-weight:bold;">69%</div> */}
            
        </div>
    );
};

export default HomeHero;