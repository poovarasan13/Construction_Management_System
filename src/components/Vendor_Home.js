import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import VendorRequest from './vendorContent/VendorRequest';
import VendorService from './vendorContent/VendorService';
import VendorProgress from './vendorContent/VendorProgress';
import VendorProfile from './vendorContent/VendorProfile';
import Navbar from './Navbar';
import CompletedProgress from './vendorContent/CompletedProgress';

function Vendor_Home() {
    return (
        <>
        <Navbar/>
            <div className='container-fluid  bg-warning-subtle'>

            <div className='row  colorr' style={{backgroundColor: "rgba(7, 7, 7, 0.9)"}}>
            <div className='col pt-5 py-3 '></div>
          </div>
                <div className='row'>
                    <div className='col-2'>
                        <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-2 ">
                            <nav className="nav nav-pills flex-column">

                            <div className='row border border-top-0 border-start-0 border-end-0 ps-3 pe-0   justify-content-center bg-warning py-2'>
                                                                   <div className='col   py-2'>
                                    <Link to='/vendorhome/profile' className='text-decoration-none text-dark  px-5 py-2  '>
                                        Profile
                                    </Link>
                                </div>
                               </div>



                               <div className='row border border-1 ps-3 pe-0 border-top-0 border-start-0 border-end-0 bg-warning py-2'>
                                                                   <div className='col  py-2 '>
                                    <Link to='/vendorhome/service' className='text-decoration-none text-dark  px-5 py-2  '>
                                        Services
                                    </Link>
                                </div>
                               </div> 

                                <div className='row border  ps-3 pe-0   bg-warning py-2 border-top-0 border-start-0 border-end-0 '>
                                                                   <div className='col py-2  '>
                                    <Link to='/vendorhome/request' className='text-decoration-none text-dark   px-5 py-2 '>
                                        Request
                                    </Link>
                                </div>
                               </div>

                               
                               <div className='row border border-1 ps-3 pe-0  border-top-0 border-start-0 border-end-0  bg-warning py-2'>
                                                                   <div className='col   py-2'>
                                    <Link to='/vendorhome/progress' className='text-decoration-none text-dark  px-5 py-2 '>
                                        Progress
                                    </Link>
                                </div>
                               </div>
                               <div className='row border border-1  pe-0  border-top-0 border-start-0 border-end-0  bg-warning py-2'>
                                                                   <div className='col ms-3  py-2'>
                                    <Link to='/vendorhome/complete' className='text-decoration-none text-dark  px-auto py-2 '>
                                       Complteted Progress
                                    </Link>
                                </div>
                               </div>
                               
                            </nav>
                        </nav>
                    </div>

                    <div className='col-10'>
           
                        <Routes> 
                            <Route path="/" element={<VendorProfile />} />
                            <Route path="/request" element={<VendorRequest />} />
                            <Route path="/service" element={<VendorService />} />
                            <Route path="/progress" element={<VendorProgress/>} />
                           <Route path="/complete" element={<CompletedProgress/>}/>
                            <Route path="/profile" element={<VendorProfile/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vendor_Home;
