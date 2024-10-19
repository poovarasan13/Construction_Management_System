import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useVendor } from './VendorContext';
import Navbar from './Navbar';
import Swal from 'sweetalert2';

function VendorLogin() {
  const {
    setvendorName,
    setvendorNamee,
    setEmailV,
    setPasswordV,
    setPhone,
    setState,
    setCompany,
    setCategory,
    setId
  } = useVendor();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/vendorlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setId(data.id);
        setvendorName(data.fname);
        setvendorNamee(data.lname);
        setPhone(data.phone);
        setEmailV(data.email);
        setPasswordV(data.password);
        setCompany(data.company);
        setCategory(data.category);
        setState(data.state);

        // SweetAlert toast for successful login
        Swal.fire({
          position: 'bottom-right',
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome to the vendor dashboard!',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        });

        console.log("User login success and redirect to home page");
        navigate('/vendorhome');
      } else {
        Swal.fire({
          // position: 'bottom-right',
          icon: 'error',
          title: 'Login Failed',
          text: data.message || 'Invalid email or password.',
          // toast: true,
          // showConfirmButton: false,
          // timer: 3000,
        });
      }
    } catch (e) {
      console.log('Error in Login');
      Swal.fire({
        position: 'bottom-right',
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during login. Please try again later.',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <div className='row colorr' style={{ backgroundColor: "rgba(7, 7, 7, 0.9)" }}>
          <div className='col pt-5 py-3 '></div>
        </div>
        <div className='row bg-warning-subtle pt-3 pb-5 '>
          <div className='col-5 mt-5'>
            <div className='col-12 mt-4'>
              <div className='row justify-content-center'>
                <div className='col-3 display-5'>Cresta</div>
              </div>
            </div>
            <div className='row justify-content-center mt-3'>
              <div className='col-10 '>
                <div className='text h1 text-bold text-dark'>Grow your Construction business in a way that's easy and empowering</div>
              </div>
            </div>
            <div className='row justify-content-center mt-5 pt-2'>
              <div className='col-10 '>
                <div className='text text-bold fs-5 text-dark'>Welcome aboard! We're excited to have you as part of our vendor community. Let’s grow your business together!</div>
              </div>
            </div>
          </div>
          <div className='col-7'>
            <div className="container-fluid mt-5">
              <div className="row justify-content-center pb-5">
                <div className="col">
                  <div className="custom-form p-4">
                    <div className="form-heading text-center">Welcome Vendor</div>
                    <form onSubmit={handleLogin}>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='row justify-content-center'>
                            <div className='col-6'>
                              <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                              <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className='row justify-content-center'>
                            <div className='col-6'>
                              <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                              <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        {/* <div className='col-12'>
                          <div className='row justify-content-center'>
                            <div className='col-6'>
                              <div className="form-check mb-3 mt-3">
                                <input className="form-check-input" type="checkbox" id="terms" />
                                <label className="form-check-label" htmlFor="terms">Remember Me</label>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className='col-12 pt-3'>
                          <div className='row justify-content-center'>
                            <div className='col-1'>
                              <button type="submit" className="btn btn-primary btn-sm">Login</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='row justify-content-center mt-3'>
                        <div className='col-4 mx-auto'>
                          <div className=''>Register as Vendor !<Link type="submit" to="/vendors" className="text-success ms-2">Register</Link></div>
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
    </div>
  );
}

export default VendorLogin;
