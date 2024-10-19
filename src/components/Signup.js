import React, { useState } from 'react';
import signup from '../assests/images/login.jpg';
import { Link } from 'react-router-dom';
import vendor from '../assests/images/vendor.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import Navbar from './Navbar';

function Signup() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting:', { name, phone, email, password });

        try {

            const response = await fetch('http://localhost:3003/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, email, password }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('User registered:', data);
                 Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You have successfully registered!',
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                }).then(() => {
                    
                    navigate('/login');
                });
            } else {
                console.log('Registration failed:', data.message);

                
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: data.message || 'Something went wrong. Please try again.',
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error registering user:', error.message);

           Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while registering. Please try again later.',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <div className='row  colorr' style={{ backgroundColor: 'rgba(7, 7, 7, 0.9)' }}>
                    <div className='col pt-5 py-3 '></div>
                </div>
                <div className='row   pt-3 '>
                    <div className='col-2 ms-auto  '>
                        <Link to='/vendorl'>
                            <div className='text d-inline-flex focus-ring py-0 px-2 text-decoration-none border rounded-2 alert alert-secondary'>
                                <div className='my-auto'>Are you a Vendor</div>
                                <img src={vendor} alt='vendor' className='ms-2 vendor ' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container mt-0 pt-0 mb-5'>
                <div className='row  justify-content-center '>
                    <div className='col-7'>
                        <div className='row'>
                            <div className='col'>
                                <img src={signup} alt='login' className='img img-fluid'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-5 pt-5'>
                        <div className='row justify-content-center'>
                            <div className='col border border-1 rounded-4'>
                                <form className='' onSubmit={handleSubmit}>
                                    <div className='row jsutify-content-center '>
                                        <div className='col-4 mx-auto '>
                                            <h3>Sign Up</h3>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <label>Name:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Enter Name'
                                            name='name'
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Phone Number:</label>
                                        <input
                                            type='tel'
                                            className='form-control'
                                            placeholder='Enter Phone Number'
                                            name='phone'
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label>Email address</label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            placeholder='Enter email'
                                            name='email'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label>Password</label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            placeholder='Enter password'
                                            name='password'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className='row jsutify-content-center'>
                                        <div className='col-3 mx-auto'>
                                            <button className='btn btn-success btn-sm'>Register</button>
                                        </div>
                                    </div>

                                    <div className='row jsutify-content-center mt-4 pt-2 '>
                                        <div className='col-7 mx-auto'>
                                            <div className=''>
                                                Already have an Account!{' '}
                                                <Link type='submit' to='/login' className='text-primary ms-2 text-success'>
                                                    Login
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

export default Signup;
