import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'; // Import SweetAlert2
import Navbar from './Navbar';

function VendorSignup() {

  const [fname, setNamef] = useState('');
  const [lname, setNamel] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', { fname, lname, company, category, email, phone, password, state });

    try {
      const response = await fetch('http://localhost:3003/vendorsignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fname, lname, company, category, email, phone, password, state }),
      });

      const data = await response.json();

      if (data.success) {
       
        Swal.fire({
          icon: 'success',
          title: 'Vendor Registered Successfully!',
          text: 'Your account has been created successfully.',
          showConfirmButton: true,
        }).then(() => {
          navigate('/vendorl');
        });
      } else {
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: data.message || 'An error occurred during registration.',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error('Error registering vendor:', error.message);
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className='container-fluid '>
        <div className='row colorr' style={{ backgroundColor: "rgba(7, 7, 7, 0.9)" }}>
          <div className='col pt-5 py-3 '></div>
        </div>
        <div className='row bg-warning-subtle pt-3 pb-5'>
          <div className='col-5 mt-5'>
            <div className='col-12 mt-4'>
              <div className='row justify-content-center'>
                <div className='col-3 display-5'>Cresta</div>
              </div>
            </div>
            <div className='row justify-content-center mt-3'>
              <div className='col-10 '>
                <div className='text h1 text-bold text-dark'>Grow your Construction business in a way that's easy and empowering
                </div>
              </div>
            </div>
            <div className='row justify-content-center mt-5 pt-2'>
              <div className='col-10 '>
                <div className='text text-bold fs-5 text-dark'>Ready to take your business to the next level? Register now as a vendor on our platform and reach more customers effortlessly.
                </div>
              </div>
            </div>
          </div>
          <div className='col-7'>
            <div className="container-fluid mt-5">
              <div className="row justify-content-center">
                <div className="col">
                  <div className="custom-form p-4">
                    <div className="form-heading text-center">Get started with us!</div>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="firstName" required name="firstName" onChange={(e) => setNamef(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="lastName" required name="lastName" onChange={(e) => setNamel(e.target.value)} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="company" className="form-label">Company <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="company" required name="company" onChange={(e) => setCompany(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="businessCategory" className="form-label">Business Category <span className="text-danger">*</span></label>
                          <select className="form-select" id="businessCategory" required name="category" onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled>Choose...</option>
                            <option value="Painting">Painting</option>
              <option value="Concrete">Concrete</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Foundation">Foundation</option>
              <option value="PipeLine">PipeLine</option>
              <option value="Electrical">Electrical</option>
              <option value="Grouting">Grouting</option>
              <option value="Excavation">Excavation</option>
              <option value="Roofing">Roofing</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Interior">Interior</option>
              <option value="Architecture">Architecture</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                          <input type="email" className="form-control" id="email" required name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                          <input type="tel" className="form-control" id="phone" required name="phone" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="password1" className="form-label">Password <span className="text-danger">*</span></label>
                          <input type="password" className="form-control" id="password1" required name="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="country" className="form-label">State <span className="text-danger">*</span></label>
                        <select className="form-select" id="country" required name="state" onChange={(e) => setState(e.target.value)}>
                          <option value="" disabled>Choose...</option>
                          <option value="Tamilnadu">Tamilnadu</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Karnataka">Karnataka</option>
                        </select>
                      </div>

                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="terms" required />
                        <label className="form-check-label" htmlFor="terms">
                          By submitting and sharing your information you agree to the terms of use and privacy policy
                        </label>
                      </div>

                      <div className='col-12'>
                        <div className='row justify-content-center'>
                          <div className='col-1'>
                            <button type="submit" className="btn btn-primary btn-sm px-2 py-1">Register</button>
                          </div>
                        </div>
                      </div>
                      <div className='row jsutify-content-center mt-4 pt-2 '>
                        <div className='col-5 mx-auto'>
                          <div className=''>Already Registered! <Link type="submit" to="/vendorl" className="text-success ms-2">Login</Link></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VendorSignup;
