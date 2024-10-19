import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import backimg from "../../assests/images/plumbing.jpg";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import PreviousService from '../PreviousService';

function Electrical() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const serviceType = query.get('serviceType');
  console.log(serviceType);
  const data = ["We Are an Award-Winning Company", "High Innovation", "Strong Foundations"];
  const [content, setContent] = useState(0);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prev) => (prev + 1) % data.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [data.length]);
  useEffect(() => {
    const fetchServices = async () => {
      if (serviceType) {
        try {
          const response = await fetch(`http://localhost:3003/services?type=${encodeURIComponent(serviceType)}`);
          const servicesData = await response.json();
          setServices(servicesData.services || []);         } catch (error) {
          console.error('Failed to fetch services:', error);
        }
      } else {
        console.warn('No serviceType found in location.state');
      }
    };
 fetchServices();
  }, [serviceType]);
  return (
    <div>
      <Navbar />
      <div
        className="container-fluid py-5 d-flex justify-content-center align-items-center bg-cover no-repeat"
        style={{
          backgroundImage: `url(${backimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="row mt-5 pt-5 pb-5 mb-5">
          <div className="col mt-5 pt-5 text-center mb-3">
            <div className="fw-bold text-white display-1">
              WELCOME<label className="fw-bold display-1 text-warning">.</label>
            </div>
          </div>
          <div className="col-12 fw-bold pt-5 text-center text-warning display-3">
            <h1>{data[content]}</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-3">
            <div className="text h2 pt-4 pb-2">Services for {serviceType}</div>
          </div>
        </div>
 {services.length > 0 ? (
  <div className="row d-flex justify-content-center">
    {services.map((service, index) => (
      <div className="col-md-3" key={index}>
        <div className="card p-3 mb-4 shadow" style={{ width: "280px" ,borderRadius: "10px" }}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row align-items-center">
              <div className="icon me-2">
                <i className="bx bxl-mailchimp" style={{ fontSize: "24px", color: "#FFCC00" }}></i>
              </div>
              <div className="c-details">
                <h6 className="mb-0 h5 text-dark">{service.company}</h6>
                <p className='text-secondary fs-6 mt-1'>
                  <small>
                  {service.fname} <span>{service.lname}</span></small>
                  </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <img src={service.image} alt={service.fname} style={{ width: "250px", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
          </div>
          <div className='row justify-content-center mt-2'>
            <div className='col-8'>
              <button className='btn btn-warning btn-sm w-100'>View Details</button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="text-center pt-4">
    <h4>No services available for {serviceType}.</h4>
  </div>
)}
</div>
<PreviousService/>
      <Footer/>
    </div>
  );
}
export default Electrical;
