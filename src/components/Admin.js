import React from 'react'
import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import AdminHome from './admin/AdminHome';
import AdminService from './admin/AdminService';
import AdminComplaint from './admin/AdminComplaint';

function Admin() {
    return (
        <>
    
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-3'>
                    <h2>Admin Page</h2>
                </div>
            </div>
            
            {/* < className='container-fluid '> */}

    <div className='row'>
        <div className='col-2'>
            <nav id="navbar-example3" className="h-100    ">
                <nav className="nav nav-pills flex-column">
                    <div className='row border  ps-3 pe-0   bg-warning py-2 border-top-0 border-start-0 border-end-0 '>
                                                       <div className='col py-2  '>
                        <Link to='/admin/request' className='text-decoration-none text-dark   px-5 py-2 '>
                            Request
                        </Link>
                    </div>
                   </div>
                   <div className='row border border-1 ps-3 pe-0 border-top-0 border-start-0 border-end-0 bg-warning py-2'>
                                                       <div className='col  py-2 '>
                        <Link to='/admin/service' className='text-decoration-none text-dark  px-5 py-2  '>
                            Services
                        </Link>
                    </div>
                   </div> 
                   <div className='row border border-1 ps-3 pe-0  border-top-0 border-start-0 border-end-0  bg-warning py-2'>
                                                       <div className='col   py-2'>
                        <Link to='/admin/progress' className='text-decoration-none text-dark  px-5 py-2 '>
                            Progress
                        </Link>
                    </div>
                   </div>

                   <div className='row border border-top-0 border-start-0 border-end-0 ps-3 pe-0   justify-content-center bg-warning py-2'>
                                                       <div className='col   py-2'>
                        <Link to='/admin/complaint' className='text-decoration-none text-dark  px-5 py-2  '>
                            Complaint
                        </Link>
                    </div>
                   </div>
                </nav>
            </nav>
        </div>

        <div className='col-10'>

            <Routes> 
                <Route path="/" element={<AdminHome/>} />
                <Route path="/request" element={<AdminHome/>} />
                <Route path="/service" element={<AdminService/>} />
                <Route path="/progress" element={<AdminHome/>} />
               
                <Route path="/complaint" element={<AdminComplaint/>} />
            </Routes>
        </div>
    </div>

            
            
            
            
        </div></>
    )
}

export default Admin
