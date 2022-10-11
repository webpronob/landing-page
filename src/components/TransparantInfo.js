import React from 'react';
import '../../src/components/Css/Home.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const TransparantInfo = () => {
    return (
        <div className='transparant-container'>
             <img src="https://cryptapp.wpengine.com/wp-content/uploads/2018/02/mobiles-768x519.png" alt="Girl in a jacket" />
            <div className='inner-transparant'>
            <div id="Content">

            <div className='progress1' style={{ width: 150, height: 150 }}>
  <CircularProgressbar text={45} value={45} />
  <h5 className='text-center pt-3 text-white'>BITCOIN</h5>
</div>

<div className='progress1' style={{ width: 150, height: 150 }}>
  <CircularProgressbar text={66} value={66} />
  <h5 className='text-center pt-3 text-white'>ETHERIUM</h5>
</div>

<div className='progress1' style={{ width: 150, height: 150 }}>
  <CircularProgressbar text={87} value={87} />
  <h5 className='text-center pt-3 text-white'>RIPPLE</h5>
</div>
<div className='progress1' style={{ width: 150, height: 150 }}>
  <CircularProgressbar text={67} value={67} />
  <h5 className='text-center pt-3 text-white'>ZCASH</h5>
</div>
  </div>
            </div>
        </div>
    );
};

export default TransparantInfo;