import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import login from '../assests/images/login.jpg';
import vendor from '../assests/images/vendor.png';
import Navbar from './Navbar';
import { useUser } from './UserContext';
import Swal from 'sweetalert2';

function Login() {
  const { setUsername, setEmail, setPhone } = useUser();
  const [email, setEmailInput] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setUsername(data.username);
        setEmail(data.useremail);
        setPhone(data.userphone);

        // SweetAlert toast for successful login
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
          toast: true,
          showConfirmButton: false,
          timer: 2000,
        });

        console.log("User login success and redirect to home page");
        navigate('/home');
      } else {
        Swal.fire({
          // position: 'bottom-left',
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
        // position: 'bottom-left',
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during login. Please try again later.',
        // toast: true,
        // showConfirmButton: false,
        // timer: 3000,
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
        <div className='row pt-3 '>
          <div className='col-2 ms-auto'>
            <Link to='/vendorl'>
              <div className='text d-inline-flex focus-ring py-0 px-2 text-decoration-none border rounded-2 alert alert-secondary'>
                <div className='my-auto'>Are you a Vendor</div>
                <img src={vendor} alt='vendor' className='ms-2 vendor' />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-7'>
            <div className='row'>
              <div className='col'>
                <img src={login} alt='login' className='img img-fluid'></img>
              </div>
            </div>
          </div>
          <div className='col-5 pt-5'>
            <div className='row justify-content-center'>
              <div className='col'>
                <form onSubmit={handleLogin}>
                  <div className='row justify-content-center'>
                    <div className='col-3 mx-auto'>
                      <h3>Sign In</h3>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => setEmailInput(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className='row justify-content-center'>
                    <div className='col-3 mx-auto'>
                      <button className='btn btn-success btn-sm'>
                        Login
                      </button>
                    </div>
                  </div>

                  <div className='row justify-content-center mt-4 pt-2'>
                    <div className='col-6 mx-auto'>
                      <div className=''>
                        Create an Account!<Link type="submit" to="/signup" className="text-success ms-2">
                          Signup
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
