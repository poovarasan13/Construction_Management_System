import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import backimg from "../../assests/images/services/concrete.jpg";
import Navbar from '../../Navbar';

function Painting() {
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
          setServices(servicesData.services || []); // Assuming services are wrapped in an object
        } catch (error) {
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
          <div className="row d-flex">
            {services.map((service, index) => (
              <div className="col pt-3" key={index}>
                <div
                  className="card"
                  style={{ width: "18rem" }}
                >
                  <img src={service.image} alt={service.fname} className="card-img-top" />
                  <div className="card-body text-center">
                    <div className="card-title h4">{service.companyName}</div>
                    <div className="card-text">{service.fname}</div> {/* Displaying fname here */}
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
    </div>
  );
}

export default Painting;
