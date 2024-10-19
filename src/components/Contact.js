import React from 'react';
import background from "../assests/images/bg.jpg";
import Navbar from './Navbar';
 function Contact(){
    return(
        <div>
            <Navbar/>
        <div className="container-fluid  py-5 bg-cover no-repeat  "   style={{background:`url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
     }}>
        <div className="row pt-5 mt-5">
            <div className="col d-flex justify-content-center align-items-center">
                <div className="fw-bold text-white display-5">CONTACT US</div>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col d-flex justify-content-center align-items-center">
                <div className="text-warning gap-md-5">For  Further  Queries</div>
            </div>
        </div>
        </div><div className="container-fluid pb-5">
            < div className="row pt-5 ">
                <div className="col d-flex ">   
                <span className="border border-warning bg-warning px-4 fw-bold pt-1">Coimbatore</span>
                <div className="col">
                <span className="d-block p-2 px-5 bg-dark "> ...</span>
                </div></div>
                <div className="row mt-5">
                    <div className="col">
                <iframe   width="400" height="400" title="map" src="https://maps.google.com/maps?q=karpagam+college+of+engineering+coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed" >
                </iframe>
</div>
<div className="col">
    <div className="fw-bold">Address</div>
    <div className="ms-3">Othakalmandapam post,Coimbatore-641032 </div><br></br>
    <div className="fw-bold">Phone</div>
    <div className="ms-3">9080155323</div><br></br>
    <div className="fw-bold">E-Mail</div>
    <div className="ms-3">cresta@gmail.com</div><br></br>
    <div className="fw-bold">Open</div>
    <div className="ms-3">Monday - Friday 08:00 - 16:00</div>
</div>

                <div className="col-5 alert alert-secondary">
                    <form>
                        <div className="fw-bold ms-3">Send Us Message</div>
                        <input type="text" placeholder='  Your Name' name="name" className="mt-4 ms-5" size="40"></input><br></br>
                        <input type="email" placeholder='  Your Email' name="email" className="mt-4 ms-5" size="40"></input><br></br>
                        <input type="text" placeholder='  Your Phone' name="phone" className="mt-4 ms-5" size="40"></input><br></br>
                        <textarea className="mt-4 ms-5" placeholder="  Message" name="Message" rows="5" cols="43" ></textarea><br></br>
                        <button className="mt-4 ms-5 px-3 border border-secondary">Send</button>
                    </form>
                </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Contact;