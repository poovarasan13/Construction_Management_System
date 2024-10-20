import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserProfile from './userContent/UserProfile';
import UserRequest from './userContent/UserRequest';
import Navbar from './Navbar';
import UserProgress from './userContent/UserProgress';
import UserCompleted from './userContent/UserCompleted';

function UserAccount() {
    return (
        <>
        <Navbar/>
            <div className='container-fluid '>

            <div className='row  colorr' style={{backgroundColor: "rgba(7, 7, 7, 0.9)"}}>
            <div className='col pt-5 py-3 '></div>
          </div>
                <div className='row'>
                    <div className='col-2'>
                        <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-2 ">
                            <nav className="nav nav-pills flex-column">
                            <div className='row border border-top-0 border-start-0 border-end-0 ps-3 pe-0   justify-content-center bg-warning py-2'>
                                                                   <div className='col   py-2'>
                                    <Link to='/account/profile' className='text-decoration-none text-dark  px-5 py-2  '>
                                        Profile
                                    </Link>
                                </div>
                               </div>
                           
                               <div className='row border border-1 ps-3 pe-0  border-top-0 border-start-0 border-end-0  bg-warning py-2'>
                                                                   <div className='col   py-2'>
                                    <Link to='/account/request' className='text-decoration-none text-dark  px-5 py-2 '>
                                        Request
                                    </Link>
                                </div>
                               </div>

                               <div className='row border border-1 ps-3 pe-0  border-top-0 border-start-0 border-end-0  bg-warning py-2'>
                                                                   <div className='col   py-2'>
                                    <Link to='/account/progress' className='text-decoration-none text-dark  px-5 py-2 '>
                                        Progress
                                    </Link>
                                </div>
                               </div>

                               <div className='row border border-1 ps-3 pe-0  border-top-0 border-start-0 border-end-0  bg-warning py-2'>
                                                                   <div className='col   py-2'>
                                    <Link to='/account/complete' className='text-decoration-none text-dark  px-5 py-2 '>
                                        Complete
                                    </Link>
                                </div>
                               </div>

                                </nav>
                        </nav>
                    </div>

                    <div className='col-10'>
           
                        <Routes> 
                            <Route path="/" element={<UserProfile/>}/>
                            <Route path="/request" element={<UserRequest/>} />
                            <Route path="/progress" element={<UserProgress/>} />
                            <Route path="/profile" element={<UserProfile/>} />
                            <Route path="/complete" element={<UserCompleted/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserAccount;
