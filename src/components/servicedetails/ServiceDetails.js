import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Navbar';
import { useUser } from '../UserContext';
import { useVendor } from '../VendorContext';
import Footer from '../Footer';
import typesOfWorks from './types'; 
function ServiceDetails() {
  const [display,setDisplay]=useState(true);
  // const [uname, setName] = useState('');
  // const [uemail, setEmail] = useState('');
  // const [uphone, setPhone] = useState('');

  const [type1, setType1] = useState('');
  const [date, setDate] = useState('');
  const [area, setArea] = useState('');
  const [place, setPlace] = useState('');
  const [message, setMessage] = useState(
    'We are currently planning a construction project and would like to learn more about your services. Could you please send us some additional information? Thank you!'
  );
  const [add_message, setAMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { username ,useremail,userphone} = useUser();
  const { fname } = useVendor();
  const { v_name, lname, image, company, type, image1, phone, email, year, price, about} = location.state || {};
  const workOptions = typesOfWorks[type] || [];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeForm=()=>{
    setDisplay(true);
  }
  const handleRequestPricing = () => {
    if (fname) {
      Swal.fire({
        icon: 'error',
        title: 'You are not able to Request Pricing',
        text: 'Vendors are not allowed to request pricing!',
        showConfirmButton: true,
        confirmButtonText: 'OK',
      });
    } else if (username) {
      setDisplay(false);
      // const modal = new window.bootstrap.Modal(document.getElementById('requestPricingModal'));
      // modal.show();
    } else {
      navigate('/login');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3003/user_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, useremail, userphone, date, area, message, add_message, v_name, type,type1,place,price }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Message Successfully Sent to Vendor',
          text: 'Your request was sent successfully!',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          position: 'bottom-end',
          timer: 4000,
          toast: true,
          showCloseButton: true,
        });
        setDisplay(true);
        // setName('');
        // setEmail('');
        // setPhone('');
        setDate('');
        setArea('');
        setAMessage('');
        setPlace('');
        setType1('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Request Not Sent',
          text: data.message || 'Something went wrong. Please try again.',
          position: 'bottom-end',
          timer: 4000,
          toast: true,
          showCloseButton: true,
        });
      }
    } catch (e) {
      console.log('Error in request:', e);
    }
    
    // const modal = window.bootstrap.Modal.getInstance(document.getElementById('requestPricingModal'));
    // modal.hide();
  };

  return (
    <div>
      <Navbar />
      {display&&
      <div>
     
      <div className="container-fluid hero-section d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: '#1c1c1c', height: '300px' }}>
        <div className="text-center">
          <h1 className="display-4 fw-bold">{company}</h1>
          <p className="lead">Specializing in {type} services</p>
        </div>
      </div>

  
      <div className="container my-5">
        <div className="row">
        
          <div className="col-md-6 mb-4 text-center">
            <img src={image} alt={`${company} Vendor`} className="img-fluid rounded shadow" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>

          <div className="col-md-6">
  <div className="vendor-info p-4 shadow-sm rounded" style={{ backgroundColor: '#ffffff', border: '1px solid #ddd' }}>
    
    <h2 className="mb-3" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>{company}</h2>
    
    <p className="text-muted mb-2">
      <i className="bi bi-tag-fill me-2" style={{ color: '#17a2b8' }}></i>
      <strong>Type:</strong> <span className="text-info">{type}</span>
    </p>
    
    <p className="mb-2">
      <i className="bi bi-person-fill me-2" style={{ color: '#6c757d' }}></i>
      <strong>Vendor:</strong> {v_name} {lname}
    </p>
    
    <p className="mb-2">
      <i className="bi bi-telephone-fill me-2" style={{ color: '#6c757d' }}></i>
      <strong>Phone:</strong> {phone}
    </p>
    
    <p className="mb-2">
      <i className="bi bi-envelope-fill me-2" style={{ color: '#6c757d' }}></i>
      <strong>Email:</strong> {email}
    </p>
    
    <p className="mb-2">
      <i className="bi bi-calendar-fill me-2" style={{ color: '#6c757d' }}></i>
      <strong>Year Established:</strong> {year}
    </p>

    {price && (
      <p className="mb-2">
        <i className="bi bi-currency-rupee me-2" style={{ color: '#28a745' }}></i>
        <strong>Price:</strong> <span className="text-success">₹{price}</span> per square meter
      </p>
    )}

    {/* Request Pricing Button */}
    <button 
      className="btn btn-warning btn-sm mt-4 px-5 py-2" 
      onClick={handleRequestPricing} 
      style={{ fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
    >
      Request Pricing
    </button>
  </div>
</div>

        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="mb-4">About {company}</h3>
            <p>{about}</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col text-center">
            <h3 className="mb-4">Additional Images</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <img src={image1} alt="Additional" className="img-fluid rounded shadow" />
              </div>
              <div className="col-md-6 mb-3">
                <img src={image} alt="Additional" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>
</div>
     
        <div className='container-fluid'>
        <div className="row pt-3 mt-5 text-center text-white" style={{ backgroundColor: '#343a40' }}>
          <div className="col">
            <p className="lead">Ready to work with {company}? Contact us now!</p>
          </div>
        </div>
      </div>
</div>}

{!display &&
  <div className="request-pricing-form container-fluid">
  <div className='row' style={{ backgroundColor: 'rgba(7, 7, 7, 0.9)' }}>
    <div className='col pt-5 py-3'></div>
  </div>
  <div className="card mx-auto shadow-lg mt-5" style={{ maxWidth: '800px', borderRadius: '12px', backgroundColor: '#fff' }}>
    <h5 className="text-center mb-4 h2 mt-3">Request Pricing</h5>
    <div className='row justify-content-center'>
      <div className='col-10'>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control shadow-sm" id="message" rows="3" onChange={(e) => setMessage(e.target.value)} value={message} style={{ borderRadius: '8px' }}></textarea>
          </div>

          {/* Optional Fields */}
          {/* <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="uname" className="form-label">Name</label>
              <input type="text" className="form-control shadow-sm" id="uname" value={uname} onChange={(e) => setName(e.target.value)} style={{ borderRadius: '8px' }} />
            </div>
            <div className="col-md-6">
              <label htmlFor="uemail" className="form-label">Email</label>
              <input type="email" className="form-control shadow-sm" id="uemail" value={uemail} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '8px' }} />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="uphone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control shadow-sm" id="uphone" value={uphone} onChange={(e) => setPhone(e.target.value)} style={{ borderRadius: '8px' }} />
          </div> */}
          
          <div className="mb-4">
            <label htmlFor="eventDate" className="form-label">Service Start Date</label>
            <input type="date" className="form-control shadow-sm" id="eventDate" value={date} onChange={(e) => setDate(e.target.value)} style={{ borderRadius: '8px' }} />
          </div>

          <div className="mb-4">
      <label htmlFor="type1" className="form-label">
        Types of {type} Works
      </label>
      <br />
      <select
        id="type1"
        value={type1}
        onChange={(e) => setType1(e.target.value)}
        className="form-control shadow-sm"
        style={{ borderRadius: '8px' }}
      >
        {workOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
          <div className="mb-4">
            <label htmlFor="service" className="form-label">Area (Square Meters)</label>
            <input type="text" className="form-control shadow-sm" id="service" value={area} onChange={(e) => setArea(e.target.value)} style={{ borderRadius: '8px' }} />
          </div>

          <div className="mb-4">
            <label htmlFor="place" className="form-label">Location</label>
            <input type="text" className="form-control shadow-sm" id="place" value={place} onChange={(e) => setPlace(e.target.value)} style={{ borderRadius: '8px' }} />
          </div>

          <div className="mb-4">
            <label htmlFor="additionalMessage" className="form-label">Any Materials You Want to Suggest</label>
            <textarea className="form-control shadow-sm" id="additionalMessage" rows="3" value={add_message} onChange={(e) => setAMessage(e.target.value)} style={{ borderRadius: '8px' }}></textarea>
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-secondary me-2 shadow-sm" onClick={closeForm} style={{ borderRadius: '8px' }}>Close</button>
            <button type="submit" className="btn btn-primary shadow-sm" style={{ borderRadius: '8px' }}>Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


}
      <Footer/>
    </div>
  );
}

export default ServiceDetails;
