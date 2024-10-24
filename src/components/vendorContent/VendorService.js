import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useVendor } from '../VendorContext';

function VendorService() {
    const [company, setCompany] = useState('');
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [about, setAbout] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);
    const { fname, lname, phone, email } = useVendor();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(`http://localhost:3003/service?fname=${fname}`);
                const data = await response.json();

                if (data.success) {
                    setServices(data.services);
                } else {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.message || 'Could not fetch services.',
                    });
                }
            } catch (error) {
                console.error('Error fetching services:', error);
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred while fetching services!',
                });
            }
        };

        fetchServices();
    }, [fname]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('company', company);
        formData.append('about', about);
        formData.append('year', year);
        formData.append('type', type);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }
        if (image1) {
            formData.append('image1', image1);
        }
        console.log(formData)

        try {
            const response = editingService
                ? await fetch(`http://localhost:3003/service/${editingService._id}`, {
                      method: 'PUT',
                      body: formData,
                  })
                : await fetch('http://localhost:3003/service', {
                      method: 'POST',
                      body: formData,
                  });

            const data = await response.json();
            console.log(data);

            if (data.success) {
                await Swal.fire({
                    icon: 'success',
                    title: editingService ? 'Service Updated Successfully!' : 'Service Added Successfully!',
                    text: 'The service has been saved to the database.',
                });

                // Update services state directly
                if (editingService) {
                    setServices((prevServices) =>
                        prevServices.map((service) =>
                            service._id === editingService._id ? { ...service, ...data.service } : service
                        )
                    );
                } else {
                    setServices((prevServices) => [...prevServices, data.service]);
                }

                resetForm();
            } else {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.message || 'Something went wrong!',
                });
            }
        } catch (e) {
            console.error('Error in saving service:', e);
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while saving the service!',
            });
        }
    };

    const resetForm = () => {
        setCompany('');
        setAbout('');
        setYear('');
        setType('');
        setPrice('');
        setImage(null);
        setImage1(null);
        setEditingService(null);
    };

    const handleEdit = (service) => {
        setCompany(service.company);
        setAbout(service.about);
        setYear(service.year);
        setType(service.type);
        setPrice(service.price);
        setEditingService(service);
    };

    const handleDelete = async (id) => {
        const confirmed = await Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        });

        if (confirmed.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:3003/service/${id}`, {
                    method: 'DELETE',
                });
                const data = await response.json();

                if (data.success) {
                    await Swal.fire('Deleted!', 'The service has been deleted.', 'success');
                    setServices((prevServices) => prevServices.filter((service) => service._id !== id));
                } else {
                    await Swal.fire('Error!', data.message || 'Failed to delete the service.', 'error');
                }
            } catch (e) {
                console.error('Error deleting service:', e);
                await Swal.fire('Error!', 'An error occurred while deleting the service.', 'error');
            }
        }
    };

    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className='card shadow-lg' style={{ width: "480px", borderRadius: "15px", overflow: "hidden" }}>
                            <div className="card-header text-center bg-primary text-white">
                                <h5>{editingService ? 'Update Service' : 'Add Service'}</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label className='form-label fw-bold'>Organisation Name:</label>
                                        <input
                                            type='text'
                                            name='company'
                                            id="company"
                                            className='form-control'
                                            onChange={(e) => setCompany(e.target.value)}
                                            value={company}
                                            required
                                            placeholder="Enter organisation name"
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label className='form-label fw-bold'>Image:</label>
                                        <input
                                            type='file'
                                            name='image'
                                            id="image"
                                            className='form-control'
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label className='form-label fw-bold'>Image 1:</label>
                                        <input
                                            type='file'
                                            name='image1'
                                            id="image1"
                                            className='form-control'
                                            onChange={(e) => setImage1(e.target.files[0])}
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label className='form-label fw-bold'>About:</label>
                                        <input
                                            type='text'
                                            name='about'
                                            id="about"
                                            className='form-control'
                                            onChange={(e) => setAbout(e.target.value)}
                                            value={about}
                                            required
                                            placeholder="Enter a brief description"
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label className='form-label fw-bold'>Type:</label>
                                        <select
                                            name='type'
                                            id="type"
                                            className='form-select'
                                            onChange={(e) => setType(e.target.value)}
                                            required
                                        >
                                            <option value="" disabled selected >Choose..</option>
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
                                            <option value="InteriorDesign">Interior</option>
                                            <option value="ExteriorDesign">Exterior</option>
                                            <option value="Architecture">Architecture</option>
                                            <option value="Renovation">Renovation</option>
                                        </select>
                                    </div>

                                    <div className='mb-3'>
                                        <label className='form-label fw-bold'>Year From:</label>
                                        <input
                                            type='month'
                                            name='year'
                                            id="year"
                                            className='form-control'
                                            onChange={(e) => setYear(e.target.value)}
                                            value={year}
                                            required
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label className='form-label fw-bold'>Price Per Square Meter:</label>
                                        <input
                                            type='tel'
                                            name='price'
                                            id="price"
                                            className='form-control'
                                            onChange={(e) => setPrice(e.target.value)}
                                            value={price}
                                            required
                                            placeholder="Enter price"
                                        />
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <button className='btn btn-success' type="submit">
                                            {editingService ? 'Update' : 'Add'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center my-5'>
                    <div className='col-12'>
                        {services.length > 0 ? (
                            <div className='row'>
                                {services.map((service) => (
                                    <div className='col-3 mb-4' key={service._id}>
                                        <div className='card' style={{ width: "250px" }}>
                                            {service.image && (
                                                <img
                                                    className='card-img-top img-fluid'
                                                    src={service.image}
                                                    alt={service.name}
                                                    style={{ maxWidth: "300px", height: '180px' }}
                                                />
                                            )}
                                            <div className='card-body text-center'>
                                                <p className='card-title h4'>{service.type}</p>
                                                <button className='btn btn-warning btn-sm me-2' onClick={() => handleEdit(service)}>Edit</button>
                                                <button className='btn btn-danger btn-sm ms-5' onClick={() => handleDelete(service._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No services available.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VendorService;
