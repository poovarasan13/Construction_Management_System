import React from 'react'
import { useUser } from '../UserContext'
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const {username,setUsername,setEmail,setPhone,useremail,userphone}=useUser();
    const navigate=useNavigate();

    const logOut= ()=>{
     setUsername('');
     setEmail('');
     setPhone('');
     navigate('/home');

    }
    return (
        <>
        <div className='container'>
            <div className='row p-5'>
           

                <div className='row py-2'>
                            <div className='col '>
                                Name : {username}
                            </div>
                </div>

                <div className='row py-2'>
                            <div className='col '>
                                Phone : {userphone}
                            </div>
                </div>

                <div className='row py-2'>
                            <div className='col '>
                                Email : {useremail}
                            </div>
                </div>

             </div>
             <div className='row justify-content-center '>
                <div className='col-8'>
                    <div className='btn btn-sm  btn-danger' onClick={logOut}>Logout</div>
                </div>
           </div>

        </div>
        </>
    )
}

export default UserProfile
