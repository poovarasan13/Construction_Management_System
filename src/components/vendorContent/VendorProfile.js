import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVendor } from '../VendorContext';

function VendorProfile() {
    const {
        fname, lname, phone, email, state, company, id,
        setvendorName, setvendorNamee, setPhone,
        setEmailV, setPasswordV, setCompany, setState, setCategory, setId
    } = useVendor();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [updatedDetails, setUpdatedDetails] = useState({
        fname, lname, phone, email, state, company
    });
    
    // State for alert
    const [alert, setAlert] = useState({ show: false, message: '' });

    useEffect(() => {
        setUpdatedDetails({ fname, lname, phone, email, state, company });
    }, [fname, lname, phone, email, state, company]);

    const logOut = () => {
        setvendorName('');
        setvendorNamee('');
        setPhone('');
        setEmailV('');
        setPasswordV('');
        setCompany('');
        setCategory('');
        setState('');
        setId('');
        navigate('/home');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Updating vendor details:', updatedDetails);

        try {
            const response = await fetch(`http://localhost:3003/vendorupdate/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDetails),
            });

            const data = await response.json();
            if (data.success) {
                console.log('Vendor details updated successfully:', data);
                setIsEditing(false);
                setAlert({ show: true, message: 'Vendor details updated successfully!' });

               
                setTimeout(() => {
                    setAlert({ show: false, message: '' });
                }, 3000);
            } else {
                console.log('Update failed:', data.message);
                setAlert({ show: true, message: 'Update failed: ' + data.message });

 
                setTimeout(() => {
                    setAlert({ show: false, message: '' });
                }, 3000);
            }
        } catch (error) {
            console.error('Error updating vendor details:', error.message);
            setAlert({ show: true, message: 'Error updating vendor details.' });

            
            setTimeout(() => {
                setAlert({ show: false, message: '' });
            }, 3000);
        }
    };

    return (
        <div className="container rounded  mb-5">
            <div className="row ms-5">
                <div className="col-md-10 border-right ms-5">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                            {!isEditing && (
                                <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
                            )}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="First Name" 
                                        name="fname"
                                        value={updatedDetails.fname} 
                                        onChange={handleChange} 
                                        readOnly={!isEditing} 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Surname</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Surname" 
                                        name="lname"
                                        value={updatedDetails.lname} 
                                        onChange={handleChange} 
                                        readOnly={!isEditing} 
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter phone number" 
                                        name="phone"
                                        value={updatedDetails.phone} 
                                        onChange={handleChange} 
                                        readOnly={!isEditing} 
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter email ID" 
                                        name="email"
                                        value={updatedDetails.email} 
                                        onChange={handleChange} 
                                        readOnly={!isEditing} 
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Company Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Company Name" 
                                        name="company"
                                        value={updatedDetails.company} 
                                        onChange={handleChange} 
                                        readOnly={!isEditing} 
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">State</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="State" 
                                        name="state"
                                        value={updatedDetails.state} 
                                        onChange={handleChange} 
                                        readOnly={!isEditing} 
                                    />
                                </div>
                            </div>
                            {isEditing && (
                                <div className="mt-5 text-center">
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </div>
                            )}
                        </form>
                        <div className="mt-5 text-center">
                            <button className="btn btn-danger" onClick={logOut}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alert */}
            {alert.show && (
                <div 
                    className="alert alert-success" 
                    style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
                    role="alert"
                >
                    {alert.message}
                </div>
            )}
        </div>
    );
}

export default VendorProfile;
