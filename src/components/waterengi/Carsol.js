import React from 'react'
import slider2 from  "../../assests/images/slider2.jpg";
import slider1 from "../../assests/images/slider1.jpg";
import slider3 from "../../assests/images/slider3.jpg";
import Navbar from '../Navbar';

function Carsol() {
  return (
    <>
    <Navbar/>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1} class="d-block w-100" alt="logo1" />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-warning"> Our Expertise</h5>
              <h1>Constructing</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100" alt="logo2" />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-warning">YOUR CONSTRUCTION</h5>
              <h1>Partner</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider3} class="d-block w-100" alt="logo3" />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-warning">we bulid</h5>
              <h1>Your Dream</h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carsol