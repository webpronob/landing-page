import React from 'react';
import '../../src/components/Css/Home.css'
import '../../src/components/Css/Com.css'
const Contact = () => {
    return (
        <div className='contact-parant'>
           <div className='view-text'>
            <h3>Have Any Questions? <span>Contact Us</span></h3>
           </div>
           <div>
           <form>

  <div class="form-outline ">
    <input type="text" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">Name</label>
  </div>


  <div class="form-outline ">
    <input type="email" id="form4Example2" class="form-control" />
    <label class="form-label" for="form4Example2">Email address</label>
  </div>


  <div class="form-outline ">
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Message</label>
  </div>



  <button type="submit" class="btn btn-primary btn-block ">Send</button>
</form>
           </div>
        </div>
    );
};

export default Contact;