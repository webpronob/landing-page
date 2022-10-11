import React from 'react';
import '../../src/components/Css/Home.css'
const Newslater = () => {
    return (
        <div className='newslater-parant'>
            <div className='newslater-text'>
                <h3>Sign Into Our <span>Newsletter</span></h3>
                <p>WHAT DO YOU GET</p>
            </div>
            <div className='newsleter-inner'>

            <div class="input-group">
         <input type="email" class="form-control" placeholder="Enter your email"/>
         <span class="input-group-btn">
         <button class="btn" type="submit">Subscribe Now</button>
         </span>
          </div>
            </div>
        </div>
    );
};

export default Newslater;