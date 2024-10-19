import React from 'react'
import back from '../../assests/images/team-1.png'
function Says() {
    
   
    return (
      <>
       <div class="container-fluid">
        <div class="row">
        <div class="col-md-4 image-container">
             <img src={back} alt="" className='img'/>
        </div>

        
          
            <div class="col-md-5 col-md-offset-7 h4 ps-5 ms-5">
              <h4 class="text-white">
                What They Says<span class="tiny-border"></span>
              </h4>

              <ul class="testimonial-list wow fadeIn" data-wow-delay=".25s">
                <li class="text-warning ps-">
                  They were so friendly and it was pleasure to get my tasks
                  done. I'm very happy with services their provided. I will
                  recommend this company to my family and friends. Their works
                  is professional and their pricing was competitive.
                  <br></br>
                  <br></br>
                  <span class="text-danger">Dickson Ondiek, Client</span>
                </li>
                <br/><br/>
                <li class="text-warning px-3">
                  A wonderful works, Thank you! The best construction company in
                  town as it proved by quality of works and services. Their
                  services make my feel so special. I always enjoy coming here,
                  i would definitely return for future projects.
<br/>  <br/>                <span class="text-danger">Mwalimu Achar, Client</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}

export default Says