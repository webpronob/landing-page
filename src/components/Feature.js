import React from 'react';
import '../../src/components/Css/Home.css'
const Feature = () => {
    return (
        <div className='parant-feature'>
           <div>
           <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/02/applanding-intro.png" alt="Girl in a jacket" />
            </div> 
           <div>
            <h4>App For Bitcoin With</h4>
            <h3>Functional Wallet</h3>
            <p>Using the App, you can check the current exchange rate for BTC and LTC at any time and keep yourself updated.</p>
            <h5>Download the App on</h5>
            <div className='download-img'>
            <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/02/app-store-btn.png" alt="Girl in a jacket" />
            <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/02/google-store-btn.png" alt="Girl in a jacket" />
            </div>
            </div> 
        </div>
    );
};

export default Feature;